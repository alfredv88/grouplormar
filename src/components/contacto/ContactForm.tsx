"use client";

import React, { useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Crosshair, CheckCircle2, Loader2, AlertTriangle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const contactSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Ingrese un correo electrónico válido"),
    subject: z.string().min(1, "Seleccione una clasificación"),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactFormContent = () => {
    const t = useTranslations("ContactoPage");
    const searchParams = useSearchParams();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            subject: "PROYECTO INTEGRAL",
            message: "",
        },
    });

    const [isError, setIsError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState<string>("");

    useEffect(() => {
        const flota = searchParams.get("flota");
        const servicio = searchParams.get("servicio");

        if (flota) {
            setValue("subject", t("solicitudFlotaTitle"));
            setValue("message", t("solicitudFlotaBody", { item: decodeURIComponent(flota) }));
        } else if (servicio) {
            setValue("subject", t("servicioEspecializadoTitle"));
            setValue("message", t("servicioEspecializadoBody", { item: decodeURIComponent(servicio) }));
        }
    }, [searchParams, t, setValue]);

    const onSubmit = async (data: ContactFormData) => {
        try {
            setIsError(false);
            setErrorMessage("");
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const body = await response.json();
                const errMsg = body?.error || "Error al enviar";
                setIsError(true);
                setErrorMessage(errMsg);
                throw new Error(errMsg);
            }
        } catch (err: any) {
            setIsError(true);
            const errMsg = err?.message || "Error al enviar";
            setErrorMessage(errMsg);
            throw err;
        }
    };

    if (isSubmitSuccessful && !isError) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12 bg-white/[0.02] p-10 md:p-14 border border-white/10 flex flex-col items-center justify-center py-28 text-center"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-7l-gold/20 blur-2xl animate-pulse" />
                    <CheckCircle2 size={60} className="text-7l-gold relative z-10" />
                </div>
                <div className="space-y-3">
                    <h4 className="font-future text-2xl text-white uppercase tracking-widest">
                        Requerimiento Transmitido
                    </h4>
                    <p className="font-montserrat text-xs text-white/40 leading-relaxed uppercase tracking-widest max-w-xs">
                        Un especialista técnico revisará su solicitud y dará respuesta a la brevedad.
                    </p>
                </div>
                <button
                    onClick={() => { reset(); setIsError(false); }}
                    className="text-[10px] font-montserrat font-black uppercase tracking-[0.3em] text-7l-gold border border-7l-gold/30 px-6 py-3 hover:bg-7l-gold hover:text-7l-black transition-all duration-300"
                >
                    Enviar otra solicitud
                </button>
            </motion.div>
        );
    }

    return (
        <div className="space-y-12 bg-white/[0.02] p-10 md:p-14 border border-white/10 relative overflow-hidden group">

            {/* Tech Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-60 transition-opacity">
                <Crosshair size={40} className="text-7l-gold animate-spin-slow" />
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-6">
                    <h3 className="text-3xl md:text-4xl font-future uppercase text-white leading-none">
                        {t.rich("solicitudTecnica", {
                            gold: (chunks) => <span className="text-7l-gold">{chunks}</span>
                        })}
                    </h3>
                    <div className="lormar-line flex-1 opacity-30 group-hover:opacity-100 transition-opacity hidden sm:block"></div>
                </div>
                <p className="text-white/60 font-montserrat font-light text-sm max-w-md">
                    {t("formDescripcion")}
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                        <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-7l-gold/80 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-7l-gold rounded-full"></span> {t("nombreApellido")}
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            className="w-full bg-7l-black/50 border border-white/5 p-4 focus:outline-none focus:border-7l-gold transition-all font-montserrat text-white text-sm placeholder:text-white/20"
                            placeholder={t("ejNombre")}
                        />
                        {errors.name && (
                            <span className="font-montserrat text-[10px] text-red-400 mt-1 block">{errors.name.message}</span>
                        )}
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-7l-gold/80 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-7l-gold rounded-full"></span> {t("correoCorporativo")}
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            className="w-full bg-7l-black/50 border border-white/5 p-4 focus:outline-none focus:border-7l-gold transition-all font-montserrat text-white text-sm placeholder:text-white/20"
                            placeholder={t("ejCorreo")}
                        />
                        {errors.email && (
                            <span className="font-montserrat text-[10px] text-red-400 mt-1 block">{errors.email.message}</span>
                        )}
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-7l-gold/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-7l-gold rounded-full"></span> {t("clasificacionOperativa")}
                    </label>
                    <select
                        {...register("subject")}
                        className="w-full bg-7l-black border border-white/5 p-4 focus:outline-none focus:border-7l-gold transition-all font-montserrat text-white text-sm uppercase appearance-none cursor-pointer"
                    >
                        <option value="PROYECTO INTEGRAL">{t("opcionIntegral")}</option>
                        <option value="SOLICITUD DE FLOTA / EQUIPOS">{t("opcionFlota")}</option>
                        <option value="SERVICIO ESPECIALIZADO">{t("opcionServicio")}</option>
                        <option value="PROCURA INTERNACIONAL">{t("opcionProcura")}</option>
                        <option value="OTROS">{t("opcionOtros")}</option>
                    </select>
                    {errors.subject && (
                        <span className="font-montserrat text-[10px] text-red-400 mt-1 block">{errors.subject.message}</span>
                    )}
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-7l-gold/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-7l-gold rounded-full"></span> {t("especificacionesTecnicas")}
                    </label>
                    <textarea
                        {...register("message")}
                        rows={5}
                        className="w-full bg-7l-black/50 border border-white/5 p-4 focus:outline-none focus:border-7l-gold transition-all font-montserrat text-white text-sm placeholder:text-white/20 resize-none leading-relaxed"
                        placeholder={t("ejEspecificaciones")}
                    ></textarea>
                    {errors.message && (
                        <span className="font-montserrat text-[10px] text-red-400 mt-1 block">{errors.message.message}</span>
                    )}
                </div>

                <AnimatePresence>
                    {isError && (
                        <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-3 p-4 border border-red-500/30 bg-red-500/10 text-red-400"
                        >
                            <AlertTriangle size={16} />
                            <span className="font-montserrat text-xs uppercase tracking-widest">{errorMessage || "Error al enviar. Intente nuevamente o contáctenos directamente."}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group/btn relative px-10 py-6 bg-7l-gold text-7l-black hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 text-[11px] font-montserrat font-black uppercase tracking-[0.3em] w-full border-none disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <Loader2 size={18} className="animate-spin" />
                    ) : (
                        <>
                            <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            {t("transmitirRequerimiento")}
                        </>
                    )}
                </button>
            </form>

            {/* Subtle Design Accents */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/5 group-hover:border-7l-gold/40 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/5 group-hover:border-7l-gold/40 transition-all duration-700"></div>
        </div>
    );
};

const ContactForm = () => {
    return (
        <Suspense fallback={<div className="p-12 border border-white/10 animate-pulse bg-white/5 h-[600px]"></div>}>
            <ContactFormContent />
        </Suspense>
    );
};

export default ContactForm;

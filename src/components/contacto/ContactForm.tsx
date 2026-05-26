"use client";

import React, { useEffect, useState, Suspense } from "react";
import { Send, Crosshair } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

const ContactFormContent = () => {
    const t = useTranslations("ContactoPage");
    const searchParams = useSearchParams();
    const [asunto, setAsunto] = useState("PROYECTO INTEGRAL");
    const [detalles, setDetalles] = useState("");

    useEffect(() => {
        const flota = searchParams.get("flota");
        const servicio = searchParams.get("servicio");

        if (flota) {
            setAsunto(t("solicitudFlotaTitle"));
            setDetalles(t("solicitudFlotaBody", { item: decodeURIComponent(flota) }));
        } else if (servicio) {
            setAsunto(t("servicioEspecializadoTitle"));
            setDetalles(t("servicioEspecializadoBody", { item: decodeURIComponent(servicio) }));
        }
    }, [searchParams, t]);

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
            
            <form className="space-y-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                        <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-7l-gold/80 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-7l-gold rounded-full"></span> {t("nombreApellido")}
                        </label>
                        <input 
                            type="text" 
                            className="w-full bg-7l-black/50 border border-white/5 p-4 focus:outline-none focus:border-7l-gold transition-all font-montserrat text-white text-sm placeholder:text-white/20" 
                            placeholder={t("ejNombre")} 
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-7l-gold/80 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-7l-gold rounded-full"></span> {t("correoCorporativo")}
                        </label>
                        <input 
                            type="email" 
                            className="w-full bg-7l-black/50 border border-white/5 p-4 focus:outline-none focus:border-7l-gold transition-all font-montserrat text-white text-sm placeholder:text-white/20" 
                            placeholder={t("ejCorreo")} 
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-7l-gold/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-7l-gold rounded-full"></span> {t("clasificacionOperativa")}
                    </label>
                    <select 
                        value={asunto}
                        onChange={(e) => setAsunto(e.target.value)}
                        className="w-full bg-7l-black border border-white/5 p-4 focus:outline-none focus:border-7l-gold transition-all font-montserrat text-white text-sm uppercase appearance-none cursor-pointer"
                    >
                        <option value="PROYECTO INTEGRAL">{t("opcionIntegral")}</option>
                        <option value="SOLICITUD DE FLOTA / EQUIPOS">{t("opcionFlota")}</option>
                        <option value="SERVICIO ESPECIALIZADO">{t("opcionServicio")}</option>
                        <option value="PROCURA INTERNACIONAL">{t("opcionProcura")}</option>
                        <option value="OTROS">{t("opcionOtros")}</option>
                    </select>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-7l-gold/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-7l-gold rounded-full"></span> {t("especificacionesTecnicas")}
                    </label>
                    <textarea 
                        rows={5} 
                        value={detalles}
                        onChange={(e) => setDetalles(e.target.value)}
                        className="w-full bg-7l-black/50 border border-white/5 p-4 focus:outline-none focus:border-7l-gold transition-all font-montserrat text-white text-sm placeholder:text-white/20 resize-none leading-relaxed" 
                        placeholder={t("ejEspecificaciones")}
                    ></textarea>
                </div>

                <button type="button" className="group/btn relative px-10 py-6 bg-7l-gold text-7l-black hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 text-[11px] font-montserrat font-black uppercase tracking-[0.3em] w-full border-none">
                    <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /> 
                    {t("transmitirRequerimiento")}
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

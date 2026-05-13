'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, Send, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const contactSchema = z.object({
    name: z.string().min(2, 'El nombre es muy corto'),
    email: z.string().email('Email inválido'),
    subject: z.string().min(1, 'Selecciona un asunto'),
    message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ChatContactWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            subject: 'Consulta General',
        }
    });

    const onSubmit = async (data: ContactForm) => {
        try {
            setIsError(false);
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Error al enviar');

            setIsSuccess(true);
            reset();

            setTimeout(() => {
                setIsSuccess(false);
                setIsOpen(false);
            }, 3000);
        } catch (err) {
            setIsError(true);
        }
    };

    return (
        <>
            {/* GHOST MINIMALIST TRIGGER */}
            <div className="fixed bottom-8 right-8 z-[60]">
                <button
                    onClick={() => setIsOpen(true)}
                    className={`group relative w-12 h-12 flex items-center justify-center transition-all duration-700 ${isOpen ? 'scale-0 rotate-90' : 'scale-100 rotate-0'}`}
                >
                    {/* Solid Luxury Backdrop Container to guarantee contrast over white/light backgrounds */}
                    <div className="absolute inset-0 bg-7l-black/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-7l-gold/30 group-hover:border-7l-gold transition-all duration-700" />
                    <div className="absolute inset-0 bg-7l-black/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-7l-gold/30 rotate-45 group-hover:rotate-90 group-hover:border-7l-gold transition-all duration-1000" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-0.5">
                        <div className="w-1 h-1 bg-7l-gold rounded-full shadow-[0_0_8px_rgba(242,169,0,0.8)]" />
                        <span className="font-montserrat text-[6px] font-black text-white uppercase tracking-[0.25em] group-hover:text-7l-gold transition-colors">CONNECT</span>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-7l-gold/0 group-hover:bg-7l-gold/10 blur-xl transition-all duration-700 pointer-events-none" />
                </button>
            </div>

            {/* ATMOSPHERIC CONTACT PANEL */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-10">
                        {/* Backdrop with extreme blur and dark tint */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                        />

                        {/* Floating Ghost Card */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 20, opacity: 0, scale: 0.95 }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="relative w-full max-w-[550px] bg-7l-black/95 border border-7l-gold/30 backdrop-blur-2xl shadow-[0_0_100px_rgba(0,0,0,0.9)] overflow-hidden"
                        >
                            {/* Decorative Lines */}
                            <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-7l-gold to-transparent" />
                            <div className="absolute top-0 left-0 w-px h-20 bg-gradient-to-b from-7l-gold to-transparent" />
                            <div className="absolute bottom-0 right-0 w-20 h-px bg-gradient-to-l from-7l-gold to-transparent" />
                            <div className="absolute bottom-0 right-0 w-px h-20 bg-gradient-to-t from-7l-gold to-transparent" />

                            {/* Header */}
                            <div className="p-8 md:p-12 pb-6 flex items-start justify-between border-b border-white/10 bg-white/[0.02]">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-[2px] bg-7l-gold" />
                                        <span className="font-montserrat text-[9px] font-black text-7l-gold uppercase tracking-[0.5em]">ENLACE OPERATIVO</span>
                                    </div>
                                    <h3 className="font-montserrat font-black text-3xl text-white uppercase tracking-tighter leading-none">
                                        CONTACTO <br />
                                        <span className="text-7l-gold">DIRECTO</span>
                                    </h3>
                                </div>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="p-3 bg-white/10 hover:bg-7l-gold transition-colors text-white hover:text-7l-black"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Main Body */}
                            <div className="p-8 md:p-12 pt-8 space-y-8">
                                {isSuccess ? (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="py-20 flex flex-col items-center text-center space-y-8"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-7l-gold/20 blur-2xl animate-pulse" />
                                            <CheckCircle2 size={60} className="text-7l-gold relative z-10" />
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-montserrat font-black text-2xl text-white uppercase tracking-tighter">DATOS TRANSMITIDOS</h4>
                                            <p className="font-montserrat text-xs text-white/40 leading-relaxed uppercase tracking-widest">Un especialista técnico procesará su solicitud.</p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="block font-montserrat text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em]">Nombre</label>
                                                    <input 
                                                        {...register('name')}
                                                        className="w-full bg-white/5 border border-white/15 px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-7l-gold focus:bg-white/10 transition-all placeholder:text-zinc-500"
                                                        placeholder="S. APELLIDO"
                                                    />
                                                    {errors.name && <span className="font-montserrat text-[10px] text-red-400 mt-1 block">{errors.name.message}</span>}
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block font-montserrat text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em]">Email</label>
                                                    <input 
                                                        {...register('email')}
                                                        type="email"
                                                        className="w-full bg-white/5 border border-white/15 px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-7l-gold focus:bg-white/10 transition-all placeholder:text-zinc-500"
                                                        placeholder="CORP@MAIL.COM"
                                                    />
                                                    {errors.email && <span className="font-montserrat text-[10px] text-red-400 mt-1 block">{errors.email.message}</span>}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="block font-montserrat text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em]">Departamento</label>
                                                <select 
                                                    {...register('subject')}
                                                    className="w-full bg-7l-black border border-white/15 px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-7l-gold transition-all"
                                                >
                                                    <option value="Consulta General">CONSULTA GENERAL</option>
                                                    <option value="Operaciones">OPERACIONES</option>
                                                    <option value="Ingeniería">INGENIERÍA</option>
                                                </select>
                                                {errors.subject && <span className="font-montserrat text-[10px] text-red-400 mt-1 block">{errors.subject.message}</span>}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="block font-montserrat text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em]">Mensaje</label>
                                                <textarea 
                                                    {...register('message')}
                                                    rows={4}
                                                    className="w-full bg-white/5 border border-white/15 px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-7l-gold focus:bg-white/10 transition-all placeholder:text-zinc-500 resize-none"
                                                    placeholder="REQUERIMIENTO TÉCNICO..."
                                                />
                                                {errors.message && <span className="font-montserrat text-[10px] text-red-400 mt-1 block">{errors.message.message}</span>}
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-5 bg-7l-gold hover:bg-7l-gold/90 text-7l-black font-montserrat font-black text-[12px] tracking-[0.4em] uppercase flex items-center justify-center gap-4 transition-all duration-300 shadow-[0_4px_20px_rgba(242,169,0,0.4)] hover:scale-[1.01] active:scale-[0.99]"
                                        >
                                            {isSubmitting ? (
                                                <Loader2 className="animate-spin text-7l-black" size={18} />
                                            ) : (
                                                <>
                                                    <span>ENVIAR REQUERIMIENTO</span>
                                                    <ArrowRight size={16} className="text-7l-black" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}


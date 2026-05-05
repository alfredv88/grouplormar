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
            <div className="fixed bottom-10 right-10 z-[60]">
                <button
                    onClick={() => setIsOpen(true)}
                    className={`group relative w-16 h-16 flex items-center justify-center transition-all duration-700 ${isOpen ? 'scale-0 rotate-90' : 'scale-100 rotate-0'}`}
                >
                    {/* Rotating Frames */}
                    <div className="absolute inset-0 border border-white/5 group-hover:border-7l-gold/30 transition-all duration-700" />
                    <div className="absolute inset-0 border border-white/5 rotate-45 group-hover:rotate-90 group-hover:border-7l-gold/30 transition-all duration-1000" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-1">
                        <div className="w-1 h-1 bg-7l-gold rounded-full" />
                        <span className="font-montserrat text-[7px] text-white/40 uppercase tracking-[0.3em] group-hover:text-white transition-colors">CONNECT</span>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-7l-gold/0 group-hover:bg-7l-gold/5 blur-xl transition-all duration-700" />
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
                            className="relative w-full max-w-[500px] bg-7l-black/40 border border-white/5 backdrop-blur-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden"
                        >
                            {/* Decorative Lines */}
                            <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-7l-gold/50 to-transparent" />
                            <div className="absolute top-0 left-0 w-px h-20 bg-gradient-to-b from-7l-gold/50 to-transparent" />
                            <div className="absolute bottom-0 right-0 w-20 h-px bg-gradient-to-l from-white/10 to-transparent" />
                            <div className="absolute bottom-0 right-0 w-px h-20 bg-gradient-to-t from-white/10 to-transparent" />

                            {/* Header */}
                            <div className="p-12 pb-6 flex items-start justify-between">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-[1px] bg-7l-gold" />
                                        <span className="font-montserrat text-[9px] font-bold text-7l-gold uppercase tracking-[0.5em]">ENLACE OPERATIVO</span>
                                    </div>
                                    <h3 className="font-montserrat font-black text-3xl text-white uppercase tracking-tighter leading-none">
                                        CONTACTO <br />
                                        <span className="text-white/20">DIRECTO</span>
                                    </h3>
                                </div>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="p-4 bg-white/5 hover:bg-white/10 transition-colors text-white/40 hover:text-white"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Main Body */}
                            <div className="p-12 pt-6 space-y-10">
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
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                                        <div className="space-y-8">
                                            <div className="grid grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="block font-montserrat text-[8px] font-bold text-white/20 uppercase tracking-[0.3em]">Nombre</label>
                                                    <input 
                                                        {...register('name')}
                                                        className="w-full bg-transparent border-b border-white/5 py-2 text-white font-montserrat text-sm focus:outline-none focus:border-7l-gold/50 transition-colors placeholder:text-white/5"
                                                        placeholder="S. APELLIDO"
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="block font-montserrat text-[8px] font-bold text-white/20 uppercase tracking-[0.3em]">Email</label>
                                                    <input 
                                                        {...register('email')}
                                                        type="email"
                                                        className="w-full bg-transparent border-b border-white/5 py-2 text-white font-montserrat text-sm focus:outline-none focus:border-7l-gold/50 transition-colors placeholder:text-white/5"
                                                        placeholder="CORP@MAIL.COM"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="block font-montserrat text-[8px] font-bold text-white/20 uppercase tracking-[0.3em]">Departamento</label>
                                                <select 
                                                    {...register('subject')}
                                                    className="w-full bg-transparent border-b border-white/5 py-2 text-white font-montserrat text-sm focus:outline-none focus:border-7l-gold/50 transition-colors appearance-none"
                                                >
                                                    <option value="Consulta General" className="bg-7l-black">CONSULTA GENERAL</option>
                                                    <option value="Operaciones" className="bg-7l-black">OPERACIONES</option>
                                                    <option value="Ingeniería" className="bg-7l-black">INGENIERÍA</option>
                                                </select>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="block font-montserrat text-[8px] font-bold text-white/20 uppercase tracking-[0.3em]">Mensaje</label>
                                                <textarea 
                                                    {...register('message')}
                                                    rows={3}
                                                    className="w-full bg-transparent border-b border-white/5 py-2 text-white font-montserrat text-sm focus:outline-none focus:border-7l-gold/50 transition-colors placeholder:text-white/5 resize-none"
                                                    placeholder="REQUERIMIENTO TÉCNICO..."
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group w-full py-6 border border-white/5 hover:border-7l-gold/50 transition-all duration-700 flex items-center justify-center gap-6 overflow-hidden relative"
                                        >
                                            <div className="absolute inset-0 bg-7l-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                                            {isSubmitting ? (
                                                <Loader2 className="animate-spin text-7l-gold" size={16} />
                                            ) : (
                                                <>
                                                    <span className="relative z-10 font-montserrat text-[9px] font-black uppercase tracking-[0.5em] text-white/40 group-hover:text-7l-gold transition-colors">
                                                        ENVIAR REQUERIMIENTO
                                                    </span>
                                                    <ArrowRight size={14} className="relative z-10 text-white/20 group-hover:text-7l-gold group-hover:translate-x-2 transition-all" />
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


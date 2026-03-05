'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MessageCircle, X, Send, CheckCircle2, Loader2, Construction, Headphones, UserCheck } from 'lucide-react';

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
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {isOpen && (
                <div className="mb-4 w-[350px] sm:w-[400px] bg-white rounded-none shadow-none overflow-hidden border border-black">
                    {/* Header */}
                    <div className="bg-black p-4 text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-yellow text-black rounded-none flex items-center justify-center border border-brand-yellow">
                                <Construction size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm uppercase">Asistente Lormar</h3>
                                <p className="text-xs text-white flex items-center gap-1">
                                    En línea
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-white hover:text-black transition-none"
                            aria-label="Cerrar"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Content / Form */}
                    <div className="p-5 max-h-[500px] overflow-y-auto bg-white border-x border-b border-black">
                        {isSuccess ? (
                            <div className="py-10 text-center space-y-4">
                                <div className="flex justify-center">
                                    <CheckCircle2 size={64} className="text-black" />
                                </div>
                                <h4 className="text-xl font-bold text-black uppercase">¡Mensaje enviado!</h4>
                                <p className="text-black text-sm">Gracias por contactarnos. Te responderemos a la brevedad posible.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <p className="text-sm text-black mb-2 italic">
                                    Escribe tus datos y deja tu consulta.
                                </p>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase font-bold text-black ml-1">Nombre Completo</label>
                                    <input
                                        {...register('name')}
                                        placeholder="Ej. Juan Pérez"
                                        className={`w-full p-2 rounded-none border border-black bg-white focus:outline-none focus:bg-black focus:text-white transition-none text-sm ${errors.name ? 'bg-black text-white' : ''
                                            }`}
                                    />
                                    {errors.name && <p className="text-[10px] text-black font-bold ml-1 uppercase">{errors.name.message}</p>}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase font-bold text-black ml-1">Correo Electrónico</label>
                                    <input
                                        {...register('email')}
                                        type="email"
                                        placeholder="ejemplo@correo.com"
                                        className={`w-full p-2 rounded-none border border-black bg-white focus:outline-none focus:bg-black focus:text-white transition-none text-sm ${errors.email ? 'bg-black text-white' : ''
                                            }`}
                                    />
                                    {errors.email && <p className="text-[10px] text-black font-bold ml-1 uppercase">{errors.email.message}</p>}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase font-bold text-black ml-1">Servicio de interés</label>
                                    <select
                                        {...register('subject')}
                                        className="w-full p-2 rounded-none border border-black bg-white focus:outline-none text-sm appearance-none"
                                    >
                                        <option value="Consulta General">Consulta General</option>
                                        <option value="Automatización Industrial">Automatización Industrial</option>
                                        <option value="Montaje Industrial">Montaje Industrial</option>
                                        <option value="Tableros Eléctricos">Tableros Eléctricos</option>
                                        <option value="Mantenimiento">Mantenimiento</option>
                                    </select>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase font-bold text-black ml-1">Tu Mensaje</label>
                                    <textarea
                                        {...register('message')}
                                        rows={3}
                                        placeholder="¿En qué podemos ayudarte?"
                                        className={`w-full p-2 rounded-none border border-black bg-white focus:outline-none focus:bg-black focus:text-white transition-none text-sm resize-none ${errors.message ? 'bg-black text-white' : ''
                                            }`}
                                    />
                                    {errors.message && <p className="text-[10px] text-black font-bold ml-1 uppercase">{errors.message.message}</p>}
                                </div>

                                {isError && (
                                    <p className="text-xs text-white bg-black p-2 rounded-none border border-black">
                                        Error al enviar. Inténtalo de nuevo.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 rounded-none transition-none flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="animate-spin" size={18} />
                                    ) : (
                                        <>
                                            <span className="uppercase tracking-widest">Enviar consulta</span>
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-2xl ${isOpen
                    ? 'bg-black border-white text-white rotate-90'
                    : 'bg-black border-brand-yellow text-brand-yellow hover:scale-110 shadow-[0_0_20px_rgba(242,169,0,0.3)]'
                    }`}
            >
                {isOpen ? <X size={24} /> : <Headphones size={28} className="animate-pulse" />}
            </button>
        </div>
    );
}

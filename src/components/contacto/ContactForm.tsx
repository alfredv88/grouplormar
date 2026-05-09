"use client";

import React from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
    return (
        <div className="space-y-12 bg-white/[0.02] p-12 border border-white/10 relative overflow-hidden group">
            
            <div className="space-y-8">
                <div className="flex items-center gap-6">
                    <h3 className="text-3xl font-future uppercase text-white leading-none">
                        Solicitud Técnica
                    </h3>
                    <div className="lormar-line flex-1 opacity-30 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <p className="text-white/60 font-montserrat font-light text-sm max-w-md">
                    Complete el siguiente formulario para que nuestro departamento de ingeniería analice su requerimiento operativo.
                </p>
            </div>
            
            <form className="space-y-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                        <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-brand-yellow/60">Nombre y Apellido</label>
                        <input 
                            type="text" 
                            className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-brand-yellow transition-all font-montserrat text-white text-sm placeholder:text-white/10" 
                            placeholder="EJ: ING. JUAN PÉREZ" 
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-brand-yellow/60">Correo Corporativo</label>
                        <input 
                            type="email" 
                            className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-brand-yellow transition-all font-montserrat text-white text-sm placeholder:text-white/10" 
                            placeholder="CORREO@EMPRESA.COM" 
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-brand-yellow/60">Área de Interés</label>
                    <select className="w-full bg-brand-black border-b border-white/10 py-4 focus:outline-none focus:border-brand-yellow transition-all font-montserrat text-white text-sm uppercase appearance-none cursor-pointer">
                        <option>Montaje Mecánico</option>
                        <option>Obras Civiles</option>
                        <option>Movimiento de Tierra</option>
                        <option>Procura Internacional</option>
                        <option>Otros</option>
                    </select>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-brand-yellow/60">Descripción del Proyecto</label>
                    <textarea 
                        rows={4} 
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-brand-yellow transition-all font-montserrat text-white text-sm placeholder:text-white/10 resize-none" 
                        placeholder="ALCANCE, UBICACIÓN Y TIEMPOS ESTIMADOS..."
                    ></textarea>
                </div>

                <button className="group/btn relative px-10 py-6 bg-brand-yellow text-brand-black hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 text-[11px] font-montserrat font-black uppercase tracking-[0.3em] w-full">
                    <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /> 
                    Enviar Requerimiento
                </button>
            </form>
            
            {/* Subtle Design Accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/5 group-hover:border-brand-yellow/40 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/5 group-hover:border-brand-yellow/40 transition-all duration-700"></div>
        </div>
    );
};

export default ContactForm;

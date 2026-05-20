"use client";

import React, { useEffect, useState, Suspense } from "react";
import { Send, Crosshair } from "lucide-react";
import { useSearchParams } from "next/navigation";

const ContactFormContent = () => {
    const searchParams = useSearchParams();
    const [asunto, setAsunto] = useState("PROYECTO INTEGRAL");
    const [detalles, setDetalles] = useState("");

    useEffect(() => {
        const flota = searchParams.get("flota");
        const servicio = searchParams.get("servicio");

        if (flota) {
            setAsunto("SOLICITUD DE FLOTA / EQUIPOS");
            setDetalles(`Requerimiento de disponibilidad para: ${decodeURIComponent(flota)}.\n\nPor favor, contactarme para detallar alcance, ubicación de la obra y fechas estimadas.`);
        } else if (servicio) {
            setAsunto("SERVICIO ESPECIALIZADO");
            setDetalles(`Requerimiento de asesoría para: ${decodeURIComponent(servicio)}.\n\nPor favor, contactarme para detallar alcance, ubicación de la obra y requerimientos técnicos.`);
        }
    }, [searchParams]);

    return (
        <div className="space-y-12 bg-white/[0.02] p-10 md:p-14 border border-white/10 relative overflow-hidden group">
            
            {/* Tech Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-60 transition-opacity">
                <Crosshair size={40} className="text-7l-gold animate-spin-slow" />
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-6">
                    <h3 className="text-3xl md:text-4xl font-future uppercase text-white leading-none">
                        Solicitud <span className="text-7l-gold">Técnica</span>
                    </h3>
                    <div className="lormar-line flex-1 opacity-30 group-hover:opacity-100 transition-opacity hidden sm:block"></div>
                </div>
                <p className="text-white/60 font-montserrat font-light text-sm max-w-md">
                    Central de operaciones y requerimientos. Complete sus datos para que nuestro departamento de ingeniería estructure una propuesta adaptada a la magnitud de su proyecto.
                </p>
            </div>
            
            <form className="space-y-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                        <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-7l-gold/80 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-7l-gold rounded-full"></span> Nombre y Apellido
                        </label>
                        <input 
                            type="text" 
                            className="w-full bg-7l-black/50 border border-white/5 p-4 focus:outline-none focus:border-7l-gold transition-all font-montserrat text-white text-sm placeholder:text-white/20" 
                            placeholder="EJ: ING. JUAN PÉREZ" 
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-7l-gold/80 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-7l-gold rounded-full"></span> Correo Corporativo
                        </label>
                        <input 
                            type="email" 
                            className="w-full bg-7l-black/50 border border-white/5 p-4 focus:outline-none focus:border-7l-gold transition-all font-montserrat text-white text-sm placeholder:text-white/20" 
                            placeholder="CORREO@EMPRESA.COM" 
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-7l-gold/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-7l-gold rounded-full"></span> Clasificación Operativa
                    </label>
                    <select 
                        value={asunto}
                        onChange={(e) => setAsunto(e.target.value)}
                        className="w-full bg-7l-black border border-white/5 p-4 focus:outline-none focus:border-7l-gold transition-all font-montserrat text-white text-sm uppercase appearance-none cursor-pointer"
                    >
                        <option value="PROYECTO INTEGRAL">PROYECTO INTEGRAL (LLAVE EN MANO)</option>
                        <option value="SOLICITUD DE FLOTA / EQUIPOS">ARRENDAMIENTO DE FLOTA Y EQUIPOS</option>
                        <option value="SERVICIO ESPECIALIZADO">SERVICIO TÉCNICO ESPECIALIZADO</option>
                        <option value="PROCURA INTERNACIONAL">PROCURA INTERNACIONAL</option>
                        <option value="OTROS">OTROS</option>
                    </select>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-montserrat font-black uppercase tracking-[0.2em] text-7l-gold/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-7l-gold rounded-full"></span> Especificaciones Técnicas
                    </label>
                    <textarea 
                        rows={5} 
                        value={detalles}
                        onChange={(e) => setDetalles(e.target.value)}
                        className="w-full bg-7l-black/50 border border-white/5 p-4 focus:outline-none focus:border-7l-gold transition-all font-montserrat text-white text-sm placeholder:text-white/20 resize-none leading-relaxed" 
                        placeholder="DETALLE AQUÍ EL ALCANCE DE SU SOLICITUD, UBICACIÓN DE LA OBRA Y TIEMPOS DE EJECUCIÓN ESTIMADOS..."
                    ></textarea>
                </div>

                <button type="button" className="group/btn relative px-10 py-6 bg-7l-gold text-7l-black hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 text-[11px] font-montserrat font-black uppercase tracking-[0.3em] w-full border-none">
                    <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /> 
                    TRANSMITIR REQUERIMIENTO
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

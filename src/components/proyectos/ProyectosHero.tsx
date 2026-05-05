"use client";

import React from "react";
import { motion } from "framer-motion";

const ProyectosHero = () => {
    return (
        <section className="px-10 md:px-20 lg:px-32 py-32 bg-7l-black border-b border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-industrial-grid opacity-10 pointer-events-none"></div>
            
            {/* Dynamic Light Overlay */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-7l-gold/5 to-transparent pointer-events-none"></div>

            <div className="max-w-[1800px] mx-auto space-y-12 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-6"
                >
                    <div className="w-12 h-[2px] bg-7l-gold"></div>
                    <span className="text-7l-gold text-[10px] font-bold uppercase tracking-[0.5em] font-montserrat">
                        REGISTRO DE OPERACIONES // EVIDENCIA TÉCNICA
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-[120px] font-montserrat font-black uppercase leading-[0.8] tracking-tighter text-white"
                >
                    PORTAFOLIO <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,191,0,0.3)" }}>EJECUTADO</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-4xl border-l-[1px] border-7l-gold/50 pl-10"
                >
                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-montserrat font-normal">
                        Documentación técnica de nuestra trayectoria en <span className="text-white font-medium">sectores estratégicos</span>. Proyectos llave en mano que validan nuestra capacidad operativa y activos propios.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ProyectosHero;

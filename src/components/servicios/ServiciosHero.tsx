"use client";

import React from "react";
import { motion } from "framer-motion";

const ServiciosHero = () => {
  return (
    <section className="px-10 md:px-20 lg:px-32 py-32 border-b border-white/5 relative bg-7l-black overflow-hidden">
      <div className="absolute inset-0 bg-industrial-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto space-y-12 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6"
        >
          <div className="w-12 h-[2px] bg-7l-gold"></div>
          <span className="text-7l-gold text-[10px] font-bold uppercase tracking-[0.5em] font-syncopate">
            CATÁLOGO DE DESPLIEGUE // 2024
          </span>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-[110px] font-syne font-black uppercase leading-[0.8] tracking-tighter text-white"
        >
          SOLUCIONES <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(242,169,0,0.4)" }}>OPERATIVAS</span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/50 leading-relaxed font-montserrat font-light border-l-[1px] border-7l-gold/50 pl-10 max-w-4xl"
        >
          Ejecutamos proyectos de alta complejidad bajo los más estrictos regímenes de seguridad y ambiente. Nuestra capacidad operativa se basa en una <span className="text-white font-medium italic">flota propia certificada</span> y un equipo técnico de élite.
        </motion.p>
      </div>
    </section>
  );
};

export default ServiciosHero;

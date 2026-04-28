"use client";

import React from "react";
import { motion } from "framer-motion";
import { BROCHURE_DATA } from "@/constants/brochureData";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden cinematic-reveal" style={{ backgroundImage: 'radial-gradient(at 0% 0%, hsla(42,100%,47%,0.03) 0, transparent 50%)' }}>
      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* IZQUIERDA: EL ALMA DE LORMAR (ESTILO S4 REFORZADO) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="font-future text-[#0d0d0d] uppercase tracking-tight leading-[0.9]" style={{ fontSize: 'clamp(2.5rem, 6vw, 48px)' }}>
                NUESTRO <br /> <span className="text-7l-gold">ADN</span>
              </h2>
              <div className="w-16 h-[3px] bg-7l-gold"></div>
            </div>

            <div className="space-y-8">
               <h3 className="font-future text-[#0d0d0d] leading-none uppercase tracking-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 36px)' }}>
                 SOLIDEZ <br />
                 <span className="text-7l-gold">SIN FRONTERAS.</span>
               </h3>
               
               <p className="font-montserrat text-xl leading-relaxed font-semibold italic" style={{ color: '#0d0d0d' }}>
                 &ldquo;{BROCHURE_DATA.identity.profile}&rdquo;
               </p>

               <p className="font-montserrat text-[14px] leading-relaxed font-medium" style={{ color: '#555555' }}>
                 Elevamos los estándares de ejecución en el oriente del país, consolidando una infraestructura de activos propia que garantiza respuestas inmediatas y soluciones de ingeniería de alta gama.
               </p>
            </div>
          </div>

          {/* DERECHA: LOS VALORES (ESTILO EXECUTIVE S4) */}
          <div className="lg:col-span-7 border-l border-gray-100 lg:pl-16 pt-2">
             <div className="flex items-center gap-3 mb-12">
                <div className="w-1.5 h-1.5 bg-7l-gold"></div>
                <span className="font-syncopate text-[8px] text-gray-400 tracking-[0.5em] uppercase font-bold">Principios Fundamentales</span>
             </div>

             <div className="space-y-10">
               {BROCHURE_DATA.values.map((val, idx) => (
                 <motion.div
                   key={val.title}
                   initial={{ opacity: 0, x: 10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="group pb-8 border-b border-gray-50 last:border-0"
                 >
                   <div className="flex items-center gap-6">
                     <span className="text-[11px] font-syncopate text-7l-gold font-bold">0{idx + 1}.</span>
                     <h4 className="font-future text-xl text-[#0d0d0d] tracking-[0.1em] uppercase group-hover:text-7l-gold transition-colors duration-500">
                       {val.title}
                     </h4>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BROCHURE_DATA } from "@/constants/brochureData";
import { HardHat, Truck, Fuel, ShieldCheck, Zap, Lightbulb } from "lucide-react";

// Mapeo de iconos para los valores basado en la estética del brochure
const VALUE_ICONS = [
  <ShieldCheck key="1" size={16} />, // Responsabilidad
  <HardHat key="2" size={16} />,      // Integridad
  <Zap key="3" size={16} />,          // Calidad
  <Truck key="4" size={16} />,        // Eficiencia
  <Lightbulb key="5" size={16} />,    // Innovación
];

export default function AboutSection() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    // Recuperar posición guardada
    const saved = localStorage.getItem('lormar_vertical_logo_pos');
    if (saved) {
      try { setOffset(JSON.parse(saved)); } catch (e) {}
    }

    // Activar panel secreto con Ctrl + Shift + L
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'l') {
        setIsDevMode(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="nosotros" className="py-40 md:py-48 lg:py-56 bg-7l-industrial-light relative overflow-hidden cinematic-reveal">
      
      {/* PANEL SECRETO PARA AJUSTE DEL LOGO (Ctrl + Shift + L) */}
      {isDevMode && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] border border-7l-gold p-6 rounded-lg text-white shadow-[0_0_50px_rgba(0,0,0,0.8)] z-[9999] w-[320px]">
          <p className="font-montserrat font-black mb-4 text-7l-gold tracking-widest uppercase border-b border-white/10 pb-2 text-[11px] text-center">
            Ajuste de Logo Vertical
          </p>
          
          <div className="mb-6">
            <div className="flex justify-between mb-2 text-[10px] font-mono">
              <span>EJE X (Izquierda/Derecha)</span>
              <span className="text-7l-gold">{offset.x}px</span>
            </div>
            <input 
              type="range" min="-500" max="500" 
              value={offset.x} 
              onChange={(e) => {
                const newX = parseInt(e.target.value);
                setOffset(prev => {
                  const noff = { ...prev, x: newX };
                  localStorage.setItem('lormar_vertical_logo_pos', JSON.stringify(noff));
                  return noff;
                });
              }} 
              className="w-full accent-7l-gold" 
            />
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-2 text-[10px] font-mono">
              <span>EJE Y (Arriba/Abajo)</span>
              <span className="text-7l-gold">{offset.y}px</span>
            </div>
            <input 
              type="range" min="-500" max="500" 
              value={offset.y} 
              onChange={(e) => {
                const newY = parseInt(e.target.value);
                setOffset(prev => {
                  const noff = { ...prev, y: newY };
                  localStorage.setItem('lormar_vertical_logo_pos', JSON.stringify(noff));
                  return noff;
                });
              }} 
              className="w-full accent-7l-gold" 
            />
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => {
                setOffset({ x: 0, y: 0 });
                localStorage.removeItem('lormar_vertical_logo_pos');
              }}
              className="flex-1 bg-white/5 hover:bg-white/10 py-2 transition-colors border border-white/10 uppercase tracking-widest text-[9px] font-bold"
            >
              Reset
            </button>
            <button 
              onClick={() => setIsDevMode(false)}
              className="flex-1 bg-7l-gold hover:bg-yellow-500 text-black py-2 transition-colors font-bold uppercase tracking-widest text-[9px]"
            >
              Cerrar
            </button>
          </div>
          <p className="text-center text-[9px] text-zinc-500 mt-4 font-mono">
            Los cambios se guardan localmente. <br/>Anota los valores si deseas fijarlos en el código.
          </p>
        </div>
      )}

      {/* Vertical Branding Column (Margin Layer) */}
      <div 
        className={`absolute left-10 xl:left-20 top-1/2 flex flex-col items-center select-none hidden lg:flex transition-transform duration-75 ${isDevMode ? 'opacity-80 border-2 border-dashed border-red-500 z-[9998]' : 'pointer-events-none z-0'}`}
        style={{ 
          transform: `translate(${offset.x}px, calc(-50% + ${offset.y}px))`
        }}
      >
        <span className="font-montserrat text-8xl font-black text-zinc-200 -rotate-90 leading-none tracking-tighter uppercase">
          LORMAR 7L
        </span>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-24 lg:px-32 lg:pl-48 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* IZQUIERDA: EL ALMA DE LORMAR (ESTILO S4 REFORZADO) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h2 className="text-h2 flex flex-col !text-[#0d0d0d]">
                <span className="text-7l-gold drop-shadow-sm">ADN</span>
                <span className="-mt-2">NUESTRO</span>
              </h2>
              <div className="w-32 h-[6px] bg-7l-gold"></div>
            </div>

            <div className="space-y-8">
               <h3 className="font-montserrat font-black leading-none uppercase tracking-[0.1em]" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 24px)', color: '#0d0d0d' }}>
                 SOLIDEZ <span className="text-7l-gold">SIN FRONTERAS.</span>
               </h3>
               
               <p className="font-montserrat text-lg leading-relaxed font-bold italic border-l-4 border-7l-gold pl-6" style={{ color: '#0d0d0d' }}>
                 &ldquo;{BROCHURE_DATA.identity.profile}&rdquo;
               </p>

               <p className="font-montserrat text-[clamp(14px,1.5vw,16px)] leading-relaxed font-bold" style={{ color: '#0d0d0d' }}>
                 Elevamos los estándares de ejecución en el oriente del país, consolidando una infraestructura de activos propia que garantiza respuestas inmediatas y soluciones de ingeniería de alta gama.
               </p>
            </div>
          </div>

          {/* DERECHA: LOS VALORES (ESTILO EXECUTIVE S4) */}
          <div className="lg:col-span-7 border-l border-gray-100 lg:pl-16 pt-2">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-[1px] bg-7l-gold"></div>
                      <span className="font-montserrat text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: '#0d0d0d' }}>PRINCIPIOS FUNDAMENTALES</span>
                   </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {BROCHURE_DATA.values.map((val, idx) => (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group p-8 bg-white border border-[#0D0D0D]/10 hover:border-7l-gold/30 transition-all duration-500 relative z-10 shadow-sm hover:shadow-xl cursor-default"
                  >
                    <div className="relative z-20 flex flex-col gap-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-7l-gold flex items-center justify-center text-black shadow-lg shadow-7l-gold/20 group-hover:scale-110 transition-transform duration-500">
                          {VALUE_ICONS[idx]}
                        </div>
                        <h4 className="text-h4 !text-[#0D0D0D] !text-[14px] group-hover:text-7l-gold transition-colors duration-500">
                          {val.title}
                        </h4>
                      </div>
                      <p className="font-montserrat text-[13px] leading-relaxed font-bold !text-[#0D0D0D] opacity-90 group-hover:opacity-100 transition-opacity">
                        {val.desc}
                      </p>
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

"use client";

import React from "react";
import { motion } from "framer-motion";

const HistoriaPoder = () => {
  const milestones = [
    { year: "2010", label: "LORM-01", event: "Fundación estratégica. Inicio de operaciones en transporte de carga crítica y logística pesada.", status: "DEPLOYED" },
    { year: "2015", label: "LORM-05", event: "Expansión técnica. Integración de servicios de montaje mecánico y soporte a la industria petrolera.", status: "OPERATIONAL" },
    { year: "2020", label: "LORM-10", event: "Consolidación de flota. Adquisición masiva de maquinaria pesada propia y grúas telescópicas.", status: "LEADING" },
    { year: "2024", label: "LORM-14", event: "Elite Industrial. Posicionamiento como líder nacional en infraestructura y servicios de ingeniería.", status: "DOMINATING" }
  ];

  return (
    <section className="py-40 px-10 md:px-20 lg:px-32 relative overflow-hidden bg-7l-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,191,0,0.02)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="mb-32 space-y-8 text-center md:text-left">
          <div className="flex items-center gap-6 justify-center md:justify-start">
            <div className="h-[1px] w-12 bg-7l-gold"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-7l-gold font-syncopate">CRONOLOGÍA DE PODER</p>
          </div>
          <h2 className="text-5xl md:text-8xl font-syne font-black text-white uppercase leading-[0.8] tracking-tighter">
            TRAYECTORIA <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>DE EJECUCIÓN</span>
          </h2>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block">
             <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-7l-black to-transparent"></div>
             <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-7l-black to-transparent"></div>
          </div>

          <div className="space-y-40">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-20 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Visual Marker */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-7l-gold hidden md:block z-20">
                   <div className="absolute inset-0 bg-7l-gold animate-ping opacity-20"></div>
                </div>

                <div className="flex-1 w-full">
                    <div className="bg-[#0a0a0a] border border-white/5 p-12 hover:border-7l-gold/30 transition-all duration-700 group relative overflow-hidden">
                        {/* Technical HUD */}
                        <div className="absolute top-0 right-0 p-6 flex flex-col items-end gap-1">
                             <span className="font-future text-[10px] text-white/10 group-hover:text-7l-gold/40 transition-colors uppercase tracking-widest">{item.status}</span>
                             <div className="w-12 h-[1px] bg-white/5 group-hover:bg-7l-gold/20 transition-all"></div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl md:text-7xl font-future text-white group-hover:text-7l-gold transition-colors">{item.year}</span>
                                <div className="text-[9px] font-bold font-syncopate text-white/20 whitespace-nowrap tracking-widest uppercase">{item.label}</div>
                            </div>
                            
                            <div className="w-16 h-[2px] bg-7l-gold/50 group-hover:w-32 transition-all duration-700"></div>
                            
                            <p className="text-lg md:text-xl text-white/40 font-montserrat leading-relaxed font-light group-hover:text-white/70 transition-colors">
                                {item.event}
                            </p>
                        </div>
                        
                        {/* Corner Decoration */}
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/5 group-hover:border-7l-gold/30 transition-all"></div>
                    </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoriaPoder;

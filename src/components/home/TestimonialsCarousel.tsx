"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const endorsements = [
  {
    index: "01",
    company_code: "PM-OIL",
    ref_id: "LR-CON-2026/0A",
    quote: "La precisión y cumplimiento de Lormar en la estabilización de plataformas superó nuestras expectativas contractuales.",
    name: "ING. CARLOS M.",
    role: "GERENCIA DE PROYECTOS",
    company: "PETROMONAGAS"
  },
  {
    index: "02",
    company_code: "CV-INFRA",
    ref_id: "LR-LOG-2026/4B",
    quote: "Un músculo logístico impecable. Redujeron nuestros tiempos de parada de planta gracias a la amplia disponibilidad de su maquinaria.",
    name: "ARQ. SOFÍA V.",
    role: "DIRECCIÓN DE OPERACIONES",
    company: "CONSORCIO VIAL"
  },
  {
    index: "03",
    company_code: "OP-ENERGY",
    ref_id: "LR-HSE-2026/2C",
    quote: "Ejecución técnica sin fisuras. Su protocolo de Cero Accidentes y calidad operativa son el estándar que buscamos en el sector.",
    name: "ING. ROBERTO S.",
    role: "SUPERINTENDENTE DE PLANTA",
    company: "OPERADOR PRINCIPAL"
  },
  {
    index: "04",
    company_code: "SE-STRUCT",
    ref_id: "LR-ENG-2026/1D",
    quote: "Confiamos la fase estructural a Lormar. El nivel de ingeniería, respuestas de emergencia y la trazabilidad de equipos fue absoluto.",
    name: "LIC. ANDRÉS G.",
    role: "GERENCIA DE PROCURA",
    company: "SERVICIOS EPC"
  }
];

export default function TestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicamos el set de cartas para el scroll infinito suave
  const tickerCards = [...endorsements, ...endorsements, ...endorsements];

  return (
    <section className="py-24 md:py-32 bg-7l-industrial-light overflow-hidden border-t border-b border-[#E5E7EB] relative select-none">
      
      {/* Blueprint grid background enhancements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-25 pointer-events-none" />

      <div className="w-full relative z-20">
        
        {/* Header Corporativo / Ledger Header */}
        <div className="px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-start">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-7l-gold font-black block pt-2 border-t-2 border-7l-gold w-20">
              LEDGER_REF
            </span>
          </div>
          <div className="md:col-span-8 lg:col-span-6">
            <h2 className="text-3xl md:text-4xl font-montserrat font-black !text-[#0d0d0d] uppercase leading-none mb-5 tracking-tight">
              SOCIOS OPERATIVOS
            </h2>
            <p className="!text-zinc-600 text-[14px] leading-relaxed font-montserrat font-medium max-w-xl">
              Garantía de ejecución técnica y solvencia. Registros oficiales de conformidad avalados por las principales gerencias y consorcios del sector estratégico.
            </p>
          </div>
        </div>

        {/* Infinite Ticker Container with CAD Guidelines */}
        <div 
          className="relative flex overflow-hidden border-t border-b border-[#E5E7EB] bg-white/50 backdrop-blur-sm py-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Faded edges to match grid */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex gap-0"
            animate={{ x: isPaused ? undefined : ["0%", "-33.33%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {tickerCards.map((item, i) => (
              <div 
                key={i} 
                className="w-[290px] md:w-[440px] flex-shrink-0 bg-transparent py-6 px-10 border-r border-[#E5E7EB] rounded-none flex flex-col justify-between transition-all duration-300 relative group/card overflow-hidden hover:bg-white/40"
              >
                {/* CAD Technical Crosshair at intersections */}
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-zinc-300 font-mono text-[10px] select-none pointer-events-none z-10">
                  +
                </div>
                <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 text-zinc-300 font-mono text-[10px] select-none pointer-events-none z-10">
                  +
                </div>

                {/* Giant Blueprint Index Number in the background */}
                <div className="absolute right-4 top-2 text-[100px] font-montserrat font-black text-zinc-100/50 select-none pointer-events-none transition-colors duration-300 group-hover/card:text-7l-gold/5">
                  {item.index}
                </div>

                {/* Header Block: Technical Stamp Style */}
                <div className="flex flex-col mb-6 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono font-black tracking-widest text-[#0d0d0d] bg-7l-gold px-1.5 py-0.5">
                      {item.company_code}
                    </span>
                    <span className="text-[12px] font-black font-montserrat tracking-wider uppercase text-[#0d0d0d]">
                      {item.company}
                    </span>
                  </div>
                  
                  {/* Ledger Reference Code */}
                  <div className="text-[9px] font-mono text-zinc-400 tracking-wider mt-2 flex items-center gap-2">
                    <span>REF: {item.ref_id}</span>
                    <span className="text-zinc-300">|</span>
                    <span className="text-emerald-600 font-black">STATUS: APPROVED</span>
                  </div>
                </div>

                {/* Testimonial Quote in custom Blueprint Technical brackets */}
                <div className="relative border-l border-7l-gold pl-5 py-1 flex-grow">
                  <p className="!text-zinc-700 font-montserrat font-semibold text-[13px] md:text-[14px] leading-relaxed tracking-normal italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Signature/Meta Block at the bottom */}
                <div className="mt-8 pt-4 border-t border-zinc-200/50 flex items-center justify-between relative z-10">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black font-montserrat !text-[#0d0d0d] tracking-wide uppercase">
                      {item.name}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-400 tracking-widest uppercase mt-0.5">
                      {item.role}
                    </span>
                  </div>

                  {/* Clean Technical Stars: Minimal Dots representing quality score */}
                  <div className="flex gap-1 items-center bg-zinc-50 border border-zinc-200/50 px-2 py-1">
                    <span className="text-[8px] font-mono text-zinc-400 mr-1">QA_SCORE:</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, dotI) => (
                        <div key={dotI} className="w-1.5 h-1.5 bg-7l-gold rounded-none" />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

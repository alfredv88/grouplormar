"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const endorsements = [
  {
    quote: "La precisión y cumplimiento de Lormar en la estabilización de plataformas superó nuestras expectativas contractuales.",
    name: "ING. CARLOS MENDOZA",
    role: "GERENCIA DE PROYECTOS",
    company: "PETROMONAGAS"
  },
  {
    quote: "Un músculo logístico impecable. Redujeron nuestros tiempos de parada de planta gracias a la amplia disponibilidad de su maquinaria.",
    name: "ARQ. SOFÍA VILARIÑO",
    role: "DIRECCIÓN DE OPERACIONES",
    company: "CONSORCIO VIAL"
  },
  {
    quote: "Ejecución técnica sin fisuras. Su protocolo de Cero Accidentes y calidad operativa son el estándar que buscamos en el sector.",
    name: "ING. ROBERTO SALAS",
    role: "SUPERINTENDENTE DE PLANTA",
    company: "OPERADOR PRINCIPAL"
  },
  {
    quote: "Confiamos la fase estructural a Lormar. El nivel de ingeniería, respuestas de emergencia y la trazabilidad de equipos fue absoluto.",
    name: "LIC. ANDRÉS GÓMEZ",
    role: "GERENCIA DE PROCURA",
    company: "SERVICIOS EPC"
  }
];

export default function TestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicamos el set de cartas para el scroll infinito suave
  const tickerCards = [...endorsements, ...endorsements, ...endorsements];

  return (
    <section className="py-24 md:py-32 bg-7l-surface-light overflow-hidden border-t border-[#D1D5DB]">
      <div className="w-full">
        {/* Header Corporativo */}
        <div className="px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4 lg:col-span-3">
            <span className="text-[10px] uppercase font-montserrat tracking-[0.4em] text-7l-gold font-bold block pt-2 border-t-2 border-7l-gold w-16">
              RESPALDO
            </span>
          </div>
          <div className="md:col-span-8 lg:col-span-6">
            <h2 className="text-3xl md:text-4xl font-montserrat font-black text-7l-black uppercase leading-tight mb-4 tracking-tight">
              REFERENCIAS COMERCIALES
            </h2>
            <p className="text-7l-gray text-[14px] leading-relaxed font-montserrat font-medium">
              No exigimos confianza ciega; la construimos. Las principales operadoras de los sectores estratégicos validan nuestro músculo financiero y capacidad de ejecución técnica.
            </p>
          </div>
        </div>

        {/* Infinite Ticker Container */}
        <div 
          className="relative flex overflow-hidden group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Faded edges to give premium depth (Light Mode) */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex gap-6 py-4 px-6 md:px-0"
            animate={{ x: isPaused ? undefined : ["0%", "-33.33%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {tickerCards.map((item, i) => (
              <div 
                key={i} 
                className="w-[280px] md:w-[450px] flex-shrink-0 bg-white p-8 border-l-[4px] border-l-transparent hover:border-l-7l-gold border-y border-r border-[#D1D5DB] flex flex-col hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  {/* Industrial 5 Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, starI) => (
                      <div key={starI} className="w-2 h-2 bg-7l-black group-hover:bg-7l-gold transition-colors" />
                    ))}
                  </div>
                  <Quote size={20} className="text-[#E8E8E8] group-hover:text-7l-gold transition-colors" />
                </div>
                
                <p className="text-7l-black font-montserrat font-bold text-[15px] md:text-[18px] leading-snug mb-8 flex-grow tracking-tight">
                  "{item.quote}"
                </p>
                
                <div className="flex flex-col mt-auto border-t border-[#E8E8E8] pt-4">
                  <p className="text-[11px] font-bold font-montserrat text-7l-black tracking-widest uppercase">
                    {item.name}
                  </p>
                  <p className="text-[10px] text-7l-gray font-montserrat tracking-wider mt-1 line-clamp-1">
                    {item.role} <span className="text-7l-gold font-bold mx-1">|</span> {item.company}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

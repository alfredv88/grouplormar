"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CertifiedStrip() {
  const labels = ["GRÚAS 100T", "LOWBOY 140T", "CATERPILLAR", "MACK", "WELL TESTING", "FLUSH-BY"];
  return (
    <section className="relative z-10 py-24 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-industrial-grid opacity-[0.1] pointer-events-none" />
      <div className="w-full max-w-[1800px] mx-auto px-10 md:px-20 lg:px-32 overflow-hidden">
        <p className="text-[10px] font-syncopate font-bold uppercase tracking-[0.5em] text-center mb-16 text-7l-gold">
          MAQUINARIA CERTIFICADA & FLOTA PREMIUM
        </p>
        <div className="relative flex overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex whitespace-nowrap gap-16 items-center px-8"
          >
            {[...labels, ...labels, ...labels, ...labels].map((label, i) => (
              <div
                key={i}
                className={`text-3xl md:text-4xl font-syne font-black transform hover:scale-110 hover:text-white transition-all cursor-default ${i % 2 === 0 ? "text-white/60 tracking-widest" : "text-white/40 tracking-tight"
                  } ${label === "CATERPILLAR" ? "text-white/70" : ""} ${label === "WELL TESTING" ? "text-white" : ""}`}
              >
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "¿CUENTAN CON MAQUINARIA PROPIA VIGENTE?", a: "Sí, disponemos de una flota robusta de grúas, excavadoras y transporte pesado propios, lo que optimiza costos logísticos y tiempos de respuesta bajo estándares internacionales." },
    { q: "¿CUÁL ES SU RADIO DE ACCIÓN TÉCNICA?", a: "Nuestras bases principales están en El Tigre y Barcelona, pero operamos con plena autonomía logística en todo el territorio nacional venezolano." },
    { q: "¿CUMPLEN CON SOLVENCIAS DE CONTRATISTAS?", a: "Somos Contribuyentes Especiales debidamente solventes ante el SENIAT y demás instituciones oficiales, listos para procesos de auditoría y licitación inmediata." },
    { q: "¿REALIZAN SOPORTE DE EMERGENCIA 24/7?", a: "Disponemos de cuadrillas operativas y soporte de ingeniería 24/7 para paradas de planta, contingencias técnicas críticas y proyectos de alta prioridad." }
  ];

  return (
    <section className="py-32 px-6 bg-[#131313] border-t border-white/5" id="faq">
      <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* LADO IZQUIERDO - BRANDING */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-6">
            <span className="font-syncopate text-7l-gold text-[8px] font-bold tracking-[0.6em] uppercase block">
              Support Center
            </span>
            <h2 className="text-4xl md:text-5xl font-future text-white uppercase tracking-tighter leading-[0.9]">
              SOPORTE <br /> <span className="text-7l-gold">TÉCNICO</span>
            </h2>
          </div>
          <p className="text-[15px] text-white/50 border-l border-7l-gold/40 pl-8 font-montserrat font-medium leading-relaxed italic">
            Resolución de dudas críticas para la toma de decisiones en proyectos de infraestructura estratégica.
          </p>
        </div>

        {/* LADO DERECHO - ACORDEÓN MINIMALISTA */}
        <div className="lg:col-span-7 divide-y divide-white/5 border-y border-white/5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="py-10 group cursor-pointer transition-all relative overflow-hidden"
              >
                <div className="flex justify-between items-center">
                  <h4 className={`text-[12px] font-syncopate uppercase transition-all tracking-[0.2em] font-bold max-w-[85%] ${isOpen ? 'text-7l-gold translate-x-2' : 'text-white'}`}>
                    {faq.q}
                  </h4>
                  <div className={`transition-all duration-500 scale-75 ${isOpen ? 'rotate-45 text-white' : 'text-7l-gold'}`}>
                    <Plus size={24} />
                  </div>
                </div>
                <AnimatePresence>
                  {isOpen && (
                     <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[14px] text-white/60 leading-relaxed font-montserrat font-medium pt-8 pb-4 pl-4 select-none">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

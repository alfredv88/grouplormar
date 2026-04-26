"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CertifiedStrip() {
  const labels = ["GRÚAS 100T", "LOWBOY 140T", "CATERPILLAR", "MACK", "WELL TESTING", "FLUSH-BY"];
  return (
    <section className="relative z-10 py-24 bg-7l-black border-y border-white/5 overflow-hidden">
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
                className={`text-3xl md:text-4xl font-syne font-black transform hover:scale-110 hover:text-white transition-all cursor-default ${i % 2 === 0 ? "text-white/40 tracking-widest" : "text-white/30 tracking-tight"
                  } ${label === "CATERPILLAR" ? "text-white/50" : ""} ${label === "WELL TESTING" ? "text-white" : ""}`}
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
    { q: "¿Cuentan con maquinaria propia?", a: "Sí, disponemos de una flota robusta de grúas, excavadoras y transporte pesado propios, lo que optimiza costos logísticos y tiempos de respuesta." },
    { q: "¿Cuál es su radio de acción?", a: "Nuestras bases principales están en El Tigre y Barcelona, pero operamos en todo el territorio nacional venezolano." },
    { q: "¿Emiten facturación con solvencia fiscal?", a: "Somos Contribuyentes Especiales debidamente solventes ante el SENIAT y demás instituciones oficiales." },
    { q: "¿Realizan mantenimientos de emergencia?", a: "Disponemos de cuadrillas operativas 24/7 para paradas de planta y contingencias técnicas críticas." }
  ];

  return (
    <section className="py-48 px-10 md:px-20 lg:px-32 bg-7l-black border-t border-white/5">
      <div className="w-full max-w-[1800px] mx-auto grid lg:grid-cols-12 gap-24">
        <div className="lg:col-span-5 space-y-10">
          <h2 className="text-5xl font-future uppercase leading-none text-white tracking-widest">
            CENTRO DE <br /> <span className="text-7l-gold">CONSULTA</span>
          </h2>
          <p className="text-xl text-white/70 border-l-2 border-7l-gold pl-10 font-montserrat font-light leading-relaxed">
            Respuestas técnicas críticas para la toma de decisiones en proyectos de infraestructura.
          </p>
        </div>
        <div className="lg:col-span-7 divide-y divide-white/5 border-y border-white/5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="py-10 group cursor-pointer hover:bg-white/[0.02] px-8 transition-all relative overflow-hidden"
              >
                <div className="flex justify-between items-center mb-6">
                  <h4 className={`text-[13px] font-syne uppercase transition-colors tracking-widest font-bold ${isOpen ? 'text-7l-gold' : 'text-white group-hover:text-7l-gold'}`}>
                    {faq.q}
                  </h4>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }} className="text-7l-gold flex-shrink-0">
                    <Plus size={24} />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {isOpen && (
                     <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[14px] text-white/60 leading-relaxed font-montserrat font-light pb-4 border-l-2 border-7l-gold/30 pl-6 ml-2">
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

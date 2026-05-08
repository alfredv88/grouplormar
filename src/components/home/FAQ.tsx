"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "¿CUENTAN CON MAQUINARIA PROPIA VIGENTE?", a: "Sí, disponemos de una flota robusta de grúas, excavadoras y transporte pesado propios, lo que optimiza costos logísticos y tiempos de respuesta bajo estándares internacionales." },
    { q: "¿CUÁL ES SU RADIO DE ACCIÓN TÉCNICA?", a: "Nuestras bases principales están en El Tigre y Barcelona, pero operamos con plena autonomía logística en todo el territorio nacional venezolano." },
    { q: "¿CUMPLEN CON SOLVENCIAS DE CONTRATISTAS?", a: "Somos Contribuyentes Especiales debidamente solventes ante el SENIAT y demás instituciones oficiales, listos para procesos de auditoría y licitación inmediata." },
    { q: "¿REALIZAN SOPORTE DE EMERGENCIA 24/7?", a: "Disponemos de cuadrillas operativas y soporte de ingeniería 24/7 para paradas de planta, contingencias técnicas críticas y proyectos de alta prioridad." }
  ];

  return (
    <section className="py-20 px-6 bg-[#0a1111] border-t border-white/5" id="faq">
      <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* LADO IZQUIERDO - BRANDING */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <span className="font-montserrat text-7l-gold text-[8px] font-bold tracking-[0.6em] uppercase block">
              Support Center
            </span>
            <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white uppercase tracking-tighter leading-[0.9]">
              SOPORTE <br /> <span className="text-7l-gold">TÉCNICO</span>
            </h2>
          </div>
          <p className="text-[15px] text-white border-l-2 border-7l-gold pl-8 font-montserrat font-bold leading-relaxed italic">
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
                className="py-7 group cursor-pointer transition-all relative overflow-hidden"
              >
                <div className="flex justify-between items-center">
                  <h4 className={`text-[12px] font-montserrat uppercase transition-all tracking-[0.2em] font-bold max-w-[85%] ${isOpen ? 'text-7l-gold translate-x-2' : 'text-white'}`}>
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
                      <p className="text-[14px] text-white leading-relaxed font-montserrat font-bold pt-8 pb-4 pl-4 select-none">
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

"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    { num: "01", title: "Consulta", desc: "Evaluación técnica y determinación de la logística crítica del proyecto." },
    { num: "02", title: "Operación", desc: "Planificación de despliegue y movilización optimizada de maquinaria pesada." },
    { num: "03", title: "Ejecución", desc: "Labor en campo bajo los más estrictos protocolos de seguridad ISO." },
    { num: "04", title: "Certificación", desc: "Validación final, gestión de equipos y soporte operativo continuo." }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-7l-industrial-light border-y border-7l-border-light" id="proceso">
      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-7l-gold/30 to-transparent" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <h2 className="text-3xl md:text-5xl font-future text-7l-black uppercase leading-none tracking-normal">
            NUESTRO <span className="text-7l-gold">PROCESO</span>
          </h2>
          <div className="h-[2px] flex-1 bg-7l-border-light relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-7l-gold"
            />
          </div>
        </div>

        {/* Closed Blueprint Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 border border-7l-border-light bg-white/40 backdrop-blur-[2px]">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative py-10 px-8 border-b md:border-b-0 md:border-r last:border-b-0 last:border-r-0 border-7l-border-light hover:bg-[#F8F9FA]/60 transition-all duration-300 cursor-default"
            >
              {/* Hover gold side bar animation overlapping the existing left border exactly */}
              <div className="absolute top-0 -left-[1.5px] w-[3px] h-0 group-hover:h-full bg-7l-gold transition-all duration-500 z-10" />

              <span className="text-6xl font-montserrat font-black leading-none block mb-6 transition-colors duration-500 text-7l-gold/20 group-hover:text-7l-gold">
                {step.num}
              </span>
              <h4 className="text-h4 group-hover:translate-x-1 transition-transform !text-7l-black mb-3">
                {step.title}
              </h4>
              <p className="text-[13px] font-montserrat leading-relaxed border-l-2 border-7l-border-light pl-5 group-hover:border-7l-gold transition-colors font-medium text-7l-black">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

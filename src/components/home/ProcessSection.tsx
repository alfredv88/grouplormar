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
    <section className="relative py-28 px-6 overflow-hidden bg-[#0F0F0F] border-y border-white/5" id="proceso">
      {/* Structural Overlays */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <h2 className="text-4xl md:text-5xl font-syne font-black uppercase leading-none text-white tracking-widest">
            NUESTRO <span className="text-7l-gold">PROCESO</span>
          </h2>
          <div className="h-[2px] flex-1 bg-white/10 relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-7l-gold"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 md:gap-0">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-10 border-l border-white/10 hover:bg-white/[0.02] transition-all cursor-default"
            >
              <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-7l-gold transition-all duration-500"></div>
              <div className="absolute top-2 left-2 flex gap-1 opacity-20">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>

              <span className="text-5xl font-future text-white/20 group-hover:text-7l-gold/60 transition-colors leading-none block mb-6">
                {step.num}
              </span>
              <h4 className="text-[14px] font-syncopate uppercase text-white tracking-[0.2em] mb-4 group-hover:translate-x-2 transition-transform">
                {step.title}
              </h4>
              <p className="text-sm text-white/60 font-montserrat leading-relaxed border-l-[1px] border-white/20 pl-5 group-hover:border-7l-gold font-light transition-all">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

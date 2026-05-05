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
    <section className="relative py-28 px-6 overflow-hidden bg-white border-y border-gray-100" id="proceso">
      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-7l-gold/30 to-transparent" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <h2 className="text-3xl md:text-5xl font-future text-[#0d0d0d] uppercase leading-none tracking-normal">
            NUESTRO <span className="text-7l-gold">PROCESO</span>
          </h2>
          <div className="h-[2px] flex-1 bg-gray-100 relative overflow-hidden">
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
              className="group relative p-10 border-l border-gray-100 hover:bg-gray-50/50 transition-all duration-300 cursor-default"
            >
              {/* Hover gold side bar animation */}
              <div className="absolute top-0 left-0 w-[2.5px] h-0 group-hover:h-full bg-7l-gold transition-all duration-500" />

              <span className="text-6xl font-montserrat font-black leading-none block mb-8 transition-colors duration-500 text-7l-gold/40 group-hover:text-7l-gold">
                {step.num}
              </span>
              <h4 className="text-h4 group-hover:translate-x-1 transition-transform !text-[#0d0d0d]">
                {step.title}
              </h4>
              <p className="text-[13px] font-montserrat leading-relaxed border-l-2 border-gray-200 pl-5 group-hover:border-7l-gold transition-colors font-medium" style={{ color: '#0d0d0d' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

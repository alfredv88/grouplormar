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
    <section className="relative py-28 px-6 overflow-hidden bg-[#F7F7F7] border-y border-[#0D0D0D]/5" id="proceso">
      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-7l-gold/30 to-transparent" />
 
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <h2 className="text-3xl md:text-5xl font-future !text-[#0D0D0D] uppercase leading-none tracking-normal flex gap-3">
            NUESTRO <span className="!text-7l-gold-text">PROCESO</span>
          </h2>
          <div className="h-[2px] flex-1 bg-[#0D0D0D]/5 relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-7l-gold"
            />
          </div>
        </div>
 
        {/* Closed Blueprint Matrix Grid - Refined Industrial Design */}
        <div className="grid grid-cols-1 md:grid-cols-4 border border-[#0D0D0D]/5 bg-white/30 backdrop-blur-[4px] rounded-none shadow-[0_10px_30px_rgba(0,0,0,0.015)] overflow-hidden">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative py-12 px-9 border-b md:border-b-0 md:border-r last:border-b-0 last:border-r-0 border-[#0D0D0D]/5 hover:bg-white hover:shadow-[0_20px_50px_rgba(13,13,13,0.05)] hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              {/* Hover gold side bar animation overlapping the existing left border exactly */}
              <div className="absolute top-0 left-0 w-[3px] h-0 group-hover:h-full bg-7l-gold transition-all duration-500 z-10" />
 
              {/* Monogram number with dynamic hover transition */}
              <span className="text-6xl font-montserrat font-black leading-none block mb-6 text-[#0D0D0D]/10 group-hover:text-7l-gold/30 transition-colors duration-500 select-none">
                {step.num}
              </span>
              
              {/* Card Title - Pro Max hierarchy & font spacing */}
              <h4 className="text-[15px] font-montserrat font-black tracking-wider uppercase !text-[#0D0D0D] group-hover:text-7l-gold group-hover:translate-x-1 transition-all duration-500 mb-3">
                {step.title}
              </h4>
              
              {/* High Contrast Description text */}
              <p className="text-[13px] font-montserrat leading-relaxed border-l-2 border-[#0D0D0D]/10 pl-5 group-hover:border-7l-gold transition-colors font-medium !text-[#0D0D0D]/70 group-hover:!text-[#0D0D0D]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

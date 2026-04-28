"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SustainabilitySection() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col md:flex-row min-h-[600px]">
      
      {/* Left Side: Impact Image */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-auto overflow-hidden">
        <Image
          src="/images/sostenibilidad_lormar_compromiso.png" // Placeholder - Ensure tool or user provides this
          alt="Compromiso Ambiental Lormar"
          fill
          className="object-cover"
        />
        {/* Subtle overlay to blend if needed */}
        <div className="absolute inset-0 bg-7l-black/10"></div>
      </div>

      {/* Right Side: Content with Pattern */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center bg-[#5F8695] p-12 md:p-24 overflow-hidden">
        
        {/* Dot Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="relative z-10 max-w-xl space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="font-syncopate text-white/80 text-[10px] font-bold tracking-[0.4em] uppercase">
              SOSTENIBILIDAD
            </span>
            <h2 className="text-4xl md:text-6xl font-syne font-black text-white leading-tight uppercase tracking-tight">
              GESTIÓN <br /> <span className="text-white/80">RESPONSABLE</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-montserrat text-white/90 leading-relaxed font-light"
          >
            Nuestro compromiso es generar valor sostenible integrando aspectos ambientales y sociales en cada fase operativa. Garantizamos la remediación y el manejo integral bajo estrictos protocolos RACDA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button className="group flex items-center gap-4 text-white hover:text-7l-gold transition-colors">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#5F8695] group-hover:scale-110 transition-transform shadow-lg">
                <ArrowRight size={20} />
              </div>
              <span className="font-syncopate text-[10px] font-bold tracking-[0.3em] uppercase">
                DESCUBRE MÁS
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

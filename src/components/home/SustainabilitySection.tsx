"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
      <div className="relative w-full md:w-1/2 flex items-center justify-center bg-[#0a1111] p-12 md:p-24 overflow-hidden">
        
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
            <span className="font-montserrat text-white/40 text-[10px] font-bold tracking-[0.5em] uppercase">
              GESTIÓN AMBIENTAL
            </span>
            <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white leading-tight uppercase tracking-tight">
              VALOR <br /> <span className="text-7l-gold">SOSTENIBLE</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-montserrat text-white/70 leading-relaxed font-light"
          >
            Nuestro compromiso es generar valor sostenible integrando aspectos ambientales y sociales en cada fase operativa. Garantizamos la remediación y el manejo integral bajo estrictos protocolos RACDA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/compromiso" 
              className="inline-flex items-center gap-4 bg-7l-gold px-6 py-3 transition-all hover:bg-7l-gold/90 group"
            >
              <span className="font-montserrat text-[9px] font-bold text-7l-black tracking-[0.4em] uppercase">
                Compromiso 7L
              </span>
              <ArrowRight size={10} className="text-7l-black transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

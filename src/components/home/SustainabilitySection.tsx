"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SustainabilitySection() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col md:flex-row min-h-[600px] bg-[#0a1111]">
      
      {/* Left Side: Impact Image */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full md:w-1/2 h-[400px] md:h-auto overflow-hidden"
      >
        <Image
          src="/images/about/sostenibilidad.png"
          alt="Compromiso Ambiental Lormar"
          fill
          className="object-cover brightness-75 contrast-110"
        />
        {/* Subtle overlay to blend if needed */}
        <div className="absolute inset-0 bg-black/10"></div>
      </motion.div>

      {/* Right Side: Content with Pattern */}
      <div 
        className="relative w-full md:w-1/2 flex flex-col justify-center p-12 md:p-24 overflow-hidden bg-[#0a1111]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      >
        <div className="relative z-10 max-w-lg space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="font-montserrat text-zinc-500 text-[10px] font-black tracking-[0.5em] uppercase">
              GESTIÓN AMBIENTAL
            </span>
            <h2 className="text-5xl md:text-6xl font-future text-white leading-none uppercase">
              VALOR <br /> <span className="text-7l-gold">SOSTENIBLE</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base font-montserrat font-medium max-w-lg leading-relaxed"
          >
            Nuestro compromiso es generar valor sostenible integrando aspectos ambientales y sociales en cada fase operativa. Garantizamos la remediación and el manejo integral bajo estrictos protocolos RACDA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/responsabilidad" 
              className="inline-flex items-center gap-6 bg-7l-gold px-8 py-4 hover:bg-7l-gold/90 transition-all duration-300 group rounded-none"
            >
              <span className="font-montserrat text-[10px] font-black text-black tracking-[0.4em] uppercase">
                COMPROMISO
              </span>
              <ArrowRight size={12} className="text-black transition-transform group-hover:translate-x-1.5 duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

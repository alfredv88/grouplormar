"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GenteSection() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col md:flex-row-reverse min-h-[600px]">
      
      {/* Right Side: Impact Image (Now on the right) */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full md:w-1/2 h-[400px] md:h-auto overflow-hidden"
      >
        <Image
          src="/images/equipo_lormar_accion_industrial.png"
          alt="Capital Humano Lormar"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-7l-black/5"></div>
      </motion.div>

      {/* Left Side: Content with Pattern (Gold Background) */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center bg-7l-gold p-12 md:p-24 overflow-hidden">
        
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
            <span className="font-montserrat text-7l-black text-[10px] font-bold tracking-[0.5em] uppercase">
              CAPITAL HUMANO
            </span>
            <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white leading-tight uppercase tracking-tight">
              TALENTO <br /> <span className="text-7l-black">ESTRATÉGICO</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-montserrat !text-white leading-relaxed font-medium"
          >
            En Grupo Lormar creemos en el valor de las personas. Nuestro equipo de profesionales cuenta con una visión internacional y una formación técnica de élite, siendo el motor fundamental de nuestra solidez y crecimiento continuo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/gente" 
              className="inline-flex items-center gap-4 bg-7l-black px-6 py-3 transition-all hover:bg-7l-black/90 group"
            >
              <span className="font-montserrat text-[9px] font-bold text-7l-gold tracking-[0.4em] uppercase">
                Descubre Más
              </span>
              <ArrowRight size={10} className="text-7l-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

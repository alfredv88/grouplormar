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
          src="/images/about/equipo_lormar.png"
          alt="Capital Humano Lormar"
          fill
          className="object-cover brightness-75 contrast-110"
        />
        <div className="absolute inset-0 bg-black/5"></div>
      </motion.div>

      {/* Left Side: Content with Pattern (Gold Background) */}
      <div 
        className="relative w-full md:w-1/2 flex flex-col justify-center p-12 md:p-24 overflow-hidden bg-7l-gold"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)",
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
            <span className="font-montserrat text-black/60 text-[10px] font-black tracking-[0.5em] uppercase">
              CAPITAL HUMANO
            </span>
            <h2 className="text-5xl md:text-6xl font-future !text-black leading-none uppercase">
              TALENTO <br /> <span className="text-white">ESTRATÉGICO</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-montserrat !text-white leading-relaxed font-medium max-w-lg"
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
              className="inline-flex items-center gap-6 bg-black px-8 py-4 hover:bg-black/90 transition-all duration-300 group rounded-none"
            >
              <span className="font-montserrat text-[10px] font-black text-7l-gold tracking-[0.4em] uppercase">
                Descubre Más
              </span>
              <ArrowRight size={12} className="text-7l-gold transition-transform group-hover:translate-x-1.5 duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

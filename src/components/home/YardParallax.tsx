"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function YardParallax() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Efecto de zoom y opacidad en el video mientras se hace scroll
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-7l-black"
    >
      {/* Video Container - Fixed/Sticky during scroll */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[30%] brightness-[0.6] contrast-125"
        >
          <source src="/videos/lormar 1.webm" type="video/webm" />
          Tu navegador no soporta videos.
        </video>
        
        {/* Gradients to blend with sections above and below */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-7l-black to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-7l-black to-transparent"></div>
      </motion.div>

      {/* Floating Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <span className="font-syncopate text-7l-gold tracking-[0.6em] text-[10px] font-bold uppercase block">
            VISIÓN DIRECTA // ACTIVOS
          </span>
          <h2 className="text-4xl md:text-7xl font-future text-white uppercase leading-none tracking-tighter">
            CAPACIDAD <br /> <span className="text-7l-gold">INSTALADA</span> REAL
          </h2>
          <div className="w-24 h-[1px] bg-white/30 mx-auto mt-8"></div>
        </motion.div>
      </div>

      {/* Side Decorative Lines (HUD style) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 items-center opacity-40">
        <div className="w-[1px] h-20 bg-7l-gold"></div>
        <span className="font-syncopate text-[8px] text-white rotate-90 my-10 whitespace-nowrap tracking-widest uppercase">
          YARD STATUS: OPERATIONAL
        </span>
        <div className="w-[1px] h-20 bg-7l-gold"></div>
      </div>
    </section>
  );
}

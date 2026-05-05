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

  // Efecto de opacidad y movimiento de texto (Parallax suave y ejecutivo)
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[80vh] md:h-[100vh] overflow-hidden bg-7l-black"
    >
      {/* Video Layer - Limpieza Absoluta */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[10%] brightness-[0.45] contrast-110"
        >
          <source src="/videos/DJI_0323.webm" type="video/webm" />
        </video>
        
        {/* Soft atmospheric gradients */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-7l-black to-transparent z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-7l-black to-transparent z-10"></div>
      </motion.div>

      {/* Content Layer - Quiet Luxury Layout */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <span className="font-montserrat text-7l-gold tracking-[0.8em] text-[9px] font-black uppercase mb-8 block opacity-80">
            VISIÓN DIRECTA // ACTIVOS
          </span>
          
          <h2 className="text-5xl md:text-8xl font-montserrat font-black text-white uppercase leading-[0.9] tracking-tighter mb-10">
            CAPACIDAD <br /> <span className="text-7l-gold">INSTALADA</span> REAL
          </h2>
          
          <div className="w-20 h-[1px] bg-white/20 mx-auto relative overflow-hidden">
             <div className="absolute inset-0 bg-7l-gold w-full -translate-x-full animate-progress-slow"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

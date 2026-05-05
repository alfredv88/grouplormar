"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform, useScroll } from "framer-motion";

function AnimatedNumber({ value, prefix = "" }: { value: number, prefix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const display = useTransform(spring, (current) => `${prefix}${Math.floor(current)}`);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 1. Difuminado de Bordes Horizontales Dinámicos (Sin Bordes Duros)
  const maskImage = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [
      "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)", // Entra difuminado lateralmente (60% central)
      "linear-gradient(to right, transparent 0%, black 0%, black 100%, transparent 100%)", // Abre al 100% de la pantalla en el centro
      "linear-gradient(to right, transparent 0%, black 0%, black 100%, transparent 100%)", // Mantiene la apertura completa
      "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)"  // Vuelve a difuminarse al salir
    ]
  );

  // 2. Lente de Zoom Tridimensional (Cinematic Camera Drift)
  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.08, 1.0, 1.08] // Micro-zoom de lente cinematográfico continuo
  );

  const stats = [
    { num: 16, prefix: "+", label: "Años de Experiencia" },
    { num: 200, prefix: "+", label: "Proyectos Ejecutados" },
    { num: 50, prefix: "+", label: "Unidades Especializadas" }
  ];

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-7l-black">
      {/* Background Video Layer - WAO DEFINITIVO con Feathered Edge y Cinematic Drift */}
      <motion.div 
        style={{ 
          maskImage,
          WebkitMaskImage: maskImage
        }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <motion.div style={{ scale: videoScale }} className="w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-75 contrast-120 saturate-150"
          >
            <source src="/videos/lormar 2.webm" type="video/webm" />
          </video>
        </motion.div>
        {/* Ambient Dark Overlays */}
        <div className="absolute inset-0 bg-7l-black/40 z-10" />
        {/* Top & Bottom Seamless Transitions (Más Sutiles y Cortos para ganar amplitud vertical) */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-7l-black via-7l-black/60 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-7l-black via-7l-black/60 to-transparent z-10" />
      </motion.div>

      <section className="py-80 relative z-20">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center space-y-5 relative group"
              >

                {/* Number Monumental (Refined Scale) */}
                <div className="text-6xl md:text-7xl xl:text-8xl font-montserrat font-black text-7l-gold leading-none tracking-tighter drop-shadow-[0_10px_30px_rgba(242,169,0,0.15)] transition-transform duration-500 group-hover:scale-[1.02]">
                  <AnimatedNumber value={stat.num} prefix={stat.prefix} />
                </div>

                {/* Elegant Micro-Divider */}
                <div className="w-8 h-[1px] bg-7l-gold/40 group-hover:w-16 group-hover:bg-7l-gold transition-all duration-700 ease-out"></div>

                {/* Label Clean */}
                <span className="text-[10px] md:text-[11px] font-montserrat font-black uppercase tracking-[0.3em] text-white/80 group-hover:text-white transition-colors duration-500">
                  {stat.label}
                </span>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

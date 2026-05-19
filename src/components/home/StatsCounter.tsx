"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

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
  const stats = [
    { num: 16, prefix: "+", label: "Años de Experiencia" },
    { num: 200, prefix: "+", label: "Proyectos Ejecutados" },
    { num: 50, prefix: "+", label: "Unidades Especializadas" }
  ];

  return (
    <div className="relative overflow-hidden bg-black flex items-center justify-center min-h-[60vh] md:min-h-[70vh]">
      {/* Background Video Layer - Absolute (Fix iOS Safari: fixed+clip-path incompatible) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-100 brightness-100 contrast-110 saturate-130"
          >
            <source src="/videos/lormar_3.webm" type="video/webm" />
          </video>
        </div>
      </div>

      {/* Content Layer - Monumental Numbers Over Background Video */}
      <section className="py-32 md:py-48 relative z-20 w-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
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

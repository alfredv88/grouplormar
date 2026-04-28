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
    { num: 50, prefix: "+", label: "Unidades Especializadas" },
    { num: 0, prefix: "", label: "Índice LTI (Seguridad)" }
  ];

  return (
    <div className="relative overflow-hidden bg-7l-black">
      {/* Background Video Layer - Static/Parallax Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 contrast-110"
        >
          <source src="/videos/lormar 2.webm" type="video/webm" />
        </video>
        {/* Subtle Ambient Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-7l-black via-transparent to-7l-black z-10 opacity-70" />
      </div>

      <section className="py-80 relative z-20">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center space-y-4 relative group"
              >
                {/* HUD Decorator */}
                <div className="absolute -top-6 text-[7px] font-syncopate text-7l-gold/20 tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity">
                  DATA_VERIFIED_[{i + 1}]
                </div>

                {/* Number Monumental */}
                <div className="text-7xl md:text-8xl xl:text-9xl font-future text-7l-gold leading-none tracking-tighter drop-shadow-[0_10px_30px_rgba(242,169,0,0.2)]">
                  <AnimatedNumber value={stat.num} prefix={stat.prefix} />
                </div>

                {/* Minimalist Divider */}
                <div className="w-10 h-[1.5px] bg-gradient-to-r from-transparent via-7l-gold to-transparent opacity-60"></div>

                {/* Label Clean */}
                <span className="text-[10px] md:text-[11px] font-syncopate font-bold uppercase tracking-[0.4em] text-white">
                  {stat.label}
                </span>

                <div className="pt-2 text-[7px] font-syncopate text-white/20 tracking-widest font-black uppercase">
                  Audited System
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

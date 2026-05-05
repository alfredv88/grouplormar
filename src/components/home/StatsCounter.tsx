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
    <div className="relative overflow-hidden bg-7l-black" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}>
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

      <section className="py-96 relative z-20">
        <div className="w-full max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center space-y-4 relative group"
              >

                {/* Number Monumental (Reduced 20%) */}
                <div className="text-6xl md:text-7xl xl:text-8xl font-montserrat font-black text-7l-gold leading-none tracking-tighter drop-shadow-[0_10px_30px_rgba(242,169,0,0.2)]">
                  <AnimatedNumber value={stat.num} prefix={stat.prefix} />
                </div>

                {/* Minimalist Divider */}
                <div className="w-12 h-[2px] bg-7l-gold"></div>

                {/* Label Clean */}
                <span className="text-[10px] md:text-[11px] font-montserrat font-bold uppercase tracking-[0.4em] text-white">
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

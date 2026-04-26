"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function AnimatedNumber({ value, prefix = "" }: { value: number, prefix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { duration: 2500, bounce: 0 });
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
    { num: 15, prefix: "+", label: "Años de Trayectoria" },
    { num: 200, prefix: "+", label: "Proyectos Ejecutados" },
    { num: 50, prefix: "+", label: "Equipos Propios" },
    { num: 0, prefix: "", label: "Accidentes LTI" }
  ];

  return (
    <div className="relative overflow-hidden [clip-path:inset(0_0_0_0)]">
      {/* Background Video (Fixed Effect) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40 brightness-110"
        >
          <source src="/videos/lormar 2.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-[#080808]/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-7l-black/80 via-transparent to-7l-black/80 z-10"></div>
      </div>

      <section className="py-96 text-white px-6 relative z-20">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-20 text-center"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4 group flex flex-col items-center"
              >
                <div className="text-[80px] md:text-[100px] font-future text-7l-gold leading-none tracking-tight drop-shadow-[0_10px_30px_rgba(255,191,0,0.2)] group-hover:scale-105 transition-transform flex justify-center">
                  <AnimatedNumber value={stat.num} prefix={stat.prefix} />
                </div>
                <div className="w-12 h-[1px] bg-7l-gold"></div>
                <span className="text-[10px] font-syncopate font-bold uppercase tracking-[0.4em] text-white/80">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

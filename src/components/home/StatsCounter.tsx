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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Technical Metadata (Engineering Layer) */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                  <span className="font-mono text-[8px] tracking-[0.3em] text-white">7L-DATA-0{i+1}</span>
                  <div className="w-8 h-[1px] bg-7l-gold/40"></div>
                </div>

                {/* Number Monumental (Video Mask Effect) */}
                <div className="relative">
                  <div 
                    className="text-7xl md:text-8xl xl:text-9xl font-montserrat font-black leading-none tracking-tighter mix-blend-screen bg-clip-text text-transparent bg-cover bg-center"
                    style={{ 
                      backgroundImage: 'url("/images/concrete-texture.jpg")', // Fallback texture
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 bg-7l-gold"></div>
                    <AnimatedNumber value={stat.num} prefix={stat.prefix} />
                  </div>
                  
                  {/* Outer Glow (Subtle) */}
                  <div className="absolute inset-0 blur-2xl bg-7l-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
                </div>

                {/* Label Refined */}
                <div className="mt-8 flex flex-col items-center gap-3">
                  <div className="w-6 h-[1px] bg-7l-gold/50 group-hover:w-12 transition-all duration-700"></div>
                  <span className="text-[10px] font-montserrat font-black uppercase tracking-[0.5em] text-white/40 group-hover:text-white transition-colors duration-500">
                    {stat.label}
                  </span>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

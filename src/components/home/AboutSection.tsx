"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BROCHURE_DATA } from "@/constants/brochureData";
import { HardHat, Truck, ShieldCheck, Zap, Lightbulb, Sliders, Copy, Check } from "lucide-react";

// Mapeo de iconos para los valores basado en la estética del brochure
const VALUE_ICONS = [
  <ShieldCheck key="1" size={20} />, // Responsabilidad
  <HardHat key="2" size={20} />,      // Integridad
  <Zap key="3" size={20} />,          // Calidad
  <Truck key="4" size={20} />,        // Eficiencia
  <Lightbulb key="5" size={20} />,    // Innovación
];

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transform for the large background logo watermark
  const logoY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  // Parallax transform for the 120T crane (glides upward and scales up as you scroll)
  const craneY = useTransform(scrollYProgress, [0, 1], [150, -50]);
  const craneScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.08]);

  return (
    <section ref={containerRef} id="nosotros" className="py-40 md:py-48 lg:py-56 bg-[#F7F7F7] relative overflow-hidden cinematic-reveal border-b border-[#0D0D0D]/5">
      

      {/* Vertical Branding Column (Logo Oficial - Posición Fija y Consolidada de Producción) */}
      <motion.div 
        className="absolute top-1/2 flex items-center justify-center select-none hidden lg:flex pointer-events-none z-0"
        style={{ 
          left: "-200px",
          y: logoY,
        }}
      >
        <div 
          className="relative"
          style={{
            width: "799px",
            height: "315px",
            transform: "rotate(-90deg)",
            opacity: 0.15,
          }}
        >
          <Image
            src="/logos/logo lormar sin rif gris.webp"
            alt="Logo Lormar"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Background Crane Element (Grua 120t - Derecha) */}
      <motion.div 
        className="absolute right-0 bottom-0 pointer-events-none select-none z-0 origin-bottom-right"
        style={{
          width: "580px",
          height: "580px",
          y: craneY,
          scale: craneScale,
        }}
      >
        <Image
          src="/images/equipment/grua 120t.png"
          alt="Grúa 120T Lormar"
          fill
          className="object-contain"
          style={{ objectPosition: "bottom right" }}
        />
      </motion.div>

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-24 lg:px-32 lg:pl-48 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* IZQUIERDA: EL ALMA DE LORMAR (ESTILO S4 REFORZADO) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h2 className="text-h2 flex flex-col !text-[#0d0d0d]">
                <span className="text-7l-gold-text drop-shadow-sm">ADN</span>
                <span className="-mt-2">NUESTRO</span>
              </h2>
              <div className="w-32 h-[6px] bg-7l-gold"></div>
            </div>

            <div className="space-y-8">
               <h3 className="font-montserrat font-black leading-none uppercase tracking-[0.1em]" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 24px)', color: '#0d0d0d' }}>
                 SOLIDEZ <span className="text-7l-gold-text">SIN FRONTERAS.</span>
               </h3>
               
               <p className="font-montserrat text-lg leading-relaxed font-bold italic border-l-4 border-7l-gold pl-6" style={{ color: '#0d0d0d' }}>
                 &ldquo;{BROCHURE_DATA.identity.profile}&rdquo;
               </p>

               <p className="font-montserrat text-[clamp(14px,1.5vw,16px)] leading-relaxed font-bold" style={{ color: '#0d0d0d' }}>
                 Elevamos los estándares de ejecución en el oriente del país, consolidando una infraestructura de activos propia que garantiza respuestas inmediatas y soluciones de ingeniería de alta gama.
               </p>
            </div>
          </div>

          {/* DERECHA: LOS VALORES (ESTILO EXECUTIVE S4) */}
          <div className="lg:col-span-7 border-l border-gray-100 lg:pl-16 pt-2">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-[1px] bg-7l-gold"></div>
                      <span className="font-montserrat text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: '#0d0d0d' }}>PRINCIPIOS FUNDAMENTALES</span>
                   </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {BROCHURE_DATA.values.map((val, idx) => (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group p-8 bg-white border border-[#0D0D0D]/10 hover:border-7l-gold/30 transition-all duration-500 relative z-10 shadow-sm hover:shadow-xl cursor-default"
                  >
                    <div className="relative z-20 flex flex-col gap-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 shrink-0 rounded-none bg-7l-gold flex items-center justify-center text-black shadow-md shadow-7l-gold/10 group-hover:scale-105 transition-transform duration-500">
                          {VALUE_ICONS[idx]}
                        </div>
                        <h4 className="text-h4 !text-[#0D0D0D] !text-[14px] group-hover:text-7l-gold transition-colors duration-500">
                          {val.title}
                        </h4>
                      </div>
                      <p className="font-montserrat text-[13px] leading-relaxed font-bold !text-[#0D0D0D] opacity-90 group-hover:opacity-100 transition-opacity">
                        {val.description}
                      </p>
                    </div>
                  </motion.div>
               ))}
             </div>
          </div>
        </div>

      </div>

      {/* Elegant Architectural Separator Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-7l-gold/40 to-transparent flex items-center justify-center">
        <div className="w-2 h-2 rotate-45 bg-7l-gold shadow-[0_0_8px_rgba(242,169,0,0.8)]" />
      </div>

    </section>
  );
}

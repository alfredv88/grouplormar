"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

export default function YardParallax() {
  const t = useTranslations('YardParallax');
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 1. Ancho Dinámico de la Tarjeta Flotante (Aumentado el efecto de reducimiento a 55%)
  const cardWidth = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    ["55%", "100%", "100%", "55%"]
  );

  // 2. Alto Dinámico de la Tarjeta Flotante (Aumentado el efecto de reducimiento a 65%)
  const cardHeight = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    ["65%", "100%", "100%", "65%"]
  );

  // 3. Esquinas Rectas Industriales (Sin bordes redondeados en todo el efecto)
  const cardBorderRadius = "0px";

  // 4. Zoom Tridimensional del Lente Interno (Cinematic Camera Drift)
  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.15, 1.0, 1.15]
  );

  // 5. Borde de Joyería de Oro Dinámico (Se desvanece por completo al expandirse al 100%)
  const cardBorderOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [1, 0, 0, 1]
  );

  // Efecto de movimiento de texto (Parallax suave y ejecutivo)
  const textY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[80vh] md:h-[100vh] overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Video Layer - Card-to-Fullscreen Morphing */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.div 
          style={{ 
            width: cardWidth,
            height: cardHeight,
            borderRadius: cardBorderRadius,
            boxShadow: "0 25px 60px -15px rgba(0,0,0,0.85)"
          }}
          className="relative overflow-hidden bg-black/80 flex items-center justify-center border-0"
        >
          <motion.div style={{ scale: videoScale }} className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-95 brightness-100 contrast-110 saturate-130"
            >
              <source src="/videos/DJI_0323.webm" type="video/webm" />
            </video>
          </motion.div>
          
          {/* Soft atmospheric gradients */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10"></div>

          {/* Subtle Jewelry Border Overlay */}
          <motion.div 
            style={{ opacity: cardBorderOpacity }}
            className="absolute inset-0 rounded-[inherit] border border-7l-gold/20 pointer-events-none z-20"
          />
        </motion.div>
      </div>

      {/* Content Layer - Quiet Luxury Layout */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <span className="font-montserrat text-7l-gold tracking-[0.8em] text-[9px] font-black uppercase mb-8 block opacity-80">
            {t('visionDirecta')}
          </span>
          
          <h2 className="text-5xl md:text-8xl font-future text-white uppercase leading-[0.9] tracking-normal">
            {t('capacidad')} <br /> <span className="text-7l-gold">{t('instalada')}</span> {t('real')}
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}

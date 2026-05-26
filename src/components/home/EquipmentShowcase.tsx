"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { BROCHURE_DATA } from "@/constants/brochureData";
import Magnetic from "@/components/ui/Magnetic";
import { useTranslations } from "next-intl";

const equipmentImages: Record<string, string> = {
  "izamiento": "/images/equipment/grua-120t.webp",
  "pala-mecanica": "/images/equipment/pala_mecanica.webp",
  "servicios-pozo": "/images/equipment/pulling_unit.webp",
  "movimiento-tierra": "/images/equipment/movimiento_tierra.webp",
  "transporte": "/images/equipment/chuto_batea.webp",
  "elevadores": "/images/equipment/manlift.webp",
  "asfalto": "/images/equipment/asphalt_finisher_real_daylight.webp",
  "concreto": "/images/equipment/DJI_0281.webp",
  "equipos-menores": "/images/equipment/planta_electrica.webp",
};

const showcaseCategories = BROCHURE_DATA.machinery;
const ITEM_HEIGHT = 48;

export default function EquipmentShowcase() {
  const t = useTranslations('EquipmentShowcase');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [cardWidth, setCardWidth] = useState(360);

  // Calcular ancho de tarjeta según viewport — Mobile adaptativo
  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (vw < 480) setCardWidth(vw - 48);
      else if (vw < 768) setCardWidth(vw - 64);
      else setCardWidth(360);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Autoplay Inteligente: Avanza cada 5 segundos si está activo y no se hace hover
  useEffect(() => {
    if (!autoplay || isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseCategories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, isHovered]);

  const handleMenuClick = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % showcaseCategories.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + showcaseCategories.length) % showcaseCategories.length);
  };

  const progress = ((activeIndex + 1) / showcaseCategories.length) * 100;

  return (
    <section 
      className="py-16 md:py-32 lg:py-48 bg-transparent relative z-20 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Blueprint Monumental y Sutil */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        {/* Rombo Exterior Gigante */}
        <motion.div 
          className="absolute border border-white/[0.06] rounded-none"
          style={{
            width: "950px",
            height: "950px",
            top: "5%",
            right: "-8%",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 210, repeat: Infinity, ease: "linear" }}
        />
        {/* Rombo Interior Dorado Concéntrico */}
        <motion.div 
          className="absolute border border-7l-gold/[0.05] rounded-none"
          style={{
            width: "1150px",
            height: "1150px",
            top: "-5%",
            right: "-12%",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 280, repeat: Infinity, ease: "linear" }}
        />
        {/* Retícula de Ingeniería - Línea técnica horizontal muy tenue */}
        <div className="absolute left-0 right-0 h-[1px] bg-white/[0.05] top-[50%]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[1800px] mx-auto px-5 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10"
      >
        
        {/* Left Side: Navigation (Elite Standard) */}
        <div className="lg:col-span-3 flex flex-col relative z-10 pt-0 lg:pt-4">
          <div className="mb-8 lg:mb-16">
            <h2 className="text-h2 mb-4">
              {t('titulo1')} <br /> <span className="text-7l-gold">{t('titulo2')}</span>
            </h2>
            <p className="font-montserrat text-[10px] text-white tracking-[0.2em] uppercase leading-relaxed max-w-[200px] font-bold">
              {t('subtitulo')}
            </p>
          </div>

          <div className="flex flex-row flex-wrap lg:flex-col relative lg:border-l border-white/5 gap-2 lg:gap-0">
            {/* Precision Indicator */}
            <motion.div 
              className="absolute left-[-1px] w-[2px] bg-7l-gold z-10 shadow-[0_0_15px_rgba(242,169,0,0.8)]"
              animate={{ top: activeIndex * ITEM_HEIGHT, height: ITEM_HEIGHT }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
            />

            {showcaseCategories.map((cat, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={cat.id}
                  onClick={() => handleMenuClick(i)}
                  className="h-[48px] lg:h-[48px] flex items-center justify-between cursor-pointer group lg:pl-6 px-3 lg:px-0 transition-all border lg:border-0 border-white/10 rounded-none lg:rounded-none"
                >
                  <span className={`font-montserrat text-[9px] lg:text-[10px] font-bold tracking-[0.15em] lg:tracking-[0.2em] uppercase transition-all duration-300 lg:transform lg:group-hover:translate-x-2 ${isActive ? 'text-7l-gold' : 'text-white/60 group-hover:text-7l-gold'}`}>
                    {t(`categories.${cat.id}`)}
                  </span>
                  <ChevronRight size={12} className={`hidden lg:block transition-all duration-300 ${isActive ? 'text-7l-gold scale-110 opacity-100' : 'opacity-0 group-hover:opacity-50 group-hover:translate-x-1'}`} />
                </div>
              );
            })}
          </div>


        </div>

        {/* Right Side: Cards (Framer Motion Kinetic Carousel) */}
        <div className="lg:col-span-9 relative flex flex-col overflow-hidden">
          
          {/* Slider Container / Mask */}
          <div className="w-full overflow-hidden pb-24">
            <motion.div
              className="flex gap-10 cursor-grab active:cursor-grabbing"
              animate={{ x: -activeIndex * (cardWidth + 40) }}
              transition={{ type: "spring", stiffness: 150, damping: 22 }}
              drag="x"
              dragConstraints={{
                left: -(showcaseCategories.length - 1) * (cardWidth + 40),
                right: 0,
              }}
              onDragStart={() => setAutoplay(false)}
              onDragEnd={(event, info) => {
                setAutoplay(false);
                const threshold = 80; // Umbral de arrastre para saltar tarjeta
                if (info.offset.x < -threshold && activeIndex < showcaseCategories.length - 1) {
                  setActiveIndex((prev) => prev + 1);
                } else if (info.offset.x > threshold && activeIndex > 0) {
                  setActiveIndex((prev) => prev - 1);
                }
              }}
            >
              {showcaseCategories.map((cat) => {
                const localizedItems = t.raw(`items.${cat.id}`) as string[];
                return (
                  <div key={cat.id} className="relative flex-none select-none" onClick={() => setAutoplay(false)}>
                    <div 
                      className="bg-[#080808] border border-zinc-900 hover:border-7l-gold/50 transition-all duration-500 flex flex-col group overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative"
                      style={{ width: `${cardWidth}px`, height: '560px' }}
                    >
                      
                      {/* Media Frame - Dominancia Visual (100% Nítido y Brillante) */}
                      <div className="h-[250px] shrink-0 relative overflow-hidden bg-[#080808] pointer-events-none">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-105"
                          style={{ backgroundImage: equipmentImages[cat.id] ? `url('${equipmentImages[cat.id]}')` : 'none' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700" />
                      </div>

                      {/* Content Frame */}
                      <div className="p-8 flex flex-col flex-1 relative z-30">
                        
                        {/* Header Group */}
                        <div className="mb-6 flex flex-col gap-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[7px] font-montserrat text-7l-gold tracking-[0.4em] uppercase font-black">
                              {t('fichaTecnica')}
                            </span>
                            <span className="font-mono text-[8px] text-white tracking-tighter uppercase font-bold">
                              LRM-MOD-{cat.id.substring(0, 3).toUpperCase()}
                            </span>
                          </div>
                          
                          <h3 className="text-h3 !text-[18px] leading-[1.2] block min-h-[44px]">
                            {t(`categories.${cat.id}`)}
                          </h3>
                        </div>

                        {/* Inventory List */}
                        <div className="space-y-3 flex-1 border-l border-7l-gold/30 pl-6 ml-1 mt-1">
                          {localizedItems.slice(0, 4).map((item, idx) => (
                            <p key={idx} className="font-montserrat text-[10px] text-white uppercase tracking-[0.1em] leading-tight font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                              {item}
                            </p>
                          ))}
                        </div>

                        {/* Clean Action Footer */}


                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-8">
            <div className="flex-1 h-[2px] bg-zinc-900 relative overflow-hidden">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-7l-gold"
                style={{ width: `${Math.max(5, progress)}%` }}
              />
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handlePrev} 
                className="w-11 h-11 border border-white/10 text-white/50 hover:border-7l-gold hover:text-7l-gold flex items-center justify-center transition-all duration-300 rounded-none bg-transparent"
                aria-label="Anterior"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={handleNext} 
                className="w-11 h-11 border border-white/10 text-white/50 hover:border-7l-gold hover:text-7l-gold flex items-center justify-center transition-all duration-300 rounded-none bg-transparent"
                aria-label="Siguiente"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

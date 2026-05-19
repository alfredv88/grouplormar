"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { BROCHURE_DATA } from "@/constants/brochureData";
import Magnetic from "@/components/ui/Magnetic";

const equipmentImages: Record<string, string> = {
  "izamiento": "/images/heavy-crane.png",
  "pala-mecanica": "/images/equipment/pala_mecanica.png",
  "servicios-pozo": "/images/pulling-unit.png",
  "movimiento-tierra": "/images/WhatsApp Image 2026-04-09 at 2.40.17 PM (1).jpeg",
  "transporte": "/images/WhatsApp Image 2026-04-09 at 2.40.18 PM (1).jpeg",
  "elevadores": "/images/manlift.png",
  "asfalto": "/images/equipment/asphalt_finisher_real_daylight.png",
  "concreto": "/images/equipment/DJI_0281.JPG",
  "equipos-menores": "/images/lighting-tower.png",
};

const showcaseCategories = BROCHURE_DATA.machinery;
const ITEM_HEIGHT = 48;

export default function EquipmentShowcase() {
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
      className="py-48 bg-transparent relative z-20 overflow-hidden"
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
        className="w-full max-w-[1800px] mx-auto px-5 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative z-10"
      >
        
        {/* Left Side: Navigation (Elite Standard) */}
        <div className="lg:col-span-3 flex flex-col relative z-10 pt-4">
          <div className="mb-16">
            <h2 className="text-h2 mb-4">
              MAQUINARIA <br /> <span className="text-7l-gold">Y EQUIPOS</span>
            </h2>
            <p className="font-montserrat text-[10px] text-white tracking-[0.2em] uppercase leading-relaxed max-w-[200px] font-bold">
              Infraestructura técnica para ejecución de alto impacto operativo.
            </p>
          </div>

          <div className="flex flex-col relative border-l border-white/5">
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
                  className="h-[48px] flex items-center justify-between cursor-pointer group pl-6 transition-all"
                >
                  <span className={`font-montserrat text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 transform group-hover:translate-x-2 ${isActive ? 'text-7l-gold shadow-[0_0_10px_rgba(242,169,0,0.2)]' : 'text-white group-hover:text-7l-gold'}`}>
                    {cat.title}
                  </span>
                  <ChevronRight size={12} className={`transition-all duration-300 ${isActive ? 'text-7l-gold scale-110 opacity-100' : 'opacity-0 group-hover:opacity-50 group-hover:translate-x-1'}`} />
                </div>
              );
            })}
          </div>

          <div className="mt-20">
            <Link 
              href="/portafolio" 
              className="group/btn inline-flex items-center gap-4 text-[10px] font-montserrat font-black tracking-[0.3em] text-white uppercase transition-all"
            >
              <span className="group-hover/btn:text-7l-gold transition-colors duration-500">VER CATÁLOGO</span>
              <div className="w-8 h-[2px] bg-white/20 group-hover/btn:w-12 group-hover/btn:bg-7l-gold transition-all duration-500 ease-out" />
            </Link>
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
              {showcaseCategories.map((cat) => (
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
                            FICHA TÉCNICA
                          </span>
                          <span className="font-mono text-[8px] text-white tracking-tighter uppercase font-bold">
                            LRM-MOD-{cat.id.substring(0, 3).toUpperCase()}
                          </span>
                        </div>
                        
                        <h3 className="text-h3 !text-[18px] leading-[1.2] block min-h-[44px]">
                          {cat.title}
                        </h3>
                      </div>

                      {/* Inventory List */}
                      <div className="space-y-3 flex-1 border-l border-7l-gold/30 pl-6 ml-1 mt-1">
                        {cat.items.slice(0, 4).map((item, idx) => (
                          <p key={idx} className="font-montserrat text-[10px] text-white uppercase tracking-[0.1em] leading-tight font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                            {item}
                          </p>
                        ))}
                      </div>

                      {/* Clean Action Footer */}
                      <div className="pt-6 mt-auto flex items-center justify-end">
                        <Link href="/portafolio" className="flex items-center gap-4 cursor-pointer group/action">
                          <span className="font-montserrat text-[9px] font-black text-white uppercase tracking-[0.2em] group-hover/action:text-7l-gold transition-colors">
                            VER FLOTA
                          </span>
                          <Magnetic range={40} strength={0.25}>
                            <div className="w-11 h-11 border border-white/10 flex items-center justify-center group-hover/action:border-7l-gold group-hover/action:bg-7l-gold/5 transition-all duration-500 rounded-none relative overflow-hidden">
                              <ArrowUpRight size={16} className="text-white group-hover/action:text-7l-gold transition-all duration-500 group-hover/action:rotate-45" />
                            </div>
                          </Magnetic>
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
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

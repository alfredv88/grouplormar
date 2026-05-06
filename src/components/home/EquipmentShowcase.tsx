"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { BROCHURE_DATA } from "@/constants/brochureData";

const equipmentImages: Record<string, string> = {
  "izamiento": "/images/heavy-crane.png",
  "pala-mecanica": "/images/WhatsApp Image 2026-04-09 at 2.40.14 PM.jpeg",
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setScrollProgress((scrollLeft / (maxScroll || 1)) * 100);

      const cardWidth = 360 + 40; // 5% narrower (from 380 to 360) + gap
      const index = Math.round(scrollLeft / cardWidth);
      if (index !== activeIndex && index < showcaseCategories.length) {
        setActiveIndex(index);
      }
    }
  };

  const handleMenuClick = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 360 + 40;
      scrollRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    }
  };

  const scrollBy = (direction: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-48 bg-transparent relative z-20 overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-10 md:px-24 grid lg:grid-cols-12 gap-16">
        
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
              const isVisible = i >= activeIndex && i < activeIndex + 3;
              return (
                <div
                  key={cat.id}
                  onClick={() => handleMenuClick(i)}
                  className="h-[48px] flex items-center justify-between cursor-pointer group pl-6 transition-all"
                >
                  <span className={`font-montserrat text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${isActive ? 'text-7l-gold' : 'text-white group-hover:text-7l-gold'}`}>
                    {cat.title}
                  </span>
                  <ChevronRight size={12} className={`transition-all duration-500 ${isActive ? 'text-7l-gold scale-110 opacity-100' : 'opacity-0'}`} />
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

        {/* Right Side: Cards (Professional Gallery) */}
        <div className="lg:col-span-9 relative flex flex-col">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-10 overflow-x-auto snap-x snap-mandatory pb-24 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
            {showcaseCategories.map((cat, i) => (
              <div key={cat.id} className="relative flex-none snap-start">
                <div className="w-[360px] h-[560px] bg-[#080808] border border-zinc-900 hover:border-7l-gold/50 transition-all duration-500 flex flex-col group overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative">
                  
                  {/* Decorative Industrial Wireframe (HUECO) - FINAL FROZEN CONFIG */}
                  <div 
                    className="absolute border border-white/20 transition-all duration-500 pointer-events-none z-10"
                    style={{ 
                      bottom: '-105px',
                      right: '-178px',
                      width: '259px',
                      height: '259px',
                      transform: 'rotate(65deg)',
                    }}
                  />

                  {/* Decorative Industrial Square (SÓLIDO) - FINAL FROZEN CONFIG */}
                  <div 
                    className="absolute transition-transform duration-500 pointer-events-none z-20 bg-7l-gold shadow-[0_0_30px_rgba(242,169,0,0.3)]"
                    style={{ 
                      bottom: '36px',
                      right: '-53px',
                      width: '100px', // size (400) / 4
                      height: '100px',
                      transform: 'rotate(316deg)',
                    }}
                  />
                  
                  {/* Media Frame - Dominancia Visual */}
                  <div className="h-[300px] relative overflow-hidden bg-black">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[4s] ease-out group-hover:scale-105"
                      style={{ backgroundImage: equipmentImages[cat.id] ? `url('${equipmentImages[cat.id]}')` : 'none' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                  </div>

                    {/* Content Frame - Refinado y Compacto (FORZADO AL FRENTE) */}
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
                        
                        <h3 className="text-h3 !text-[18px] leading-[1.2] block">
                          {cat.title}
                        </h3>
                      </div>

                      {/* Inventory List - Más aire y legibilidad */}
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
                        <div className="w-11 h-11 border border-white/10 flex items-center justify-center group-hover/action:border-7l-gold group-hover/action:bg-7l-gold/5 transition-all duration-500 rounded-none relative overflow-hidden">
                          <ArrowUpRight size={16} className="text-white group-hover/action:text-7l-gold transition-all duration-500 group-hover/action:rotate-45" />
                        </div>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-8">
            <div className="flex-1 h-[2px] bg-zinc-900 relative overflow-hidden">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-7l-gold"
                style={{ width: `${Math.max(10, scrollProgress)}%` }}
              />
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => scrollBy(-1)} 
                className="w-11 h-11 border border-white/10 text-white/50 hover:border-7l-gold hover:text-7l-gold flex items-center justify-center transition-all duration-300 rounded-none bg-transparent"
                aria-label="Anterior"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={() => scrollBy(1)} 
                className="w-11 h-11 border border-white/10 text-white/50 hover:border-7l-gold hover:text-7l-gold flex items-center justify-center transition-all duration-300 rounded-none bg-transparent"
                aria-label="Siguiente"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

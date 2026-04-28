"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";
import { BROCHURE_DATA } from "@/constants/brochureData";

// Mapping images to brochure categories
const equipmentImages: Record<string, string> = {
  "izamiento": "/images/equipment/izamiento_100t_real_daylight.png",
  "pala-mecanica": "/images/equipment/excavadora_real_daylight.png",
  "servicios-pozo": "/images/equipment/cabillero_real_daylight.png",
  "movimiento-tierra": "/images/equipment/motoniveladora_real_daylight.png",
  "transporte": "/images/equipment/transporte_lowboy_real_daylight.png",
  "asfalto": "/images/equipment/asphalt_finisher_real_daylight.png",
};

// We filter categories that have images for the "Highlights" view
const showcaseCategories = BROCHURE_DATA.machinery.filter(cat => equipmentImages[cat.id]);

export default function EquipmentShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = (scrollLeft / maxScroll) * 100;
      setScrollProgress(progress);

      const cardWidth = 300 + 40; // Smaller card + gap
      const index = Math.round(scrollLeft / cardWidth);
      if (index !== activeIndex && index < showcaseCategories.length) {
        setActiveIndex(index);
      }
    }
  };

  const handleMenuClick = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 300 + 40;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section className="py-56 bg-transparent relative z-20 overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto pl-6 md:pl-12 lg:pl-20 pr-0 grid lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Side: Navigation & Info */}
        <div className="lg:col-span-3 flex flex-col justify-between relative z-10 py-6 pr-6 md:pr-12 lg:pr-0">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-7l-gold rounded-full animate-pulse" />
              <span className="font-syncopate text-[7px] font-bold text-7l-gold tracking-[0.3em] uppercase">
                Fleet Highlights
              </span>
            </div>
            <h2 className="font-future uppercase text-white mb-6 tracking-tight leading-[0.9]" style={{ fontSize: 'clamp(1.8rem, 4vw, 36px)' }}>
              INVENTARIO <br /> <span className="text-7l-gold text-[0.8em]">DE ACTIVOS</span>
            </h2>
            <p className="font-montserrat text-[9px] text-white/50 tracking-[0.2em] uppercase mb-10 max-w-[200px] leading-relaxed">
              Infraestructura operativa propia.
            </p>
            
            <div className="flex flex-col border-t border-white/20">
              {showcaseCategories.map((cat, i) => {
                const isActive = activeIndex === i;
                return (
                  <div 
                    key={cat.id} 
                    onClick={() => handleMenuClick(i)}
                    className={`flex items-center justify-between py-4 border-b border-white/10 cursor-pointer transition-all ${isActive ? 'group is-active' : 'group hover:border-white/40'}`}
                  >
                    <span className={`font-syncopate text-[8px] font-bold tracking-[0.3em] uppercase transition-colors ${isActive ? 'text-7l-gold' : 'text-white/70 group-hover:text-white'}`}>
                      {cat.title}
                    </span>
                    <ChevronRight size={10} className={`transition-all duration-500 ${isActive ? 'text-7l-gold opacity-100 translate-x-0' : 'text-7l-gold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0'}`} />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-16 lg:mt-0">
            <Link href="/portafolio" className="group relative inline-flex items-center gap-4 px-6 py-3 overflow-hidden border border-white/10 transition-all duration-500 hover:border-7l-gold">
              <div className="absolute inset-0 bg-7l-gold translate-y-[101%] transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 font-syncopate text-[7px] font-bold uppercase tracking-[0.4em] text-white group-hover:text-7l-black transition-colors">VER CATÁLOGO</span>
              <ArrowRight size={10} className="relative z-10 text-7l-gold group-hover:text-7l-black transition-colors" />
            </Link>
          </div>
        </div>

        {/* Right Side: Asset Cards */}
        <div className="lg:col-span-9 relative flex flex-col pt-6">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-10 overflow-x-auto snap-x snap-mandatory pb-36 cursor-grab active:cursor-grabbing"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
            {showcaseCategories.map((cat, i) => (              <div key={cat.id} className="relative flex-none">
                <div className="relative min-w-[260px] md:min-w-[280px] lg:min-w-[300px] h-[440px] lg:h-[480px] snap-start bg-black/25 backdrop-blur-2xl border border-white/5 hover:border-white/20 transition-all duration-700 overflow-hidden group cinematic-reveal" style={{ animationDelay: `${i * 150}ms` }}>
                  
                  {/* Equipment Image (Clean & Bright) */}
                  <div className="h-[40%] w-full relative overflow-hidden bg-zinc-900/10 border-b border-white/10">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] scale-[1.02] group-hover:scale-[1.08] opacity-100" 
                      style={{ backgroundImage: `url('${equipmentImages[cat.id]}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-40" />
                  </div>

                  {/* Information Grid */}
                  <div className="p-6 flex flex-col h-[60%] justify-between relative">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-sm font-syne font-black text-white tracking-[0.2em] uppercase">
                          {cat.title}
                        </h3>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 border border-white/20 rounded-sm bg-white/5">
                          <ShieldCheck size={8} className="text-7l-gold" />
                          <span className="text-[6px] font-syncopate font-bold text-white/80 uppercase tracking-tight">Verified</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {cat.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 group/item">
                            <div className="w-1.5 h-[1px] bg-7l-gold mt-2 group-hover/item:w-3 transition-all duration-300" />
                            <p className="font-montserrat text-[11px] text-white font-medium leading-tight uppercase tracking-widest">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                          <span className="text-[6px] font-syncopate text-white/60 uppercase tracking-[0.2em]">Asset Unit</span>
                          <span className="text-[8px] font-syne text-white font-bold uppercase tracking-[0.15em]">{cat.id.replace('-', ' ')}</span>
                        </div>
                        <div className="text-[7px] font-syncopate text-white/70 border border-white/10 px-2 py-1 uppercase tracking-wider bg-white/5">
                          LRM-{cat.id.substring(0, 3).toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar & Controls */}
          <div className="absolute bottom-10 left-0 right-10 lg:right-40 flex items-center justify-between">
            <div className="w-[80%] h-[1px] bg-white/10 relative overflow-hidden">
               <motion.div 
                className="absolute left-0 top-0 h-full bg-7l-gold shadow-[0_0_15px_rgba(242,169,0,0.5)]"
                style={{ width: `${Math.max(10, scrollProgress)}%` }}
                transition={{ type: "spring", bounce: 0, duration: 0.1 }}
              />
            </div>
            <div className="flex gap-4">
              <button 
                onClick={scrollLeft} 
                className="w-12 h-12 flex items-center justify-center text-white/40 hover:text-white transition-all border border-white/10 hover:border-white/40 rounded-full group/btn"
              >
                <ArrowLeft size={18} className="transition-transform group-hover/btn:-translate-x-1" />
              </button>
              <button 
                onClick={scrollRight} 
                className="w-12 h-12 flex items-center justify-center text-white/40 hover:text-white transition-all border border-white/10 hover:border-white/40 rounded-full group/btn"
              >
                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

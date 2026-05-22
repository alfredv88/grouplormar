'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Shield, Settings, ArrowRight } from 'lucide-react';
import { useInView } from 'framer-motion';
import { machineryCategories, MachineryCategory } from '@/data/machineryData';

function MachineryCategoryPanel({ cat, index }: { cat: MachineryCategory; index: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const isEven = index % 2 === 0;

  useEffect(() => {
    if (!isInView || !autoPlay || !cat.items || cat.items.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cat.items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isInView, autoPlay, cat.items?.length]);

  // Lógica de Contraste B2B Inmersivo
  const getBgStyle = (idx: number) => {
    const styles = [
      { bg: 'bg-[#F7F7F7]', isGold: false, text: '!text-zinc-950', number: 'text-7l-gold', punchline: '!text-zinc-900', title: '!text-zinc-950' },
      { bg: 'bg-[#080808]', isGold: false, text: 'text-white', number: 'text-7l-gold', punchline: 'text-zinc-400', title: 'text-white' },
      { bg: 'bg-7l-gold', isGold: true, text: '!text-black', number: '!text-white', punchline: '!text-black', title: '!text-black' },
      { bg: 'bg-[#0a1111]', isGold: false, text: 'text-white', number: 'text-7l-gold', punchline: 'text-zinc-400', title: 'text-white' },
      { bg: 'bg-[#F7F7F7]', isGold: false, text: '!text-zinc-950', number: 'text-7l-gold', punchline: '!text-zinc-900', title: '!text-zinc-950' },
      { bg: 'bg-[#080808]', isGold: false, text: 'text-white', number: 'text-7l-gold', punchline: 'text-zinc-400', title: 'text-white' },
    ];
    return styles[idx % styles.length];
  };

  const style = getBgStyle(index);
  const currentImage = cat.items[activeIndex]?.image || cat.image;

  return (
    <React.Fragment>
      {/* SECCIÓN INTERMEDIA: PARALLAX DE POTENCIA */}
      {index === 3 && (
        <section className="relative w-full py-32 overflow-hidden bg-black flex items-center justify-center border-y border-white/10">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="object-cover w-full h-full opacity-95 brightness-100 contrast-110 saturate-130 scale-105"
            >
              <source src="/videos/DJI_0323.webm" type="video/webm" />
            </video>
            {/* Degradados de fundido suaves con secciones adyacentes al estilo YardParallax */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
          </div>

          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-center">
            <Settings size={40} className="text-7l-gold mx-auto mb-6 animate-[spin_12s_linear_infinite]" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-future text-white uppercase tracking-widest mb-12">
              POTENCIA BRUTA <br /><span className="text-7l-gold">AL SERVICIO</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-12 bg-white/[0.02] backdrop-blur-md">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-montserrat font-black text-white mb-2">100<span className="text-7l-gold text-xl">Ton</span></span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-bold">Capacidad Izamiento</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-montserrat font-black text-white mb-2">140<span className="text-7l-gold text-xl">Ton</span></span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-bold">Carga Transporte</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-montserrat font-black text-white mb-2">24/7</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-bold">Disponibilidad</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-montserrat font-black text-white mb-2">100<span className="text-7l-gold text-xl">%</span></span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-bold">Flota Propia</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BLOQUE INMERSIVO DE CATÁLOGO */}
      <section ref={containerRef} className={`relative w-full flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[60vh] md:min-h-[700px] overflow-hidden group`}>
        
        {/* Contenedor Fotográfico Interactivo */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden bg-zinc-950/50">
          <div className="absolute inset-0 transition-opacity duration-700 flex items-center justify-center p-8 md:p-16">
            <Image
              src={currentImage}
              alt={cat.items[activeIndex]?.name || cat.category}
              fill
              className="object-contain p-12 lg:p-24 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply group-hover:bg-black/0 transition-colors duration-700 pointer-events-none" />
          
          {/* Gradiente B2B para integración con texto */}
          <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} ${
            style.bg === 'bg-7l-gold' ? 'from-7l-gold/20' : 
            style.bg === 'bg-[#F7F7F7]' ? 'from-[#F7F7F7]/30' : 
            'from-zinc-950/40'
          } to-transparent mix-blend-multiply opacity-50 pointer-events-none`} />
        </div>
        
        {/* Contenedor Ficha Técnica */}
        <div 
          className={`relative w-full lg:w-1/2 flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6 group/content transition-colors duration-500 ${style.bg}`}
          style={style.isGold ? { 
            backgroundImage: "radial-gradient(rgba(0,0,0,0.12) 1px, transparent 0)", 
            backgroundSize: "24px 24px" 
          } : style.bg === 'bg-[#0a1111]' ? {
            backgroundImage: "radial-gradient(rgba(249,179,49,0.04) 1px, transparent 0)", 
            backgroundSize: "24px 24px"
          } : undefined}
        >
          
          <div className="flex items-center space-x-3">
            <span className={`font-future text-xs ${style.isGold ? 'text-black/40' : 'text-7l-gold/60'}`}>
              {cat.id}
            </span>
            <span className={`h-px w-6 ${style.isGold ? 'bg-black/20' : 'bg-7l-gold/30'}`} />
            <span
              className={`font-montserrat text-[10px] font-black tracking-[0.4em] uppercase ${
                style.isGold ? 'text-black/60' :
                style.bg === 'bg-[#F7F7F7]' ? 'text-zinc-500' :
                'text-zinc-400'
              }`}
            >
              {cat.category}
            </span>
          </div>
            
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-future leading-none uppercase transition-transform duration-500 ease-out group-hover/content:translate-x-1 ${style.title}`}
            dangerouslySetInnerHTML={{ 
              __html: cat.title
                        .replace('text-white', style.isGold ? '!text-white' : style.bg === 'bg-[#F7F7F7]' ? 'text-7l-gold' : 'text-white')
                        .replace('text-7l-gold', style.isGold ? '!text-white' : 'text-7l-gold') 
            }}
          />
          
          <p className={`text-base md:text-lg font-montserrat leading-relaxed font-bold max-w-xl ${style.punchline}`}>
            {cat.description}
          </p>
          
          <div className={`mt-6 max-w-xl border-t ${
            style.isGold ? 'border-black/10' : 
            style.bg === 'bg-[#F7F7F7]' ? 'border-zinc-200' : 
            'border-white/10'
          }`}>
            <ul className={`list-none font-montserrat text-[11px] font-bold uppercase tracking-wider ${
              style.isGold ? 'text-black' :
              style.bg === 'bg-[#F7F7F7]' ? 'text-zinc-900' :
              'text-white'
            }`}>
              {cat.items.map((item, i) => {
                const isActive = i === activeIndex;
                return (
                  <li 
                    key={i} 
                    onClick={() => {
                      setActiveIndex(i);
                      setAutoPlay(false);
                    }}
                    className={`flex items-center gap-3 py-4 border-b cursor-pointer transition-all duration-300 group/item ${
                      style.isGold ? 'border-black/10' : 
                      style.bg === 'bg-[#F7F7F7]' ? 'border-zinc-200' : 
                      'border-white/5'
                    } ${isActive ? 'opacity-100 pl-2' : 'opacity-40 hover:opacity-75'}`}
                  >
                    <div className={`w-1.5 rounded-none shrink-0 transition-all duration-300 ${
                      isActive ? 'h-3 scale-110' : 'h-1.5'
                    } ${style.isGold ? 'bg-black' : 'bg-7l-gold'}`} /> 
                    <span className={`leading-relaxed transition-colors duration-300 ${isActive && style.bg !== 'bg-7l-gold' ? 'text-7l-gold' : isActive && style.bg === 'bg-7l-gold' ? 'text-white' : ''}`}>
                      {item.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div className="pt-8">
            <a
              href={`/contacto?flota=${encodeURIComponent(cat.category.toLowerCase())}`}
              className={`inline-flex items-center space-x-3 font-montserrat font-bold text-xs tracking-widest uppercase transition-all duration-300 group/btn ${
                style.isGold ? 'bg-black text-7l-gold hover:text-white px-8 py-3.5 hover:bg-zinc-950 shadow-md hover:shadow-black/10' :
                style.bg === 'bg-[#F7F7F7]' ? 'bg-black text-white hover:bg-zinc-900 px-8 py-3.5 shadow-md hover:shadow-black/10' :
                'bg-7l-gold text-black hover:bg-white px-8 py-3.5 shadow-md hover:shadow-black/10'
              }`}
            >
              <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">
                Consultar Disponibilidad
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </a>
          </div>
          
        </div>
      </section>
    </React.Fragment>
  );
}

export default function MachineryCatalog() {
  return (
    <>
      {machineryCategories.map((cat, index) => (
        <MachineryCategoryPanel key={cat.id} cat={cat} index={index} />
      ))}

      {/* CTA TÁCTICO B2B */}
      <section className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-7l-gold/30 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Shield size={36} className="text-7l-gold mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-future text-white uppercase mb-6 leading-tight">
            AUTONOMÍA TOTAL EN <br />
            <span className="text-7l-gold">LA EJECUCIÓN</span>
          </h2>
          <p className="text-zinc-400 font-montserrat mb-10 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Eliminamos las dependencias operativas. Controlar 100% de la maquinaria nos permite mitigar riesgos, asegurar disponibilidad inmediata y reducir costos ocultos en proyectos críticos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-7l-gold text-black font-montserrat font-bold py-4 px-8 tracking-widest hover:bg-white transition-colors uppercase text-xs shadow-lg shadow-7l-gold/20">
              Solicitar Equipos
            </button>
            <button className="w-full sm:w-auto border border-white/20 text-white font-montserrat font-bold py-4 px-8 tracking-widest hover:border-7l-gold hover:text-7l-gold transition-colors uppercase text-xs">
              Soporte Técnico
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

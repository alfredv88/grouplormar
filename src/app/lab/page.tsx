"use client";
import React from 'react';

/**
 * LABORATORY PAGE: High-Fidelity Interaction Proof
 * Aesthetic: Cinematic Industrial Noir
 * DFII: 15
 * 
 * This page validates the 'frontend-design' skill updates:
 * 1. Mandatory Grain (Noise overlay)
 * 2. Cinematic Motion (Clip-path reveal)
 * 3. Fluid Typography (clamp based scaling)
 * 4. Atmospheric Depth (Mesh gradients + backdrop filters)
 */

export default function LabPage() {
  return (
    <main className="relative min-h-screen bg-7l-black overflow-hidden mesh-gradient">
      {/* 1. MANDATORY GRAIN (Atmospheric Layer) */}
      <div className="noise-overlay" />

      {/* 2. HUD ELEMENTS (Design Anchor) */}
      <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 m-4 md:m-8 lg:m-12 z-10">
        <div className="absolute top-0 left-0 p-4 border-b border-r border-white/10 bg-black/20 backdrop-blur-md">
          <span className="text-[10px] font-montserrat font-bold tracking-[0.3em] text-7l-gold/50 uppercase">
            HFIP // PHASE.01
          </span>
        </div>
        <div className="absolute bottom-0 right-0 p-4 border-t border-l border-white/10 bg-black/20 backdrop-blur-md">
          <span className="text-[10px] font-montserrat font-bold tracking-[0.3em] text-white/30 uppercase">
            LORMAR.SYSTEMS // 2026
          </span>
        </div>
        
        {/* Decorative Technical Lines */}
        <div className="absolute top-1/2 left-0 w-8 h-[1px] bg-7l-gold/20" />
        <div className="absolute top-1/2 right-0 w-8 h-[1px] bg-7l-gold/20" />
      </div>

      {/* 3. HERO CONTENT (Cinematic Reveal) */}
      <section className="relative z-20 flex flex-col justify-center min-h-screen px-6 md:px-24">
        <div className="cinematic-reveal">
          <h1 className="leading-[0.85] mb-8" style={{ 
            fontSize: 'clamp(3.5rem, 12vw, 14rem)',
            fontFamily: 'var(--font-montserrat)',
            fontWeight: 900
          }}>
            PRECISIÓN<br />
            <span className="text-7l-gold outline-text">EXTREMA</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            <div className="max-w-md">
              <p className="text-lg md:text-xl font-light leading-relaxed text-7l-gray/80 border-l-2 border-7l-gold pl-6 py-2">
                Elevando los estándares de la ingeniería industrial mediante una ejecución táctica y una estética de autoridad absoluta.
              </p>
            </div>
            
            <button className="group relative px-8 py-4 overflow-hidden border border-7l-gold/30 bg-transparent transition-all duration-500 hover:border-7l-gold">
              <div className="absolute inset-0 bg-7l-gold translate-y-[101%] transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 font-montserrat text-xs font-bold tracking-widest text-7l-gold group-hover:text-7l-black">
                INICIAR EXPLORACIÓN
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. BACKGROUND DECORATION (Materiality) */}
      <div className="absolute -bottom-20 -right-20 w-[60vw] h-[60vw] bg-7l-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-[40vw] h-[40vw] bg-white/2 rounded-full blur-[100px] pointer-events-none" />

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px var(--color-7l-gold);
          color: transparent;
        }
        
        @media (min-width: 768px) {
          .outline-text:hover {
            color: var(--color-7l-gold);
            -webkit-text-stroke: 0px;
            transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          }
        }
      `}</style>
    </main>
  );
}

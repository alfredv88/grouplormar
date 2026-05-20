import React from 'react';
import MachineryCatalog from '@/components/maquinaria/MachineryCatalog';

export const metadata = {
  title: 'Catálogo de Maquinarias | Grupo Lormar',
  description: 'Catálogo oficial de flota y equipos propios de Grupo Lormar. Disponibilidad inmediata y soporte para proyectos críticos.',
};

export default function MaquinariasPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      
      {/* 1. HERO DE ENTRADA (Mantenido Oscuro para Alternancia con el Header) */}
      <section className="h-[60vh] flex flex-col justify-center relative bg-black border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <div 
            className="w-full h-full"
            style={{ 
              backgroundImage: "url('/textures/fondo lormar.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
            }}
          />
        </div>
        
        {/* Overlay degradado ambiental */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-7l-gold/5 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
            LORMAR CORPORATION
          </span>
          <h1 className="text-5xl md:text-7xl font-future text-white uppercase tracking-normal mb-6 leading-none">
            <span className="text-7l-gold">MÚSCULO</span> <br />OPERATIVO
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-montserrat font-medium max-w-2xl leading-relaxed">
            Toda la maquinaria listada es propiedad de Grupo Lormar. Sin intermediarios, garantizamos disponibilidad inmediata, autonomía de ejecución y mantenimiento riguroso para la industria pesada.
          </p>
        </div>
      </section>

      {/* 2. COMPONENTE INTERACTIVO CLIENTE: Filtros, Retícula Blanca y Stats Parallax */}
      <MachineryCatalog />
      
    </main>
  );
}

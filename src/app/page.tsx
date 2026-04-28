"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import EquipmentShowcase from "@/components/home/EquipmentShowcase";
import YardParallax from "@/components/home/YardParallax";
import StatsCounter from "@/components/home/StatsCounter";
import ComplianceHSE from "@/components/home/ComplianceHSE";
import StrategicLocation from "@/components/home/StrategicLocation";
import AboutSection from "@/components/home/AboutSection";
import ProcessSection from "@/components/home/ProcessSection";
import { FAQ } from "@/components/home/ClosingSections";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-7l-black font-montserrat selection:bg-7l-gold selection:text-7l-black">
      {/* ATMOSPHERIC LAYER */}
      <div className="noise-overlay" />



      {/* 1. HERO - Impacto */}
      <Hero />

      {/* SECCIÓN COMPARTIDA: SOCIOS & EQUIPOS CON TEXTURA INDUSTRIAL */}
      <div className="relative bg-black overflow-hidden">
        {/* Texture Layer with Mask to fade in/out */}
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{ 
            backgroundImage: "url('/textures/fondo lormar.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
          }}
        />
        
        {/* Shadow Overlays (Unified) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent/5 to-black pointer-events-none h-full" />

        <div className="relative z-20">
          {/* 2. TRUST — Autoridad Inmediata */}
          <LogoStrip />

          {/* 3. EQUIPMENT SHOWCASE — Catálogo por Categorías */}
          <EquipmentShowcase />
        </div>
      </div>

      {/* 4. CAPABILITIES — Ejes de Negocio */}
      <ServicesGrid />

      {/* 5. AUTHORITY — Números Duros de Capacidad */}
      <div className="relative overflow-hidden [clip-path:inset(0_0_0_0)]">
        <StatsCounter />
      </div>

      {/* 6. COMPLIANCE & HSE — Estatus Legal y Seguridad */}
      <ComplianceHSE />

      {/* 7. STRATEGIC LOCATION — Presencia Geográfica */}
      <StrategicLocation />



      {/* 9. CORPORATE IDENTITY — Quiénes Somos */}
      <AboutSection />

      {/* 10. PROCESS — Metodología */}
      <ProcessSection />

      {/* 11. HARD CTA — Cierre Comercial (UTILITY & CLEAN) */}
      <section className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <span className="font-syncopate text-7l-gold text-[7px] font-bold tracking-[0.6em] uppercase mb-10 block">
            Executive Engagement
          </span>
          <h2 className="text-4xl md:text-5xl font-future text-white uppercase tracking-tighter mb-12 max-w-4xl leading-[0.9]">
            CONSOLIDE SU PRÓXIMO <span className="text-7l-gold">PROYECTO</span>
          </h2>

          <Link href="/contacto" className="group flex items-center gap-8 mt-4 transition-all duration-500">
            <div className="w-16 h-16 rounded-full border border-7l-gold flex items-center justify-center group-hover:bg-7l-gold transition-all duration-500">
              <ArrowUpRight className="text-7l-gold group-hover:text-black transition-colors" size={28} />
            </div>
            <span className="font-syncopate text-[11px] font-black text-white tracking-[0.4em] uppercase group-hover:text-7l-gold transition-colors">
              INICIAR PROCESO DE LICITACIÓN
            </span>
          </Link>
        </div>
      </section>

    </main>
  );
}

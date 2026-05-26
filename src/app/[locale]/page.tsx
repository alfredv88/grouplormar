import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import { useTranslations } from "next-intl";
import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import ServicesGrid from "@/components/home/ServicesGrid";

// Dynamic Imports (Lazy Loading for components below the fold)
const EquipmentShowcase = dynamic(() => import("@/components/home/EquipmentShowcase"));
const YardParallax = dynamic(() => import("@/components/home/YardParallax"));
const StatsCounter = dynamic(() => import("@/components/home/StatsCounter"));
const ComplianceHSE = dynamic(() => import("@/components/home/ComplianceHSE"));
const TestimonialsCarousel = dynamic(() => import("@/components/home/TestimonialsCarousel"));
const StrategicLocation = dynamic(() => import("@/components/home/StrategicLocation"));
const AboutSection = dynamic(() => import("@/components/home/AboutSection"));
const ProcessSection = dynamic(() => import("@/components/home/ProcessSection"));
const SustainabilitySection = dynamic(() => import("@/components/home/SustainabilitySection"));
const GenteSection = dynamic(() => import("@/components/home/GenteSection"));

export default function Home() {
  const t = useTranslations('HomeCTA');
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

          {/* 3. CORPORATE IDENTITY — Quiénes Somos */}
          <AboutSection />

          {/* 4. EQUIPMENT SHOWCASE — Catálogo por Categorías */}
          <EquipmentShowcase />
        </div>
      </div>

      {/* 5. VISUAL AUTHORITY — Capacidad Real (Yard Parallax) */}
      <YardParallax />

      {/* 6. CAPABILITIES — Ejes de Negocio */}
      <ServicesGrid />

      {/* 7. AUTHORITY — Números Duros de Capacidad */}
      <div className="relative overflow-hidden">
        <StatsCounter />
      </div>

      {/* 9. PROCESS — Metodología */}
      <ProcessSection />

      {/* 12. GESTIÓN AMBIENTAL & RACDA */}
      <SustainabilitySection />

      {/* 13. TALENTO ESTRATÉGICO & DIRECTIVO */}
      <GenteSection />

      {/* 6. COMPLIANCE & HSE — Estatus Legal y Seguridad */}
      <ComplianceHSE />

      {/* 6.5 TESTIMONIALS — Referencias Comerciales */}
      <TestimonialsCarousel />

      {/* 7. STRATEGIC LOCATION — Presencia Geográfica */}
      <StrategicLocation />

      {/* 11. HARD CTA — Cierre Comercial (UTILITY & CLEAN) */}
      <section className="py-20 bg-[#080808] border-t border-white/10 relative overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <span className="font-montserrat text-7l-gold text-[9px] font-black tracking-[0.5em] uppercase mb-6 block">
            {t('overline')}
          </span>
          <h2 className="text-4xl md:text-5xl font-future text-white uppercase tracking-normal mb-8 max-w-4xl leading-[1.1]">
            {t.rich('titulo', {
              gold: (chunks) => <span className="text-7l-gold">{chunks}</span>
            })}
          </h2>

          <Magnetic range={100} strength={0.35}>
            <Link href="/contacto" className="group flex items-center gap-8 mt-4 transition-all duration-500">
              <div className="w-20 h-20 rounded-none border border-7l-gold/30 flex items-center justify-center group-hover:border-7l-gold group-hover:bg-7l-gold/5 transition-all duration-500">
                <ArrowUpRight className="text-7l-gold transition-all duration-500 group-hover:rotate-45" size={28} />
              </div>
              <span className="font-montserrat text-[12px] font-black text-white tracking-[0.4em] uppercase group-hover:text-7l-gold transition-colors">
                {t('iniciarLicitacion')}
              </span>
            </Link>
          </Magnetic>
        </div>
      </section>

    </main>
  );
}

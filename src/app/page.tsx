"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import AboutSection from "@/components/home/AboutSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsCounter from "@/components/home/StatsCounter";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import HumanCenter from "@/components/home/HumanCenter";
import { CertifiedStrip, FAQ } from "@/components/home/ClosingSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-7l-black text-white font-montserrat selection:bg-7l-gold selection:text-7l-black">
      {/* Hero Section */}
      <Hero />

      {/* Trust Signals */}
      <LogoStrip />

      {/* Our Capabilities (Business Lines) */}
      <ServicesGrid />

      {/* Muscle & Infrastructure */}
      <ProjectShowcase />

      {/* Humanity & Expertise */}
      <HumanCenter />

      {/* Combined Stats & Process with fixed background video */}
      <div className="relative overflow-hidden [clip-path:inset(0_0_0_0)]">
        <StatsCounter />
        <ProcessSection />
      </div>

      {/* Identity Section (White Contrast) - Movido abajo para que no estorbe la conversión */}
      <AboutSection />

      {/* Quality & Support */}
      <CertifiedStrip />
      <FAQ />
    </main>
  );
}

"use client";

import React from "react";
import ServiciosHero from "@/components/servicios/ServiciosHero";
import ServiciosGrid from "@/components/servicios/ServiciosGrid";
import ServiciosCTA from "@/components/servicios/ServiciosCTA";

export default function ServiciosPage() {
    return (
        <main className="min-h-screen bg-7l-black text-white font-montserrat selection:bg-7l-gold selection:text-7l-black pt-20">
            {/* Hero & Intro */}
            <ServiciosHero />

            {/* Detailed Services Grid */}
            <ServiciosGrid />

            {/* Final CTA */}
            <ServiciosCTA />
        </main>
    );
}

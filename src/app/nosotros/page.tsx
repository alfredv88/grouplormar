"use client";

import React from "react";
import NosotrosHero from "@/components/nosotros/NosotrosHero";
import CapacidadTecnica from "@/components/nosotros/CapacidadTecnica";
import HistoriaPoder from "@/components/nosotros/HistoriaPoder";

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-7l-black text-white font-montserrat selection:bg-7l-gold selection:text-7l-black pt-20">
            {/* Solidez Operativa & Misión/Visión */}
            <NosotrosHero />

            {/* Capacidad Tecnológica Grid */}
            <CapacidadTecnica />

            {/* Trayectoria Industrial Timeline */}
            <HistoriaPoder />
        </main>
    );
}

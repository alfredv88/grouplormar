"use client";

import React from "react";
import ProyectosHero from "@/components/proyectos/ProyectosHero";
import ProjectGrid from "@/components/proyectos/ProjectGrid";

export default function ProyectosPage() {
    return (
        <main className="min-h-screen bg-7l-black text-white font-montserrat selection:bg-7l-gold selection:text-7l-black pt-20">
            {/* Legend & Title */}
            <ProyectosHero />

            {/* Evidence & Case Studies */}
            <ProjectGrid />
        </main>
    );
}

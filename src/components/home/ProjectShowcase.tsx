"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Crosshair } from "lucide-react";

const projects = [
  {
    category: "MANTENIMIENTO INDUSTRIAL",
    title: "PLANTA PROCESADORA",
    year: "2024",
    image: "/images/hero-excavator.webp",
    stats: ["99% DISPONIBILIDAD", "ISO 9001", "MONTAJE MECÁNICO"]
  },
  {
    category: "VÍAS Y ACCESOS",
    title: "VIALIDAD PESADA",
    year: "2023",
    image: "/images/sostenibilidad_lormar_compromiso.png",
    stats: ["ESTABILIZACIÓN", "ALTA RESISTENCIA", "OPERACIÓN 24/7"]
  },
  {
    category: "CONSTRUCCIÓN CIVIL",
    title: "BASE ESTRUCTURAL",
    year: "2024",
    image: "/images/gente_lormar_diversidad.png",
    stats: ["ALTO TONELAJE", "PILOTAJE PROFUNDO", "INFRAESTRUCTURA"]
  }
];

export default function ProjectShowcase() {
  return (
    <section className="bg-[#080808] py-32 border-t border-white/5 relative" id="proyectos">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-[0.03] pointer-events-none" />
      
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="flex items-center gap-3 font-montserrat text-7l-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
              <Crosshair size={14} /> HISTORIAL DE EJECUCIÓN // PORTAFOLIO
            </span>
            <h2 className="text-6xl md:text-8xl font-montserrat font-black text-white uppercase leading-[0.9] tracking-tighter">
              PROYECTOS <br /> 
              <span className="text-zinc-700">EJECUTADOS</span>
            </h2>
          </div>
          <Link 
            href="/portafolio" 
            className="inline-flex items-center gap-4 border border-7l-gold/30 bg-transparent px-6 py-3 transition-all hover:border-7l-gold hover:bg-7l-gold/5 group rounded-none"
          >
            <span className="font-montserrat text-[9px] font-black text-white tracking-[0.4em] uppercase group-hover:text-7l-gold transition-colors duration-300">
              PORTAFOLIO
            </span>
            <ArrowRight size={10} className="text-7l-gold transition-transform group-hover:translate-x-1.5 duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="group relative h-[600px] overflow-hidden border border-white/10 border-7l-accent bg-7l-black"
             >
                {/* Background Image with Overlays */}
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-75 transition-all duration-1000"
                />
                
                {/* HUD Elements Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start group-hover:scale-105 transition-transform">
                      <div className="font-montserrat text-[9px] text-white tracking-[0.2em] space-y-1 font-bold">
                         <p>REF: LRM-{2024 - idx}</p>
                         <p>STAT: COMPLETADO</p>
                      </div>
                      <span className="text-7l-gold font-montserrat text-[10px] font-black border-2 border-7l-gold px-2 py-1 uppercase">{project.year}</span>
                   </div>

                   <div className="space-y-4">
                       <span className="inline-block bg-7l-gold text-black font-montserrat text-[9px] font-bold px-3 py-1 tracking-[0.2em]">
                        {project.category}
                      </span>
                      <h3 className="text-4xl lg:text-5xl font-montserrat font-black text-white leading-tight uppercase group-hover:text-7l-gold transition-colors">
                        {project.title.split(' ')[0]} <br />
                        <span className="text-zinc-300 group-hover:text-white transition-colors">{project.title.split(' ').slice(1).join(' ')}</span>
                      </h3>
                      
                      {/* Detailed Stats reveal on hover */}
                      <div className="pt-6 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                         {project.stats.map((stat, sidx) => (
                            <span key={sidx} className="text-[9px] font-montserrat text-white border-2 border-white/20 px-2 py-1 font-bold">
                               {stat}
                            </span>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-7l-gold opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-7l-gold opacity-0 group-hover:opacity-100 transition-all duration-300" />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

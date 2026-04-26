"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ProjectShowcase() {
  const projects = [
    {
      cat: "MANTENIMIENTO INDUSTRIAL / 2024",
      title: "Planta Procesadora de Alimentos",
      desc: "Lideramos el montaje mecánico de la cadena de suministros principal, asegurando 99% de uptime continuo bajo estándares ISO."
    },
    {
      cat: "VÍAS Y ACCESOS / 2023",
      title: "Optimización de Vialidad Pesada",
      desc: "Acondicionamiento y estabilización de terrenos para tránsito extrapesado en complejos petroleros activos."
    },
    {
      cat: "CONSTRUCCIÓN CIVIL / 2024",
      title: "Base Estructural de Alto Tonelaje",
      desc: "Pilotaje profundo y cimentación especializada para infraestructuras operativas críticas."
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-[#080808] border-t border-white/10 relative" id="proyectos">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Corporativo Oscuro */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10">
          <div>
            <span className="block font-syncopate text-[#7A7A7A] tracking-[0.2em] text-[11px] font-bold uppercase mb-4">
              <span className="text-7l-gold mr-2">■</span> PROYECTOS RECIENTES
            </span>
            <h2 className="text-5xl md:text-7xl font-syne font-extrabold uppercase leading-none text-white tracking-tight">
              Portafolio <br /> de Obras
            </h2>
          </div>
          <Link href="/proyectos" className="mt-8 md:mt-0 font-syncopate text-[11px] font-bold uppercase tracking-[0.15em] text-white group flex items-center gap-4 hover:text-7l-gold transition-colors bg-white/5 border border-white/10 px-8 py-5">
            Explorar Catálogo <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Layout Estructural: Feature (Izq) + Lista Fila (Der) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Obra Destacada (Hero Interno) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-[4/3] overflow-hidden group bg-gray-900"
            >
              <Image
                src="/images/hero-excavator.webp"
                alt="Proyecto Insignia"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale brightness-90 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-14 w-full">
                <div className="flex justify-between items-end">
                   <div>
                      <span className="text-7l-gold font-syncopate text-[10px] font-bold tracking-[0.2em] mb-4 block">PROYECTO DESTACADO</span>
                      <h3 className="text-3xl md:text-5xl font-syne font-bold text-white uppercase leading-tight max-w-xl">
                        Montaje Estructural Planta Criogénica
                      </h3>
                   </div>
                   <Link href="/proyectos" className="w-14 h-14 bg-white border border-white/20 hidden md:flex items-center justify-center hover:bg-7l-gold transition-colors">
                      <ArrowUpRight size={24} className="text-[#080808]" />
                   </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Lista de Proyectos Restantes */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="flex flex-col"
            >
              {projects.map((p, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { 
                      opacity: 1, x: 0,
                      transition: { duration: 0.6 } 
                    }
                  }}
                  className="group py-10 border-b border-white/10 last:border-b-0 flex flex-col gap-5 relative block"
                >
                  <span className="text-[10px] font-bold font-syncopate text-7l-gold tracking-[0.2em] uppercase">
                    {p.cat}
                  </span>
                  <Link href="/proyectos" className="block text-2xl lg:text-3xl font-syne uppercase text-white font-bold group-hover:text-7l-gold transition-colors leading-tight relative pr-12">
                    {p.title}
                    <ArrowUpRight size={28} className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-7l-gold" />
                  </Link>
                  <p className="text-[15px] text-[#A0A0A0] font-montserrat leading-relaxed max-w-md">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

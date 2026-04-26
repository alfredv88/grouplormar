"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Settings, Drill, Box, Truck, Construction, ShieldCheck } from "lucide-react";
import { BROCHURE_DATA } from "@/constants/brochureData";

export default function ServicesGrid() {
  const servicesData = BROCHURE_DATA.services.map((s, idx) => {
    const categoryIcons: Record<string, React.ReactNode> = {
      "CONSTRUCCIÓN": <Construction size={28} strokeWidth={1.5} />,
      "MANTENIMIENTO": <Settings size={28} strokeWidth={1.5} />,
      "SERVICIOS A POZOS": <Drill size={28} strokeWidth={1.5} />,
      "SERVICIO AMBIENTAL": <ShieldCheck size={28} strokeWidth={1.5} />,
      "SERVICIO LOGÍSTICO": <Truck size={28} strokeWidth={1.5} />,
    };

    // Estructura limpia: Primeras dos secciones ocupan mitad, el resto un tercio
    const spanClass = idx < 2 ? "md:col-span-6" : "md:col-span-4"; 

    return {
      id: idx + 1,
      category: s.category.toUpperCase(),
      title: s.category,
      desc: s.items[0],
      icon: categoryIcons[s.category.toUpperCase()] || <Box size={28} strokeWidth={1.5} />,
      items: s.items.slice(1, 4),
      cols: spanClass,
      img: `/images/izamiento_critico_realista.png`, // Placeholder estructural
    };
  });

  return (
    <section className="py-32 bg-[#F8F9FA] relative border-b border-gray-200" id="servicios">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Corporativo Limpio */}
        <div className="mb-20 grid md:grid-cols-2 gap-12 md:gap-24 items-end">
          <div>
            <span className="block font-syncopate text-7l-gold tracking-[0.2em] text-[11px] font-bold uppercase mb-4">
              CAPACIDAD OPERATIVA
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-syne font-extrabold uppercase text-[#080808] tracking-tight leading-none"
            >
              Unidades de <br />
              Negocio
            </motion.h2>
          </div>
          
          <div className="md:border-l-2 border-gray-300 md:pl-10">
            <p className="text-[#373737] text-base font-montserrat font-medium leading-relaxed max-w-lg">
              Ejecución estratégica mediante divisiones especializadas. Aportamos certidumbre a la industria pesada en proyectos de alta complejidad operativa, garantizando los estándares globales de ingeniería.
            </p>
          </div>
        </div>

        {/* Grid Estructural (Masonry/Solid Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {servicesData.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`${s.cols} group bg-white border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Imagen Dominante */}
              <div className="relative h-72 overflow-hidden bg-gray-200">
                <Image 
                  src={s.img} 
                  alt={s.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 saturate-50 group-hover:saturate-100" 
                />
              </div>

              {/* Bloque Corporativo Inferior */}
              <div className="p-10 md:p-14 flex-1 flex flex-col relative bg-white">
                {/* Icóno superpuesto - Estilo Industrial clásico */}
                <div className="absolute -top-10 left-10 w-20 h-20 bg-white flex items-center justify-center text-7l-gold shadow-md">
                  {s.icon}
                </div>

                <div className="mt-8 space-y-5">
                  <h3 className="text-3xl font-syne font-extrabold uppercase text-[#080808] tracking-tight block border-b border-gray-100 pb-5">
                    {s.title}
                  </h3>
                  
                  <p className="font-montserrat text-[#555555] text-sm leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  <ul className="space-y-3 mb-10 border-l border-gray-200 pl-4 py-2">
                    {s.items.map((item, idItem) => (
                      <li key={idItem} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#080808] rotate-45 mt-1.5 flex-shrink-0 opacity-40"></div>
                        <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#373737]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/servicios" 
                  className="mt-auto inline-flex items-center gap-4 text-[10px] font-syncopate font-bold text-[#080808] hover:text-7l-gold transition-colors uppercase tracking-[0.2em]"
                >
                  DETALLES DE DIVISIÓN <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

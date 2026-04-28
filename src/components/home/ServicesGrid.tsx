"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BROCHURE_DATA } from "@/constants/brochureData";

export default function ServicesGrid() {
  const [activeTab, setActiveTab] = useState(BROCHURE_DATA.services[0].category);

  // Obtener los datos de la categoría activa
  const currentCategoryData = BROCHURE_DATA.services.find(s => s.category === activeTab);
  
  // Procesar los items para extraer título y descripción (Lógica Original)
  const displayItems = currentCategoryData?.items.map((item, idx) => {
    const parts = item.split(": ");
    const title = parts.length > 1 ? parts[0] : item;
    const desc = parts.length > 1 ? parts[1] : "Servicios especializados con los más altos estándares de calidad y seguridad industrial.";
    
    // Mapeo de imágenes realistas por categoría
    const categoryImageMap: Record<string, string> = {
      "Construcción": "/images/services/construccion_real.png",
      "Mantenimiento": "/images/services/mantenimiento_real.png",
      "Servicios a Pozos": "/images/services/pozos_real.png",
      "Servicio Ambiental": "/images/services/ambiental_real.png",
      "Servicio Logístico": "/images/services/logistica_real.png",
    };

    const technicalTags: Record<string, string> = {
      "Construcción": "Fases I+P+E",
      "Mantenimiento": "Inspección NDT",
      "Servicios a Pozos": "Faja Petrolífera",
      "Servicio Ambiental": "RACDA G/M",
      "Servicio Logístico": "Activos Propios",
    };

    return {
      id: idx,
      title: title.toUpperCase(),
      desc: desc,
      img: categoryImageMap[activeTab] || "/images/hero-excavator.webp",
      tag: technicalTags[activeTab] || "Certificado"
    };
  }) || [];

  return (
    <section className="pt-48 pb-96 bg-white relative border-b border-gray-100" id="servicios">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Título Refinado (Sin degradados, blanco puro) */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-future text-7l-black uppercase tracking-tight">
            NUESTRAS <span className="text-gray-400">SOLUCIONES</span>
          </h2>
          <div className="w-16 h-[3px] bg-7l-gold mx-auto mt-6"></div>
        </div>

        {/* Navegación Refinada */}
        <div className="relative mb-12 border-b border-gray-200/50">
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-8 md:gap-12 pb-0">
            {BROCHURE_DATA.services.map((service) => {
              const isActive = activeTab === service.category;
              return (
                <button
                  key={service.category}
                  onClick={() => setActiveTab(service.category)}
                  className={`relative py-4 text-[10px] font-syncopate font-bold uppercase tracking-[0.2em] transition-all whitespace-nowrap outline-none ${
                    isActive ? "text-7l-black" : "text-gray-400 hover:text-7l-black"
                  }`}
                >
                  {service.category}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabRestored"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-7l-gold z-20 shadow-[0_0_8px_rgba(242,169,0,0.4)]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid with Animation */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {displayItems.map((item) => (
                <div key={item.id} className="group bg-white border border-black/[0.03] shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-700 flex flex-col overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden bg-gray-50">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover grayscale-[15%] transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 
                      className="text-[20px] font-syne font-black mb-4 leading-[1.1] uppercase tracking-tighter group-hover:text-7l-gold transition-colors duration-500"
                      style={{ color: '#0d0d0d' }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-[13px] font-medium font-montserrat leading-relaxed mb-8 opacity-70"
                      style={{ color: '#333333' }}
                    >
                      {item.desc}
                    </p>

                    <Link 
                      href="/servicios" 
                      className="mt-auto group/btn flex items-center gap-3 text-[10px] font-syncopate font-bold text-7l-black tracking-[0.3em] uppercase"
                    >
                      <span className="group-hover/btn:text-7l-gold transition-colors">Ficha Técnica</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tus flechas de navegación compactadas */}
        <div className="mt-4 flex justify-center gap-3 relative z-30">
          <button className="w-12 h-12 rounded-full border border-gray-100 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:border-7l-black transition-all text-gray-400 hover:text-7l-black shadow-sm">
            <ArrowRight size={20} className="rotate-180" />
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-100 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:border-7l-black transition-all text-gray-400 hover:text-7l-black shadow-sm">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* WOW Element: MOTONIVELADORA Showcase - Corporate Style */}
      <div className="absolute bottom-0 right-0 w-[45%] xl:w-[40%] pointer-events-none z-0 hidden lg:block overflow-hidden">
        <motion.div
           initial={{ x: 100, opacity: 0 }}
           whileInView={{ x: 20, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="relative"
        >
          <Image
            src="/images/MOTONIVELADORE.png"
            alt="Motoniveladora Lormar"
            width={1000}
            height={800}
            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] filter contrast-[1.02]"
          />
        </motion.div>
      </div>
    </section>
  );
}

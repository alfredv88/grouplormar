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
      "Gestión Ambiental": "/images/services/ambiental_real.png",
      "Servicio Logístico": "/images/services/logistica_real.png",
    };

    const technicalTags: Record<string, string> = {
      "Construcción": "Fases I+P+E",
      "Mantenimiento": "Inspección NDT",
      "Servicios a Pozos": "Faja Petrolífera",
      "Gestión Ambiental": "RACDA G/M",
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

  const handlePrevTab = () => {
    const currentIndex = BROCHURE_DATA.services.findIndex(s => s.category === activeTab);
    const prevIndex = (currentIndex - 1 + BROCHURE_DATA.services.length) % BROCHURE_DATA.services.length;
    setActiveTab(BROCHURE_DATA.services[prevIndex].category);
  };

  const handleNextTab = () => {
    const currentIndex = BROCHURE_DATA.services.findIndex(s => s.category === activeTab);
    const nextIndex = (currentIndex + 1) % BROCHURE_DATA.services.length;
    setActiveTab(BROCHURE_DATA.services[nextIndex].category);
  };

  return (
    <section className="py-16 bg-white relative border-b border-[#0D0D0D] overflow-hidden" id="servicios">
      {/* Background Vertical Branding (Margin Layer) */}
      {/* Watermark removed to avoid gray tones */}

      <div className="w-full max-w-[1600px] ml-8 px-6 md:px-12 lg:px-24 relative z-20">
        
        {/* Título de Alto Impacto (Estilo Sección 4 - Balanceado) */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div className="space-y-1">
            <h2 className="text-h2 flex flex-col">
              <span className="text-7l-gold">SOLUCIONES</span>
              <span className="text-[#0D0D0D]">CORPORATIVAS</span>
            </h2>
            <div className="w-24 h-[4px] bg-7l-gold mt-6"></div>
          </div>
          
          <div className="max-w-sm pb-2 border-l-[3px] border-7l-gold pl-5">
            <p className="font-montserrat text-[11px] text-[#0D0D0D]/70 tracking-[0.15em] uppercase leading-[1.8] font-bold">
              Despliegue estratégico de capacidades operativas para sectores de <span className="text-[#0D0D0D] font-black">alta complejidad técnica y logística.</span>
            </p>
          </div>
        </div>

        {/* Navegación Ejecutiva (Contraste Refinado - Estilo Barra de Progreso S4) */}
        <div className="relative mb-12">
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-10 md:gap-14 pb-2 relative z-20">
            {BROCHURE_DATA.services.map((service) => {
              const isActive = activeTab === service.category;
              return (
                <button
                  key={service.category}
                  onClick={() => setActiveTab(service.category)}
                  className={`relative py-5 text-[11px] font-montserrat font-bold uppercase tracking-[0.15em] transition-all whitespace-nowrap outline-none ${
                    isActive ? "text-[#0D0D0D]" : "text-[#0D0D0D]/50 hover:text-7l-gold"
                  }`}
                >
                  {service.category}
                  {isActive && (
                    <motion.div 
                      layoutId="servicesActiveTab"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-7l-gold z-30"
                    />
                  )}
                </button>
              )
            })}
          </div>
          {/* Progress Track (Estilo Sección 4 Adaptado) */}
          <div className="absolute bottom-[8px] left-0 right-0 h-[1px] bg-[#0D0D0D]/10 z-10" />
        </div>

        {/* Services Grid with Animation */}
        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {displayItems.map((item, idx) => {
                  // Variación dinámica del encuadre para evitar repetición visual
                  const objectPositions = ["object-center", "object-top", "object-bottom", "object-left"];
                  const currentPosition = objectPositions[idx % objectPositions.length];

                  return (
                  <div key={item.id} className="group bg-white border border-[#0D0D0D]/5 hover:border-7l-gold/30 transition-all duration-700 flex flex-col relative overflow-hidden cursor-pointer h-full min-h-[560px] w-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                    
                    {/* Technical ID (Contraste Sólido) */}
                    <span className="absolute top-4 right-4 font-mono text-[10px] text-[#0D0D0D] font-bold tracking-[0.2em] z-40 bg-white/80 px-2 py-1 rounded">
                      REF-0{idx + 1}
                    </span>

                    {/* Media Frame (Protagonismo Recuperado) */}
                    <div className="relative h-[260px] shrink-0 w-full overflow-hidden transition-all duration-700">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className={`object-cover ${currentPosition} transition-all duration-1000 group-hover:scale-105`}
                      />
                    </div>

                    {/* Content Frame - Jerarquía Pro Max */}
                    <div className="p-8 flex-1 flex flex-col relative z-30">
                      
                      {/* Capability Tag */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[2px] bg-7l-gold"></div>
                        <span className="font-montserrat text-[10px] font-black text-7l-gold tracking-[0.2em] uppercase">{item.tag}</span>
                      </div>
                      
                      {/* Title Group - Montserrat Black (Refinado y Armónico) */}
                      <div className="mb-4 min-h-[50px] flex items-start">
                        <h3 
                          className="text-h3 !text-[#0D0D0D] !text-[17px] leading-[1.2] group-hover:text-7l-gold transition-colors duration-300"
                        >
                          {item.title}
                        </h3>
                      </div>

                      {/* Description (Jerarquía Refinada - Gris Técnico) */}
                      <div className="flex-1">
                        <p 
                          className="text-[13px] font-montserrat font-medium text-[#0D0D0D]/70 leading-relaxed mb-6"
                        >
                          {item.desc}
                        </p>
                      </div>

                      {/* Professional Action Footer - Alineación Perfecta */}
                      <div className="pt-6 border-t border-[#0D0D0D]/10 flex items-center justify-between mt-auto">
                        <Link 
                          href="/servicios" 
                          className="group/btn inline-flex items-center gap-4 text-[11px] font-montserrat font-black tracking-[0.3em] text-[#0D0D0D] uppercase transition-all"
                        >
                          <span className="group-hover/btn:text-7l-gold transition-colors duration-500">CONSULTAR</span>
                          <div className="w-8 h-[2px] bg-[#0D0D0D] group-hover/btn:w-16 group-hover/btn:bg-7l-gold transition-all duration-500 ease-out" />
                        </Link>
                        
                        <span className="font-montserrat font-black text-[28px] text-7l-gold transition-colors">
                          0{idx + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                )})}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows - Minimalist (Estilo Sección 4 / Bloque Industrial) */}
        <div className="mt-16 flex justify-center gap-4 relative z-30">
          <button 
            onClick={handlePrevTab}
            className="w-14 h-14 rounded-none border border-[#0D0D0D]/20 bg-white flex items-center justify-center hover:bg-[#0D0D0D] hover:border-7l-gold hover:text-7l-gold transition-all duration-500 ease-out text-[#0D0D0D] group"
          >
            <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-1 transition-transform duration-500 ease-out" />
          </button>
          <button 
            onClick={handleNextTab}
            className="w-14 h-14 rounded-none border border-[#0D0D0D]/20 bg-white flex items-center justify-center hover:bg-[#0D0D0D] hover:border-7l-gold hover:text-7l-gold transition-all duration-500 ease-out text-[#0D0D0D] group"
          >
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-500 ease-out" />
          </button>
        </div>
      </div>

      {/* Vertical Branding Detail (Logo Oficial - Versión Gris) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-15%] h-full w-[40%] flex items-center justify-center z-0 pointer-events-none select-none hidden xl:flex overflow-hidden">
        <div className="relative w-[1200px] h-[450px] -rotate-90 opacity-20">
          <Image
            src="/logos/logo lormar sin rif gris.webp"
            alt="Logo Lormar"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* WOW Element: MOTONIVELADORA Showcase - Corporate Style */}
      <div className="absolute bottom-0 right-[-5%] w-[45%] xl:w-[42%] pointer-events-none z-10 hidden lg:block overflow-hidden">
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

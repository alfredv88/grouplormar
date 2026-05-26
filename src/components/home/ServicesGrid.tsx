"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BROCHURE_DATA } from "@/constants/brochureData";
import Magnetic from "@/components/ui/Magnetic";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const, // Ultra-suave Out-Expo
    },
  },
  exit: {
    opacity: 0,
    y: 15,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ServicesGrid() {
  const t = useTranslations('ServicesGrid');
  const [activeTab, setActiveTab] = useState(BROCHURE_DATA.services[0].category);
  const [autoplay, setAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoplay || isHovered) return;

    const interval = setInterval(() => {
      const currentIndex = BROCHURE_DATA.services.findIndex(s => s.category === activeTab);
      const nextIndex = (currentIndex + 1) % BROCHURE_DATA.services.length;
      setActiveTab(BROCHURE_DATA.services[nextIndex].category);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, isHovered, activeTab]);

  // Obtener los datos de la categoría activa
  const currentCategoryData = BROCHURE_DATA.services.find(s => s.category === activeTab);

  // Procesar los items para extraer título y descripción (Lógica Localizada)
  const displayItems = currentCategoryData?.items.map((item, idx) => {
    const parts = item.split(": ");
    const rawTitle = parts.length > 1 ? parts[0] : item;

    const localizedTitle = t(`items.${activeTab}.${idx}.title`);
    const localizedDesc = t(`items.${activeTab}.${idx}.desc`);

    // Mapeo de imágenes específicas por servicio individual
    const itemImageMap: Record<string, string> = {
      "Desarrollo Integral": "/images/services/construccion_desarrollo.webp",
      "Facilidades de Producción y Superficie": "/images/services/construccion_facilidades.webp",
      "Infraestructura Civil y Soporte": "/images/services/construccion_infraestructura.webp",
      "Instalaciones Eléctricas e Instrumentación": "/images/services/construccion_electricas.webp",
      "Correctivo y Reparación": "/images/services/mantenimiento_correctivo.webp",
      "Integridad de Tuberías y Equipos": "/images/services/mantenimiento_integridad.webp",
      "Autonomía de Flota": "/images/services/mantenimiento_flota.webp",
      "Manejo Integral de Residuos": "/images/services/ambiental_gestion.webp",
      "Saneamiento y Remediación": "/images/services/ambiental_remediacion.webp",
      "Transporte Terrestre Especializado": "/images/services/logistica_transporte.webp",
      "Izamiento y Posicionamiento de Cargas": "/images/services/logistica_izamiento.webp",
      "Gestión de Flota": "/images/services/logistica_flota.webp",
    };

    // Mapeo de imágenes realistas por categoría (como respaldo)
    const categoryImageMap: Record<string, string> = {
      "Construcción": "/images/services/construccion_real.webp",
      "Mantenimiento": "/images/services/mantenimiento_real.webp",
      "Servicios a Pozos": "/images/services/pozos_real.webp",
      "Gestión Ambiental": "/images/services/ambiental_real.webp",
      "Servicio Logístico": "/images/services/logistica_real.webp",
    };

    const tagKeys: Record<string, string> = {
      "Construcción": "Construcción",
      "Mantenimiento": "Mantenimiento",
      "Servicios a Pozos": "Servicios a Pozos",
      "Gestión Ambiental": "Gestión Ambiental",
      "Servicio Logístico": "Servicio Logístico",
    };

    return {
      id: idx,
      title: localizedTitle.toUpperCase(),
      desc: localizedDesc,
      img: itemImageMap[rawTitle] || categoryImageMap[activeTab] || "/images/equipment/hero_excavator.webp",
      tag: t(`tags.${tagKeys[activeTab]}`) || t("tags.certificado")
    };
  }) || [];

  const handlePrevTab = () => {
    setAutoplay(false);
    const currentIndex = BROCHURE_DATA.services.findIndex(s => s.category === activeTab);
    const prevIndex = (currentIndex - 1 + BROCHURE_DATA.services.length) % BROCHURE_DATA.services.length;
    setActiveTab(BROCHURE_DATA.services[prevIndex].category);
  };

  const handleNextTab = () => {
    setAutoplay(false);
    const currentIndex = BROCHURE_DATA.services.findIndex(s => s.category === activeTab);
    const nextIndex = (currentIndex + 1) % BROCHURE_DATA.services.length;
    setActiveTab(BROCHURE_DATA.services[nextIndex].category);
  };

  return (
    <section className="py-16 bg-[#F7F7F7] relative border-b border-[#0D0D0D] overflow-hidden" id="servicios">

      <div className="w-full max-w-[1600px] ml-0 md:ml-8 px-6 md:px-12 lg:px-24 relative z-20">

        {/* Título de Alto Impacto */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div className="space-y-1">
            <h2 className="text-h2 flex flex-col">
              <span className="text-7l-gold">{t('soluciones')}</span>
              <span className="text-[#0D0D0D]">{t('corporativas')}</span>
            </h2>
            <div className="w-24 h-[4px] bg-7l-gold mt-6"></div>
          </div>

          <div className="max-w-md pb-2 border-l-[3px] border-7l-gold pl-5">
            <p className="font-montserrat text-[12px] !text-black tracking-[0.05em] leading-[1.8] font-semibold">
              {t.rich('descripcionSeccion', {
                gold: (chunks) => <span className="text-7l-gold font-bold">{chunks}</span>
              })}
            </p>
          </div>
        </div>

        {/* Navegación Ejecutiva */}
        <div className="relative mb-12">
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-10 md:gap-14 pb-2 relative z-20">
            {BROCHURE_DATA.services.map((service) => {
              const isActive = activeTab === service.category;
              return (
                <button
                  key={service.category}
                  onClick={() => {
                    setActiveTab(service.category);
                    setAutoplay(false);
                  }}
                  className={`relative py-5 text-[11px] font-montserrat font-bold uppercase tracking-[0.15em] transition-all whitespace-nowrap outline-none ${isActive ? "text-[#0D0D0D]" : "text-[#0D0D0D]/50 hover:text-7l-gold"
                    }`}
                >
                  {t(`categories.${service.category}`)}
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
          {/* Progress Track */}
          <div className="absolute bottom-[8px] left-0 right-0 h-[1px] bg-[#0D0D0D]/10 z-10" />
        </div>

        {/* Services Grid with Animation */}
        <div
          className="min-h-[320px] md:min-h-[450px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {displayItems.map((item, idx) => {
                const objectPositions = ["object-center", "object-top", "object-bottom", "object-left"];
                const currentPosition = objectPositions[idx % objectPositions.length];

                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    onClick={() => setAutoplay(false)}
                    className="group bg-white border border-[#0D0D0D]/5 hover:border-7l-gold/30 transition-all duration-700 flex flex-col relative overflow-hidden cursor-pointer h-full min-h-[320px] md:min-h-[460px] w-full shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1"
                  >

                    {/* Media Frame */}
                    <div className="relative h-[190px] shrink-0 w-full overflow-hidden transition-all duration-700">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className={`object-cover ${currentPosition} transition-all duration-1000 group-hover:scale-105`}
                      />
                    </div>

                    {/* Content Frame */}
                    <div className="p-6 flex-1 flex flex-col relative z-30">

                      {/* Capability Tag */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-6 h-[2px] bg-7l-gold"></div>
                        <span className="font-montserrat text-[9px] font-black text-7l-gold tracking-[0.2em] uppercase">{item.tag}</span>
                      </div>

                      {/* Title Group */}
                      <div className="mb-2 min-h-[40px] flex items-start">
                        <h3
                          className="text-h3 !text-[#0D0D0D] !text-[15px] leading-[1.2] group-hover:text-7l-gold transition-colors duration-300 font-black"
                        >
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <div className="flex-1">
                        <p
                          className="text-[12px] font-montserrat font-semibold !text-black leading-relaxed mb-4"
                        >
                          {item.desc}
                        </p>
                      </div>

                      {/* Action Footer */}
                      <div className="pt-4 border-t border-[#0D0D0D]/10 flex items-center mt-auto">
                        <Magnetic range={40} strength={0.3}>
                          <Link
                            href="/servicios"
                            className="group/btn inline-flex items-center gap-4 text-[10px] font-montserrat font-black tracking-[0.3em] text-[#0D0D0D] uppercase transition-all"
                          >
                            <span className="group-hover:text-7l-gold transition-colors duration-500">{t('consultar')}</span>
                            <div className="w-8 h-[2px] bg-[#0D0D0D] group-hover:w-12 group-hover:bg-7l-gold transition-all duration-500 ease-out" />
                          </Link>
                        </Magnetic>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
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

      {/* Vertical Branding Detail */}
      <div
        className="absolute h-full w-[40%] flex items-center justify-center z-0 pointer-events-none select-none hidden xl:flex overflow-hidden"
        style={{
          right: "-16%",
          top: "50%",
          transform: "translateY(calc(-50% + -125px))",
        }}
      >
        <div
          className="relative"
          style={{
            width: "497px",
            height: "374px",
            transform: "rotate(-90deg)",
            opacity: 1,
          }}
        >
          <Image
            src="/logos/logo lormar sin rif gris.webp"
            alt="Logo Lormar"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* WOW Element: MOTONIVELADORA Showcase */}
      <div className="absolute bottom-0 right-[-5%] w-[45%] xl:w-[42%] pointer-events-none z-10 hidden lg:block overflow-hidden">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 20, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <Image
            src="/images/equipment/motoniveladora.webp"
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

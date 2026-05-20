'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronDown, CheckCircle2 } from 'lucide-react';

import { services } from '@/data/servicesData';

// Helper para asignar las clases de fondo según el tipo definido en la alternancia
const getBgClasses = (bg: string) => {
  switch (bg) {
    case 'gold':
      return 'bg-7l-gold text-black';
    case 'white':
      return 'bg-[#F7F7F7] text-zinc-900';
    case 'tinted':
      return 'bg-[#0a1111] text-white';
    case 'black':
      return 'bg-black text-white';
    case 'dark':
    default:
      return 'bg-[#0d0d0d] text-white';
  }
};

// Componente de Carrusel con el efecto de deslizamiento (slide) suave y continuo (solo cuando está centrado)
const ServiceCarousel = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  // Detecta cuando al menos el 30% del carrusel está visible en la pantalla
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isInView, images.length]);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[380px] lg:min-h-full overflow-hidden group">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[current]}
            alt="Servicio Lormar"
            fill
            className="object-cover brightness-75 contrast-110"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Indicadores de carrusel rediseñados y modernos */}
      <div className="absolute bottom-6 left-6 flex space-x-2.5 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current ? 'w-8 bg-7l-gold' : 'w-2 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ServiceAccordion = ({ specifications, isGold, isWhite }: { specifications: {label: string, detail: string}[], isGold: boolean, isWhite: boolean }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`mt-6 space-y-0 border-t ${isGold ? 'border-black/10' : isWhite ? 'border-zinc-200' : 'border-white/10'} pt-4`}>
      {specifications.map((spec, idx) => (
        <div key={idx} className={`border-b ${isGold ? 'border-black/10' : isWhite ? 'border-zinc-200' : 'border-white/5'}`}>
          <button 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className={`w-full flex items-center justify-between text-left py-3.5 font-montserrat text-[11px] font-bold uppercase tracking-wider transition-colors ${
              isGold ? 'text-black hover:text-white' : 
              isWhite ? 'text-zinc-900 hover:text-7l-gold' : 
              'text-zinc-300 hover:text-7l-gold'
            }`}
          >
            <span className="flex items-center gap-3">
              <span className={`w-1.5 h-1.5 rounded-none ${isGold ? 'bg-black' : 'bg-7l-gold'}`} />
              {spec.label}
            </span>
            <ChevronDown size={14} className={`transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className={`pt-1 pb-5 text-xs font-montserrat font-medium leading-relaxed ${
                  isGold ? 'text-white' : isWhite ? 'text-zinc-600' : 'text-zinc-400'
                }`}>
                  {spec.detail}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default function ServiciosPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO DE ENTRADA */}
      <section className="h-[60vh] flex flex-col justify-center relative bg-black border-b border-white/5 overflow-hidden">
        {/* Textura industrial de fondo */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div 
            className="w-full h-full"
            style={{ 
              backgroundImage: "url('/textures/fondo lormar.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
            }}
          />
        </div>
        
        {/* Overlay degradado ambiental */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-7l-gold/5 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block"
          >
            SERVICIOS E INGENIERÍA
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' as const }}
            className="text-5xl md:text-7xl font-future text-white uppercase tracking-normal mb-6 leading-none"
          >
            <span className="text-7l-gold">DIVISIONES</span> <br />OPERATIVAS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' as const }}
            className="text-zinc-400 text-sm md:text-base font-montserrat font-medium max-w-2xl leading-relaxed"
          >
            Capacidad de respuesta inmediata y rigor de ingeniería aplicado en 5 áreas clave de la industria, soportadas íntegramente por activos y flota de maquinaria propia.
          </motion.p>
        </div>
      </section>

      {/* LISTADO DE DIVISIONES CON ALTERNANCIA INMERSIVA */}
      {services.map((service, index) => {
        const isGold = service.bg === 'gold';
        const isWhite = service.bg === 'white';
        const isTinted = service.bg === 'tinted';
        const isEven = index % 2 === 0;



        return (
          <React.Fragment key={service.id}>
            {/* Pausa 1: Después de las primeras 2 secciones (01 Construcción y 02 Mantenimiento) */}
            {index === 2 && (
              <section className="py-48 md:py-64 lg:py-72 bg-black relative overflow-hidden min-h-[60vh] flex items-center justify-center">
                {/* Video de Fondo Cinematográfico */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover opacity-60 brightness-75 scale-105"
                  >
                    <source src="/videos/DJI_0323.webm" type="video/webm" />
                    {/* Fallback en caso de que DJI_0323.webm falle */}
                    <source src="/videos/lormar_3.webm" type="video/webm" />
                  </video>
                  {/* Degradados de fundido con secciones adyacentes y oscurecimiento para legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-black/45 to-black z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-10" />
                </div>

                {/* Bordes Industriales Superior e Inferior */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-20" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-20" />
                <div className="absolute inset-0 z-10 opacity-5 bg-industrial-grid pointer-events-none" />
                
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center relative z-20">
                  <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.6em] uppercase mb-4 block">
                    POTENCIA OPERATIVA
                  </span>
                  <h2 className="text-4xl md:text-6xl font-future text-white uppercase tracking-normal max-w-4xl mx-auto leading-tight mb-6">
                    INGENIERÍA QUE TRANSFORMA VISIONES EN <span className="text-7l-gold">INFRAESTRUCTURA REAL</span>
                  </h2>
                  <p className="text-zinc-300 font-montserrat font-semibold text-sm md:text-base max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    Nuestra flota propia de maquinaria vial y soporte pesado garantiza un control total sobre los plazos y la calidad en cada obra electromecánica y civil.
                  </p>
                </div>
              </section>
            )}

            {/* Pausa 2: Después de las siguientes 2 secciones (03 Pozos y 04 Ambiental) */}
            {index === 4 && (
              <section className="py-32 bg-7l-gold relative overflow-hidden" style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.12) 1px, transparent 0)", backgroundSize: "24px 24px" }}>
                {/* Bordes Industriales Superior e Inferior */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent z-20" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent z-20" />
                
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
                  <span className="font-montserrat !text-black/60 text-[10px] font-black tracking-[0.6em] uppercase mb-4 block">
                    COMPROMISO Y CONFORMIDAD
                  </span>
                  <h2 className="text-4xl md:text-6xl font-future !text-black uppercase tracking-normal max-w-4xl mx-auto leading-tight mb-6">
                    HSE Y CUMPLIMIENTO <span className="text-white">RACDA OFICIAL</span>
                  </h2>
                  <p className="!text-white font-montserrat font-semibold text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                    Operamos bajo estrictos estándares internacionales de higiene, seguridad y ambiente, garantizados por nuestras certificaciones vigentes del MINEC.
                  </p>
                </div>
              </section>
            )}

            <motion.section 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full overflow-hidden flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[620px]`}
            >
              {/* Borde Industrial Inferior Dinámico */}
              <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r z-20 ${
                isGold ? 'from-transparent via-black/20 to-transparent' :
                isWhite ? 'from-transparent via-zinc-300 to-transparent' :
                'from-transparent via-white/15 to-transparent'
              }`} />

              {/* Contenido Técnico */}
              <div
                className={`relative w-full lg:w-1/2 flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6 group/content ${getBgClasses(service.bg)}`}
                style={isGold ? { 
                  backgroundImage: "radial-gradient(rgba(0,0,0,0.12) 1px, transparent 0)", 
                  backgroundSize: "24px 24px" 
                } : isTinted ? {
                  backgroundImage: "radial-gradient(rgba(249,179,49,0.04) 1px, transparent 0)", 
                  backgroundSize: "24px 24px"
                } : undefined}
              >
                {/* Identificador & Categoría */}
                <div className="flex items-center space-x-3">
                  <span className={`font-future text-xs ${
                    isGold ? 'text-black/40' :
                    'text-7l-gold/60'
                  }`}>
                    {service.id}
                  </span>
                  <span className={`h-px w-6 ${
                    isGold ? 'bg-black/20' :
                    'bg-7l-gold/30'
                  }`} />
                  <span
                    className={`font-montserrat text-[10px] font-black tracking-[0.4em] uppercase ${
                      isGold ? 'text-black/60' :
                      isWhite ? 'text-zinc-500' :
                      'text-zinc-400'
                    }`}
                  >
                    {service.category}
                  </span>
                </div>

                {/* Título Principal */}
                <h2
                  className={`text-4xl md:text-5xl lg:text-6xl font-future leading-none uppercase transition-transform duration-500 ease-out group-hover/content:translate-x-1 ${
                    isGold ? '!text-black' :
                    isWhite ? '!text-zinc-950' :
                    'text-white'
                  }`}
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />

                {/* Subtítulo / Propósito */}
                <p
                  className={`text-base md:text-lg font-montserrat leading-relaxed font-bold ${
                    isGold ? '!text-white font-bold' :
                    isWhite ? '!text-zinc-900 font-extrabold' :
                    'text-7l-gold'
                  }`}
                >
                  {service.subtitle}
                </p>

                {/* Descripción Detallada e Info Técnica */}
                <div className="max-w-xl">
                  <p
                    className={`text-sm md:text-base font-montserrat leading-relaxed ${
                      isGold ? '!text-white font-medium' :
                      isWhite ? '!text-zinc-700 font-medium' :
                      'text-zinc-400 font-medium'
                    }`}
                  >
                    {service.description}
                  </p>
                  
                  {/* Acordeón de Especificaciones Técnicas */}
                  {service.specifications && (
                    <ServiceAccordion 
                      specifications={service.specifications} 
                      isGold={isGold} 
                      isWhite={isWhite} 
                    />
                  )}

                  {/* Badges HUD Oficiales */}
                  {service.badges && service.badges.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-6">
                      {service.badges.map((badge, idx) => (
                        <div key={idx} className={`flex items-center gap-2 px-3 py-1.5 border text-[9px] font-black uppercase tracking-widest ${
                          isTinted || service.bg === 'dark' || service.bg === 'black' ? 'border-7l-gold/30 text-white bg-7l-gold/5' : 
                          isGold ? 'border-black/20 text-black bg-black/5' :
                          'border-black/10 text-zinc-800'
                        }`}>
                          <CheckCircle2 size={11} className={isGold ? "text-black" : "text-7l-gold"} />
                          {badge}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Botón Técnico Inteligente */}
                <div className="pt-4">
                  <a
                    href={`/contacto?servicio=${encodeURIComponent(service.category.toLowerCase())}`}
                    className={`inline-flex items-center space-x-3 font-montserrat font-bold text-xs tracking-widest uppercase transition-all duration-300 group/btn ${
                      isGold ? 'bg-black text-7l-gold hover:text-white px-8 py-3.5 hover:bg-zinc-950 shadow-md hover:shadow-black/10' :
                      isWhite ? 'bg-black text-white hover:bg-zinc-900 px-8 py-3.5 shadow-md hover:shadow-black/10' :
                      'bg-7l-gold text-black hover:bg-white px-8 py-3.5 shadow-md hover:shadow-black/10'
                    }`}
                  >
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">
                      {service.ctaText}
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </a>
                </div>
              </div>

              {/* Visualización (Carrusel Dinámico) */}
              <div className="relative w-full lg:w-1/2 h-[380px] lg:h-auto overflow-hidden">
                <ServiceCarousel images={service.images} />
              </div>
            </motion.section>
          </React.Fragment>
        );
      })}

      {/* CTA DE CIERRE */}
      <section 
        className="bg-[#F7F7F7] py-28 text-center relative overflow-hidden border-t border-zinc-200"
        style={{ 
          backgroundImage: "radial-gradient(rgba(0,0,0,0.06) 1px, transparent 0)", 
          backgroundSize: "24px 24px" 
        }}
      >
        {/* Sutil sombra interna inferior */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <span className="font-montserrat !text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
            ALIANZA ESTRATÉGICA
          </span>
          <h2 className="text-4xl md:text-6xl font-future !text-black leading-none uppercase max-w-4xl mx-auto mb-6">
            ¿LISTO PARA INICIAR <br className="md:hidden" /> SU <span className="text-7l-gold">PROYECTO?</span>
          </h2>
          <p className="font-montserrat !text-zinc-700 font-bold text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Póngase en contacto con nuestra división de ingeniería para evaluar y presupuestar su obra con el máximo nivel de rigor técnico y profesionalismo.
          </p>
          <a 
            href="/contacto"
            className="inline-flex items-center space-x-3 bg-black text-7l-gold hover:text-white px-9 py-4.5 font-montserrat font-black text-xs tracking-[0.2em] uppercase transition-all duration-300 group hover:shadow-2xl hover:shadow-black/30"
          >
            <span>Contactar División Técnica</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  );
}

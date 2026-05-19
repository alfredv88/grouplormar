'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

// Imágenes para los carruseles (combinación de específicas e industriales de Lormar)
const serviceImages = {
  izamiento: [
    '/images/heavy-crane.png',
    '/images/services/logistica_izamiento.jpg',
    '/images/manlift.png',
  ],
  infraestructura: [
    '/images/services/construccion_real.png',
    '/images/services/construccion_desarrollo.png',
    '/images/asphalt-finisher.png',
  ],
  pozos: [
    '/images/services/pozos_real.png',
    '/images/pulling-unit.png',
    '/images/lighting-tower.png',
  ],
  mantenimiento: [
    '/images/services/mantenimiento_real.png',
    '/images/services/mantenimiento_correctivo.jpg',
    '/images/services/mantenimiento_flota.jpg',
  ],
};

const services = [
  {
    id: '01',
    category: 'Izamiento',
    title: 'IZAMIENTO DE <span class="text-7l-gold">CARGAS</span>',
    subtitle: 'Rigor técnico y seguridad en operaciones críticas.',
    description: 'Equipos de alta capacidad y personal certificado para maniobras de izamiento complejas en entornos industriales y petroleros de alta exigencia.',
    bg: 'dark',
    images: serviceImages.izamiento,
  },
  {
    id: '02',
    category: 'Vialidad',
    title: 'INFRAESTRUCTURA <span class="text-black">VIAL</span>',
    subtitle: 'Construcción y mantenimiento de vías.',
    description: 'Desarrollo de infraestructura vial, pavimentación y movimiento de suelos con maquinaria de última generación bajo estrictos controles de calidad.',
    bg: 'gold',
    images: serviceImages.infraestructura,
  },
  {
    id: '03',
    category: 'Energía',
    title: 'INGENIERÍA DE <span class="text-7l-gold">POZOS</span>',
    subtitle: 'Servicios especializados para la industria energética.',
    description: 'Operaciones de pulling, workover y completación de pozos con altos estándares de eficiencia y seguridad operativa en yacimientos.',
    bg: 'dark',
    images: serviceImages.pozos,
  },
  {
    id: '04',
    category: 'Mantenimiento',
    title: 'GESTIÓN DE <span class="text-7l-gold">ACTIVOS</span>',
    subtitle: 'Mantenimiento industrial y paradas de planta.',
    description: 'Programas de mantenimiento preventivo y correctivo para asegurar la continuidad operativa de instalaciones mecánicas, eléctricas e instrumentación.',
    bg: 'white',
    images: serviceImages.mantenimiento,
  },
];

// Componente de Carrusel con el mismo estilo de imagen (brightness-75 contrast-110)
const ServiceCarousel = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full min-h-[350px] lg:min-h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
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
      
      {/* Indicadores flotantes de carrusel */}
      <div className="absolute bottom-6 left-6 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 transition-all duration-300 ${
              index === current ? 'w-8 bg-7l-gold' : 'w-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function ServiciosPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO DE ENTRADA (Mismo fondo y degradados que Nosotros) */}
      <section className="h-[60vh] flex flex-col justify-center relative bg-black border-b border-white/5">
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
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
            SERVICIOS INDUSTRIALES
          </span>
          <h1 className="text-5xl md:text-7xl font-future text-white uppercase tracking-normal mb-4 leading-none">
            <span className="text-7l-gold">INGENIERÍA</span> <br />Y EJECUCIÓN
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-montserrat font-medium max-w-2xl leading-relaxed">
            Soluciones de alta complejidad operativa ejecutadas con equipamiento propio y bajo los estándares de seguridad y calidad más exigentes.
          </p>
        </div>
      </section>

      {/* SECCIONES DE SERVICIOS */}
      {services.map((service, index) => {
        const isGold = service.bg === 'gold';
        const isWhite = service.bg === 'white';
        const isEven = index % 2 === 0;

        return (
          <React.Fragment key={service.id}>
            {/* Descanso Visual después de la Sección 02 */}
            {index === 2 && (
              <section className="py-28 bg-black border-y border-white/5 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
                  <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
                    POTENCIA OPERATIVA
                  </span>
                  <h2 className="text-4xl md:text-6xl font-future text-white uppercase tracking-normal max-w-4xl mx-auto leading-none mb-6">
                    INGENIERÍA QUE TRANSFORMA VISIONES EN <span className="text-7l-gold">INFRAESTRUCTURA REAL</span>
                  </h2>
                  <p className="text-zinc-400 font-montserrat font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                    Nuestra flota propia de grúas, maquinaria vial y equipos de pulling nos permite mantener el control total del cronograma y la calidad final del proyecto.
                  </p>
                </div>
              </section>
            )}

            <section className={`relative w-full overflow-hidden flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[600px]`}>
              {/* Contenido */}
              <div
                className={`relative w-full lg:w-1/2 flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6 ${
                  isGold ? 'bg-7l-gold text-black' :
                  isWhite ? 'bg-white text-zinc-900' :
                  'bg-black text-white'
                }`}
                style={isGold ? { 
                  backgroundImage: "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 0)", 
                  backgroundSize: "24px 24px" 
                } : undefined}
              >
                <span
                  className={`font-montserrat text-[10px] font-black tracking-[0.5em] uppercase ${
                    isGold ? 'text-black/60' :
                    isWhite ? 'text-zinc-500' :
                    'text-zinc-500'
                  }`}
                >
                  {service.category}
                </span>

                <h2
                  className={`text-5xl md:text-6xl font-future leading-none uppercase ${
                    isGold ? '!text-black' :
                    isWhite ? '!text-black' :
                    'text-white'
                  }`}
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />

                <p
                  className={`text-lg font-montserrat leading-relaxed font-bold ${
                    isGold ? '!text-white' :
                    isWhite ? 'text-zinc-700' :
                    'text-7l-gold'
                  }`}
                >
                  {service.subtitle}
                </p>

                <p
                  className={`text-sm md:text-base font-montserrat leading-relaxed ${
                    isGold ? '!text-black/80 font-medium' :
                    isWhite ? 'text-zinc-600 font-medium' :
                    'text-zinc-400 font-medium'
                  } max-w-lg`}
                >
                  {service.description}
                </p>

                <div className="pt-4">
                  <button
                    className={`flex items-center space-x-2 font-montserrat font-bold text-xs tracking-widest uppercase transition-all duration-300 border-b pb-1 ${
                      isGold ? 'border-black text-black hover:border-white hover:text-white' :
                      isWhite ? 'border-zinc-900 text-zinc-900 hover:border-7l-gold hover:text-7l-gold' :
                      'border-7l-gold text-7l-gold hover:border-white hover:text-white'
                    }`}
                  >
                    <span>Ficha Técnica</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Visual (Carrusel) */}
              <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
                <ServiceCarousel images={service.images} />
              </div>
            </section>
          </React.Fragment>
        );
      })}

      {/* SECCIÓN FINAL FIJA (Logística y Transporte) */}
      <section className="relative w-full overflow-hidden flex flex-col lg:flex-row-reverse min-h-[600px]">
        <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
          <Image
            src="/images/services/logistica_real.png"
            alt="Flota Lormar"
            fill
            className="object-cover brightness-75 contrast-110"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="relative w-full lg:w-1/2 bg-black flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6">
          <span className="font-montserrat text-zinc-500 text-[10px] font-black tracking-[0.5em] uppercase">
            Logística
          </span>
          
          <h2 className="text-5xl md:text-6xl font-future text-white leading-none uppercase">
            LOGÍSTICA Y <br />
            <span className="text-7l-gold">TRANSPORTE</span>
          </h2>
          
          <p className="text-lg font-montserrat text-7l-gold leading-relaxed font-bold">
            Movilizando el futuro de la industria.
          </p>
          
          <p className="text-zinc-400 text-sm md:text-base font-montserrat font-medium max-w-lg leading-relaxed">
            Contamos con una flota robusta y propia de camiones pesados y equipos especiales aptos para el transporte seguro de cargas sobredimensionadas, insumos críticos y materiales especiales a lo largo del territorio nacional.
          </p>

          <div className="pt-4">
            <button className="flex items-center space-x-2 font-montserrat font-bold text-xs tracking-widest uppercase transition-all duration-300 border-b border-7l-gold text-7l-gold hover:border-white hover:text-white pb-1">
              <span>Capacidad de Flota</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA DE CIERRE */}
      <section className="bg-7l-gold py-24 text-center relative overflow-hidden"
               style={{ 
                 backgroundImage: "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 0)", 
                 backgroundSize: "24px 24px" 
               }}>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-future !text-black leading-none uppercase max-w-4xl mx-auto mb-6">
            ¿LISTO PARA INICIAR <br className="md:hidden" /> SU PROYECTO?
          </h2>
          <p className="font-montserrat !text-black/80 font-bold text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Póngase en contacto con nuestra división de ingeniería para evaluar y presupuestar su obra con el máximo nivel de rigor técnico.
          </p>
          <button className="bg-black text-white hover:bg-black/90 px-8 py-4 font-montserrat font-black text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>Contactar División Técnica</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  );
}

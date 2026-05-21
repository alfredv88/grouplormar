'use client';

import Image from 'next/image';
import { Target, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import ComplianceHSE from '@/components/nosotros/ComplianceHSE';
import TimelineSection from '@/components/nosotros/TimelineSection';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' as const }
};

export default function NosotrosPage() {
  const values = [
    { name: "SEGURIDAD (HSE)", desc: "Priorizamos la integridad de nuestro personal y el cuidado del medio ambiente en cada operación." },
    { name: "CALIDAD", desc: "Cumplimos con las normativas y estándares más exigentes a nivel nacional e internacional." },
    { name: "COMPROMISO", desc: "Garantizamos la ejecución de proyectos complejos superando las expectativas de nuestros clientes." },
    { name: "INNOVACIÓN", desc: "Invertimos constantemente en flota propia y tecnología de punta para mantener el liderazgo." }
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero de Entrada */}
      <section className="h-[60vh] flex flex-col justify-center relative bg-black border-b border-white/5 overflow-hidden">
        {/* Parallax Industrial Background Texture */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-30"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
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
        </motion.div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block" style={{ color: '#F9B331' }}>
              LORMAR CORPORATION
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-future text-white uppercase tracking-normal mb-4 leading-none"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <span className="text-7l-gold" style={{ color: '#F9B331' }}>AUTORIDAD</span> <br />INDUSTRIAL
          </motion.h1>

          <motion.p 
            className="text-zinc-400 text-sm md:text-base font-montserrat font-medium max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            No subcontratamos nuestro éxito. Con flota pesada propia y un equipo de ingeniería de élite, ejecutamos donde otros ven imposibles.
          </motion.p>
        </div>
      </section>

      {/* SECCIÓN 01: QUIÉNES SOMOS (Imagen Izquierda | Texto Derecha - Dark) */}
      <section className="relative w-full overflow-hidden flex flex-col lg:flex-row min-h-[600px] group border-b border-white/5">
        <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
          <Image
            src="/images/about/equipo_lormar.webp"
            alt="Equipo Lormar"
            fill
            className="object-cover brightness-75 contrast-110 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        </div>
        <motion.div 
          className="relative w-full lg:w-1/2 bg-black flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6"
          {...fadeInUp}
        >
          <span className="font-montserrat text-zinc-500 text-[10px] font-black tracking-[0.5em] uppercase">
            Identidad
          </span>
          <h2 className="text-5xl md:text-6xl font-future text-white leading-none uppercase">
            ¿QUIÉNES <br />
            <span className="text-7l-gold" style={{ color: '#F9B331' }}>SOMOS?</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-medium max-w-lg leading-relaxed">
            Somos una empresa que cuenta con un equipo de profesionales altamente capacitados. Competitivos dentro del mercado nacional, con una visión internacional, cumpliendo con las normativas establecidas por nuestros clientes y en estándares nacionales e internacionales en materia de calidad, seguridad y ambiente.
          </p>
        </motion.div>
      </section>

      {/* SECCIÓN 02: MISIÓN Y VISIÓN (Texto Izquierda - Oro | Imagen Derecha) */}
      <section className="relative w-full overflow-hidden flex flex-col lg:flex-row-reverse min-h-[600px] group">
        <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
          <Image
            src="/images/about/operador_lormar.webp"
            alt="Misión y Visión"
            fill
            className="object-cover brightness-75 contrast-110 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        </div>
        <motion.div 
          className="relative w-full lg:w-1/2 bg-7l-gold flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-8"
          style={{ 
            backgroundColor: '#F9B331',
            backgroundImage: "radial-gradient(rgba(0,0,0,0.1) 1px, transparent 0)", 
            backgroundSize: "24px 24px" 
          }}
          {...fadeInUp}
        >
          <span className="font-montserrat text-black/60 text-[10px] font-black tracking-[0.5em] uppercase">
            Dirección
          </span>
          
          <div className="space-y-4">
            <h2 className="text-4xl font-future !text-black leading-none uppercase flex items-center gap-3">
              <Target size={32} className="!text-black" /> MISIÓN
            </h2>
            <p className="text-lg md:text-xl font-montserrat !text-white leading-relaxed font-medium max-w-lg">
              Brindar servicios de ingeniería de alta calidad en las áreas civiles, mecánica, eléctrica e instrumentación. Estamos comprometidos a satisfacer y superar las expectativas de nuestros clientes, garantizando el cumplimiento de sus exigencias.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-future !text-black leading-none uppercase flex items-center gap-3">
              <Eye size={32} className="!text-black" /> VISIÓN
            </h2>
            <p className="text-lg md:text-xl font-montserrat !text-white leading-relaxed font-medium max-w-lg">
              Alcanzar un alto nivel de competitividad, asegurar el crecimiento como una empresa sólida que cumple con sus objetivos, bajo el ritmo propuesto de estar entre las empresas certificadas en aseguramiento y control de la calidad.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN 03: VALORES */}
      <section className="py-24 bg-black border-b border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div {...fadeInUp}>
            <span className="font-montserrat text-zinc-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
              Principios
            </span>
            <h2 className="text-4xl md:text-5xl font-future text-white mb-12 uppercase">
              NUESTROS <span className="text-7l-gold" style={{ color: '#F9B331' }}>VALORES</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                className="border-l-2 border-7l-gold/30 pl-4 py-1 hover:border-7l-gold transition-colors duration-300 cursor-pointer group"
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h4 className="font-future text-lg text-white uppercase mb-2 group-hover:text-7l-gold transition-colors duration-300" style={{ color: '#ffffff' }}>
                  {v.name}
                </h4>
                <p className="text-zinc-400 text-sm font-medium transition-colors duration-300 group-hover:text-zinc-300">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 04: TIMELINE INTERACTIVO */}
      <TimelineSection />

      {/* SECCIÓN 05: COMPLIANCE & HSE */}
      <ComplianceHSE />
    </main>
  );
}

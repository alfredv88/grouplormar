'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Award, Zap, Cpu } from 'lucide-react';
import ComplianceHSE from '@/components/nosotros/ComplianceHSE';
import TimelineSection from '@/components/nosotros/TimelineSection';

const values = [
  { 
    name: "SEGURIDAD (HSE)", 
    desc: "Priorizamos la integridad de nuestro personal y el cuidado del medio ambiente en cada operación.",
    num: "01",
    icon: ShieldCheck
  },
  { 
    name: "CALIDAD", 
    desc: "Cumplimos con las normativas y estándares más exigentes a nivel nacional e internacional.",
    num: "02",
    icon: Award
  },
  { 
    name: "COMPROMISO", 
    desc: "Garantizamos la ejecución de proyectos complejos superando las expectativas de nuestros clientes.",
    num: "03",
    icon: Zap
  },
  { 
    name: "INNOVACIÓN", 
    desc: "Invertimos constantemente en flota propia y tecnología de punta para mantener el liderazgo.",
    num: "04",
    icon: Cpu
  }
];

function TechnicalDivider() {
  return (
    <div className="relative w-full flex items-center justify-center py-8 bg-black">
      <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-[#F9B331]/30 to-transparent" />
      {/* Central technical HUD diamond */}
      <div className="relative z-10 w-2.5 h-2.5 rotate-45 border border-[#F9B331] bg-black flex items-center justify-center shadow-[0_0_10px_rgba(249,179,49,0.3)]">
        <div className="w-0.5 h-0.5 bg-[#F9B331]" />
      </div>
    </div>
  );
}

export default function NosotrosPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      {/* Hero de Entrada Cinematográfico */}
      <section className="h-[65vh] flex flex-col justify-center relative bg-black border-b border-white/5 overflow-hidden">
        {/* Parallax Background Texture with smooth continuous slow pulse */}
        <motion.div 
          initial={{ scale: 1.05, opacity: 0.3 }}
          animate={{ scale: 1.08, opacity: 0.4 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 12, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
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

        {/* Ambient mesh glow gradients */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#F9B331]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#F9B331]/3 blur-[140px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="space-y-4"
          >
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
              }}
              className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.6em] uppercase block"
              style={{ color: '#F9B331' }}
            >
              LORMAR CORPORATION
            </motion.span>
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } }
              }}
              className="text-5xl md:text-7xl font-future text-white uppercase tracking-normal leading-none"
            >
              <span className="text-7l-gold" style={{ color: '#F9B331' }}>AUTORIDAD</span> <br />INDUSTRIAL
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="text-zinc-400 text-sm md:text-base font-montserrat font-medium max-w-2xl leading-relaxed"
            >
              No subcontratamos nuestro éxito. Con flota pesada propia y un equipo de ingeniería de élite, ejecutamos donde otros ven imposibles.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 01: QUIÉNES SOMOS (Imagen Izquierda | Texto Derecha - Dark) */}
      <section className="relative w-full overflow-hidden flex flex-col lg:flex-row min-h-[600px] border-b border-white/5 bg-black">
        {/* Left Image Column with Reveal & CAD overlays */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden group">
          {/* Technical CAD target overlay */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/30 z-10 pointer-events-none" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/30 z-10 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-white/30 z-10 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/30 z-10 pointer-events-none" />
          <div className="absolute top-6 left-6 text-[8px] font-mono text-white/40 z-10 tracking-widest pointer-events-none">
            SYS.7L // SCALE.1-100
          </div>
          
          <motion.div 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/equipo_lormar_accion_industrial.png"
              alt="Equipo Lormar"
              fill
              className="object-cover brightness-[0.7] contrast-[1.05] group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
            />
          </motion.div>
        </div>

        {/* Right Content Column */}
        <div className="relative w-full lg:w-1/2 bg-black flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6">
          <span className="font-montserrat text-zinc-500 text-[10px] font-black tracking-[0.5em] uppercase">
            Identidad
          </span>
          <h2 className="text-4xl md:text-5xl font-future text-white leading-none uppercase">
            ¿QUIÉNES <br />
            <span className="text-7l-gold" style={{ color: '#F9B331' }}>SOMOS?</span>
          </h2>
          <div className="w-12 h-[1px] bg-7l-gold" style={{ backgroundColor: '#F9B331' }} />
          <p className="text-zinc-400 text-sm md:text-base font-medium max-w-lg leading-relaxed font-montserrat">
            Somos una empresa que cuenta con un equipo de profesionales altamente capacitados. Competitivos dentro del mercado nacional, con una visión internacional, cumpliendo con las normativas establecidas por nuestros clientes y en estándares nacionales e internacionales en materia de calidad, seguridad y ambiente.
          </p>
        </div>
      </section>

      {/* SECCIÓN 02: MISIÓN Y VISIÓN (Texto Izquierda - Oro | Imagen Derecha) */}
      <section className="relative w-full overflow-hidden flex flex-col lg:flex-row-reverse min-h-[620px] bg-black">
        {/* Right Image Column with overlays */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden group">
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/30 z-10 pointer-events-none" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/30 z-10 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-white/30 z-10 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/30 z-10 pointer-events-none" />
          
          <motion.div 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/operador_lormar_precision_maestria.png"
              alt="Misión y Visión"
              fill
              className="object-cover brightness-[0.7] contrast-[1.05] group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
            />
          </motion.div>
        </div>

        {/* Left Content Column in Gold with Tech Grid */}
        <div 
          className="relative w-full lg:w-1/2 flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-8"
          style={{ 
            backgroundColor: '#F9B331',
            backgroundImage: "radial-gradient(rgba(0,0,0,0.12) 1.5px, transparent 0)", 
            backgroundSize: "28px 28px" 
          }}
        >
          <span className="font-montserrat text-black/60 text-[10px] font-black tracking-[0.5em] uppercase">
            Dirección
          </span>
          
          {/* Misión Box inside glassmorphism container */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-black/10 backdrop-blur-sm border border-black/5 p-6 md:p-8 rounded-xl shadow-lg space-y-4"
          >
            <h2 className="text-3xl font-future !text-black leading-none uppercase flex items-center gap-3">
              <Target size={28} className="!text-black" /> MISIÓN
            </h2>
            <p className="text-sm md:text-base font-montserrat !text-black leading-relaxed font-semibold">
              Brindar servicios de ingeniería de alta calidad en las áreas civiles, mecánica, eléctrica e instrumentación. Estamos comprometidos a satisfacer y superar las expectativas de nuestros clientes, garantizando el cumplimiento de sus exigencias.
            </p>
          </motion.div>

          {/* Visión Box inside glassmorphism container */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-black/10 backdrop-blur-sm border border-black/5 p-6 md:p-8 rounded-xl shadow-lg space-y-4"
          >
            <h2 className="text-3xl font-future !text-black leading-none uppercase flex items-center gap-3">
              <Eye size={28} className="!text-black" /> VISIÓN
            </h2>
            <p className="text-sm md:text-base font-montserrat !text-black leading-relaxed font-semibold">
              Alcanzar un alto nivel de competitividad, asegurar el crecimiento como una empresa sólida que cumple con sus objetivos, bajo el ritmo propuesto de estar entre las empresas certificadas en aseguramiento y control de la calidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 03: VALORES (Tarjetas de Mando Alta Tecnología) */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Subtle mesh background grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <span className="font-montserrat text-zinc-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
            Principios
          </span>
          
          <h2 className="text-4xl md:text-5xl font-future text-white mb-16 uppercase">
            NUESTROS <span className="text-7l-gold" style={{ color: '#F9B331' }}>VALORES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const IconComponent = v.icon;
              return (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -8, borderColor: 'rgba(249,179,49,0.4)' }}
                  className="relative bg-zinc-950/80 border border-white/5 p-8 rounded-xl transition-all duration-300 group overflow-hidden"
                >
                  {/* Glowing gold inner aura on hover */}
                  <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#F9B331]/5 blur-2xl rounded-full group-hover:bg-[#F9B331]/10 transition-colors pointer-events-none" />
                  
                  {/* Giant Gold Watermark Number */}
                  <div 
                    className="absolute right-4 bottom-4 font-montserrat text-7xl font-black text-white/[0.02] select-none group-hover:text-white/[0.04] transition-colors pointer-events-none"
                  >
                    {v.num}
                  </div>

                  {/* Header/Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-zinc-900 border border-white/10 rounded-lg group-hover:border-[#F9B331]/30 transition-colors">
                      <IconComponent size={20} className="text-7l-gold" style={{ color: '#F9B331' }} />
                    </div>
                  </div>

                  {/* Text Details */}
                  <h4 className="font-future text-base text-white uppercase mb-3 tracking-wide">
                    {v.name}
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm font-medium leading-relaxed font-montserrat">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNICAL SEPARATOR */}
      <TechnicalDivider />

      {/* SECCIÓN 04: TIMELINE INTERACTIVO */}
      <TimelineSection />

      {/* TECHNICAL SEPARATOR */}
      <TechnicalDivider />

      {/* SECCIÓN 05: COMPLIANCE & HSE */}
      <ComplianceHSE />
    </main>
  );
}

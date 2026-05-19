'use client';

import Image from 'next/image';
import { Target, Eye } from 'lucide-react';
import ComplianceHSE from '@/components/nosotros/ComplianceHSE';
import TimelineSection from '@/components/nosotros/TimelineSection';

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
            LORMAR CORPORATION
          </span>
          <h1 className="text-5xl md:text-7xl font-future text-white uppercase tracking-normal mb-4 leading-none">
            <span className="text-7l-gold">AUTORIDAD</span> <br />INDUSTRIAL
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-montserrat font-medium max-w-2xl leading-relaxed">
            No subcontratamos nuestro éxito. Con flota pesada propia y un equipo de ingeniería de élite, ejecutamos donde otros ven imposibles.
          </p>
        </div>
      </section>

      {/* SECCIÓN 01: QUIÉNES SOMOS (Imagen Izquierda | Texto Derecha - Dark) */}
      <section className="relative w-full overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
          <Image
            src="/images/equipo_lormar_accion_industrial.png"
            alt="Equipo Lormar"
            fill
            className="object-cover brightness-75 contrast-110"
          />
        </div>
        <div className="relative w-full lg:w-1/2 bg-black flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6">
          <span className="font-montserrat text-zinc-500 text-[10px] font-black tracking-[0.5em] uppercase">
            Identidad
          </span>
          <h2 className="text-5xl md:text-6xl font-future text-white leading-none uppercase">
            ¿QUIÉNES <br />
            <span className="text-7l-gold">SOMOS?</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-medium max-w-lg leading-relaxed">
            Somos una empresa que cuenta con un equipo de profesionales altamente capacitados. Competitivos dentro del mercado nacional, con una visión internacional, cumpliendo con las normativas establecidas por nuestros clientes y en estándares nacionales e internacionales en materia de calidad, seguridad y ambiente.
          </p>
        </div>
      </section>

      {/* SECCIÓN 02: MISIÓN Y VISIÓN (Texto Izquierda - Oro | Imagen Derecha) */}
      <section className="relative w-full overflow-hidden flex flex-col lg:flex-row-reverse min-h-[600px]">
        <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
          <Image
            src="/images/operador_lormar_precision_maestria.png"
            alt="Misión y Visión"
            fill
            className="object-cover brightness-75 contrast-110"
          />
        </div>
        <div className="relative w-full lg:w-1/2 bg-7l-gold flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-8"
             style={{ 
               backgroundImage: "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 0)", 
               backgroundSize: "24px 24px" 
             }}>
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
        </div>
      </section>

      {/* SECCIÓN 03: VALORES */}
      <section className="py-24 bg-black border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <span className="font-montserrat text-zinc-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
            Principios
          </span>
          <h2 className="text-4xl md:text-5xl font-future text-white mb-12 uppercase">
            NUESTROS <span className="text-7l-gold">VALORES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="border-l-2 border-7l-gold/30 pl-4 hover:border-7l-gold transition-colors">
                <h4 className="font-future text-lg text-white uppercase mb-2">{v.name}</h4>
                <p className="text-zinc-400 text-sm font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 04: TIMELINE INTERACTIVO */}
      <TimelineSection />

      {/* SECCIÓN 05: COMPLIANCE & HSE */}
      <ComplianceHSE />
    </main>
  );
}

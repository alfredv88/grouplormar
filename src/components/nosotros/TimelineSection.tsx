'use client';

import { motion } from 'framer-motion';

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: '2010',
    title: 'Fundación Estratégica',
    subtitle: 'LOGÍSTICA CRÍTICA PESADA',
    description: 'Inicio de operaciones enfocado en transporte pesado y movilización de cargas de gran escala.',
  },
  {
    year: '2015',
    title: 'Expansión Técnica',
    subtitle: 'MONTAJE E INGENIERÍA INDUSTRIAL',
    description: 'Integración del área de servicios mecánicos y soporte de ingeniería para el sector de hidrocarburos.',
  },
  {
    year: '2020',
    title: 'Consolidación de Flota',
    subtitle: 'MÚSCULO OPERATIVO PROPIO',
    description: 'Adquisición estratégica de grúas telescópicas y maquinaria pesada propia de última gama.',
  },
  {
    year: '2024',
    title: 'Liderazgo Nacional',
    subtitle: 'PROYECTOS MULTIDISCIPLINARIOS',
    description: 'Consolidación en el país como el principal aliado para obras civiles e infraestructura industrial.',
  },
];

export default function TimelineSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 overflow-hidden border-t border-zinc-100">
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-3 block">
            TRAYECTORIA
          </span>
          <h2 className="text-3xl md:text-4xl font-future text-zinc-950 leading-none uppercase">
            EVOLUCIÓN <br />
            <span className="text-7l-gold">CONSTANTE</span>
          </h2>
          <div className="w-10 h-[1px] bg-7l-gold mx-auto mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Central Vertical Guide (Desktop/Mobile) */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-zinc-200 z-0" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row relative w-full items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Spacing alignment for layout */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Micro Node Center */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 bg-white border border-zinc-200 flex items-center justify-center z-10 group-hover:border-7l-gold transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-zinc-300 group-hover:bg-7l-gold transition-colors duration-300" />
                  </div>

                  {/* Content (No boxes, pure editorial layout) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    }`}
                  >
                    {/* Year */}
                    <span className="font-future text-3xl md:text-4xl text-zinc-950 group-hover:text-7l-gold transition-colors duration-300 font-black block mb-2 leading-none">
                      {item.year}
                    </span>

                    {/* Title */}
                    <h3 className="font-future text-sm text-zinc-900 uppercase tracking-wide mb-1">
                      {item.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <span className="font-montserrat text-[9px] font-black text-zinc-400 tracking-wider uppercase block mb-3">
                      {item.subtitle}
                    </span>

                    {/* Description */}
                    <p className="font-montserrat text-xs md:text-sm text-zinc-500 font-medium leading-relaxed max-w-md md:inline-block">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

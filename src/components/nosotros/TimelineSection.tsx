'use client';

import { motion } from 'framer-motion';
import { Shield, Truck, Settings, Award } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
}

const milestones: Milestone[] = [
  {
    year: '2010',
    title: 'Fundación Estratégica',
    subtitle: 'LOGÍSTICA CRÍTICA PESADA',
    description: 'Establecimiento regional enfocado en resolver desafíos complejos de transporte industrial y movilización de cargas de gran escala.',
    icon: Truck,
  },
  {
    year: '2015',
    title: 'Expansión Técnica',
    subtitle: 'MONTAJE E INGENIERÍA INDUSTRIAL',
    description: 'Integración del área de servicios mecánicos y soporte técnico de élite a las operaciones de la industria petrolera nacional.',
    icon: Settings,
  },
  {
    year: '2020',
    title: 'Consolidación de Flota',
    subtitle: 'MÚSCULO OPERATIVO PROPIO',
    description: 'Adquisición de grúas telescópicas de hasta 100 toneladas y maquinaria pesada, asegurando el control absoluto del mantenimiento.',
    icon: Shield,
  },
  {
    year: '2024',
    title: 'Liderazgo Nacional',
    subtitle: 'PROYECTOS MULTIDISCIPLINARIOS',
    description: 'Posicionamiento definitivo como el principal aliado estratégico para megaproyectos de obras civiles, mecánicas e infraestructura.',
    icon: Award,
  },
];

export default function TimelineSection() {
  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden border-t border-b border-zinc-100">
      {/* Soft Glow Effect (Champagne/Gold lighting) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-7l-gold/[0.04] rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-20 md:mb-28">
          <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
            NUESTRA HISTORIA
          </span>
          <h2 className="text-4xl md:text-6xl font-future text-zinc-950 leading-none uppercase">
            EVOLUCIÓN <br />
            <span className="text-7l-gold">CONSTANTE</span>
          </h2>
          <div className="w-16 h-[2px] bg-7l-gold mx-auto mt-6" />
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Central Vertical Line (Desktop only) */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-7l-gold via-zinc-200 to-zinc-300 z-0 hidden md:block" />
          
          {/* Mobile Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-7l-gold to-zinc-300 z-0 md:hidden" />

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row relative w-full items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Outer Spacing Element (Desktop Only) */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Node Dot */}
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-none bg-white border border-zinc-200 flex items-center justify-center z-10 shadow-md group hover:border-7l-gold hover:shadow-lg hover:shadow-7l-gold/10 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-7l-gold transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>

                  {/* Card Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 relative z-10"
                  >
                    {/* Light Premium Glass Card */}
                    <div className="bg-zinc-50/50 backdrop-blur-md border border-zinc-100 p-6 md:p-8 hover:border-7l-gold/40 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group relative overflow-hidden">
                      {/* Top Line Hover Accent */}
                      <div className="absolute top-0 left-0 w-0 h-[2px] bg-7l-gold group-hover:w-full transition-all duration-500" />
                      
                      {/* Accent Pattern */}
                      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <span className="font-future text-7xl font-bold select-none text-zinc-300 leading-none">
                          {item.year.substring(2)}
                        </span>
                      </div>

                      {/* Year Indicator */}
                      <span className="font-future text-4xl md:text-5xl text-7l-gold tracking-tight font-black block mb-4">
                        {item.year}
                      </span>

                      {/* Title Header */}
                      <h3 className="font-future text-lg md:text-xl text-zinc-900 uppercase mb-1">
                        {item.title}
                      </h3>
                      
                      <span className="font-montserrat text-[10px] font-black text-7l-gold tracking-widest uppercase block mb-4">
                        {item.subtitle}
                      </span>

                      <p className="font-montserrat text-sm md:text-base text-zinc-600 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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

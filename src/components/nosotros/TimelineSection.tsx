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
    title: 'Fundación',
    subtitle: 'LOGÍSTICA CRÍTICA',
    description: 'Inicio de operaciones de transporte pesado y movilización de cargas sobredimensionadas.',
    icon: Truck,
  },
  {
    year: '2015',
    title: 'Expansión',
    subtitle: 'MONTAJE E INGENIERÍA',
    description: 'Integración de servicios de montaje mecánico e ingeniería para el sector petrolero.',
    icon: Settings,
  },
  {
    year: '2020',
    title: 'Consolidación',
    subtitle: 'MÚSCULO OPERATIVO',
    description: 'Adquisición de grúas telescópicas y flota de maquinaria pesada propia de última gama.',
    icon: Shield,
  },
  {
    year: '2024',
    title: 'Liderazgo',
    subtitle: 'PROYECTOS INTEGRALES',
    description: 'Consolidación nacional como el principal aliado estratégico para megaproyectos industriales.',
    icon: Award,
  },
];

export default function TimelineSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 overflow-hidden border-t border-b border-zinc-100">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-2 block">
            TRAYECTORIA
          </span>
          <h2 className="text-3xl md:text-4xl font-future text-zinc-950 uppercase tracking-tight">
            NUESTRA <span className="text-7l-gold">EVOLUCIÓN</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Central Horizontal Line (Desktop only) */}
          <div className="absolute top-[20px] left-6 right-6 h-[1px] bg-zinc-200 z-0 hidden md:block" />
          
          {/* Mobile Vertical Line */}
          <div className="absolute left-6 top-4 bottom-4 w-[1px] bg-zinc-200 z-0 md:hidden" />

          {/* Timeline Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {milestones.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="relative flex flex-col md:block group"
                >
                  {/* Desktop Node Connectors & Dots */}
                  <div className="relative w-full h-[40px] hidden md:flex items-center justify-start mb-6">
                    {/* Node Dot */}
                    <div className="w-10 h-10 rounded-none bg-white border border-zinc-200 flex items-center justify-center z-10 shadow-sm group-hover:border-7l-gold transition-all duration-300">
                      <Icon className="w-4 h-4 text-zinc-400 group-hover:text-7l-gold transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Mobile Layout (Flex row for dot + text) */}
                  <div className="flex gap-6 md:block">
                    {/* Mobile Node Dot */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-none bg-white border border-zinc-200 flex items-center justify-center z-10 md:hidden">
                      <Icon className="w-3.5 h-3.5 text-7l-gold" />
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 bg-zinc-50/40 border border-zinc-100 hover:border-7l-gold/20 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/30 p-6 transition-all duration-500 relative">
                      {/* Hover Top Gold Bar */}
                      <div className="absolute top-0 left-0 w-0 h-[2px] bg-7l-gold group-hover:w-full transition-all duration-500" />
                      
                      {/* Year */}
                      <span className="font-future text-3xl text-zinc-900 group-hover:text-7l-gold transition-colors duration-300 font-black block mb-2 leading-none">
                        {item.year}
                      </span>

                      {/* Title Header */}
                      <h3 className="font-future text-sm text-zinc-950 uppercase mb-1">
                        {item.title}
                      </h3>
                      
                      <span className="font-montserrat text-[9px] font-black text-7l-gold tracking-widest uppercase block mb-3">
                        {item.subtitle}
                      </span>

                      <p className="font-montserrat text-xs text-zinc-500 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

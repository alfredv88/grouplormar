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
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden border-t border-zinc-100">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-24">
          <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-3 block" style={{ color: '#F9B331' }}>
            TRAYECTORIA
          </span>
          <h2 className="text-3xl md:text-4xl font-future leading-none uppercase" style={{ color: '#09090b' }}>
            EVOLUCIÓN <br />
            <span className="text-7l-gold" style={{ color: '#F9B331' }}>CONSTANTE</span>
          </h2>
          <div className="w-10 h-[1px] bg-7l-gold mx-auto mt-4" style={{ backgroundColor: '#F9B331' }} />
        </div>

        {/* ================= DESKTOP VIEW (Serpentine Path) ================= */}
        <div className="relative w-full h-[600px] hidden md:block">
          
          {/* Central Serpentine Canal */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[160px] h-[580px] z-0">
            <svg className="w-full h-full" viewBox="0 0 160 580" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Active Golden Winding Path with draw animation */}
              <motion.path 
                d="M 16 20 C 16 110, 144 110, 144 200 C 144 290, 16 290, 16 380 C 16 470, 144 470, 144 560" 
                stroke="#b89047" 
                strokeWidth="4" 
                fill="none" 
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </svg>

            {/* Alternating Multi-Layer Nodes centered precisely on coordinates */}
            {/* Hito 0 (2010): Left (x=16, y=20) */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
              className="absolute left-[16px] top-[20px] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-7l-gold/15 flex items-center justify-center z-10 shadow-sm hover:scale-110 hover:bg-7l-gold/25 transition-all duration-300"
            >
              <div className="w-4 h-4 rounded-full bg-7l-gold flex items-center justify-center" style={{ backgroundColor: '#F9B331' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </motion.div>

            {/* Hito 1 (2015): Right (x=144, y=200) */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
              className="absolute left-[144px] top-[200px] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-7l-gold/15 flex items-center justify-center z-10 shadow-sm hover:scale-110 hover:bg-7l-gold/25 transition-all duration-300"
            >
              <div className="w-4 h-4 rounded-full bg-7l-gold flex items-center justify-center" style={{ backgroundColor: '#F9B331' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </motion.div>

            {/* Hito 2 (2020): Left (x=16, y=380) */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
              className="absolute left-[16px] top-[380px] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-7l-gold/15 flex items-center justify-center z-10 shadow-sm hover:scale-110 hover:bg-7l-gold/25 transition-all duration-300"
            >
              <div className="w-4 h-4 rounded-full bg-7l-gold flex items-center justify-center" style={{ backgroundColor: '#F9B331' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </motion.div>

            {/* Hito 3 (2024): Right (x=144, y=560) */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6, type: 'spring', stiffness: 200 }}
              className="absolute left-[144px] top-[560px] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-7l-gold/15 flex items-center justify-center z-10 shadow-sm hover:scale-110 hover:bg-7l-gold/25 transition-all duration-300"
            >
              <div className="w-4 h-4 rounded-full bg-7l-gold flex items-center justify-center" style={{ backgroundColor: '#F9B331' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </motion.div>
          </div>

          {/* Content columns aligned precisely with their respective node coordinates */}
          {/* Row 0 (2010): Left */}
          <div className="absolute right-[calc(50%+100px)] top-[20px] -translate-y-1/2 w-[380px] text-right group">
            <span className="font-future text-4xl text-zinc-950 group-hover:text-7l-gold transition-colors duration-300 font-black block mb-1">
              2010
            </span>
            <div className="font-future text-sm font-bold uppercase tracking-wide mb-1" style={{ color: '#09090b' }}>
              {milestones[0].title}
            </div>
            <span className="font-montserrat text-[10px] font-black text-7l-gold tracking-[0.2em] uppercase block mb-2" style={{ color: '#F9B331' }}>
              {milestones[0].subtitle}
            </span>
            <div className="font-montserrat text-xs md:text-sm font-medium leading-relaxed" style={{ color: '#3f3f46' }}>
              {milestones[0].description}
            </div>
          </div>

          {/* Row 1 (2015): Right */}
          <div className="absolute left-[calc(50%+100px)] top-[200px] -translate-y-1/2 w-[380px] text-left group">
            <span className="font-future text-4xl text-zinc-950 group-hover:text-7l-gold transition-colors duration-300 font-black block mb-1">
              2015
            </span>
            <div className="font-future text-sm font-bold uppercase tracking-wide mb-1" style={{ color: '#09090b' }}>
              {milestones[1].title}
            </div>
            <span className="font-montserrat text-[10px] font-black text-7l-gold tracking-[0.2em] uppercase block mb-2" style={{ color: '#F9B331' }}>
              {milestones[1].subtitle}
            </span>
            <div className="font-montserrat text-xs md:text-sm font-medium leading-relaxed" style={{ color: '#3f3f46' }}>
              {milestones[1].description}
            </div>
          </div>

          {/* Row 2 (2020): Left */}
          <div className="absolute right-[calc(50%+100px)] top-[380px] -translate-y-1/2 w-[380px] text-right group">
            <span className="font-future text-4xl text-zinc-950 group-hover:text-7l-gold transition-colors duration-300 font-black block mb-1">
              2020
            </span>
            <div className="font-future text-sm font-bold uppercase tracking-wide mb-1" style={{ color: '#09090b' }}>
              {milestones[2].title}
            </div>
            <span className="font-montserrat text-[10px] font-black text-7l-gold tracking-[0.2em] uppercase block mb-2" style={{ color: '#F9B331' }}>
              {milestones[2].subtitle}
            </span>
            <div className="font-montserrat text-xs md:text-sm font-medium leading-relaxed" style={{ color: '#3f3f46' }}>
              {milestones[2].description}
            </div>
          </div>

          {/* Row 3 (2024): Right */}
          <div className="absolute left-[calc(50%+100px)] top-[560px] -translate-y-1/2 w-[380px] text-left group">
            <span className="font-future text-4xl text-zinc-950 group-hover:text-7l-gold transition-colors duration-300 font-black block mb-1">
              2024
            </span>
            <div className="font-future text-sm font-bold uppercase tracking-wide mb-1" style={{ color: '#09090b' }}>
              {milestones[3].title}
            </div>
            <span className="font-montserrat text-[10px] font-black text-7l-gold tracking-[0.2em] uppercase block mb-2" style={{ color: '#F9B331' }}>
              {milestones[3].subtitle}
            </span>
            <div className="font-montserrat text-xs md:text-sm font-medium leading-relaxed" style={{ color: '#3f3f46' }}>
              {milestones[3].description}
            </div>
          </div>
        </div>

        {/* ================= MOBILE VIEW (Compact list with guide) ================= */}
        <div className="relative w-full md:hidden">
          {/* Vertical guide line */}
          <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-zinc-200" />
          
          <div className="space-y-12">
            {milestones.map((item, idx) => {
              return (
                <div key={idx} className="relative flex gap-6 pl-10 group">
                  {/* Concentric node dot on line for mobile */}
                  <div className="absolute left-[8px] top-1.5 w-[18px] h-[18px] rounded-full bg-7l-gold/15 flex items-center justify-center z-10">
                    <div className="w-[10px] h-[10px] rounded-full bg-7l-gold flex items-center justify-center" style={{ backgroundColor: '#F9B331' }}>
                      <div className="w-1 h-1 rounded-full bg-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <span className="font-future text-2xl text-zinc-950 group-hover:text-7l-gold transition-colors duration-300 font-black block mb-1">
                      {item.year}
                    </span>
                    <div className="font-future text-sm font-bold uppercase mb-1" style={{ color: '#09090b' }}>
                      {item.title}
                    </div>
                    <span className="font-montserrat text-[10px] font-black text-7l-gold tracking-[0.2em] uppercase block mb-2" style={{ color: '#F9B331' }}>
                      {item.subtitle}
                    </span>
                    <div className="font-montserrat text-xs font-medium leading-relaxed" style={{ color: '#3f3f46' }}>
                      {item.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

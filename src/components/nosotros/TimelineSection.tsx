'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function TimelineSection() {
  const t = useTranslations("NosotrosTimelineSection");
  const milestones = t.raw("milestones") as Milestone[];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Position settings matching precise coordinates
  const positions = [
    { left: '16px', top: '20px', side: 'left' },
    { left: '144px', top: '200px', side: 'right' },
    { left: '16px', top: '380px', side: 'left' },
    { left: '144px', top: '560px', side: 'right' },
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden border-t border-zinc-100">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-24">
          <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-3 block" style={{ color: '#F9B331' }}>
            {t("trayectoria")}
          </span>
          <h2 className="text-3xl md:text-4xl font-future leading-none uppercase" style={{ color: '#09090b' }}>
            {t.rich("evolucion", {
              br: () => <br />,
              gold: (chunks) => <span className="text-7l-gold" style={{ color: '#F9B331' }}>{chunks}</span>
            })}
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
            {positions.map((pos, idx) => {
              const isActive = hoveredIndex === idx;
              return (
                <div 
                  key={idx}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
                  style={{ left: pos.left, top: pos.top }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.5, type: 'spring', stiffness: 200 }}
                    animate={{ scale: isActive ? 1.35 : 1 }}
                    className="relative w-8 h-8 rounded-full bg-7l-gold/15 flex items-center justify-center shadow-sm transition-colors duration-300"
                    style={{ backgroundColor: isActive ? 'rgba(249, 179, 49, 0.25)' : 'rgba(249, 179, 49, 0.15)' }}
                  >
                    {/* Sonar Radar Pulse on Active Node */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full border border-7l-gold/40"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                        style={{ borderColor: 'rgba(249, 179, 49, 0.5)' }}
                      />
                    )}

                    {/* Central Gold Circle */}
                    <div 
                      className="w-4 h-4 rounded-full bg-7l-gold flex items-center justify-center transition-transform duration-300"
                      style={{ 
                        backgroundColor: '#F9B331',
                        transform: isActive ? 'scale(1.15)' : 'scale(1)'
                      }}
                    >
                      {/* Central White Target Dot */}
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Interactive Content columns aligned precisely with their respective node coordinates */}
          {milestones.map((item, idx) => {
            const pos = positions[idx];
            const isLeft = pos.side === 'left';
            const isActive = hoveredIndex === idx;
            const isAnyActive = hoveredIndex !== null;
            const isMuted = isAnyActive && !isActive;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="absolute -translate-y-1/2 w-[380px] cursor-pointer group z-20"
                style={{ 
                  left: isLeft ? undefined : 'calc(50% + 100px)',
                  right: isLeft ? 'calc(50% + 100px)' : undefined,
                  top: pos.top
                }}
                animate={{ 
                  x: isActive ? (isLeft ? 12 : -12) : 0,
                  opacity: isMuted ? 0.35 : 1
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              >
                {/* Year Badge */}
                <motion.span 
                  className="font-montserrat text-4xl font-black block mb-1 transition-colors duration-300"
                  animate={{ color: isActive ? '#F9B331' : '#09090b' }}
                >
                  {item.year}
                </motion.span>

                {/* Milestone Title */}
                <div 
                  className="font-montserrat text-sm font-black uppercase tracking-wider mb-1 transition-colors duration-300" 
                  style={{ color: isActive ? '#F9B331' : '#09090b' }}
                >
                  {item.title}
                </div>

                {/* Subtitle */}
                <motion.span 
                  className="font-montserrat text-[10px] font-black tracking-[0.2em] uppercase block mb-2 transition-transform duration-300"
                  animate={{ scale: isActive ? 1.02 : 1 }}
                  style={{ color: '#F9B331' }}
                >
                  {item.subtitle}
                </motion.span>

                {/* Description */}
                <div 
                  className="font-montserrat text-xs md:text-sm font-medium leading-relaxed transition-colors duration-300" 
                  style={{ color: isActive ? '#18181b' : '#3f3f46' }}
                >
                  {item.description}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= MOBILE VIEW (Compact list with interactive guide) ================= */}
        <div className="relative w-full md:hidden">
          {/* Vertical guide line */}
          <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-zinc-200" />
          
          <div className="space-y-12">
            {milestones.map((item, idx) => {
              const isActive = hoveredIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="relative flex gap-6 pl-10 group cursor-pointer"
                  onTouchStart={() => setHoveredIndex(idx)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Concentric node dot on line for mobile */}
                  <div className="absolute left-[8px] top-1.5 w-[18px] h-[18px] rounded-full bg-7l-gold/15 flex items-center justify-center z-10">
                    <div className="w-[10px] h-[10px] rounded-full bg-7l-gold flex items-center justify-center animate-pulse" style={{ backgroundColor: '#F9B331' }}>
                      <div className="w-1 h-1 rounded-full bg-white" />
                    </div>
                  </div>

                  <motion.div 
                    className="flex-1"
                    animate={{ x: isActive ? 5 : 0 }}
                  >
                    <span 
                      className="font-montserrat text-2xl font-black block mb-1 transition-colors duration-300"
                      style={{ color: isActive ? '#F9B331' : '#09090b' }}
                    >
                      {item.year}
                    </span>
                    <div 
                      className="font-montserrat text-sm font-black uppercase mb-1" 
                      style={{ color: '#09090b' }}
                    >
                      {item.title}
                    </div>
                    <span className="font-montserrat text-[10px] font-black tracking-[0.2em] uppercase block mb-2" style={{ color: '#F9B331' }}>
                      {item.subtitle}
                    </span>
                    <div className="font-montserrat text-xs font-medium leading-relaxed" style={{ color: '#3f3f46' }}>
                      {item.description}
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

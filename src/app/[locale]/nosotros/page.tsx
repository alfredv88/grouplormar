'use client';

import Image from 'next/image';
import { Target, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import ComplianceHSE from '@/components/nosotros/ComplianceHSE';
import TimelineSection from '@/components/nosotros/TimelineSection';
import { useTranslations } from 'next-intl';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' as const }
};

export default function NosotrosPage() {
  const t = useTranslations("NosotrosPage");
  const values = t.raw("valores") as { name: string; desc: string }[];

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
              {t("lormarCorporation")}
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-future text-white uppercase tracking-normal mb-4 leading-none"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {t.rich("autoridadIndustrial", {
              br: () => <br />,
              gold: (chunks) => <span className="text-7l-gold" style={{ color: '#F9B331' }}>{chunks}</span>
            })}
          </motion.h1>

          <motion.p 
            className="text-zinc-400 text-sm md:text-base font-montserrat font-medium max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            {t("heroDescripcion")}
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
            {t("identidad")}
          </span>
          <h2 className="text-5xl md:text-6xl font-future text-white leading-none uppercase">
            {t.rich("quienesSomos", {
              br: () => <br />,
              gold: (chunks) => <span className="text-7l-gold" style={{ color: '#F9B331' }}>{chunks}</span>
            })}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-medium max-w-lg leading-relaxed">
            {t("somosDescripcion")}
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
            {t("direccion")}
          </span>
          
          <div className="space-y-4">
            <h2 className="text-4xl font-future !text-black leading-none uppercase flex items-center gap-3">
              <Target size={32} className="!text-black" /> {t("mision")}
            </h2>
            <p className="text-lg md:text-xl font-montserrat !text-white leading-relaxed font-medium max-w-lg">
              {t("misionDescripcion")}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-future !text-black leading-none uppercase flex items-center gap-3">
              <Eye size={32} className="!text-black" /> {t("vision")}
            </h2>
            <p className="text-lg md:text-xl font-montserrat !text-white leading-relaxed font-medium max-w-lg">
              {t("visionDescripcion")}
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN 03: VALORES */}
      <section className="py-24 bg-black border-b border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div {...fadeInUp}>
            <span className="font-montserrat text-zinc-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
              {t("principios")}
            </span>
            <h2 className="text-4xl md:text-5xl font-future text-white mb-12 uppercase">
              {t.rich("nuestrosValores", {
                gold: (chunks) => <span className="text-7l-gold" style={{ color: '#F9B331' }}>{chunks}</span>
              })}
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

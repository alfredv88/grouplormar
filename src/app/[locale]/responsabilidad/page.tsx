'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' as const }
};

export default function ResponsabilidadPage() {
  const t = useTranslations("ResponsabilidadPage");
  const complianceItems = t.raw("complianceItems") as any[];

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="h-[60vh] flex flex-col justify-center relative bg-black border-b border-white/5 overflow-hidden">
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
            <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
              {t("lormarCorporation")}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-future text-white uppercase tracking-normal mb-4 leading-none"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {t.rich("responsabilidadCorporativa", {
              br: () => <br />,
              gold: (chunks) => <span className="text-7l-gold">{chunks}</span>
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

      {/* COMPLIANCE RÁPIDO */}
      <section className="py-20 bg-[#060606] border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div {...fadeInUp}>
            <span className="font-montserrat text-zinc-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
              {t("estatusLegal")}
            </span>
            <h2 className="text-4xl md:text-5xl font-future text-white mb-12 uppercase leading-none">
              {t.rich("complianceHSE", {
                gold: (chunks) => <span className="text-7l-gold">{chunks}</span>
              })}
            </h2>
          </motion.div>

          <motion.div
            className="divide-y divide-white/10 border-t border-b border-white/10"
            {...fadeInUp}
          >
            {complianceItems.map((item, idx) => (
              <div key={idx} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-7l-gold rounded-full shrink-0 animate-pulse" />
                    <span className="font-montserrat text-[10px] text-white tracking-[0.3em] font-black uppercase group-hover:text-7l-gold transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <div className="pl-[18px] flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-[14px] text-7l-gold font-black tracking-wider">
                      {item.number}
                    </span>
                    <span className="font-montserrat text-[9px] text-white/40 font-bold tracking-widest uppercase">
                      • {item.period}
                    </span>
                  </div>
                </div>
                <div className="flex items-center sm:justify-end shrink-0 pl-[18px] sm:pl-0">
                  <div className="flex items-center gap-3 px-4 py-2 border border-white/10 group-hover:border-7l-gold transition-all duration-500 bg-white/[0.01]">
                    <CheckCircle2 size={11} className="text-green-500" />
                    <span className="font-montserrat text-[8px] text-white font-black tracking-widest uppercase">{item.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DOSSIER - DESCARGA DEL BROCHURE */}
      <section id="dossier" className="py-28 bg-black relative overflow-hidden">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(249,179,49,0.08) 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }}
        />

        <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
              {t("documentacionOficial")}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-future text-white uppercase leading-none mb-6">
              {t.rich("dossierCorporativo", {
                gold: (chunks) => <span className="text-7l-gold">{chunks}</span>
              })}
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-montserrat font-medium max-w-xl mx-auto leading-relaxed">
              {t("dossierDesc")}
            </p>
          </motion.div>

          {/* CARD DE DESCARGA */}
          <motion.div
            className="relative border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Gold accent top */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-7l-gold to-transparent" />

            <div className="p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16">

              {/* Icono / Visual */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-28 h-36 border border-white/10 bg-white/[0.03] flex flex-col items-center justify-center relative group-hover:border-7l-gold/40 transition-all duration-500">
                  <FileDown size={36} className="text-7l-gold mb-2" />
                  <span className="font-montserrat text-[8px] text-white/50 font-black tracking-[0.3em] uppercase">PDF</span>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-7l-gold/30 group-hover:bg-7l-gold transition-colors duration-500" />
                </div>
                <span className="mt-3 font-mono text-[10px] text-zinc-500">~50 MB</span>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="space-y-1">
                  <h3 className="font-future text-2xl md:text-3xl text-white uppercase tracking-wider">
                    {t.rich("brochureLormar", {
                      gold: (chunks) => <span className="text-7l-gold">{chunks}</span>
                    })}
                  </h3>
                  <p className="font-montserrat text-[10px] text-zinc-500 font-black tracking-[0.3em] uppercase">
                    {t("brochureSub")}
                  </p>
                </div>

                <p className="font-montserrat text-sm text-zinc-400 leading-relaxed max-w-md">
                  {t("brochureInfo")}
                </p>

                <ul className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                  {(t.raw("tags") as string[]).map((tag) => (
                    <li key={tag} className="px-3 py-1 border border-white/10 font-montserrat text-[9px] text-zinc-400 font-bold tracking-widest uppercase">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Descarga */}
              <div className="shrink-0">
                <a
                  href="/brochure/BROCHURE.pdf"
                  download="Brochure-Grupo-Lormar.pdf"
                  className="inline-flex items-center gap-4 bg-7l-gold px-8 py-4 hover:bg-white transition-all duration-300 group/btn"
                >
                  <FileDown size={16} className="text-black" />
                  <span className="font-montserrat text-[10px] font-black text-black tracking-[0.3em] uppercase">
                    {t("descargar")}
                  </span>
                </a>
              </div>
            </div>

            {/* Gold accent bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-7l-gold/30 to-transparent group-hover:via-7l-gold transition-colors duration-700" />
          </motion.div>

          {/* Nota de contacto */}
          <motion.div
            className="mt-12 text-center"
            {...fadeInUp}
          >
            <p className="font-montserrat text-[11px] text-zinc-500 font-medium">
              {t("requiereDocumentacion")}{' '}
              <Link href="/contacto" className="text-7l-gold hover:text-white transition-colors inline-flex items-center gap-1">
                {t("contactenos")} <ArrowRight size={10} />
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslations } from "next-intl";

export default function TestimonialsCarousel() {
  const t = useTranslations("TestimonialsCarousel");
  const endorsements = t.raw("endorsements") as { quote: string; name: string; role: string; company: string }[];
  const [isPaused, setIsPaused] = useState(false);

  // Duplicamos el set de cartas para el scroll infinito suave
  const tickerCards = [...endorsements, ...endorsements, ...endorsements, ...endorsements];

  // Helper para obtener la inicial del nombre real sin prefijos profesionales
  const getInitial = (fullName: string) => {
    const cleanName = fullName.replace(/^(ING\.|ARQ\.|LIC\.|ENG\.|ARCH\.)\s+/, '');
    return cleanName.charAt(0) || 'L';
  };

  return (
    <section className="py-24 md:py-32 bg-[#F7F7F7] overflow-hidden border-t border-b border-[#0D0D0D]/5 relative">
      <div className="w-full relative z-20">

        {/* Header Corporativo Elegante (Estilo Sostenibilidad Unificado - Alineado a la Derecha) */}
        <div className="px-6 md:px-12 lg:px-20 max-w-4xl mb-20 flex flex-col gap-6 ml-auto items-end text-right">
          <span className="text-[10px] uppercase font-montserrat tracking-[0.4em] text-zinc-400 font-bold block">
            {t("respaldo")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-future !text-[#0D0D0D] uppercase leading-[0.9] tracking-normal flex flex-col items-end">
            <span>{t("referencias")}</span>
            <span className="text-7l-gold -mt-1">{t("comerciales")}</span>
          </h2>
          <p className="!text-zinc-500 text-[14px] md:text-[15px] leading-relaxed font-montserrat font-medium max-w-2xl mt-2 text-right">
            {t("descripcion")}
          </p>
        </div>

        {/* Infinite Ticker Container */}
        <div
          className="relative flex overflow-hidden group cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Faded edges with precise light grid matching (smooth, non-milky transition) */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-56 bg-gradient-to-r from-[#F7F7F7] via-[#F7F7F7]/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-56 bg-gradient-to-l from-[#F7F7F7] via-[#F7F7F7]/70 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-4 py-4 px-6 md:px-0"
            animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
          >
            {tickerCards.map((item, i) => (
              <div
                key={i}
                className="w-[280px] md:w-[420px] flex-shrink-0 bg-transparent py-6 px-10 flex flex-col transition-all duration-300 relative group/card"
              >
                {/* Elegant Faded Vertical Divider */}
                <div className="absolute right-0 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-zinc-200/80 to-transparent" />

                {/* Google-style Review Top Row: Refined Monogram & Metadata */}
                <div className="flex gap-4 items-center mb-6">
                  {/* Circular Initial Avatar - High Impact Solid Black & Gold Luxury Brand Fill */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-[14px] font-montserrat flex-shrink-0 bg-7l-black text-7l-gold border border-7l-gold/20 group-hover/card:border-7l-gold transition-colors duration-300">
                    {getInitial(item.name)}
                  </div>

                  {/* Author Name, Role */}
                  <div className="flex flex-col min-w-0">
                    <span className="text-[12px] font-black font-montserrat !text-7l-black tracking-wider uppercase truncate">
                      {item.name}
                    </span>
                    <span className="text-[10px] !text-zinc-400 font-bold font-montserrat truncate mt-0.5 uppercase tracking-wider">
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* Stars and Verification Capsule */}
                <div className="flex justify-between items-center mb-5 border-t border-zinc-100 pt-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, starI) => (
                      <Star key={starI} size={11} fill="var(--color-7l-gold)" className="text-7l-gold" />
                    ))}
                  </div>

                  {/* Elegant White & Zinc Company Badge - Sharp Industrial Cut */}
                  <div className="flex items-center bg-white text-zinc-700 px-3 py-1 rounded-none border-l-2 border-7l-gold border-r border-y border-7l-border-light shadow-[1px_1px_3px_rgba(0,0,0,0.02)]">
                    <span className="text-[9px] font-montserrat font-bold tracking-[0.12em] uppercase text-zinc-800">{item.company}</span>
                  </div>
                </div>

                {/* Testimonial Quote - Clean Google Style with Elegant Comma Graphic */}
                <div className="relative mt-2">
                  <span className="text-7l-gold/30 text-4xl font-serif leading-none absolute -top-4 -left-2.5 select-none">“</span>
                  <p className="!text-zinc-600 font-montserrat font-medium text-[13.5px] md:text-[14px] leading-relaxed tracking-normal pl-4">
                    {item.quote}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Elegant Architectural Separator Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-7l-gold/40 to-transparent flex items-center justify-center">
        <div className="w-2 h-2 rotate-45 bg-7l-gold shadow-[0_0_8px_rgba(242,169,0,0.8)]" />
      </div>

    </section>
  );
}

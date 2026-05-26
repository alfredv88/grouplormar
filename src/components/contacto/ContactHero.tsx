"use client";

import React from "react";
import { useTranslations } from "next-intl";

const ContactHero = () => {
    const t = useTranslations("ContactoPage");

    return (
        <section className="h-[60vh] flex flex-col justify-center relative bg-black border-b border-white/5 overflow-hidden">
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
            
            {/* Overlay degradado ambiental */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-7l-gold/5 pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
              <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
                {t("centroOperaciones")}
              </span>
              <h1 className="text-5xl md:text-7xl font-future text-white uppercase tracking-normal mb-6 leading-none">
                {t.rich("asesoriaDirecta", {
                  br: () => <br />,
                  gold: (chunks) => <span className="text-7l-gold">{chunks}</span>
                })}
              </h1>
              <p className="text-zinc-400 text-sm md:text-base font-montserrat font-medium max-w-2xl leading-relaxed">
                {t.rich("heroDescripcion", {
                  white: (chunks) => <span className="text-white font-medium italic">{chunks}</span>
                })}
              </p>
            </div>
        </section>
    );
};

export default ContactHero;

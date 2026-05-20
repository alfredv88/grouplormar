"use client";

import React from "react";

const ContactHero = () => {
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
                CENTRO DE OPERACIONES Y CONTACTO
              </span>
              <h1 className="text-5xl md:text-7xl font-future text-white uppercase tracking-normal mb-6 leading-none">
                <span className="text-7l-gold">ASESORÍA</span> <br />DIRECTA
              </h1>
              <p className="text-zinc-400 text-sm md:text-base font-montserrat font-medium max-w-2xl leading-relaxed">
                Inicia el proceso de cotización para tu proyecto industrial. Nuestro equipo de procura e ingeniería evaluará tu requerimiento de <span className="text-white font-medium italic">inmediato.</span>
              </p>
            </div>
        </section>
    );
};

export default ContactHero;

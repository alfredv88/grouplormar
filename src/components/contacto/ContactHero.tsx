"use client";

import React from "react";

const ContactHero = () => {
    return (
        <section className="px-10 md:px-20 lg:px-32 py-24 border-b border-white/5 relative">
            <div className="absolute inset-0 bg-industrial-grid opacity-10 pointer-events-none"></div>

            <div className="max-w-[1800px] mx-auto space-y-10 relative z-10">
                <div className="inline-flex items-center gap-6">
                    <span className="text-7l-gold text-[10px] font-black uppercase tracking-[0.4em] font-montserrat">
                        CENTRO DE CONTACTO
                    </span>
                    <div className="lormar-line w-24"></div>
                </div>

                <h1 className="text-6xl md:text-[110px] font-future uppercase leading-[0.85] tracking-normal text-white">
                    ASESORÍA <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #F9B331" }}>DIRECTA</span>
                </h1>

                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-montserrat font-light border-l-2 border-7l-gold pl-10 max-w-5xl">
                    Inicia el proceso de cotización para tu proyecto industrial. Nuestro equipo de procura e ingeniería evaluará tu requerimiento de inmediato.
                </p>
            </div>
        </section>
    );
};

export default ContactHero;

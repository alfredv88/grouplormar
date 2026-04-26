"use client";

import React from "react";

export default function LogoStrip() {
  const clients = ["SIDOR", "CVG VENALUM", "PDVSA", "FERROMINERA", "TGI"];

  return (
    <section className="relative z-10 py-8 border-b border-7l-white/5 bg-7l-black">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 overflow-hidden">
        <p className="text-[10px] font-syne font-black uppercase tracking-[0.3em] text-center mb-16 text-7l-gold">
          ALIADOS ESTRATÉGICOS E INSTITUCIONES
        </p>
        <div className="flex flex-wrap justify-around items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, i) => (
            <div
              key={i}
              className="font-future text-white text-3xl tracking-widest hover:text-7l-gold transition-colors duration-300"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

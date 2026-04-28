"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LogoStrip() {
  const clients = [
    "SIDOR", "CVG VENALUM", "PDVSA", "FERROMINERA", "TGI", 
    "PETROMONAGAS", "HYUNDAI", "STX", "SINOHYDRO", "HALLIBURTON"
  ];

  return (
    <section className="relative z-10 py-24 bg-transparent overflow-hidden">
      
      <div className="w-full max-w-[1800px] mx-auto overflow-hidden">
        <p className="text-[10px] font-syncopate font-bold uppercase tracking-[0.6em] text-center mb-20 text-white/40">
          SOCIOS <span className="text-7l-gold/80">ESTRATÉGICOS</span>
        </p>
        
        <div className="relative flex overflow-hidden group">
          {/* Gradientes de desvanecimiento lateral para limpieza visual - Sincronizados con Negro Puro */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 25,
              repeatType: "loop"
            }}
            className="flex whitespace-nowrap gap-24 items-center px-12"
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="font-syne text-2xl md:text-3xl font-black text-white/50 hover:text-white transition-all cursor-default tracking-tighter"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

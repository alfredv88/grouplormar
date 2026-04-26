"use client";

import React from "react";
import { motion } from "framer-motion";
import { BROCHURE_DATA } from "@/constants/brochureData";

export default function AboutSection() {
  return (
    <section id="nosotros" className="relative bg-7l-black py-40 overflow-hidden">
      
      {/* BACKGROUND TEXTURE [Subtle Depth] */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute inset-0 bg-7l-dark-texture opacity-30 grayscale"></div>
      </div>

      <div className="container mx-auto px-8 md:px-24 lg:px-40 relative z-10">
        
        {/* TOP SEQUENCE: The Profile */}
        <div className="max-w-7xl border-l border-white/10 pl-12 md:pl-20 py-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="space-y-12"
          >
            <span className="font-syne text-7l-gold tracking-[1em] text-[10px] font-bold uppercase block">
              IDENTIDAD // 01
            </span>
            
            <h2 className="text-[8vw] lg:text-[120px] font-future text-white leading-[0.8] tracking-tighter uppercase">
              SOLIDEZ EN EL <br />
              <span className="text-7l-gold/20">TERRENO</span>
            </h2>

            <div className="max-w-4xl">
              <p className="text-2xl md:text-3xl font-montserrat font-light text-white/50 leading-relaxed italic">
                "{BROCHURE_DATA.identity.profile}"
              </p>
            </div>
          </motion.div>
        </div>

        {/* MIDDLE SEQUENCE: Mission & Vision as Pillars */}
        <div className="grid lg:grid-cols-2 gap-32 py-40">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="space-y-10"
           >
              <div className="h-[1px] w-20 bg-7l-gold"></div>
              <h3 className="font-syne text-white tracking-[0.6em] text-[10px] font-extrabold uppercase">PROPÓSITO CENTRAL // MISIÓN</h3>
              <p className="text-2xl font-montserrat text-white/70 leading-relaxed font-medium">
                {BROCHURE_DATA.identity.mission}
              </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="space-y-10"
           >
              <div className="h-[1px] w-20 bg-white/20"></div>
              <h3 className="font-syne text-white tracking-[0.6em] text-[10px] font-extrabold uppercase">VISIÓN ESTRATÉGICA // 2026</h3>
              <p className="text-3xl font-montserrat text-white/60 leading-snug font-medium italic">
                "{BROCHURE_DATA.identity.vision}"
              </p>
           </motion.div>
        </div>

        {/* BOTTOM SEQUENCE: The Values as a Kinetic List */}
        <div className="pt-20 border-t border-white/5">
           <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
              {BROCHURE_DATA.values.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-6"
                >
                   <span className="text-7l-gold font-syne text-[8px] tracking-[0.5em] font-bold">0{idx + 1}</span>
                   <h4 className="font-future text-white text-xl tracking-tighter uppercase leading-none break-words">
                      {val.title}
                   </h4>
                   <p className="text-[10px] text-white/30 font-syne tracking-widest uppercase">
                      EXCELENCIA OPERACIONAL
                   </p>
                </motion.div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}

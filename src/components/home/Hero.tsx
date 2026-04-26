"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mouse } from "lucide-react";
import { BROCHURE_DATA } from "@/constants/brochureData";

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const heroVideos = [
    "/videos/lormar 1.webm",
    "/videos/lormar 2.webm",
    "/videos/lormar 3.webm",
    "/videos/lormar 4.webm",
    "/videos/lormar 5.webm"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [heroVideos.length]);

  return (
    <section className="relative h-screen bg-7l-black flex items-center overflow-hidden">
      
      {/* FILM GRAIN [Subtle Cinematic Texture] */}
      <div className="absolute inset-0 z-[15] pointer-events-none opacity-[0.03] contrast-150 brightness-100 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* CINEMATIC FULL-SCREEN BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover brightness-[0.35]"
            >
              <source src={heroVideos[currentVideo]} type="video/mp4" />
            </video>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-7l-black via-transparent to-7l-black/40 z-10"></div>
      </div>

      {/* REFINED ARCHITECTURAL CONTENT */}
      <div className="relative z-20 w-full max-w-[1800px] mx-auto px-10 md:px-24 lg:px-44">
        
        <div className="max-w-5xl space-y-16 lg:space-y-24">
          
          {/* HEADER SEQUENCE */}
          <div className="space-y-10">
            <div className="flex items-center gap-6 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="h-[1px] bg-7l-gold/40"
              ></motion.div>
              <motion.h3 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="font-syne text-7l-gold tracking-[0.8em] text-[10px] md:text-xs font-extrabold uppercase"
              >
                CAPACIDAD INDUSTRIAL // ACTIVOS PROPIOS
              </motion.h3>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] lg:text-[105px] font-future leading-[0.82] tracking-tighter uppercase"
            >
              <span className="text-white opacity-90 block">SERVICIOS Y</span>
              <span className="text-7l-gold block">CONSTRUCCIONES</span>
            </motion.h1>
          </div>

          {/* DESCRIPTION & ACTION SEQUENCE */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="lg:col-span-8 space-y-12"
            >
              <p className="text-xl md:text-2xl text-white/50 font-montserrat font-light leading-relaxed tracking-wide max-w-3xl border-l-[1px] border-white/10 pl-10">
                Ejecución técnica en áreas civiles, mecánica, eléctrica e instrumentación. 
                Garantizamos <span className="text-white font-medium italic underline decoration-7l-gold/30 underline-offset-8 uppercase tracking-tight">autonomía operativa total</span> mediante flota propia y profesionales certificados.
              </p>

              <div className="pl-10">
                <Link href="/servicios" className="group flex items-center gap-6 text-white font-syne font-extrabold text-[9px] tracking-[0.5em] transition-all duration-500">
                  <span className="group-hover:text-7l-gold transition-colors italic">EXPLORAR CAPACIDADES</span>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-7l-gold group-hover:bg-7l-gold/5 transition-all duration-700">
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR [Minimalist] */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 hidden md:flex"
      >
        <span className="font-syne text-[8px] tracking-[0.6em] text-white/20 uppercase">SCROLL FOR NARRATIVE</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-7l-gold/50 to-transparent">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/3 bg-7l-gold"
          ></motion.div>
        </div>
      </motion.div>

      {/* REFINED FOOTER MARKINGS: INDUSTRIAL LABEL */}
      <div className="absolute bottom-12 left-10 md:left-24 lg:left-44 flex items-center gap-8 hidden lg:flex">
         <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-7l-gold opacity-60"></div>
            <span className="font-syne text-[8px] tracking-[0.8em] text-white/40 uppercase">CORPORATE IDENTITY</span>
         </div>
         <div className="h-[1px] w-8 bg-white/10"></div>
         <span className="font-syne text-[8px] tracking-[0.4em] text-white/20 uppercase">RIF: J-30657965-6</span>
      </div>
      
      {/* VERTICAL SCALE INDICATOR */}
      <div className="absolute top-1/2 right-20 -translate-y-1/2 flex flex-col items-center gap-16 opacity-10 hidden xl:flex">
         <div className="h-48 w-[1px] bg-white/50"></div>
         <span className="font-syne text-[9px] tracking-[1.2em] text-white [writing-mode:vertical-rl] rotate-180 uppercase">EXCELLENCE</span>
         <div className="h-48 w-[1px] bg-white/50"></div>
      </div>

    </section>
  );
}

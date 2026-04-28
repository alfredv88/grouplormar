"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const containerRef = useRef(null);
  
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

  // Luxury Easing for B2B Premium feel
  const transition = { duration: 1.4, ease: [0.23, 1, 0.32, 1] as const };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen bg-black flex items-center overflow-hidden"
    >
      {/* 1. CINEMATIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover brightness-[0.9] contrast-[1.05]"
            >
              <source src={heroVideos[currentVideo]} type="video/mp4" />
            </video>
            
            {/* Ambient Occlusion Glow - Subtle light focus */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-7l-gold/10 via-transparent to-transparent blur-[120px] pointer-events-none opacity-50" />
          </motion.div>
        </AnimatePresence>
        
        {/* Cinematic Gradient Overlays for readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10" />
      </div>

      {/* 2. REFINED CONTENT LAYER */}
      <div className="relative z-20 w-full max-w-[1800px] mx-auto px-10 md:px-24 lg:px-44">
        
        <div className="max-w-5xl space-y-10 lg:space-y-14">
          
          {/* Overline with Precision Mark */}
          <div className="flex items-center gap-5 overflow-hidden">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ ...transition, delay: 0.2 }}
              className="w-12 h-[1px] bg-7l-gold/50 origin-left"
            />
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...transition, delay: 0.4 }}
              className="font-syncopate text-white/60 tracking-[0.6em] text-[9px] font-bold uppercase"
            >
              Infraestructura & Excelencia Operativa
            </motion.span>
          </div>

          {/* Kinetic Title Reveal - Emerging from mask */}
          <div className="relative">
            <h1 
              className="font-future leading-[0.82] tracking-tighter uppercase overflow-hidden"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 92px)' }}
            >
              <motion.span 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ ...transition, delay: 0.6 }}
                className="block text-white opacity-95"
              >
                SERVICIOS Y
              </motion.span>
              <motion.span 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ ...transition, delay: 0.8 }}
                className="block text-7l-gold"
              >
                CONSTRUCCIONES
              </motion.span>
            </h1>
          </div>

          {/* Elegant Description & Action Sequence */}
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-12">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...transition, delay: 1.2 }}
                className="text-base md:text-lg text-white/70 font-montserrat font-light leading-relaxed tracking-wide max-w-2xl border-l-[1px] border-white/10 pl-10"
              >
                Ejecución técnica de alto nivel en áreas civiles, mecánica e instrumentación. 
                Garantizamos <span className="text-white font-medium italic underline decoration-7l-gold/30 underline-offset-8 uppercase tracking-[0.2em] ml-2">autonomía total</span> con flota propia.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 1.4 }}
                className="pl-10"
              >
                <Link 
                  href="/servicios" 
                  className="group relative inline-flex items-center gap-10 px-12 py-6 overflow-hidden bg-7l-gold transition-all duration-500 hover:shadow-[0_0_30px_rgba(242,169,0,0.3)]"
                >
                  {/* Sheen Effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[sheen_1.5s_infinite]" />
                  
                  <span className="relative z-10 font-syncopate text-[10px] font-black tracking-[0.5em] text-7l-black">
                    EXPLORAR CAPACIDADES
                  </span>
                  
                  <div className="relative z-10 w-8 h-[1px] bg-7l-black/30 overflow-hidden">
                    <motion.div 
                      animate={{ x: [-32, 32] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full bg-7l-black"
                    />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. PRECISION HUD ELEMENTS (Minimalist & Formal) */}
      
      {/* Scroll Indicator - Liquid Motion */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 hidden md:flex"
      >
        <span className="font-syncopate text-[7px] tracking-[0.4em] text-white/30 uppercase mb-2">Descubra</span>
        <div className="w-[1px] h-16 bg-white/5 overflow-hidden">
          <motion.div 
            animate={{ y: [-64, 64] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-gradient-to-b from-transparent via-7l-gold/40 to-transparent"
          />
        </div>
      </motion.div>



      {/* Atmospheric Bottom Bridge - Extreme smooth transition to Pure Black */}
      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black via-black/60 to-transparent z-20" />

    </section>
  );
}

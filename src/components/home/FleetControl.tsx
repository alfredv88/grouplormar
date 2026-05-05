"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, Cpu } from "lucide-react";

export default function FleetControl() {
  const monitors = [
    { id: "02", src: "/videos/patio2.MOV", label: "LOGÍSTICA PESADA", status: "READY" },
    { id: "03", src: "/videos/patio3.MOV", label: "EQUIPOS IZAMIENTO", status: "MAINTENANCE" },
    { id: "04", src: "/videos/patio4.MOV", label: "MOVIMIENTO TIERRA", status: "OPERATIONAL" },
  ];

  return (
    <section className="py-24 px-6 bg-7l-black border-t border-white/5">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header con estilo de Consola */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-7l-gold/20 pb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-7l-gold">
              <Activity size={16} className="animate-pulse" />
              <span className="font-montserrat text-[10px] font-bold tracking-[0.4em] uppercase">
                SISTEMA DE MONITOREO DE ACTIVOS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white uppercase leading-none">
              CENTRO DE <span className="text-7l-gold">CONTROL</span> LORMAR
            </h2>
          </div>
          <p className="max-w-md text-7l-gray text-xs font-montserrat uppercase tracking-widest leading-relaxed text-right">
            Visualización técnica de infraestructura propia y capacidad de respuesta inmediata en sitio.
          </p>
        </div>

        {/* Grid de Monitores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {monitors.map((mon, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="group relative bg-[#111] border border-white/10 p-2 overflow-hidden"
            >
              {/* UI Overlay Decorativo */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                <span className="font-montserrat text-[8px] text-white/60 tracking-tighter">
                  CAM_{mon.id} // SECURE_LINK
                </span>
              </div>

              <div className="absolute bottom-4 right-4 z-20">
                <span className="font-montserrat text-[8px] text-7l-gold px-2 py-1 border border-7l-gold/30 bg-7l-black/80">
                  STATUS: {mon.status}
                </span>
              </div>

              {/* Video Container */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-100"
                >
                  <source src={mon.src} type="video/quicktime" />
                  <source src={mon.src.replace(".MOV", ".mp4")} type="video/mp4" />
                </video>

                {/* Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
              </div>

              {/* Label Bottom */}
              <div className="mt-4 flex justify-between items-center px-2 pb-2">
                <h4 className="font-montserrat text-[10px] text-white font-bold tracking-widest">{mon.label}</h4>
                <div className="flex gap-1">
                  <div className="w-4 h-[2px] bg-7l-gold/40"></div>
                  <div className="w-1 h-[2px] bg-7l-gold"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer de Datos Técnicos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-white/5">
           <div className="space-y-2">
             <span className="text-[10px] font-montserrat text-7l-gray block">UBICACIÓN</span>
             <p className="text-white font-montserrat font-bold text-sm">PATIO CENTRAL - ANZOÁTEGUI</p>
           </div>
           <div className="space-y-2">
             <span className="text-[10px] font-montserrat text-7l-gray block">DISPONIBILIDAD</span>
             <p className="text-7l-gold font-montserrat font-bold text-sm">IMMEDIATE DEPLOYMENT</p>
           </div>
           <div className="space-y-2">
             <span className="text-[10px] font-montserrat text-7l-gray block">CERTIFICACIÓN</span>
             <p className="text-white font-montserrat font-bold text-sm">ISO 9001 / OSHAS 18001</p>
           </div>
           <div className="flex items-center justify-end gap-4">
              <Cpu size={20} className="text-7l-gold/40" />
              <ShieldCheck size={20} className="text-7l-gold/40" />
           </div>
        </div>

      </div>
    </section>
  );
}

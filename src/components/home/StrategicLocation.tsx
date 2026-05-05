"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, Globe, Play } from "lucide-react";
import { BROCHURE_DATA } from "@/constants/brochureData";

export default function StrategicLocation() {
  const hubs = [
    {
      id: "ADMIN",
      label: "SEDE ADMINISTRATIVA",
      location: "Lechería, Anzoátegui",
      address: BROCHURE_DATA.contact?.admin || "AV JORGE RODRIGUEZ CC MT NIVEL PB LOCAL 05",
      type: "GESTIÓN Y NEGOCIOS",
      coords: "10.1878° N, 64.6917° W"
    },
    {
       id: "OPS",
       label: "CENTRO DE OPERACIONES",
       location: "Barcelona, Anzoátegui",
       address: "SECTOR PALOTAL CALLE RICAURTE (ÁREA RACDA)",
       type: "CONTROL AMBIENTAL Y RESIDUOS",
       coords: "10.1347° N, 64.7122° W"
    },
    {
      id: "BASE",
      label: "PATIO CENTRAL Y TALLERES",
      location: "Barcelona, Anzoátegui",
      address: BROCHURE_DATA.contact?.base || "AUTOPISTA RÓMULO BETANCOURT, SECTOR LOS POTOCOS",
      type: "FLOTA Y LOGÍSTICA PESADA",
      coords: "10.1121° N, 64.7001° W"
    }
  ];

  return (
    <section className="py-24 bg-[#080808] border-b border-white/5 relative overflow-hidden" id="location">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* CENTERED HEADER (COMPACTED) */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="font-montserrat text-7l-gold text-[7px] font-bold tracking-[0.5em] uppercase block mb-6">
            Red Industrial Global
          </span>
          <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white uppercase tracking-tighter leading-[0.9]">
            PRESENCIA <span className="text-7l-gold">ESTRATÉGICA</span>
          </h2>
          <div className="w-12 h-[2px] bg-7l-gold mx-auto mt-8" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: HUB LIST (REFINED STYLE) */}
          <div className="lg:col-span-5">
            <div className="divide-y divide-white/5">
              {hubs.map((hub) => (
                <motion.div
                  key={hub.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="py-8 first:pt-0 group transition-all duration-700"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 bg-7l-gold rounded-full" />
                         <span className="font-montserrat text-[8px] text-zinc-400 tracking-[0.5em] font-bold uppercase transition-colors group-hover:text-7l-gold">
                            {hub.label}
                         </span>
                      </div>
                      
                      <div className="space-y-1">
                        <span className="font-montserrat font-black text-lg md:text-xl text-white tracking-[0.2em] group-hover:text-7l-gold transition-colors block leading-tight uppercase">
                          {hub.location}
                        </span>
                        <div className="flex items-start gap-3 pt-3">
                           <MapPin size={12} className="text-white/20 mt-1 shrink-0" />
                           <p className="text-[11px] text-white font-montserrat leading-relaxed max-w-sm font-medium">
                             {hub.address}
                           </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center text-[7px] font-montserrat text-white/10 tracking-[0.5em] uppercase">
               <span>Red Logística Central Anzoátegui</span>
               <span>100% Propiedad de Activos</span>
            </div>
          </div>

          {/* RIGHT COLUMN: VIDEO & DESCRIPTION */}
          <div className="lg:col-span-7 space-y-10">
            <div className="relative aspect-video bg-[#111] overflow-hidden border border-white/10 group shadow-2xl">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000"
              >
                <source src="/videos/lormar 5.webm" type="video/webm" />
              </video>
              
              <div className="absolute top-4 left-4">
                 <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 border border-white/10">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                     <span className="font-montserrat text-[6px] text-white tracking-[0.2em] uppercase font-bold">INSTALACIONES_VIVO</span>
                 </div>
              </div>

               <div className="absolute inset-0 border-[15px] border-black/20 pointer-events-none" />
            </div>

            <div className="space-y-4">
              <h3 className="font-montserrat font-black text-xl text-white uppercase tracking-tight">INFRAESTRUCTURA PROPIA</h3>
              <p className="font-montserrat text-[13px] text-white leading-relaxed max-w-xl font-medium">
                Operamos desde activos integrales en el corazón industrial de Anzoátegui. Cada sede está equipada con tecnología de punta y personal certificado, garantizando la continuidad técnica y administrativa de todos nuestros proyectos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

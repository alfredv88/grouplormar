"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Layers, PenTool as Tool, Truck, Anchor } from "lucide-react";

const projectData = [
  { 
    title: "PLANTA DE TRITURACIÓN — BOLÍVAR", 
    client: "CORPOELEC / SECTOR MINERO", 
    year: "2024", 
    type: "MONTAJE INDUSTRIAL", 
    desc: "Ingeniería de detalle, montaje mecánico completo y automatización de procesos para planta de procesamiento de agregados.", 
    image: "/images/hero-excavator.webp",
    id: "PRJ-24-001"
  },
  { 
    title: "DRENAJES SECTOR LOS POTOCOS", 
    client: "GOBERNACIÓN DE ANZOÁTEGUI", 
    year: "2023", 
    type: "VIALIDAD & DRENAJES", 
    desc: "Movimiento de tierra crítico, canalización de drenajes industriales y estabilización de suelos para infraestructura vial pesada.", 
    image: "/images/hero-excavator.webp",
    id: "PRJ-23-012"
  },
  { 
    title: "MANTENIMIENTO MAYOR PLANTA PDVSA", 
    client: "PETRÓLEOS DE VENEZUELA S.A.", 
    year: "2024", 
    type: "SERVICIOS A POZOS", 
    desc: "Mantenimiento integral de equipos rotativos, paradas de planta programadas y certificación de sistemas de seguridad en yacimiento.", 
    image: "/images/hero-excavator.webp",
    id: "PRJ-24-005"
  },
  { 
    title: "SUBESTACIÓN ELÉCTRICA INDUSTRIAL", 
    client: "SECTOR AUTOMOTRIZ S.A.", 
    year: "2023", 
    type: "ELECTROMECÁNICA", 
    desc: "Instalación de tableros de alta tensión, sistemas de control SCADA y cableado de potencia para expansión de línea de ensamblaje.", 
    image: "/images/hero-excavator.webp",
    id: "PRJ-23-009"
  }
];

const machineryData = [
  { 
    title: "GRÚAS TELESCÓPICAS", 
    capacity: "15 - 100 TON", 
    status: "DISPONIBLE", 
    type: "IZAMIENTO CRÍTICO", 
    desc: "Flota de grúas certificadas para izajes de alta precisión y montajes estructurales pesados.", 
    image: "/images/hero-night.png",
    id: "MAC-IZ-302"
  },
  { 
    title: "EXCAVADORAS HIDRÁULICAS", 
    capacity: "ALTO RENDIMIENTO", 
    status: "EN OPERACIÓN", 
    type: "MOVIMIENTO DE TIERRA", 
    desc: "Equipos de picas mecánicas para excavaciones profundas y preparación de locaciones en terrenos difíciles.", 
    image: "/images/hero-excavator.webp",
    id: "MAC-MT-504"
  },
  { 
    title: "EQUIPOS FLUSH-BY / CABILLEROS", 
    capacity: "350 HP", 
    status: "MANTENIMIENTO", 
    type: "SERVICIOS A POZOS", 
    desc: "Unidades especializadas para intervención rápida en pozos petroleros y reacondicionamiento de sistemas de bombeo.", 
    image: "/images/hero-night.png",
    id: "MAC-SP-101"
  },
  { 
    title: "CHUTOS CON LOWBOY", 
    capacity: "60 - 140 TON", 
    status: "DISPONIBLE", 
    type: "TRANSPORTE PESADO", 
    desc: "Plataformas de carga sobredimensionada para movilización nacional de maquinaria y componentes de planta.", 
    image: "/images/hero-excavator.webp",
    id: "MAC-TR-808"
  }
];

const ProjectGrid = () => {
  const [activeTab, setActiveTab] = useState("proyectos");

  return (
    <section className="py-20 px-10 md:px-20 lg:px-32 bg-7l-black relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Navigation Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12 border-b border-white/5 pb-12">
            <div className="flex gap-12">
                {["proyectos", "maquinaria"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative pb-4 text-[10px] font-syncopate font-black uppercase tracking-[0.5em] transition-all ${
                            activeTab === tab ? "text-7l-gold" : "text-white/20 hover:text-white/60"
                        }`}
                    >
                        {tab === "proyectos" ? "PROYECTOS EJECUTADOS" : "FLOTA DE MAQUINARIA"}
                        {activeTab === tab && (
                            <motion.div 
                                layoutId="activeTabPort"
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-7l-gold"
                            />
                        )}
                    </button>
                ))}
            </div>

            <div className="hidden xl:flex items-center gap-6 text-[9px] font-syncopate text-white/20 uppercase tracking-widest">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-7l-gold"></div> DATOS CERTIFICADOS</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div> ACTUALIZACIÓN 2024</span>
            </div>
        </div>

        <AnimatePresence mode="wait">
            <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            >
                {(activeTab === "proyectos" ? projectData : machineryData).map((p, i) => (
                    <motion.article 
                        key={i}
                        className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden flex flex-col transition-all duration-700 hover:border-7l-gold/30"
                    >
                        {/* Technical Indicator */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-7l-gold/0 via-7l-gold/30 to-7l-gold/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        {/* Viewfinder Image Wrapper */}
                        <div className="w-full aspect-[16/10] relative overflow-hidden">
                            <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                className="object-cover transition-all duration-1000 ease-out grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
                            
                            <div className="absolute top-6 left-6 z-20">
                                <div className="bg-7l-gold/10 backdrop-blur-md border border-7l-gold/20 text-7l-gold text-[8px] px-3 py-1 font-syncopate font-bold uppercase tracking-widest">
                                    REF: {p.id}
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-10 md:p-12 space-y-8 flex-1 flex flex-col">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.4em] text-7l-gold/60 font-syncopate">
                                    {activeTab === "proyectos" ? <Layers size={10} className="text-7l-gold" /> : <Tool size={10} className="text-7l-gold" />}
                                    {p.type}
                                </div>
                                
                                <h3 className="text-2xl md:text-3xl font-syne font-black uppercase leading-tight tracking-tight text-white group-hover:text-7l-gold transition-colors">
                                    {p.title}
                                </h3>
                            </div>

                            <p className="text-[13px] text-white/50 font-montserrat leading-relaxed font-light border-l-[1px] border-white/10 pl-6 group-hover:border-7l-gold/50 transition-all">
                                {p.desc}
                            </p>

                            <div className="pt-8 mt-auto flex items-center gap-10 border-t border-white/5">
                                {activeTab === "proyectos" ? (
                                    <>
                                        <div className="flex items-center gap-3">
                                            <MapPin size={12} className="text-white/20" />
                                            <span className="text-[10px] font-syncopate uppercase text-white/40 tracking-widest">{(p as any).client}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Calendar size={12} className="text-white/20" />
                                            <span className="text-[10px] font-syncopate uppercase text-white/40 tracking-widest">{(p as any).year}</span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-3">
                                            <Anchor size={12} className="text-white/20" />
                                            <span className="text-[10px] font-syncopate uppercase text-white/40 tracking-widest">{(p as any).capacity}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-7l-gold animate-pulse"></div>
                                            <span className="text-[10px] font-syncopate uppercase text-7l-gold tracking-widest">{(p as any).status}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </AnimatePresence>

        {/* Cta */}
        <div className="mt-20 flex flex-col items-center gap-8">
            <div className="w-px h-20 bg-gradient-to-b from-7l-gold/50 to-transparent"></div>
            <button className="px-12 py-5 border border-white/10 text-[10px] font-syncopate font-black uppercase tracking-[0.5em] text-white/60 hover:bg-7l-gold hover:text-7l-black transition-all hover:border-7l-gold">
                {activeTab === "proyectos" ? "Explorar histórico completo" : "Solicitar cotización de alquiler"}
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;

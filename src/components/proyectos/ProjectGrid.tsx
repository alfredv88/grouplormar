"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Layers, PenTool as Tool, Truck, Anchor } from "lucide-react";

interface CardItem {
  title: string;
  type: string;
  desc: string;
  image: string;
  id: string;
  items?: string[];
  client?: string;
  year?: string;
  capacity?: string;
  status?: string;
}

const projectData: CardItem[] = [
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

const machineryData: CardItem[] = [
  { 
    title: "EQUIPOS DE IZAMIENTO", 
    capacity: "6 - 100 TON", 
    status: "DISPONIBLE", 
    type: "IZAMIENTO", 
    desc: "Grúas telescópicas, brazos hidráulicos y montacargas de alta capacidad certificados para maniobras de izaje crítico.", 
    image: "/images/hero-night.png",
    id: "MAC-IZ-001",
    items: [
      "Grúa Telescópica (15, 45, 60, 75 y 100 Ton)",
      "Brazo Hidráulico (6, 15, 20 y 25 Ton)",
      "Montacarga (6, 12, 15 y 25 Ton)"
    ]
  },
  { 
    title: "EQUIPOS DE PALA MECÁNICA", 
    capacity: "ALTO RENDIMIENTO", 
    status: "DISPONIBLE", 
    type: "EXCAVACIÓN", 
    desc: "Equipos de pala pesada para excavaciones profundas y preparación de locaciones operativas en yacimiento.", 
    image: "/images/hero-excavator.webp",
    id: "MAC-PM-002",
    items: [
      "Cargador Frontal",
      "Excavadora Hidráulica",
      "Retroexcavadora",
      "Minishower"
    ]
  },
  { 
    title: "SERVICIOS A POZO", 
    capacity: "HASTA 350 HP", 
    status: "EN OPERACIÓN", 
    type: "SERVICIOS A POZOS", 
    desc: "Unidades especializadas en intervención de yacimientos y reacondicionamiento técnico de pozos.", 
    image: "/images/hero-night.png",
    id: "MAC-SP-003",
    items: [
      "Cabillero de 350 HP",
      "Camión Hot Oil",
      "Equipos de Well Testing (Pruebas a Pozos)",
      "Equipo Flush-By"
    ]
  },
  { 
    title: "MOVIMIENTO DE TIERRA", 
    capacity: "PESADA & VIALIDAD", 
    status: "DISPONIBLE", 
    type: "VIALIDAD", 
    desc: "Flota pesada para conformación, desmonte, nivelación y preparación estructural de suelos en campo.", 
    image: "/images/hero-excavator.webp",
    id: "MAC-MT-004",
    items: [
      "Tractores de Oruga",
      "Mototraíllas",
      "Motoniveladoras",
      "Vibrocompactadores / Compactador Pata de Cabra"
    ]
  },
  { 
    title: "TRANSPORTE Y LOGÍSTICA", 
    capacity: "60 - 140 TON", 
    status: "DISPONIBLE", 
    type: "MOVILIZACIÓN", 
    desc: "Soporte logístico pesado para traslado nacional de maquinaria sobredimensionada, materiales críticos y fluidos.", 
    image: "/images/hero-night.png",
    id: "MAC-TR-005",
    items: [
      "Chutos con Lowboy (60 a 140 Ton)",
      "Vacuums de 160 BLS",
      "Chutos con Batea y Volqueta",
      "Camiones Supervactor, Volteo y Cisterna",
      "Camión Cava, Camión 350 y Camioneta Pick Up"
    ]
  },
  { 
    title: "EQUIPOS ELEVADORES", 
    capacity: "ACCESO SEGURO", 
    status: "DISPONIBLE", 
    type: "ACCESO EN ALTURA", 
    desc: "Plataformas articuladas para operaciones seguras de montaje electromecánico e instrumentación en altura.", 
    image: "/images/hero-excavator.webp",
    id: "MAC-EL-006",
    items: [
      "Plataformas Manlift",
      "Camiones Cesta"
    ]
  },
  { 
    title: "EQUIPOS PARA ASFALTO", 
    capacity: "PAVIMENTACIÓN VIAL", 
    status: "DISPONIBLE", 
    type: "VIALIDAD", 
    desc: "Flota especializada de pavimentación autopropulsada para escarificación y colocación técnica de asfalto.", 
    image: "/images/hero-night.png",
    id: "MAC-AS-007",
    items: [
      "Finisher (Terminadora de Asfalto)",
      "Escarificadora de Asfalto",
      "Rodillo Liso y Compactador de Neumáticos",
      "Camión Rosco y Barredora Autopropulsada"
    ]
  },
  { 
    title: "EQUIPOS PARA CONCRETO", 
    capacity: "OBRAS CIVILES", 
    status: "DISPONIBLE", 
    type: "CONCRETERA", 
    desc: "Maquinaria mezcladora y trompos para el vaciado continuo de concreto en bases y estructuras civiles.", 
    image: "/images/hero-excavator.webp",
    id: "MAC-CO-008",
    items: [
      "Camiones Trompo Mezclador de Concreto",
      "Trompos Mezcladores de Concreto Portátiles"
    ]
  },
  { 
    title: "EQUIPOS MENORES Y AUXILIARES", 
    capacity: "100 - 1000 KVA", 
    status: "DISPONIBLE", 
    type: "SERVICIOS AUXILIARES", 
    desc: "Soporte energético, neumático, hidráulico y habitabilidad móvil para operaciones autosuficientes en campo.", 
    image: "/images/hero-night.png",
    id: "MAC-ME-009",
    items: [
      "Plantas Eléctricas (100 a 1000 KVA)",
      "Compresores de Aire (180 - 185 CFM)",
      "Motobomba de 6” x 6” de 80 HP",
      "Torres de Iluminación y Máquinas de Soldar",
      "Equipos de Pintura Airless y Sandblasting",
      "Oficinas, Comedores, Vestidores, Baños y Contenedores"
    ]
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
                        className={`relative pb-4 text-[10px] font-montserrat font-black uppercase tracking-[0.5em] transition-all ${
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

            <div className="hidden xl:flex items-center gap-6 text-[9px] font-montserrat text-white/20 uppercase tracking-widest">
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
                                <div className="bg-7l-gold/10 backdrop-blur-md border border-7l-gold/20 text-7l-gold text-[8px] px-3 py-1 font-montserrat font-bold uppercase tracking-widest">
                                    REF: {p.id}
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-10 md:p-12 space-y-8 flex-1 flex flex-col">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.4em] text-7l-gold/60 font-montserrat">
                                    {activeTab === "proyectos" ? <Layers size={10} className="text-7l-gold" /> : <Tool size={10} className="text-7l-gold" />}
                                    {p.type}
                                </div>
                                
                                <h3 className="text-2xl md:text-3xl font-montserrat font-black uppercase leading-tight tracking-tight text-white group-hover:text-7l-gold transition-colors">
                                    {p.title}
                                </h3>
                            </div>

                            <p className="text-[13px] text-white/50 font-montserrat leading-relaxed font-light border-l-[1px] border-white/10 pl-6 group-hover:border-7l-gold/50 transition-all">
                                {p.desc}
                            </p>

                            {activeTab === "maquinaria" && p.items && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-6 border-t border-white/5">
                                    {p.items.map((item: string, idx: number) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-7l-gold/50 mt-1.5 shrink-0 transform rotate-45"></div>
                                            <span className="text-[11px] font-bold font-montserrat text-white/60 uppercase tracking-wider leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="pt-8 mt-auto flex items-center gap-10 border-t border-white/5">
                                {activeTab === "proyectos" ? (
                                    <>
                                        <div className="flex items-center gap-3">
                                            <MapPin size={12} className="text-white/20" />
                                            <span className="text-[10px] font-montserrat uppercase text-white/40 tracking-widest">{p.client}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Calendar size={12} className="text-white/20" />
                                            <span className="text-[10px] font-montserrat uppercase text-white/40 tracking-widest">{p.year}</span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-3">
                                            <Anchor size={12} className="text-white/20" />
                                            <span className="text-[10px] font-montserrat uppercase text-white/40 tracking-widest">{p.capacity}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-7l-gold animate-pulse"></div>
                                            <span className="text-[10px] font-montserrat uppercase text-7l-gold tracking-widest">{p.status}</span>
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
            <button className="px-12 py-5 border border-white/10 text-[10px] font-montserrat font-black uppercase tracking-[0.5em] text-white/60 hover:bg-7l-gold hover:text-7l-black transition-all hover:border-7l-gold">
                {activeTab === "proyectos" ? "Explorar histórico completo" : "Solicitar cotización de alquiler"}
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;

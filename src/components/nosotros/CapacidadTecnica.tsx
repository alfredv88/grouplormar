"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, HardHat, ShieldCheck, Settings, Zap, Drill, Gauge, Factory, Box } from "lucide-react";

const CapacidadTecnica = () => {
  const equipment = [
    { 
      cat: "01. IZAMIENTO", 
      name: "GRÚAS TELESCÓPICAS", 
      desc: "Capacidades de 15, 45, 60, 75 y 100 Toneladas. Brazos hidráulicos y Montacargas de alto tonelaje.", 
      icon: <Truck size={24} /> 
    },
    { 
      cat: "02. SERVICIOS A POZO", 
      name: "WELL TESTING & FLUSH-BY", 
      desc: "Cabilleros de 350HP, Camiones Hot Oil y Equipos de prueba a pozos especializados.", 
      icon: <Drill size={24} /> 
    },
    { 
      cat: "03. TRANSPORTE PESADO", 
      name: "LOWBOYS & LOGÍSTICA", 
      desc: "Chutos con Lowboy de 60 a 140 Toneladas. Vacuums de 160 BLS y Supervactors.", 
      icon: <Factory size={24} /> 
    },
    { 
      cat: "04. ASFALTO", 
      name: "TREN DE PAVIMENTACIÓN", 
      desc: "Finisher, Escarificadora, Camión Rosco, Rodillos Lisos y Neumáticos para asfalto.", 
      icon: <Settings size={24} /> 
    },
    { 
      cat: "05. MOVIMIENTO DE TIERRA", 
      name: "PALA MECÁNICA & EQUIPO", 
      desc: "Tractores, Excavadoras, Motoniveladoras, Vibrocompactadores y Pata de Cabra.", 
      icon: <Box size={24} /> 
    },
    { 
      cat: "06. CONCRETO", 
      name: "MEZCLADO & COLOCACIÓN", 
      desc: "Camiones Trompo y Mezcladores de concreto para infraestructura civil industrial.", 
      icon: <Gauge size={24} /> 
    },
    { 
      cat: "07. ELEVACIÓN", 
      name: "MANLIFT & CESTA", 
      desc: "Equipos certificados para trabajos de altura y mantenimiento de instalaciones aéreas.", 
      icon: <HardHat size={24} /> 
    },
    { 
      cat: "08. EQUIPOS MENORES", 
      name: "SOPORTE TÉCNICO", 
      desc: "Plantas de 1000 KVA, Soldadura, Pintura Airless, Sandblasting y Compresores.", 
      icon: <Zap size={24} /> 
    },
    { 
      cat: "09. INFRAESTRUCTURA", 
      name: "MÓDULOS OPERATIVOS", 
      desc: "Tráiler de oficinas, comedores, vestidores y contenedores de herramientas móviles.", 
      icon: <Box size={24} /> 
    }
  ];

  return (
    <section className="py-32 px-10 md:px-20 lg:px-32 bg-[#080808] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-industrial-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="mb-24 space-y-8">
            <div className="flex items-center gap-6">
                <div className="w-12 h-[px] bg-7l-gold"></div>
                <span className="text-7l-gold text-[10px] font-bold uppercase tracking-[0.6em] font-syncopate">PODER OPERATIVO</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-syne font-black text-white uppercase leading-[0.9] tracking-tighter">
                CAPACIDAD <br /> 
                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>TECNOLÓGICA</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {equipment.map((equip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-7l-black p-12 hover:bg-white/[0.02] transition-all duration-500 group relative flex flex-col justify-between"
            >
              <div className="space-y-12">
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-7l-gold group-hover:border-7l-gold group-hover:bg-7l-gold group-hover:text-7l-black transition-all duration-500">
                        {equip.icon}
                    </div>
                    <span className="text-[8px] font-bold font-syncopate text-white/20 tracking-widest uppercase border-b border-white/10 pb-2">
                        MOD-2024
                    </span>
                </div>

                <div className="space-y-4">
                    <p className="text-7l-gold text-[9px] font-bold uppercase tracking-[0.4em] font-syncopate">{equip.cat}</p>
                    <h4 className="text-2xl font-syne font-extrabold text-white uppercase leading-tight group-hover:text-7l-gold transition-colors">
                        {equip.name}
                    </h4>
                    <p className="text-xs text-white/40 font-montserrat tracking-wide max-w-[200px]">
                        {equip.desc}
                    </p>
                </div>
              </div>

              {/* Technical Marker */}
              <div className="mt-12 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-2 h-2 rounded-full bg-7l-gold animate-pulse"></div>
                <span className="text-[9px] font-syncopate text-white font-bold tracking-widest">ACTIVO PROPIO</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapacidadTecnica;

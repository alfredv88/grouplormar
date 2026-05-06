"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HumanCenter = () => {
  const people = [
    {
      id: "01",
      name: "ING. ROBERTO SALAZAR",
      role: "DIRECCIÓN DE PROYECTOS",
      desc: "Lideramos con visión estratégica, transformando desafíos complejos en hitos de ingeniería estructuralmente sólidos.",
      img: "/images/ingeniero_lormar_autoridad_humana.png",
    },
    {
      id: "02",
      name: "EQUIPO OPERATIVO 7L",
      role: "DIRECCIÓN DE CAMPO",
      desc: "Fuerza operativa fundamentada en la perfecta coordinación de nuestro capital humano especializado.",
      img: "/images/equipo_lormar_accion_industrial.png",
    },
    {
      id: "03",
      name: "TÉC. ELENA MENDOZA",
      role: "CONTROL Y CALIDAD",
      desc: "Supervisión técnica incansable para garantizar tolerancias y protocolos en cada macro-proyecto.",
      img: "/images/operador_lormar_precision_maestria.png",
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-7l-industrial-dark relative overflow-hidden" id="equipo">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Corporativo Dark */}
        <div className="mb-24 flex flex-col items-start">
          <span className="block font-montserrat text-7l-gold tracking-[0.5em] text-[9px] font-bold uppercase mb-4">
            {'//'} INFRAESTRUCTURA HUMANA
          </span>
          <h2 className="text-5xl md:text-7xl font-montserrat font-black uppercase leading-none text-7l-white tracking-tight">
            NUESTRO <span className="text-7l-gold">CAPITAL</span>
          </h2>
          <div className="w-20 h-[1px] bg-7l-white/20 mt-10"></div>
        </div>

        {/* Galería Ejecutiva - Estilo Brochure Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {people.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group flex flex-col"
            >
              {/* Imagen con Overlay de Gradiente */}
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-white/5 mb-10 ring-1 ring-white/10">
                <Image 
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-7l-black via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Bloque de texto sólido clásico */}
              <div className="flex flex-col">
                <span className="text-[10px] font-bold font-montserrat text-7l-gold tracking-[0.3em] uppercase block mb-3">
                  {person.role}
                </span>
                <h3 className="text-2xl font-montserrat font-black text-7l-white uppercase tracking-tight mb-4">
                  {person.name}
                </h3>
                <p className="text-[14px] text-7l-white/60 font-montserrat leading-relaxed border-l border-7l-gold/30 pl-6 group-hover:text-7l-white transition-colors">
                  {person.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanCenter;

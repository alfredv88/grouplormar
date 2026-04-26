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
    <section className="py-32 md:py-48 bg-white relative">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Corporativo Claro */}
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="block font-syncopate text-[#7A7A7A] tracking-[0.2em] text-[11px] font-bold uppercase mb-4">
            INFRAESTRUCTURA HUMANA
          </span>
          <h2 className="text-5xl md:text-7xl font-syne font-extrabold uppercase leading-none text-[#080808] tracking-tight">
            NUESTRO CAPITAL
          </h2>
          <div className="w-16 h-[2px] bg-7l-gold mt-10"></div>
        </div>

        {/* Galería Ejecutiva */}
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
              {/* Imagen limpia sin bordes raros */}
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-gray-100 mb-8">
                <Image 
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Bloque de texto sólido clásico */}
              <div className="flex flex-col">
                <span className="text-[10px] font-bold font-syncopate text-7l-gold tracking-[0.2em] uppercase block mb-3">
                  {person.role}
                </span>
                <h3 className="text-2xl font-syne font-bold text-[#080808] uppercase tracking-tight mb-4">
                  {person.name}
                </h3>
                <p className="text-[14px] text-[#555555] font-montserrat leading-relaxed border-l-2 border-gray-200 pl-4">
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

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Eye, Award } from "lucide-react";

const NosotrosHero = () => {
  const values = [
    { 
      name: "RESPONSABILIDAD", 
      desc: "Cumplimos con los compromisos adquiridos con nuestros clientes y proveedores." 
    },
    { 
      name: "INTEGRIDAD Y HONESTIDAD", 
      desc: "Administramos los recursos de manera ética y transparente, actuando con honradez en todas las operaciones." 
    },
    { 
      name: "CALIDAD", 
      desc: "Aseguramos que los servicios y productos cumplan con altos estándares, tanto nacionales como internacionales." 
    },
    { 
      name: "EFICIENCIA", 
      desc: "Optimizamos el uso de los recursos tangibles e intangibles para lograr el mejor rendimiento posible." 
    },
    { 
      name: "INNOVACIÓN", 
      desc: "Abiertos a nuevas ideas para generar valor agregado y mejorar continuamente." 
    }
  ];

  return (
    <section className="py-32 px-10 md:px-20 lg:px-32 relative bg-7l-black overflow-hidden">
      <div className="absolute inset-0 bg-industrial-grid opacity-5 pointer-events-none"></div>
      
      <div className="max-w-[1800px] mx-auto relative z-10 space-y-32">
        
        {/* Main Entry */}
        <div className="grid lg:grid-cols-12 gap-20 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-12 space-y-12"
            >
                <div className="flex items-center gap-6">
                    <div className="w-12 h-[2px] bg-7l-gold"></div>
                    <span className="text-7l-gold text-[10px] font-bold uppercase tracking-[0.5em] font-montserrat">
                        PERFIL CORPORATIVO // SERVICIOS Y CONSTRUCCIONES
                    </span>
                </div>

                <h1 className="text-5xl md:text-[100px] font-montserrat font-black leading-[0.8] tracking-tighter text-white uppercase">
                    ¿QUIÉNES <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,191,0,0.5)" }}>SOMOS?</span>
                </h1>

                <div className="grid md:grid-cols-2 gap-16 border-l-[1px] border-7l-gold/50 pl-10">
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed font-montserrat font-light max-w-3xl">
                        Somos una empresa que cuenta con un equipo de profesionales altamente capacitados. Competitivos dentro del mercado nacional, con una visión internacional, cumpliendo con las normativas establecidas por nuestros clientes y en estándares nacionales e internacionales en materia de calidad, seguridad y ambiente.
                    </p>
                    <p className="text-lg md:text-xl text-white/40 leading-relaxed font-montserrat font-light max-w-3xl">
                        Como empresa, continuamos con un constante crecimiento y desarrollo, todo esto basado en una gestión de aprendizaje y mejora continua con la finalidad de prestar un servicio profesional adaptado a las exigencias de nuestros clientes.
                    </p>
                </div>
            </motion.div>
        </div>

        {/* Mission & Vision - Cinematic Block */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {[
                { 
                    title: "MISIÓN", 
                    icon: <Target className="text-7l-gold" size={40} />,
                    text: "Nuestra empresa se dedica a brindar servicios de ingeniería de alta calidad en las áreas civiles, mecánica, eléctrica e instrumentación, tanto en el sector privado como en la industria. Estamos comprometidos a satisfacer y superar las expectativas de nuestros clientes en todos los proyectos en los que nos involucramos, garantizando así el cumplimiento de sus exigencias." 
                },
                { 
                    title: "VISIÓN", 
                    icon: <Eye className="text-7l-gold" size={40} />,
                    text: "Alcanzar un alto nivel de competitividad, asegurar el crecimiento como una empresa sólida que cumple con sus objetivos, bajo el ritmo propuesto de estar entre las empresas certificadas en aseguramiento y control de la calidad." 
                }
            ].map((item, i) => (
                <div key={i} className="bg-7l-black p-12 md:p-20 space-y-10 group hover:bg-white/[0.02] transition-colors duration-500">
                    <div className="flex items-center justify-between">
                        <h3 className="text-4xl font-montserrat font-black text-white uppercase tracking-tight">
                            {item.title}
                        </h3>
                        <div className="opacity-20 group-hover:opacity-100 transition-opacity duration-1000 group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                    </div>
                    <p className="text-lg text-white/50 font-montserrat font-light leading-relaxed">
                        {item.text}
                    </p>
                </div>
            ))}
        </div>

        {/* Corporate Values Strip */}
        <div className="">
            <div className="flex items-center gap-6 mb-16">
                <div className="w-12 h-[1px] bg-white/20"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 font-montserrat">VALORES CORPORATIVOS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                {values.map((v, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="space-y-6 group"
                    >
                        <h4 className="text-[11px] font-bold font-montserrat text-7l-gold tracking-widest leading-tight">{v.name}</h4>
                        <div className="w-8 h-[1px] bg-white/10 group-hover:w-full group-hover:bg-7l-gold/30 transition-all duration-700"></div>
                        <p className="text-[11px] text-white/40 leading-relaxed font-montserrat font-medium group-hover:text-white/70 transition-colors">
                          {v.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default NosotrosHero;

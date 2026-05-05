"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Settings, Truck, Zap, HardHat, Drill, Box, Construction, Factory, Shield, Maximize2 } from "lucide-react";

const ToolBoxIcon = () => <div className="w-8 h-8 opacity-50 flex items-center justify-center"><Settings size={32} /></div>;
const KeyIcon = () => <div className="w-8 h-8 opacity-50 flex items-center justify-center"><Zap size={32} /></div>;

const servicesByCategory = [
  {
    category: "CONSTRUCCIÓN",
    services: [
      { 
        title: "DESARROLLO INTEGRAL", 
        icon: <Construction />, 
        desc: "Diseño, adquisición de materiales y ejecución de obras civiles, mecánica, eléctrica y de instrumentación.", 
        items: ["Obras Civiles", "Mecánica", "Eléctrica", "Instrumentación"] 
      },
      { 
        title: "FACILIDADES DE PRODUCCIÓN", 
        icon: <Factory />, 
        desc: "Construcción de baterías de separación, estaciones de flujo, oleoductos, gasoductos y líneas de recolección.", 
        items: ["Estaciones de flujo", "Oleoductos", "Gasoductos", "Líneas de recolección"] 
      },
      { 
        title: "INFRAESTRUCTURA Y SOPORTE", 
        icon: <HardHat />, 
        desc: "Construcción de locaciones de pozos, vías de acceso, campamentos, tanques de almacenamiento y obras de drenaje.", 
        items: ["Locaciones de pozos", "Vías de acceso", "Tanques", "Drenaje"] 
      }
    ]
  },
  {
    category: "MANTENIMIENTO",
    services: [
      { 
        title: "MANTENIMIENTO CORRECTIVO", 
        icon: <Settings />, 
        desc: "Reparación de equipos rotatorios (bombas, compresores, turbinas) y estáticos (tuberías, recipientes a presión).", 
        items: ["Equipos Rotatorios", "Equipos Estáticos", "Bombas y Turbinas", "Recipientes AP"] 
      },
      { 
        title: "INTEGRIDAD DE TUBERÍAS", 
        icon: <Drill />, 
        desc: "Servicios de limpieza, pruebas no destructivas (NDT), inspección y reemplazo de líneas de producción.", 
        items: ["Limpieza y NDT", "Inspección", "Reemplazo de líneas", "Integridad de equipos"] 
      }
    ]
  },
  {
    category: "SERVICIOS A POZOS",
    services: [
      { 
        title: "REACONDICIONAMIENTO", 
        icon: <Zap />, 
        desc: "Estimulación para mejorar el flujo de hidrocarburos y reacondicionamiento de pozos que han cesado su producción.", 
        items: ["Estimulación", "Workover", "Recuperación de Pozos"] 
      },
      { 
        title: "SUSTITUCIÓN DE EQUIPOS", 
        icon: <ToolBoxIcon />, 
        desc: "Sustitución de variadores de frecuencia y bombas de cavidad progresiva (PCP). Suministro de equipos pesados.", 
        items: ["Variadores VFD", "Bombas PCP", "Logística a Pozos"] 
      }
    ]
  },
  {
    category: "SERVICIO AMBIENTAL",
    services: [
      { 
        title: "MANEJO DE RESIDUOS", 
        icon: <Box />, 
        desc: "Recolección, transporte y disposición final de desechos peligrosos (RACDA), incluyendo cortes de perforación.", 
        items: ["Desechos Peligrosos", "Cortes de Perforación", "Fluidos Contaminados"] 
      },
      { 
        title: "SANEAMIENTO Y REMEDIACIÓN", 
        icon: <Shield />, 
        desc: "Limpieza de derrames de hidrocarburos y biorremediación de suelos y cuerpos de agua afectados.", 
        items: ["Biorremediación", "Limpieza de Derrames", "Suelos y Aguas"] 
      }
    ]
  },
  {
    category: "SERVICIO LOGÍSTICO",
    services: [
      { 
        title: "TRANSPORTE PESADO", 
        icon: <Truck />, 
        desc: "Movilización de equipos sobredimensionados (taladros, bombas, tanques) y materiales críticos a larga distancia.", 
        items: ["Carga Sobredimensionada", "Taladros y Bombas", "Materiales Críticos"] 
      },
      { 
        title: "ALQUIER DE MAQUINARIA", 
        icon: <KeyIcon />, 
        desc: "Suministro de grúas, excavadoras, montacargas pesados y tractores para operaciones en campo.", 
        items: ["Grúas 15-100T", "Excavadoras", "Tractores de cadena"] 
      },
      { 
        title: "IZAJE CRÍTICO", 
        icon: <Maximize2 />, 
        desc: "Maniobras especializadas para el montaje y desmontaje de estructuras, recipientes y componentes de plantas.", 
        items: ["Izaje Crítico", "Montaje de Plantas", "Posicionamiento"] 
      }
    ]
  }
];

const ServiciosGrid = () => {
  return (
    <section className="py-20 px-10 md:px-20 lg:px-32 relative bg-7l-black">
      <div className="max-w-[1800px] mx-auto space-y-32">
        {servicesByCategory.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-12">
            <div className="flex items-center gap-6">
                <span className="text-white/20 text-[9px] font-bold font-montserrat tracking-[0.5em]">{group.category}</span>
                <div className="flex-1 h-[1px] bg-white/5"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {group.services.map((s, i) => (
                <motion.article 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative bg-[#0a0a0a] border border-white/5 p-12 hover:border-7l-gold/20 transition-all duration-700 flex flex-col md:flex-row gap-10 items-start md:items-stretch"
                >
                    {/* Visual Segment */}
                    <div className="w-16 h-16 md:w-24 md:h-full bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-7l-gold group-hover:text-7l-black transition-all duration-700">
                        {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
                    </div>

                    {/* Content Segment */}
                    <div className="flex-1 space-y-8 py-2">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-montserrat font-black text-white uppercase group-hover:text-7l-gold transition-colors">
                                {s.title}
                            </h3>
                            <p className="text-sm text-white/40 font-montserrat font-normal leading-relaxed max-w-md">
                                {s.desc}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {s.items.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-7l-gold/30"></div>
                                    <span className="text-[10px] font-bold font-montserrat text-white/30 uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-white/5">
                            <Link href="/contacto" className="inline-flex items-center gap-4 text-[9px] font-bold font-montserrat text-7l-gold tracking-[0.3em] group/btn">
                                SOLICITAR COTIZACIÓN <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiciosGrid;

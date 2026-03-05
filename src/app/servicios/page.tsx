import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Settings, Truck, Zap, HardHat, Drill, Box, ShieldCheck, Construction } from "lucide-react";

export default function ServiciosPage() {
    const allServices = [
        { title: "Izamiento CrÃ­tico", icon: <Truck size={32} />, desc: "Capacidad de izaje pesado con grÃºas telescÃ³picas hasta 100T, brazos hidrÃ¡ulicos y montacargas de alta capacidad.", items: ["GrÃºas TelescÃ³picas 15-100T", "Brazos HidrÃ¡ulicos 6-25T", "Montacargas Pesados"] },
        { title: "ExcavaciÃ³n y Carga", icon: <HardHat size={32} />, desc: "Equipos de excavaciÃ³n y carga masiva para proyectos industriales y mineros con mantenimiento riguroso.", items: ["Excavadoras", "Cargador Frontal", "Retroexcavadoras / Minishower"] },
        { title: "Servicios a Pozos", icon: <Drill size={32} />, desc: "Soporte especializado para el sector petrolero con equipos de well testing, flush-by y servicios de cabillero.", items: ["Cabillero 350HP", "CamiÃ³n Hot Oil", "Well Testing & Flush-By"] },
        { title: "Movimiento de Tierra", icon: <Settings size={32} />, desc: "Flota pesada para preparaciÃ³n de terrenos, vialidad y nivelaciÃ³n a gran escala con equipos de precisiÃ³n.", items: ["Tractores", "Motoniveladoras", "Vibrocompactador Pata de Cabra"] },
        { title: "LogÃ­stica de Transporte", icon: <Truck size={32} />, desc: "Traslado de equipos sobredimensionados con Lowboys de hasta 140T, chutos con batea y servicios de Vacuum.", items: ["Lowboy 60-140T", "Chuto con Vacuum 160 BLS", "Supervactor & Volteos"] },
        { title: "ElevaciÃ³n de Personal", icon: <Box size={32} />, desc: "Sistemas seguros de elevaciÃ³n para trabajos en altura mediante Manlift y camiones cesta certificados.", items: ["Manlift Certificado", "CamiÃ³n Cesta", "Sistemas de Altura"] },
        { title: "PavimentaciÃ³n AsfÃ¡ltica", icon: <Construction size={32} />, desc: "Equipamiento especializado para colocaciÃ³n y mantenimiento de vialidad asfÃ¡ltica de alta resistencia.", items: ["Finisher & Escarificadora", "Rodillo Liso & NeumÃ¡tico", "CamiÃ³n Rosco & Barredora"] },
        { title: "Mezclado de Concreto", icon: <Zap size={32} />, desc: "Servicios de preparaciÃ³n y suministro de concreto industrial mediante trompos mezcladores autopropulsados.", items: ["CamiÃ³n Trompo Mezclador", "Trompo Estacionario"] },
        { title: "Equipos de Soporte", icon: <Zap size={32} />, desc: "Unidades menores crÃ­ticas para la continuidad operativa: plantas elÃ©ctricas, iluminaciÃ³n y compresiÃ³n de aire.", items: ["Plantas 100-1000 KVA", "Compresores 185 CFM", "Torres de IluminaciÃ³n"] }
    ];

    return (
        <main className="min-h-screen bg-iron-base text-brand-white font-montserrat tracking-tight selection:bg-brand-yellow selection:text-brand-black pt-40 overflow-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-brand-black/60 backdrop-blur-xl z-50 border-b border-white/5">
                <div className="w-full max-w-[1800px] mx-auto px-10 h-24 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-4 group">
                        <ArrowLeft size={20} className="text-brand-yellow group-hover:-translate-x-2 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] font-orbitron group-hover:text-brand-yellow transition-colors">Volver al Inicio</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="relative w-32 h-8">
                            <Image
                                src="/logos/logo lormar blanco.webp"
                                alt="Lormar"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Intermedio */}
            <section className="px-10 md:px-20 lg:px-32 py-32 border-b border-white/5 relative">
                <div className="absolute inset-0 bg-industrial-grid opacity-10 pointer-events-none"></div>

                <div className="max-w-[1800px] mx-auto space-y-10 relative z-10">
                    <div className="inline-flex items-center gap-6">
                        <span className="bg-brand-yellow text-brand-black px-4 py-1.5 text-[10px] font-black uppercase tracking-widest font-orbitron">
                            PORTAFOLIO TÉCNICO
                        </span>
                        <div className="h-[1px] w-24 bg-brand-yellow/50"></div>
                    </div>

                    <h1 className="text-7xl md:text-[130px] font-black font-orbitron uppercase leading-[0.75] tracking-tightest">
                        CATÁLOGO DE <br />
                        <span className="text-transparent stroke-brand-yellow" style={{ WebkitTextStroke: "2px #F2A900" }}>SOLUCIONES</span>
                    </h1>

                    <p className="text-2xl md:text-3xl font-medium text-white/80 leading-snug italic border-l-[6px] border-brand-yellow pl-10 max-w-5xl">
                        Despliegue de potencia industrial para proyectos críticos. Ejecutamos soluciones operativas con el respaldo de nuestra <span className="text-brand-yellow">flota pesada propia</span>.
                    </p>
                </div>
            </section>

            {/* Grid de Servicios Detallado */}
            <section className="py-40 px-10 md:px-20 lg:px-32 relative">
                <div className="max-w-[1800px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((s, i) => (
                        <article key={i} className="group relative bg-iron-light/30 border-iron iron-bevel p-12 transition-all duration-500 hover:bg-brand-yellow/5 hover:shadow-[0_0_30px_rgba(242,169,0,0.1)] flex flex-col justify-between min-h-[550px]">
                            {/* Industrial Details */}
                            <div className="absolute inset-0 industrial-screws opacity-10 pointer-events-none"></div>

                            <div className="space-y-10 relative z-10">
                                <div className="w-16 h-16 flex items-center justify-center bg-brand-yellow text-brand-black iron-bevel group-hover:scale-110 transition-transform">
                                    {React.cloneElement(s.icon as React.ReactElement<any>, { size: 28 })}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black font-orbitron uppercase mb-4 leading-none tracking-tight group-hover:text-brand-yellow transition-colors">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm text-white/50 leading-relaxed italic font-medium group-hover:text-white/70 transition-colors lowercase">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-10 border-t border-white/5 group-hover:border-brand-yellow/20 mt-10 relative z-10">
                                <ul className="space-y-4 mb-12">
                                    {s.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                                            <div className="w-1.5 h-1.5 bg-brand-yellow rotate-45 group-hover:shadow-[0_0_8px_#F2A900]"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brand-yellow border-b border-brand-yellow/30 pb-2 hover:border-brand-yellow transition-all"
                                >
                                    SOLICITAR INFORME TÉCNICO <ArrowRight size={14} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-56 px-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-iron-base z-0"></div>
                <div className="absolute inset-0 bg-industrial-grid opacity-10 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto space-y-12 relative z-10">
                    <h2 className="text-6xl md:text-8xl font-black font-orbitron uppercase leading-none tracking-tightest">
                        ¿LISTO PARA INICIAR <br /> <span className="text-brand-yellow italic">SU PROYECTO?</span>
                    </h2>
                    <p className="text-xl uppercase tracking-[0.4em] font-black text-white/40">ASESORÍA TÉCNICA ESPECIALIZADA SIN COMPROMISO</p>

                    <div className="pt-8">
                        <Link
                            href="/contacto"
                            className="inline-block px-16 py-8 bg-brand-yellow text-brand-black font-black uppercase tracking-[0.4em] font-orbitron text-xs iron-bevel hover:bg-white hover:scale-105 transition-all"
                        >
                            CONTACTAR SOPORTE OPERATIVO
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

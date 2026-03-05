"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Truck, HardHat, ShieldCheck, Settings, Zap, Drill, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function NosotrosPage() {
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

            {/* Solidez Operativa Section */}
            <section className="py-40 px-10 md:px-20 lg:px-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-industrial-grid opacity-10 pointer-events-none"></div>
                <div className="max-w-[1800px] mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-1 hidden lg:flex flex-col items-center gap-10">
                            <div className="h-40 w-[2px] bg-gradient-to-b from-transparent via-brand-yellow to-transparent opacity-30"></div>
                            <span className="text-brand-yellow/20 text-5xl font-black font-orbitron uppercase [writing-mode:vertical-lr] rotate-180 tracking-[0.5em]">
                                EMPRESA
                            </span>
                            <div className="h-40 w-[2px] bg-gradient-to-b from-transparent via-brand-yellow to-transparent opacity-30"></div>
                        </div>

                        <div className="lg:col-span-11 space-y-32">
                            <div className="grid lg:grid-cols-12 gap-20 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="lg:col-span-7 space-y-12"
                                >
                                    <div className="inline-flex items-center gap-6">
                                        <span className="bg-brand-yellow text-brand-black px-4 py-1.5 text-[10px] font-black uppercase tracking-widest font-orbitron">
                                            ESTRUCTURA DE PODER
                                        </span>
                                        <div className="h-[1px] w-12 bg-brand-yellow/50"></div>
                                    </div>

                                    <h2 className="text-7xl md:text-[110px] font-black leading-[0.75] font-orbitron uppercase tracking-tightest">
                                        SOLIDEZ <br />
                                        <span className="text-transparent stroke-brand-yellow" style={{ WebkitTextStroke: "2px #F2A900" }}>OPERATIVA</span>
                                    </h2>

                                    <p className="text-2xl text-white/70 leading-relaxed font-montserrat italic border-l-4 border-brand-yellow pl-10">
                                        Grupo Lormar es una organización líder en servicios industriales y soluciones logísticas, especializada en montajes mecánicos, movimiento de tierra y soporte operativo de alta complejidad para los sectores petrolero e industrial de Venezuela.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2 }}
                                    className="lg:col-span-5 relative group"
                                >
                                    <div className="aspect-[4/3] relative border-iron iron-bevel overflow-hidden">
                                        <Image
                                            src="/images/hero-excavator.webp"
                                            alt="Operaciones Lormar"
                                            fill
                                            className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-black via-transparent to-brand-yellow/10 pointer-events-none"></div>
                                    </div>
                                    {/* Viewfinder Elements */}
                                    <div className="absolute top-0 right-0 p-4 font-orbitron text-[8px] text-brand-yellow font-black opacity-40">
                                        STRC_ID: 9855-LRMR
                                    </div>
                                </motion.div>
                            </div>

                            {/* Misión y Visión */}
                            <div className="grid md:grid-cols-2 gap-12">
                                {[
                                    { id: "01", title: "MISIÓN", text: "Brindar servicios industriales de alta calidad, comprometidos a superar las expectativas de nuestros clientes mediante la potencia de nuestra flota propia y el estricto cumplimiento de normas de seguridad." },
                                    { id: "02", title: "VISIÓN", text: "Posicionarnos como el aliado operativo más confiable a nivel nacional, siendo referentes en disponibilidad de maquinaria, ejecución técnica y responsabilidad socio-ambiental." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: i * 0.2 }}
                                        className="p-16 bg-iron-light/20 border-iron iron-bevel relative overflow-hidden group hover:bg-brand-yellow/5 transition-all"
                                    >
                                        <div className="absolute top-0 left-0 w-2 h-20 bg-brand-yellow/40 group-hover:h-full transition-all"></div>
                                        <div className="absolute inset-0 industrial-screws opacity-5 pointer-events-none"></div>

                                        <h3 className="text-5xl font-black font-orbitron text-white uppercase mb-8 flex items-baseline gap-6 tracking-tighter">
                                            <span className="text-brand-yellow text-2xl">{item.id}</span> {item.title}
                                        </h3>
                                        <p className="text-white/80 text-xl font-montserrat italic leading-relaxed group-hover:text-white transition-colors">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capacidad Tecnológica Section */}
            <section className="py-56 px-10 md:px-20 lg:px-32 bg-iron-light/10 relative border-t border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-industrial-grid opacity-10 pointer-events-none"></div>

                <div className="max-w-[1800px] mx-auto relative z-10">
                    <div className="mb-32 space-y-10 text-center md:text-left">
                        <div className="flex items-center gap-6 justify-center md:justify-start">
                            <div className="h-[2px] w-16 bg-brand-yellow"></div>
                            <p className="text-[12px] font-black uppercase tracking-[0.6em] text-brand-yellow font-orbitron">MANTENIMIENTO PREVENTIVO RIGUROSO</p>
                        </div>
                        <h2 className="text-7xl md:text-[100px] font-black font-orbitron uppercase leading-[0.8] tracking-tightest">
                            CAPACIDAD <br /> <span className="text-transparent stroke-brand-yellow" style={{ WebkitTextStroke: "2px #F2A900" }}>TECNOLÓGICA</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { cat: "Izaje", name: "Grúas Telescópicas", desc: "15-100 TON / Brazo Hidráulico", icon: <Truck size={32} /> },
                            { cat: "Pala Mecánica", name: "Línea Amarilla", desc: "Excavadoras, Cargadores, Retro", icon: <HardHat size={32} /> },
                            { cat: "Pozos", name: "Well Testing", desc: "Cabillero 350HP / Hot Oil", icon: <Drill size={32} /> },
                            { cat: "Movimiento Tierra", name: "Maquinaria Pesada", desc: "Tractores, Mototraíllas, Rodillos", icon: <Settings size={32} /> },
                            { cat: "Transporte", name: "Logística Pesada", desc: "Lowboy (140 Ton), Vacuum, Bateas", icon: <Truck size={32} /> },
                            { cat: "Elevadores", name: "Acceso Seguro", desc: "Manlift / Camión Cesta", icon: <ShieldCheck size={32} /> },
                            { cat: "Asfalto", name: "Pavimentación", desc: "Finisher, Escarificadora, Barredora", icon: <HardHat size={32} /> },
                            { cat: "Concreto", name: "Mezclado Móvil", desc: "Camión Trompo / Mezcladora", icon: <Settings size={32} /> },
                            { cat: "Equipos Menores", name: "Soporte Campo", desc: "Plantas Eléctricas, Compresores, Torres", icon: <Zap size={32} /> }
                        ].map((equip, idx) => (
                            <div
                                key={idx}
                                className="bg-iron-light/30 border-iron iron-bevel p-12 hover:bg-brand-yellow/5 transition-all duration-500 min-h-[350px] group relative flex flex-col justify-between"
                            >
                                <div className="absolute inset-0 industrial-screws opacity-5 pointer-events-none"></div>
                                <div className="flex justify-between items-start relative z-10">
                                    <div className="w-14 h-14 bg-brand-yellow text-brand-black iron-bevel flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {React.cloneElement(equip.icon as React.ReactElement<any>, { size: 24 })}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-yellow/40 group-hover:text-brand-yellow transition-colors font-orbitron border border-white/5 px-3 py-1">
                                        {equip.cat}
                                    </span>
                                </div>
                                <div className="mt-12 relative z-10">
                                    <h4 className="text-3xl font-black font-orbitron uppercase leading-tight mb-4 group-hover:text-brand-yellow transition-colors">{equip.name}</h4>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-white/60 transition-colors">{equip.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

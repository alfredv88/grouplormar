"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Truck, HardHat, ShieldCheck, Settings, Zap, Drill, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-brand-white text-brand-black font-sans selection:bg-brand-black selection:text-brand-white pt-32">
            {/* Navigation for Internal Page */}
            <nav className="fixed top-0 w-full bg-brand-white/90 backdrop-blur-sm z-50 border-b border-brand-black">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Volver al Inicio</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="relative w-8 h-8 bg-brand-black p-1 border border-brand-yellow">
                            <Image
                                src="/logos/logo lormar blanco.webp"
                                alt="Lormar"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-brand-black font-bold text-xl tracking-tighter uppercase font-teko">LORMAR</span>
                    </div>
                </div>
            </nav>

            {/* Solidez Operativa Section (TraÃ­da desde Home) */}
            <section className="py-32 px-6 border-b border-brand-white/5 bg-brand-black relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-20">
                        <div className="hidden lg:block lg:col-span-1">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.15 }}
                                viewport={{ once: true }}
                                className="text-brand-yellow text-6xl font-black font-orbitron uppercase [writing-mode:vertical-lr] rotate-180"
                            >
                                EMPRESA
                            </motion.span>
                        </div>

                        <div className="lg:col-span-11 space-y-20">
                            <div className="grid lg:grid-cols-12 gap-16 items-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="lg:col-span-7 space-y-8"
                                >
                                    <div className="inline-block px-4 py-1 bg-brand-yellow text-brand-black text-xs font-black uppercase tracking-widest italic">
                                        Trayectoria y Compromiso
                                    </div>
                                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-white leading-[0.9] font-orbitron uppercase">
                                        SOLIDEZ <br />
                                        <span className="text-brand-yellow">OPERATIVA</span>
                                    </h2>
                                    <p className="text-lg text-brand-white leading-relaxed font-montserrat max-w-xl">
                                        Grupo Lormar es una organizaciÃ³n lÃ­der en servicios industriales y soluciones logÃ­sticas, especializada en montajes mecÃ¡nicos, movimiento de tierra y soporte operativo de alta complejidad para los sectores petrolero e industrial.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="lg:col-span-5 relative group"
                                >
                                    <div className="aspect-[4/3] bg-brand-surface relative overflow-hidden clip-trapeze-right border-l-4 border-brand-yellow">
                                        <Image
                                            src="/images/hero-excavator.webp"
                                            alt="Operaciones Lormar"
                                            fill
                                            className="object-cover transition-all duration-700"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            {/* MisiÃ³n y VisiÃ³n */}
                            <div className="grid md:grid-cols-2 gap-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="p-12 border border-brand-white/10 relative overflow-hidden group hover:border-brand-yellow/40 transition-colors"
                                >
                                    <div className="absolute top-0 left-0 w-2 h-16 bg-brand-yellow"></div>
                                    <h3 className="text-4xl font-black font-orbitron text-brand-white uppercase mb-6 flex items-center gap-4 tracking-wider">
                                        <span className="text-brand-yellow">01</span> MISIÃ“N
                                    </h3>
                                    <p className="text-brand-white font-montserrat italic leading-relaxed">
                                        Brindar servicios industriales de alta calidad, comprometidos a superar las expectativas de nuestros clientes mediante la potencia de nuestra flota propia y el estricto cumplimiento de normas de seguridad.
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="p-12 border border-brand-white/10 relative overflow-hidden group hover:border-brand-yellow/40 transition-colors"
                                >
                                    <div className="absolute top-0 left-0 w-2 h-16 bg-brand-yellow"></div>
                                    <h3 className="text-4xl font-black font-orbitron text-brand-white uppercase mb-6 flex items-center gap-4 tracking-wider">
                                        <span className="text-brand-yellow">02</span> VISIÃ“N
                                    </h3>
                                    <p className="text-brand-white font-montserrat italic leading-relaxed">
                                        Posicionarnos como el aliado operativo mÃ¡s confiable a nivel nacional, siendo referentes en disponibilidad de maquinaria, ejecuciÃ³n tÃ©cnica y responsabilidad socio-ambiental.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flota de Equipos Section */}
            <section className="py-32 px-6 bg-slate-50 overflow-hidden relative border-b border-brand-black">
                <div className="absolute inset-0 bg-industrial-grid opacity-30 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-20 space-y-4 text-center md:text-left">
                        <h2 className="text-6xl font-black font-teko uppercase italic underline decoration-brand-yellow underline-offset-8">CAPACIDAD <br /> TECNOLÃ“GICA PROPIA</h2>
                        <p className="text-sm font-bold uppercase tracking-widest text-brand-black">Mantenimiento preventivo / 9 CategorÃ­as de especializaciÃ³n</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-1 border-brand-black bg-brand-black">
                        {[
                            { cat: "Izaje", name: "GrÃºas TelescÃ³picas", desc: "15-100 TON / Brazo HidrÃ¡ulico", icon: <Truck size={32} /> },
                            { cat: "Pala MecÃ¡nica", name: "LÃ­nea Amarilla", desc: "Excavadoras, Cargadores, Retro", icon: <HardHat size={32} /> },
                            { cat: "Pozos", name: "Well Testing / Flush-By", desc: "Cabillero 350HP / Hot Oil", icon: <Drill size={32} /> },
                            { cat: "Movimiento Tierra", name: "Maquinaria Pesada", desc: "Tractores, MototraÃ­llas, Rodillos", icon: <Settings size={32} /> },
                            { cat: "Transporte", name: "LogÃ­stica Pesada", desc: "Lowboy (140 Ton), Vacuum, Bateas", icon: <Truck size={32} /> },
                            { cat: "Elevadores", name: "Acceso Seguro", desc: "Manlift / CamiÃ³n Cesta", icon: <ShieldCheck size={32} /> },
                            { cat: "Asfalto", name: "PavimentaciÃ³n", desc: "Finisher, Escarificadora, Barredora", icon: <HardHat size={32} /> },
                            { cat: "Concreto", name: "Mezclado MÃ³vil", desc: "CamiÃ³n Trompo / Mezcladora", icon: <Settings size={32} /> },
                            { cat: "Equipos Menores", name: "Soporte Campo", desc: "Plantas ElÃ©ctricas, Compresores, Torres", icon: <Zap size={32} /> }
                        ].map((equip, idx) => (
                            <div key={idx} className="bg-brand-white p-10 hover:bg-brand-black hover:text-brand-white transition-all duration-300 flex flex-col justify-between min-h-[300px] border-b border-r border-brand-black/5 group">
                                <div className="flex justify-between items-start">
                                    <div className="opacity-100 transition-opacity text-brand-yellow">{equip.icon}</div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-brand-black group-hover:text-brand-yellow border border-brand-black px-2 py-0.5">{equip.cat}</span>
                                </div>
                                <div className="mt-8">
                                    <h4 className="text-3xl font-black font-teko uppercase italic leading-tight mb-2">{equip.name}</h4>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-black group-hover:text-brand-white">{equip.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

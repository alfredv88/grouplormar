import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Truck, HardHat, ShieldCheck, Settings, Zap, Drill } from "lucide-react";

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pt-32">
            {/* Navigation Dummy for Internal Page */}
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-black">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Volver al Inicio</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black flex items-center justify-center">
                            <span className="text-white font-bold text-lg font-teko">L</span>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="px-6 py-20 border-b border-black">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-8xl md:text-[120px] font-black font-teko uppercase italic leading-[0.8] mb-12">
                        PROFESIONALES <br /> <span className="underline">CAPACITADOS</span>
                    </h1>

                    <div className="grid md:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <p className="text-2xl font-montserrat font-medium text-black/80 leading-relaxed italic border-l-4 border-black pl-6">
                                “Somos una empresa que cuenta con un equipo de profesionales altamente capacitados, competitivos dentro del mercado nacional, con una visión internacional.”
                            </p>
                            <div className="space-y-6 text-sm opacity-70 leading-relaxed">
                                <p>Continuamos con un constante crecimiento y desarrollo, basado en una gestión de aprendizaje y mejora continua con la finalidad de prestar un servicio profesional adaptado a las exigencias de nuestros clientes.</p>
                                <p>Cumplimos con las normativas establecidas por nuestros clientes y estándares nacionales e internacionales en materia de calidad, seguridad y ambiente.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-black text-white p-10 flex flex-col justify-between aspect-square">
                                <span className="text-5xl font-black font-teko tracking-tight">V</span>
                                <div>
                                    <h4 className="font-bold uppercase text-xs mb-2">Visión Corporativa</h4>
                                    <p className="text-[10px] opacity-60 leading-normal uppercase font-bold tracking-widest">Alcanzar un alto nivel de competitividad, asegurar el crecimiento como una empresa sólida que cumple con sus objetivos.</p>
                                </div>
                            </div>
                            <div className="border border-black p-10 flex flex-col justify-between aspect-square">
                                <span className="text-5xl font-black font-teko tracking-tight italic">M</span>
                                <div>
                                    <h4 className="font-bold uppercase text-xs mb-2">Nuestra Misión</h4>
                                    <p className="text-[10px] opacity-60 leading-normal uppercase font-bold tracking-widest">Brindar servicios de ingeniería de alta calidad garantizando el cumplimiento de las exigencias de nuestros clientes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flota de Equipos (Fidelity Upgrade) */}
            <section className="py-32 px-6 bg-slate-50 overflow-hidden relative">
                <div className="absolute inset-0 bg-industrial-grid opacity-30 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-20 space-y-4">
                        <h2 className="text-6xl font-black font-teko uppercase italic underline">CAPACIDAD <br /> TECNOLÓGICA PROPIA</h2>
                        <p className="text-sm font-bold uppercase tracking-widest opacity-40">Mantenimiento preventivo / 9 Categorías de especialización</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-1 border-black bg-black">
                        {[
                            { cat: "Izaje", name: "Grúas Telescópicas", desc: "15-100 TON / Brazo Hidráulico", icon: <Truck size={32} /> },
                            { cat: "Pala Mecánica", name: "Línea Amarilla", desc: "Excavadoras, Cargadores, Retro", icon: <HardHat size={32} /> },
                            { cat: "Pozos", name: "Well Testing / Flush-By", desc: "Cabillero 350HP / Hot Oil", icon: <Drill size={32} /> },
                            { cat: "Movimiento Tierra", name: "Maquinaria Pesada", desc: "Tractores, Mototraíllas, Rodillos", icon: <Settings size={32} /> },
                            { cat: "Transporte", name: "Logística Pesada", desc: "Lowboy (140 Ton), Vacuum, Bateas", icon: <Truck size={32} /> },
                            { cat: "Elevadores", name: "Acceso Seguro", desc: "Manlift / Camión Cesta", icon: <ShieldCheck size={32} /> },
                            { cat: "Asfalto", name: "Pavimentación", desc: "Finisher, Escarificadora, Barredora", icon: <HardHat size={32} /> },
                            { cat: "Concreto", name: "Mezclado Móvil", desc: "Camión Trompo / Mezcladora", icon: <Settings size={32} /> },
                            { cat: "Equipos Menores", name: "Soporte Campo", desc: "Plantas Eléctricas, Compresores, Torres", icon: <Zap size={32} /> }
                        ].map((equip, idx) => (
                            <div key={idx} className="bg-white p-10 hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[300px] border-b border-r border-black/5 group">
                                <div className="flex justify-between items-start">
                                    <div className="opacity-20 group-hover:opacity-100 transition-opacity">{equip.icon}</div>
                                    <span className="text-[9px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-60 border border-current px-2 py-0.5">{equip.cat}</span>
                                </div>
                                <div className="mt-8">
                                    <h4 className="text-3xl font-black font-teko uppercase italic leading-tight mb-2">{equip.name}</h4>
                                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-80">{equip.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

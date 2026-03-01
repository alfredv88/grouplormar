import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Truck, HardHat, ShieldCheck, Settings, Zap, Drill } from "lucide-react";

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
                                src="/logo lormar blanco.png"
                                alt="Lormar"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-brand-black font-bold text-xl tracking-tighter uppercase font-teko">LORMAR</span>
                    </div>
                </div>
            </nav>

            {/* Hero Section Nosotros */}
            <section className="px-6 py-20 border-b border-brand-black bg-industrial-grid">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="space-y-6 max-w-2xl">
                        <div className="inline-block px-4 py-1 bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-widest italic">
                            Historia y Evolución
                        </div>
                        <h1 className="text-8xl md:text-[140px] font-black text-brand-black leading-[0.7] font-teko uppercase italic">
                            NUESTRO <br /> <span className="text-brand-yellow">ORIGEN</span>
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <p className="text-2xl font-montserrat font-medium text-brand-black/80 leading-relaxed italic border-l-4 border-brand-yellow pl-6">
                                “Somos una empresa que cuenta con un equipo de profesionales altamente capacitados, competitivos dentro del mercado nacional, con una visión internacional.”
                            </p>
                            <div className="space-y-6 text-sm opacity-70 leading-relaxed font-medium">
                                <p>Continuamos con un constante crecimiento y desarrollo, basado en una gestión de aprendizaje y mejora continua con la finalidad de prestar un servicio profesional adaptado a las exigencias de nuestros clientes.</p>
                                <p>Cumplimos con las normativas establecidas por nuestros clientes y estándares nacionales e internacionales en materia de calidad, seguridad y ambiente.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-brand-black text-brand-white p-10 flex flex-col justify-between aspect-square group hover:bg-brand-yellow hover:text-brand-black transition-all duration-500">
                                <span className="text-5xl font-black font-teko tracking-tight group-hover:translate-x-2 transition-transform">V</span>
                                <div>
                                    <h4 className="font-bold uppercase text-xs mb-2">Visión Corporativa</h4>
                                    <p className="text-[10px] opacity-60 leading-normal uppercase font-bold tracking-widest group-hover:opacity-100 italic">Ser de mayor prestigio nacional, ofreciendo calidad y responsabilidad a nuestros clientes.</p>
                                </div>
                            </div>
                            <div className="border border-brand-black p-10 flex flex-col justify-between aspect-square group hover:bg-brand-black hover:text-brand-white transition-all duration-500">
                                <span className="text-5xl font-black font-teko tracking-tight italic group-hover:translate-x-2 transition-transform">M</span>
                                <div>
                                    <h4 className="font-bold uppercase text-xs mb-2 text-brand-yellow">Nuestra Misión</h4>
                                    <p className="text-[10px] opacity-60 leading-normal uppercase font-bold tracking-widest group-hover:opacity-100 italic">Satisfacer las necesidades de la industria petrolera con servicios de calidad y rentabilidad.</p>
                                </div>
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
                        <h2 className="text-6xl font-black font-teko uppercase italic underline decoration-brand-yellow underline-offset-8">CAPACIDAD <br /> TECNOLÓGICA PROPIA</h2>
                        <p className="text-sm font-bold uppercase tracking-widest text-brand-black/40">Mantenimiento preventivo / 9 Categorías de especialización</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-1 border-brand-black bg-brand-black">
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
                            <div key={idx} className="bg-brand-white p-10 hover:bg-brand-black hover:text-brand-white transition-all duration-300 flex flex-col justify-between min-h-[300px] border-b border-r border-brand-black/5 group">
                                <div className="flex justify-between items-start">
                                    <div className="opacity-20 group-hover:opacity-100 transition-opacity text-brand-yellow">{equip.icon}</div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-brand-black/40 group-hover:text-brand-yellow/60 border border-current px-2 py-0.5">{equip.cat}</span>
                                </div>
                                <div className="mt-8">
                                    <h4 className="text-3xl font-black font-teko uppercase italic leading-tight mb-2">{equip.name}</h4>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40 group-hover:text-brand-white/80">{equip.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Settings, Truck, Zap, HardHat, Drill, Box, ShieldCheck, Construction } from "lucide-react";

export default function ServiciosPage() {
    const allServices = [
        { title: "Izamiento Crítico", icon: <Truck size={32} />, desc: "Capacidad de izaje pesado con grúas telescópicas hasta 100T, brazos hidráulicos y montacargas de alta capacidad.", items: ["Grúas Telescópicas 15-100T", "Brazos Hidráulicos 6-25T", "Montacargas Pesados"] },
        { title: "Excavación y Carga", icon: <HardHat size={32} />, desc: "Equipos de excavación y carga masiva para proyectos industriales y mineros con mantenimiento riguroso.", items: ["Excavadoras", "Cargador Frontal", "Retroexcavadoras / Minishower"] },
        { title: "Servicios a Pozos", icon: <Drill size={32} />, desc: "Soporte especializado para el sector petrolero con equipos de well testing, flush-by y servicios de cabillero.", items: ["Cabillero 350HP", "Camión Hot Oil", "Well Testing & Flush-By"] },
        { title: "Movimiento de Tierra", icon: <Settings size={32} />, desc: "Flota pesada para preparación de terrenos, vialidad y nivelación a gran escala con equipos de precisión.", items: ["Tractores", "Motoniveladoras", "Vibrocompactador Pata de Cabra"] },
        { title: "Logística de Transporte", icon: <Truck size={32} />, desc: "Traslado de equipos sobredimensionados con Lowboys de hasta 140T, chutos con batea y servicios de Vacuum.", items: ["Lowboy 60-140T", "Chuto con Vacuum 160 BLS", "Supervactor & Volteos"] },
        { title: "Elevación de Personal", icon: <Box size={32} />, desc: "Sistemas seguros de elevación para trabajos en altura mediante Manlift y camiones cesta certificados.", items: ["Manlift Certificado", "Camión Cesta", "Sistemas de Altura"] },
        { title: "Pavimentación Asfáltica", icon: <Construction size={32} />, desc: "Equipamiento especializado para colocación y mantenimiento de vialidad asfáltica de alta resistencia.", items: ["Finisher & Escarificadora", "Rodillo Liso & Neumático", "Camión Rosco & Barredora"] },
        { title: "Mezclado de Concreto", icon: <Zap size={32} />, desc: "Servicios de preparación y suministro de concreto industrial mediante trompos mezcladores autopropulsados.", items: ["Camión Trompo Mezclador", "Trompo Estacionario"] },
        { title: "Equipos de Soporte", icon: <Zap size={32} />, desc: "Unidades menores críticas para la continuidad operativa: plantas eléctricas, iluminación y compresión de aire.", items: ["Plantas 100-1000 KVA", "Compresores 185 CFM", "Torres de Iluminación"] }
    ];

    return (
        <main className="min-h-screen bg-brand-white text-brand-black font-sans selection:bg-brand-black selection:text-brand-white pt-32">
            {/* Navigation */}
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

            {/* Hero Intermedio */}
            <section className="px-6 py-20 border-b border-brand-black bg-industrial-grid">
                <div className="max-w-7xl mx-auto space-y-8">
                    <div className="inline-block px-4 py-1 bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-widest italic">
                        Portfolio Técnico
                    </div>
                    <h1 className="text-6xl md:text-[100px] font-black font-orbitron uppercase leading-[0.8] mb-12">
                        CATÁLOGO DE <br /> <span className="text-brand-yellow underline decoration-brand-black underline-offset-8">SOLUCIONES</span>
                    </h1>
                    <p className="text-2xl font-montserrat font-medium text-brand-black leading-relaxed italic border-l-4 border-brand-yellow pl-6 max-w-4xl">
                        Despliegue de potencia industrial para proyectos críticos. Ejecutamos soluciones operativas con el respaldo de nuestra flota pesada propia.
                    </p>
                </div>
            </section>

            {/* Grid de Servicios Detallado */}
            <section className="py-24 px-6 relative">
                <div className="absolute inset-0 bg-industrial-grid pointer-events-none"></div>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-brand-black border border-brand-black">
                    {allServices.map((s, i) => (
                        <article key={i} className="group bg-brand-white p-12 transition-all hover:bg-brand-black hover:text-brand-white flex flex-col justify-between min-h-[500px] border-b border-r border-brand-black/5 last:border-r-0">
                            <div className="space-y-8">
                                <div className="text-brand-black transition-all group-hover:text-brand-yellow mb-8">
                                    {s.icon}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black font-orbitron uppercase mb-4 group-hover:text-brand-yellow transition-colors">{s.title}</h3>
                                    <p className="text-sm leading-relaxed italic font-medium">{s.desc}</p>
                                </div>
                            </div>

                            <div className="pt-10 border-t border-brand-black/10 group-hover:border-brand-white/20 mt-10">
                                <ul className="space-y-4 mb-10">
                                    {s.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brand-black group-hover:text-brand-white">
                                            <div className="w-1.5 h-1.5 bg-brand-yellow rotate-45"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contacto" className="text-[10px] font-black uppercase tracking-widest border-b-2 border-brand-yellow pb-1 group-hover:text-brand-yellow transition-colors">
                                    Solicitar Información Técnica
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-32 px-6 bg-brand-black text-brand-white text-center bg-metal-texture relative">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-5xl font-black font-orbitron uppercase">¿Listo para iniciar su proyecto?</h2>
                    <p className="text-sm uppercase tracking-widest font-bold">Ofrecemos asesoría técnica especializada sin compromiso.</p>
                    <Link href="/contacto" className="inline-block px-12 py-5 bg-brand-yellow text-brand-black font-black uppercase tracking-widest hover:bg-brand-white transition-colors">
                        Contactar Soporte Operativo
                    </Link>
                </div>
            </section>
        </main>
    );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Settings, Truck, Zap, HardHat, Drill, Box, ShieldCheck } from "lucide-react";

export default function ServiciosPage() {
    const allServices = [
        { title: "Construcción", icon: <HardHat size={32} />, desc: "Desarrollo integral de proyectos: diseño, adquisición de materiales y ejecución de obras civiles, mecánica, eléctrica y de instrumentación.", items: ["Baterías de Separación", "Estaciones de Flujo", "Oleoductos y Gasoductos"] },
        { title: "Mantenimiento", icon: <Settings size={32} />, desc: "Mantenimiento correctivo y reparación de equipos rotatorios (bombas, compresores) y estáticos (tuberías, recipientes a presión).", items: ["Equipos Rotatorios", "Pruebas NDT", "Integridad de Tuberías"] },
        { title: "Servicios a Pozos", icon: <Drill size={32} />, desc: "Estimulación para mejorar el flujo de hidrocarburos y reacondicionamiento de pozos. Sustitución de variadores y bombas PCP.", items: ["Estimulación de Pozos", "Reacondicionamiento", "Equipos Well Testing"] },
        { title: "Servicio Ambiental", icon: <Box size={32} />, desc: "Manejo integral de residuos peligrosos y no peligrosos, recolección de cortes de perforación y fluidos contaminados.", items: ["Manejo de Residuos", "Saneamiento Ambiental", "Remediación de Suelos"] },
        { title: "Servicio Logístico", icon: <Truck size={32} />, desc: "Transporte terrestre de equipos sobredimensionados, batea y lowboy. Izamiento crítico y gestión de flota.", items: ["Izaje Crítico", "Transporte Sobredimensionado", "Alquiler Maquinaria"] }
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
                    <h1 className="text-8xl md:text-[140px] font-black font-teko uppercase italic leading-[0.7] mb-12">
                        CATÁLOGO DE <br /> <span className="text-brand-yellow underline decoration-brand-black underline-offset-8">SOLUCIONES</span>
                    </h1>
                    <p className="text-2xl font-montserrat font-medium text-brand-black/80 leading-relaxed italic border-l-4 border-brand-yellow pl-6 max-w-4xl">
                        Soluciones integrales de ingeniería y construcción industrial. Ejecutamos proyectos desde la fase de procura hasta el montaje final.
                    </p>
                </div>
            </section>

            {/* Grid de Servicios Detallado */}
            <section className="py-24 px-6 relative">
                <div className="absolute inset-0 bg-industrial-grid opacity-10 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-brand-black border border-brand-black">
                    {allServices.map((s, i) => (
                        <article key={i} className="group bg-brand-white p-12 transition-all hover:bg-brand-black hover:text-brand-white flex flex-col justify-between min-h-[500px] border-b border-r border-brand-black/5 last:border-r-0">
                            <div className="space-y-8">
                                <div className="w-20 h-20 bg-brand-black text-brand-white flex items-center justify-center border border-brand-black group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-black transition-all">
                                    {s.icon}
                                </div>
                                <div>
                                    <h3 className="text-4xl font-black font-teko uppercase tracking-tight mb-4 group-hover:text-brand-yellow transition-colors">{s.title}</h3>
                                    <p className="text-sm opacity-60 leading-relaxed italic font-medium">{s.desc}</p>
                                </div>
                            </div>

                            <div className="pt-10 border-t border-brand-black/10 group-hover:border-brand-white/20 mt-10">
                                <ul className="space-y-4 mb-10">
                                    {s.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brand-black/40 group-hover:text-brand-white/80">
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
            <section className="py-32 px-6 bg-brand-black text-brand-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-5xl font-black font-teko uppercase italic">¿Listo para iniciar su proyecto?</h2>
                    <p className="text-sm opacity-60 uppercase tracking-widest font-bold">Ofrecemos asesoría técnica especializada sin compromiso.</p>
                    <Link href="/contacto" className="inline-block px-12 py-5 bg-brand-yellow text-brand-black font-black uppercase tracking-widest hover:bg-brand-white transition-colors">
                        Contactar Ingeniería
                    </Link>
                </div>
            </section>
        </main>
    );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Settings, Truck, Zap, HardHat, Drill, Box, ShieldCheck } from "lucide-react";

export default function ServiciosPage() {
    const allServices = [
        { title: "Construcción", icon: <HardHat />, desc: "Desarrollo integral de proyectos: diseño, adquisición de materiales y ejecución de obras civiles, mecánica, eléctrica y de instrumentación.", items: ["Baterías de Separación", "Estaciones de Flujo", "Oleoductos y Gasoductos"] },
        { title: "Mantenimiento", icon: <Settings />, desc: "Mantenimiento correctivo y reparación de equipos rotatorios (bombas, compresores) y estáticos (tuberías, recipientes a presión).", items: ["Equipos Rotatorios", "Pruebas NDT", "Integridad de Tuberías"] },
        { title: "Servicios a Pozos", icon: <Drill />, desc: "Estimulación para mejorar el flujo de hidrocarburos y reacondicionamiento de pozos. Sustitución de variadores y bombas PCP.", items: ["Estimulación de Pozos", "Reacondicionamiento", "Equipos Well Testing"] },
        { title: "Servicio Ambiental", icon: <Box />, desc: "Manejo integral de residuos peligrosos y no peligrosos, recolección de cortes de perforación y fluidos contaminados.", items: ["Manejo de Residuos", "Saneamiento Ambiental", "Remediación de Suelos"] },
        { title: "Servicio Logístico", icon: <Truck />, desc: "Transporte terrestre de equipos sobredimensionados, batea y lowboy. Izamiento crítico y gestión de flota.", items: ["Izaje Crítico", "Transporte Sobredimensionado", "Alquiler Maquinaria"] }
    ];

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pt-32">
            {/* Navigation */}
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

            {/* Hero Intermedio */}
            <section className="px-6 py-20 border-b border-black">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-8xl md:text-[120px] font-black font-teko uppercase italic leading-[0.8] mb-12">
                        CATÁLOGO DE <br /> <span className="underline decoration-4">SOLUCIONES</span>
                    </h1>
                    <p className="text-2xl font-montserrat font-medium text-black/80 leading-relaxed italic border-l-4 border-black pl-6 max-w-4xl">
                        Soluciones integrales de ingeniería y construcción industrial. Ejecutamos proyectos desde la fase de procura hasta el montaje final.
                    </p>
                </div>
            </section>

            {/* Grid de Servicios Detallado */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {allServices.map((s, i) => (
                        <article key={i} className="group border border-black p-12 transition-all hover:bg-black hover:text-white flex flex-col justify-between min-h-[450px]">
                            <div className="space-y-8">
                                <div className="w-16 h-16 bg-black text-white flex items-center justify-center border border-black group-hover:border-white group-hover:bg-white group-hover:text-black">
                                    {s.icon}
                                </div>
                                <div>
                                    <h3 className="text-4xl font-black font-teko uppercase tracking-tight mb-4">{s.title}</h3>
                                    <p className="text-sm opacity-60 leading-relaxed italic">{s.desc}</p>
                                </div>
                            </div>

                            <div className="pt-10 border-t border-black/10 group-hover:border-white/20 mt-10">
                                <ul className="space-y-3 mb-8">
                                    {s.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">
                                            <ArrowRight size={10} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button className="text-[10px] font-black uppercase tracking-widest underline underline-offset-4 group-hover:text-white">Ver Detalles</button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

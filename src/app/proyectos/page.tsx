import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Users, Briefcase } from "lucide-react";

export default function ProyectosPage() {
    const projects = [
        { title: "Planta de Trituración — Bolívar", client: "Sector Minero", year: "2024", type: "Industrial", desc: "Montaje mecánico completo y automatización de procesos.", image: "/images/hero-excavator.png" },
        { title: "Drenajes Sector Los Potocos", client: "Edo. Anzoátegui", year: "2023", type: "Vialidad", desc: "Movimiento de tierra y canalización de drenajes industriales.", image: "/images/hero-excavator.png" },
        { title: "Mantenimiento Mayor Planta PDVSA", client: "Sector Petrolero", year: "2024", type: "Energía", desc: "Overhaul de equipos rotativos y paradas de planta programadas.", image: "/images/hero-excavator.png" },
        { title: "Suministros Planta Alimentos", client: "Sector Privado", year: "2022", type: "Procura", desc: "Importación y montaje de líneas de empaquetado directo.", image: "/images/hero-excavator.png" },
        { title: "Subestación Eléctrica Industrial", client: "Sector Automotriz", year: "2023", type: "Eléctrico", desc: "Instalación de tableros de alta tensión y control SCADA.", image: "/images/hero-excavator.png" },
        { title: "Vialidad Pesada Zona Industrial", client: "Sector Público", year: "2023", type: "Civil", desc: "Pavimentación y estabilización de terrenos de alta carga.", image: "/images/hero-excavator.png" }
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

            <section className="px-6 py-20 border-b border-black">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-8xl md:text-[120px] font-black font-teko uppercase italic leading-[0.8] mb-12">
                        PORTAFOLIO <br /> <span className="underline decoration-4">EJECUTADO</span>
                    </h1>
                    <p className="text-2xl font-montserrat font-medium text-black leading-relaxed italic border-l-4 border-black pl-6 max-w-4xl">
                        Evidencia técnica de nuestra capacidad de ejecución en diversos sectores estratégicos de la nación.
                    </p>
                </div>
            </section>

            {/* Grid de Proyectos */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black">
                    {projects.map((p, i) => (
                        <article key={i} className="bg-white group p-1 w-full h-full">
                            <div className="aspect-video relative overflow-hidden">
                                <Image src={p.image} alt={p.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 font-teko text-xs uppercase tracking-widest">{p.type}</div>
                            </div>
                            <div className="p-10 space-y-6">
                                <div className="space-y-2">
                                    <span className="text-[9px] font-bold uppercase tracking-widest italic flex items-center gap-2">
                                        <Calendar size={10} /> {p.year} / {p.client}
                                    </span>
                                    <h3 className="text-4xl font-black font-teko uppercase italic leading-none">{p.title}</h3>
                                </div>
                                <p className="text-sm leading-relaxed min-h-[48px]">{p.desc}</p>
                                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group-hover:underline">
                                    Ver Ficha Técnica <ArrowRight size={12} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Users, Briefcase } from "lucide-react";

export default function ProyectosPage() {
    const projects = [
        { title: "Planta de TrituraciÃ³n â€” BolÃ­var", client: "Sector Minero", year: "2024", type: "Industrial", desc: "Montaje mecÃ¡nico completo y automatizaciÃ³n de procesos.", image: "/images/hero-excavator.webp" },
        { title: "Drenajes Sector Los Potocos", client: "Edo. AnzoÃ¡tegui", year: "2023", type: "Vialidad", desc: "Movimiento de tierra y canalizaciÃ³n de drenajes industriales.", image: "/images/hero-excavator.webp" },
        { title: "Mantenimiento Mayor Planta PDVSA", client: "Sector Petrolero", year: "2024", type: "EnergÃ­a", desc: "Overhaul de equipos rotativos y paradas de planta programadas.", image: "/images/hero-excavator.webp" },
        { title: "Suministros Planta Alimentos", client: "Sector Privado", year: "2022", type: "Procura", desc: "ImportaciÃ³n y montaje de lÃ­neas de empaquetado directo.", image: "/images/hero-excavator.webp" },
        { title: "SubestaciÃ³n ElÃ©ctrica Industrial", client: "Sector Automotriz", year: "2023", type: "ElÃ©ctrico", desc: "InstalaciÃ³n de tableros de alta tensiÃ³n y control SCADA.", image: "/images/hero-excavator.webp" },
        { title: "Vialidad Pesada Zona Industrial", client: "Sector PÃºblico", year: "2023", type: "Civil", desc: "PavimentaciÃ³n y estabilizaciÃ³n de terrenos de alta carga.", image: "/images/hero-excavator.webp" }
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
                        Evidencia tÃ©cnica de nuestra capacidad de ejecuciÃ³n en diversos sectores estratÃ©gicos de la naciÃ³n.
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
                                    Ver Ficha TÃ©cnica <ArrowRight size={12} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

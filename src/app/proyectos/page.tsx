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

            <section className="px-10 md:px-20 lg:px-32 py-32 border-b border-white/5 relative">
                <div className="absolute inset-0 bg-industrial-grid opacity-10 pointer-events-none"></div>

                <div className="max-w-[1800px] mx-auto space-y-10 relative z-10">
                    <div className="inline-flex items-center gap-6">
                        <span className="bg-brand-yellow text-brand-black px-4 py-1.5 text-[10px] font-black uppercase tracking-widest font-orbitron">
                            REGISTRO DE OPERACIONES
                        </span>
                        <div className="h-[1px] w-24 bg-brand-yellow/50"></div>
                    </div>

                    <h1 className="text-7xl md:text-[130px] font-black font-orbitron uppercase leading-[0.75] tracking-tightest">
                        PORTAFOLIO <br />
                        <span className="text-transparent stroke-brand-yellow" style={{ WebkitTextStroke: "2px #F2A900" }}>EJECUTADO</span>
                    </h1>

                    <p className="text-2xl md:text-3xl font-medium text-white/80 leading-snug italic border-l-[6px] border-brand-yellow pl-10 max-w-5xl">
                        Evidencia técnica de nuestra capacidad de ejecución en diversos <span className="text-brand-yellow">sectores estratégicos</span> de la nación. Proyectos de alto impacto.
                    </p>
                </div>
            </section>

            {/* Grid de Proyectos */}
            <section className="py-40 px-10 md:px-20 lg:px-32 relative">
                <div className="max-w-[1800px] mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {projects.map((p, i) => (
                        <article key={i} className="group relative bg-iron-light/30 border-iron iron-bevel overflow-hidden flex flex-col lg:flex-row transition-all duration-700 hover:bg-brand-yellow/5">
                            {/* Viewfinder Image Wrapper */}
                            <div className="w-full lg:w-1/2 aspect-video relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                                />
                                {/* Viewfinder Overlays */}
                                <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-yellow"></div>
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-yellow"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-yellow"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-yellow"></div>
                                </div>
                                <div className="absolute top-6 right-6 bg-brand-yellow text-brand-black px-4 py-1 font-orbitron text-[10px] font-black uppercase tracking-widest iron-bevel">
                                    {p.type}
                                </div>
                            </div>

                            <div className="p-12 lg:w-1/2 flex flex-col justify-between space-y-10 relative">
                                <div className="absolute inset-0 industrial-screws opacity-5 pointer-events-none"></div>

                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand-yellow/60 font-orbitron">
                                        <Calendar size={12} className="text-brand-yellow" /> {p.year} <span className="text-white/20">|</span> <MapPin size={12} className="text-brand-yellow" /> {p.client}
                                    </div>
                                    <h3 className="text-4xl font-black font-orbitron uppercase leading-none tracking-tight group-hover:text-brand-yellow transition-colors italic">
                                        {p.title}
                                    </h3>
                                    <p className="text-sm text-white/50 leading-relaxed italic border-l-2 border-white/10 pl-6 group-hover:text-white/80 transition-colors">
                                        {p.desc}
                                    </p>
                                </div>

                                <button className="relative z-10 inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] font-orbitron group-hover:text-brand-yellow transition-all">
                                    VER FICHA TÉCNICA <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

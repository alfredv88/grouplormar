import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Truck, HardHat, ShieldCheck, Settings } from "lucide-react";

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
                        MÁS DE UNA <br /> <span className="underline">DÉCADA</span> EN OBRA
                    </h1>

                    <div className="grid md:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <p className="text-2xl font-montserrat font-medium text-black/80 leading-relaxed italic border-l-4 border-black pl-6">
                                “Lormar nació de la necesidad de ofrecer un servicio de ingeniería que no solo planificara, sino que ejecutara con activos propios.”
                            </p>
                            <div className="space-y-6 text-sm opacity-70 leading-relaxed">
                                <p>Nuestra historia está forjada en el campo industrial venezolano. Desde nuestros inicios en Bolívar, nos hemos enfocado en la especialización técnica como valor diferenciador.</p>
                                <p>No somos solo consultores; somos ejecutores. Esa es la esencia de Grupo Lormar: la capacidad de movilizar maquinaria y personal calificado de forma inmediata para resolver problemas críticos de infraestructura.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-black text-white p-10 flex flex-col justify-between aspect-square">
                                <span className="text-5xl font-black font-teko tracking-tight">V</span>
                                <div>
                                    <h4 className="font-bold uppercase text-xs mb-2">Visión 2030</h4>
                                    <p className="text-[10px] opacity-60 leading-normal uppercase font-bold tracking-widest">Ser el referente nacional en montajes mecánicos de alta complejidad.</p>
                                </div>
                            </div>
                            <div className="border border-black p-10 flex flex-col justify-between aspect-square">
                                <span className="text-5xl font-black font-teko tracking-tight italic">M</span>
                                <div>
                                    <h4 className="font-bold uppercase text-xs mb-2">Misión</h4>
                                    <p className="text-[10px] opacity-60 leading-normal uppercase font-bold tracking-widest">Ejecutar ingeniería de vanguardia con seguridad absoluta.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Flota de Equipos (Active Page Highlight) */}
            <section className="py-32 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 space-y-4">
                        <h2 className="text-6xl font-black font-teko uppercase italic underline">FLOTA DE <br /> MAQUINARIA PROPIA</h2>
                        <p className="text-sm font-bold uppercase tracking-widest opacity-40">Mantenimiento propio / Disponibilidad inmediata</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-1 border-black bg-black">
                        {[
                            { name: "Excavadoras CAT 336D", qty: "06 Unidades", icon: <Truck size={32} /> },
                            { name: "Pavimentadoras de Asfalto", qty: "02 Unidades", icon: <HardHat size={32} /> },
                            { name: "Cargadores Frontales", qty: "04 Unidades", icon: <Truck size={32} /> },
                            { name: "Grúas de Montaje Mecánico", qty: "03 Unidades", icon: <Settings size={32} /> },
                            { name: "Volquetas 12m3", qty: "12 Unidades", icon: <Truck size={32} /> },
                            { name: "Planta de Asfalto Móvil", qty: "01 Unidad", icon: <ShieldCheck size={32} /> }
                        ].map((equip, idx) => (
                            <div key={idx} className="bg-white p-10 hover:invert transition-all duration-300 flex flex-col gap-6">
                                <div className="opacity-40">{equip.icon}</div>
                                <div>
                                    <h4 className="text-2xl font-black font-teko uppercase italic leading-none mb-2">{equip.name}</h4>
                                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{equip.qty}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Leaf, Users, Award, ShieldCheck, Globe, CheckCircle2 } from "lucide-react";

export default function ResponsabilidadPage() {
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

            {/* Hero Intermedio */}
            <section className="px-6 py-20 border-b border-black">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-8xl md:text-[120px] font-black font-teko uppercase italic leading-[0.8] mb-12">
                        VALORES QUE <br /> <span className="underline">ESTRUCTURAN</span>
                    </h1>
                    <p className="text-2xl font-montserrat font-medium text-black/80 leading-relaxed italic border-l-4 border-black pl-6 max-w-4xl">
                        Nuestra responsabilidad no termina en la entrega de la obra. Se extiende a la comunidad, al entorno ambiental y a la seguridad de nuestro personal.
                    </p>
                </div>
            </section>

            {/* Grid de Secciones Inspiradas en Conkor */}
            <section className="py-32 px-6 border-b border-black">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-px bg-black border border-black overflow-hidden rounded-lg">
                    <article className="bg-white p-12 space-y-12 transition-all hover:bg-slate-50 relative group">
                        <div className="absolute -top-10 -right-10 text-[180px] font-black font-teko text-black/[0.03] select-none pointer-events-none uppercase italic">ECO</div>
                        <Leaf size={48} className="mb-10 text-black/40 group-hover:text-black transition-colors" />
                        <h2 className="text-5xl font-black font-teko uppercase italic leading-none mb-4">Gestión <br /> Ambiental</h2>
                        <p className="text-sm font-montserrat leading-relaxed opacity-60">Implementamos programas de remediación de suelos y gestión de desechos industriales bajo normas MARNR.</p>
                        <ul className="space-y-3 pt-6">
                            {["Control de Emisiones", "Manejo de Efluentes", "Remediación de Pasivos"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40">
                                    <CheckCircle2 size={12} className="text-black" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="bg-black text-white p-12 space-y-12 transition-all hover:bg-zinc-800 relative group border-x border-white/10">
                        <div className="absolute -top-10 -right-10 text-[180px] font-black font-teko text-white/[0.03] select-none pointer-events-none uppercase italic">SOCIAL</div>
                        <Users size={48} className="mb-10 text-white/40 group-hover:text-white transition-colors" />
                        <h2 className="text-5xl font-black font-teko uppercase italic leading-none mb-4">Aporte <br /> Comunitario</h2>
                        <p className="text-sm font-montserrat leading-relaxed opacity-60">Fortalecemos el tejido social mediante el empleo local y el apoyo a las comunidades aledañas a nuestras bases operativas.</p>
                        <ul className="space-y-3 pt-6">
                            {["Becas Estudiantiles", "Obras Solidarias", "Empleo Local +80%"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-60">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="bg-white p-12 space-y-12 transition-all hover:bg-slate-50 relative group">
                        <div className="absolute -top-10 -right-10 text-[180px] font-black font-teko text-black/[0.03] select-none pointer-events-none uppercase italic">CERT</div>
                        <Award size={48} className="mb-10 text-black/40 group-hover:text-black transition-colors" />
                        <h2 className="text-5xl font-black font-teko uppercase italic leading-none mb-4">Garantía de <br /> Calidad</h2>
                        <p className="text-sm font-montserrat leading-relaxed opacity-60">Certificados por los entes reguladores nacionales e internacionales más exigentes de la industria.</p>
                        <ul className="space-y-3 pt-6">
                            {["RNC Vigente", "SENCAMER", "Normas ASTM / ASME"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 border-b border-black/5 pb-2">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            {/* Certificaciones Logos - Fila de Prestigio */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center grayscale opacity-30 gap-16">
                    <div className="text-2xl font-black font-teko uppercase">ISO 9001:2015</div>
                    <div className="text-2xl font-black font-teko uppercase border-2 border-black px-4 italic leading-none">RNC CERTIFIED</div>
                    <div className="text-2xl font-black font-teko uppercase underline decoration-4">ASME CODES</div>
                    <div className="text-2xl font-black font-teko uppercase">API STANDARDS</div>
                    <div className="text-2xl font-black font-teko uppercase font-bold tracking-widest text-xs">J-306579656</div>
                </div>
            </section>
        </main>
    );
}

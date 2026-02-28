import { ArrowLeft, MapPin, Factory, Phone, Mail, Clock, Send } from "lucide-react";
import Link from "next/link";

export default function ContactoPage() {
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
                        ASESORIA <br /> <span className="underline decoration-4">DIRECTA</span>
                    </h1>
                    <p className="text-2xl font-montserrat font-medium text-black/80 leading-relaxed italic border-l-4 border-black pl-6 max-w-4xl">
                        Inicia el proceso de cotización para tu proyecto industrial. Nuestro equipo de procura e ingeniería evaluará tu requerimiento de inmediato.
                    </p>
                </div>
            </section>

            {/* Formulario y Datos de Contacto */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                    {/* Formulario */}
                    <div className="space-y-12">
                        <h3 className="text-4xl font-black font-teko uppercase italic underline decoration-2 underline-offset-8">Solicitud Técnica</h3>
                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Nombre y Apellido</label>
                                    <input type="text" className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-black/30 transition-all font-montserrat text-sm" placeholder="Ej: Napoleón Bellaville" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Correo Corporativo</label>
                                    <input type="email" className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-black/30 transition-all font-montserrat text-sm" placeholder="ejemplo@empresa.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Área de Interés</label>
                                <select className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-black/30 transition-all font-montserrat text-sm uppercase font-bold tracking-widest">
                                    <option>Montaje Mecánico</option>
                                    <option>Obras Civiles</option>
                                    <option>Automatización</option>
                                    <option>Procura Internacional</option>
                                    <option>Otros</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Descripción del Proyecto</label>
                                <textarea rows={4} className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-black/30 transition-all font-montserrat text-sm" placeholder="Cuéntanos sobre el alcance, ubicación y tiempos estimados..."></textarea>
                            </div>
                            <button className="px-10 py-5 bg-black text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-widest w-full">
                                <Send size={16} /> Enviar Requerimiento
                            </button>
                        </form>
                    </div>

                    {/* Datos y Horarios */}
                    <div className="bg-slate-50 p-12 space-y-16 flex flex-col justify-between border-l border-black">
                        <div className="space-y-10">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-black text-white flex items-center justify-center border border-black shrink-0"><Phone size={20} /></div>
                                <div>
                                    <h4 className="text-xl font-black font-teko uppercase italic leading-none mb-2">Línea Directa</h4>
                                    <p className="text-sm font-bold uppercase tracking-widest opacity-40">+58 41418161629 / +58 4129448672</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-black text-white flex items-center justify-center border border-black shrink-0"><Mail size={20} /></div>
                                <div>
                                    <h4 className="text-xl font-black font-teko uppercase italic leading-none mb-2">Canal de Negocios</h4>
                                    <p className="text-sm font-bold uppercase tracking-widest opacity-40 underline underline-offset-4">negocios@grouplormar.com</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-black text-white flex items-center justify-center border border-black shrink-0"><Clock size={20} /></div>
                                <div>
                                    <h4 className="text-xl font-black font-teko uppercase italic leading-none mb-2">Horario Operativo</h4>
                                    <p className="text-sm font-bold uppercase tracking-widest opacity-40">Lunes — Viernes: 08:00 AM - 05:00 PM</p>
                                    <p className="text-[10px] italic opacity-40">Soporte 24/7 para emergencias críticas de planta.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-20 border-t border-black/10">
                            <div className="p-8 border-2 border-dashed border-black/30 text-center space-y-3">
                                <h5 className="font-black text-[10px] uppercase tracking-widest">¿Eres Proveedor?</h5>
                                <p className="text-[9px] font-montserrat opacity-40 uppercase font-bold tracking-widest">Escríbinos a procura@grouplormar.com con tu catálogo actualizado.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mapas en Contacto - Integrados de Home */}
            <section className="bg-white py-20 px-6 border-y border-black">
                <div className="max-w-7xl mx-auto space-y-12">
                    <h2 className="text-6xl font-black font-teko uppercase italic underline">NUESTRAS <br /> SEDES</h2>
                    <div className="grid md:grid-cols-2 gap-12 font-teko">
                        <div className="space-y-6">
                            <div className="aspect-video grayscale hover:grayscale-0 transition-all duration-700 bg-slate-200 border border-black overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.336!2d-64.678!3d10.183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c28ca3629571e19%3A0x6a1f1082c50e1898!2sLecher%C3%ADa!5e0!3m2!1ses!2sve!4v1709156000000!5m2!1ses!2sve"
                                    className="w-full h-full border-0"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2"><MapPin size={20} /> <h4 className="text-3xl font-black uppercase italic leading-none">Oficina Administrativa</h4></div>
                                <p className="text-sm font-montserrat font-bold uppercase tracking-[0.05em] opacity-40">Sector Las Garzas. Lechería - Anzoátegui.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="aspect-video grayscale hover:grayscale-0 transition-all duration-700 bg-slate-200 border border-black overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.5!2d-64.7!3d10.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c28ca8d963f45d5%3A0x3300f89816298517!2sBarcelona!5e0!3m2!1ses!2sve!4v1709156000000!5m2!1ses!2sve"
                                    className="w-full h-full border-0"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2"><Factory size={20} /> <h4 className="text-3xl font-black uppercase italic leading-none">Base Operativa</h4></div>
                                <p className="text-sm font-montserrat font-bold uppercase tracking-[0.05em] opacity-40">Sect. Los Potocos. Barcelona - Edo. Anzoátegui.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

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
                        Inicia el proceso de cotizaciÃ³n para tu proyecto industrial. Nuestro equipo de procura e ingenierÃ­a evaluarÃ¡ tu requerimiento de inmediato.
                    </p>
                </div>
            </section>

            {/* Formulario y Datos de Contacto */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                    {/* Formulario */}
                    <div className="space-y-12">
                        <h3 className="text-4xl font-black font-teko uppercase italic underline decoration-2 underline-offset-8">Solicitud TÃ©cnica</h3>
                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black">Nombre y Apellido</label>
                                    <input type="text" className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-black/30 transition-all font-montserrat text-sm" placeholder="Ej: NapoleÃ³n Bellaville" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black">Correo Corporativo</label>
                                    <input type="email" className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-black/30 transition-all font-montserrat text-sm" placeholder="ejemplo@empresa.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black">Ãrea de InterÃ©s</label>
                                <select className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-black/30 transition-all font-montserrat text-sm uppercase font-bold tracking-widest">
                                    <option>Montaje MecÃ¡nico</option>
                                    <option>Obras Civiles</option>
                                    <option>AutomatizaciÃ³n</option>
                                    <option>Procura Internacional</option>
                                    <option>Otros</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black">DescripciÃ³n del Proyecto</label>
                                <textarea rows={4} className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-black/30 transition-all font-montserrat text-sm" placeholder="CuÃ©ntanos sobre el alcance, ubicaciÃ³n y tiempos estimados..."></textarea>
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
                                <div className="space-y-4">
                                    <h4 className="text-xl font-black font-teko uppercase italic leading-none mb-2">LÃ­nea Directa</h4>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-black mb-1">NapoleÃ³n Bellaville</p>
                                        <p className="text-sm font-bold uppercase tracking-widest">+58 414 181 61 629</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-black mb-1">Brayhan Bellaville</p>
                                        <p className="text-sm font-bold uppercase tracking-widest">+58 412 944 86 72</p>
                                    </div>
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
                                    <p className="text-sm font-bold uppercase tracking-widest text-black">Lunes â€” Viernes: 08:00 AM - 05:00 PM</p>
                                    <p className="text-[10px] italic text-black">Soporte 24/7 para emergencias crÃ­ticas de planta.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-20 border-t border-black/10">
                            <div className="p-8 border-2 border-dashed border-black/30 text-center space-y-3">
                                <h5 className="font-black text-[10px] uppercase tracking-widest">Â¿Eres Proveedor?</h5>
                                <p className="text-[9px] font-montserrat text-black uppercase font-bold tracking-widest">EscrÃ­binos a procura@grouplormar.com con tu catÃ¡logo actualizado.</p>
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
                            <div className="aspect-video grayscale hover:grayscale-0 transition-all duration-700 bg-slate-200 border border-black overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps/d/u/0/embed?mid=17fVcJp0SYgXWSl1eCIFFLvQIRKkw5Ak&ehbc=2E312F"
                                    className="absolute top-[-52px] left-0 w-full h-[calc(100%+52px)] border-0"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2"><MapPin size={20} /> <h4 className="text-3xl font-black uppercase italic leading-none">Oficina Administrativa</h4></div>
                                <p className="text-sm font-montserrat font-bold uppercase tracking-[0.05em] text-black">AV. JORGE RODRÃGUEZ CC MT, NIVEL PB OF 05 SECTOR LAS GARZAS, LECHERÃA ANZOÃTEGUI. CP 6016</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="aspect-video grayscale hover:grayscale-0 transition-all duration-700 bg-slate-200 border border-black overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps/d/u/0/embed?mid=17fVcJp0SYgXWSl1eCIFFLvQIRKkw5Ak&ehbc=2E312F"
                                    className="absolute top-[-52px] left-0 w-full h-[calc(100%+52px)] border-0"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2"><Factory size={20} /> <h4 className="text-3xl font-black uppercase italic leading-none">Base Operativa</h4></div>
                                <p className="text-sm font-montserrat font-bold uppercase tracking-[0.05em] text-black">AUTOPISTA RÃ“MULO BETANCOURT, TERRENO S/N, SECTOR LOS POTOCOS, BARCELONA EDO. ANZOÃTEGUI.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

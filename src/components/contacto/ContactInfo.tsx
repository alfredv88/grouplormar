"use client";

import React from "react";
import { Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
    return (
        <div className="space-y-16 flex flex-col justify-between py-6">
            <div className="space-y-14">
                {/* Phone Section - Executive Directory */}
                <div className="flex gap-8 items-start group">
                    <div className="w-14 h-14 border border-7l-gold/30 text-7l-gold flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-7l-gold group-hover:text-7l-black">
                        <Phone size={24} />
                    </div>
                    <div className="space-y-6 w-full">
                        <h4 className="text-xl font-future uppercase leading-none text-white tracking-widest">Directorio Ejecutivo</h4>
                        
                        <div className="space-y-4 w-full max-w-lg">
                            {/* Napoleón Bellaville */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border border-white/5 bg-7l-black/40 hover:border-7l-gold/40 hover:bg-7l-black/80 transition-all duration-300 relative group/card">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-7l-gold scale-y-0 group-hover/card:scale-y-100 transition-transform origin-top"></div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-future uppercase tracking-widest text-7l-gold">Napoleón Bellaville</p>
                                    <p className="text-[11px] font-montserrat text-zinc-400 font-medium">Director Ejecutivo</p>
                                    <p className="text-sm font-montserrat font-bold text-white tracking-wider mt-1">+58 414 181 61 62</p>
                                </div>
                                <div className="flex items-center gap-2 self-start sm:self-center">
                                    <a 
                                        href="tel:+584141816162" 
                                        className="px-4 py-2 border border-white/10 text-[10px] font-montserrat font-black uppercase tracking-widest text-zinc-300 hover:text-white hover:border-7l-gold hover:bg-7l-gold/10 transition-all duration-300 flex items-center gap-2"
                                        title="Llamar directo"
                                    >
                                        <Phone size={12} />
                                        <span>Llamar</span>
                                    </a>
                                    <a 
                                        href="https://wa.me/584141816162" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-9 h-9 border border-white/10 text-zinc-300 hover:text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
                                        title="WhatsApp"
                                    >
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.59 1.973 14.12 .948 11.493.948c-5.438 0-9.863 4.371-9.867 9.801-.001 1.73.457 3.418 1.33 4.908l-.995 3.633 3.734-.972c1.456.797 2.923 1.189 4.352 1.189zm11.381-7.85c-.302-.15-1.787-.88-2.063-.98-.277-.1-.478-.15-.68.15-.201.3-.778.98-.954 1.18-.176.2-.352.225-.654.075-.302-.15-1.276-.47-2.43-1.499-.899-.8-1.505-1.79-1.682-2.09-.177-.3-.018-.462.133-.61.135-.134.302-.35.453-.524.151-.174.201-.3.302-.5.101-.2.05-.375-.025-.526-.075-.15-.68-1.64-.931-2.24-.246-.59-.495-.51-.68-.51-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.515s1.08 2.915 1.23 3.115c.15.2 2.126 3.245 5.15 4.554.719.311 1.28.497 1.717.637.722.23 1.38.197 1.901.12.58-.085 1.787-.73 2.038-1.43.252-.7.252-1.3.176-1.43-.076-.13-.277-.23-.579-.38z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Brayhan Bellaville */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border border-white/5 bg-7l-black/40 hover:border-7l-gold/40 hover:bg-7l-black/80 transition-all duration-300 relative group/card">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-7l-gold scale-y-0 group-hover/card:scale-y-100 transition-transform origin-top"></div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-future uppercase tracking-widest text-7l-gold">Brayhan Bellaville</p>
                                    <p className="text-[11px] font-montserrat text-zinc-400 font-medium">Director de Operaciones</p>
                                    <p className="text-sm font-montserrat font-bold text-white tracking-wider mt-1">+58 412 944 86 72</p>
                                </div>
                                <div className="flex items-center gap-2 self-start sm:self-center">
                                    <a 
                                        href="tel:+584129448672" 
                                        className="px-4 py-2 border border-white/10 text-[10px] font-montserrat font-black uppercase tracking-widest text-zinc-300 hover:text-white hover:border-7l-gold hover:bg-7l-gold/10 transition-all duration-300 flex items-center gap-2"
                                        title="Llamar directo"
                                    >
                                        <Phone size={12} />
                                        <span>Llamar</span>
                                    </a>
                                    <a 
                                        href="https://wa.me/584129448672" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-9 h-9 border border-white/10 text-zinc-300 hover:text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
                                        title="WhatsApp"
                                    >
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.59 1.973 14.12 .948 11.493.948c-5.438 0-9.863 4.371-9.867 9.801-.001 1.73.457 3.418 1.33 4.908l-.995 3.633 3.734-.972c1.456.797 2.923 1.189 4.352 1.189zm11.381-7.85c-.302-.15-1.787-.88-2.063-.98-.277-.1-.478-.15-.68.15-.201.3-.778.98-.954 1.18-.176.2-.352.225-.654.075-.302-.15-1.276-.47-2.43-1.499-.899-.8-1.505-1.79-1.682-2.09-.177-.3-.018-.462.133-.61.135-.134.302-.35.453-.524.151-.174.201-.3.302-.5.101-.2.05-.375-.025-.526-.075-.15-.68-1.64-.931-2.24-.246-.59-.495-.51-.68-.51-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.515s1.08 2.915 1.23 3.115c.15.2 2.126 3.245 5.15 4.554.719.311 1.28.497 1.717.637.722.23 1.38.197 1.901.12.58-.085 1.787-.73 2.038-1.43.252-.7.252-1.3.176-1.43-.076-.13-.277-.23-.579-.38z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mail Section */}
                <div className="flex gap-8 items-start group">
                    <div className="w-14 h-14 bg-7l-black text-7l-gold flex items-center justify-center border border-white/5 shrink-0 transition-all duration-500 group-hover:border-7l-gold/50">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-future uppercase leading-none mb-4 text-white tracking-widest">Canal de Negocios</h4>
                        <a href="mailto:negocios@grouplormar.com" className="text-lg font-montserrat font-light text-7l-gold hover:text-white transition-colors border-b border-7l-gold/30 pb-1">
                            negocios@grouplormar.com
                        </a>
                    </div>
                </div>

                {/* Hours Section */}
                <div className="flex gap-8 items-start group">
                    <div className="w-14 h-14 bg-7l-black text-7l-gold flex items-center justify-center border border-white/5 shrink-0 transition-all duration-500 group-hover:border-7l-gold/50">
                        <Clock size={24} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-future uppercase leading-none mb-2 text-white tracking-widest">Horario Operativo</h4>
                        <p className="text-sm font-montserrat font-light text-white/80">Lunes — Viernes: 08:00 AM - 05:00 PM</p>
                        <p className="text-[10px] font-montserrat font-medium text-7l-gold uppercase tracking-widest">Soporte 24/7 para emergencias críticas.</p>
                    </div>
                </div>
            </div>

            <div className="pt-10 border-t border-white/5">
                <div className="p-8 border border-white/5 bg-7l-black/40 text-center space-y-4 relative group hover:border-white/20 transition-all duration-500">
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-7l-gold opacity-0 group-hover:opacity-100 transition-all"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-7l-gold opacity-0 group-hover:opacity-100 transition-all"></div>
                    
                    <h5 className="font-future text-[11px] uppercase tracking-[0.3em] text-7l-gold">¿Eres Proveedor?</h5>
                    <p className="text-[10px] font-montserrat text-white/40 uppercase tracking-[0.2em]">
                        ENVÍANOS TU BROCHURE A: <span className="text-white/80">PROCURA@GROUPLORMAR.COM</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;

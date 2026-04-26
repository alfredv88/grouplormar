"use client";

import React from "react";
import { Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
    return (
        <div className="space-y-16 flex flex-col justify-between py-6">
            <div className="space-y-14">
                {/* Phone Section */}
                <div className="flex gap-8 items-start group">
                    <div className="w-14 h-14 border border-brand-yellow/30 text-brand-yellow flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-brand-yellow group-hover:text-brand-black">
                        <Phone size={24} />
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xl font-michroma uppercase leading-none text-white tracking-widest">Línea Directa</h4>
                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] font-michroma uppercase tracking-[0.2em] text-brand-yellow/60 mb-2">Napoleón Bellaville</p>
                                <p className="text-lg font-montserrat font-medium text-white leading-none">+58 414 181 61 62</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-michroma uppercase tracking-[0.2em] text-brand-yellow/60 mb-2">Brayhan Bellaville</p>
                                <p className="text-lg font-montserrat font-medium text-white leading-none">+58 412 944 86 72</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mail Section */}
                <div className="flex gap-8 items-start group">
                    <div className="w-14 h-14 bg-white/[0.03] text-brand-yellow flex items-center justify-center border border-white/10 shrink-0 transition-all duration-500 group-hover:border-brand-yellow/50">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-michroma uppercase leading-none mb-4 text-white tracking-widest">Canal de Negocios</h4>
                        <a href="mailto:negocios@grouplormar.com" className="text-lg font-montserrat font-light text-brand-yellow hover:text-white transition-colors border-b border-brand-yellow/30 pb-1">
                            negocios@grouplormar.com
                        </a>
                    </div>
                </div>

                {/* Hours Section */}
                <div className="flex gap-8 items-start group">
                    <div className="w-14 h-14 bg-white/[0.03] text-brand-yellow flex items-center justify-center border border-white/10 shrink-0 transition-all duration-500 group-hover:border-brand-yellow/50">
                        <Clock size={24} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-michroma uppercase leading-none mb-2 text-white tracking-widest">Horario Operativo</h4>
                        <p className="text-sm font-montserrat font-light text-white/80">Lunes — Viernes: 08:00 AM - 05:00 PM</p>
                        <p className="text-[10px] font-montserrat font-medium text-brand-yellow uppercase tracking-widest">Soporte 24/7 para emergencias críticas.</p>
                    </div>
                </div>
            </div>

            <div className="pt-10 border-t border-white/5">
                <div className="p-8 border border-white/10 bg-white/[0.02] text-center space-y-4">
                    <h5 className="font-michroma text-[11px] uppercase tracking-[0.3em] text-brand-yellow">¿Eres Proveedor?</h5>
                    <p className="text-[10px] font-montserrat text-white/40 uppercase tracking-[0.2em]">
                        ENVÍANOS TU BROCHURE A: <span className="text-white/80">PROCURA@GROUPLORMAR.COM</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;

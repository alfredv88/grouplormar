"use client";

import React from "react";
import { MapPin, Factory } from "lucide-react";

const ContactMaps = () => {
    return (
        <section className="bg-7l-black py-32 px-10 md:px-20 lg:px-32 border-t border-white/5 relative">
            <div className="absolute inset-0 bg-industrial-grid opacity-5 pointer-events-none"></div>

            <div className="max-w-[1800px] mx-auto space-y-20 relative z-10">
                <div className="space-y-4">
                    <h2 className="text-6xl md:text-[80px] font-future uppercase text-white leading-none">
                        NUESTRAS <br /> <span className="text-7l-gold">SEDES</span>
                    </h2>
                    <div className="h-[2px] w-32 bg-7l-gold"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Sede Lechería */}
                    <div className="space-y-8 group">
                        <div className="aspect-video transition-all duration-700 bg-white/5 border border-white/10 overflow-hidden relative scanline-hud">
                            <iframe
                                src="https://www.google.com/maps/d/u/0/embed?mid=17fVcJp0SYgXWSl1eCIFFLvQIRKkw5Ak&ehbc=2E312F"
                                className="absolute top-[-52px] left-0 w-full h-[calc(100%+52px)] border-0"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 group-hover:translate-x-2 transition-transform">
                                <MapPin size={28} className="text-7l-gold" /> 
                                <h4 className="text-2xl md:text-3xl font-future uppercase leading-none text-white">Oficina Administrativa</h4>
                            </div>
                            <p className="text-xs font-montserrat font-medium uppercase tracking-[0.1em] text-white/50 border-l-2 border-7l-gold pl-6 max-w-md">
                                AV. JORGE RODRÍGUEZ CC MT, NIVEL PB OF 05 SECTOR LAS GARZAS, LECHERÍA ANZOÁTEGUI. CP 6016
                            </p>
                        </div>
                    </div>

                    {/* Base Los Potocos */}
                    <div className="space-y-8 group">
                        <div className="aspect-video transition-all duration-700 bg-white/5 border border-white/10 overflow-hidden relative scanline-hud">
                            <iframe
                                src="https://www.google.com/maps/d/u/0/embed?mid=17fVcJp0SYgXWSl1eCIFFLvQIRKkw5Ak&ehbc=2E312F"
                                className="absolute top-[-52px] left-0 w-full h-[calc(100%+52px)] border-0"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 group-hover:translate-x-2 transition-transform">
                                <Factory size={28} className="text-7l-gold" /> 
                                <h4 className="text-2xl md:text-3xl font-future uppercase leading-none text-white">Base Operativa</h4>
                            </div>
                            <p className="text-xs font-montserrat font-medium uppercase tracking-[0.1em] text-white/50 border-l-2 border-7l-gold pl-6 max-w-md">
                                AUTOPISTA RÓMULO BETANCOURT, TERRENO S/N, SECTOR LOS POTOCOS, BARCELONA EDO. ANZOÁTEGUI.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMaps;

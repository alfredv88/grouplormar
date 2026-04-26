"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ServiciosCTA = () => {
    return (
        <section className="py-40 px-10 text-center relative overflow-hidden bg-7l-black border-t border-white/5">
            <div className="absolute inset-0 bg-industrial-grid opacity-5 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto space-y-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h2 className="text-5xl md:text-8xl font-syne font-black uppercase leading-tight text-white tracking-tighter">
                        ¿LISTO PARA <br /> <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(242,169,0,0.6)" }}>DESPLEGAR?</span>
                    </h2>
                    <p className="text-[10px] md:text-[12px] font-bold font-syncopate uppercase tracking-[0.5em] text-white/30">
                        ASESORÍA TÉCNICA ESPECIALIZADA SIN COMPROMISO
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="pt-8"
                >
                    <Link
                        href="/contacto"
                        className="inline-block px-12 py-6 bg-7l-gold text-7l-black font-bold uppercase tracking-[0.3em] font-syncopate text-[10px] hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(242,169,0,0.2)]"
                    >
                        CONTACTAR SOPORTE OPERATIVO
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiciosCTA;

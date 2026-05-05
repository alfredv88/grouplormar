'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const testimonials = [
    {
        name: "Ing. Roberto Méndez",
        role: "Sector Minero",
        text: "La capacidad técnica en el montaje de nuestra planta fue impecable. Cumplieron tiempos sin sacrificar seguridad.",
        rating: 5,
        initial: "R"
    },
    {
        name: "Arq. Carlos Castillo",
        role: "Sector Industrial",
        text: "Aliado estratégico para mantenimiento mayor. Maquinaria propia y personal altamente calificado.",
        rating: 5,
        initial: "C"
    },
    {
        name: "Luis Granados",
        role: "Planta Manufactura",
        text: "Excelente servicio de procura internacional. Repuestos críticos en tiempo récord ahorrando semanas de parada.",
        rating: 5,
        initial: "L"
    },
    {
        name: "Elena Vargas",
        role: "Proyectos Civiles",
        text: "Profesionalismo absoluto en el movimiento de tierras. Equipos modernos y operadores expertos.",
        rating: 5,
        initial: "E"
    },
    {
        name: "Marco Torres",
        role: "Ingeniería Mecánica",
        text: "Soluciones a medida para problemas complejos de piping. Altamente recomendados.",
        rating: 5,
        initial: "M"
    }
];

export default function CompactTestimonials() {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else setVisibleCount(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const next = () => setStartIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const visibleTestimonials = Array.from({ length: visibleCount }).map((_, i) =>
        testimonials[(startIndex + i) % testimonials.length]
    );

    return (
        <div className="w-full max-w-7xl mx-auto py-12">
            {/* Header Compacto Estilo Google */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 px-6 gap-6">
                <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-black font-montserrat tracking-tighter">EXCELENCIA</span>
                            <span className="text-sm font-bold font-montserrat uppercase tracking-widest opacity-30 italic">VALORADA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex text-black">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="black" />)}
                            </div>
                            <span className="text-[10px] font-bold font-montserrat uppercase tracking-widest opacity-60">4.9 / 5.0 GOOGLE REVIEWS</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={prev}
                        className="w-10 h-10 border border-black/10 hover:border-black flex items-center justify-center transition-all bg-white"
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={next}
                        className="w-10 h-10 border border-black/10 hover:border-black flex items-center justify-center transition-all bg-white"
                        aria-label="Siguiente"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* Grid de Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {visibleTestimonials.map((t, i) => (
                    <div
                        key={`${startIndex}-${i}`}
                        className="bg-white border border-black/5 p-8 flex flex-col justify-between hover:shadow-xl hover:border-black transition-all duration-300 min-h-[280px]"
                    >
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} size={12} fill="black" className="text-black" />
                                    ))}
                                </div>
                                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center opacity-40">
                                    <span className="text-[8px] font-black">G</span>
                                </div>
                            </div>
                            <p className="text-sm font-montserrat font-medium leading-relaxed text-black/70 italic">
                                “{t.text}”
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-4 border-t border-black/5 pt-6">
                            <div className="w-10 h-10 bg-black text-white shrink-0 flex items-center justify-center font-montserrat text-xl italic font-black">
                                {t.initial}
                            </div>
                            <div className="flex flex-col min-w-0">
                                <h4 className="text-sm font-black font-montserrat uppercase truncate italic leading-none">{t.name}</h4>
                                <div className="flex items-center gap-1.5 overflow-hidden">
                                    <span className="text-[9px] font-bold font-montserrat uppercase tracking-widest opacity-40 truncate">{t.role}</span>
                                    <div className="w-3 h-3 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                                        <Check size={8} className="text-green-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

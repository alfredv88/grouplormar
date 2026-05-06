"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ComplianceHSE() {
  const complianceHub = [
    { label: "RIF CORPORATIVO", status: "VERIFICADO", period: "2024-2025" },
    { label: "RACDA TRANSPORTE", status: "VIGENTE", period: "VÁLIDO HASTA 2025" },
    { label: "RACDA GENERADOR", status: "VIGENTE", period: "VÁLIDO HASTA 2025" },
    { label: "RNC HABILITADO", status: "ACTIVO", period: "ACTUALIZADO" },
  ];

  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative" id="compliance">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* SECTOR A: HSE STATEMENT */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-montserrat text-7l-gold text-[7px] font-bold tracking-[0.6em] uppercase block mb-6">
                Soberanía Operacional
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-future text-white uppercase tracking-normal leading-[1.1]">
                ESTATUS <br /> <span className="text-7l-gold">LEGAL</span>
              </h2>
              <p className="font-montserrat text-[14px] text-white leading-relaxed max-w-[350px] font-medium">
                Pilar de transparencia técnica y administrativa. Documentación auditada y vigente para operaciones críticas de ingeniería.
              </p>
            </div>
          </div>

          {/* SECTOR B: COMPLIANCE STATUS (MAX VISIBILITY) */}
          <div className="lg:col-span-7 space-y-8 relative">
            <div className="divide-y divide-white/10 border-t border-b border-white/10 relative z-10">
              {complianceHub.map((item, idx) => (
                <div key={idx} className="py-6 flex items-center justify-between group">
                  <div className="space-y-1">
                    <span className="font-montserrat text-[9px] text-white tracking-[0.3em] font-black block group-hover:text-7l-gold transition-colors">
                      {item.label}
                    </span>
                    {/* Minimalist Divider */}
                    <div className="w-10 h-[1.5px] bg-7l-gold"></div>
                    <span className="font-montserrat text-[8px] text-7l-gold font-bold tracking-[0.2em]">{item.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 px-5 py-2 rounded-none border border-white/20 group-hover:border-7l-gold transition-all duration-500 bg-white/5">
                       <CheckCircle2 size={12} className="text-green-400" />
                       <span className="font-montserrat text-[8px] text-white font-black tracking-widest uppercase">{item.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA TO INTERNAL DOSSIER (RESTORED BOUTIQUE STYLE) */}
            <div className="pt-8 px-2">
              <Link 
                href="/transparencia" 
                className="inline-flex items-center gap-4 border border-7l-gold/30 bg-transparent px-6 py-3 transition-all hover:border-7l-gold hover:bg-7l-gold/5 group rounded-none"
              >
                <span className="font-montserrat text-[9px] font-black text-white tracking-[0.4em] uppercase group-hover:text-7l-gold transition-colors duration-300">
                  DOSSIER LEGAL
                </span>
                <ArrowRight size={10} className="text-7l-gold transition-transform group-hover:translate-x-1.5 duration-300" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

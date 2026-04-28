"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ComplianceHSE() {
  const complianceHub = [
    { label: "RIF CORPORATIVO", status: "VERIFICADO", period: "2024-2025" },
    { label: "RACDA TRANSPORTE", status: "VIGENTE", period: "VALIDO HASTA 2025" },
    { label: "RACDA GENERADOR", status: "VIGENTE", period: "VALIDO HASTA 2025" },
    { label: "RNC HABILITADO", status: "ACTIVO", period: "UP TO DATE" },
  ];

  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative" id="compliance">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* SECTOR A: HSE STATEMENT */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-syncopate text-7l-gold text-[7px] font-bold tracking-[0.6em] uppercase block mb-6">
                Operational Sovereignty
              </span>
              <h2 className="text-5xl md:text-6xl font-future text-white uppercase tracking-tighter leading-[0.9]">
                ESTATUS <br /> <span className="text-7l-gold">LEGAL</span>
              </h2>
              <p className="font-montserrat text-[14px] text-white/50 leading-relaxed max-w-[350px] font-medium">
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
                    <span className="font-syncopate text-[9px] text-white tracking-[0.3em] font-black block group-hover:text-7l-gold transition-colors">
                      {item.label}
                    </span>
                    <span className="font-syncopate text-[8px] text-7l-gold font-bold tracking-[0.2em]">{item.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full border border-white/10 group-hover:border-7l-gold transition-all duration-500">
                       <CheckCircle2 size={12} className="text-green-400" />
                       <span className="font-syncopate text-[8px] text-white font-black tracking-widest uppercase">{item.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA TO INTERNAL DOSSIER (RESTORED BOUTIQUE STYLE) */}
            <div className="pt-8 px-2">
              <Link 
                href="/transparencia" 
                className="group inline-flex items-center gap-6 text-white hover:text-7l-gold transition-colors duration-500"
              >
                 <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-7l-gold group-hover:bg-7l-gold/10 transition-all duration-700 transform group-hover:scale-105">
                    <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-500" />
                 </div>
                 <div className="space-y-1">
                    <span className="font-syncopate text-[10px] font-black tracking-[0.3em] block">SOLICITAR DOSSIER LEGAL</span>
                    <span className="font-syncopate text-[7px] text-white/30 tracking-[0.2em] block uppercase">Technical & Legal Documentation Dashboard</span>
                 </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

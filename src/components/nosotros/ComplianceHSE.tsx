"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ComplianceHSE() {
  const t = useTranslations("NosotrosComplianceHSE");
  const complianceHub = t.raw("items") as { label: string; status: string; number: string; period: string }[];

  return (
    <section className="py-24 md:py-32 bg-[#060606] border-y border-white/5 relative font-montserrat" id="compliance">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Mitad Izquierda: Texto (50%) */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[2px] bg-7l-gold"></div>
                <span className="text-7l-gold text-[10px] font-bold uppercase tracking-[0.5em]">
                  {t("soporteLegal")}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-future text-white uppercase leading-tight">
                {t.rich("titulo", {
                  br: () => <br />,
                  gold: (chunks) => <span className="text-7l-gold">{chunks}</span>
                })}
              </h2>
              <p className="text-white/60 text-base md:text-lg font-light max-w-xl leading-relaxed">
                {t("descripcion")}
              </p>
            </div>
          </div>

          {/* Mitad Derecha: Lista de Certificados (50%) */}
          <div className="w-full lg:w-1/2 space-y-1 relative">
            <div className="divide-y divide-white/5 border-t border-b border-white/5 relative z-10">
              {complianceHub.map((item, idx) => (
                <div key={idx} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                  
                  {/* Info */}
                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-7l-gold rounded-full group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-[10px] text-white tracking-[0.2em] font-bold uppercase block group-hover:text-7l-gold transition-colors">
                        {item.label}
                      </span>
                    </div>
                    
                    <div className="pl-[18px] flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-mono text-sm text-7l-gold font-bold tracking-wider block">
                        {item.number}
                      </span>
                      <span className="text-[9px] text-white/40 font-bold tracking-widest block uppercase">
                        • {item.period}
                      </span>
                    </div>
                  </div>
                  
                  {/* Status Tag */}
                  <div className="flex items-center sm:justify-end shrink-0 pl-[18px] sm:pl-0">
                    <div className="flex items-center gap-3 px-4 py-1.5 border border-white/10 group-hover:border-7l-gold/30 transition-all duration-500 bg-white/[0.01]">
                       <CheckCircle2 size={11} className="text-green-500" />
                       <span className="text-[9px] text-white font-bold tracking-widest uppercase">{item.status}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

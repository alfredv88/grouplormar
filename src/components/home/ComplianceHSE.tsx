"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ComplianceHSE() {
  const t = useTranslations("ComplianceHSE");
  const complianceHub = t.raw("items") as { label: string; status: string; number: string; period: string }[];

  return (
    <section className="py-24 md:py-28 bg-[#060606] border-y border-white/5 relative" id="compliance">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* SECTOR A: HSE STATEMENT */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-montserrat text-7l-gold text-[8px] font-black tracking-[0.5em] uppercase block mb-4">
                {t("soberania")}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-future text-white uppercase tracking-normal leading-[1.1]">
                {t.rich("titulo", {
                  br: () => <br />,
                  gold: (chunks) => <span className="text-7l-gold">{chunks}</span>
                })}
              </h2>
              <div className="w-16 h-[2px] bg-7l-gold mt-6 mb-8" />
              <p className="font-montserrat text-[13px] text-zinc-400 leading-relaxed max-w-sm font-medium">
                {t("descripcion")}
              </p>
            </div>
          </div>

          {/* SECTOR B: COMPLIANCE STATUS (MAX VISIBILITY) */}
          <div className="lg:col-span-7 space-y-10 relative">
            <div className="divide-y divide-white/10 border-t border-b border-white/10 relative z-10">
              {complianceHub.map((item, idx) => (
                <div key={idx} className="py-[26px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-7l-gold rounded-full shrink-0 animate-pulse" />
                      <span className="font-montserrat text-[10px] text-white tracking-[0.3em] font-black uppercase block group-hover:text-7l-gold transition-colors">
                        {item.label}
                      </span>
                    </div>
                    
                    <div className="pl-[18px] flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-mono text-[14px] text-7l-gold font-black tracking-wider block">
                        {item.number}
                      </span>
                      <span className="font-montserrat text-[9px] text-white/40 font-bold tracking-widest block uppercase">
                        • {item.period}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center sm:justify-end shrink-0 pl-[18px] sm:pl-0">
                    <div className="flex items-center gap-3 px-4 py-2 rounded-none border border-white/10 group-hover:border-7l-gold transition-all duration-500 bg-white/[0.01]">
                       <CheckCircle2 size={11} className="text-green-500" />
                       <span className="font-montserrat text-[8px] text-white font-black tracking-widest uppercase">{item.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA TO INTERNAL DOSSIER (SOLID GOLD LUXURY STYLE) */}
            <div className="pt-4 px-2">
              <Link 
                href="/responsabilidad#dossier" 
                className="inline-flex items-center gap-6 bg-7l-gold px-8 py-4 hover:bg-7l-gold/90 transition-all duration-300 group rounded-none"
              >
                <span className="font-montserrat text-[10px] font-black text-black tracking-[0.4em] uppercase">
                  {t("verSoporte")}
                </span>
                <ArrowRight size={12} className="text-black transition-transform group-hover:translate-x-1.5 duration-300" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-7l-black pt-40 pb-0 border-t border-white/5 relative overflow-hidden" id="contacto">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-7l-gold/[0.03] to-transparent pointer-events-none"></div>

      <div className="w-full max-w-[1800px] mx-auto relative z-10 px-10 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          
          {/* Branding Column */}
          <div className="lg:col-span-12 xl:col-span-4 space-y-12">
            <Link href="/" className="block">
              <div className="relative w-80 h-16">
                <Image 
                    src="/logos/logo lormar blanco.webp" 
                    alt="Logo Grupo Lormar Industrial" 
                    fill 
                    className="object-contain object-left" 
                />
              </div>
            </Link>
            
            <div className="max-w-md space-y-8">
              <p className="text-gray-300 text-[15px] font-montserrat leading-relaxed font-light border-l border-7l-gold/30 pl-8">
                Liderazgo industrial con <span className="text-white font-bold tracking-widest uppercase">activos propios</span>. Ejecución técnica de alto nivel para los sectores estratégicos de Venezuela desde 2010.
              </p>
              
              <div className="flex gap-8 pt-4">
                {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                  <Link 
                    key={i} 
                    href="#" 
                    className="relative text-gray-400 hover:text-7l-gold group transition-all duration-300 pb-2"
                  >
                    <Icon size={20} className="transition-transform duration-500 group-hover:-translate-y-1" />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-7l-gold transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Location / Technical Center */}
          <div className="lg:col-span-6 xl:col-span-4 space-y-12">
             <div className="space-y-4">
               <span className="text-7l-gold text-[9px] font-bold uppercase tracking-[0.6em] font-syncopate">CENTROS OPERATIVOS</span>
               <h4 className="text-4xl font-syne font-black text-white uppercase tracking-tighter">ESTADO <br/> ANZOÁTEGUI</h4>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-7l-gold tracking-widest font-syncopate uppercase">DOMICILIO FISCAL</p>
                  <p className="text-gray-300 font-montserrat text-[13px] leading-relaxed">
                    Av. Jorge Rodríguez CC MT Nivel PB Local 05. <br/>
                    Sector Las Garzas, Lechería.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-7l-gold tracking-widest font-syncopate uppercase">DOMICILIO RACDA</p>
                  <p className="text-gray-300 font-montserrat text-[13px] leading-relaxed">
                    Sector Palotal Calle Ricaurte, al lado Cir. Militar. <br/>
                    Barcelona, Estado Anzoátegui.
                  </p>
                </div>
             </div>

             <div className="pt-10 border-t border-white/10 space-y-4">
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-4 text-gray-200">
                      <Phone size={14} className="text-7l-gold" />
                      <span className="text-[10px] font-syncopate tracking-widest"><span className="text-gray-400 text-[8px] mr-2 text-nowrap">NAPOLEÓN B.</span> +58 414 181 61 62</span>
                   </div>
                   <div className="flex items-center gap-4 text-gray-200">
                      <Phone size={14} className="text-7l-gold" />
                      <span className="text-[10px] font-syncopate tracking-widest"><span className="text-gray-400 text-[8px] mr-2 text-nowrap">BRAYHAN B.</span> +58 412 944 86 72</span>
                   </div>
                </div>
                <div className="flex items-center gap-4 text-gray-200 pt-2">
                   <Mail size={14} className="text-7l-gold" />
                   <span className="text-[10px] font-syncopate tracking-widest">NEGOCIOS@GROUPLORMAR.COM</span>
                </div>
             </div>
          </div>

          {/* TECHNICAL COMPLIANCE HUB: REDESIGNED */}
          <div className="lg:col-span-6 xl:col-span-4 lg:pl-10">
            <div className="space-y-10 relative">
               <div className="space-y-2">
                 <span className="text-7l-gold text-[9px] font-bold uppercase tracking-[0.6em] font-syncopate">AUDITORÍA Y REGISTROS</span>
                 <h4 className="text-xl font-syne font-black text-white uppercase tracking-widest">TECHNICAL COMPLIANCE</h4>
               </div>

               <div className="space-y-px">
                 {/* Item RIF */}
                 <div className="group flex items-center justify-between py-5 border-b border-white/10 hover:border-7l-gold/30 transition-colors">
                   <div className="space-y-1">
                     <p className="text-[8px] font-bold text-7l-gold uppercase tracking-[0.4em] font-syncopate">IDENTIFICACIÓN FISCAL</p>
                     <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest font-syncopate">RIF VENEZUELA</p>
                   </div>
                   <span className="text-sm font-future text-white tracking-[0.2em]">J-306579656</span>
                 </div>

                 {/* Item RACDA */}
                 <div className="group flex items-center justify-between py-5 border-b border-white/10 hover:border-7l-gold/30 transition-colors">
                   <div className="space-y-1">
                     <p className="text-[8px] font-bold text-7l-gold uppercase tracking-[0.4em] font-syncopate">REGISTRO RACDA</p>
                     <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest font-syncopate">GEN-03-04-TSMDP-2024</p>
                   </div>
                   <span className="text-[10px] font-future text-7l-gold tracking-widest uppercase">HABILITADO</span>
                 </div>

                 {/* Item RNC */}
                 <div className="group flex items-center justify-between py-5 border-b border-white/10 hover:border-7l-gold/30 transition-colors">
                   <div className="space-y-1">
                     <p className="text-[8px] font-bold text-7l-gold uppercase tracking-[0.4em] font-syncopate">NR CORREATIVO RNC</p>
                     <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest font-syncopate">SNC-2025060651014</p>
                   </div>
                   <span className="text-sm font-future text-white tracking-[0.2em]">ACTIVO</span>
                 </div>
               </div>

               <div className="pt-8">
                 <Link href="/portafolio" className="group flex items-center gap-4 text-gray-300 hover:text-7l-gold transition-all">
                    <div className="w-8 h-[1px] bg-7l-gold/40 group-hover:w-12 transition-all"></div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.5em] font-syncopate">Explorar Portafolio de Obras</span>
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                 </Link>
               </div>
            </div>
          </div>

        </div>

      </div>

      {/* FINAL SEAL BAR: HIGH CONTRAST WHITE */}
      <div className="mt-20 bg-white py-12 px-10 md:px-20 lg:px-32">
        <div className="w-full max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[9px] font-bold font-syncopate uppercase tracking-[0.4em] text-black/40">
            <Link href="/servicios" className="hover:text-7l-gold transition-colors">CAPACIDADES</Link>
            <Link href="/portafolio" className="hover:text-7l-gold transition-colors">PORTAFOLIO</Link>
            <Link href="/nosotros" className="hover:text-7l-gold transition-colors">CORPORATIVO</Link>
            <Link href="/contacto" className="hover:text-7l-gold transition-colors">CONTACTO</Link>
          </nav>
          
          <div className="flex flex-col md:items-end gap-1 text-center md:text-right">
            <p className="text-[9px] font-bold text-black/70 uppercase tracking-[0.3em] font-syncopate">
              © 2026 <span className="text-7l-gold">GRUPO LORMAR</span> • VENEZUELA
            </p>
            <p className="text-[7px] font-bold text-black/30 uppercase tracking-[0.5em] font-syncopate">
              PRECISIÓN INDUSTRIAL AL SERVICIO DEL PAÍS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

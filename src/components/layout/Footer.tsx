"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');

  return (
    <footer className="bg-7l-black pt-20 md:pt-40 pb-0 border-t border-white/5 relative overflow-hidden" id="contacto">

      <div className="w-full max-w-[1800px] mx-auto relative z-10 px-10 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 mb-16 md:mb-24 lg:mb-32">
          
          {/* Columna de Marca */}
          <div className="md:col-span-2 lg:col-span-12 xl:col-span-4 space-y-12">
            <Link href="/" className="block">
              <div className="relative w-56 md:w-80 h-12 md:h-16">
                <Image 
                    src="/logos/logo lormar blanco.webp" 
                    alt="Logo Grupo Lormar Industrial" 
                    fill 
                    className="object-contain object-left" 
                />
              </div>
            </Link>
            
            <div className="max-w-md space-y-8">
              <p className="text-white text-[15px] font-montserrat leading-relaxed font-medium border-l-2 border-7l-gold pl-8">
                {t.rich('descripcion', {
                  gold: (chunks) => <span className="text-7l-gold font-black tracking-widest uppercase">{chunks}</span>
                })}
              </p>
            </div>
          </div>

          {/* Location / Technical Center */}
          <div className="lg:col-span-6 xl:col-span-4 space-y-10">
             <div className="space-y-4">
               <span className="text-7l-gold text-[9px] font-black uppercase tracking-[0.6em] font-montserrat">{t('centrosOperativos')}</span>
               <h4 className="text-4xl font-montserrat font-black text-white uppercase tracking-tighter">ESTADO <br/> ANZOÁTEGUI</h4>
             </div>
             
             <div className="grid grid-cols-1 gap-10 pt-4">
                  <div className="space-y-3">
                    <p className="text-[10px] font-black text-7l-gold tracking-widest font-montserrat uppercase">{t('domicilioFiscal')}</p>
                    <p className="text-white font-montserrat text-[13px] leading-relaxed">
                      {t.rich('domicilioContenido', {
                        br: () => <br />
                      })}
                    </p>
                  </div>
             </div>
          </div>

          {/* DIRECTORIO EJECUTIVO: REDESIGNED & MOVED TO RIGHT COLUMN */}
          <div className="lg:col-span-6 xl:col-span-4 lg:pl-10">
            <div className="space-y-8 relative">
                <div className="space-y-2">
                  <span className="text-7l-gold text-[9px] font-black uppercase tracking-[0.6em] font-montserrat">{t('directorioEjecutivo')}</span>
                  <h4 className="text-xl font-montserrat font-black text-white uppercase tracking-widest">{t('contactoDirecto')}</h4>
                </div>

                <div className="space-y-1">
                     {/* Napoleón Bellaville */}
                     <div className="flex items-center justify-between gap-4 py-3 border-b border-white/[0.06] hover:border-7l-gold/30 transition-all duration-300 group">
                        <div className="space-y-0.5">
                           <p className="text-[11px] font-black tracking-widest text-white uppercase font-montserrat transition-colors group-hover:text-7l-gold">NAPOLEÓN BELLAVILLE</p>
                           <p className="text-[9px] font-bold text-zinc-500 tracking-wider uppercase font-montserrat">{t('presidenteEjecutivo')}</p>
                        </div>
                        <div className="flex items-center gap-2">
                           <a 
                              href="tel:+584141816162" 
                              className="w-7 h-7 rounded-none border border-white/10 flex items-center justify-center hover:border-7l-gold hover:bg-7l-gold/10 text-zinc-500 hover:text-7l-gold transition-all duration-300"
                              title="Llamar directo"
                           >
                              <Phone size={11} />
                           </a>
                           <a 
                              href="https://wa.me/584141816162" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-7 h-7 rounded-none border border-white/10 flex items-center justify-center hover:border-green-500 hover:bg-green-500/10 text-zinc-500 hover:text-green-400 transition-all duration-300"
                              title="Enviar WhatsApp"
                           >
                              {/* Discrete WhatsApp SVG */}
                              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                 <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.59 1.973 14.12 .948 11.493.948c-5.438 0-9.863 4.371-9.867 9.801-.001 1.73.457 3.418 1.33 4.908l-.995 3.633 3.734-.972c1.456.797 2.923 1.189 4.352 1.189zm11.381-7.85c-.302-.15-1.787-.88-2.063-.98-.277-.1-.478-.15-.68.15-.201.3-.778.98-.954 1.18-.176.2-.352.225-.654.075-.302-.15-1.276-.47-2.43-1.499-.899-.8-1.505-1.79-1.682-2.09-.177-.3-.018-.462.133-.61.135-.134.302-.35.453-.524.151-.174.201-.3.302-.5.101-.2.05-.375-.025-.526-.075-.15-.68-1.64-.931-2.24-.246-.59-.495-.51-.68-.51-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.515s1.08 2.915 1.23 3.115c.15.2 2.126 3.245 5.15 4.554.719.311 1.28.497 1.717.637.722.23 1.38.197 1.901.12.58-.085 1.787-.73 2.038-1.43.252-.7.252-1.3.176-1.43-.076-.13-.277-.23-.579-.38z" />
                              </svg>
                           </a>
                        </div>
                     </div>

                     {/* Brayhan Bellaville */}
                     <div className="flex items-center justify-between gap-4 py-3 border-b border-white/[0.06] hover:border-7l-gold/30 transition-all duration-300 group">
                        <div className="space-y-0.5">
                           <p className="text-[11px] font-black tracking-widest text-white uppercase font-montserrat transition-colors group-hover:text-7l-gold">BRAYHAN BELLAVILLE</p>
                           <p className="text-[9px] font-bold text-zinc-500 tracking-wider uppercase font-montserrat">{t('vicepresidenteEjecutivo')}</p>
                        </div>
                        <div className="flex items-center gap-2">
                           <a 
                              href="tel:+584129448672" 
                              className="w-7 h-7 rounded-none border border-white/10 flex items-center justify-center hover:border-7l-gold hover:bg-7l-gold/10 text-zinc-500 hover:text-7l-gold transition-all duration-300"
                              title="Llamar directo"
                           >
                              <Phone size={11} />
                           </a>
                           <a 
                              href="https://wa.me/584129448672" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-7 h-7 rounded-none border border-white/10 flex items-center justify-center hover:border-green-500 hover:bg-green-500/10 text-zinc-500 hover:text-green-400 transition-all duration-300"
                              title="Enviar WhatsApp"
                           >
                              {/* Discrete WhatsApp SVG */}
                              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                 <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.59 1.973 14.12 .948 11.493.948c-5.438 0-9.863 4.371-9.867 9.801-.001 1.73.457 3.418 1.33 4.908l-.995 3.633 3.734-.972c1.456.797 2.923 1.189 4.352 1.189zm11.381-7.85c-.302-.15-1.787-.88-2.063-.98-.277-.1-.478-.15-.68.15-.201.3-.778.98-.954 1.18-.176.2-.352.225-.654.075-.302-.15-1.276-.47-2.43-1.499-.899-.8-1.505-1.79-1.682-2.09-.177-.3-.018-.462.133-.61.135-.134.302-.35.453-.524.151-.174.201-.3.302-.5.101-.2.05-.375-.025-.526-.075-.15-.68-1.64-.931-2.24-.246-.59-.495-.51-.68-.51-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.515s1.08 2.915 1.23 3.115c.15.2 2.126 3.245 5.15 4.554.719.311 1.28.497 1.717.637.722.23 1.38.197 1.901.12.58-.085 1.787-.73 2.038-1.43.252-.7.252-1.3.176-1.43-.076-.13-.277-.23-.579-.38z" />
                              </svg>
                           </a>
                        </div>
                     </div>
                </div>

                <div className="pt-6 space-y-4 border-t border-white/[0.06]">
                  <a 
                     href="mailto:negocios@grouplormar.com"
                     className="flex items-center gap-3.5 text-gray-400 hover:text-7l-gold transition-colors duration-300 group/mail"
                  >
                     <Mail size={12} className="text-7l-gold group-hover/mail:scale-110 transition-transform" />
                     <span className="text-[10px] font-montserrat tracking-widest font-bold">NEGOCIOS@GROUPLORMAR.COM</span>
                  </a>

                  <div className="pt-1">
                    <Link href="/servicios" className="group flex items-center gap-4 text-gray-300 hover:text-7l-gold transition-all">
                       <div className="w-8 h-[1px] bg-7l-gold group-hover:w-12 transition-all"></div>
                       <span className="text-[9px] font-black uppercase tracking-[0.5em] font-montserrat">{t('explorarCapacidades')}</span>
                       <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </div>
                </div>
            </div>
          </div>

        </div>

      </div>

      {/* FINAL SEAL BAR: HIGH CONTRAST WHITE */}
      <div className="mt-10 md:mt-20 bg-white py-8 md:py-12 px-6 md:px-20 lg:px-32">
        <div className="w-full max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-black font-montserrat uppercase tracking-[0.4em] text-black">
            <Link href="/servicios" className="hover:text-7l-gold transition-colors">{tNav('servicios')}</Link>
            <Link href="/maquinaria" className="hover:text-7l-gold transition-colors">{tNav('maquinaria')}</Link>
            <Link href="/nosotros" className="hover:text-7l-gold transition-colors">{tNav('nosotros')}</Link>
            <Link href="/contacto" className="hover:text-7l-gold transition-colors">{tNav('cotizar')}</Link>
          </nav>
          
          <div className="flex flex-col md:items-end gap-1.5 text-center md:text-right">
            <span className="block text-[10px] font-black text-zinc-900 uppercase tracking-[0.3em] font-montserrat">
              © 2026 <span className="text-7l-gold font-black">GRUPO LORMAR</span> • VENEZUELA
            </span>
            <span className="block text-[8px] font-bold text-zinc-600 uppercase tracking-[0.5em] font-montserrat">
              {t('precisionIndustrial')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

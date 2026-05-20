"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const links = [
    { href: "/", label: "INICIO" },
    { href: "/nosotros", label: "NOSOTROS" },
    { href: "/servicios", label: "SERVICIOS" },
    { href: "/maquinaria", label: "MAQUINARIA" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 40);
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* ── TOP BAR (Utility / Institutional - Static, scrolls out of view) ── */}
      <div className="h-10 w-full hidden md:flex items-center bg-7l-black relative z-50 border-b border-white/5">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-32 flex items-center justify-between">
          {/* Left: ID Corporativo */}
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-white tracking-[0.2em] uppercase hidden sm:block">
              J-30657965-6
            </span>
          </div>

           {/* Right: Contact Utilities & Social */}
          <div className="flex items-center gap-8">
              <div className="flex items-center gap-8">
                <a href="tel:+584141816152" className="flex items-center gap-2 group transition-colors">
                  <Phone size={12} className="text-7l-gold" />
                  <span className="font-mono text-[10px] text-white tracking-wider">+58 414 181 61 52</span>
                </a>
                <a href="mailto:negocios@grouplormar.com" className="flex items-center gap-2 group transition-colors">
                  <Mail size={12} className="text-7l-gold" />
                  <span className="font-mono text-[10px] text-white tracking-wider uppercase">negocios@grouplormar.com</span>
                </a>
              </div>
            
            <div className="flex items-center gap-5">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white hover:text-7l-gold transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FIXED MAIN NAVBAR (Transitions smoothly from top-10 to top-0 on scroll) ── */}
      <motion.div
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? "top-0" : "md:top-10 top-0"}`}
      >

        {/* ── MAIN NAV ── */}
        <div
          className={`w-full transition-all duration-500 ${
            isScrolled || isOpen
              ? "bg-white shadow-[0_4px_30px_rgba(0,0,0,0.08)] py-1.5"
              : "bg-transparent py-3"
          }`}
        >
          <div className="w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-32 h-[58px] flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className={`relative transition-all duration-500 ${(isScrolled || isOpen) ? "w-36 h-9" : "w-48 h-12"}`}>
                <Image
                  src={(isScrolled || isOpen) ? "/logos/logo lormar sin rif gris.webp" : "/logos/logo lormar sin rif.webp"}
                  alt="Logo Grupo Lormar Industrial"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-10 lg:gap-14">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative group/link pb-1 font-montserrat text-[13px] font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-7l-gold"
                      : isScrolled ? "text-[#1A1A1A] hover:text-[#080808]" : "text-white hover:text-7l-gold"
                  }`}
                >
                  {link.label}
                  {/* Active underline gold */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-7l-gold transition-all duration-400 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover/link:w-full"
                    }`}
                  />
                </Link>
              ))}

              {/* CTA COTIZAR */}
              <Link
                href="/contacto"
                className="group relative px-6 py-3 bg-7l-gold text-7l-black font-montserrat font-black tracking-[0.3em] text-[10px] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(242,169,0,0.35)] hover:scale-105"
              >
                COTIZAR
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 transition-colors rounded-sm ${isScrolled ? 'text-[#1A1A1A]' : 'text-white bg-black/20 backdrop-blur-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 200 }}
            className="fixed inset-0 z-[45] bg-white pt-36 px-10 flex flex-col gap-8 md:hidden"
          >
            <div className="flex flex-col gap-0 border-t border-[#E8E8E8]">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-6 font-montserrat text-2xl uppercase tracking-widest flex items-center justify-between group border-b border-[#E8E8E8]"
                >
                  <span
                    className={
                      pathname === link.href
                        ? "text-7l-gold"
                        : "text-[#1A1A1A] group-hover:text-7l-gold transition-colors"
                    }
                  >
                    {link.label}
                  </span>
                  <span className="text-[#E8E8E8] group-hover:text-7l-gold transition-colors text-xl">→</span>
                </Link>
              ))}
            </div>

            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="mt-8 py-5 bg-7l-gold text-7l-black font-montserrat font-black tracking-[0.4em] text-sm uppercase text-center"
            >
              SOLICITAR COTIZACIÓN
            </Link>

            <div className="mt-auto pb-10 flex flex-col gap-4 border-t border-[#E8E8E8] pt-8">
              <a href="tel:+584141816162" className="flex items-center gap-3 text-[#6B7280]">
                <Phone size={14} className="text-7l-gold" />
                <span className="font-montserrat text-[10px] tracking-wider">+58 414 181 61 62</span>
              </a>
              <a href="mailto:negocios@grouplormar.com" className="flex items-center gap-3 text-[#6B7280]">
                <Mail size={14} className="text-7l-gold" />
                <span className="font-montserrat text-[10px] tracking-wider">NEGOCIOS@GROUPLORMAR.COM</span>
              </a>
              {/* Social Icons */}
              <div className="flex items-center gap-5 pt-2">
                {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-[#9CA3AF] hover:text-7l-gold transition-colors duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

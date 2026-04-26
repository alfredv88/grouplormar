"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const links = [
    { href: "/", label: "INICIO" },
    { href: "/servicios", label: "SERVICIOS" },
    { href: "/portafolio", label: "PORTAFOLIO" },
    { href: "/nosotros", label: "EMPRESA" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 50);
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav 
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isOpen ? "bg-7l-black/90 backdrop-blur-2xl py-4" : "bg-transparent py-10"
        }`}
      >
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-24 lg:px-44 h-16 flex items-center justify-between relative z-10">
          
          <Link href="/" className="group flex items-center gap-4">
            <div className={`relative transition-all duration-500 ${isScrolled ? "w-36 h-9" : "w-44 h-11"}`}>
              <Image
                src="/logos/logo lormar sin rif.webp"
                alt="Logo Grupo Lormar Industrial"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-12 lg:gap-16 text-[10px] font-syne font-extrabold uppercase tracking-[0.4em]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 transition-all duration-300 relative group/link ${
                  pathname === link.href ? "text-7l-gold" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-7l-gold transition-all duration-500 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover/link:w-full"
                }`}></span>
              </Link>
            ))}
            
            <Link
              href="/contacto"
              className="group relative px-10 py-3 border border-white/10 font-syne font-black tracking-[0.4em] text-[9px] overflow-hidden transition-all duration-500 hover:border-7l-gold"
            >
              <span className="relative z-10 text-white group-hover:text-7l-black transition-colors duration-500">COTIZAR</span>
              <div className="absolute inset-0 bg-7l-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-7l-gold transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[45] bg-7l-black pt-32 px-10 flex flex-col gap-8 md:hidden"
          >
            <div className="flex flex-col gap-10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-future text-4xl text-white tracking-widest uppercase flex items-center justify-between group"
                >
                  <span className={pathname === link.href ? "text-7l-gold" : "text-white/40"}>{link.label}</span>
                  <div className="w-12 h-[1px] bg-white/10 group-hover:w-full group-hover:bg-7l-gold transition-all duration-500"></div>
                </Link>
              ))}
            </div>
            
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="mt-20 py-8 border-t border-white/5 font-syne font-black tracking-[0.6em] text-xs text-7l-gold uppercase text-center"
            >
              SOLICITAR COTIZACIÓN
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

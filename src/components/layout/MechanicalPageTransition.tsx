"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MechanicalPageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 0.8s de visualización premium del logo y carga
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#0d0d0d] z-[100] flex flex-col items-center justify-center overflow-hidden select-none"
          >
            {/* Contenedor Central: Logo + Barra de Progreso */}
            <div className="flex flex-col items-center space-y-6">
              {/* Logo Lormar Animado */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-56 h-14 md:w-64 md:h-16"
              >
                <Image
                  src="/logos/logo lormar sin rif.webp"
                  alt="Grupo Lormar"
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>

              {/* Barra de Progreso Dorada */}
              <div className="w-48 md:w-56 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                  className="h-full bg-7l-gold shadow-[0_0_12px_#F9B331]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido Principal */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default MechanicalPageTransition;

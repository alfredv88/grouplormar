"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const MechanicalPageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        {/* Superior Shutter */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "-100%" }}
          exit={{ y: "0%" }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
          className="fixed top-0 left-0 w-full h-1/2 bg-[#0F0F0F] z-[100] flex flex-col justify-end"
          style={{ 
            borderBottom: "4px solid #F2A900",
            backgroundImage: "url('/textures/brushed-metal.png')",
            backgroundSize: "cover"
          }}
        >
          {/* Warning Stripes */}
          <div className="h-8 w-full opacity-20 bg-[repeating-linear-gradient(45deg,#F2A900,#F2A900_20px,#000_20px,#000_40px)]"></div>
        </motion.div>

        {/* Inferior Shutter */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "100%" }}
          exit={{ y: "0%" }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
          className="fixed bottom-0 left-0 w-full h-1/2 bg-[#0F0F0F] z-[100] flex flex-col justify-start"
          style={{ 
            borderTop: "4px solid #F2A900",
            backgroundImage: "url('/textures/brushed-metal.png')",
            backgroundSize: "cover"
          }}
        >
          {/* Warning Stripes */}
          <div className="h-8 w-full opacity-20 bg-[repeating-linear-gradient(45deg,#F2A900,#F2A900_20px,#000_20px,#000_40px)]"></div>
        </motion.div>

        {/* Center Scanner Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          exit={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="fixed top-1/2 left-0 w-full h-[2px] bg-7l-gold z-[101] shadow-[0_0_15px_#F2A900]"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MechanicalPageTransition;

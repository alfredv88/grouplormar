"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function MechanicalPageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathname} className="relative w-full min-h-screen">
                {/* Children (The current page) */}
                {children}

                {/* Transition Overlay: Metal Shutter */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
                    style={{ originY: 0 }}
                    className="fixed inset-0 z-[100] bg-iron-base pointer-events-none"
                >
                    <div className="absolute inset-x-0 bottom-0 h-2 bg-brand-yellow shadow-[0_0_15px_#F2A900]"></div>
                    <div className="absolute inset-0 bg-industrial-grid opacity-20"></div>
                    <div className="flex items-center justify-center h-full">
                        <div className="text-brand-yellow font-orbitron font-black text-2xl tracking-[1em] uppercase animate-pulse">
                            Sincronizando...
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
                    style={{ originY: 1 }}
                    className="fixed inset-0 z-[100] bg-iron-base pointer-events-none"
                >
                    <div className="absolute inset-x-0 top-0 h-2 bg-brand-yellow shadow-[0_0_15px_#F2A900]"></div>
                    <div className="absolute inset-0 bg-industrial-grid opacity-20"></div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  range?: number; // Radio de atracción en píxeles
  strength?: number; // Intensidad del movimiento (porcentaje)
}

export default function Magnetic({ children, range = 60, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values de Framer Motion para saltarse el ciclo de renderizado de React y actualizar directo en el DOM (120 FPS)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Configuración de físicas de resorte para un tacto ultra suave (amortiguación premium)
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Mantener referencias actualizadas de las props dinámicas para evitar re-suscripciones de eventos en ventana
  const rangeRef = useRef(range);
  const strengthRef = useRef(strength);

  useEffect(() => {
    rangeRef.current = range;
    strengthRef.current = strength;
  }, [range, strength]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = node.getBoundingClientRect();
      
      // Centro del elemento
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Distancia del cursor al centro
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      // Distancia euclidiana total
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < rangeRef.current) {
        // El cursor está en el área de atracción (atracción elástica)
        x.set(distanceX * strengthRef.current);
        y.set(distanceY * strengthRef.current);
      } else {
        // Regresar al reposo si sale del rango
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    // Listener global de ratón cuando esté en la pantalla para una captura suave
    window.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]); // x y y son referencias estables de hooks (su tamaño y referencia permanecen inmutables)

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

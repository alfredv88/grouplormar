# Plan de Implementación: Rediseño Premium Industrial — Grupo Lormar

Este plan detalla la transformación visual del sitio web hacia un estilo "Dark Industrial" de alto nivel, alineado con el brochure corporativo y tendencias de diseño 2026.

## Scope del Proyecto (Regla 1)
Rediseño integral bajo estándar "Premium Industrial" (Amarillo #F2A900 / Negro #0F0F0F). Implementación de estructuras del brochure (diagonales, Bento Grids, Glassmorphism) y micro-animaciones técnicas para proyectar solidez, precisión y modernidad. 3 líneas máx.

## User Review Required

> [!IMPORTANT]
> Se cambiará el fondo de Blanco a Negro Carbón (#0F0F0F) como base principal del sitio, siguiendo la Guía de Diseño Visual y el brochure. El amarillo se usará exclusivamente como acento (15%) para mantener un aspecto sobrio y técnico.

## Proposed Changes

### 🎨 Fundamentos y Tokens (CSS)

#### [MODIFY] [globals.css](file:///e:/Desarrollos/WEB%20GRUPO%20LORMAR/grouplormar-web/src/app/globals.css)
- Implementar sistema de color 60/25/15:
  - `--background`: `#0F0F0F` (Negro Carbón)
  - `--foreground`: `#FFFFFF` (Blanco)
  - `--primary`: `#F2A900` (Amarillo CAT)
- Añadir texturas técnicas: `repeating-linear-gradient` para líneas de plano y efectos de metal cepillado.
- Crear utilidades de **Glassmorphism** (bordes semi-transparentes blancos/amarillos con backdrop-blur).

---

### 🧱 Componentes y Secciones (React/Next.js)

#### [MODIFY] [page.tsx](file:///e:/Desarrollos/WEB%20GRUPO%20LORMAR/grouplormar-web/src/app/page.tsx)
- **Hero**: Aplicar overlay diagonal real (clip-path) y tipografía Teko Bold con tracking expandido.
- **Servicios**: Implementar tabs con efecto "HMI Glass" y máscaras diagonales para las imágenes.
- **Equipos**: Crear un **Bento Grid** industrial para mostrar la flota, integrando marcas de agua "LORMAR77" en baja opacidad.
- **Certificaciones**: Rediseñar como sección hero-céntrica con bordes tipo "blueprint" y resaltado en amarillo.
- **Animaciones**: Integrar `framer-motion` (o CSS transitions) para "drawing lines" y "fade-up" en secciones.

---

### ⚙️ Backend y Configuración

#### [MODIFY] [tailwind.config.ts](file:///e:/Desarrollos/WEB%20GRUPO%20LORMAR/grouplormar-web/next.config.ts)
- Asegurar que los colores y fuentes (Teko, Montserrat) estén correctamente mapeados.

## Verification Plan

### Automated Tests
- Ejecutar `npm run build` para asegurar que los cambios de tipado y estructura no rompan el despliegue.
- Validar accesibilidad (CRITICAL Contrast 4.5:1) en los textos amarillos sobre negro.

### Manual Verification
- **Visual Check**: Verificar que las diagonales no causen saltos de contenido (layout shifts).
- **Responsive**: Probar en anchos 375px (Mobile) y 1440px (Desktop). Las diagonales se simplificarán a bordes rectos en mobile para legibilidad.
- **Interacción**: Comprobar que todos los botones tengan el cursor pointer y feedback visual instantáneo (HMI style).

# ESTADO TÉCNICO Y NORMATIVA DE DISEÑO: GRUPO LORMAR (7L)

Este documento reemplaza al Plan Maestro anterior y se establece como la **ÚNICA VERDAD CENTRAL** para el desarrollo, auditoría y mantenimiento del portal industrial de Grupo Lormar.

---

## 1. IDENTIDAD VISUAL Y AUTORIDAD (SISTEMA 7L)

El diseño no es solo estético; es una herramienta de **autoridad técnica**. Cada elemento debe proyectar solidez operacional y precisión de ingeniería.

### A. Tipografía (Jerarquía Estricta)
Se prohíbe el uso de fuentes "gamer" o decorativas genéricas. La identidad Lormar se basa en:
*   **Future Earth:** MANDATORIA para **H1 y H2** (Títulos monumentales y portadas). Es la fuente de identidad industrial de alto impacto.
*   **Montserrat (Bold/Black):** Exclusiva para **H3 a H6**, frases de impacto, números de métricas y encabezados de subsección.
*   **Syne (Regular/Medium):** Exclusiva para **Cuerpo de texto**, etiquetas (labels), micro-copy y botones.

### B. Paleta de Colores Corporativa
*   **Gold 7L (`#F9B331`):** Color de precisión. Usado en iconos, acentos activos y estados de hover técnico.
*   **Carbon Deep (`#050505` / `#0a0a0a`):** Fondo de autoridad. Proporciona el contraste necesario para la elegancia industrial.
*   **White Surgical (`#ffffff`):** Claridad técnica. Usado para lectura densa y fondos de tarjetas premium.

---

## 2. INVENTARIO DE COMPONENTES AUDITADOS

Los siguientes componentes han sido refactorizados y cumplen al 100% con la normativa 7L:

| Componente | Estado | Mejora Aplicada |
| :--- | :--- | :--- |
| `NosotrosHero.tsx` | **OK** | Future Earth en H1, Syne en descripción. |
| `HistoriaPoder.tsx` | **OK** | Future Earth en títulos, Syne en descripción. |
| `ProjectGrid.tsx` | **OK** | Títulos en Montserrat, filtros y CTA en Syne. |
| `TestimonialsCarousel.tsx` | **OK** | Brand impact en Montserrat, citas en Syne. |
| `ChatContactWidget.tsx` | **OK** | Rediseño "Ghost Minimalist". Modal atmosférico. |
| `ServicesGrid.tsx` | **OK** | Centrado de botones, eliminación de video overlays y alineación 7L. |
| `StatsCounter.tsx` | **OK** | Eliminación de elementos HUD 'gamer'. Montserrat en números. |
| `CapacidadTecnica.tsx` | **OK** | Reestructuración tipográfica completa (Montserrat/Syne). |
| `Home (page.tsx)` | **OK** | Implementación de Future Earth (Identidad) y Montserrat (Autoridad). |

---

## 3. PRINCIPIOS DE IMPLEMENTACIÓN (UI/UX)

1.  **Minimalismo "Ghost":** Los elementos de interacción no deben gritar. El widget de contacto es el ejemplo: un trigger sutil y técnico que no interrumpe la navegación.
2.  **Micro-interacciones Mecánicas:** El uso de `framer-motion` debe ser sutil (paralaje, fade-ins suaves). Prohibido el uso de rebotes o animaciones infantiles.
3.  **Transparencia Industrial:** Uso de fondos semi-transparentes sobre texturas de video para dar profundidad sin sacrificar legibilidad.
4.  **Botones Premium:** Bordes finos (0.5px - 1px), sin sombras exageradas, enfocados en el cambio de color del texto o borde en hover.

---

## 4. STACK TÉCNICO VIGENTE

*   **Core:** Next.js 14+ (App Router) + TypeScript.
*   **Estilos:** Tailwind CSS (Custom Config 7L).
*   **Animación:** Framer Motion (Transitions & HUD effects).
*   **Iconos:** Lucide React (Stroke: 1.5px).
*   **Formularios:** React Hook Form + Zod (Validation).

---

*Documentación actualizada por Antigravity AI - 04 de Mayo, 2026*

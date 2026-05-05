# Estándar UI: Lujo Corporativo y Autoridad Técnica
## Grupo Lormar - Sistema 7L

Este documento define las directrices innegociables para la interfaz del portal de Grupo Lormar. El objetivo es proyectar una **esencia de lujo corporativo, precisión técnica y presencia ejecutiva**.

---

## 1. Pilares de Diseño
- **Autoridad**: Diseño que impone respeto a través de tipografía bold y contrastes nítidos.
- **Precisión**: Detalles de ingeniería (líneas finas, grids perfectos, labels técnicos).
- **Lujo**: Uso expansivo del espacio en blanco (whitespace) y materiales digitales (glassmorphism).
- **Minimalismo**: Eliminación de cualquier elemento decorativo que no aporte información o estatus.

---

## 2. Sistema Tipográfico (Estandarización)

Solo se permiten dos familias tipográficas. Cualquier otra fuente (Future, Syncopate, etc.) queda **prohibida**.

### A. Montserrat (La Fuente de Autoridad)
*Uso principal: Encabezados, Títulos de gran escala, Frases de impacto.*
- **Jerarquía**: H1, H2, Hero Sections.
- **Peso Sugerido**: `font-black` (900) o `font-extrabold` (800).
- **Estilo**: Generalmente `uppercase`.
- **Modificadores**: `tracking-tighter` para títulos masivos.

### B. Syne (La Fuente de Precisión)
*Uso principal: Cuerpo de lectura, Labels técnicos, Navigation, Sub-headers.*
- **Labels**: `uppercase`, `tracking-wider`, `font-semibold`. (Look de planos técnicos).
- **Cuerpo**: `font-light` o `font-normal`.
- **Lectura**: Interlineado amplio (`leading-relaxed`) para aire corporativo.

---

## 3. Paleta de Colores
- **Fondo Primario**: `#050505` (Negro Profundo / Industrial).
- **Acento (Estatus)**: `#F2A900` (7L Gold).
- **Texto Primario**: `#FFFFFF` (Blanco Puro, 90% opacidad).
- **Texto Técnico**: `#9CA3AF` (Gris frío / Slate) para metadatos y descripciones.

---

## 4. Componentes de "Esencia"
- **Status Dashboards**: La información no se muestra en listas simples, sino en "Monitores" que simulen software de precisión.
- **Separadores**: Líneas de 1px con gradientes sutiles o opacidad baja.
- **Filtros Glass**: `backdrop-blur-md` en overlays para profundidad.

---

## 6. Estandarización de Botones (Compact Gold)

Para proyectar una imagen quirúrgica y ejecutiva, todos los botones principales de la página principal deben seguir la arquitectura **Compact Gold**:

- **Fondo**: `var(--color-7l-gold)` (#F2A900).
- **Texto**: `var(--color-7l-black)` (#0D0D0D), tipografía `Syne`, tamaño `9px`, tracking `0.4em`, `uppercase`.
- **Dimensiones**: `px-6 py-3`. (Efecto compacto/pequeño).
- **Iconografía**: `ArrowRight` (10px) con desplazamiento sutil en hover.
- **Variante Inversa**: Si el fondo de la sección es oro, usar fondo `var(--color-7l-black)` con texto oro.

---

## 7. Minimalismo Radical (Patrones de Detalle)

Para secciones de alta densidad de información (como catálogos de equipos), se aplica el principio de "Eliminación de Ruido":

- **Indicadores de Ítem**: Prohibido el uso de guiones (`-`) o bullets estándar. Usar puntos sutiles (`dots`) de 4px con opacidad reducida (`white/30`).
- **Estados de Interacción**: El dot debe reaccionar al hover del contenedor padre, aumentando su opacidad y adquiriendo un resplandor sutil (`shadow-gold`).
- Dimensiones de Tarjeta: Estandarización a `320px x 500px` para mantener simetría arquitectónica en vistas de galería.
- **Materialidad (Industrial Glass)**: Uso de `bg-white/[0.03]` con `backdrop-blur-3xl` y bordes `white/10`. En hover, el borde transiciona a `7l-gold/30`.
- **Acentos de Autoridad (7L Gold)**:
    *   Títulos precedidos por una línea vertical de `2px` en Oro.
    *   Identificadores técnicos (IDs) resaltados en Oro sobre fondo tenue del mismo tono.
- **Títulos de Tarjeta (Surgical Label)**: Uso de `Montserrat Black`, tamaño `12px`, `tracking-normal`.
- Contraste de Lectura: El texto secundario debe mantener un mínimo de `white/60` para asegurar legibilidad en pantallas industriales/exteriores.

---

**Nota**: Este documento es la autoridad final para cualquier decisión estética en el frontend.

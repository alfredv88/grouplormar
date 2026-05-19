# Plan Integral de Arquitectura y Contenidos (Grupo Lormar)

Este documento establece la arquitectura de información, rutas, desglose de contenidos y **sistema de diseño visual** de las páginas internas del portal web de **Grupo Lormar**, derivado estrictamente de la transcripción oficial del brochure corporativo (`_docs/GUIA_MAESTRA_BROCHURE.md`) y del análisis del diseño del Home actual (Sistema 7L).

---

## 1. Mapa de Sitio / Estructura de Navegación Principal

La navegación superior (Navbar) se compone de **4 enlaces principales**, manteniendo un diseño minimalista y de alta gama ("Quiet Luxury Industrial").

```mermaid
flowchart TD
    Inicio[www.grouplormar.com] --> Nosotros[/nosotros]
    Inicio --> Servicios[/servicios]
    Inicio --> Maquinaria[/maquinaria]
    Inicio --> Contacto[/contacto]

    Servicios --> ServConst[/servicios/construccion]
    Servicios --> ServMant[/servicios/mantenimiento]
    Servicios --> ServPozos[/servicios/pozos]
    Servicios --> ServAmb[/servicios/ambiental]
    Servicios --> ServLog[/servicios/logistica]

    Nosotros -.-> Cert[Bloque HUD: Certificaciones y RIF]
```

> **ADVERTENCIA — Links eliminados:**
> Se deben remover todas las referencias a `/portafolio`, `/responsabilidad` y `/gente` del Navbar, Footer y cualquier componente. No existen como rutas y no están respaldadas por el brochure.

---

## 2. Desglose Estricto de Contenidos por Página

### 2.1. Página: `/nosotros` (Identidad, Valores y Registros Legales)

*   **Hero Section / Portada:**
    *   **Título Principal (H1):** `LORMAR 7L SERVICIOS Y CONSTRUCCIONES`
    *   **Subtítulo / Ficha:** `J-306579656 | BROCHURE CORPORATIVO`
*   **Sección 1: ¿Quiénes Somos?**
    *   *Texto Literal:* "Somos una empresa que cuenta con un equipo de profesionales altamente capacitados. Competitivos dentro del mercado nacional, con una visión internacional, cumpliendo con las normativas establecidas por nuestros clientes y en estándares nacionales e internacionales en materia de calidad, seguridad y ambiente. Como empresa, continuamos con un constante crecimiento y desarrollo, todo esto basado en una gestión de aprendizaje y mejora continua con la finalidad de prestar un servicio profesional adaptado a las exigencias de nuestros clientes."
*   **Sección 2: Misión y Visión**
    *   **Misión:** "Nuestra empresa se dedica a brindar servicios de ingeniería de alta calidad en las áreas civiles, mecánica, eléctrica e instrumentación, tanto en el sector privado como en la industria. Estamos comprometidos a satisfacer y superar las expectativas de nuestros clientes en todos los proyectos en los que nos involucramos, garantizando así el cumplimiento de sus exigencias."
    *   **Visión:** "Alcanzar un alto nivel de competitividad, asegurar el crecimiento como una empresa sólida que cumple con sus objetivos, bajo el ritmo propuesto de estar entre las empresas certificadas en aseguramiento y control de la calidad."
*   **Sección 3: Valores Corporativos**
    *   **Responsabilidad:** Cumplimos con los compromisos adquiridos con nuestros clientes y proveedores.
    *   **Integridad y Honestidad:** Administramos los recursos de manera ética y transparente, actuando con honradez en todas las operaciones.
    *   **Calidad:** Aseguramos que los servicios y productos cumplan con altos estándares, tanto nacionales como internacionales.
    *   **Eficiencia:** Optimizamos el uso de los recursos tangibles e intangibles para lograr el mejor rendimiento posible.
    *   **Innovación:** Abiertos a nuevas ideas para generar valor agregado y mejorar continuamente.
*   **Sección 4: Trayectoria de Ejecución (Timeline)**

> **NOTA:** Los hitos de la timeline (2010, 2015, 2020, 2024) están aprobados como narrativa comercial aunque no están literalmente en el brochure.

*   **Sección 5: Ficha HUD Legal y Habilitaciones (Capítulo IV del Brochure)**

    Presentado como panel técnico de autoridad industrial al cierre de la página.

*   **Registro Único de Información Fiscal (RIF):**
    *   *RIF:* `J306579656` | *Comprobante:* `202207N0000057976090` (SERVICIOS Y CONSTRUCCIONES LORMAR 77, C.A)
    *   *Vigencia:* Inscripción: 26/11/2010 | Última Act.: 06/05/2024 | Vencimiento: 06/05/2027
    *   *Domicilio Fiscal:* AV JORGE RODRIGUEZ CC MT NIVEL PB LOCAL 05 SECTOR LAS GARZAS LECHERIAS ANZOATEGUI ZONA POSTAL 6016
    *   *Condición:* Contribuyente Ordinario del IVA y Agente de Retención del IVA (75% / 100%).
*   **Constancias RACDA (MINEC):**
    *   *Generador:* `N° 01-13-02-02-03-2025-635` (Sustancias, materiales y desechos peligrosos. Dir: Sector Palotal, Barcelona).
    *   *Manejador / Transporte:* `N° 03-04-TSMDP-2024-11956` (Manejo en transporte. Dir: Centro Simón Bolívar, Caracas).
*   **Registro Nacional de Contratistas (RNC/SNC):**
    *   *Estatus:* **HABILITADO** para contratar con la APN. | *Correlativo:* `2025060651014000225` | *Comprobante:* `1487787306579656247`
    *   *Vigencia:* 06/06/2025 hasta 30/06/2026.

---

### 2.2. Hub Central de Servicios (`/servicios`) y Sub-rutas

La página `/servicios` actúa como un portal inmersivo (Z-Layout) que presenta el resumen de las 5 áreas y enlaza a cada página dedicada.

#### 2.2.1. `/servicios/construccion` (Ingeniería y Obras)
*   **Desarrollo Integral de proyectos:** diseño, adquisición de materiales y ejecución de obras civiles, mecánica, eléctrica y de instrumentación.
*   **Facilidades de Producción y Superficie:** Construcción de baterías de separación, estaciones de flujo, oleoductos, gasoductos y líneas de recolección.
*   **Infraestructura Civil y Soporte:** Construcción de locaciones de pozos, vías de acceso, campamentos, tanques de almacenamiento y obras de drenaje.
*   **Instalaciones Eléctricas e Instrumentación:** Montaje de subestaciones, sistemas de control, automatización y cableado para la operación de equipos y plantas.

#### 2.2.2. `/servicios/mantenimiento` (Integridad y Equipos)
*   **Mantenimiento Correctivo:** Reparación de equipos rotatorios (bombas, compresores, turbinas) y estáticos (tuberías, recipientes a presión).
*   **Integridad de Tuberías y Equipos:** Servicios de limpieza, pruebas no destructivas (NDT), inspección y reemplazo de líneas de producción y transferencia.
*   **Autonomía de Flota:** Garantía de disponibilidad 24/7 de nuestros activos mediante programas de mantenimiento interno preventivo y correctivo.

#### 2.2.3. `/servicios/pozos` (Soluciones Petroleras Integrales)
*   Estimulación para mejorar el flujo de hidrocarburos y reacondicionamiento de pozos inactivos.
*   Sustitución de equipos esenciales: variadores de frecuencia y bombas de cavidad progresiva.
*   Suministro de equipos pesados para actividades logísticas (transversales) de operación a pozos.

#### 2.2.4. `/servicios/ambiental` (Gestión y Saneamiento)
*   **Manejo Integral de Residuos:** Recolección, transporte y disposición final de desechos peligrosos y no peligrosos, incluyendo cortes de perforación y fluidos contaminados.
*   **Saneamiento y Remediación Ambiental:** Limpieza de derrames de hidrocarburos, y biorremediación de suelos y cuerpos de agua afectados.

#### 2.2.5. `/servicios/logistica` (Transporte, Maquinaria e Izamiento)
*   **Transporte Terrestre Especializado:** Movilización de equipos sobredimensionados (taladros, bombas, tanques, generadores), tuberías de gran diámetro y materiales críticos a larga distancia.
*   **Alquiler de Maquinaria y Equipos Pesados:** Suministro de grúas (móviles y sobre orugas), excavadoras, montacargas pesados, retroexcavadoras, cargadores frontales y tractores de cadena para operaciones en campo.
*   **Izamiento y Posicionamiento de Cargas:** Servicios especializados de izaje crítico y maniobras para el montaje y desmontaje de estructuras, recipientes y componentes de plantas.
*   **Gestión de Flota y Mantenimiento de Equipos:** Administración, mantenimiento preventivo y correctivo de la flota de transporte y la maquinaria pesada para garantizar su operatividad constante.

---

### 2.3. Página: `/maquinaria` (Catálogo de Maquinaria y Equipos Propios)

> **Premisa Contractual (Header):** *"Toda la maquinaria listada es propiedad de Grupo Lormar, garantizando disponibilidad inmediata y mantenimiento interno riguroso."*

1.  **Equipos de Izamiento:** Grúa Telescópica (15, 45, 60, 75 y 100 Ton) | Brazo Hidráulico (6, 15, 20 y 25 Ton) | Montacarga (6, 12, 15 y 25 Ton)
2.  **Equipos de Pala Mecánica:** Cargador Frontal | Excavadora | Retroexcavadora | Minishower
3.  **Equipos de Servicios a Pozo:** Cabillero de 350HP | Camión Hot Oil | Equipo de pruebas a pozos (Well Testing) | Equipo Flush-By
4.  **Equipos de Movimiento de Tierra:** Tractores | Mototraíllas | Motoniveladoras | Vibrocompactador | Compactador Pata de Cabra
5.  **Equipos de Transporte:** Chuto con Batea | Chuto con Volqueta | Chuto con Lowboy (60 a 140 Toneladas) | Chuto con Vacuum de 160 BLS | Camión Supervactor | Camión Volteo | Camión Cisterna | Camión Cava | Camión 350 | Camioneta Pick Up
6.  **Elevadores:** Manlift | Camión cesta
7.  **Equipos para Colocación de Asfalto:** Finisher | Escarificadora de Asfalto | Rodillo Liso | Compactador de Neumáticos | Camión Rosco | Barredora Autopropulsada
8.  **Equipos para Concreto:** Camión Trompo Mezclador de Concreto | Trompo Mezclador de Concreto
9.  **Equipos Menores:** Planta Eléctrica (100 a 1000 KVA) | Compresor de Aire de 185 CFM - 180 CFM | Torres de Iluminación | Máquinas de Soldar | Motobomba de 6" x 6" de 80HP | Martillo Neumático | Equipos de Pintura Airless | Equipos para Sandblasting y Tráiler de Oficinas (Oficinas móviles) | Comedores | Vestidores | Contenedores de Herramientas | Baños Portátiles | Lavamanos

---

### 2.4. Página: `/contacto` (Directorio Ejecutivo y Operativo)

*   **Contactos Directos:**
    *   **Napoleón Bellaville:** `+58 41418161629`
    *   **Brayhan Bellaville:** `+58 4129448672`
*   **Canales de Negocios:**
    *   *Email Corporativo:* `NEGOCIOS@GROUPLORMAR.COM`
    *   *Website:* `www.grouplormar.com`

---

## 3. Sistema de Diseño Visual — Reglas Derivadas del Home

> **IMPORTANTE:** El Home establece el estándar de diseño. **Todas las páginas internas deben replicar su ritmo visual, no inventar uno nuevo.** Lo que sigue son reglas inmutables extraídas del análisis del código fuente de los 13 componentes del Home.

### 3.1. Paleta Completa de Fondos (5 Tipos)

El Home **nunca** usa un solo tipo de fondo. Usa 5 tipos distintos que generan ritmo visual y respiro:

| Tipo | Código CSS | Uso en Home | Texto sobre fondo |
|------|-----------|-------------|-------------------|
| ⬜ **CLARO** | `bg-[#F7F7F7]` | AboutSection, ServicesGrid, ProcessSection, TestimonialsCarousel | `!text-[#0D0D0D]`, gold como acento |
| 🟡 **DORADO** | `bg-7l-gold` (#F9B331) | GenteSection (mitad split 50/50) | Negro `text-7l-black`, blanco para contraste |
| 🔲 **OSCURO base** | `#0D0D0D` / `#080808` / `#060606` | Hero, EquipmentShowcase, ComplianceHSE, CTA | Blanco `text-white`, gold `text-7l-gold` |
| 🔲 **OSCURO tinted** | `#0a1111` (verde-industrial) | SustainabilitySection, StrategicLocation | Blanco, gold |
| 🔲 **OSCURO media** | `bg-black` + video/imagen parallax/textura `.webp` | StatsCounter, YardParallax, textura industrial | Blanco, gold con drop-shadow |

> **ERROR ACTUAL:** `/nosotros` y `/servicios` usan solo `bg-7l-black` (#0D0D0D) de arriba a abajo. Esto genera una experiencia plana y sin vida. Se debe corregir aplicando alternancia.

### 3.2. Variantes de Negro (Profundidad)

El Home usa **5 valores distintos** de negro para que las secciones oscuras no se sientan como un bloque plano:

| Hex | Carácter | Uso recomendado |
|-----|----------|-----------------|
| `#0D0D0D` | Negro primario (7L brand) | Hero sections, base principal |
| `#080808` | Negro profundo | Cards, CTA finales, containers elevados |
| `#060606` | Negro ultra-profundo | Secciones de compliance/datos legales |
| `#0a1111` | Negro con tinte verde-industrial | Secciones de sostenibilidad, ambiental, ubicación |
| `#000000` | Negro puro (solo con media) | Fondos con video parallax o imagen fija encima |

### 3.3. Tipografía (Reglas Inmutables)

| Nivel | Font | Clase CSS | Uso |
|-------|------|-----------|-----|
| **H1** | Future Earth | `text-h1` / `font-future` | Títulos monumentales de página (1 por sección hero) |
| **H2** | Future Earth | `text-h2` / `font-future` | Títulos de sección |
| **H3** | Montserrat Black | `text-h3` / `font-montserrat font-black` | Subtítulos de bloque |
| **H4** | Montserrat Bold | `text-h4` / `font-montserrat font-bold` | Labels de tarjeta |
| **Body** | Montserrat | `font-montserrat text-[13-15px]` | Párrafos, descripciones |
| **Micro** | Montserrat | `font-montserrat text-[9-11px] tracking-[0.3em+]` | Labels HUD, categorías, badges |

> **ERROR ACTUAL en `/nosotros`:** `NosotrosHero.tsx` usa `font-montserrat font-black text-5xl` para el H1 en vez de `font-future` / `text-h1`. Esto rompe la jerarquía tipográfica de marca.

### 3.4. Efectos Atmosféricos (heredados de globals.css)

Todos estos existen en el sistema y deben usarse en las internas:

- **Noise overlay:** `::before` con `noise.png` al 5% opacity — ya global, automático
- **Cinematic reveal:** `.cinematic-reveal` — fade-in progresivo al hacer scroll
- **Industrial grid:** `bg-industrial-grid` — pattern de retícula técnica para fondos oscuros
- **Mesh gradient:** `.mesh-gradient` — gradiente ambiental para heros
- **Separator dorado:** Línea `bg-gradient-to-r from-transparent via-7l-gold/40 to-transparent` con rombo central

### 3.5. Componentes Reutilizables del Home

| Componente | Path | Reutilizable en |
|-----------|------|-----------------|
| `Magnetic` | `src/components/ui/Magnetic.tsx` | CTAs de todas las internas |
| `StatsCounter` (AnimatedNumber) | `src/components/home/StatsCounter.tsx` | `/nosotros` (datos duros), `/maquinaria` (cifras de flota) |
| `ComplianceHSE` (panel legal) | `src/components/home/ComplianceHSE.tsx` | `/nosotros` sección HUD legal |
| Separator dorado | Pattern inline | Todas las transiciones entre secciones |

---

## 4. Ritmo de Alternancia por Página

### 4.1. `/nosotros` — Mapa de Fondos

| # | Sección | Fondo | Tipo |
|---|---------|-------|------|
| 1 | Hero (¿Quiénes Somos?) | `bg-[#0D0D0D]` + textura industrial | 🔲 OSCURO |
| 2 | Misión y Visión | `bg-[#F7F7F7]` + cards blancas | ⬜ CLARO |
| 3 | Valores Corporativos | `bg-7l-gold` split o `bg-[#0D0D0D]` con acento gold | 🟡 DORADO o 🔲 OSCURO |
| 4 | Timeline (Trayectoria) | `bg-[#F7F7F7]` | ⬜ CLARO |
| 5 | Ficha HUD Legal | `bg-[#060606]` (panel de autoridad) | 🔲 OSCURO profundo |
| 6 | CTA a Contacto | `bg-[#080808]` | 🔲 OSCURO |

**Ritmo:** 🔲 ⬜ 🟡 ⬜ 🔲 🔲

### 4.2. `/servicios` (Hub) — Mapa de Fondos

| # | Sección | Fondo | Tipo |
|---|---------|-------|------|
| 1 | Hero (Soluciones Operativas) | `bg-[#0D0D0D]` + imagen/video | 🔲 OSCURO |
| 2 | Grid de 5 servicios (cards navegables) | `bg-[#F7F7F7]` | ⬜ CLARO |
| 3 | Bloque de impacto (stats o imagen) | `bg-black` + media parallax | 🔲 OSCURO media |
| 4 | CTA a Contacto/Licitación | `bg-7l-gold` full width | 🟡 DORADO |

**Ritmo:** 🔲 ⬜ 🔲 🟡

### 4.3. `/servicios/[rubro]` (Sub-páginas) — Mapa de Fondos

| # | Sección | Fondo | Tipo |
|---|---------|-------|------|
| 1 | Hero con título del rubro | `bg-[#0D0D0D]` + imagen relevante | 🔲 OSCURO |
| 2 | Contenido detallado (items del rubro) | `bg-[#F7F7F7]` | ⬜ CLARO |
| 3 | Maquinaria relacionada (cross-link) | `bg-[#080808]` | 🔲 OSCURO |
| 4 | CTA a Contacto | `bg-7l-gold` o `bg-[#F7F7F7]` | 🟡 o ⬜ |

**Ritmo:** 🔲 ⬜ 🔲 🟡

### 4.4. `/maquinaria` — Mapa de Fondos

| # | Sección | Fondo | Tipo |
|---|---------|-------|------|
| 1 | Hero (Infraestructura Propia) | `bg-[#0D0D0D]` + imagen de patio | 🔲 OSCURO |
| 2 | Catálogo de 9 rubros (carousel o grid) | `bg-[#F7F7F7]` con cards blancas | ⬜ CLARO |
| 3 | Stats (unidades, tonelaje, KVA) | `bg-black` + video parallax | 🔲 OSCURO media |
| 4 | CTA a Contacto | `bg-7l-gold` full width | 🟡 DORADO |

**Ritmo:** 🔲 ⬜ 🔲 🟡

### 4.5. `/contacto` — Mapa de Fondos

| # | Sección | Fondo | Tipo |
|---|---------|-------|------|
| 1 | Hero (Directorio Ejecutivo) | `bg-[#0D0D0D]` | 🔲 OSCURO |
| 2 | Formulario + Info | `bg-[#F7F7F7]` | ⬜ CLARO |
| 3 | Mapa / Ubicación | `bg-[#0a1111]` | 🔲 OSCURO tinted |

**Ritmo:** 🔲 ⬜ 🔲

---

## 5. Decisiones de Diseño Aprobadas

| Decisión | Estado | Nota |
|----------|--------|------|
| Timeline 2010-2024 en `/nosotros` | ✅ Aprobada | Narrativa comercial, no literal del brochure |
| Eliminar links a `/portafolio` | ✅ Aprobada | No existe ruta ni contenido |
| Eliminar links a `/responsabilidad` | ✅ Aprobada | No existe ruta ni contenido |
| Eliminar links a `/gente` | ✅ Aprobada | No existe ruta ni contenido |
| Alternancia de fondos en internas | ✅ Aprobada | Replicar ritmo del Home (5 tipos de fondo) |
| Fuente H1 = Future Earth siempre | ✅ Aprobada | Corregir NosotrosHero.tsx |
| Datos técnicos solo de brochureData.ts | ✅ Aprobada | No duplicar ni inventar datos |

---

## 6. Próximos Pasos (Hoja de Ruta de Implementación)

1. **[COMPLETADO] Eliminar links fantasma** — Navbar, Footer, SustainabilitySection, GenteSection, EquipmentShowcase
2. **[COMPLETADO] Refactorizar `/nosotros`** — Aplicar alternancia de fondos, corregir H1 a Future Earth, integrar ComplianceHSE
3. **Refactorizar `/servicios`** — Aplicar alternancia, convertir ServiciosGrid monolítico en hub de navegación con cards
4. **Crear `/maquinaria`** — Nueva ruta con catálogo visual (basado en `brochureData.ts`)
5. **Crear subrutas `/servicios/[rubro]`** — 5 páginas con layout estandarizado
6. **Refactorizar `/contacto`** — Aplicar fondos claros al formulario

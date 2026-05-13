# Grupo Lormar - Portal Corporativo y Potencia Industrial

Proyecto web para **Grupo Lormar**, enfocado en destacar su capacidad operativa, flota propia de maquinaria pesada y servicios para la industria. Diseñado con una estética **Industrial Premium** que transmite solidez, precisión y confianza.

## 🚀 Alcance del Proyecto (Scope)
Creación de un portal corporativo y landing page (SPA + rutas secundarias) para la empresa Grupo Lormar, diseñado con una temática predominantemente industrial y enfocada en maquinaria pesada.

## 🛠️ Tecnologías y Características
- **Framework:** Next.js (App Router) + React
- **Estilos:** Tailwind CSS con variables nativas de CSS para efectos fluidos (V4).
- **Animaciones:** Framer Motion (para transiciones en carruseles y secciones de impacto).
- **Formatos Multimedia:** Integración de videos optimizados en formato `.webm` manejados vía **Git LFS**.
- **Contacto:** Widget inteligente incorporado con diseño industrial y formulario integrado con **Resend API**.
- **Tipografías:** Montserrat (cuerpo) y Future Earth (para titulares).
- **Diseño Premium:** Uso intensivo de glassmorphism oscurecido, clip-paths poligonales (cortes diagonales), bordes amarillos luminosos y efectos CRT/scanning.
 
## 📌 Historial de Cambios Recientes (Actualizaciones)
- Reorganización total de la carpeta `/public`, agrupando recursivamente en `/public/videos`, `/public/logos` y `/public/textures`.
- Migración de todo el background media de `.mp4` a `.webm` para optimizar carga y eficiencia.
- Configuración y tracking local y remoto de todos los archivos multimedia interactivos usando `Git LFS`.
- Refactorización de la UI del catálogo de servicios: Reducción global del tamaño de tarjetas UI para mayor densidad de información (-30% espacio muerto aprox.), además se incluyó auto-play/rotación (tab navigation).
- Rediseño del Widget de Contacto: Cambio de iconos genéricos (bot/mensajes) por iconos industriales (`Construction`, `Headphones`) y adaptación del componente a esquema de color corporativo perimetral (#F9B331), con animaciones de "pulso" vital y bordes dinámicos.
- Solución al error de build 404 de Vercel (manejo seguro de dependencias API como Resend).
- Integración del mapa de contacto (Iframe) centrado en Ciudad Guayana cuidando privacidad.

## ⚙️ Cómo iniciar el entorno de desarrollo

1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Navegar a `http://localhost:3000`

> **Nota para Despliegues:** Si haces push de contenido multimedia grande (ej. los videos principales del Hero), asegúrate de tener `git lfs` instalado localmente (`git lfs pull`). 

# 📋 Pendientes — Página de Maquinaria
**Proyecto:** Grupo Lormar Web  
**Archivo clave:** `src/data/machineryData.ts`  
**Estado:** 85% completo

---

## ⚠️ Imágenes con Placeholder Incorrecto

Estos 4 ítems tienen una foto asignada que **no corresponde** con el equipo descrito. Requieren imagen real o generación IA.

| # | Equipo | División | Imagen Actual (Incorrecta) | Acción Requerida |
|---|--------|----------|---------------------------|------------------|
| 1 | **Camión Hot Oil** | División de Pozos | `camion_hidrojet.png` (Hidrojet ≠ Hot Oil) | Foto real o generar IA |
| 2 | **Compresores de Aire** | Soporte y Campamento | `planta_electrica.png` (Generador ≠ Compresor) | Foto real o generar IA |
| 3 | **Máquinas de Soldar** | Soporte y Campamento | `lighting-tower.png` (Torre ≠ Soldadora) | Foto real o generar IA |
| 4 | **Motobombas (6" x 6" de 80HP)** | Soporte y Campamento | `lighting-tower.png` (Torre ≠ Motobomba) | Foto real o generar IA |

> [!NOTE]
> La cuota de generación IA se agotó el **2026-05-20**. Se recupera el **2026-05-27**. Se pueden aportar fotos reales antes de esa fecha.

---

## 🟡 Ítems con Placeholder Aceptable (Baja Prioridad)

Estos equipos tienen una imagen que **no es exacta** pero no genera confusión crítica para el cliente:

| Equipo | Imagen Actual | Nota |
|--------|---------------|------|
| **Equipos Flush-By** | `ambiental_gestion.jpeg` | Gestión de fluidos, visualmente genérico |
| **Baños Portátiles y Lavamanos** | `lighting-tower.png` | Equipo de soporte, baja visibilidad en catálogo |
| **Camiones Volteo, Cisterna, Cava, 350** | `camion-cisterna.webp` (solo cisterna) | Cubre parcialmente la descripción |

---

## ✅ Ítems Completos con Imagen Correcta

| Equipo | Imagen |
|--------|--------|
| Grúas Telescópicas | `grua-120t.webp` |
| Brazos Hidráulicos | `brazo-hidraulico.png` (IA) |
| Montacargas Pesados | `montacargas-v1.webp` |
| Manlift y Camión Cesta | `manlift.png` (IA) |
| Tractores y Mototraíllas | `tractor-mototrailla.jpeg` (real) |
| Motoniveladoras | `motoniveladora_real_daylight.png` (real) |
| Excavadoras y Retroexcavadoras | `excavadora_real_daylight.png` (real) |
| Excavadoras con Martillo | `excavadora_martillo.png` (IA) |
| Cargadores Frontales | `pala_mecanica.png` (real) |
| Compactadores | `compactador.webp` |
| Chutos con Lowboy | `transporte_lowboy_real_daylight.png` (real) |
| Chutos con Batea y Volqueta | `chuto_batea.png` (IA) |
| Vacuum de 160 BLS | `ambiental_gestion.jpeg` (real) |
| Camionetas Pick Up | `pickup_truck_sobrio.png` (IA) |
| Cabillero de 350HP | `cabillero_real_daylight.png` (IA) |
| Camión Hidrojet Industrial | `camion_hidrojet.png` (IA) |
| Plantas Eléctricas | `planta_electrica.png` (IA) |
| Torres de Iluminación | `lighting-tower.png` |
| Tráilers y Oficinas Móviles | `DJI_0281.JPG` (real aéreo) |
| Finisher y Escarificadoras | `pavimentadora.webp` |
| Rodillos y Compactadores | `compactador.webp` |
| Camión Rosco y Barredoras | `camion-cisterna.webp` |
| Trompos Mezcladores | `volqueta.webp` |

---

## 🚀 Criterio de Aceptación para Producción

Para dar la página de maquinaria al **100%** se deben cumplir:

- [ ] Foto real o IA de **Camión Hot Oil**
- [ ] Foto real o IA de **Compresores de Aire**
- [ ] Foto real o IA de **Máquinas de Soldar**
- [ ] Foto real o IA de **Motobombas**

> [!TIP]
> Si el cliente aprueba el sitio sin estos 4 ítems corregidos, se puede desplegar a producción ahora mismo y actualizar las imágenes en un **hotfix** posterior cuando se recupere la cuota IA el 27/05.

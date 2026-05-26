export const machineryImages = {
  izamiento: '/images/services/logistica_izamiento.webp',
  movimiento: '/images/equipment/excavadora_real_daylight.webp',
  transporte: '/images/services/logistica_transporte.webp',
  pozos: '/images/equipment/cabillero_real_daylight.webp',
  asfalto: '/images/equipment/asphalt_finisher_real_daylight.webp',
  menores: '/images/equipment/planta_electrica.webp',
};

export interface MachineryItem {
  name: string;
  image: string;
}

export interface MachineryCategory {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  bg: string;
  items: MachineryItem[];
  columns?: number;
}

export const machineryCategories: MachineryCategory[] = [
  {
    id: '01',
    category: 'DIVISIÓN DE IZAMIENTO',
    title: 'IZAMIENTO Y <span class="text-white">ELEVACIÓN</span>',
    description: 'Flota especializada para maniobras de izaje crítico, montaje de estructuras pesadas y posicionamiento en altura con equipos certificados y operadores de alta precisión.',
    items: [
      { name: 'Grúas Telescópicas (15, 45, 60, 75 y 100 Ton)', image: '/images/equipment/grua-120t.webp' },
      { name: 'Brazos Hidráulicos (6, 15, 20 y 25 Ton)', image: '/images/equipment/brazo-hidraulico.webp' },
      { name: 'Montacargas pesados (6 a 25 Ton)', image: '/images/equipment/montacargas-v1.webp' },
      { name: 'Manlift y Camión Cesta', image: '/images/equipment/manlift.webp' },
    ],
    bg: 'gold',
    image: machineryImages.izamiento,
  },
  {
    id: '02',
    category: 'DIVISIÓN DE MOVIMIENTO',
    title: 'MOVIMIENTO <br /><span class="text-7l-gold">DE TIERRA</span>',
    description: 'Equipos pesados para remoción a gran escala, acondicionamiento de terrenos, nivelación topográfica y compactación de fundaciones para locaciones petroleras y civiles.',
    items: [
      { name: 'Tractores y Mototraíllas', image: '/images/equipment/tractor-mototrailla.webp' },
      { name: 'Motoniveladoras', image: '/images/equipment/motoniveladora1.webp' },
      { name: 'Excavadoras y Retroexcavadoras', image: '/images/equipment/excavadora_real_daylight.webp' },
      { name: 'Excavadoras con Martillo', image: '/images/equipment/excavadora_martillo.webp' },
      { name: 'Cargadores Frontales y Minishowers', image: '/images/equipment/minicarga-frontal.webp' },
      { name: 'Compactadores', image: '/images/equipment/compactador.webp' },
    ],
    bg: 'dark',
    image: machineryImages.movimiento,
  },
  {
    id: '03',
    category: 'DIVISIÓN LOGÍSTICA',
    title: 'TRANSPORTE Y <br /><span class="text-white">LOGÍSTICA</span>',
    description: 'Músculo logístico pesado diseñado para la movilización segura de cargas sobredimensionadas, fluidos industriales y apoyo transversal en proyectos a nivel nacional.',
    items: [
      { name: 'Chutos con Lowboy (60 a 140 Ton)', image: '/images/equipment/transporte_lowboy_real_daylight.webp' },
      { name: 'Chutos con Batea y Volqueta', image: '/images/equipment/chuto_batea.webp' },
      { name: 'Vacuum de 160 BLS y Supervactor', image: '/images/equipment/vacuum_truck_ia.webp' },
      { name: 'Camiones Volteo, Cisterna, Cava, 350', image: '/images/equipment/camion-cisterna.webp' },
      { name: 'Camionetas Pick Up (Flota Liviana)', image: '/images/equipment/pickup_truck_sobrio.webp' },
    ],
    bg: 'gold',
    image: machineryImages.transporte,
  },
  {
    id: '04',
    category: 'DIVISIÓN DE POZOS',
    title: 'SERVICIOS <br /><span class="text-7l-gold">A POZOS</span>',
    description: 'Unidades móviles especializadas para reacondicionamiento (workover), estimulación de producción y mantenimiento de pozos directamente en campo.',
    items: [
      { name: 'Cabillero de 350HP', image: machineryImages.pozos },
      { name: 'Camión Hot Oil', image: '/images/equipment/camion_hot_oil_ia.webp' },
      { name: 'Equipos Flush-By', image: '/images/equipment/flush_by_ia.webp' },
      { name: 'Camión Hidrojet Industrial', image: '/images/equipment/camion_hidrojet.webp' },
    ],
    bg: 'dark',
    image: machineryImages.pozos,
  },
  {
    id: '05',
    category: 'DIVISIÓN CIVIL',
    title: 'OBRAS CIVILES Y <br /><span class="text-white">ASFALTO</span>',
    description: 'Maquinaria autopropulsada para pavimentación, mezclado, colocación y compactación de concreto y asfalto en obras viales e infraestructuras de gran envergadura.',
    items: [
      { name: 'Finisher y Escarificadoras de Asfalto', image: '/images/equipment/pavimentadora.webp' },
      { name: 'Rodillos Lisos y Compactadores de Neumáticos', image: '/images/equipment/compactador.webp' },
      { name: 'Camión Rosco y Barredoras Autopropulsadas', image: '/images/equipment/camion_rosco_ia.webp' },
      { name: 'Trompos y Camiones Trompo Mezcladores de Concreto', image: '/images/equipment/DJI_0281.webp' },
    ],
    bg: 'gold',
    image: machineryImages.asfalto,
  },
  {
    id: '06',
    category: 'SOPORTE Y CAMPAMENTO',
    title: 'EQUIPOS <br /><span class="text-7l-gold">MENORES Y SOPORTE</span>',
    description: 'Infraestructura móvil y generación de energía continua para garantizar la autonomía operativa total de nuestros campamentos en zonas aisladas.',
    columns: 2,
    items: [
      { name: 'Plantas Eléctricas', image: '/images/equipment/planta_electrica.webp' },
      { name: 'Compresores de Aire', image: '/images/equipment/compresor_aire_ia.webp' },
      { name: 'Torres de Iluminación', image: '/images/equipment/torre-iluminaria.webp' },
      { name: 'Máquinas de Soldar', image: '/images/equipment/maquina_soldar_ia.webp' },
      { name: 'Motobombas (6" x 6" de 80HP)', image: '/images/equipment/motobomba_ia.webp' },
      { name: 'Tráilers y Oficinas Móviles', image: '/images/equipment/trailers_oficinas.webp' },
      { name: 'Baños Portátiles y Lavamanos', image: '/images/equipment/banos_portatiles_ia.webp' },
    ],
    bg: 'dark',
    image: machineryImages.menores,
  },
];

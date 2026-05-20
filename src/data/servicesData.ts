export const serviceImages = {
  construccion: [
    '/images/services/construccion_real.png',
    '/images/services/construccion_desarrollo.png',
    '/images/services/construccion_electricas.png',
    '/images/services/construccion_facilidades.png',
  ],
  mantenimiento: [
    '/images/services/mantenimiento_real.png',
    '/images/services/mantenimiento_integridad.jpg',
    '/images/services/mantenimiento_correctivo.jpg',
    '/images/services/mantenimiento_flota.jpg',
  ],
  pozos: [
    '/images/services/pozos_real.png',
    '/images/pulling-unit.png',
    '/images/lighting-tower.png',
  ],
  ambiental: [
    '/images/services/ambiental_real.png',
    '/images/services/ambiental_remediacion.png',
    '/images/services/ambiental_gestion.jpeg',
  ],
  logistica: [
    '/images/services/logistica_real.png',
    '/images/services/logistica_transporte.jpg',
    '/images/services/logistica_flota.png',
    '/images/heavy-crane.png',
    '/images/manlift.png',
  ],
};

export interface ServiceSpecification {
  label: string;
  detail: string;
}

export interface ServiceData {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  specifications: ServiceSpecification[];
  bg: 'dark' | 'gold' | 'white' | 'tinted' | 'black';
  images: string[];
  ctaText: string;
  badges?: string[];
}

export const services: ServiceData[] = [
  {
    id: '01',
    category: 'CONSTRUCCIÓN',
    title: 'INGENIERÍA Y <span class="text-7l-gold">CONSTRUCCIÓN</span>',
    subtitle: 'Diseño, desarrollo y montaje de obras electromecánicas y civiles.',
    description: 'Ejecutamos obras complejas desde cero: tendido de tuberías (oleoductos/gasoductos), montaje de subestaciones, facilidades de producción en superficie e infraestructura civil crítica con control de calidad absoluto y estricta adherencia a plazos.',
    specifications: [
      { label: 'Desarrollo Integral', detail: 'Diseño, adquisición de materiales y ejecución de obras civiles, mecánica, eléctrica y de instrumentación.' },
      { label: 'Facilidades de Superficie', detail: 'Construcción de baterías de separación, estaciones de flujo, oleoductos, gasoductos y líneas de recolección.' },
      { label: 'Infraestructura Civil', detail: 'Construcción de locaciones de pozos, vías de acceso, campamentos, tanques de almacenamiento y obras de drenaje.' },
      { label: 'Eléctrica e Instrumentación', detail: 'Montaje de subestaciones, sistemas de control, automatización y cableado para la operación de equipos y plantas.' }
    ],
    bg: 'dark',
    images: serviceImages.construccion,
    ctaText: 'Ficha Técnica de Obras',
  },
  {
    id: '02',
    category: 'MANTENIMIENTO',
    title: 'INTEGRIDAD Y <span class="text-white">MANTENIMIENTO</span>',
    subtitle: 'Continuidad operativa y preservación de activos industriales.',
    description: 'Programas integrales de mantenimiento preventivo y correctivo para equipos mecánicos rotatorios y estáticos, pruebas no destructivas (NDT), y paradas de planta planificadas bajo altos estándares internacionales para evitar pérdidas de producción.',
    specifications: [
      { label: 'Mantenimiento Correctivo', detail: 'Reparación de equipos rotatorios (bombas, compresores, turbinas) y estáticos (tuberías, recipientes a presión).' },
      { label: 'Integridad de Tuberías', detail: 'Servicios de limpieza, pruebas no destructivas (NDT), inspección y reemplazo de líneas de producción y transferencia.' },
      { label: 'Autonomía de Flota', detail: 'Garantía de disponibilidad 24/7 de nuestros activos mediante programas de mantenimiento interno preventivo y correctivo.' }
    ],
    bg: 'gold',
    images: serviceImages.mantenimiento,
    ctaText: 'Ficha Técnica de Integridad',
  },
  {
    id: '03',
    category: 'SOLUCIONES A POZOS',
    title: 'OPERACIONES EN <span class="text-7l-gold">POZOS (WORKOVER)</span>',
    subtitle: 'Reactivación y optimización de pozos energéticos.',
    description: 'Operaciones especializadas con equipos propios de pulling (cabillero de 350HP), Flush-By, Well Testing y Hot Oil para maximizar la productividad y restablecer pozos inactivos con seguridad total en sitio.',
    specifications: [
      { label: 'Estimulación y Flujo', detail: 'Soluciones integrales para mejorar el flujo de hidrocarburos y reacondicionamiento de pozos inactivos.' },
      { label: 'Sustitución de Equipos', detail: 'Sustitución de equipos esenciales, incluyendo variadores de frecuencia y bombas de cavidad progresiva.' },
      { label: 'Soporte Logístico', detail: 'Suministro de equipos pesados para actividades logísticas transversales de operación a pozos.' }
    ],
    bg: 'white',
    images: serviceImages.pozos,
    ctaText: 'Ficha de Equipos de Pozo',
  },
  {
    id: '04',
    category: 'GESTIÓN AMBIENTAL',
    title: 'SANEAMIENTO Y <span class="text-7l-gold">RACDA</span>',
    subtitle: 'Gestión ecológica integral de desechos peligrosos.',
    description: 'Servicio habilitado de transporte y disposición final de desechos peligrosos y no peligrosos, respaldado por certificación RACDA del MINEC. Limpieza técnica de derrames e implementación de procesos de biorremediación autorizados.',
    specifications: [
      { label: 'Manejo de Residuos', detail: 'Recolección, transporte y disposición final de desechos peligrosos y no peligrosos, cortes de perforación y fluidos.' },
      { label: 'Saneamiento y Remediación', detail: 'Limpieza de derrames de hidrocarburos, y biorremediación de suelos y cuerpos de agua afectados.' }
    ],
    bg: 'tinted',
    images: serviceImages.ambiental,
    ctaText: 'Ver Constancia RACDA',
    badges: ['RACDA GENERADOR', 'RACDA MANEJADOR']
  },
  {
    id: '05',
    category: 'LOGÍSTICA Y TRANSPORTE',
    title: 'IZAMIENTO Y <span class="text-7l-gold">LOGÍSTICA</span>',
    subtitle: 'Músculo operativo pesado de alcance nacional.',
    description: 'Maniobras críticas de izamiento con grúas telescópicas certificadas (de 15 a 100 Ton), montacargas de alta capacidad, y movilización terrestre especializada de cargas sobredimensionadas con chutos, bateas y lowboys propios de 60 a 140 toneladas.',
    specifications: [
      { label: 'Transporte Especializado', detail: 'Movilización de equipos sobredimensionados (taladros, bombas, generadores) y tuberías de gran diámetro a larga distancia.' },
      { label: 'Alquiler de Maquinaria', detail: 'Suministro de grúas (móviles y sobre orugas), excavadoras, montacargas pesados y tractores de cadena.' },
      { label: 'Izamiento y Posicionamiento', detail: 'Servicios especializados de izaje crítico y maniobras para el montaje y desmontaje de estructuras y plantas.' },
      { label: 'Mantenimiento de Flota', detail: 'Administración, mantenimiento preventivo y correctivo de la flota de transporte y maquinaria pesada.' }
    ],
    bg: 'black',
    images: serviceImages.logistica,
    ctaText: 'Capacidad de Flota',
  },
];

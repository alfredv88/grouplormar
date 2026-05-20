import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/servicesData';

// Mapeo seguro de slugs para la generación estática
const slugToIndex: Record<string, number> = {
  'construccion': 0,
  'mantenimiento': 1,
  'pozos': 2,
  'ambiental': 3,
  'logistica': 4,
};

export async function generateStaticParams() {
  return Object.keys(slugToIndex).map((slug) => ({
    rubro: slug,
  }));
}

export default function ServicioDetallePage({ params }: { params: { rubro: string } }) {
  const index = slugToIndex[params.rubro];
  
  if (index === undefined) {
    notFound();
  }

  const service = services[index];
  
  // Variables de estilo inmersivo basadas en la estética del brochure
  const isGold = service.bg === 'gold';
  const isWhite = service.bg === 'white';
  const isTinted = service.bg === 'tinted';
  
  const bgClass = isGold ? 'bg-7l-gold text-black' : 
                  isWhite ? 'bg-[#F7F7F7] text-zinc-900' : 
                  isTinted ? 'bg-[#0a1111] text-white' : 
                  'bg-[#080808] text-white';

  return (
    <main className="min-h-screen">
      {/* ==========================================
          P2: HERO CINEMÁTICO INDUSTRIAL
          ========================================== */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center pt-24 overflow-hidden border-b border-white/10">
        {/* Background Image principal del servicio */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.images[0] || '/images/default-hero.jpg'}
            alt={`Hero - ${service.category}`}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay oscuro para legibilidad total del texto */}
          <div className="absolute inset-0 bg-black/75 z-10" />
        </div>

        {/* Contenido Central del Hero */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start">
          <Link href="/servicios" className="flex items-center text-zinc-400 hover:text-7l-gold transition-colors font-montserrat text-[10px] md:text-xs uppercase font-bold tracking-widest mb-8">
            <ChevronRight size={14} className="rotate-180 mr-1" />
            Volver a Portafolio de Servicios
          </Link>
          
          <div className="inline-block px-3 py-1.5 bg-7l-gold/10 border border-7l-gold/30 text-7l-gold font-black uppercase text-[10px] tracking-widest mb-6 shadow-sm backdrop-blur-sm">
            División Operativa Especializada
          </div>
          
          <h1 
            className="font-future text-4xl md:text-5xl lg:text-7xl tracking-widest uppercase text-white max-w-5xl leading-tight"
            dangerouslySetInnerHTML={{ __html: service.title }}
          />
          <p className="mt-6 md:mt-8 font-montserrat text-lg md:text-xl text-zinc-300 max-w-2xl font-medium border-l-2 border-7l-gold pl-4">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* ==========================================
          P3: PANEL HMI / CONTENIDO TÉCNICO
          ========================================== */}
      <section className={`w-full py-24 px-6 md:px-12 ${bgClass}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA (2/3): Core de Información */}
          <div className="lg:col-span-8">
            <h2 className="font-future text-2xl md:text-3xl mb-8 tracking-widest uppercase flex items-center gap-4">
              <span className={`w-8 h-[2px] ${isGold || isWhite ? 'bg-zinc-800' : 'bg-7l-gold'}`} />
              Alcance <span className={isGold || isWhite ? 'text-zinc-600' : 'text-zinc-500'}>Técnico</span>
            </h2>
            <p className={`font-montserrat text-base md:text-lg leading-relaxed ${isGold ? 'text-zinc-800' : isWhite ? 'text-zinc-700' : 'text-zinc-400'}`}>
              {service.description}
            </p>

            {/* Grid de Especificaciones Técnicas Extraídas del Brochure */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.specifications.map((spec, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 md:p-8 border transition-all duration-300 ${
                    isGold ? 'border-black/10 bg-black/5 hover:border-black/30 hover:-translate-y-1' : 
                    isWhite ? 'border-zinc-200 bg-white hover:border-7l-gold/50 hover:shadow-lg hover:-translate-y-1' : 
                    'border-white/5 bg-white/[0.02] hover:border-7l-gold/30 hover:bg-white/[0.04] hover:-translate-y-1'
                  }`}
                >
                  <h3 className="font-montserrat font-bold text-sm md:text-base uppercase tracking-wider mb-4 flex items-start gap-3">
                    <span className={`w-1.5 h-1.5 mt-2 flex-shrink-0 ${isGold ? 'bg-black' : 'bg-7l-gold'}`} />
                    {spec.label}
                  </h3>
                  <p className={`font-montserrat text-sm leading-relaxed ${isGold ? 'text-zinc-800' : isWhite ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {spec.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Badges de Autoridad Corporativa */}
            {service.badges && service.badges.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-4 pt-8 border-t border-black/10 dark:border-white/10">
                {service.badges.map((badge, idx) => (
                  <div key={idx} className={`flex items-center gap-2 px-4 py-2 border text-[10px] md:text-xs font-black uppercase tracking-widest shadow-sm ${
                    isGold ? 'border-black/20 text-black bg-black/5' :
                    isWhite ? 'border-zinc-300 text-zinc-800 bg-white' :
                    'border-7l-gold/30 text-white bg-7l-gold/5'
                  }`}>
                    <CheckCircle2 size={14} className={isGold || isWhite ? "text-zinc-900" : "text-7l-gold"} />
                    {badge}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* COLUMNA DERECHA (1/3): Galería Menor y CTA Táctico */}
          <div className="lg:col-span-4 space-y-8">
            {/* Renderizar solo las imágenes 2 y 3 del servicio para complementar la lectura */}
            {service.images.slice(1, 3).map((img, idx) => (
              <div key={idx} className={`relative w-full aspect-[4/3] border group overflow-hidden ${isGold || isWhite ? 'border-black/10' : 'border-white/10'}`}>
                <Image
                  src={img}
                  alt={`${service.category} - Detail ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
              </div>
            ))}

            {/* Panel de Derivación (Cross-linking B2B a Maquinaria y Contacto) */}
            <div className={`mt-12 p-8 border ${
              isGold || isWhite ? 'border-black bg-black text-white' : 
              'border-7l-gold/20 bg-[#111] text-white'
            }`}>
              <h4 className="font-future text-xl tracking-widest uppercase mb-4">Ejecución Garantizada</h4>
              <p className="font-montserrat text-sm text-zinc-400 mb-8 leading-relaxed">
                Contamos con maquinaria pesada propia y músculo operativo listo para movilización inmediata.
              </p>
              
              <Link href="/maquinaria" className="flex items-center justify-between w-full py-4 border-b border-white/10 font-montserrat text-[11px] font-bold uppercase tracking-widest hover:text-7l-gold hover:border-7l-gold transition-colors mb-2">
                <span>Ver Flota Pesada</span>
                <ArrowRight size={14} />
              </Link>
              
              <Link href="/contacto" className="flex items-center justify-between w-full py-4 border-b border-white/10 font-montserrat text-[11px] font-bold uppercase tracking-widest hover:text-7l-gold hover:border-7l-gold transition-colors">
                <span>Contactar Asesoría Técnica</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

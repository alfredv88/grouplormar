import React from 'react';
import Image from 'next/image';
import { Shield } from 'lucide-react';
import { machineryCategories } from '@/data/machineryData';

export const metadata = {
  title: 'Maquinarias | Grupo Lormar',
  description: 'Catálogo de maquinaria y equipos propios de Grupo Lormar.',
};

export default function MaquinariasPage() {
  return (
    <main className="bg-black min-h-screen text-white pt-[104px]">
      
      {/* 1. HERO DE ENTRADA */}
      <section className="h-[60vh] flex flex-col justify-center relative bg-black border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-40">
          <div 
            className="w-full h-full"
            style={{ 
              backgroundImage: "url('/images/equipment/pala_mecanica.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
            }}
          />
        </div>
        
        {/* Overlay degradado ambiental */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-7l-gold/5 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
            LORMAR CORPORATION
          </span>
          <h1 className="text-5xl md:text-7xl font-future text-white uppercase tracking-normal mb-4 leading-none">
            <span className="text-7l-gold">MÚSCULO</span> <br />OPERATIVO
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-montserrat font-medium max-w-2xl leading-relaxed">
            Toda la maquinaria listada es propiedad de Grupo Lormar. Sin intermediarios, garantizamos disponibilidad inmediata y mantenimiento interno riguroso para los proyectos industriales más exigentes.
          </p>
        </div>
      </section>

      {/* LISTADO DE MAQUINARIA CON ALTERNANCIA INMERSIVA */}
      {machineryCategories.map((cat, index) => {
        const isGold = cat.bg === 'gold';
        const isDark = cat.bg === 'dark';
        const isEven = index % 2 === 0;

        return (
          <React.Fragment key={cat.id}>
            {/* Transición Industrial Opcional entre secciones, al igual que en Servicios */}
            {index === 3 && (
              <section className="py-32 bg-black relative overflow-hidden">
                {/* Bordes Industriales Superior e Inferior */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-20" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-20" />
                <div className="absolute inset-0 z-0 opacity-10 bg-industrial-grid" />
                <div className="absolute inset-0 bg-gradient-to-r from-7l-gold/10 via-transparent to-7l-gold/10 pointer-events-none" />
                
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
                  <span className="font-montserrat text-7l-gold text-[10px] font-black tracking-[0.6em] uppercase mb-4 block">
                    SOPORTE CRÍTICO
                  </span>
                  <h2 className="text-4xl md:text-6xl font-future text-white uppercase tracking-normal max-w-4xl mx-auto leading-tight mb-6">
                    AUTONOMÍA TOTAL EN LA EJECUCIÓN DE <span className="text-7l-gold">CADA PROYECTO</span>
                  </h2>
                  <p className="text-zinc-400 font-montserrat font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                    Al operar con equipos 100% propios, eliminamos dependencias de terceros, mitigamos riesgos de suministro y aseguramos la continuidad operativa en todo momento.
                  </p>
                </div>
              </section>
            )}

            <section className={`relative w-full overflow-hidden flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-[600px] group`}>
              {/* Contenedor de Imagen */}
              <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`Equipos de ${cat.title.replace(/<[^>]+>/g, '')}`}
                  fill
                  className={`object-cover transition-transform duration-1000 group-hover:scale-105 ${isGold ? 'brightness-90 contrast-110' : 'brightness-75 contrast-110'}`}
                />
                {/* Overlay sutil al pasar el mouse */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              {/* Contenedor de Contenido */}
              <div 
                className={`relative w-full lg:w-1/2 flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6 ${
                  isGold ? 'bg-7l-gold' : 'bg-black'
                }`}
                style={isGold ? { backgroundImage: "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 0)", backgroundSize: "24px 24px" } : {}}
              >
                {/* Bordes Industriales Verticales entre Imagen y Texto */}
                <div className={`absolute top-0 bottom-0 w-[1px] hidden lg:block ${isEven ? 'left-0' : 'right-0'} ${
                  isGold ? 'bg-gradient-to-b from-transparent via-black/20 to-transparent' : 'bg-gradient-to-b from-transparent via-7l-gold/30 to-transparent'
                }`} />

                <span className={`font-montserrat text-[10px] font-black tracking-[0.5em] uppercase ${
                  isGold ? 'text-black/60' : 'text-zinc-500'
                }`}>
                  {cat.category}
                </span>
                
                <h2 
                  className={`text-4xl md:text-5xl font-future leading-none uppercase ${
                    isGold ? 'text-black' : 'text-white'
                  }`}
                  dangerouslySetInnerHTML={{ __html: cat.title }}
                />
                
                <div className="space-y-4">
                  <ul className={`list-none space-y-3 font-montserrat font-medium text-sm md:text-base ${
                    cat.columns === 2 ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-4 space-y-0 gap-y-3' : ''
                  } ${isGold ? 'text-black' : 'text-zinc-300'}`}>
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${isGold ? 'bg-black' : 'bg-7l-gold'}`} /> 
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </React.Fragment>
        );
      })}

      {/* CTA FINAL */}
      <section className="py-32 bg-[#080808] border-t border-white/5 relative overflow-hidden">
        {/* Borde Industrial CTA */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-7l-gold/30 to-transparent z-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Shield size={48} className="text-7l-gold mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-future text-white uppercase mb-6 leading-tight">
            DISPONIBILIDAD INMEDIATA PARA <br />
            <span className="text-7l-gold">PROYECTOS CRÍTICOS</span>
          </h2>
          <p className="text-zinc-400 font-montserrat mb-10 max-w-2xl mx-auto">
            Nuestra flota está sometida a un programa de mantenimiento riguroso que garantiza operatividad continua sin retrasos en su obra.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-7l-gold text-black font-montserrat font-bold py-4 px-8 tracking-widest hover:bg-white transition-colors uppercase text-sm">
              Solicitar Equipos
            </button>
            <button className="w-full sm:w-auto border border-white/20 text-white font-montserrat font-bold py-4 px-8 tracking-widest hover:border-7l-gold hover:text-7l-gold transition-colors uppercase text-sm">
              Ver Fichas Técnicas
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}


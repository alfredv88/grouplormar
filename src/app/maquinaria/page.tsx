import Image from 'next/image';
import { Wrench, Shield, Pickaxe, Truck, Zap, Hammer } from 'lucide-react';

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

      {/* 2. IZAMIENTO Y ELEVACIÓN (ORO) */}
      <section className="relative w-full overflow-hidden flex flex-col lg:flex-row-reverse min-h-[600px]">
        <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
          <Image
            src="/images/equipment/izamiento_100t_real_daylight.png"
            alt="Equipos de Izamiento"
            fill
            className="object-cover brightness-90 contrast-110"
          />
        </div>
        <div className="relative w-full lg:w-1/2 bg-7l-gold flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6"
             style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 0)", backgroundSize: "24px 24px" }}>
          <span className="font-montserrat text-black/60 text-[10px] font-black tracking-[0.5em] uppercase">
            Categoría 01 & 06
          </span>
          <h2 className="text-4xl md:text-5xl font-future text-black leading-none uppercase">
            IZAMIENTO Y <br />
            <span className="text-white">ELEVACIÓN</span>
          </h2>
          <div className="space-y-4">
            <ul className="list-none space-y-3 font-montserrat text-black font-medium text-sm md:text-base">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Grúas Telescópicas (15, 45, 60, 75 y 100 Ton)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Brazos Hidráulicos (6, 15, 20 y 25 Ton)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Montacargas pesados (6 a 25 Ton)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Manlift y Camión Cesta</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. MOVIMIENTO DE TIERRA (DARK) */}
      <section className="relative w-full overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
          <Image
            src="/images/equipment/excavadora_real_daylight.png"
            alt="Movimiento de Tierra"
            fill
            className="object-cover brightness-75 contrast-110"
          />
        </div>
        <div className="relative w-full lg:w-1/2 bg-black flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6">
          <span className="font-montserrat text-zinc-500 text-[10px] font-black tracking-[0.5em] uppercase">
            Categoría 02 & 04
          </span>
          <h2 className="text-4xl md:text-5xl font-future text-white leading-none uppercase">
            MOVIMIENTO <br />
            <span className="text-7l-gold">DE TIERRA</span>
          </h2>
          <div className="space-y-4">
            <ul className="list-none space-y-3 font-montserrat text-zinc-300 font-medium text-sm md:text-base">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Tractores y Mototraíllas</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Motoniveladoras</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Excavadoras y Retroexcavadoras</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Cargadores Frontales y Minishowers</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Compactadores (Pata de Cabra y Vibrocompactador)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. TRANSPORTE ESPECIALIZADO (ORO) */}
      <section className="relative w-full overflow-hidden flex flex-col lg:flex-row-reverse min-h-[600px]">
        <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
          <Image
            src="/images/equipment/transporte_lowboy_real_daylight.png"
            alt="Transporte Pesado"
            fill
            className="object-cover brightness-90 contrast-110"
          />
        </div>
        <div className="relative w-full lg:w-1/2 bg-7l-gold flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6"
             style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 0)", backgroundSize: "24px 24px" }}>
          <span className="font-montserrat text-black/60 text-[10px] font-black tracking-[0.5em] uppercase">
            Categoría 05
          </span>
          <h2 className="text-4xl md:text-5xl font-future text-black leading-none uppercase">
            TRANSPORTE Y <br />
            <span className="text-white">LOGÍSTICA</span>
          </h2>
          <div className="space-y-4">
            <ul className="list-none space-y-3 font-montserrat text-black font-medium text-sm md:text-base">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Chutos con Lowboy (60 a 140 Ton)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Chutos con Batea y Volqueta</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Vacuum de 160 BLS y Supervactor</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Camiones Volteo, Cisterna, Cava, 350</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Camionetas Pick Up (Flota Liviana)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. SERVICIOS A POZOS (DARK) */}
      <section className="relative w-full overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
          <Image
            src="/images/equipment/cabillero_real_daylight.png"
            alt="Servicios a Pozos"
            fill
            className="object-cover brightness-75 contrast-110"
          />
        </div>
        <div className="relative w-full lg:w-1/2 bg-black flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6">
          <span className="font-montserrat text-zinc-500 text-[10px] font-black tracking-[0.5em] uppercase">
            Categoría 03
          </span>
          <h2 className="text-4xl md:text-5xl font-future text-white leading-none uppercase">
            SERVICIOS <br />
            <span className="text-7l-gold">A POZOS</span>
          </h2>
          <div className="space-y-4">
            <ul className="list-none space-y-3 font-montserrat text-zinc-300 font-medium text-sm md:text-base">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Cabillero de 350HP</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Camión Hot Oil</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Equipos Flush-By</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Equipos de Pruebas a Pozos (Well Testing)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. ASFALTO Y CONCRETO (ORO) */}
      <section className="relative w-full overflow-hidden flex flex-col lg:flex-row-reverse min-h-[600px]">
        <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
          <Image
            src="/images/equipment/asphalt_finisher_real_daylight.png"
            alt="Equipos de Asfalto"
            fill
            className="object-cover brightness-90 contrast-110"
          />
        </div>
        <div className="relative w-full lg:w-1/2 bg-7l-gold flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6"
             style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 0)", backgroundSize: "24px 24px" }}>
          <span className="font-montserrat text-black/60 text-[10px] font-black tracking-[0.5em] uppercase">
            Categoría 07 & 08
          </span>
          <h2 className="text-4xl md:text-5xl font-future text-black leading-none uppercase">
            OBRAS CIVILES Y <br />
            <span className="text-white">ASFALTO</span>
          </h2>
          <div className="space-y-4">
            <ul className="list-none space-y-3 font-montserrat text-black font-medium text-sm md:text-base">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Finisher y Escarificadoras de Asfalto</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Rodillos Lisos y Compactadores de Neumáticos</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Camión Rosco y Barredoras Autopropulsadas</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Trompos y Camiones Trompo Mezcladores de Concreto</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. EQUIPOS MENORES (DARK) */}
      <section className="relative w-full overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
          <Image
            src="/images/lighting-tower.png"
            alt="Equipos Menores"
            fill
            className="object-cover brightness-75 contrast-110"
          />
        </div>
        <div className="relative w-full lg:w-1/2 bg-black flex flex-col justify-center p-12 md:p-20 lg:p-24 space-y-6">
          <span className="font-montserrat text-zinc-500 text-[10px] font-black tracking-[0.5em] uppercase">
            Categoría 09
          </span>
          <h2 className="text-4xl md:text-5xl font-future text-white leading-none uppercase">
            EQUIPOS <br />
            <span className="text-7l-gold">MENORES Y SOPORTE</span>
          </h2>
          <div className="space-y-4">
            <ul className="list-none space-y-3 font-montserrat text-zinc-300 font-medium text-sm md:text-base grid grid-cols-1 sm:grid-cols-2 gap-x-4">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Plantas Eléctricas (100 - 1000 KVA)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Compresores de Aire (185 CFM)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Torres de Iluminación</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Máquinas de Soldar</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Motobombas (6” x 6” de 80HP)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Equipos Sandblasting / Airless</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Martillos Neumáticos</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-7l-gold rounded-full" /> Tráilers, Oficinas y Comedores</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-[#080808] border-t border-white/5 relative overflow-hidden">
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

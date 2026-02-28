import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Settings,
  Zap,
  Shield,
  Factory,
  HardHat,
  Drill,
  Box,
  Truck,
  Award,
  Users,
  ChevronRight,
  Download,
  CheckCircle2,
  MapPin,
  ClipboardCheck,
  Cpu,
  ShieldCheck,
  Plus,
  Minus,
  Settings as SettingsIcon
} from "lucide-react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <span className="text-white font-bold text-xl font-teko">L</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-black font-bold text-2xl tracking-tighter uppercase font-teko">LORMAR</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Servicios y Construcciones</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="underline decoration-2 underline-offset-8">Inicio</Link>
            <Link href="/servicios" className="hover:opacity-50 transition-none">Servicios</Link>
            <Link href="/proyectos" className="hover:opacity-50 transition-none">Proyectos</Link>
            <Link href="/nosotros" className="hover:opacity-50 transition-none">Nosotros</Link>
            <Link href="/responsabilidad" className="hover:opacity-50 transition-none">Responsabilidad</Link>
            <Link href="/contacto" className="border border-black px-6 py-2 hover:bg-black hover:text-white transition-none">Cotizar</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden" aria-label="Introducción">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-excavator.png"
            alt="Excavadora Lormar en obra industrial"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute top-20 left-20 bottom-20 right-20 z-20 pointer-events-none border border-white/10 border-r-0 border-b-0 hidden lg:block"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-30 w-full pt-20">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-white"></div>
              <span className="text-white text-xs font-bold uppercase tracking-[0.4em]">Soluciones Globales</span>
            </div>

            <h1 className="text-7xl md:text-[140px] font-black text-white leading-[0.8] font-teko uppercase italic">
              INGENIERÍA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">CALIFICADA</span>
            </h1>

            <p className="text-xl text-white/80 max-w-xl leading-relaxed font-montserrat font-medium border-l-2 border-white/50 pl-6 italic">
              Impulsamos el desarrollo industrial con maquinaria de última generación y personal altamente capacitado para proyectos de alta complejidad.
            </p>

            <div className="flex flex-wrap gap-6 pt-6 uppercase tracking-[0.2em] font-bold text-xs">
              <Link href="/contacto" aria-label="Ver brochure corporativo" className="px-10 py-5 bg-white text-black hover:bg-black hover:text-white border border-white transition-none flex items-center gap-3">
                COTIZAR PROYECTO
                <ArrowRight size={16} />
              </Link>
              <Link href="/nosotros" aria-label="Ver maquinaria disponible" className="px-10 py-5 border border-white text-white hover:bg-white hover:text-black transition-none">
                NUESTRA FLOTA
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 md:left-20 z-30 flex gap-4">
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white bg-black/20 backdrop-blur-md">
            <HardHat size={20} />
          </div>
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white bg-black/20 backdrop-blur-md">
            <Drill size={20} />
          </div>
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white bg-black/20 backdrop-blur-md">
            <Box size={20} />
          </div>
        </div>
      </section>

      {/* Client Logos / Trust Signals */}
      <section className="py-10 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-center mb-8 opacity-40 italic">CONFIANZA RESPALDADA POR EMPRESAS LÍDERES</p>
          <div className="flex flex-wrap justify-between items-center gap-12 grayscale opacity-40">
            <div className="text-3xl font-black font-teko">SIDOR</div>
            <div className="text-2xl font-black font-teko border-b-2 border-black">CVG VENALUM</div>
            <div className="text-3xl font-black font-teko italic">PDVSA</div>
            <div className="text-2xl font-black font-teko underline decoration-black underline-offset-4">FERROMINERA</div>
            <div className="text-3xl font-black font-teko">TGI</div>
          </div>
        </div>
      </section>

      {/* Who We Are - Industrial Style Upgraded */}
      <section className="py-40 px-6 border-b border-black relative overflow-hidden bg-industrial-grid clip-diagonal-left" id="nosotros">
        <div className="absolute -right-20 top-20 text-black/5 font-black text-[300px] font-teko leading-none pointer-events-none uppercase italic border-black select-none">
          QUALIFIED
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 relative z-10">
          <div className="lg:col-span-12 space-y-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] border border-black px-4 py-2 bg-white">Sobre Grupo Lormar</span>
          </div>

          <div className="lg:col-span-12 grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-12">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-black"></div>
                <h2 className="text-6xl md:text-8xl font-black font-teko uppercase italic leading-[0.8]">
                  FUERZA Y <br />
                  <span className="bg-black text-white px-3 py-1">PRECISIÓN</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="border border-black p-10 space-y-4 hover:bg-black hover:text-white transition-all group relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-20 h-20 bg-black/5 group-hover:bg-white/5 rotate-45 translate-x-10 translate-y-10"></div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] block underline decoration-2">Estrategia</span>
                  <p className="text-sm opacity-70 italic leading-relaxed">Ejecutar ingeniería de vanguardia con activos propios, garantizando la continuidad operativa de nuestros aliados.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-16">
              <p className="text-3xl md:text-5xl font-teko font-medium text-black/80 leading-tight italic uppercase">
                "Transformamos la <span className="underline">ingeniería pesada</span> en resultados tangibles."
              </p>

              <div className="grid grid-cols-2 gap-x-12 gap-y-16">
                {[
                  { v: "Responsabilidad", d: "Soporte técnico incondicional." },
                  { v: "Integridad", d: "Ética en cada proceso." },
                  { v: "Calidad", d: "Superando normativas ISO." },
                  { v: "Innovación", d: "Tecnología de punta." }
                ].map((val, i) => (
                  <div key={i} className={`space-y-4 ${i % 2 !== 0 ? 'mt-12' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-[1px] bg-black"></div>
                      <span className="text-3xl font-black font-teko uppercase italic tracking-tight leading-none">{val.v}</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 pl-14">{val.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers / Stats */}
      <section className="py-20 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <span className="text-6xl font-black font-teko block">+15</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-50">Años de Trayectoria</span>
            </div>
            <div className="space-y-2">
              <span className="text-6xl font-black font-teko block">+200</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-50">Proyectos Ejecutados</span>
            </div>
            <div className="space-y-2">
              <span className="text-6xl font-black font-teko block">+50</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-50">Equipos de Maquinaria</span>
            </div>
            <div className="space-y-2">
              <span className="text-6xl font-black font-teko block">0</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-50">Accidentes Reportados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology / Process */}
      <section className="py-32 px-6 border-b border-black bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black font-teko uppercase italic mb-20">NUESTRO <span className="underline">PROCESO</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Consulta", desc: "Evaluación técnica y alcance del proyecto." },
              { num: "02", title: "Planificación", desc: "Ingeniería de detalle y logística de equipos." },
              { num: "03", title: "Ejecución", desc: "Operación en campo bajo norma de seguridad." },
              { num: "04", title: "Entrega", desc: "Certificación de obra y soporte post-proyecto." }
            ].map((step, idx) => (
              <div key={idx} className="space-y-4 border-t border-black pt-8">
                <span className="text-4xl font-black font-teko">{step.num}</span>
                <h4 className="text-xl font-bold uppercase">{step.title}</h4>
                <p className="text-xs opacity-60 font-bold uppercase tracking-widest leading-loose">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Industrial Asymmetry */}
      <section className="py-40 px-6 relative" id="servicios">
        <div className="absolute inset-0 bg-industrial-grid opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24 space-y-4">
            <h2 className="text-7xl md:text-[120px] font-black font-teko uppercase italic leading-[0.7]">
              DOMINIO <br /> <span className="underline">OPERATIVO</span>
            </h2>
            <div className="flex items-center gap-6">
              <div className="h-[1px] w-24 bg-black"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.6em] opacity-40">Categorías de acción técnica</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {[
              {
                title: "Construcción",
                desc: "Ingeniería civil y mecánica de alta complejidad.",
                icon: <HardHat size={40} />,
                items: ["Vialidad", "Montajes", "Oleoductos"],
                cols: "md:col-span-7"
              },
              {
                title: "Mantenimiento",
                desc: "Integridad y reparación integral.",
                icon: <SettingsIcon size={40} />,
                items: ["Paradas Planta", "NDT"],
                cols: "md:col-span-5"
              },
              {
                title: "Pozos",
                desc: "Servicios especializados a pozos activos.",
                icon: <Drill size={40} />,
                items: ["Estimulación", "Workover"],
                cols: "md:col-span-4"
              },
              {
                title: "Ambiental",
                desc: "Gestión sustentable de residuos.",
                icon: <Shield size={40} />,
                items: ["Saneamiento", "Residuos"],
                cols: "md:col-span-4"
              },
              {
                title: "Logística",
                desc: "Izamiento y transporte pesado.",
                icon: <Truck size={40} />,
                items: ["Maquinaria", "Logística"],
                cols: "md:col-span-4"
              }
            ].map((s, i) => (
              <Link key={i} href="/servicios" className={`${s.cols} bg-white border border-black p-12 hover:bg-black hover:text-white transition-all group min-h-[400px] flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute right-0 top-0 w-32 h-32 bg-black/5 group-hover:bg-white/5 -translate-y-16 translate-x-16 rotate-45"></div>

                <div className="space-y-8 relative z-10">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-4xl font-black font-teko uppercase italic leading-none mb-4">{s.title}</h3>
                    <p className="text-xs opacity-60 leading-relaxed italic max-w-xs">{s.desc}</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-black/10 group-hover:border-white/20 mt-8 relative z-10">
                  <div className="flex flex-wrap gap-4">
                    {s.items.map((item, idx) => (
                      <span key={idx} className="text-[9px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-80 border border-current px-2 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-32 px-6 border-y border-black bg-white" id="proyectos">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-7xl font-black font-teko uppercase italic leading-none">ÚLTIMOS <span className="text-white bg-black px-2">PROYECTOS</span></h2>
            <Link href="/proyectos" aria-label="Ver todos los proyectos" className="text-[10px] font-bold uppercase tracking-widest border border-black px-8 py-4 hover:bg-black hover:text-white transition-none">
              Ver portafolio <ArrowRight size={14} className="inline ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-black border border-black">
            <div className="bg-white p-12 flex flex-col">
              <div className="flex-grow">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 italic">Industrial / 2024</span>
                <h3 className="text-5xl font-black font-teko uppercase leading-tight mt-6 mb-6">Planta Procesadora de <br /> Alimentos Industrial</h3>
                <p className="text-sm opacity-60 leading-relaxed font-montserrat mb-12 min-h-[48px]">Instalación completa de sistemas de automatización y montaje de líneas de producción.</p>
              </div>
              <div className="aspect-video bg-black/5 relative overflow-hidden group border border-black">
                <Image src="/images/hero-excavator.png" alt="Proyecto de planta industrial" fill className="object-cover grayscale group-hover:grayscale-0 transition-none" />
              </div>
            </div>
            <div className="bg-white p-12 flex flex-col">
              <div className="flex-grow">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 italic">Infraestructura / 2023</span>
                <h3 className="text-5xl font-black font-teko uppercase leading-tight mt-6 mb-6">Desarrollo de <br /> Vialidad Pesada</h3>
                <p className="text-sm opacity-60 leading-relaxed font-montserrat mb-12 min-h-[48px]">Movimiento de tierras y estabilización de terrenos complejo industrial.</p>
              </div>
              <div className="aspect-video bg-black/5 relative overflow-hidden group border border-black">
                <Image src="/images/hero-excavator.png" alt="Proyecto de vialidad pesada" fill className="object-cover grayscale group-hover:grayscale-0 transition-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones y Cumplimiento - Industrial Style Upgrade */}
      <section className="py-48 px-6 bg-slate-900 text-white overflow-hidden relative clip-diagonal-both bg-industrial-grid-dark" id="certificaciones">
        <div className="absolute right-0 top-0 h-full w-1/3 border-l border-white/5 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="inline-block border-l-4 border-white pl-4">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] opacity-60">Compliance Industrial</span>
              </div>
              <h2 className="text-7xl md:text-9xl font-black font-teko uppercase italic leading-[0.7]">
                RESPALDO <br /> <span className="bg-white text-black px-4 italic">TÉCNICO</span>
              </h2>
              <p className="text-xl opacity-50 italic font-medium leading-relaxed max-w-lg">
                Garantizamos la legitimidad operativa mediante el cumplimiento estricto de los marcos regulatorios nacionales.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "SENIAT", full: "RIF: J-30657965-6", desc: "Contribuyente Especial." },
                { label: "MINEC", full: "Manejador Sustancias", desc: "Permisería Ambiental." },
                { label: "RNC", full: "Habilitado", desc: "Registro Nacional de Contratistas." },
                { label: "INSPSAL", full: "SSO Cumplimiento", desc: "Seguridad y Salud Laboral." }
              ].map((c, i) => (
                <div key={i} className={`p-10 border border-white/10 hover:border-white transition-all bg-black/40 backdrop-blur-sm group relative ${i === 1 ? 'sm:mt-8' : ''} ${i === 2 ? 'sm:-mt-8' : ''}`}>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/0 group-hover:border-white transition-all"></div>
                  <span className="text-5xl font-black font-teko uppercase italic block mb-2">{c.label}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-40 block mb-6">{c.full}</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest leading-loose opacity-60 border-t border-white/10 pt-4">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 border-b border-black bg-slate-50">
        <TestimonialsCarousel />
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl font-black font-teko uppercase italic leading-none mb-8">PREGUNTAS <br /> <span className="underline">FRECUENTES</span></h2>
            <p className="text-lg opacity-60 italic border-l-4 border-black pl-6">Resolvemos dudas técnicas y comerciales para departamentos de procura industriales.</p>
          </div>
          <div className="divide-y divide-black border-y border-black">
            {[
              { q: "¿Cuentan con maquinaria propia o alquilada?", a: "Contamos con un parque de maquinaria propio completo, lo que garantiza disponibilidad inmediata y costos competitivos." },
              { q: "¿Cuál es su alcance geográfico?", a: "Nuestra base está en Bolívar, pero ejecutamos proyectos en todo el territorio nacional de Venezuela." },
              { q: "¿Tienen certificaciones de seguridad?", a: "Operamos bajo estrictas normas internacionales de seguridad industrial y salud ocupacional (SISO)." },
              { q: "¿Realizan paradas de planta de emergencia?", a: "Sí, disponemos de cuadrillas de respuesta rápida para mantenimiento correctivo 24/7." }
            ].map((faq, i) => (
              <div key={i} className="py-6 group cursor-pointer hover:bg-slate-50 px-4 transition-none">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold uppercase tracking-tight text-xl">{faq.q}</h4>
                  <Plus size={20} className="group-hover:rotate-45 transition-none" />
                </div>
                <p className="text-sm opacity-60 leading-relaxed group-hover:block">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 ">
            <div className="relative aspect-square border-2 border-black p-2 max-w-sm mx-auto lg:mx-0">
              <div className="bg-black w-full h-full flex flex-col items-center justify-center p-12 text-center space-y-8">
                <ShieldCheck size={100} className="text-white/20" />
                <h3 className="text-white text-4xl font-black font-teko uppercase leading-tight">CONCENTRACIÓN TOTAL EN LA SEGURIDAD</h3>
                <div className="w-12 h-1 bg-white"></div>
                <p className="text-white/60 text-xs uppercase tracking-[0.2em] font-bold">Cero accidentes ocurridos en los últimos 4 años.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-12">
            <h2 className="text-7xl font-black font-teko uppercase italic leading-none">VALOR <span className="underline">DIFERENCIAL</span></h2>
            <div className="grid gap-10">
              {[
                { title: "Personal Calificado", text: "Ingenieros con certificaciones internacionales en gestión de proyectos industriales.", icon: <ClipboardCheck size={24} />, link: "/nosotros" },
                { title: "Maquinaria Propia", text: "Disminución de costos y tiempos de espera mediante logística propia eficiente.", icon: <Truck size={24} />, link: "/nosotros" },
                { title: "Soporte Digital", text: "Reportes de avance digitalizados para transparencia absoluta con el cliente.", icon: <Cpu size={24} />, link: "/contacto" }
              ].map((item, i) => (
                <Link key={i} href={item.link} className="flex gap-6 group items-start hover:bg-slate-50 p-4 transition-all border border-transparent hover:border-black/5">
                  <div className="p-3 bg-black text-white">{item.icon}</div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold uppercase tracking-tight">{item.title}</h4>
                    <p className="text-sm opacity-60 leading-relaxed">{item.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section - Interactive Maps */}
      <section className="border-y border-black bg-slate-900 relative min-h-[600px] py-20 px-6">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-excavator.png')] bg-cover grayscale pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 relative z-10 w-full font-teko">
          <div className="bg-white border border-black shadow-none flex flex-col overflow-hidden group">
            <div className="h-64 w-full bg-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.336!2d-64.678!3d10.183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c28ca3629571e19%3A0x6a1f1082c50e1898!2sLecher%C3%ADa!5e0!3m2!1ses!2sve!4v1709156000000!5m2!1ses!2sve"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <Link href="/contacto" className="p-8 text-center space-y-4 hover:bg-black hover:text-white transition-all">
              <div className="flex justify-center items-center gap-2">
                <MapPin size={24} />
                <h3 className="text-3xl font-black uppercase italic leading-none">Oficina Administrativa</h3>
              </div>
              <p className="text-sm font-montserrat font-bold uppercase tracking-[0.05em] leading-relaxed opacity-60">
                Ver detalles de contacto
              </p>
            </Link>
          </div>

          <div className="bg-white border border-black shadow-none flex flex-col overflow-hidden group">
            <div className="h-64 w-full bg-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.5!2d-64.7!3d10.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c28ca8d963f45d5%3A0x3300f89816298517!2sBarcelona!5e0!3m2!1ses!2sve!4v1709156000000!5m2!1ses!2sve"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <Link href="/contacto" className="p-8 text-center space-y-4 hover:bg-black hover:text-white transition-all">
              <div className="flex justify-center items-center gap-2">
                <Factory size={24} />
                <h3 className="text-3xl font-black uppercase italic leading-none">Base Operativa</h3>
              </div>
              <p className="text-sm font-montserrat font-bold uppercase tracking-[0.05em] leading-relaxed opacity-60">
                Ver detalles de contacto
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Brochure CTA */}
      <section className="bg-black text-white py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <h2 className="text-7xl md:text-9xl font-black font-teko uppercase italic leading-[0.8]">CATÁLOGO <br /> <span className="text-black bg-white px-2">CORPORATIVO</span></h2>
          <p className="text-lg opacity-60 font-montserrat font-medium max-w-2xl mx-auto italic">
            Descarga nuestro portafolio técnico completo 2026.
          </p>
          <div className="pt-6">
            <button aria-label="Descargar PDF" className="px-16 py-6 bg-white text-black font-black uppercase tracking-[0.4em] text-xs flex items-center gap-4 mx-auto hover:bg-black hover:text-white border border-white transition-none">
              <Download size={20} />
              Descargar PDF
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-black flex items-center justify-center">
                <span className="text-white font-bold text-xl font-teko">L</span>
              </div>
              <span className="text-black font-bold text-2xl tracking-tighter uppercase font-teko">LORMAR</span>
            </div>
            <p className="text-sm opacity-50 max-w-sm leading-relaxed uppercase font-bold tracking-widest text-[10px]">
              Expertos en montaje mecánico e instalaciones civiles de alta complejidad.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-black text-xs uppercase tracking-widest">Sedes</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest opacity-60">
              <li className="border-l-2 border-black pl-3">
                <span className="text-black block mb-1">Lechería (Adm)</span>
                Av. Jorge Rodríguez, CC MT. PB OF 05.
              </li>
              <li className="border-l-2 border-black pl-3">
                <span className="text-black block mb-1">Barcelona (Base)</span>
                Autopista Rómulo Betancourt, Los Potocos.
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-black text-xs uppercase tracking-widest">Atención Directa</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest opacity-60">
              <li className="flex flex-col gap-1">
                <span className="text-black">Napoleón Bellaville</span>
                <span>+58 41418161629</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-black">Brayhan Bellaville</span>
                <span>+58 4129448672</span>
              </li>
              <li className="pt-2">
                <span className="text-black block mb-1">E-mail de Negocios</span>
                <Link href="mailto:negocios@grouplormar.com" className="underline">negocios@grouplormar.com</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-black flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em]">© 2026 LORMAR — J-306579656</p>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Link href="#" className="hover:underline">LinkedIn</Link>
            <Link href="#">Privacidad</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
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
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  Settings as SettingsIcon,
  Construction
} from "lucide-react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Home() {
  const [activeTab, setActiveTab] = useState("PESADA");
  const [currentVideo, setCurrentVideo] = useState(0);

  const heroVideos = [
    "/videos/lormar 7.webm",
    "/videos/lormar 1.webm",
    "/videos/lormar 3.webm",
    "/videos/lormar 4.webm",
    "/videos/lormar 5.webm"
  ];

  // Auto-play videos in carousel
  useState(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 8000); // 8 seconds per video
    return () => clearInterval(timer);
  });

  const serviceTabs = [
    { id: "PESADA", label: "OPERACIÓN PESADA", index: "01" },
    { id: "INDUSTRIAL", label: "SERVICIOS INDUSTRIALES", index: "02" },
    { id: "LOGISTICA", label: "LOGÍSTICA & SOPORTE", index: "03" }
  ];

  const servicesData = [
    {
      id: 1,
      category: "PESADA",
      title: "Izamiento Crítico",
      desc: "Capacidad pesada hasta 100 Toneladas con grúas telescópicas y brazos hidráulicos propios.",
      icon: <Truck size={32} />,
      items: ["TELESCÓPICAS 100T", "IZAMIENTO CRÍTICO"],
      cols: "md:col-span-8",
      img: "/images/hero-excavator.png"
    },
    {
      id: 2,
      category: "PESADA",
      title: "Excavación y Carga",
      desc: "Excavación y carga masiva con cargadores frontales y retroexcavadoras de alto rendimiento.",
      icon: <HardHat size={32} />,
      items: ["EXCAVACIÓN", "CARGA FRONTAL"],
      cols: "md:col-span-4",
      img: "/images/hero-excavator.png"
    },
    {
      id: 3,
      category: "INDUSTRIAL",
      title: "Servicios a Pozo",
      desc: "Soporte especializado: Cabillero 350HP, Hot Oil y unidades de Flush-By.",
      icon: <Drill size={32} />,
      items: ["WELL TESTING", "FLUSH-BY"],
      cols: "md:col-span-4",
      img: "/images/hero-excavator.png"
    },
    {
      id: 4,
      category: "PESADA",
      title: "Movimiento de Tierra",
      desc: "Preparación de terrenos con tractores, motoniveladoras y vibrocompactadores propios.",
      icon: <Settings size={32} />,
      items: ["TRACTORES", "VIALIDAD"],
      cols: "md:col-span-4",
      img: "/images/hero-excavator.png"
    },
    {
      id: 5,
      category: "LOGISTICA",
      title: "Logística de Transporte",
      desc: "Traslado de equipos sobredimensionados con Lowboys de hasta 140 Toneladas.",
      icon: <Truck size={32} />,
      items: ["LOWBOY 140T", "VACUUM"],
      cols: "md:col-span-6",
      img: "/images/hero-excavator.png"
    },
    {
      id: 6,
      category: "INDUSTRIAL",
      title: "Elevación de Personal",
      desc: "Sistemas certificados de elevación segura mediante Manlift y camiones cesta.",
      icon: <Box size={32} />,
      items: ["MANLIFT CERTIFICADO", "CAMIÓN CESTA"],
      cols: "md:col-span-4",
      img: "/images/hero-excavator.png"
    },
    {
      id: 7,
      category: "PESADA",
      title: "Pavimentación",
      desc: "Equipamiento especializado para vialidad asfáltica: Finisher y Escarificadoras.",
      icon: <Construction size={32} />,
      items: ["FINISHER", "RODILLO LISO"],
      cols: "md:col-span-8",
      img: "/images/hero-excavator.png"
    },
    {
      id: 8,
      category: "INDUSTRIAL",
      title: "Mezclado de Concreto",
      desc: "Suministro de concreto industrial mediante trompos mezcladores autopropulsados.",
      icon: <Zap size={32} />,
      items: ["TROMPO MEZCLADOR", "CONCRETO INDUSTRIAL"],
      cols: "md:col-span-4",
      img: "/images/hero-excavator.png"
    },
    {
      id: 9,
      category: "LOGISTICA",
      title: "Equipos de Soporte",
      desc: "Unidades críticas: Plantas eléctricas hasta 1000KVA, torres de iluminación y compresión de aire.",
      icon: <ShieldCheck size={32} />,
      items: ["PLANTAS 1000KVA", "TORRES DE LUZ", "COMPRESORES"],
      cols: "md:col-span-6",
      img: "/images/hero-excavator.png"
    }
  ];
  return (
    <main className="min-h-screen bg-brand-black text-brand-white font-montserrat selection:bg-brand-yellow selection:text-brand-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-brand-black/80 backdrop-blur-md z-50 border-b border-brand-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="group">
            <div className="relative w-48 h-12 transition-all">
              <Image
                src="/logos/logo lormar blanco.png"
                alt="Logo Grupo Lormar"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="text-brand-yellow underline decoration-2 underline-offset-8">Inicio</Link>
            <Link href="/servicios" className="text-brand-white hover:text-brand-yellow transition-colors">Servicios</Link>
            <Link href="/proyectos" className="text-brand-white hover:text-brand-yellow transition-colors">Proyectos</Link>
            <Link href="/nosotros" className="text-brand-white hover:text-brand-yellow transition-colors">Nosotros</Link>
            <Link href="/contacto" className="bg-brand-yellow text-brand-black px-8 py-3 hover:bg-white transition-all font-orbitron text-xs font-bold tracking-[0.2em]">COTIZAR</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden" aria-label="Introducción">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVideo}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={heroVideos[currentVideo]} type="video/mp4" />
              </video>
            </motion.div>
          </AnimatePresence>

          {/* HUD & industrial Overlays */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Grid background */}
            <div className="absolute inset-0 bg-industrial-grid opacity-[0.05]"></div>

            {/* HUD Corners */}
            <div className="absolute top-24 left-6 w-8 h-8 border-t-2 border-l-2 border-brand-yellow/30"></div>
            <div className="absolute top-24 right-6 w-8 h-8 border-t-2 border-r-2 border-brand-yellow/30"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-brand-yellow/30"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-brand-yellow/30"></div>

            {/* Scrolling Scanning Line */}
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[2px] bg-brand-yellow/10 blur-sm z-10"
            />
          </div>

          {/* Gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/70 to-transparent z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60 z-20"></div>

          {/* Vertical Metadata Label */}
          <div className="absolute right-10 bottom-40 z-30 hidden lg:flex flex-col items-end gap-4 overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 100 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="w-[1px] bg-brand-yellow/50"
            />
            <span className="text-brand-white/40 font-orbitron text-[9px] uppercase tracking-[0.6em] [writing-mode:vertical-lr] rotate-180">
              SOLIDEZ OPERATIVA • EST. 1995 • 2026
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-40 w-full pt-20">
          <div className="max-w-4xl space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-6"
            >
              <div className="h-[2px] w-16 bg-brand-yellow shadow-[0_0_10px_#F2A900]"></div>
              <span className="text-brand-yellow text-sm font-black uppercase tracking-[0.5em] font-orbitron">Potencia Industrial</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl md:text-[120px] font-black text-brand-white leading-[0.85] font-orbitron uppercase tracking-tighter"
            >
              POTENCIA <br />
              <span className="text-brand-yellow drop-shadow-[0_0_20px_rgba(242,169,0,0.3)]">INDUSTRIAL</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="text-xl md:text-2xl text-brand-white max-w-2xl leading-relaxed font-montserrat font-medium border-l-4 border-brand-yellow pl-8 italic"
            >
              Lideramos proyectos de alta complejidad con <span className="text-brand-yellow">maquinaria pesada propia</span> y precisión técnica inquebrantable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-8 pt-8"
            >
              <Link
                href="/servicios"
                className="group relative px-10 py-5 bg-brand-yellow text-brand-black font-orbitron text-sm font-black tracking-[0.2em] overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">EXPLORAR FLOTA</span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-brand-black transform rotate-45 translate-x-1 -translate-y-1"></div>
              </Link>

              <Link
                href="/contacto"
                className="px-10 py-5 border-2 border-brand-white text-brand-white font-orbitron text-sm font-black tracking-[0.2em] hover:bg-brand-white hover:text-brand-black transition-all bg-brand-black/10 backdrop-blur-sm"
              >
                SOPORTE TÉCNICO
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Technical Video Indicators */}
        <div className="absolute bottom-6 md:bottom-12 left-6 z-50 flex flex-col gap-6">
          <div className="flex gap-3 md:gap-4">
            {heroVideos.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentVideo(idx)}
                className={`group relative h-1 transition-all duration-700 ${currentVideo === idx ? 'w-12 md:w-16 bg-brand-yellow' : 'w-4 md:w-6 bg-white/20 hover:bg-white/40'}`}
              >
                {currentVideo === idx && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute inset-0 bg-brand-yellow shadow-[0_0_10px_#F2A900]"
                  />
                )}
                <span className={`absolute -top-6 left-0 text-[7px] md:text-[8px] font-black transition-opacity ${currentVideo === idx ? 'opacity-100 text-brand-yellow' : 'opacity-0'}`}>
                  CAM_0{idx + 1}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos / Trust Signals */}
      <section className="py-16 border-b border-brand-white/5 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-center mb-10 text-brand-yellow italic">ALIADOS ESTRATÉGICOS E INSTITUCIONES</p>
          <div className="flex flex-wrap justify-around items-center gap-12 transition-opacity">
            <div className="text-4xl font-black font-orbitron tracking-widest text-brand-white">SIDOR</div>
            <div className="text-3xl font-black font-orbitron border-b-2 border-brand-yellow text-brand-white">CVG VENALUM</div>
            <div className="text-4xl font-black font-orbitron italic text-brand-white">PDVSA</div>
            <div className="text-3xl font-black font-orbitron underline decoration-brand-yellow underline-offset-4 text-brand-white">FERROMINERA</div>
            <div className="text-4xl font-black font-orbitron text-brand-white">TGI</div>
          </div>
        </div>
      </section>

      {/* Services Grid (Movido hacia arriba) */}
      <section className="py-40 px-6 bg-lormar-texture relative overflow-hidden" id="servicios">

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-7xl md:text-[120px] font-bold font-orbitron uppercase italic leading-[0.7]">
                DOMINIO <br /> <span className="text-brand-yellow">OPERATIVO</span>
              </h2>
              <div className="flex items-center gap-6">
                <div className="h-[2px] w-24 bg-brand-yellow"></div>
                <p className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-white">Categorías de Potencia Instalativa</p>
              </div>
            </div>
            <p className="max-w-md text-brand-white text-sm font-montserrat italic border-l border-brand-white/10 pl-6">
              Nuestra estructura operativa refleja las 9 categorías de potencia del brochure corporativo, garantizando disponibilidad inmediata y flota propia.
            </p>
          </div>

          {/* Bloque de Mando Refinado (Sleek Hardware) */}
          <div className="max-w-5xl mx-auto mb-28 bg-brand-black/20 backdrop-blur-sm flex flex-col md:flex-row border-b border-brand-white/10">
            {serviceTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-1 relative py-10 group transition-all duration-300"
              >
                <div className="flex flex-col items-center justify-center gap-2 relative z-10">
                  <span className={`font-orbitron text-[12px] font-black tracking-[0.5em] transition-all uppercase ${activeTab === tab.id ? 'text-brand-yellow' : 'text-brand-white hover:text-brand-yellow'}`}>
                    {tab.label}
                  </span>
                </div>

                {/* Indicador Inferior de Precisión */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow"
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                  />
                )}

                {/* Separador Vertical Minimalista */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-brand-white/5 hidden md:block last:hidden"></div>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              {servicesData
                .filter(s => s.category === activeTab)
                .map((s) => (
                  <motion.div
                    key={s.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`${s.cols}`}
                  >
                    <Link href="/servicios" className="group relative overflow-hidden glass-industrial min-h-[480px] flex flex-col p-12 transition-all duration-500 w-full border border-brand-white/5 hover:border-brand-yellow/40">
                      {/* Hardware Corners (Visual Only on Hover) */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-yellow opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 z-30"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-yellow opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 z-30"></div>

                      {/* Imagen con overlay de contraste premium */}
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={s.img}
                          alt={s.title}
                          fill
                          className="object-cover transition-all duration-1000 ease-out brightness-[0.7] group-hover:brightness-90 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/80 via-transparent to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                      </div>

                      <div className="relative z-20 h-full flex flex-col justify-between">
                        <div className="space-y-8">
                          <div className="text-brand-yellow transition-all duration-500 mb-8 relative z-10 drop-shadow-md group-hover:scale-110 origin-left">
                            {s.icon}
                          </div>
                          <div>
                            <h3 className="text-4xl font-black font-orbitron uppercase leading-tight mb-4 group-hover:text-brand-yellow transition-colors drop-shadow-lg tracking-tighter">{s.title}</h3>
                            <p className="text-[13px] text-brand-white leading-relaxed font-montserrat max-w-xs drop-shadow-sm italic font-medium">{s.desc}</p>
                          </div>
                        </div>

                        <div className="pt-10 flex flex-wrap gap-2 border-t border-brand-white/10 group-hover:border-brand-yellow/30">
                          {s.items.map((item, idx) => (
                            <span key={idx} className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-white border border-brand-white/20 px-4 py-2 bg-brand-black transition-all group-hover:border-brand-yellow/40 group-hover:shadow-[0_0_15px_rgba(242,169,0,0.1)]">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Contenedor con Video Fijo (Incluye Impact Numbers y Metodología) */}
      <div className="relative overflow-hidden [clip-path:inset(0_0_0_0)]">
        {/* Background Video (Fixed Effect) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          >
            <source src="/videos/lormar 2.webm" type="video/webm" />
          </video>
          {/* Overlay de contraste (Abajo a Arriba) */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-10"></div>
        </div>

        {/* Impact Numbers / Stats */}
        <section className="py-56 text-brand-white px-6 relative border-t border-brand-yellow/10 z-20">

          <div className="max-w-7xl mx-auto relative z-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
            >
              {[
                { num: "+15", label: "Años de Trayectoria" },
                { num: "+200", label: "Proyectos Ejecutados" },
                { num: "+50", label: "Equipos Propios" },
                { num: "0", label: "Accidentes LTI" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="space-y-3 group"
                >
                  <span className="text-[86px] font-bold font-orbitron block text-brand-yellow group-hover:scale-110 transition-transform drop-shadow-[0_4px_12px_rgba(242,169,0,0.3)] leading-none">{stat.num}</span>
                  <span className="text-[14px] font-bold uppercase tracking-[0.4em] text-brand-white drop-shadow-md">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Methodology / Process */}
        <section className="py-32 px-6 border-b-[4px] border-brand-white bg-proceso-custom relative z-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-20"
            >
              <h2 className="text-5xl font-black font-orbitron uppercase leading-none whitespace-nowrap text-brand-black">NUESTRO <span className="text-brand-white">PROCESO</span></h2>
              <div className="h-[2px] w-full bg-brand-black/20 relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "33%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="absolute top-0 left-0 h-full bg-brand-black"
                ></motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="grid md:grid-cols-4 gap-8"
            >
              {[
                { num: "01", title: "Consulta", desc: "Evaluación técnica y determinación de la logística crítica del proyecto." },
                { num: "02", title: "Operación", desc: "Planificación de despliegue y movilización optimizada de maquinaria pesada." },
                { num: "03", title: "Ejecución", desc: "Labor en campo bajo los más estrictos protocolos de seguridad ISO." },
                { num: "04", title: "Certificación", desc: "Validación final, gestión de equipos y soporte operativo continuo." }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="space-y-6 border-l-[3px] border-brand-black/20 pl-8 group hover:border-brand-white transition-colors relative"
                >
                  <div className="absolute top-0 -left-[7px] w-3 h-3 bg-brand-black group-hover:bg-brand-white rounded-full transition-colors z-10"></div>
                  <span className="text-4xl font-black font-orbitron text-brand-black group-hover:text-brand-white transition-colors leading-none block">{step.num}</span>
                  <h4 className="text-xl font-bold uppercase text-brand-black group-hover:text-brand-white transition-colors">{step.title}</h4>
                  <p className="text-sm text-brand-black font-montserrat leading-relaxed font-semibold transition-colors group-hover:text-brand-white">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* Projects Showcase */}
      <section className="py-32 px-6 border-y border-brand-white/5 bg-brand-surface/10" id="proyectos">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <h2 className="text-5xl font-black font-orbitron uppercase leading-none">ÚLTIMOS <span className="text-brand-black bg-brand-white px-3">PROYECTOS</span></h2>
            <Link href="/proyectos" className="font-orbitron text-xl uppercase tracking-wider text-brand-yellow group flex items-center gap-3">
              Ver portafolio de obras <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                cat: "INDUSTRIAL / 2024",
                title: "Planta Procesadora de Alimentos",
                desc: "Montaje mecánico y sistemas de automatización de alta precisión."
              },
              {
                cat: "PETRÓLEO / 2023",
                title: "Optimización de Vialidad Pesada",
                desc: "Movimiento de tierras crítico para infraestructura de transporte pesado."
              }
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group glass-industrial hover:bg-brand-white/5 transition-all overflow-hidden border-b-4 border-b-transparent hover:border-b-brand-yellow"
              >
                <div className="aspect-video relative">
                  <Image src="/images/hero-excavator.png" alt={p.title} fill className="object-cover" />
                </div>
                <div className="p-10 space-y-4">
                  <span className="text-[10px] font-bold text-brand-yellow tracking-[0.4em] italic">{p.cat}</span>
                  <h3 className="text-3xl font-black font-orbitron uppercase leading-tight">{p.title}</h3>
                  <p className="text-sm text-brand-white font-montserrat leading-relaxed italic">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* FAQ */}
      <section className="py-40 px-6 border-y border-brand-white/5 bg-brand-surface/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black font-orbitron uppercase italic leading-none mb-8">PREGUNTAS <br /> <span className="text-brand-yellow">FRECUENTES</span></h2>
            <p className="text-lg text-brand-white italic border-l-4 border-brand-yellow pl-6">Consultas técnicas recurrentes para departamentos de procura e ingeniería.</p>
          </div>
          <div className="divide-y divide-brand-white/10 border-y border-brand-white/10">
            {[
              { q: "¿Cuentan con maquinaria propia?", a: "Sí, disponemos de una flota robusta de grúas, excavadoras y transporte pesado propios, lo que optimiza costos logísticos y tiempos de respuesta." },
              { q: "¿Cuál es su radio de acción?", a: "Nuestras bases principales están en El Tigre y Barcelona, pero operamos en todo el territorio nacional venezolano." },
              { q: "¿Emiten facturación con solvencia fiscal?", a: "Somos Contribuyentes Especiales debidamente solventes ante el SENIAT y demás instituciones oficiales." },
              { q: "¿Realizan mantenimientos de emergencia?", a: "Disponemos de cuadrillas operativas 24/7 para paradas de planta y contingencias técnicas críticas." }
            ].map((faq, i) => (
              <div key={i} className="py-8 group cursor-pointer hover:bg-brand-white/5 px-6 transition-all">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold uppercase text-brand-white group-hover:text-brand-yellow transition-colors">{faq.q}</h4>
                  <Plus size={20} className="text-brand-yellow group-hover:rotate-45 transition-transform flex-shrink-0" />
                </div>
                <p className="text-sm text-brand-white leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-brand-black pt-32 pb-12 px-6 border-t border-brand-white/10 relative overflow-hidden" id="contacto">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-yellow/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            {/* Branding & Description */}
            <div className="lg:col-span-4 space-y-10">
              <Link href="/" className="block">
                <div className="relative w-64 h-20">
                  <Image src="/logos/logo lormar blanco.png" alt="Lormar" fill className="object-contain object-left" />
                </div>
              </Link>
              <p className="text-brand-white text-sm font-montserrat leading-relaxed italic border-l-2 border-brand-yellow/30 pl-6">
                Impulsando la infraestructura crítica de Venezuela con excelencia técnica y compromiso inquebrantable desde el oriente del país.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 border border-brand-white/10 flex items-center justify-center text-brand-white hover:text-brand-yellow hover:border-brand-yellow transition-all cursor-pointer bg-brand-white/5">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>

            {/* Locations (The "Sedes" part moved here) */}
            <div className="lg:col-span-4 space-y-10">
              <h4 className="font-orbitron text-xl font-black text-brand-white uppercase italic tracking-widest border-b border-brand-yellow/30 pb-4">NUESTRAS SEDES</h4>
              <div className="space-y-6 text-sm">
                <div className="group">
                  <p className="text-brand-yellow font-black font-orbitron text-xs tracking-[0.2em] mb-2 uppercase">OFICINA ADMINISTRATIVA</p>
                  <p className="text-brand-white font-montserrat italic text-[11px] leading-tight">AV. JORGE RODRÍGUEZ CC MT, NIVEL PB OF 05</p>
                  <p className="text-brand-white font-montserrat italic text-[11px] leading-tight">SECTOR LAS GARZAS, LECHERÍA ANZOÁTEGUI</p>
                  <p className="text-brand-white font-montserrat italic text-[11px] leading-tight">CÓDIGO POSTAL 6016</p>
                </div>
                <div className="group">
                  <p className="text-brand-yellow font-black font-orbitron text-xs tracking-[0.2em] mb-2 uppercase">BASE OPERATIVA</p>
                  <p className="text-brand-white font-montserrat italic text-[11px] leading-tight">AUTOPISTA RÓMULO BETANCOURT, TERRENO S/N,</p>
                  <p className="text-brand-white font-montserrat italic text-[11px] leading-tight">SECTOR LOS POTOCOS, BARCELONA EDO. ANZOÁTEGUI</p>
                </div>
                <div className="pt-6 border-t border-brand-white/5 space-y-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-black text-brand-yellow uppercase tracking-widest leading-none">Napoleón Bellaville</p>
                    <div className="flex items-center gap-3 text-brand-white text-xs font-montserrat italic">
                      <Phone size={12} className="text-brand-yellow" />
                      <span>+58 414 181 61 629</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-black text-brand-yellow uppercase tracking-widest leading-none">Brayhan Bellaville</p>
                    <div className="flex items-center gap-3 text-brand-white text-xs font-montserrat italic">
                      <Phone size={12} className="text-brand-yellow" />
                      <span>+58 412 944 86 72</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-brand-white text-xs font-montserrat italic pt-2">
                    <Mail size={14} className="text-brand-yellow" />
                    <span>negocios@grouplormar.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Integration */}
            <div className="lg:col-span-4 relative">
              <div className="h-full min-h-[300px] border border-brand-white/10 grayscale hover:grayscale-0 transition-all duration-700 bg-brand-surface/20 group overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=17fVcJp0SYgXWSl1eCIFFLvQIRKkw5Ak&ehbc=2E312F"
                  className="absolute top-[-52px] left-0 w-full h-[calc(100%+52px)] border-0 group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Navigation and Bottom Footer */}
          <div className="pt-12 border-t border-brand-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-4 text-[10px] font-black font-orbitron uppercase tracking-[0.2em] text-brand-white">
              <Link href="/" className="hover:text-brand-yellow transition-colors">Inicio</Link>
              <Link href="/servicios" className="hover:text-brand-yellow transition-colors">Servicios</Link>
              <Link href="/proyectos" className="hover:text-brand-yellow transition-colors">Proyectos</Link>
              <Link href="/nosotros" className="hover:text-brand-yellow transition-colors">Empresa</Link>
            </div>
            <p className="text-[10px] font-black text-brand-white uppercase tracking-[0.2em] text-center">
              © 2026 GRUPO LORMAR - RIF: J-30657965-6. TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

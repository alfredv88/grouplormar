"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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

  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.75]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  const heroVideos = [
    "/videos/lormar 7.webm",
    "/videos/lormar 1.webm",
    "/videos/lormar 3.webm",
    "/videos/lormar 4.webm",
    "/videos/lormar 5.webm"
  ];

  // Auto-play videos in carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 8000); // 8 seconds per video
    return () => clearInterval(timer);
  }, [heroVideos.length]);

  // Auto-play service tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = serviceTabs.findIndex(t => t.id === prev);
        const nextIndex = (currentIndex + 1) % serviceTabs.length;
        return serviceTabs[nextIndex].id;
      });
    }, 6000); // 6 seconds per category
    return () => clearInterval(timer);
  }, []);

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
      img: "/images/izamiento_critico_realista.png"
    },
    {
      id: 2,
      category: "PESADA",
      title: "Excavación y Carga",
      desc: "Excavación y carga masiva con cargadores frontales y retroexcavadoras de alto rendimiento.",
      icon: <HardHat size={32} />,
      items: ["EXCAVACIÓN", "CARGA FRONTAL"],
      cols: "md:col-span-4",
      img: "/images/hero-excavator.webp"
    },
    {
      id: 3,
      category: "INDUSTRIAL",
      title: "Servicios a Pozo",
      desc: "Soporte especializado: Cabillero 350HP, Hot Oil y unidades de Flush-By.",
      icon: <Drill size={32} />,
      items: ["WELL TESTING", "FLUSH-BY"],
      cols: "md:col-span-4",
      img: "/images/hero-excavator.webp"
    },
    {
      id: 4,
      category: "PESADA",
      title: "Movimiento de Tierra",
      desc: "Preparación de terrenos con tractores, motoniveladoras y vibrocompactadores propios.",
      icon: <Settings size={32} />,
      items: ["TRACTORES", "VIALIDAD"],
      cols: "md:col-span-4",
      img: "/images/hero-excavator.webp"
    },
    {
      id: 5,
      category: "LOGISTICA",
      title: "Logística de Transporte",
      desc: "Traslado de equipos sobredimensionados con Lowboys de hasta 140 Toneladas.",
      icon: <Truck size={32} />,
      items: ["LOWBOY 140T", "VACUUM"],
      cols: "md:col-span-6",
      img: "/images/hero-excavator.webp"
    },
    {
      id: 6,
      category: "INDUSTRIAL",
      title: "Elevación de Personal",
      desc: "Sistemas certificados de elevación segura mediante Manlift y camiones cesta.",
      icon: <Box size={32} />,
      items: ["MANLIFT CERTIFICADO", "CAMIÓN CESTA"],
      cols: "md:col-span-4",
      img: "/images/hero-excavator.webp"
    },
    {
      id: 7,
      category: "PESADA",
      title: "Pavimentación",
      desc: "Equipamiento especializado para vialidad asfáltica: Finisher y Escarificadoras.",
      icon: <Construction size={32} />,
      items: ["FINISHER", "RODILLO LISO"],
      cols: "md:col-span-8",
      img: "/images/hero-excavator.webp"
    },
    {
      id: 8,
      category: "INDUSTRIAL",
      title: "Mezclado de Concreto",
      desc: "Suministro de concreto industrial mediante trompos mezcladores autopropulsados.",
      icon: <Zap size={32} />,
      items: ["TROMPO MEZCLADOR", "CONCRETO INDUSTRIAL"],
      cols: "md:col-span-4",
      img: "/images/hero-excavator.webp"
    },
    {
      id: 9,
      category: "LOGISTICA",
      title: "Equipos de Soporte",
      desc: "Unidades críticas: Plantas eléctricas hasta 1000KVA, torres de iluminación y compresión de aire.",
      icon: <ShieldCheck size={32} />,
      items: ["PLANTAS 1000KVA", "TORRES DE LUZ", "COMPRESORES"],
      cols: "md:col-span-6",
      img: "/images/hero-excavator.webp"
    }
  ];
  return (
    <main className="min-h-screen bg-iron-base text-brand-white font-montserrat tracking-tight selection:bg-brand-yellow selection:text-brand-black overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-brand-black/60 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 h-24 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative w-40 h-10 transition-all group-hover:scale-105">
              <Image
                src="/logos/logo lormar blanco.webp"
                alt="Logo Grupo Lormar"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-10 text-[12px] font-black uppercase tracking-[0.3em] font-orbitron">
            <Link href="/" className="text-brand-yellow border-b-2 border-brand-yellow pb-1">INICIO</Link>
            <Link href="/servicios" className="text-white hover:text-brand-yellow transition-all">SERVICIOS</Link>
            <Link href="/proyectos" className="text-white hover:text-brand-yellow transition-all">PROYECTOS</Link>
            <Link href="/nosotros" className="text-white hover:text-brand-yellow transition-all">EMPRESA</Link>
            <Link href="/contacto" className="relative group px-8 py-3 bg-brand-yellow text-brand-black font-black tracking-[0.2em] transition-all hover:bg-white overflow-hidden">
              <span className="relative z-10">CONTACTO</span>
              <div className="absolute top-0 right-0 w-2 h-2 bg-brand-black rotate-45 translate-x-1 -translate-y-1"></div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section Wrapper for Stacking Parallax */}
      <div className="h-[150vh] relative z-0">
        <motion.section
          className="sticky top-0 h-screen flex items-center justify-start overflow-hidden origin-top"
          aria-label="Introducción"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          {/* Main Video Background with Industrial Frame */}
          <div className="absolute inset-0 z-0 p-4 md:p-10 pt-32 md:pt-40 pointer-events-none">
            <div className="relative w-full h-full bg-brand-black overflow-hidden iron-bevel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVideo}
                  initial={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                  >
                    <source src={heroVideos[currentVideo]} type="video/mp4" />
                  </video>
                </motion.div>
              </AnimatePresence>

              {/* Viewfinder / HUD Overlay */}
              <div className="absolute inset-0 z-10">
                {/* Scanning Lines */}
                <div className="absolute inset-0 bg-industrial-grid opacity-10"></div>

                {/* Corner Brackets */}
                <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-brand-yellow/30"></div>
                <div className="absolute top-10 right-10 w-20 h-20 border-t-4 border-r-4 border-brand-yellow/30"></div>
                <div className="absolute bottom-10 left-10 w-20 h-20 border-b-4 border-l-4 border-brand-yellow/30"></div>
                <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-brand-yellow/30"></div>

                {/* Vertical Metadata */}
                <div className="absolute left-10 bottom-40 flex flex-col gap-6 text-[9px] font-black font-orbitron text-brand-yellow/40 tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 uppercase">
                  <span>SISTEMA DE IZAMIENTO • ACTIVO</span>
                  <div className="w-[1px] h-32 bg-brand-yellow/20 self-center"></div>
                </div>
              </div>

              {/* Heavy Gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/40 to-transparent z-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-20"></div>
            </div>
          </div>

          <div className="w-full max-w-[1800px] mx-auto px-10 md:px-20 lg:px-32 relative z-40">
            <div className="max-w-5xl space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-6"
              >
                <span className="bg-brand-yellow text-brand-black px-4 py-1 text-[10px] font-black uppercase tracking-widest font-orbitron">
                  INDUSTRIAL ELÍTE
                </span>
                <div className="h-[1px] w-24 bg-brand-yellow/50"></div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-7xl md:text-[140px] font-black text-brand-white leading-[0.8] font-orbitron uppercase tracking-tightest"
              >
                POTENCIA <br />
                <span className="text-transparent stroke-brand-yellow stroke-2 drop-shadow-[0_0_15px_rgba(242,169,0,0.2)]" style={{ WebkitTextStroke: "2px #F2A900" }}>INDUSTRIAL</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-3xl text-white/80 max-w-3xl font-montserrat font-medium border-l-[6px] border-brand-yellow pl-10 leading-tight italic"
              >
                Infraestructura de alto tonelaje para los proyectos más exigentes de <span className="text-brand-yellow font-black">Venezuela</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-6 pt-10"
              >
                <Link
                  href="/servicios"
                  className="group relative px-12 py-6 bg-brand-yellow text-brand-black font-black font-orbitron text-xs tracking-[0.3em] iron-bevel overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    VER FLOTA PESADA <ArrowRight size={18} />
                  </span>
                  <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                </Link>

                <Link
                  href="/contacto"
                  className="px-12 py-6 border-2 border-white/20 text-white font-black font-orbitron text-xs tracking-[0.3em] hover:bg-white/10 transition-all backdrop-blur-md"
                >
                  SOPORTE TÉCNICO
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Technical Video Indicators */}
          <div className="absolute bottom-12 md:bottom-20 left-12 md:left-20 z-50 flex flex-col gap-6">
            <div className="flex gap-3 md:gap-4">
              {heroVideos.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentVideo(idx)}
                  className={`group relative h-1 transition-all duration-700 ${currentVideo === idx ? 'w-12 md:w-16 bg-brand-yellow' : 'w-4 md:w-6 bg-white hover:bg-white'}`}
                >
                  {currentVideo === idx && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute inset-0 bg-brand-yellow shadow-[0_0_10px_#F2A900]"
                    />
                  )}
                  <span className={`absolute -top-6 left-0 text-[7px] md:text-[8px] font-black transition-opacity ${currentVideo === idx ? 'opacity-100 text-brand-yellow' : 'opacity-0 text-white'}`}>
                    CAM_0{idx + 1}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>
      </div >

      {/* Client Logos / Trust Signals */}
      < section className="relative z-10 py-16 border-t border-b border-brand-white/5 bg-brand-black shadow-[0_-20px_50px_rgba(0,0,0,0.8)]" >
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 overflow-hidden">
          <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-center mb-10 text-brand-yellow italic">ALIADOS ESTRATÉGICOS E INSTITUCIONES</p>
          <div className="flex flex-wrap justify-around items-center gap-12 transition-opacity">
            <div className="text-4xl font-black font-orbitron tracking-widest text-brand-white">SIDOR</div>
            <div className="text-3xl font-black font-orbitron border-b-2 border-brand-yellow text-brand-white">CVG VENALUM</div>
            <div className="text-4xl font-black font-orbitron italic text-brand-white">PDVSA</div>
            <div className="text-3xl font-black font-orbitron underline decoration-brand-yellow underline-offset-4 text-brand-white">FERROMINERA</div>
            <div className="text-4xl font-black font-orbitron text-brand-white">TGI</div>
          </div>
        </div>
      </section >

      {/* Services Grid (Movido hacia arriba) */}
      < section className="py-40 px-6 bg-lormar-texture relative z-10 overflow-hidden" id="servicios" >

        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
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
          <div className="max-w-5xl mx-auto mb-28 bg-iron-light/30 backdrop-blur-sm flex flex-col md:flex-row border-iron iron-bevel">
            {serviceTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-1 relative py-12 group transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col items-center justify-center gap-2 relative z-10">
                  <span className={`font-orbitron text-[13px] font-black tracking-[0.6em] transition-all uppercase ${activeTab === tab.id ? 'text-brand-yellow' : 'text-white/70 group-hover:text-white'}`}>
                    {tab.label}
                  </span>
                </div>

                {/* Screw Details */}
                <div className="absolute top-2 left-2 w-1 h-1 bg-white/10 rounded-full"></div>
                <div className="absolute top-2 right-2 w-1 h-1 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/10 rounded-full"></div>

                {/* Active Indicator Line */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[4px] bg-brand-yellow shadow-[0_0_15px_#F2A900]"
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                  />
                )}

                {/* Separador Vertical Minimalista */}
                <div className="absolute right-0 top-1/4 w-[1px] h-1/2 bg-white/5 hidden md:block"></div>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              {servicesData
                .filter(s => s.category === activeTab)
                .map((s) => (
                  <motion.div
                    key={s.id}
                    layout
                    className={`${s.cols}`}
                  >
                    <Link href="/servicios" className="group relative overflow-hidden bg-iron-light/40 border-iron iron-bevel min-h-[320px] flex flex-col p-8 transition-all duration-500 w-full hover:shadow-[0_0_30px_rgba(242,169,0,0.15)]">
                      {/* Industrial Screws Utility */}
                      <div className="absolute inset-0 industrial-screws opacity-20 pointer-events-none"></div>

                      <div className="absolute inset-0 z-0">
                        <Image
                          src={s.img}
                          alt={s.title}
                          fill
                          className="object-cover transition-all duration-1000 ease-out brightness-90 group-hover:brightness-100 group-hover:scale-105"
                        />
                      </div>

                      <div className="relative z-20 h-full flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="w-12 h-12 flex items-center justify-center bg-brand-yellow text-brand-black iron-bevel">
                            {React.cloneElement(s.icon as React.ReactElement<any>, { size: 24 })}
                          </div>
                          <div>
                            <h3 className="text-2xl font-black font-orbitron uppercase leading-none mb-2 group-hover:text-brand-yellow transition-colors tracking-tight">
                              {s.title}
                            </h3>
                            <p className="text-xs text-white/80 leading-relaxed font-montserrat max-w-xs italic font-medium">
                              {s.desc}
                            </p>
                          </div>
                        </div>

                        <div className="pt-6 flex flex-wrap gap-2 border-t border-white/5 group-hover:border-brand-yellow/20">
                          {s.items.map((item, idx) => (
                            <span key={idx} className="text-[9px] font-black uppercase tracking-widest text-white/80 border border-white/10 px-4 py-2 bg-brand-black/60 backdrop-blur-sm">
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
      </section >

      {/* Contenedor con Video Fijo (Incluye Impact Numbers y Metodología) */}
      < div className="relative overflow-hidden [clip-path:inset(0_0_0_0)]" >
        {/* Background Video (Fixed Effect) */}
        < div className="fixed inset-0 z-0 pointer-events-none" >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40 brightness-110"
          >
            <source src="/videos/lormar 2.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-brand-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-brand-black/80 z-10"></div>
        </div >

        {/* Impact Numbers / Stats */}
        < section className="py-64 text-brand-white px-6 relative z-20" >
          <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-20 text-center"
            >
              {[
                { num: "+15", label: "Años de Trayectoria" },
                { num: "+200", label: "Proyectos Ejecutados" },
                { num: "+50", label: "Equipos Propios" },
                { num: "0", label: "Accidentes LTI" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4 group"
                >
                  <span className="text-[100px] font-black font-orbitron block text-brand-yellow leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(242,169,0,0.3)] group-hover:scale-105 transition-transform">
                    {stat.num}
                  </span>
                  <div className="w-12 h-[2px] bg-brand-yellow/50 mx-auto"></div>
                  <span className="text-[12px] font-black uppercase tracking-[0.5em] text-white/80">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section >

        {/* Our Methodology / Process */}
        <section className="py-40 px-6 bg-brand-black border-t border-b border-white/5 relative z-20">
          <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
              <h2 className="text-6xl font-black font-orbitron uppercase leading-none text-white">NUESTRO <span className="text-brand-yellow">PROCESO</span></h2>
              <div className="h-[2px] flex-1 bg-white/5 relative overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 bg-brand-yellow/40 shadow-[0_0_10px_#F2A900]"
                ></motion.div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-10">
              {[
                { num: "01", title: "Consulta", desc: "Evaluación técnica y determinación de la logística crítica del proyecto." },
                { num: "02", title: "Operación", desc: "Planificación de despliegue y movilización optimizada de maquinaria pesada." },
                { num: "03", title: "Ejecución", desc: "Labor en campo bajo los más estrictos protocolos de seguridad ISO." },
                { num: "04", title: "Certificación", desc: "Validación final, gestión de equipos y soporte operativo continuo." }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative p-10 bg-brand-white/5 border border-white/5 hover:bg-brand-white/10 transition-all border-b-4 border-b-transparent hover:border-b-brand-yellow"
                >
                  <span className="text-5xl font-black font-orbitron text-white/10 group-hover:text-brand-yellow/40 transition-colors leading-none block mb-6">
                    {step.num}
                  </span>
                  <h4 className="text-2xl font-bold uppercase text-white tracking-tight mb-4">{step.title}</h4>
                  <p className="text-[13px] text-white/60 font-montserrat leading-relaxed italic font-medium group-hover:text-white transition-colors">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section >
      </div >

      {/* Projects Showcase */}
      < section className="py-32 px-6 border-y border-brand-white/5 bg-brand-surface/10" id="proyectos" >
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
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
                  <Image src="/images/hero-excavator.webp" alt={p.title} fill className="object-cover" />
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
      </section >




      {/* Equipos Certificados */}
      <section className="relative z-10 py-24 bg-brand-black border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-[0.1] pointer-events-none" />
        <div className="w-full max-w-[1800px] mx-auto px-10 md:px-20 lg:px-32 overflow-hidden">
          <p className="text-[11px] font-black uppercase tracking-[0.5em] text-center mb-16 text-brand-yellow/40 font-orbitron">
            MAQUINARIA CERTIFICADA & FLOTA PREMIUM
          </p>
          <div className="flex flex-wrap justify-around items-center gap-16 transition-opacity">
            <div className="text-4xl font-black font-orbitron tracking-tighter text-white/40 transform hover:scale-110 hover:text-white transition-all cursor-default">CATERPILLAR</div>
            <div className="text-3xl font-black font-orbitron text-white/30 transform hover:scale-110 hover:text-white transition-all cursor-default">JOHN DEERE</div>
            <div className="text-4xl font-black font-orbitron italic text-white/50 transform hover:scale-110 hover:text-white transition-all cursor-default">VOLVO</div>
            <div className="text-3xl font-black font-orbitron text-white/20 transform hover:scale-110 hover:text-white transition-all cursor-default">MACK</div>
            <div className="text-4xl font-black font-orbitron text-white transform hover:scale-110 transition-all cursor-default">LIEBHERR</div>
            <div className="text-4xl font-black font-orbitron text-white/30 transform hover:scale-110 hover:text-white transition-all cursor-default">TEREX</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      < section className="py-48 px-10 md:px-20 lg:px-32 bg-iron-base border-t border-white/5" >
        <div className="w-full max-w-[1800px] mx-auto grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5 space-y-10">
            <h2 className="text-6xl font-black font-orbitron uppercase leading-none text-white italic">
              CENTRO DE <br /> <span className="text-brand-yellow">CONSULTA</span>
            </h2>
            <p className="text-xl text-white/80 italic border-l-4 border-brand-yellow pl-10 font-medium">
              Respuestas técnicas críticas para la toma de decisiones en proyectos de infraestructura.
            </p>
          </div>
          <div className="lg:col-span-7 divide-y divide-white/5 border-y border-white/5">
            {[
              { q: "¿Cuentan con maquinaria propia?", a: "Sí, disponemos de una flota robusta de grúas, excavadoras y transporte pesado propios, lo que optimiza costos logísticos y tiempos de respuesta." },
              { q: "¿Cuál es su radio de acción?", a: "Nuestras bases principales están en El Tigre y Barcelona, pero operamos en todo el territorio nacional venezolano." },
              { q: "¿Emiten facturación con solvencia fiscal?", a: "Somos Contribuyentes Especiales debidamente solventes ante el SENIAT y demás instituciones oficiales." },
              { q: "¿Realizan mantenimientos de emergencia?", a: "Disponemos de cuadrillas operativas 24/7 para paradas de planta y contingencias técnicas críticas." }
            ].map((faq, i) => (
              <div key={i} className="py-10 group cursor-pointer hover:bg-white/5 px-8 transition-all relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-black uppercase text-white group-hover:text-brand-yellow transition-colors font-orbitron">
                    {faq.q}
                  </h4>
                  <Plus size={24} className="text-brand-yellow group-hover:rotate-90 transition-transform flex-shrink-0" />
                </div>
                <p className="text-[14px] text-white/70 group-hover:text-white leading-relaxed font-montserrat italic transition-colors">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-iron-base pt-48 pb-16 px-10 md:px-20 lg:px-32 border-t-4 border-brand-yellow/20 relative overflow-hidden" id="contacto" >
        {/* Background Visual Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-yellow/5 to-transparent skew-x-12 translate-x-1/4 pointer-events-none"></div>

        <div className="w-full max-w-[1800px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
            {/* Branding & Description */}
            <div className="lg:col-span-4 space-y-12">
              <Link href="/" className="block">
                <div className="relative w-72 h-16">
                  <Image src="/logos/logo lormar blanco.webp" alt="Lormar" fill className="object-contain object-left" />
                </div>
              </Link>
              <p className="text-white/80 text-[15px] font-montserrat leading-relaxed italic border-l-2 border-brand-yellow/30 pl-8">
                Impulsando la soberanía industrial de <span className="text-white font-black uppercase tracking-widest">Venezuela</span> con excelencia técnica y maquinaria de precisión desde 1995.
              </p>
              <div className="flex gap-6">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:text-brand-yellow hover:border-brand-yellow transition-all cursor-pointer bg-white/5 iron-bevel">
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="lg:col-span-4 space-y-12">
              <h4 className="font-orbitron text-xl font-black text-white uppercase italic tracking-widest border-b border-white/10 pb-6">DESPLIEGUE OPERATIVO</h4>
              <div className="space-y-8">
                <div className="group">
                  <p className="text-brand-yellow font-black font-orbitron text-[10px] tracking-[0.4em] mb-3 uppercase">SEDE ADMINISTRATIVA</p>
                  <p className="text-white/80 font-montserrat italic text-[12px] leading-tight group-hover:text-white transition-colors uppercase">
                    Av. Jorge Rodríguez CC MT, PB Of 05<br />
                    Sector Las Garzas, Lechería Anzoátegui
                  </p>
                </div>
                <div className="group">
                  <p className="text-brand-yellow font-black font-orbitron text-[10px] tracking-[0.4em] mb-3 uppercase">CENTRO LOGÍSTICO</p>
                  <p className="text-white/80 font-montserrat italic text-[12px] leading-tight group-hover:text-white transition-colors uppercase">
                    Autopista Rómulo Betancourt, S/N<br />
                    Sector Los Potocos, Barcelona Edo. Anzoátegui
                  </p>
                </div>
                <div className="pt-10 border-t border-white/5 space-y-4">
                  <div className="flex items-center gap-5 group">
                    <Phone size={16} className="text-brand-yellow" />
                    <span className="text-white/80 font-orbitron text-xs tracking-widest">+58 414 181 61 62</span>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <Mail size={16} className="text-brand-yellow" />
                    <span className="text-white/80 font-orbitron text-xs tracking-widest">NEGOCIOS@GROUPLORMAR.COM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Integration */}
            <div className="lg:col-span-4">
              <div className="h-full min-h-[350px] border-iron iron-bevel grayscale-[0.5] opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=17fVcJp0SYgXWSl1eCIFFLvQIRKkw5Ak&ehbc=2E312F"
                  className="absolute top-[-52px] left-0 w-full h-[calc(100%+52px)] border-0"
                  loading="lazy"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-[12px] border-iron opacity-20"></div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6 text-[10px] font-black font-orbitron uppercase tracking-[0.4em] text-white/40">
              <Link href="/" className="hover:text-brand-yellow transition-colors">Infraestructura</Link>
              <Link href="/servicios" className="hover:text-brand-yellow transition-colors">Capacidades</Link>
              <Link href="/proyectos" className="hover:text-brand-yellow transition-colors">Ejecución</Link>
              <Link href="/nosotros" className="hover:text-brand-yellow transition-colors">Corporativo</Link>
            </div>
            <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] font-orbitron">
              © 2026 GRUPO LORMAR • RIF: J-30657965-6 • VENEZUELA
            </p>
          </div>
        </div>
      </footer >
    </main >
  );
}

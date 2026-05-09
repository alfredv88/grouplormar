import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Leaf, Users, Award, ShieldCheck, Globe, CheckCircle2, ExternalLink, FileText, Download } from "lucide-react";

const legalDossier = [
  {
    title: "RIF CORPORATIVO",
    entity: "SENIAT (VENEZUELA)",
    serial: "J-30657965-6",
    details: [
      { label: "Número de Comprobante", value: "202207N0000057976090" },
      { label: "Fecha de Inscripción", value: "26/11/2010" },
      { label: "Fecha de Vencimiento", value: "06/05/2027" },
      { label: "Dirección Fiscal", value: "AV JORGE RODRIGUEZ CC MT NIVEL PB LOCAL 05 SECTOR LAS GARZAS LECHERIAS ANZOATEGUI ZONA POSTAL 6016" }
    ],
    badge: "ACTIVO",
    badgeColor: "text-green-400 bg-green-500/10 border-green-500/20",
    linkText: "Portal de Consulta SENIAT",
    linkUrl: "https://www.seniat.gob.ve",
  },
  {
    title: "RACDA MANEJADOR",
    entity: "MINISTERIO PARA EL ECOSOCIALISMO",
    serial: "03-04-TSMDP-2024-11956",
    details: [
      { label: "Ámbito de Aplicación", value: "Transporte de Materiales y Desechos Peligrosos (Sujeto a Medidas de Seguridad)" },
      { label: "Tipo de Registro", value: "Manejador Autorizado a Nivel Nacional" },
      { label: "Sede de Emisión", value: "Centro Simón Bolívar. Torre Sur, El Silencio, Distrito Capital." },
      { label: "Estatus de Verificación", value: "Auditoría Física de Equipos y Unidades Aprobada" }
    ],
    badge: "VIGENTE",
    badgeColor: "text-7l-gold bg-7l-gold/10 border-7l-gold/20",
    linkText: "Sistema RACDA Online",
    linkUrl: "#",
  },
  {
    title: "RACDA GENERADOR",
    entity: "MINEC (ANZOÁTEGUI)",
    serial: "01-13-02-02-03-2025-635",
    details: [
      { label: "Ámbito de Aplicación", value: "Generador de Emisiones y Efluentes Industriales" },
      { label: "Sede de Operaciones", value: "Sector Palotal calle Ricaurte al lado de la Circunscripción Militar de Barcelona, Estado Anzoátegui." },
      { label: "Estatus Legal", value: "Declaración Jurada y Supervisión Técnica Conforme" },
      { label: "Periodo Declarado", value: "Válido bajo Plan de Adecuación Ambiental Permanente" }
    ],
    badge: "VIGENTE",
    badgeColor: "text-7l-gold bg-7l-gold/10 border-7l-gold/20",
    linkText: "Verificar Control Ambiental",
    linkUrl: "#",
  },
  {
    title: "RNC HABILITADO",
    entity: "SISTEMA NACIONAL DE CONTRATACIONES",
    serial: "CORRELATIVO: 2025060651014000225",
    details: [
      { label: "Número de Comprobante", value: "1487787306579656247" },
      { label: "Vigencia de Inscripción", value: "Desde 06/06/2025 hasta 30/06/2026" },
      { label: "Habilitación Operativa", value: "Apto para Contratar con el Estado (Artículo 49 de Ley de Contrataciones)" },
      { label: "Clasificación de Actividad", value: "Servicios Generales, Ingeniería, Construcción y Mantenimiento Industrial" }
    ],
    badge: "HABILITADO",
    badgeColor: "text-green-400 bg-green-500/10 border-green-500/20",
    linkText: "Verificar RNC en Línea",
    linkUrl: "http://www.snc.gob.ve",
  }
];

export default function ResponsabilidadPage() {
    return (
        <main className="min-h-screen bg-7l-black text-white font-montserrat selection:bg-7l-gold selection:text-7l-black pt-40 pb-24 overflow-hidden relative">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-radial from-7l-gold/5 to-transparent pointer-events-none z-0" />
            <div className="absolute bottom-10 left-0 w-[30%] h-[30%] bg-radial from-7l-gold/3 to-transparent pointer-events-none z-0" />

            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-32 relative z-10">
                
                {/* Back button link (Premium, Minimalist, Elegant) */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-7l-gold hover:text-white transition-colors group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
                        <span>Volver al Inicio</span>
                    </Link>
                </div>

                {/* Section Header: Premium 7L Architectural Style */}
                <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                    <div className="space-y-4">
                        <span className="text-7l-gold font-mono text-[9px] font-bold tracking-[0.4em] uppercase block">
                            Corporate Integrity & Compliance
                        </span>
                        <h1 className="text-h1 flex flex-col leading-none">
                            <span className="text-7l-gold font-future">VALORES QUE</span>
                            <span className="text-white font-future">ESTRUCTURAN</span>
                        </h1>
                        <div className="w-24 h-[4px] bg-7l-gold mt-6"></div>
                    </div>
                    
                    <div className="max-w-2xl border-l-[3px] border-7l-gold pl-6">
                        <p className="text-sm font-semibold !text-white tracking-[0.05em] leading-relaxed italic">
                            Nuestra responsabilidad no concluye con la entrega de una obra. Se expande con impacto duradero hacia las comunidades, el equilibrio ecológico y la integridad física de cada miembro de nuestro equipo operativo.
                        </p>
                    </div>
                </div>

                {/* Strategic Grid - Quieter Luxury Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    
                    {/* Card 1: Gestión Ambiental */}
                    <div className="group bg-white/5 border border-white/10 p-10 hover:border-7l-gold/40 transition-all duration-700 flex flex-col justify-between h-full min-h-[420px] shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-radial from-7l-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div>
                            <div className="w-16 h-16 rounded-none bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:border-7l-gold/30 transition-colors duration-500">
                                <Leaf size={28} className="text-7l-gold" />
                            </div>
                            <h2 className="text-[20px] font-black uppercase tracking-wider mb-4 group-hover:text-7l-gold transition-colors duration-300">
                                Gestión Ambiental
                            </h2>
                            <p className="text-xs text-7l-gray leading-relaxed mb-6 font-medium">
                                Implementamos estrictos programas de remediación de suelos y disposición final segura de desechos industriales, operando bajo las normativas MARNR vigentes.
                            </p>
                        </div>
                        <ul className="space-y-3 pt-6 border-t border-white/10">
                            {["Control de Emisiones", "Manejo de Efluentes", "Remediación de Pasivos"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.15em] text-white">
                                    <CheckCircle2 size={12} className="text-7l-gold" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 2: Aporte Comunitario */}
                    <div className="group bg-white/5 border border-white/10 p-10 hover:border-7l-gold/40 transition-all duration-700 flex flex-col justify-between h-full min-h-[420px] shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-radial from-7l-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div>
                            <div className="w-16 h-16 rounded-none bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:border-7l-gold/30 transition-colors duration-500">
                                <Users size={28} className="text-7l-gold" />
                            </div>
                            <h2 className="text-[20px] font-black uppercase tracking-wider mb-4 group-hover:text-7l-gold transition-colors duration-300">
                                Aporte Comunitario
                            </h2>
                            <p className="text-xs text-7l-gray leading-relaxed mb-6 font-medium">
                                Fortalecemos de forma constante el tejido social mediante planes de empleo local directo y apoyo continuo a las comunidades adyacentes a nuestras bases logísticas.
                            </p>
                        </div>
                        <ul className="space-y-3 pt-6 border-t border-white/10">
                            {["Becas Estudiantiles", "Obras Solidarias", "Empleo Local +80%"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.15em] text-white">
                                    <div className="w-2 h-2 bg-7l-gold rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 3: Garantía de Calidad */}
                    <div className="group bg-white/5 border border-white/10 p-10 hover:border-7l-gold/40 transition-all duration-700 flex flex-col justify-between h-full min-h-[420px] shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-radial from-7l-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div>
                            <div className="w-16 h-16 rounded-none bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:border-7l-gold/30 transition-colors duration-500">
                                <Award size={28} className="text-7l-gold" />
                            </div>
                            <h2 className="text-[20px] font-black uppercase tracking-wider mb-4 group-hover:text-7l-gold transition-colors duration-300">
                                Garantía de Calidad
                            </h2>
                            <p className="text-xs text-7l-gray leading-relaxed mb-6 font-medium">
                                Operamos rigurosamente certificados por los entes reguladores más exigentes nacionales e internacionales del ámbito energético e industrial.
                            </p>
                        </div>
                        <ul className="space-y-3 pt-6 border-t border-white/10">
                            {["RNC Vigente", "SENCAMER", "Normas ASTM / ASME"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.15em] text-white">
                                    <ShieldCheck size={12} className="text-7l-gold" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* VISUAL COMPLIANCE DOSSIER SECTION (HIGH FIDELITY) */}
                <div id="dossier" className="pt-24 mt-24 border-t border-white/10 scroll-mt-28">
                    <div className="max-w-4xl mb-16">
                        <span className="text-7l-gold font-mono text-[9px] font-bold tracking-[0.4em] uppercase block mb-3 animate-pulse">
                            Verificación de Credenciales en Tiempo Real
                        </span>
                        <h2 className="text-3xl md:text-4xl font-future text-white uppercase tracking-wider mb-6">
                            DOSSIER TÉCNICO <br /><span className="text-7l-gold">LEGAL</span>
                        </h2>
                        <div className="w-16 h-[2.5px] bg-7l-gold mb-6" />
                        <p className="text-xs text-7l-gray leading-relaxed font-medium max-w-2xl uppercase tracking-wider">
                            Consulte el soporte visual, direcciones fiscales verificadas y comprobantes oficiales de los entes reguladores que avalan nuestras operaciones industriales, energéticas y ambientales.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {legalDossier.map((doc, idx) => (
                            <div key={idx} className="group bg-zinc-950/40 border border-white/5 hover:border-7l-gold/30 transition-all duration-700 p-8 md:p-10 rounded-none relative overflow-hidden flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
                                
                                {/* Background grid aesthetic */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />
                                
                                {/* Radial gold flare */}
                                <div className="absolute -top-40 -right-40 w-80 h-80 bg-radial from-7l-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                {/* LEFT: Metadata & Legal text */}
                                <div className="flex-1 space-y-6 relative z-10">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <span className={`text-[8.5px] font-black tracking-widest px-3 py-1 rounded-none border uppercase ${doc.badgeColor}`}>
                                            {doc.badge}
                                        </span>
                                        <div className="space-y-0.5">
                                            <span className="text-7l-gray text-[9px] font-bold tracking-widest block uppercase">
                                                {doc.entity}
                                            </span>
                                            <h3 className="text-lg font-black tracking-wider text-white">
                                                {doc.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 pt-2 border-t border-white/5">
                                        {doc.details.map((detail, dIdx) => (
                                            <div key={dIdx} className={detail.label.includes("Dirección") || detail.label.includes("Ámbito") || detail.label.includes("Sede") ? "sm:col-span-2 space-y-1.5" : "space-y-1.5"}>
                                                <span className="text-[8.5px] font-bold text-zinc-500 uppercase tracking-widest block">
                                                    {detail.label}
                                                </span>
                                                <span className={`${detail.label.includes("Dirección") || detail.label.includes("Ámbito") || detail.label.includes("Sede") ? "font-montserrat text-[11.5px] text-zinc-300 font-semibold leading-relaxed" : "font-mono text-xs text-7l-gold font-bold tracking-wider"} block uppercase`}>
                                                    {detail.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* RIGHT: Visual Scan/Verification Badge */}
                                <div className="w-full lg:w-72 shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 pt-10 lg:pt-0 lg:pl-10 flex flex-col justify-between items-center lg:items-end text-center lg:text-right gap-8 relative z-10">
                                    
                                    {/* Simulated Holographic Card Component */}
                                    <div className="w-full max-w-[240px] bg-gradient-to-b from-zinc-900 to-black border border-white/10 p-5 rounded-none relative overflow-hidden group-hover:border-7l-gold/50 transition-all duration-700 shadow-2xl">
                                        
                                        {/* Security watermarks */}
                                        <div className="absolute top-2 right-2 flex gap-1 opacity-25">
                                            <ShieldCheck size={10} className="text-7l-gold" />
                                            <span className="text-[6px] font-mono text-white tracking-widest uppercase">SECURE</span>
                                        </div>
                                        
                                        <div className="flex justify-center mb-4">
                                            {/* Stylized QR Code SVG */}
                                            <svg className="w-24 h-24 text-7l-gold/70 group-hover:text-7l-gold transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                                                {/* Corner Squares */}
                                                <rect x="5" y="5" width="25" height="25" rx="1" fill="none" strokeWidth="3" />
                                                <rect x="11" y="11" width="13" height="13" rx="0" fill="currentColor" />
                                                
                                                <rect x="70" y="5" width="25" height="25" rx="1" fill="none" strokeWidth="3" />
                                                <rect x="76" y="11" width="13" height="13" rx="0" fill="currentColor" />
                                                
                                                <rect x="5" y="70" width="25" height="25" rx="1" fill="none" strokeWidth="3" />
                                                <rect x="11" y="76" width="13" height="13" rx="0" fill="currentColor" />
                                                
                                                {/* Core branding symbol mockup */}
                                                <rect x="42" y="42" width="16" height="16" rx="1" fill="black" stroke="currentColor" strokeWidth="2" />
                                                <polygon points="50,45 54,53 46,53" fill="currentColor" />
                                                
                                                {/* QR Code Matrix Elements */}
                                                <path d="M 40,12 H 58 M 44,22 H 54 M 12,42 V 58 M 22,46 V 56 M 82,42 V 58 M 88,46 V 56 M 42,88 H 58 M 46,78 H 54" strokeWidth="3" />
                                                <path d="M 42,6 H 46 M 54,6 H 62 M 94,42 V 48 M 94,78 V 84 M 82,22 H 88 M 84,84 H 90" strokeWidth="3" />
                                            </svg>
                                        </div>

                                        <div className="space-y-1 text-center">
                                            <span className="text-[8px] text-zinc-500 font-bold tracking-widest uppercase block">Registro Oficial</span>
                                            <span className="font-mono text-[10.5px] font-black text-white block tracking-wider uppercase">{doc.serial}</span>
                                            <span className="text-[7.5px] text-7l-gold font-bold tracking-widest block uppercase animate-pulse">Sello Digital Activado</span>
                                        </div>
                                    </div>

                                    {/* Action links */}
                                    <div className="w-full space-y-2.5 max-w-[240px]">
                                        {doc.linkUrl !== "#" ? (
                                            <a 
                                                href={doc.linkUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:border-7l-gold/40 hover:bg-white/[0.08] transition-all duration-300 py-2.5 text-[9px] font-black tracking-[0.2em] uppercase text-white rounded-none"
                                            >
                                                <ExternalLink size={11} className="text-7l-gold" />
                                                <span>{doc.linkText}</span>
                                            </a>
                                        ) : (
                                            <div className="w-full flex items-center justify-center gap-3 bg-white/[0.02] border border-white/5 py-2.5 text-[9px] font-black tracking-[0.2em] uppercase text-zinc-500 rounded-none cursor-not-allowed">
                                                <ShieldCheck size={11} className="text-zinc-600" />
                                                <span>Consulta Automatizada</span>
                                            </div>
                                        )}
                                        <button 
                                            onClick={() => alert(`Soporte de Visualización: Generando copia física certificada y verificada de: ${doc.title} (${doc.serial}). Código de Seguridad de Trazabilidad Activo.`)}
                                            className="w-full flex items-center justify-center gap-3 bg-white/[0.01] border border-white/5 hover:border-white/20 transition-all duration-300 py-2 text-[8px] font-bold tracking-[0.2em] uppercase text-zinc-400 hover:text-white rounded-none"
                                        >
                                            <FileText size={10} className="text-zinc-500" />
                                            <span>Soporte Escaneado (PDF)</span>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                {/* Credentials Banner: Quiet Luxury Showcase */}
                <div className="border-t border-white/10 pt-16 mt-16">
                    <div className="flex flex-wrap justify-between items-center gap-10 md:gap-16 opacity-75 hover:opacity-100 transition-opacity duration-500">
                        <div className="text-md font-mono tracking-[0.3em] font-bold text-white">ISO 9001:2015</div>
                        <div className="text-md font-mono tracking-[0.3em] font-bold border border-7l-gold/40 px-4 py-2 text-7l-gold">RNC CERTIFIED</div>
                        <div className="text-md font-mono tracking-[0.3em] font-bold text-white">ASME CODES</div>
                        <div className="text-md font-mono tracking-[0.3em] font-bold text-white">API STANDARDS</div>
                        <div className="text-[11px] font-mono tracking-[0.2em] font-bold text-7l-gray">RIF: J-30657965-6</div>
                    </div>
                </div>

            </div>
        </main>
    );
}

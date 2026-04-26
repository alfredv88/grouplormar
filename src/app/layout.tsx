import { Montserrat, Syncopate, Syne } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import ChatContactWidget from "@/components/layout/ChatContactWidget";
import MechanicalPageTransition from "@/components/layout/MechanicalPageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat", 
  weight: ["300", "400", "500", "700"] 
});

const syncopate = Syncopate({ 
  weight: ["700"], 
  subsets: ["latin"], 
  variable: "--font-syncopate" 
});

const syne = Syne({ 
  weight: ["700", "800"], 
  subsets: ["latin"], 
  variable: "--font-syne" 
});

export const metadata: Metadata = {
  title: "Grupo Lormar | Potencia Industrial y Soluciones Operativas",
  description: "Lideramos proyectos de alta complejidad con maquinaria pesada propia y precisión técnica inquebrantable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${syncopate.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className="antialiased font-montserrat selection:bg-[#F2A900] selection:text-[#0F0F0F]">
        <Navbar />
        <MechanicalPageTransition>
          {children}
        </MechanicalPageTransition>
        <Footer />
        <ChatContactWidget />
      </body>
    </html>
  );
}

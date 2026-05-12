import { Montserrat, Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import ChatContactWidget from "@/components/layout/ChatContactWidget";
import MechanicalPageTransition from "@/components/layout/MechanicalPageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat", 
  weight: ["400", "500", "600", "700", "800", "900"] 
});

const futureEarth = localFont({
  src: "../../public/fonts/future-earth.ttf",
  variable: "--font-future",
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
    <html lang="es" className={`${montserrat.variable} ${futureEarth.variable}`} suppressHydrationWarning>
      <body className="antialiased font-montserrat selection:bg-[#F2A900] selection:text-[#0F0F0F] bg-white text-black">
        <SmoothScrollProvider>
          <Navbar />
          <MechanicalPageTransition>
            {children}
          </MechanicalPageTransition>
          <Footer />
          <ChatContactWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

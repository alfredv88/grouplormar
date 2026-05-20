
import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import ChatContactWidget from "@/components/layout/ChatContactWidget";
import MechanicalPageTransition from "@/components/layout/MechanicalPageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const montserrat = localFont({
  src: "../../public/fonts/montserrat-variable.woff2",
  variable: "--font-montserrat",
  weight: "400 900",
  style: "normal",
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
      <body className="antialiased">
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

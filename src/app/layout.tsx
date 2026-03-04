import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ChatContactWidget from "@/components/ChatContactWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["300", "400", "600"] });

const orbitron = localFont({
  src: "./fonts/future-earth.ttf",
  variable: "--font-orbitron",
  display: "swap"
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
    <html lang="es" className={`${inter.variable} ${montserrat.variable} ${orbitron.variable}`} suppressHydrationWarning>
      <body className="antialiased font-montserrat selection:bg-[#F2A900] selection:text-[#0F0F0F]">
        {children}
        <ChatContactWidget />
      </body>
    </html>
  );
}

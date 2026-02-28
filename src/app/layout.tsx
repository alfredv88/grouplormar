import type { Metadata } from "next";
import { Inter, Montserrat, Teko } from "next/font/google";
import "./globals.css";
import ChatContactWidget from "@/components/ChatContactWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const teko = Teko({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-teko" });

export const metadata: Metadata = {
  title: "Grupo Lormar | Automatización y Servicios Industriales",
  description: "Expertos en soluciones industriales, automatización y mantenimiento estratégico para plantas de producción.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} ${teko.variable}`}>
      <body className="antialiased font-sans selection:bg-[#003B73] selection:text-white">
        {children}
        <ChatContactWidget />
      </body>
    </html>
  );
}

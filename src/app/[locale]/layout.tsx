import localFont from "next/font/local";
import "../globals.css";
import type { Metadata } from "next";
import ChatContactWidget from "@/components/layout/ChatContactWidget";
import MechanicalPageTransition from "@/components/layout/MechanicalPageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const montserrat = localFont({
  src: "../../../public/fonts/montserrat-variable.woff2",
  variable: "--font-montserrat",
  weight: "400 900",
  style: "normal",
});

const futureEarth = localFont({
  src: "../../../public/fonts/future-earth.ttf",
  variable: "--font-future",
});

export const metadata: Metadata = {
  title: "Grupo Lormar | Servicios y Construcciones",
  description: "Lideramos proyectos de alta complejidad con maquinaria pesada propia y precisión técnica inquebrantable.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${montserrat.variable} ${futureEarth.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <SmoothScrollProvider>
            <Navbar />
            <MechanicalPageTransition>
              {children}
            </MechanicalPageTransition>
            <Footer />
            <ChatContactWidget />
          </SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

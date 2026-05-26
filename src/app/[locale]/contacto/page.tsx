"use client";

import React from "react";
import ContactHero from "@/components/contacto/ContactHero";
import ContactForm from "@/components/contacto/ContactForm";
import ContactInfo from "@/components/contacto/ContactInfo";
import ContactMaps from "@/components/contacto/ContactMaps";

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-7l-black text-white font-montserrat tracking-tight selection:bg-7l-gold selection:text-7l-black overflow-hidden">
            {/* Header / Hero */}
            <ContactHero />

            {/* Content Section: Form + Info */}
            <section className="py-32 px-10 md:px-20 lg:px-32 relative">
                <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-32">
                    {/* Interactive HMI Form */}
                    <ContactForm />

                    {/* Operational Support Info */}
                    <ContactInfo />
                </div>
            </section>

            {/* Geographical Operations (Maps) */}
            <ContactMaps />
        </main>
    );
}

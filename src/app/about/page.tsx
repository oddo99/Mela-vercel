import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { StickyScroll } from "@/components/ui/StickyScroll";
import { Users, Target, Rocket, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const content = [
        {
            title: "Le Origini",
            description:
                "Tutto è iniziato a Torino, da un gruppo di professionisti appassionati di e-commerce e nuove tecnologie. Nati come realtà specializzata nella gestione di Amazon e dei principali marketplace, abbiamo costruito le nostre competenze sul campo.",
            content: (
                <div className="h-full w-full bg-gradient-to-br from-[#0B223A] to-[#1a3a5a] flex items-center justify-center text-white p-10">
                    <Rocket className="h-20 w-20 text-[#FFD700]" />
                </div>
            ),
        },
        {
            title: "L'Evoluzione",
            description:
                "Nel tempo, la nostra esperienza ci ha permesso di costruire strategie sempre più efficaci. Abbiamo lavorato con aziende di ogni settore — dalle farmacie all'abbigliamento — trasformando l'esperienza pratica in un metodo strutturato.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white bg-white">
                    <Image
                        src="/images/generated/office-team.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="Evolution"
                    />
                </div>
            ),
        },
        {
            title: "Il Gruppo Synesthesia",
            description:
                "Entrare nel Gruppo Synesthesia ci ha permesso di crescere esponenzialmente, investendo su innovazione, strumenti avanzati e una rete di talenti specializzati per offrire un servizio ancora più completo.",
            content: (
                <div className="h-full w-full bg-gradient-to-br from-[#FFD700] to-[#B8860B] flex items-center justify-center text-[#0B223A] p-10">
                    <Users className="h-20 w-20" />
                </div>
            ),
        },
        {
            title: "La Nostra Missione",
            description:
                "Aiutiamo le aziende a vendere meglio online. Crediamo che ogni brand abbia una storia da raccontare e un mercato da conquistare. Il nostro compito è far sì che venga ascoltata, vista e scelta.",
            content: (
                <div className="h-full w-full bg-gradient-to-br from-[#1a3a5a] to-[#0B223A] flex items-center justify-center text-white p-10">
                    <Target className="h-20 w-20 text-[#FFD700]" />
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />
            <main>
                {/* Hero Section */}
                <Section className="relative overflow-hidden bg-[#0B223A] py-32 text-white lg:py-48">
                    <div className="container relative z-10 text-center">
                        <h1 className="mb-6 text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
                            CHI <span className="text-[#FFD700]">SIAMO</span>
                        </h1>
                        <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl">
                            Esperti di digital marketing e marketplace, partner per la tua crescita.
                        </p>
                    </div>
                </Section>

                {/* Sticky Scroll Story */}
                <Section className="bg-gray-900 py-20">
                    <div className="container">
                        <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">La Nostra Storia</h2>
                        <StickyScroll content={content} />
                    </div>
                </Section>

                {/* Team Values */}
                <Section className="bg-white py-20 lg:py-28">
                    <div className="container text-center">
                        <h2 className="mb-16 text-4xl font-bold text-[#0B223A] md:text-5xl">I Nostri Valori</h2>
                        <div className="grid gap-12 md:grid-cols-3">
                            <div className="flex flex-col items-center">
                                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#0B223A]/5 text-[#FFD700]">
                                    <Target className="h-12 w-12" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Focus sul Risultato</h3>
                                <p className="text-gray-600">Il successo del tuo business è il nostro unico KPI.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#0B223A]/5 text-[#FFD700]">
                                    <Heart className="h-12 w-12" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Passione</h3>
                                <p className="text-gray-600">Amiamo ciò che facciamo e si vede in ogni progetto.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#0B223A]/5 text-[#FFD700]">
                                    <Rocket className="h-12 w-12" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Innovazione</h3>
                                <p className="text-gray-600">Sempre alla ricerca delle migliori tecnologie e strategie.</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}

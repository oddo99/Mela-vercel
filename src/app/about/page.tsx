import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Building2, Users, Calendar, Target, Award, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
    title: "Chi Siamo",
    description: "Scopri Mela Services: dal 2014 aiutiamo aziende e imprenditori a crescere nel mondo digitale con strategie di marketing e e-commerce.",
    openGraph: {
        title: "Chi Siamo | Mela Services",
        description: "Dal 2014, un team di esperti di marketing e pubblicità specializzati su diverse piattaforme e-commerce.",
    },
};

export default function AboutPage() {
    const stats = [
        { label: "Anno di fondazione", value: "2014" },
        { label: "Anni di esperienza", value: "10+" },
        { label: "Clienti soddisfatti", value: "200+" },
        { label: "Progetti completati", value: "500+" },
    ];

    const expertise = [
        "Marketplace",
        "Marketing",
        "Amazon",
        "Alibaba",
        "AliExpress",
        "eBay",
        "Shopify",
        "TikTok Shop",
    ];

    const values = [
        {
            icon: Target,
            title: "Orientamento ai risultati",
            description: "Ogni strategia è costruita per raggiungere obiettivi concreti e misurabili.",
        },
        {
            icon: Users,
            title: "Partnership",
            description: "Lavoriamo al fianco dei nostri clienti come veri partner di crescita.",
        },
        {
            icon: Award,
            title: "Eccellenza",
            description: "Competenza, esperienza e aggiornamento costante guidano il nostro lavoro.",
        },
        {
            icon: TrendingUp,
            title: "Innovazione",
            description: "Utilizziamo le tecnologie e le strategie più avanzate del settore.",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                {/* Hero Section */}
                <Section className="bg-gradient-to-br from-[#0B223A] to-[#1a3a5a] py-24 text-white lg:py-36">
                    <div className="container">
                        <FadeIn className="mx-auto max-w-4xl text-center">
                            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                                Chi <span className="text-[#FFD700]">Siamo</span>
                            </h1>
                            <p className="text-xl text-white/90 md:text-2xl">
                                Un team di esperti al servizio della tua crescita digitale
                            </p>
                        </FadeIn>
                    </div>
                </Section>

                {/* About Section */}
                <Section className="pt-24 lg:pt-32 pb-10">
                    <div className="container">
                        <div className="mx-auto max-w-4xl">
                            <FadeIn>
                                <div className="mb-16">
                                    <h2 className="mb-6 text-3xl font-bold text-[#0B223A] md:text-4xl">
                                        La Nostra Storia
                                    </h2>
                                    <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                                        <p>
                                            Mela è un'<strong>Agenzia formata da un team di esperti di marketing e pubblicità</strong> specializzati su diverse piattaforme e-commerce. Dal 2014 aiutiamo aziende, imprenditori e professionisti a crescere nel mondo digitale.
                                        </p>
                                        <p>
                                            Abbiamo impiegato anni per aiutare i nostri clienti con una vasta gamma di servizi di pubblicità e design, tra cui <strong>web design, SEO, PPC, pubblicità cartacea e brand awareness</strong>.
                                        </p>
                                        <p>
                                            Il nostro <strong>programma Marketstore Masters</strong> è stato pensato come supporto ad aziende, imprenditori e privati che vogliono creare o implementare i propri business online, senza lo spreco di tempo o risorse e con l'affiancamento di chi è presente sui marketplace internazionali da anni.
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Stats Grid */}
                            <FadeIn delay={0.2}>
                                <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <div className="mb-2 text-4xl font-bold text-[#FFD700]">{stat.value}</div>
                                            <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </Section>

                {/* Info Cards */}
                <Section className="bg-gray-50 py-24 lg:py-32">
                    <div className="container">
                        <div className="mx-auto max-w-5xl">
                            <div className="grid gap-8 md:grid-cols-2">
                                {/* Sede */}
                                <FadeIn>
                                    <div className="rounded-2xl bg-white p-8 shadow-sm">
                                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B223A]/5">
                                            <Building2 className="h-6 w-6 text-[#0B223A]" />
                                        </div>
                                        <h3 className="mb-3 text-xl font-bold text-[#0B223A]">Sede Principale</h3>
                                        <p className="text-gray-600">
                                            <strong>Torino, Piemonte</strong>
                                            <br />
                                            Corso Dante 118
                                            <br />
                                            10126 – Torino, Italia
                                        </p>
                                    </div>
                                </FadeIn>

                                {/* Fondazione */}
                                <FadeIn delay={0.1}>
                                    <div className="rounded-2xl bg-white p-8 shadow-sm">
                                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B223A]/5">
                                            <Calendar className="h-6 w-6 text-[#0B223A]" />
                                        </div>
                                        <h3 className="mb-3 text-xl font-bold text-[#0B223A]">Data di Fondazione</h3>
                                        <p className="text-gray-600">
                                            Fondata nel <strong>2014</strong>, Mela Services vanta oltre 10 anni di esperienza nel settore del digital marketing e dell'e-commerce.
                                        </p>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Expertise Section */}
                <Section className="py-24 lg:py-32">
                    <div className="container">
                        <div className="mx-auto max-w-4xl">
                            <FadeIn>
                                <h2 className="mb-12 text-center text-3xl font-bold text-[#0B223A] md:text-4xl">
                                    Settori di Competenza
                                </h2>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {expertise.map((item, index) => (
                                        <div
                                            key={index}
                                            className="rounded-full border-2 border-[#0B223A]/10 bg-white px-6 py-3 font-medium text-[#0B223A] transition-all hover:border-[#FFD700] hover:bg-[#FFD700]/10"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </Section>

                {/* Values Section */}
                <Section className="bg-[#0B223A] py-24 text-white lg:py-32">
                    <div className="container">
                        <FadeIn>
                            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
                                I Nostri <span className="text-[#FFD700]">Valori</span>
                            </h2>
                        </FadeIn>
                        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                            {values.map((value, index) => (
                                <FadeIn key={index} delay={index * 0.1}>
                                    <div className="flex gap-6">
                                        <div className="shrink-0">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD700]/10">
                                                <value.icon className="h-7 w-7 text-[#FFD700]" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                                            <p className="leading-relaxed text-gray-300">{value.description}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}

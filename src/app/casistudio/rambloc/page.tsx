import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, BookOpen, Globe, ShoppingCart, Target, Lightbulb, CheckCircle2, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function RamblocCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Stationery & Office</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Rambloc</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha trasformato il canale Amazon di Rambloc in una risorsa strategica. Il nostro valore aggiunto è la specializzazione nel marketplace, che ha consentito un intervento mirato per ottimizzare il catalogo, avviare campagne pubblicitarie efficaci e facilitare l’espansione internazionale.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Espansione", value: "ES, FR, DE", icon: Globe },
                            { label: "Strategia", value: "Catalog Optimization", icon: BookOpen },
                            { label: "Crescita", value: "Brand Awareness", icon: BarChart3 },
                        ].map((stat, index) => (
                            <Card key={index} className="flex items-center gap-4 border-none bg-white/95 p-6 shadow-xl backdrop-blur-sm">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B223A]/5 text-[#0B223A]">
                                    <stat.icon className="h-8 w-8" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
                                    <p className="text-xl font-bold text-[#0B223A]">{stat.value}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Client & Context */}
            <Section className="bg-white py-20">
                <div className="container">
                    <div className="grid gap-16 lg:grid-cols-2 items-start">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-[#0B223A] md:text-4xl">Il Cliente</h2>
                            <div className="prose prose-lg text-gray-600">
                                <p>
                                    Rambloc è un’azienda che produce prodotti per la scuola e l’ufficio, inclusi ricambi per quaderni, accoglitori, fogli di ricambio, quaderni, buste e shopper, con il marchio Rambloc Protect.
                                </p>
                                <p>
                                    Originariamente focalizzata sul mercato B2B, servendo distributori e cartolerie, l’azienda sta ora espandendo la sua presenza online con un crescente focus sul B2C attraverso l’e-commerce. L’obiettivo di Rambloc è rafforzare la propria presenza digitale, diversificare il catalogo con nuove referenze, come il marchio Texo Packaging, e penetrare nuovi mercati, tra cui Spagna, Francia e Germania.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Contesto e Sfide</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    Rambloc era già presente su Amazon, ma con un catalogo molto ridotto e una visibilità limitata, a causa di schede prodotto poco ottimizzate. Le referenze disponibili erano poche, con descrizioni e immagini carenti e le parole chiave non erano sfruttate al massimo, riducendo significativamente le vendite.
                                </p>
                                <p>
                                    Mela Services è intervenuta per potenziare il canale Amazon, espandere il catalogo, migliorare la qualità delle schede prodotto e avviare campagne pubblicitarie mirate. L’obiettivo era strutturare un’espansione efficace verso nuovi mercati, tra cui Spagna, Francia e Germania.
                                </p>
                                <p><strong>Gli obiettivi principali del progetto erano:</strong></p>
                                <ul>
                                    <li>Incrementare le vendite su Amazon e migliorare la redditività del canale online.</li>
                                    <li>Ottimizzare le schede prodotto esistenti e ampliare il catalogo.</li>
                                    <li>Espandere la distribuzione internazionale su Amazon nei mercati di Spagna, Francia e Germania.</li>
                                    <li>Potenziare la brand awareness di Rambloc nel segmento B2C.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Strategy */}
            <Section className="bg-gray-50 py-20">
                <div className="container">
                    <div className="mb-12">
                        <h2 className="mb-6 text-3xl font-bold text-[#0B223A] md:text-4xl">La Nostra Strategia</h2>
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p>
                                La strategia adottata per Rambloc includeva:
                            </p>
                            <ul>
                                <li><strong>Revisione totale dei listing:</strong> Ottimizzazione di titoli, bullet-point, descrizioni e immagini di qualità, con una ricerca approfondita delle parole chiave.</li>
                                <li><strong>Riclassificazione e ottimizzazione SEO:</strong> Focus sui prodotti ad alta potenzialità con ottimizzazione mirata per il motore di ricerca di Amazon.</li>
                                <li><strong>Avvio di campagne Amazon Advertising:</strong> Lancio di campagne sponsorizzate (Sponsored Products e Sponsored Brands) mirate alle referenze chiave.</li>
                                <li><strong>Espansione del catalogo:</strong> Introduzione di nuove referenze “laterali” come buste, shopper e accoglitori tramite il marchio Texo Packaging e valutazione per il mercato estero.</li>
                                <li><strong>Localizzazione dei listing:</strong> Traduzione e adattamento dei listing per i mercati di Spagna, Francia e Germania, con monitoraggio delle performance nei nuovi territori.</li>
                                <li><strong>Monitoraggio KPI:</strong> Analisi costante di vendite, tasso di conversione, ACOS, visibilità organica, numero di recensioni positive e valutazione media per misurare l’efficacia delle azioni intraprese.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Results */}
            <Section className="bg-white py-20">
                <div className="container">
                    <div className="rounded-3xl bg-[#0B223A] p-12 text-white md:p-20">
                        <div className="grid gap-12 md:grid-cols-2 items-center">
                            <div>
                                <h2 className="mb-6 text-3xl font-bold md:text-4xl">Risultati Concreti</h2>
                                <div className="prose prose-lg text-gray-300">
                                    <p>
                                        L’intervento di Mela Services ha portato a un’ottimizzazione significativa del catalogo, con un miglioramento dei contenuti (titoli, descrizioni, immagini e parole chiave), incrementando le vendite mensili su Amazon.
                                    </p>
                                    <p>
                                        Le campagne pubblicitarie hanno aumentato la visibilità, scalando le referenze più performanti, mentre la reputazione del brand è migliorata grazie all’aumento delle recensioni e della valutazione media. Inoltre, l’espansione verso Spagna, Francia e Germania è stata avviata con successo, con cataloghi localizzati per ciascun mercato.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Espandi il tuo Business <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Ottimizzazione</h4>
                                    <p className="text-gray-200">Miglioramento significativo dei contenuti e della SEO del catalogo.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Export</h4>
                                    <p className="text-gray-200">Lancio di successo in Spagna, Francia e Germania.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Crescita</h4>
                                    <p className="text-gray-200">Aumento vendite mensili e miglioramento reputazione brand.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </div>
    );
}

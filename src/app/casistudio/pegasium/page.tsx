import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Car, Globe, ShieldCheck, Target, Lightbulb, CheckCircle2, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function PegasiumCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Automotive Aftermarket</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Pegasium</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha supportato Pegasium con un approccio personalizzato, sviluppato per il settore dei ricambi automotive, ottimizzando ogni aspetto della presenza su Amazon.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Settore", value: "Automotive Parts", icon: Car },
                            { label: "Mercati", value: "IT, FR, ES, DE", icon: Globe },
                            { label: "Focus", value: "Brand Protection", icon: ShieldCheck },
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
                                    Pegasium è una piccola-media impresa italiana specializzata nella vendita di ricambi per il settore automobilistico. Con un ampio catalogo di prodotti, si rivolge principalmente a professionisti del settore e privati che cercano ricambi di alta qualità per la cura e manutenzione dei veicoli.
                                </p>
                                <p>
                                    L’azienda si distingue per l’offerta di ricambi originali, un servizio di spedizione rapido e un’assistenza clienti efficiente, garantendo acquisti online veloci, sicuri e convenienti. Pegasium si posiziona come un punto di riferimento affidabile per chi cerca soluzioni di qualità a prezzi competitivi.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Obiettivi e Sfide</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    L’obiettivo principale di Pegasium è stato aumentare la visibilità e le vendite su Amazon, ottimizzando le schede prodotto, le campagne pubblicitarie e la strategia di pricing.
                                </p>
                                <p>
                                    Tra gli obiettivi operativi, l’azienda ha puntato ad ampliare l’assortimento di ricambi automotive, migliorare le schede prodotto per aumentare le conversioni, implementare campagne pubblicitarie efficaci, proteggere il brand da contraffazioni e venditori non autorizzati, e incrementare le recensioni positive per rafforzare la fiducia dei clienti.
                                </p>
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
                                La fase iniziale ha previsto la pubblicazione delle referenze prioritarie sul marketplace francese e la gestione completa dell’autorizzazione del marchio, necessaria per sbloccare le categorie automotive. Questo ha permesso di rendere operativi i prodotti, garantire la conformità alle policy di Amazon e avviare una distribuzione internazionale sicura e strutturata.
                            </p>
                            <p>
                                Mela ha adottato un approccio data-driven per ottimizzare la presenza di Pegasium su Amazon. La strategia ha incluso l’espansione in nuovi mercati, come la Francia, e il miglioramento delle schede prodotto con aggiornamenti su descrizioni, titoli, immagini e l’implementazione di contenuti A+ per aumentare la visibilità.
                            </p>
                            <p>
                                Sono state attivate campagne PPC (Sponsored Products e Sponsored Brands) per attrarre nuovi clienti e promuovere i ricambi più popolari. La protezione del brand è stata garantita con la registrazione del marchio per prevenire la vendita di prodotti contraffatti. Inoltre, è stata avviata l’espansione in Spagna e Germania per consolidare la presenza di Pegasium in nuovi mercati europei.
                            </p>
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
                                        Grazie alla strategia di Mela, Pegasium ha visto un aumento significativo della visibilità e delle conversioni su Amazon, con una protezione efficace del brand da venditori non autorizzati. L’espansione sui marketplace europei, in particolare in Spagna e Germania, ha rafforzato la presenza internazionale del brand.
                                    </p>
                                    <p>
                                        Mela ha adottato un approccio personalizzato per il settore dei ricambi automotive, ottimizzando ogni aspetto della vendita su Amazon e migliorando la fiducia dei clienti attraverso una gestione attenta delle recensioni e della protezione del marchio.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Proteggi e Espandi il tuo Brand <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Brand Protection</h4>
                                    <p className="text-gray-200">Protezione efficace da contraffazioni e venditori non autorizzati.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Internazionalizzazione</h4>
                                    <p className="text-gray-200">Espansione di successo in Francia, Spagna e Germania.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Performance</h4>
                                    <p className="text-gray-200">Aumento significativo di visibilità e conversioni grazie a PPC e SEO.</p>
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

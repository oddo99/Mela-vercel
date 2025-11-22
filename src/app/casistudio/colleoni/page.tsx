import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Package, TrendingUp, Target, Lightbulb, CheckCircle2, BarChart3, Recycle } from "lucide-react";
import Link from "next/link";

export default function ColleoniCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Logistica & B2B</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Colleoni</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha supportato Colleoni con un metodo end-to-end specifico per Amazon, che ha integrato audit, ottimizzazione dei contenuti, strategia adv data-driven e governance continuativa.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Target", value: "B2B & Professional", icon: Package },
                            { label: "Strategia", value: "End-to-End Amazon", icon: Target },
                            { label: "Focus", value: "Sostenibilità (Riciclato)", icon: Recycle },
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
                                    Colleoni è un brand specializzato in soluzioni per logistica, trasporto e stoccaggio, offrendo contenitori, cassoni e articoli impilabili o incastrabili realizzati in materiali plastici riciclati e rigenerati.
                                </p>
                                <p>
                                    È una PMI con un catalogo specializzato, rivolta principalmente a un pubblico B2B — tra cui aziende logistiche, manifatturiere, GDO e magazzini — con una possibile estensione al segmento B2C professionale, attento a qualità e funzionalità.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Obiettivi e Sfide</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    Gli obiettivi principali per Colleoni erano aumentare le vendite e la visibilità nelle sottocategorie chiave, migliorando al contempo la profittabilità tramite la riduzione di ACoS e CPA e l’aumento del PPM netto.
                                </p>
                                <p>
                                    È stato inoltre importante rafforzare l’immagine del brand, valorizzando i messaggi legati all’eco-sostenibilità e ai materiali rigenerati per distinguersi dai competitor low-cost, e stabilizzare la Buy Box sui propri ASIN per garantire continuità e controllo nelle vendite.
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
                                L’approccio iniziale è stato quello di “fix the fundamentals”, seguito da una crescita controllata. In una prima fase, sono stati ottimizzati contenuti e feed per migliorare conversione e posizionamento organico. Successivamente, le campagne adv sono state rifocalizzate su keyword a intento commerciale e segmentate per famiglia di prodotto, così da garantire che ogni investimento pubblicitario fosse più efficace grazie a pagine ottimizzate e query mirate.
                            </p>
                            <p>
                                La strategia per Colleoni ha previsto l’ottimizzazione del catalogo, con titoli, immagini e claim coerenti per valorizzare le caratteristiche dei prodotti. Sul fronte SEO, è stata sviluppata una keyword map con attributi completi per migliorare la visibilità organica.
                            </p>
                            <p>
                                Le campagne adv hanno combinato Sponsored Products e Sponsored Brands, con una gestione mirata delle query e focus su keyword mid e long tail. Lo Store Amazon è stato organizzato in percorsi tematici per casi d’uso e funzionalità, migliorando navigazione e conversione.
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
                                        Il progetto ha portato a una maggiore visibilità organica su keyword commerciali e a un miglioramento di CTR e conversioni grazie a contenuti A+, titoli e immagini ottimizzati. Le campagne adv hanno registrato una riduzione dell’ACoS e una gestione del budget più efficiente, mentre lo Store è diventato più coerente e la Buy Box più stabile.
                                    </p>
                                    <p>
                                        Il valore aggiunto di Mela Services è stato un metodo end-to-end che integra SEO, adv data-driven, ottimizzazione dei contenuti e controllo dei profitti, garantendo risultati concreti e una crescita sostenibile.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Ottimizza il tuo Business B2B <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Efficienza Adv</h4>
                                    <p className="text-gray-200">Riduzione dell'ACoS e gestione budget più efficiente.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Visibilità Organica</h4>
                                    <p className="text-gray-200">Miglioramento del ranking su keyword commerciali strategiche.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Stabilità</h4>
                                    <p className="text-gray-200">Buy Box stabile e catalogo ottimizzato per la conversione.</p>
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

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Leaf, Globe, ShoppingCart, Target, Lightbulb, CheckCircle2, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function FormularityCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Supplements & Wellness</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Formularity</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha guidato Formularity nel lancio e nella crescita su Amazon, partendo da zero e portandola a competere in un mercato difficile come quello degli integratori naturali.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Strategia", value: "Launch from Zero", icon: Target },
                            { label: "Mercati", value: "IT, ES, DE", icon: Globe },
                            { label: "Focus", value: "Organic Optimization", icon: Leaf },
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
                                    Formularity è un’azienda attiva nel settore degli integratori alimentari, con un focus sulla linea Evovit, composta da vitamine in olio d’oliva ad alto assorbimento. Si rivolge a persone attente alla salute e al benessere, interessate a soluzioni naturali e integratori di alta qualità che combinano ricerca scientifica e ingredienti naturali.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Obiettivi e Sfide</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    L’obiettivo principale di Formularity era aumentare le vendite e la visibilità del brand, costruendo una solida brand awareness nel mercato degli integratori. Il brand mirava a un posizionamento di nicchia, valorizzando la linea di vitamine in olio d’oliva come prodotto di alta qualità e simbolo di integrazione naturale ed efficace.
                                </p>
                                <p>
                                    L’obiettivo era differenziare il brand dai competitor più grandi, puntando su qualità e unicità, partendo da zero su Amazon.
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
                                L’approccio strategico di Formularity è iniziato con l’apertura su Amazon Italia, partendo da zero con la pubblicazione dei prodotti e la ricerca delle parole chiave per un posizionamento efficace. Sono stati ottimizzati i listing con descrizioni accurate, immagini di qualità e campagne pubblicitarie mirate per aumentare la visibilità.
                            </p>
                            <p>
                                La strategia di Formularity ha puntato sull’ottimizzazione dei listing Amazon, migliorando titoli, descrizioni e contenuti visivi, insieme a una ricerca mirata di parole chiave per il mercato degli integratori. Sono state attivate campagne pubblicitarie per aumentare la visibilità e stimolare le vendite organiche. Dopo il successo in Italia, il brand ha avviato l’espansione su Amazon Spagna e Germania, con una strategia localizzata per ciascun mercato.
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
                                        Formularity ha ottenuto un miglior posizionamento su Amazon, un aumento delle vendite e un’espansione internazionale in Spagna e Germania. La brand awareness e la visibilità organica sono cresciute costantemente, con un ottimo riscontro dalle vendite.
                                    </p>
                                    <p>
                                        Il valore aggiunto di Mela Services è stato quello di guidare il brand dalla fase iniziale, aiutandolo a posizionarsi in un mercato competitivo e a espandersi all’estero grazie a una strategia sostenibile, senza dipendere da pubblicità costose.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Lancia il tuo Brand da Zero <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Zero to Hero</h4>
                                    <p className="text-gray-200">Lancio di successo partendo da zero in un mercato competitivo.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Internazionalizzazione</h4>
                                    <p className="text-gray-200">Espansione in Spagna e Germania con strategia localizzata.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Sostenibilità</h4>
                                    <p className="text-gray-200">Crescita basata su ottimizzazione organica e non solo su ADS.</p>
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

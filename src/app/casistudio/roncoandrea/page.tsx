import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Hammer, Home, Target, Lightbulb, CheckCircle2, BarChart3, HardHat, Globe, Map } from "lucide-react";
import Link from "next/link";

export default function RoncoAndreaCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Edilizia & Costruzioni</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Ronco Andrea</h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-300 md:text-2xl">
                        Digitalizzazione e presenza online per un'impresa edile di eccellenza.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Settore", value: "Edilizia", icon: HardHat },
                            { label: "Obiettivo", value: "Digital Presence", icon: Globe },
                            { label: "Focus", value: "Local Lead Gen", icon: Target },
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

            {/* Client & Challenge */}
            <Section className="bg-white py-20">
                <div className="container">
                    <div className="grid gap-16 lg:grid-cols-2 items-center">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-[#0B223A] md:text-4xl">Il Cliente</h2>
                            <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                                L'Impresa Edile Ronco Andrea è una realtà consolidata nel settore delle costruzioni e ristrutturazioni.
                                Si distingue per la qualità delle realizzazioni e l'attenzione ai dettagli, operando sia nel residenziale che nel commerciale.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Edilizia", "Costruzioni", "Ristrutturazioni", "Local SEO", "Lead Gen"].map((tag, i) => (
                                    <span key={i} className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">La Sfida</h3>
                            <ul className="space-y-4">
                                {[
                                    "Costruire una presenza digitale solida per un'azienda tradizionalmente offline.",
                                    "Generare contatti qualificati (lead) per nuovi progetti di costruzione e ristrutturazione.",
                                    "Mostrare il portfolio lavori in modo accattivante e professionale.",
                                    "Migliorare la visibilità locale per intercettare la domanda sul territorio."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                                            <Target className="h-4 w-4" />
                                        </div>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Strategy */}
            <Section className="bg-gray-50 py-20">
                <div className="container">
                    <div className="mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-[#0B223A] md:text-4xl">La Nostra Strategia</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            Valorizzazione del portfolio e ottimizzazione per la ricerca locale.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "Showcase Digitale",
                                desc: "Creazione di una vetrina online che mette in risalto la qualità delle realizzazioni e l'esperienza dell'impresa.",
                                icon: Home
                            },
                            {
                                title: "Local SEO",
                                desc: "Ottimizzazione per le ricerche locali per garantire che l'impresa sia trovata dai clienti nella sua area operativa.",
                                icon: Map
                            },
                            {
                                title: "Lead Generation",
                                desc: "Strategie per convertire i visitatori del sito in contatti commerciali concreti.",
                                icon: Target
                            }
                        ].map((item, i) => (
                            <Card key={i} className="p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B223A]/5 text-[#0B223A]">
                                    <item.icon className="h-7 w-7" />
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-[#0B223A]">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </Card>
                        ))}
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
                                <p className="mb-8 text-lg text-gray-300">
                                    Ronco Andrea ha ora una presenza digitale che rispecchia la qualità del suo lavoro, generando nuove opportunità di business dal web.
                                </p>
                                <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                    <Link href="/contatti" className="flex items-center">
                                        Costruiamo il tuo Successo <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Visibilità</h4>
                                    <p className="text-gray-200">Aumento della rintracciabilità online per servizi edili nella zona di riferimento.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Contatti</h4>
                                    <p className="text-gray-200">Flusso costante di richieste di preventivo tramite il canale digitale.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Immagine</h4>
                                    <p className="text-gray-200">Consolidamento della reputazione professionale attraverso una presenza web curata.</p>
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

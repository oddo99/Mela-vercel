import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, TrendingUp, ShoppingCart, Target, Lightbulb, CheckCircle2, BarChart3, Search } from "lucide-react";
import Link from "next/link";

export default function Farmacia724CaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Pharma & E-commerce</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Farmacia 724</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha supportato Farmacia 724 in un processo di crescita che ha portato a un aumento dei profitti, mantenendo al contempo i costi operativi sotto controllo.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Crescita", value: "> 100% Profitti", icon: TrendingUp },
                            { label: "Canale", value: "E-commerce & Google Ads", icon: ShoppingCart },
                            { label: "Strategia", value: "SEO + Advertising", icon: Target },
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
                                    Farmacia 724 è una farmacia online che unisce l’esperienza di una farmacia tradizionale con la comodità del servizio digitale. L’azienda è la piattaforma online della Farmacia Omeopatica Dabbene, una realtà consolidata con sede a Torino, ed è autorizzata dal Ministero della Salute.
                                </p>
                                <p>
                                    L’offerta di Farmacia 724 è molto vasta e include farmaci da banco, integratori, articoli di erboristeria, cosmetici e prodotti per l’infanzia, con un servizio di assistenza clienti per guidare gli utenti negli acquisti.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Obiettivi e Approccio</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    Il primo approccio è stato quello di consigliargli di mettersi su Trova Prezzi e grazie a ciò hanno iniziato ad avere del traffico nel sito e delle vendite. Successivamente, insieme ad un SEO specialist, abbiamo iniziato con l’ottimizzazione dei prodotti inserendo titoli, descrizioni e immagini dei prodotti, tutto ciò ci ha consentito in seguito di iniziare con sponsorizzate tramite Google ADS.
                                </p>
                                <p>
                                    L’obiettivo primario era validare il canale di vendita online attraverso un approccio strategico e controllato. Per fare ciò, abbiamo lanciato la piattaforma e-commerce avviando campagne sponsorizzate con un budget definito e un catalogo prodotti selezionato, con la finalità di testare l’efficacia del canale e consolidare l’affidabilità del brand agli occhi dei primi clienti.
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
                                Data l’impossibilità di ottimizzare l’intero catalogo di oltre 10.000 prodotti prima di avviare le campagne, abbiamo adottato un approccio strategico in collaborazione con lo specialista SEO.
                            </p>
                            <p>
                                Abbiamo deciso di dare priorità all’ottimizzazione dei soli prodotti destinati a essere inclusi nelle campagne Google, concentrando così gli sforzi unicamente sugli articoli necessari per le attività di marketing in corso.
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
                                        Da quando abbiamo assunto la gestione di Farmacia 724, abbiamo ottenuto una crescita dei profitti superiore al 100%, mantenendo al contempo i costi operativi a un livello contenuto.
                                    </p>
                                    <p>
                                        Questo risultato è il frutto di un’attenta strategia che ha potenziato la redditività e ottimizzato le risorse, dimostrando l’efficacia del nostro intervento. Il successo ottenuto ci ha permesso di consolidare la posizione di Farmacia 724 sul mercato, aprendo la strada a ulteriori prospettive di sviluppo e rafforzando la fiducia con il cliente.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Fai crescere la tua Farmacia Online <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Profitti</h4>
                                    <p className="text-gray-200">Crescita superiore al 100% con costi operativi contenuti.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Strategia</h4>
                                    <p className="text-gray-200">Ottimizzazione mirata del catalogo per massimizzare l'efficacia delle campagne.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Consolidamento</h4>
                                    <p className="text-gray-200">Rafforzamento della posizione di mercato e della fiducia dei clienti.</p>
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

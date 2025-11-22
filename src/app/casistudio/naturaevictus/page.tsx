import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Heart, ShoppingCart, Target, Lightbulb, CheckCircle2, BarChart3, Leaf } from "lucide-react";
import Link from "next/link";

export default function NaturaeVictusCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Wellness & Supplements</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Naturae Victus</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha accompagnato Naturae Victus in ogni fase del suo percorso digitale, dalla costruzione tecnica alla ottimizzazione strategica, trasformando l’ingresso del brand su Amazon in un progetto strutturato, performante e scalabile.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Strategia", value: "Platform-First", icon: Target },
                            { label: "Settore", value: "Integratori Naturali", icon: Leaf },
                            { label: "Risultato", value: "Lancio Scalabile", icon: BarChart3 },
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
                                    Naturae Victus è un brand italiano che si distingue nel settore degli integratori alimentari naturali. L’azienda offre una gamma di prodotti pensati per il benessere fisico e mentale, formulati utilizzando ingredienti naturali e basati su un approccio scientifico.
                                </p>
                                <p>
                                    Il target di riferimento include uomini e donne tra i 30 e i 65 anni, particolarmente attenti alla salute, alla prevenzione e a uno stile di vita equilibrato. Naturae Victus si impegna a fornire soluzioni naturali e efficaci per chi cerca di migliorare la propria qualità della vita in modo sano e consapevole.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Obiettivi e Approccio</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    L’approccio iniziale per Naturae Victus è stato progressivo e mirato alla validazione del canale. Inizialmente, si è lavorato su solide fondamenta operative, inclusi il setup dell’account, le schede prodotto e i contenuti A+, per garantire un posizionamento organico e la conformità alle policy di Amazon. Successivamente, la strategia ha puntato su una crescita controllata, utilizzando campagne sponsorizzate a basso budget per testare il comportamento del pubblico.
                                </p>
                                <p>
                                    Il primo obiettivo è stato configurare un account Seller su Amazon e lanciare i primi prodotti con contenuti ottimizzati per la ricerca e la conversione. È stato creato uno Store ufficiale coerente con l’identità del marchio e sono state generate le prime vendite organiche e sponsorizzate. L’obiettivo a medio termine era validare il canale Amazon come una leva di crescita per il brand.
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
                                La strategia per Naturae Victus è iniziata con la creazione e configurazione dell’account Seller su Amazon, seguita dalla pubblicazione di schede prodotto ottimizzate per SEO e conversione. Sono stati sviluppati contenuti grafici e testuali coerenti con l’identità del brand e attivate campagne pubblicitarie mirate per generare traffico qualificato.
                            </p>
                            <p>
                                Il tutto è stato accompagnato da un monitoraggio costante e una revisione settimanale dei dati, per ottimizzare le performance e garantire risultati duraturi.
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
                                        Tutti i prodotti sono stati pubblicati e approvati senza blocchi, con l’attivazione dello Store ufficiale del brand e le prime vendite organiche arrivate in poche settimane. Le schede prodotto hanno registrato un aumento di traffico e impression, accompagnato da feedback positivi e recensioni a 5 stelle.
                                    </p>
                                    <p>
                                        Il valore aggiunto di Mela Services è stato l’accompagnamento del brand in ogni fase, unendo competenza tecnica e ottimizzazione strategica per trasformare l’ingresso su Amazon in un progetto solido, performante e scalabile.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Lancia il tuo Brand su Amazon <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Time-to-Market</h4>
                                    <p className="text-gray-200">Lancio rapido e conforme di tutti i prodotti senza problemi di policy.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Trazione</h4>
                                    <p className="text-gray-200">Prime vendite organiche e aumento costante di traffico e impression.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Reputazione</h4>
                                    <p className="text-gray-200">Prime recensioni a 5 stelle che validano la qualità del prodotto.</p>
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

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Gem, TrendingUp, Target, Lightbulb, CheckCircle2, BarChart3, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function ValentiArgentiCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1617038224531-16d91b980c18?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Home Decor & Gifts</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Valenti Argenti</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha rivoluzionato la gestione di Valenti Argenti su Amazon, trasformandola da reattiva a proattiva e basata sui dati.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Strategia", value: "Vendor & Seller Optimization", icon: Target },
                            { label: "Risultato", value: "Recupero Chargeback", icon: ShieldAlert },
                            { label: "Settore", value: "Argenteria & Regali", icon: Gem },
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
                                    Valenti Argenti Gioiellitaly è una PMI italiana, fondata nel 1987 a Recanati (Marche), specializzata nella produzione artigianale di argenteria e articoli regalo Made in Italy.
                                </p>
                                <p>
                                    Con una sede produttiva e logistica di 10.000 mq e oltre 90 dipendenti, l’azienda offre cornici, album portafoto, articoli per bambini e complementi d’arredo in argento e materiali pregiati. Il target principale include clienti B2C per regali di cerimonie e il mercato baby premium, con una partnership decennale con The Walt Disney Company. I suoi prodotti sono distribuiti nelle migliori gioiellerie italiane ed esportati in Europa, Russia e Medio Oriente.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Analisi e Obiettivi</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    Prima dell’avvio operativo è stato condotto un audit completo per individuare criticità, margini di miglioramento e opportunità di crescita. Le principali attività di analisi hanno incluso:
                                </p>
                                <ul>
                                    <li><strong>Audit chargeback:</strong> revisione dettagliata di tutti gli addebiti ricevuti da Amazon.</li>
                                    <li><strong>Analisi marginalità per ASIN:</strong> valutazione puntuale delle performance economiche di ciascun prodotto.</li>
                                    <li><strong>Benchmark competitivo:</strong> confronto con i principali competitor di categoria.</li>
                                    <li><strong>Audit listing:</strong> gap analysis su contenuti e struttura SEO.</li>
                                    <li><strong>Data analysis storico:</strong> studio delle performance passate in termini di vendite e ACOS.</li>
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
                                Il nostro intervento si è concentrato su una serie di obiettivi chiave per ottimizzare la gestione dell’account e aumentare le performance complessive:
                            </p>
                            <ol>
                                <li><strong>Recupero crediti:</strong> Abbiamo lavorato per eliminare i chargeback illegittimi, migliorando al contempo la salute dell’account Vendor.</li>
                                <li><strong>Ottimizzazione della marginalità:</strong> L’obiettivo era massimizzare il profitto, allocando i prodotti tra Vendor e Seller in modo strategico.</li>
                                <li><strong>Miglioramento delle performance logistiche:</strong> Ci siamo concentrati sull’eliminazione delle non conformità logistiche.</li>
                                <li><strong>Crescita delle vendite scalabile:</strong> Abbiamo implementato una strategia SEO avanzata, ottimizzato i contenuti e creato campagne pubblicitarie mirate.</li>
                                <li><strong>Miglioramento delle condizioni contrattuali:</strong> Abbiamo intrapreso trattative con Amazon Vendor per rinegoziare i termini economici.</li>
                            </ol>
                            <p>
                                La strategia di Mela Services per Valenti Argenti si è articolata in tre fasi principali:
                            </p>
                            <ul>
                                <li><strong>Controllo Operativo:</strong> Gestione attiva dei chargeback, contestazione dei claim illegittimi e recupero crediti. Intervento sui fix logistici e miglioramento dell’account health.</li>
                                <li><strong>Segmentazione Strategica:</strong> Analisi approfondita delle performance per ASIN, ottimizzando l’allocazione tra i canali Vendor e Seller in base a margini, rotazione e stagionalità.</li>
                                <li><strong>Ottimizzazione:</strong> Rinegoziazione dei contratti con Amazon Vendor e ottimizzazione dell’advertising con focus sui margini.</li>
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
                                        L’agenzia ha implementato una governance strategica per ottimizzare i canali Vendor e Seller, migliorando la marginalità e le condizioni contrattuali. Ha inoltre gestito problematiche tecniche e operative, applicando ottimizzazioni SEO e creando contenuti A+ per favorire la crescita del business.
                                    </p>
                                    <p>
                                        Valenti Argenti ha recuperato marginalità e controllo, trasformando la presenza su Amazon in un asset strategico e redditizio.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Ottimizza il tuo Account Amazon <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Recupero Crediti</h4>
                                    <p className="text-gray-200">Eliminazione dei chargeback illegittimi e recupero risorse.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Marginalità</h4>
                                    <p className="text-gray-200">Ottimizzazione profitti tramite allocazione strategica Vendor/Seller.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Efficienza</h4>
                                    <p className="text-gray-200">Risoluzione problemi logistici e miglioramento account health.</p>
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

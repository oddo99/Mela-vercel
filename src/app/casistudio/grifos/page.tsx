import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, PenTool, Globe, ShoppingBag, Target, Lightbulb, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";

export default function GrifosCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Luxury & Craftsmanship</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Grifos Pens</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Per Grifos Pens, storica realtà artigianale specializzata in penne di lusso, Mela ha curato l’ingresso strategico su Amazon Handmade, valorizzando la tradizione artigianale italiana.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Canale", value: "Amazon Handmade", icon: ShoppingBag },
                            { label: "Mercati", value: "Global (EU + USA)", icon: Globe },
                            { label: "Prodotto", value: "Penne di Lusso", icon: PenTool },
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
                                    Grifos Pens è un’azienda artigianale di lusso fondata nel 2002, specializzata nella produzione di penne stilografiche e strumenti di scrittura artigianali in argento 925, oro e materiali pregiati come legni fossili, resine italiane e pelli esotiche.
                                </p>
                                <p>
                                    La sede è situata tra Champdepraz, Valle d’Aosta, e Castiglione Torinese (TO), una zona storica della tradizione italiana nella manifattura di penne. Il target principale include collezionisti di penne stilografiche di fascia alta, professionisti e il mercato regalo premium, con una clientela internazionale, principalmente in Europa e USA. Grifos si distingue per l’uso della tecnica guilloché e per la personalizzazione delle penne, realizzate a mano con materiali di altissima qualità.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Contesto e Sfide</h3>
                            <div className="prose text-gray-600">
                                <p><strong>Contesto pre-intervento:</strong> Grifos aveva una presenza consolidata su Etsy (shop PensItaly) con buone recensioni, ma la visibilità era principalmente limitata ai circuiti specializzati, come fiere e forum di collezionisti. L’azienda affrontava la necessità di un’espansione internazionale strutturata in un mercato di nicchia altamente competitivo, dominato da grandi marchi storici come Montblanc, Pelikan e Waterman.</p>
                                <p><strong>Principale difficoltà:</strong> Essere una piccola realtà artigianale in un mercato dominato da brand internazionali rappresentava una sfida. Tuttavia, la capacità di Grifos di personalizzare anche per piccole serie apriva un’opportunità in un segmento non curato dalle grandi marche. La difficoltà principale era far conoscere il valore artigianale e la qualità delle penne a un pubblico più ampio.</p>
                                <p><strong>Percezione brand prima del progetto:</strong> Il brand era ben conosciuto nella nicchia dei collezionisti e appassionati, con un rating Trustpilot di 4.1/5, ma la sua visibilità oltre la nicchia era limitata.</p>
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
                                Il progetto per Grifos Pens puntava a rafforzare la visibilità e il posizionamento del brand come riferimento per le penne artigianali di lusso, migliorando la presenza organica su Amazon e Google ed espandendosi sui mercati internazionali.
                            </p>
                            <p>
                                Per il successo del nostro cliente, abbiamo sviluppato un approccio integrato e multidimensionale:
                            </p>
                            <ul>
                                <li>
                                    <strong>1. Diversificazione dei canali di vendita:</strong> Abbiamo facilitato l’ingresso strategico nel marketplace Amazon Handmade, valorizzando l’unicità dei prodotti artigianali con una protezione dedicata. Abbiamo inoltre ottimizzato i listing con una SEO mirata e A+ Content, per raccontare la storia artigianale e differenziare il brand.
                                </li>
                                <li>
                                    <strong>2. Espansione geografica:</strong> L’espansione su nuovi mercati europei è stata supportata dall’implementazione di un sito multilingua (IT/EN) e campagne ADV localizzate per ogni paese, per raggiungere il pubblico giusto nei contesti locali.
                                </li>
                                <li>
                                    <strong>3. Performance Marketing:</strong> Abbiamo attivato campagne pubblicitarie su Meta (Facebook/Instagram) con focus sulla conversione, mentre su Google Ads abbiamo concentrato gli sforzi su vendite dirette, per generare un traffico qualificato e aumentare le vendite.
                                </li>
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
                                        L’intervento ha previsto l’espansione sui marketplace europei e l’attivazione di campagne digitali multicanale (Meta e Google Ads), con l’obiettivo di rafforzare la presenza internazionale e posizionare Grifos tra i riferimenti dell’artigianato di alta gamma.
                                    </p>
                                    <p>
                                        Grazie a questo approccio, Grifos Pens ha ampliato significativamente la visibilità e le vendite del brand in nuovi mercati, rafforzando la sua presenza digitale e la sua identità artigianale.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Porta il tuo Artigianato nel Mondo <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Amazon Handmade</h4>
                                    <p className="text-gray-200">Ingresso strategico e posizionamento premium nella categoria artigianale.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Multicanalità</h4>
                                    <p className="text-gray-200">Sinergia tra Amazon, sito proprietario e campagne Meta/Google.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Internazionalizzazione</h4>
                                    <p className="text-gray-200">Espansione strutturata verso i mercati esteri (Europa e USA).</p>
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

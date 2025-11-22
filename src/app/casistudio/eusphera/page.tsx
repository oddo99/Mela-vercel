import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Globe, ShieldCheck, Target, Lightbulb, CheckCircle2, BarChart3, Leaf } from "lucide-react";
import Link from "next/link";

export default function EuspheraCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1615485290382-441e4d04fcad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Nutraceutica & CBD</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Eusphera</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha guidato Eusphera in un percorso di espansione europea complesso, gestendo in modo integrato compliance, localizzazione, user experience di catalogo, contenuti educativi e governance dei canali.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Focus", value: "Compliance & Local", icon: ShieldCheck },
                            { label: "Mercati", value: "IT, ES, DE, FR, BE", icon: Globe },
                            { label: "Settore", value: "CBD & Nutraceutica", icon: Leaf },
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
                                    Eusphera è un brand europeo nel settore della nutraceutica e cosmeceutica, specializzato in una linea di oli CBD, integratori, creme e prodotti per animali. Il posizionamento del brand si basa sul concetto di “nature ispira, ricerca guida”, con prodotti testati in laboratorio, vegan e senza THC.
                                </p>
                                <p>
                                    Il target principale è composto da adulti interessati a migliorare sonno, recupero, equilibrio/stress e skincare, con una seconda coda di riferimento nel settore pet. Eusphera è una PMI con un shop proprietario per la vendita diretta.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Obiettivi e Sfide</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    Eusphera si è trovata a operare in un mercato altamente competitivo e regolamentato, con una forte concorrenza nella categoria CBD e una sensibilità normativa elevata. L’obiettivo era affrontare la sfida di una comunicazione conforme alle normative locali e la localizzazione dell’offerta per i diversi mercati europei.
                                </p>
                                <p>
                                    Gli obiettivi di Eusphera erano l’espansione europea diretta con la localizzazione dello shop e dell’offerta, l’incremento delle vendite cross-border e il rafforzamento del posizionamento del brand sui principali benefici e usi dei prodotti come sonno, recupero e calma. Inoltre, la strategia puntava a ridurre i rischi di non conformità e blocchi di canale.
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
                                Le analisi preliminari hanno incluso un audit del sito, l’analisi della compliance per paese, un benchmark di pricing e assortimento, la revisione della reputazione online (Trustpilot) e un’analisi delle keyword e policy pubblicitarie per il CBD nei vari mercati.
                            </p>
                            <p>
                                L’approccio strategico di Eusphera è stato “Compliance-first, local-first”, focalizzandosi su fondamentali regolatori e contenutistici per scalare paese per paese. La strategia ha incluso la localizzazione del funnel (lingua, valute, pagamenti, spedizioni), una tassonomia allineata alle ricerche locali e contenuti educativi conformi alle normative.
                            </p>
                            <p>
                                Sono stati realizzati test creativi low-risk e una roadmap di rollout che ha iniziato con l’Italia e si è estesa a Spagna, Germania, Francia e Belgio.
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
                                        Grazie all’approccio strategico adottato, Eusphera ha ottenuto risultati concreti significativi: l’attivazione delle vendite su più paesi UE attraverso il dominio proprietario, con il selettore paese ora attivo. È stata migliorata la chiarezza del posizionamento dei benefici e degli usi dei prodotti, con contenuti e claim uniformati in tutte le lingue.
                                    </p>
                                    <p>
                                        Inoltre, la reputazione del brand è stata consolidata grazie alla gestione attenta delle recensioni e del customer care. Il valore aggiunto dell’agenzia è stato fondamentale nel guidare l’espansione europea, supportando Eusphera nell’abilitazione al mercato europeo specifico per il CBD.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Espandi il tuo Business in Europa <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Espansione UE</h4>
                                    <p className="text-gray-200">Attivazione vendite in IT, ES, DE, FR, BE con compliance totale.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Posizionamento</h4>
                                    <p className="text-gray-200">Chiarezza sui benefici dei prodotti e uniformità dei claim in tutte le lingue.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Reputazione</h4>
                                    <p className="text-gray-200">Consolidamento della fiducia grazie a recensioni e customer care gestiti.</p>
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

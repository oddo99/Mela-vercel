import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, CheckCircle2, BarChart3, Globe, ShoppingCart, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

export default function Life120CaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <span className="mb-4 inline-block rounded-full bg-[#FFD700]/20 px-4 py-1.5 text-sm font-bold text-[#FFD700]">
                        CASE STUDY: E-COMMERCE & MARKETPLACE
                    </span>
                    <h1 className="mb-6 text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
                        LIFE 120
                    </h1>
                    <p className="mx-auto mb-10 max-w-3xl text-xl font-light text-gray-300 md:text-2xl">
                        Trasformare Amazon in un canale strategico e scalare sui mercati internazionali.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="https://life-120.com/it" target="_blank">
                            <Button size="lg" className="rounded-full bg-[#FFD700] text-[#0B223A] hover:bg-[#FFC700]">
                                Visita il Sito <Globe className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Stats Section */}
            <Section className="bg-[#0B223A] border-t border-white/10 py-12">
                <div className="container">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {[
                            { label: "Fatturato Annuo", value: "8M+", icon: BarChart3 },
                            { label: "Mercati", value: "IT, DE", icon: Globe },
                            { label: "Canali", value: "Amazon, eBay, Site", icon: ShoppingCart },
                            { label: "Target", value: "35-65 Anni", icon: Users },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="mb-4 flex justify-center text-[#FFD700]">
                                    <stat.icon className="h-8 w-8" />
                                </div>
                                <div className="text-3xl font-black text-white md:text-4xl">{stat.value}</div>
                                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* About Client Section */}
            <Section className="bg-white py-24">
                <div className="container">
                    <div className="grid gap-16 lg:grid-cols-2 items-start">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-[#0B223A] md:text-4xl">Chi è Life 120</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Life 120 è un’azienda italiana specializzata nella produzione e vendita di integratori alimentari e prodotti per il benessere, con un forte impegno verso l’alimentazione sana, la prevenzione e uno stile di vita salutistico.
                                </p>
                                <p>
                                    Fondata a Roma, si distingue per l’offerta di una linea di integratori ad alto dosaggio, basati su ricerca scientifica e qualità <strong>Made in Italy</strong>. L'azienda è strutturata in due entità principali: <em>Life 120 Italia S.r.l.</em> (vendita al dettaglio) e <em>Lo Spaccio Life 120</em> (vendita all’ingrosso).
                                </p>
                                <p>
                                    Un valore aggiunto unico è il <strong>coaching nutrizionale gratuito</strong> e personalizzato, offerto per supportare i clienti nel loro percorso di benessere.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="mb-6 text-xl font-bold text-[#0B223A]">Obiettivi del Progetto</h3>
                            <ul className="space-y-4">
                                {[
                                    "Aumentare le vendite e consolidare la presenza su Amazon.",
                                    "Garantire compliance totale con le normative per integratori.",
                                    "Proteggere il brand da venditori non autorizzati.",
                                    "Espandere i canali includendo nuovi marketplace (eBay).",
                                    "Internazionalizzare il brand (focus Germania).",
                                    "Creare un ecosistema digitale proprietario (Sito Web + Automation)."
                                ].map((goal, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#FFD700] mt-1" />
                                        <span className="text-gray-700">{goal}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Analysis Phase */}
            <Section className="bg-gray-50 py-24">
                <div className="container">
                    <h2 className="mb-12 text-center text-3xl font-bold text-[#0B223A] md:text-4xl">Analisi Preliminare</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className="p-8 bg-white">
                            <h3 className="mb-4 text-xl font-bold text-[#0B223A] flex items-center gap-3">
                                <Users className="h-6 w-6 text-[#FFD700]" /> Analisi Competitor
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Studio approfondito dei principali competitor nel settore integratori su Amazon, con focus su:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                                <li>Strategie di pricing e posizionamento.</li>
                                <li>Best practices di mercato.</li>
                                <li>Identificazione delle tendenze vincenti dei leader.</li>
                            </ul>
                        </Card>
                        <Card className="p-8 bg-white">
                            <h3 className="mb-4 text-xl font-bold text-[#0B223A] flex items-center gap-3">
                                <BarChart3 className="h-6 w-6 text-[#FFD700]" /> Analisi Keyword
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Ricerca delle keyword organiche e sponsorizzate più rilevanti per identificare opportunità:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                                <li>Analisi volumi di ricerca nel settore integratori.</li>
                                <li>Valutazione della competitività per SEO e Advertising.</li>
                                <li>Strategia di posizionamento mirata.</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Strategy Pillars */}
            <Section className="py-24">
                <div className="container">
                    <div className="mb-16 text-center">
                        <h2 className="mb-6 text-4xl font-bold text-[#0B223A]">Strategia Amazon & Marketplace</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            Un approccio integrato basato su quattro pilastri fondamentali per trasformare il canale di vendita.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-4">
                        {[
                            {
                                title: "Compliance",
                                desc: "Conformità normativa rigorosa per proteggere l'account e garantire crescita sostenibile.",
                                icon: ShieldCheck
                            },
                            {
                                title: "Ottimizzazione",
                                desc: "A/B testing continuo su schede prodotto e keyword per massimizzare il ROI.",
                                icon: BarChart3
                            },
                            {
                                title: "Fidelizzazione",
                                desc: "Programma 'Iscriviti e Risparmia' per aumentare il Customer Lifetime Value.",
                                icon: Users
                            },
                            {
                                title: "Protezione Brand",
                                desc: "Difesa attiva contro contraffazioni e venditori non autorizzati.",
                                icon: ShieldCheck
                            }
                        ].map((sol, i) => (
                            <Card key={i} className="p-6 hover:shadow-xl transition-shadow bg-white border-t-4 border-[#FFD700]">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0B223A]/5 text-[#0B223A]">
                                    <sol.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-[#0B223A]">{sol.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{sol.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Digital Ecosystem Expansion */}
            <Section className="bg-[#0B223A] py-24 text-white">
                <div className="container">
                    <h2 className="mb-16 text-center text-4xl font-bold">Ecosistema Digitale & Internazionalizzazione</h2>
                    <div className="grid gap-12 lg:grid-cols-3">
                        <div className="space-y-6">
                            <div className="h-12 w-12 rounded-xl bg-[#FFD700] flex items-center justify-center text-[#0B223A]">
                                <Globe className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Nuovo Sito Web Corporate</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Sviluppo da zero di un sito web internazionale (Italiano e Tedesco) con interfaccia intuitiva, progettato per nutrire l'espansione in nuovi mercati europei.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="h-12 w-12 rounded-xl bg-[#FFD700] flex items-center justify-center text-[#0B223A]">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Marketing Automation</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Implementazione di flussi email personalizzati per guidare i lead nel funnel di vendita, inviando messaggi pertinenti basati sul comportamento utente.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="h-12 w-12 rounded-xl bg-[#FFD700] flex items-center justify-center text-[#0B223A]">
                                <BarChart3 className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Content & Social Strategy</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Lancio canale YouTube con contenuti localizzati in tedesco. Piano editoriale social e campagne a pagamento per brand awareness e lead generation.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Results Summary */}
            <Section className="bg-white py-24">
                <div className="container text-center">
                    <h2 className="mb-12 text-4xl font-bold text-[#0B223A]">Impatto del Progetto</h2>
                    <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-2 text-left">
                        <div className="p-6 bg-gray-50 rounded-2xl">
                            <h4 className="font-bold text-xl text-[#0B223A] mb-2">Trasformazione Strategica</h4>
                            <p className="text-gray-600">Amazon trasformato da canale poco strutturato a leva strategica di crescita con margini ottimizzati.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl">
                            <h4 className="font-bold text-xl text-[#0B223A] mb-2">Scalabilità Operativa</h4>
                            <p className="text-gray-600">Operazioni rese scalabili grazie a processi di compliance e logistica ottimizzati.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl">
                            <h4 className="font-bold text-xl text-[#0B223A] mb-2">Espansione Geografica</h4>
                            <p className="text-gray-600">Ingresso di successo nel mercato tedesco e diversificazione su nuovi marketplace come eBay.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl">
                            <h4 className="font-bold text-xl text-[#0B223A] mb-2">Asset Proprietari</h4>
                            <p className="text-gray-600">Creazione di un forte ecosistema proprietario (Sito + Database Clienti) per ridurre la dipendenza dai marketplace.</p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <Link href="/contatti">
                            <Button size="lg" className="h-16 rounded-full bg-[#0B223A] px-10 text-xl font-bold text-white hover:bg-[#1a3a5a] hover:scale-105 transition-transform">
                                Discuti il tuo Caso Studio
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
            <Footer />
        </div>
    );
}

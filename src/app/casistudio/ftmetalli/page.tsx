import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Hammer, ShoppingCart, Target, Lightbulb, CheckCircle2, BarChart3, Globe } from "lucide-react";
import Link from "next/link";

export default function FTMetalliCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1535123817223-c111799512c2?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Edilizia & Fai da te</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">FT Metalli</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha sviluppato per FT Metalli un’strategia su misura che ha ottimizzato ogni aspetto della presenza online, portando il brand a raggiungere risultati di vendita e visibilità senza precedenti.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Canali", value: "Amazon, eBay, Sito", icon: Globe },
                            { label: "Strategia", value: "Multichannel", icon: Target },
                            { label: "Risultato", value: "Crescita Vendite", icon: BarChart3 },
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
                                    FT Metalli è un’azienda italiana specializzata nella produzione e vendita di materiali per l’edilizia, con un focus su lamiera grecatata e dissuasori per piccioni. Si rivolge principalmente a privati, artigiani e professionisti del settore che cercano prodotti resistenti e di alta qualità per costruzioni e ristrutturazioni.
                                </p>
                                <p>
                                    Grazie alla vendita online, in particolare su Amazon, l’azienda ha consolidato la propria posizione come punto di riferimento per soluzioni durevoli e affidabili nel settore edilizio.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Obiettivi e Sfide</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    L’obiettivo principale di FT Metalli è stato quello di aumentare la visibilità online e potenziare le vendite sui canali Amazon, eBay e sito web aziendale. Per farlo, l’azienda ha lavorato sul miglioramento del catalogo prodotti, ottimizzando le schede con descrizioni più complete e immagini di qualità, e sull’espansione in nuovi canali tramite campagne pubblicitarie mirate.
                                </p>
                                <p>
                                    Un ulteriore focus è stato posto sull’incremento delle recensioni positive per rafforzare la reputazione online e sull’aumento delle vendite attraverso una strategia multicanale integrata ed efficace.
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
                                Il primo passo è stato definire un catalogo efficace per il mercato B2C, selezionando insieme i prodotti più strategici per la vendita online. Parallelamente è stata gestita l’apertura e configurazione completa dell’account Amazon, includendo impostazioni iniziali, politiche di spedizione e procedure operative.
                            </p>
                            <p>
                                Questa fase ha permesso di costruire basi solide, strutturare il catalogo in modo efficiente e impostare un processo di pubblicazione coerente con gli standard degli e-commerce moderni.
                            </p>
                            <p>
                                FT Metalli ha migliorato la sua presenza su Amazon e eBay ottimizzando schede prodotto, utilizzando campagne pubblicitarie e strategie di pricing competitive. Per il sito web, l’azienda ha puntato sull’ottimizzazione SEO e sull’introduzione di funzionalità avanzate. La strategia di branding ha incluso il miglioramento del catalogo prodotti con immagini professionali e descrizioni mirate, e un focus su SEO e contenuti coinvolgenti per aumentare la visibilità del brand.
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
                                        La strategia di Mela ha portato a un significativo aumento delle vendite su Amazon ed eBay, con una crescente visibilità per i prodotti di punta, come la lamiera grecatata e i dissuasori per piccioni, che hanno generato un flusso costante di nuovi clienti grazie alle recensioni positive.
                                    </p>
                                    <p>
                                        Le vendite su Amazon si sono mosse in modo organico, mentre su eBay l’ottimizzazione delle inserzioni ha avuto un impatto positivo. L’ottimizzazione del sito web ha aumentato il traffico e le conversioni, consolidando il sito come punto centrale per tutte le vendite online. L’approccio personalizzato e l’ottimizzazione continua delle strategie hanno permesso di espandere la portata su più canali e ottenere risultati concreti nel lungo periodo.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Espandi il tuo Business <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Multicanalità</h4>
                                    <p className="text-gray-200">Gestione integrata di Amazon, eBay e sito web per massimizzare la portata.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Visibilità</h4>
                                    <p className="text-gray-200">Posizionamento forte per prodotti di nicchia come lamiere e dissuasori.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Crescita</h4>
                                    <p className="text-gray-200">Aumento costante di vendite, traffico e recensioni positive.</p>
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

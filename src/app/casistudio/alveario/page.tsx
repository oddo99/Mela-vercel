import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Hexagon, Globe, ShoppingCart, Target, Lightbulb, CheckCircle2, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function AlvearioCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Natural Supplements</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Alveario</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha supportato Alveario nello sviluppo di una strategia mirata all’ottimizzazione della presenza su Amazon, concentrandosi su analisi dei dati, ottimizzazione dei contenuti e miglioramento della visibilità organica.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Prodotto", value: "Propoli Naturale", icon: Hexagon },
                            { label: "Strategia", value: "Brand Awareness", icon: Target },
                            { label: "Risultato", value: "Fidelizzazione", icon: BarChart3 },
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
                                    Alveario è un marchio italiano specializzato nella produzione e vendita di prodotti a base di propoli, focalizzandosi sulla salute e il benessere umano grazie ai benefici delle api. Il target di riferimento comprende principalmente consumatori interessati alla salute naturale e integratori, con particolare attenzione agli utenti che già conoscono o acquistano la propoli.
                                </p>
                                <p>
                                    Alveario punta a diventare il punto di riferimento per la propoli in Italia e a espandersi in Europa, con una forte attenzione alla qualità e trasparenza dei suoi prodotti.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Contesto e Sfide</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    Prima dell’intervento di Mela, Alveario non vendeva su Amazon e il sito e-commerce non generava traffico o vendite consistenti. L’azienda non aveva una pianificazione strategica per il marketing online e non sfruttava appieno il potenziale delle piattaforme digitali.
                                </p>
                                <p>
                                    Gli obiettivi principali erano: aumentare le vendite su Amazon, costruire una solida brand awareness per diventare leader di mercato nella propoli in Italia, e espandere la presenza online in Europa, con un focus iniziale sulla Germania. Un altro obiettivo chiave era fidelizzare i clienti e promuovere la consapevolezza del brand, evidenziando i benefici della propoli.
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
                                L’approccio strategico scelto si è focalizzato su Amazon come canale principale di vendita, puntando a costruire una forte brand awareness attraverso una comunicazione chiara e trasparente. È stato implementato un piano per ottimizzare la presenza su Amazon e promuovere i benefici della propoli, con un focus su contenuti educativi e storytelling che raccontano i valori del brand.
                            </p>
                            <p>
                                La strategia è stata suddivisa in più pillar: l’aumento della brand awareness tramite visibilità su Amazon, l’educazione del consumatore sui benefici della propoli, l’ottimizzazione delle parole chiave per incrementare il traffico, l’espansione in nuovi mercati, con l’ingresso previsto in Germania, e la fidelizzazione dei clienti attraverso modelli di abbonamento per incentivare gli acquisti ripetuti.
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
                                        Grazie all’approccio strategico di Mela, l’azienda ha visto un aumento delle vendite su Amazon, con maggiore traffico e conversioni. La brand awareness è cresciuta grazie a un miglior posizionamento delle parole chiave relative alla propoli.
                                    </p>
                                    <p>
                                        Inoltre, si è registrato un incremento delle iscrizioni a modelli di abbonamento e acquisti ripetuti, con un miglioramento significativo rispetto al periodo precedente. L’ottimizzazione della presenza su Amazon e l’approccio basato sui dati sono stati cruciali per il successo.
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
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Brand Awareness</h4>
                                    <p className="text-gray-200">Crescita della visibilità e posizionamento come leader nella propoli.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Fidelizzazione</h4>
                                    <p className="text-gray-200">Aumento abbonamenti e acquisti ripetuti.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Espansione</h4>
                                    <p className="text-gray-200">Basi solide per l'ingresso nel mercato tedesco.</p>
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

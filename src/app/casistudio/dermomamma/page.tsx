import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Heart, Globe, ShoppingCart, Target, Lightbulb, CheckCircle2, Video } from "lucide-react";
import Link from "next/link";

export default function DermomammaCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Beauty & Skincare</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Dermomamma</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha aiutato Dermomamma a crescere in modo sostenibile e organico, migliorando la visibilità del brand senza ricorrere a pubblicità costose.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Strategia", value: "Organic Growth", icon: Target },
                            { label: "Mercati", value: "IT, ES, DE", icon: Globe },
                            { label: "Canale", value: "Amazon + TikTok", icon: Video },
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
                                    Dermomamma è un brand specializzato nella cura della pelle, con una proposta di prodotti pensati per garantire protezione e benessere. La sua offerta si rivolge principalmente a mamme, donne in gravidanza e a tutte le persone alla ricerca di soluzioni delicate, naturali e sicure per la cura della pelle.
                                </p>
                                <p>
                                    Con una forte attenzione alla qualità e alla sicurezza degli ingredienti, Dermomamma si distingue per l’impegno nell’offrire prodotti che rispettano le esigenze di chi cerca trattamenti efficaci e gentili.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Obiettivi e Sfide</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    L’obiettivo principale è stato aumentare le vendite e posizionarsi ai vertici dei risultati di ricerca su Amazon, puntando ad un posizionamento organico solido per coprire la nicchia di mercato della cura della pelle.
                                </p>
                                <p>
                                    Inoltre, uno degli obiettivi a lungo termine è l’espansione nei mercati esteri, con l’intento di ampliare la presenza internazionale del brand.
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
                                Per avviare il progetto, sono state effettuate analisi preliminari approfondite, tra cui audit sui listing dei prodotti su Amazon, un’analisi dei competitor nel settore della cura della pelle e la valutazione delle metriche di vendita precedenti. Inoltre, è stato realizzato un benchmark per individuare le migliori pratiche da adottare per migliorare la visibilità e la posizione nei risultati di ricerca.
                            </p>
                            <p>
                                L’approccio strategico scelto ha puntato su un’ottimizzazione avanzata dei listing, l’uso mirato delle parole chiave e una gestione oculata delle recensioni. L’obiettivo principale era il miglioramento del posizionamento organico, evitando di ricorrere per forza alla pubblicità a pagamento per ottenere visibilità.
                            </p>
                            <p>
                                La strategia adottata ha previsto un miglioramento dei listing su Amazon, con un’ottimizzazione mirata delle parole chiave, l’incremento delle recensioni e un continuo monitoraggio delle performance per garantire risultati duraturi. Parallelamente, è stata avviata un’espansione su Amazon in altri mercati internazionali, come Spagna e Germania, con la preparazione di contenuti e strategie specifiche per ciascun mercato locale.
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
                                        Il cliente ha registrato un aumento significativo delle vendite in Italia, accompagnato da un miglioramento del posizionamento organico su Amazon, senza dover ricorrere alla pubblicità a pagamento. I risultati nei mercati esteri, come Spagna e Germania, sono stati altrettanto promettenti, con l’avvio delle vendite in organico.
                                    </p>
                                    <p>
                                        Il valore aggiunto dell’agenzia è stato quello di ottimizzare la visibilità del brand in modo sostenibile e organico, consentendo al cliente di crescere senza dipendere da costosi investimenti pubblicitari. L’espansione internazionale e l’avvio del progetto su TikTok Shop rappresentano ulteriori passi strategici verso la crescita globale del brand.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Cresci Organicamente su Amazon <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Crescita Organica</h4>
                                    <p className="text-gray-200">Aumento vendite e posizionamento senza dipendenza da ADS.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Internazionalizzazione</h4>
                                    <p className="text-gray-200">Avvio vendite in Spagna e Germania con strategie localizzate.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Innovazione</h4>
                                    <p className="text-gray-200">Espansione su nuovi canali come TikTok Shop.</p>
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

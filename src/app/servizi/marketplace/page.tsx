import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { BarChart3, Settings, FileText, Image as ImageIcon, Rocket } from "lucide-react";

export default function MarketplacePage() {
    const steps = [
        {
            icon: BarChart3,
            title: "Pianificazione e analisi costi ricavi",
            description:
                "Se hai in mente di iniziare o portare il tuo business online, è importante conoscere nel dettaglio i costi che bisogna affrontare. Il servizio comprende una pianificazione attenta del primo anno di vendita grazie a un sales forecast che analizza diversi scenari di vendita e un’analisi costi e ricavi dettagliata.",
        },
        {
            icon: Settings,
            title: "Impostazione account",
            description:
                "Per qualsiasi attività di e-commerce la corretta gestione del proprio inventario è decisiva per incrementare vendite e profitti. Il nostro servizio fornisce un account venditore, un catalogo di tutti i tuoi prodotti nella categoria più performante e un piano dedicato per la spedizione e la logistica.",
        },
        {
            icon: FileText,
            title: "Ottimizzazione testi",
            description:
                "Per far capire al tuo potenziale cliente che ciò di cui ha davvero bisogno si trova esattamente all’interno della tua scheda prodotto è necessario ottimizzare il testo rendendolo accattivante e coerente in ogni sua parte. Attraverso il nostro servizio di scrittura testi persuasivi e una strategia SEO efficace, siamo in grado di far emergere i tuoi prodotti rispetto a quelli dei tuoi competitor.",
        },
        {
            icon: ImageIcon,
            title: "Foto prodotto",
            description:
                "Le immagini che rappresentano il prodotto devono essere ottimizzate per non incidere negativamente sulle vendite. All’interno dei risultati di ricerca la foto principale rappresenta il primo contatto tra il tuo potenziale cliente e il prodotto che offri. Nella maggior parte dei casi questa è l’unica chance che è concessa al prodotto, persa quella il cliente passerà oltre.",
        },
        {
            icon: Rocket,
            title: "Gestione lancio",
            description:
                "Una volta che le vetrine sono on line, è necessario prevedere più strategie per lanciare i prodotti nei diversi Paesi e soprattutto incrementare le vendite con campagne social mirate. La massima efficacia si ottiene con un preciso bilanciamento tra prodotto e Brand.",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                {/* Hero Section */}
                <Section className="relative overflow-hidden bg-gray-50 py-20 lg:py-32">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />
                    <div className="container relative z-10">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                                <span className="gradient-text">Marketplace</span>
                            </h1>
                            <p className="mb-8 text-xl text-gray-600">
                                Partendo dalle nostre consulenze marketplace vi forniamo tutto ciò che serve per arrivare al successo.
                            </p>
                            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
                                Richiedi una consulenza
                            </Button>
                        </div>
                    </div>
                </Section>

                {/* Detailed Steps Section */}
                <Section className="bg-white">
                    <div className="container">
                        <div className="grid gap-12 lg:grid-cols-1">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col gap-8 lg:items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                        }`}
                                >
                                    <div className="flex-1">
                                        <div className="glass-card flex h-full flex-col justify-center rounded-3xl border border-gray-100 p-8 shadow-xl shadow-gray-200/50 transition-all hover:shadow-2xl hover:shadow-primary/10 lg:p-12">
                                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                                                <step.icon className="h-8 w-8" />
                                            </div>
                                            <h3 className="mb-4 text-2xl font-bold text-gray-900">{step.title}</h3>
                                            <p className="text-lg leading-relaxed text-gray-600">{step.description}</p>
                                        </div>
                                    </div>
                                    {/* Decorative / Visual element for the other side */}
                                    <div className="hidden flex-1 lg:block">
                                        <div className="relative aspect-video overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 p-8">
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                                <step.icon className="h-32 w-32 opacity-20" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* CTA Section */}
                <Section className="bg-gray-900 text-white">
                    <div className="container text-center">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Pronto a scalare il tuo business?</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
                            Contattaci oggi stesso per una strategia marketplace su misura.
                        </p>
                        <Button size="lg" variant="primary" className="bg-white text-gray-900 hover:bg-gray-100">
                            Parla con un esperto
                        </Button>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}

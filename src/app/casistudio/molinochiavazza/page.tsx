import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Wheat, ShoppingBag, Target, Lightbulb, CheckCircle2, BarChart3, Utensils } from "lucide-react";
import Link from "next/link";

export default function MolinoChiavazzaCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Food & Beverage</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Molino Chiavazza</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha supportato Molino F.lli Chiavazza con un approccio operativo e strategico, curando il setup della piattaforma e il caricamento del catalogo in modo strutturato per garantire una base digitale solida e performante.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Settore", value: "Farine & Food", icon: Wheat },
                            { label: "Strategia", value: "Platform + Ads", icon: Target },
                            { label: "Obiettivo", value: "ROAS & Conversion", icon: BarChart3 },
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
                                    Molino F.lli Chiavazza, attiva dal 1955, è un’azienda italiana specializzata nella macinazione e confezionamento di farine e semole. I suoi prodotti sono destinati sia al consumo domestico che a professionisti come panettieri e pizzaioli, e sono presenti nel canale senza glutine e nel settore del benessere. Molino Chiavazza serve anche la grande distribuzione (GDO), offrendo prodotti di alta qualità a una vasta clientela.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Obiettivi e Sfide</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    Abbiamo adottato un approccio “platform-first + campaign optimization”, iniziando con la strutturazione solida della piattaforma: un catalogo completo, asset di qualità, descrizioni e localizzazione corrette. Solo dopo aver ottimizzato questi elementi, abbiamo attivato campagne pubblicitarie digitali, monitorando e ottimizzando budget, target e creativi per massimizzare il ROAS. Questo perché una piattaforma ben strutturata è essenziale per trasformare il traffico generato dalle campagne in conversioni efficaci.
                                </p>
                                <p>
                                    L’obiettivo principale è stato ampliare il canale digitale attraverso l’inserimento sulla piattaforma, sia tramite marketplace che e-commerce. Successivamente, sono state avviate campagne pubblicitarie per generare traffico qualificato, conversioni e vendite, mentre si è lavorato per rafforzare il brand online, sfruttando la tradizione per attrarre nuovi clienti digitali. Infine, è stata ottimizzata la resa economica delle campagne pubblicitarie, mirando a ROI e ROAS per scalare le vendite online.
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
                                La strategia è iniziata con il caricamento e l’ottimizzazione del catalogo, assicurando che i prodotti fossero fotografati, descritti e categorizzati correttamente. I prodotti sono stati segmentati in linee come “senza glutine”, “professionale” e “Horeca”, per creare campagne pubblicitarie dedicate a ciascun segmento.
                            </p>
                            <p>
                                Sono state definite audience specifiche, con creatività in linea con il brand, focalizzandosi su qualità e tradizione, e le performance delle campagne sono state continuamente monitorate e ottimizzate. La reportistica periodica ha permesso di perfezionare costantemente budget, target e creatività per migliorare l’efficacia delle campagne.
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
                                        Il catalogo prodotti è stato ottimizzato e attivato sulla piattaforma, con campagne adv segmentate che hanno migliorato la presenza digitale nella categoria farine/food. Le performance adv sono migliorate, con un aumento del ROAS e delle conversioni.
                                    </p>
                                    <p>
                                        Grazie a una gestione esperta, le campagne sono state efficaci anche in un settore con margini stretti, con un approccio strategico orientato al risultato e alla conversione. L’intervento ha permesso a un brand storico della molitura italiana di valorizzare la propria presenza online in modo moderno e competitivo.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Digitalizza la tua Azienda <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">ROAS</h4>
                                    <p className="text-gray-200">Ottimizzazione del ritorno sull'investimento pubblicitario e delle conversioni.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Presenza</h4>
                                    <p className="text-gray-200">Posizionamento forte nella categoria Food/Farine con un catalogo ben strutturato.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Efficienza</h4>
                                    <p className="text-gray-200">Gestione profittevole delle campagne anche con margini ridotti.</p>
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

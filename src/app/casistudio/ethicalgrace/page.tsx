import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Leaf, Globe, ShoppingCart, Target, Lightbulb, CheckCircle2, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function EthicalGraceCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Beauty & Sustainability</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Ethical Grace</h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-300 md:text-2xl">
                        Metodologia Go-to-Amazon completa: dal setup tecnico allo scaling internazionale.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Strategia", value: "Land & Learn", icon: Target },
                            { label: "Settore", value: "Cosmetica Solida", icon: Leaf },
                            { label: "Mercati", value: "IT, DACH, UE", icon: Globe },
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

            {/* Client & Challenge */}
            <Section className="bg-white py-20">
                <div className="container">
                    <div className="grid gap-16 lg:grid-cols-2 items-center">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-[#0B223A] md:text-4xl">Il Cliente</h2>
                            <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                                Ethical Grace è un brand artigianale di Torino specializzato in fitocosmesi naturale e solida.
                                Produce a mano cosmetici vegan, plastic-free e sostenibili, rivolgendosi a un pubblico eco-consapevole.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Cosmetica Solida", "Vegan", "Plastic Free", "Made in Italy"].map((tag, i) => (
                                    <span key={i} className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">La Sfida</h3>
                            <ul className="space-y-4">
                                {[
                                    "Lanciare il brand su Amazon partendo da zero (Go-to-Market).",
                                    "Differenziarsi in un mercato competitivo come quello della cosmetica naturale.",
                                    "Validare i prodotti (SKU) più performanti per scalare le vendite.",
                                    "Costruire brand awareness e fiducia (recensioni) su un nuovo canale."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                                            <Target className="h-4 w-4" />
                                        </div>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Strategy */}
            <Section className="bg-gray-50 py-20">
                <div className="container">
                    <div className="mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-[#0B223A] md:text-4xl">La Nostra Strategia</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            Approccio "Land & Learn": testare, imparare e scalare.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "Set-Up & Compliance",
                                desc: "Ottimizzazione catalogo, creazione Store e contenuti SEO. Verifica compliance normativa UE per cosmetici.",
                                icon: CheckCircle2
                            },
                            {
                                title: "Land & Learn",
                                desc: "Lancio focalizzato su 10-15 SKU ad alto potenziale. Utilizzo di Vine Program per le prime recensioni e coupon per il lancio.",
                                icon: Target
                            },
                            {
                                title: "Scaling & Ads",
                                desc: "Ampliamento keyword, campagne sponsorizzate aggressive sui best-seller e test di bundle stagionali.",
                                icon: BarChart3
                            }
                        ].map((item, i) => (
                            <Card key={i} className="p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B223A]/5 text-[#0B223A]">
                                    <item.icon className="h-7 w-7" />
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-[#0B223A]">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </Card>
                        ))}
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
                                <p className="mb-8 text-lg text-gray-300">
                                    Ethical Grace ha validato con successo il canale Amazon, acquisendo nuovi clienti e posizionandosi su keyword strategiche non presidiate dal sito proprietario.
                                </p>
                                <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                    <Link href="/contatti" className="flex items-center">
                                        Lancia il tuo Brand su Amazon <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Visibilità</h4>
                                    <p className="text-gray-200">Posizionamento organico su keyword competitive come "shampoo solido".</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Fiducia</h4>
                                    <p className="text-gray-200">Acquisizione rapida di recensioni verificate grazie al programma Vine.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Conversione</h4>
                                    <p className="text-gray-200">CVR elevata grazie alla selezione data-driven dei prodotti.</p>
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

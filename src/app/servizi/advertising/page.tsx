import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Megaphone, Search, ShoppingCart, Globe, Palette, RefreshCw, PieChart, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdvertisingPage() {
    const steps = [
        {
            icon: Megaphone,
            title: "Advertising e Performance Media",
            description:
                "Gestiamo campagne ad alte prestazioni su marketplace e canali digitali, integrando strategia, tecnologia e analisi dei dati per aumentare visibilità, vendite e redditività.",
        },
        {
            icon: Search,
            title: "Analisi del Brand e delle Opportunità",
            description:
                "Studiamo mercato, competitor, margini e comportamento degli utenti per identificare le vere opportunità ADV e costruire un piano sostenibile e orientato ai risultati.",
        },
        {
            icon: ShoppingCart,
            title: "ADV su Marketplace",
            description:
                "Ottimizziamo campagne su Amazon, eBay e TikTok Shop lavorando su keyword, posizionamenti, ACOS/ROAS, prodotti strategici e ottimizzazioni quotidiane per massimizzare vendite e visibilità.",
        },
    ];

    const optimizationSteps = [
        {
            icon: Globe,
            title: "ADV su Search e Social",
            description:
                "Creiamo campagne conversion-oriented su Google, Meta e TikTok, con segmentazioni avanzate e strategie multicanale per raggiungere utenti ad alto valore in ogni fase del funnel.",
        },
        {
            icon: Palette,
            title: "Creatività e Asset Pubblicitari",
            description:
                "Produciamo grafiche, video e copy pensati per convertire. Tutti gli asset vengono testati e ottimizzati tramite A/B testing per trovare le soluzioni più performanti.",
        },
        {
            icon: RefreshCw,
            title: "Ottimizzazione Continua",
            description:
                "Monitoriamo e ottimizziamo costantemente budget, pubblici, keyword, creatività e strategie di offerta per migliorare ACOS, ROAS, CPC e conversioni in modo progressivo e sostenibile.",
        },
        {
            icon: PieChart,
            title: "Misurazione e Reportistica",
            description:
                "Forniamo dashboard chiare con tutte le metriche chiave (ROAS, ACOS, CPA, conversioni) e modelli di attribuzione che mostrano il contributo reale di ogni canale.",
        },
        {
            icon: TrendingUp,
            title: "Benefici per l’Azienda",
            description:
                "Campagne più performanti, controllo dei costi, crescita delle vendite e un ecosistema pubblicitario integrato e scalabile nel tempo, con creatività e strategie costruite su misura.",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0B223A] font-sans text-white overflow-x-hidden">
            <Navbar />
            <main>
                {/* Hero Section */}
                <Section className="relative py-24 lg:py-32">
                    <div className="container relative z-10">
                        <div className="mx-auto max-w-4xl text-center">
                            <FadeIn>
                                <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                                    Advertising
                                </h1>
                                <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300 md:text-2xl">
                                    Il servizio Advertising è essenziale perché permette alle aziende di aumentare visibilità, vendite e redditività attraverso campagne strutturate e ottimizzate.
                                </p>
                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                    <Link href="/contatti">
                                        <Button size="lg" className="h-14 rounded-full bg-[#FFD700] px-8 text-lg font-bold text-[#0B223A] hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                                            Inizia ora
                                        </Button>
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#FFD700]/5 blur-[120px]" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-red-500/10 blur-[100px]" />
                    </div>
                </Section>

                {/* Steps Section (Dark Cards) */}
                <Section className="py-24 relative">
                    <div className="container">
                        <FadeIn>
                            <div className="mb-16 text-center">
                                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                                    Le tappe per il tuo <span className="text-[#FFD700]">successo</span>
                                </h2>
                            </div>
                        </FadeIn>

                        <div className="grid gap-8 md:grid-cols-3">
                            {steps.map((step, index) => (
                                <FadeIn key={index} delay={index * 0.1} className="h-full">
                                    <div className="h-full p-8 bg-[#1a3a5a] border border-white/20 rounded-2xl hover:border-[#FFD700]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFD700]/10 text-[#FFD700] group-hover:scale-110 transition-transform">
                                            <step.icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-[#FFD700] transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Optimization Section (Light) */}
                <Section className="py-24 bg-white text-[#0B223A]">
                    <div className="container">
                        <FadeIn>
                            <div className="mb-16 text-center">
                                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                                    Ottimizzazione
                                </h2>
                                <p className="mt-4 text-xl text-gray-600">
                                    Massimizza il ROI delle tue campagne
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
                            {optimizationSteps.map((step, index) => (
                                <FadeIn key={index} delay={index * 0.2}>
                                    <div className="flex gap-6 items-start group">
                                        <div className="shrink-0 h-16 w-16 rounded-2xl bg-[#0B223A]/5 flex items-center justify-center text-[#0B223A] group-hover:bg-[#0B223A] group-hover:text-[#FFD700] transition-all duration-300">
                                            <step.icon className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-3 group-hover:text-[#0B223A] transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* CTA Section */}
                <Section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#FFD700] opacity-90" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <div className="container relative z-10 text-center">
                        <FadeIn>
                            <h2 className="mb-6 text-3xl font-bold text-[#0B223A] md:text-4xl lg:text-5xl max-w-4xl mx-auto">
                                Agenzia digitale specializzata in marketing online e strategie per l'e-commerce.
                            </h2>
                            <p className="mb-10 text-xl text-[#0B223A]/80 max-w-2xl mx-auto font-medium">
                                Trasformiamo le tue idee in successi concreti nel mondo digitale.
                            </p>
                            <Link href="/contatti">
                                <Button size="lg" className="h-14 rounded-full bg-[#0B223A] px-10 text-lg font-bold text-white hover:bg-white hover:text-[#0B223A] hover:scale-105 transition-all duration-300 shadow-xl">
                                    Parla con noi <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </FadeIn>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}



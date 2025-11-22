import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Megaphone, BarChart, Search, Palette, RefreshCw, PieChart, TrendingUp, Target, Globe } from "lucide-react";

export default function AdvertisingPage() {
    const services = [
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
            icon: Target,
            title: "ADV su Marketplace",
            description:
                "Ottimizziamo campagne su Amazon, eBay e TikTok Shop lavorando su keyword, posizionamenti, ACOS/ROAS, prodotti strategici e ottimizzazioni quotidiane per massimizzare vendite e visibilità.",
        },
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
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                {/* Hero Section */}
                <Section className="relative overflow-hidden bg-gray-50 py-20 lg:py-32">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-100/50 via-transparent to-transparent" />
                    <div className="container relative z-10">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                                <span className="gradient-text">Advertising</span>
                            </h1>
                            <p className="mb-8 text-xl text-gray-600">
                                Il servizio Advertising è essenziale perché permette alle aziende di aumentare visibilità, vendite e redditività attraverso campagne strutturate e ottimizzate sui canali più efficaci.
                            </p>
                            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
                                Richiedi una consulenza
                            </Button>
                        </div>
                    </div>
                </Section>

                {/* Services Grid */}
                <Section className="bg-white">
                    <div className="container">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {services.map((service, index) => (
                                <div key={index} className="glass-card group rounded-3xl border border-gray-100 p-8 shadow-lg transition-all hover:shadow-2xl hover:shadow-red-500/10">
                                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <service.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-gray-900">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Benefits Section */}
                <Section className="bg-gray-900 text-white">
                    <div className="container">
                        <div className="flex flex-col items-center gap-12 lg:flex-row">
                            <div className="flex-1">
                                <h2 className="mb-6 text-3xl font-bold md:text-4xl">Benefici per l’Azienda</h2>
                                <p className="mb-8 text-lg text-gray-300">
                                    Campagne più performanti, controllo dei costi, crescita delle vendite e un ecosistema pubblicitario integrato e scalabile nel tempo, con creatività e strategie costruite su misura.
                                </p>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                                        <TrendingUp className="h-8 w-8 text-green-400" />
                                        <span className="font-medium">Crescita Vendite</span>
                                    </div>
                                    <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                                        <BarChart className="h-8 w-8 text-blue-400" />
                                        <span className="font-medium">Controllo Costi</span>
                                    </div>
                                    <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                                        <Target className="h-8 w-8 text-red-400" />
                                        <span className="font-medium">Targeting Preciso</span>
                                    </div>
                                    <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                                        <Palette className="h-8 w-8 text-purple-400" />
                                        <span className="font-medium">Creatività su Misura</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                {/* Placeholder for a chart or visual */}
                                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full bg-gradient-to-tr from-red-500/20 to-blue-500/20 p-12">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <BarChart className="h-32 w-32 text-white/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* CTA Section */}
                <Section className="bg-gray-50">
                    <div className="container text-center">
                        <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Massimizza il tuo ROI</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
                            Affidati ai nostri esperti per campagne pubblicitarie che convertono.
                        </p>
                        <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
                            Richiedi analisi gratuita
                        </Button>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}



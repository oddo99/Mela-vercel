import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Users, Target, Share2, LayoutTemplate, Mail, BarChart2, TrendingUp } from "lucide-react";

export default function LeadsPage() {
    const processSteps = [
        {
            icon: Users,
            title: "Lead Generation e Sistemi di Acquisizione",
            description:
                "Costruiamo ecosistemi completi per generare contatti qualificati: strategie data-driven, infrastrutture avanzate e un approccio multicanale per aumentare lead, conversioni e stabilità del sistema.",
        },
        {
            icon: Target,
            title: "Analisi del Target e Buyer Personas",
            description:
                "Studiamo mercato, comportamenti digitali e segmentazioni per definire con precisione il pubblico ideale. Questo ci permette di creare strategie di acquisizione più mirate, efficienti e allineate agli obiettivi del business.",
        },
        {
            icon: Share2,
            title: "Acquisizione Lead Multicanale",
            description:
                "Gestiamo campagne CPL e conversione su Meta Ads, Google Ads, TikTok Ads e social commerce. Copy, creatività e test continui ottimizzano costi e qualità dei lead, generando flussi costanti e realmente interessati.",
        },
        {
            icon: LayoutTemplate,
            title: "Funnel e Landing Page Performanti",
            description:
                "Progettiamo funnel e landing con focus su UX, micro-copy persuasivi e ottimizzazione mobile-first. Test continui su headline, CTA e percorsi di conversione aumentano i tassi di compilazione e riducono l’attrito.",
        },
        {
            icon: Mail,
            title: "Lead Nurturing e Qualificazione",
            description:
                "Dopo l’acquisizione, attiviamo email automatiche, lead scoring e segmentazioni dinamiche integrate con CRM e marketing automation. Questo sistema massimizza la qualità dei contatti consegnati al reparto commerciale.",
        },
        {
            icon: BarChart2,
            title: "Monitoraggio e Ottimizzazione Continua",
            description:
                "Analizziamo CPL, conversioni, qualità lead, ROAS e performance del funnel tramite dashboard personalizzate. Ottimizzazioni costanti permettono di scalare i canali migliori e ridurre i costi nel lungo periodo.",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                {/* Hero Section */}
                <Section className="relative overflow-hidden bg-gray-50 py-20 lg:py-32">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100/50 via-transparent to-transparent" />
                    <div className="container relative z-10">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                                <span className="gradient-text">Leads</span>
                            </h1>
                            <p className="mb-8 text-xl text-gray-600">
                                Il nostro servizio Leads permette alle aziende di generare contatti davvero qualificati in modo costante e misurabile, riducendo i costi di acquisizione.
                            </p>
                            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
                                Richiedi una consulenza
                            </Button>
                        </div>
                    </div>
                </Section>

                {/* Process Grid */}
                <Section className="bg-white">
                    <div className="container">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {processSteps.map((step, index) => (
                                <div key={index} className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                    <div className="relative z-10">
                                        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                            <step.icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="mb-4 text-xl font-bold text-gray-900">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Benefits Section */}
                <Section className="bg-gray-50">
                    <div className="container">
                        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                            <div className="grid md:grid-cols-2">
                                <div className="bg-primary p-12 text-white">
                                    <TrendingUp className="mb-6 h-12 w-12" />
                                    <h2 className="mb-6 text-3xl font-bold">Benefici per l’Azienda</h2>
                                    <p className="text-lg text-blue-100">
                                        Un sistema completo e replicabile di acquisizione per una crescita stabile e misurabile.
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center p-12">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                                            <span className="text-gray-700">Lead più qualificati</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                                            <span className="text-gray-700">Campagne scalabili</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                                            <span className="text-gray-700">Automazioni che riducono i tempi operativi</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                                            <span className="text-gray-700">Decisioni basate su dati affidabili</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                                            <span className="text-gray-700">Percorso di crescita su misura</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* CTA Section */}
                <Section className="bg-gray-900 text-white">
                    <div className="container text-center">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Inizia a generare contatti oggi</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
                            Contattaci per costruire il tuo sistema di acquisizione clienti.
                        </p>
                        <Button size="lg" variant="primary" className="bg-white text-gray-900 hover:bg-gray-100">
                            Richiedi preventivo
                        </Button>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}

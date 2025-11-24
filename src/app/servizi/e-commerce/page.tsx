import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ShoppingBag, Globe, Zap, Search, Layout, Megaphone, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EcommercePage() {
    const services = [
        {
            icon: ShoppingBag,
            title: "Consulenza",
            description:
                "Ci occupiamo di ogni dettaglio della tua attività online: dalla pianificazione economica alla definizione della strategia più adatta al tuo brand. Ti affianchiamo nella creazione e gestione dei contenuti digitali, assicurando coerenza, qualità e una presenza online professionale.",
        },
        {
            icon: Globe,
            title: "Strategia",
            description:
                "Progettiamo strategie di e-commerce su misura, pensate per integrare in modo efficace tutti i canali digitali e migliorare le performance complessive del tuo brand. Analizziamo i dati, individuiamo le migliori opportunità e definiamo azioni mirate per aumentare visibilità, vendite e riconoscibilità online.",
        },
        {
            icon: Zap,
            title: "Lanci e Store",
            description:
                "Pianifichiamo e coordiniamo i lanci dei prodotti gestendo la pubblicazione sulle principali piattaforme e-commerce. Grazie alle nostre integrazioni dirette e a una gestione attenta delle tempistiche, assicuriamo una presenza efficace, coerente e subito operativa su marketplace e store digitali.",
        },
    ];

    const optimizationSteps = [
        {
            icon: Search,
            title: "Audit",
            description:
                "L’ottimizzazione parte da un’analisi approfondita del tuo sito web per individuare punti di forza e criticità. Identifichiamo le aree chiave su cui intervenire e definiamo un piano d’azione mirato, basato sulle tue priorità e sugli obiettivi di crescita del brand.",
        },
        {
            icon: Layout,
            title: "Ottimizzazione Pagina",
            description:
                "Ottimizziamo la tua presenza online intervenendo sugli elementi tecnici e strutturali del sito. Miglioriamo link interni ed esterni, testi e immagini, per garantire una navigazione fluida e un posizionamento organico più efficace nei motori di ricerca.",
        },
        {
            icon: Megaphone,
            title: "Contenuti e Digital ADV",
            description:
                "Creiamo una strategia di comunicazione integrata tra sito e social per rafforzare la tua identità digitale. Realizziamo campagne mirate che promuovono i contenuti, aumentano la visibilità e migliorano le performance attraverso un approccio creativo e data-driven.",
        },
        {
            icon: TrendingUp,
            title: "Insight",
            description:
                "Monitoriamo costantemente i dati e le performance con strumenti di analisi avanzati. I risultati ottenuti ci permettono di perfezionare le strategie, individuare nuove opportunità di crescita e massimizzare il rendimento complessivo delle attività digitali.",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0B223A] font-sans text-white overflow-x-hidden">
            <Navbar />
            <main>
                {/* Hero Section */}
                <Section className="relative py-24 lg:py-32">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FFD700]/10 via-transparent to-transparent" />
                    <FadeIn className="container relative z-10 text-center">
                        <h1 className="mb-8 text-5xl font-black tracking-tight md:text-7xl lg:text-8xl leading-tight">
                            E-COMMERCE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#B8860B]">
                                SUCCESS
                            </span>
                        </h1>
                        <p className="mx-auto mb-10 max-w-3xl text-xl font-light text-gray-300 md:text-2xl leading-relaxed">
                            Dalla pianificazione costi e ricavi fino alla fase di creazione e gestione di contenuti per le vetrine online.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button size="lg" className="h-14 rounded-full bg-[#FFD700] px-8 text-lg font-bold text-[#0B223A] hover:bg-[#FFC700] hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.5)]">
                                Richiedi una Consulenza
                            </Button>
                        </div>
                    </FadeIn>
                </Section>

                {/* Le Tappe per il Successo (Main Services) */}
                <Section className="bg-[#0B223A] py-24">
                    <div className="container">
                        <FadeIn className="mb-16 text-center">
                            <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">
                                Le tappe per il <span className="text-[#FFD700]">tuo successo</span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-gray-300">
                                Da anni aiutiamo i nostri clienti con una vasta gamma di servizi di pubblicità e digital marketing.
                            </p>
                        </FadeIn>

                        <div className="grid gap-8 md:grid-cols-3">
                            {services.map((service, index) => (
                                <FadeIn key={index} delay={index * 0.1} className="h-full">
                                    <div className="h-full p-8 bg-[#1a3a5a] border border-white/20 rounded-2xl hover:border-[#FFD700]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFD700]/10 text-[#FFD700] group-hover:scale-110 transition-transform">
                                            <service.icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-[#FFD700] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Optimization Deep Dive */}
                <Section className="bg-white py-24 text-[#0B223A]">
                    <div className="container">
                        <FadeIn className="mb-16 text-center">
                            <h2 className="mb-6 text-4xl font-bold md:text-6xl">Ottimizzazione</h2>
                            <p className="mx-auto max-w-2xl text-lg text-gray-600">
                                Gestiamo ogni fase dell’ottimizzazione, curando la presentazione e la vendita dei tuoi prodotti.
                            </p>
                        </FadeIn>

                        <div className="grid gap-8 md:grid-cols-2">
                            {optimizationSteps.map((step, index) => (
                                <FadeIn key={index} delay={index * 0.1}>
                                    <div className="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#0B223A]/10 group">
                                        <div className="shrink-0">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B223A] text-[#FFD700] group-hover:rotate-12 transition-transform">
                                                <step.icon className="h-7 w-7" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="mb-3 text-xl font-bold text-[#0B223A]">{step.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* CTA Section */}
                <Section className="bg-[#0B223A] py-24 text-center">
                    <FadeIn className="container">
                        <h2 className="mb-8 text-4xl font-black text-white md:text-6xl">
                            PRONTO A <span className="text-[#FFD700]">SCALARE?</span>
                        </h2>
                        <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300">
                            Affida il tuo e-commerce a chi sa come farlo crescere.
                        </p>
                        <Link href="/contatti">
                            <Button size="lg" className="h-16 rounded-full bg-white px-10 text-xl font-bold text-[#0B223A] hover:bg-gray-100 hover:scale-105 transition-transform">
                                Parla con un Esperto <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                        </Link>
                    </FadeIn>
                </Section>
            </main>
            <Footer />
        </div>
    );
}

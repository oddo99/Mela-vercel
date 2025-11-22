import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Search, Globe, Zap, Layout, Megaphone, TrendingUp } from "lucide-react";

export default function EcommercePage() {
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
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                {/* Hero Section */}
                <Section className="relative overflow-hidden bg-gray-50 py-20 lg:py-32">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent" />
                    <div className="container relative z-10">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                                <span className="gradient-text">E-commerce</span>
                            </h1>
                            <p className="mb-8 text-xl text-gray-600">
                                Dalla pianificazione costi e ricavi fino alla fase di creazione e gestione di contenuti per le vetrine online.
                            </p>
                            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
                                Richiedi una consulenza
                            </Button>
                        </div>
                    </div>
                </Section>

                {/* Main Services Grid */}
                <Section className="bg-white">
                    <div className="container">
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="glass-card rounded-3xl border border-gray-100 p-8 shadow-lg transition-all hover:shadow-xl">
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-primary">
                                    <ShoppingBag className="h-7 w-7" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-gray-900">Consulenza</h3>
                                <p className="text-gray-600">
                                    Ci occupiamo di ogni dettaglio della tua attività online: dalla pianificazione economica alla definizione della strategia più adatta al tuo brand. Ti affianchiamo nella creazione e gestione dei contenuti digitali, assicurando coerenza, qualità e una presenza online professionale.
                                </p>
                            </div>
                            <div className="glass-card rounded-3xl border border-gray-100 p-8 shadow-lg transition-all hover:shadow-xl">
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-primary">
                                    <Globe className="h-7 w-7" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-gray-900">Strategia</h3>
                                <p className="text-gray-600">
                                    Progettiamo strategie di e-commerce su misura, pensate per integrare in modo efficace tutti i canali digitali e migliorare le performance complessive del tuo brand. Analizziamo i dati, individuiamo le migliori opportunità e definiamo azioni mirate per aumentare visibilità, vendite e riconoscibilità online.
                                </p>
                            </div>
                            <div className="glass-card rounded-3xl border border-gray-100 p-8 shadow-lg transition-all hover:shadow-xl">
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-primary">
                                    <Zap className="h-7 w-7" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-gray-900">Lanci e Store</h3>
                                <p className="text-gray-600">
                                    Pianifichiamo e coordiniamo i lanci dei prodotti gestendo la pubblicazione sulle principali piattaforme e-commerce. Grazie alle nostre integrazioni dirette e a una gestione attenta delle tempistiche, assicuriamo una presenza efficace, coerente e subito operativa su marketplace e store digitali.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Optimization Deep Dive */}
                <Section className="bg-gray-50">
                    <div className="container">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Ottimizzazione</h2>
                            <p className="mx-auto max-w-2xl text-lg text-gray-600">
                                Gestiamo ogni fase dell’ottimizzazione, curando la presentazione e la vendita dei tuoi prodotti. Miglioriamo le performance del sito e-commerce e ottimizziamo la presenza nei diversi store.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {optimizationSteps.map((step, index) => (
                                <div key={index} className="flex gap-6 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                                    <div className="shrink-0">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary">
                                            <step.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* CTA Section */}
                <Section className="bg-gray-900 text-white">
                    <div className="container text-center">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Il tuo e-commerce al livello successivo</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
                            Contattaci per scoprire come possiamo ottimizzare il tuo store online.
                        </p>
                        <Button size="lg" variant="primary" className="bg-white text-gray-900 hover:bg-gray-100">
                            Inizia ora
                        </Button>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}

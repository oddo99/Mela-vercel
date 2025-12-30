import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { FAQPageSchema } from "@/components/seo/JsonLd";
import { Calculator, User, FileText, Camera, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        question: "Quanto costa vendere su Amazon?",
        answer: "I costi dipendono dal modello scelto (Seller o Vendor), dalle commissioni di vendita (6-20% a seconda della categoria) e dai costi logistici. Forniamo un'analisi costi-ricavi dettagliata prima di iniziare."
    },
    {
        question: "Quanto tempo serve per iniziare a vendere su un marketplace?",
        answer: "Con il nostro supporto, l'onboarding completo richiede circa 2-4 settimane, inclusa la creazione dell'account, l'ottimizzazione dei listing e la configurazione della logistica."
    },
    {
        question: "Gestite anche il lancio internazionale?",
        answer: "Sì, offriamo strategie complete per l'espansione su marketplace europei e globali, gestendo traduzioni, logistica internazionale e campagne pubblicitarie localizzate."
    },
];

export const metadata: Metadata = {
    title: "Marketplace",
    description: "Consulenze marketplace Amazon e altri canali. Strategia, gestione account, ottimizzazione listing e lancio internazionale per il tuo business.",
    openGraph: {
        title: "Marketplace | Mela Services",
        description: "Strategie complete per vendere su Amazon e marketplace internazionali.",
    },
};

export default function MarketplacePage() {
    const steps = [
        {
            icon: Calculator,
            title: "Pianificazione e analisi costi ricavi",
            description:
                "Se hai in mente di iniziare o portare il tuo business online, è importante conoscere nel dettaglio i costi che bisogna affrontare. Il servizio comprende una pianificazione attenta del primo anno di vendita grazie a un sales forecast che analizza diversi scenari di vendita e un’analisi costi e ricavi dettagliata.",
        },
        {
            icon: User,
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
    ];

    const optimizationSteps = [
        {
            icon: Camera,
            title: "Foto prodotto",
            description:
                "Le immagini devono essere ottimizzate per non incidere negativamente sulle vendite. La foto principale è il primo contatto con il cliente: se non è perfetta, il cliente passerà oltre.",
        },
        {
            icon: Rocket,
            title: "Gestione lancio",
            description:
                "Una volta online, servono strategie per lanciare i prodotti nei diversi Paesi e incrementare le vendite con campagne social mirate. Bilanciamo prodotto e Brand per la massima efficacia.",
        },
        {
            icon: FileText,
            title: "A+ Content e Brand Store",
            description:
                "Creiamo contenuti A+ Premium e Brand Store accattivanti per aumentare la conversione e rafforzare l'identità del tuo brand su Amazon.",
        },
        {
            icon: User,
            title: "Protezione del Brand",
            description:
                "Registrazione al Brand Registry Amazon, monitoraggio seller non autorizzati e gestione delle violazioni per proteggere il tuo marchio.",
        },
        {
            icon: Calculator,
            title: "Espansione Internazionale",
            description:
                "Supporto completo per vendere su Amazon Europa, USA e altri mercati: traduzioni, logistica Pan-EU e strategie di pricing localizzate.",
        },
        {
            icon: Rocket,
            title: "Gestione Account Health",
            description:
                "Monitoraggio costante delle metriche di performance, gestione delle policy Amazon e prevenzione di sospensioni account.",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0B223A] font-sans text-white overflow-x-hidden">
            <FAQPageSchema faqs={faqs} />
            <Navbar />
            <main>
                {/* Hero Section */}
                <Section className="relative py-24 lg:py-32">
                    <div className="container relative z-10">
                        <div className="mx-auto max-w-4xl text-center">
                            <FadeIn>
                                <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                                    Marketplace
                                </h1>
                                <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300 md:text-2xl">
                                    Partendo dalle nostre consulenze marketplace vi forniamo tutto ciò che serve per arrivare al successo.
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
                        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]" />
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
                                    Dettagli che fanno la differenza
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

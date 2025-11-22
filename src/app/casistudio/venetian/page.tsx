import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Globe, PenTool, Target, Lightbulb, CheckCircle2, Camera, Gem } from "lucide-react";
import Link from "next/link";

export default function VenetianCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1523772354886-34a1ce022436?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Fashion & Accessories</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Venetian Beauty</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha supportato Venetian Beauty nella costruzione di un brand forte e autentico, capace di affermarsi a livello internazionale pur mantenendo intatta la propria identità artigianale veneziana.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Focus", value: "International Branding", icon: Globe },
                            { label: "Settore", value: "Pelletteria Artigianale", icon: Gem },
                            { label: "Strategia", value: "Storytelling & Content", icon: Camera },
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
                                    Venetian Beauty è un marchio di pelletteria artigianale che unisce la tradizione veneziana a un design contemporaneo e minimalista. I suoi prodotti sono pensati per uomini e donne tra i 30 e i 55 anni, con un interesse per l’autenticità, la sostenibilità e la cultura.
                                </p>
                                <p>
                                    Il brand si rivolge a un pubblico urbano, creativo e culturalmente raffinato, che apprezza la bellezza discreta e senza ostentazione, e che ha un reddito medio-alto. Venetian Beauty offre creazioni uniche che celebrano l’eleganza senza tempo di Venezia, proponendo accessori di alta qualità per chi cerca un prodotto autentico e distintivo.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Obiettivi e Sfide</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    Gli obiettivi di Venetian Beauty, per i prossimi mesi, sono rafforzare il proprio posizionamento come riferimento dell’artigianato veneziano contemporaneo e far crescere in modo strutturato l’e-commerce, aumentando conversione, valore medio ordine e clienti ricorrenti, soprattutto nei mercati europei.
                                </p>
                                <p>
                                    L’espansione internazionale passa dalla localizzazione del sito in nuove lingue e dall’incremento della quota di ordini esteri, mantenendo sempre un’identità autentica e una produzione radicata in Laguna e nel territorio veneto.
                                </p>
                                <p>
                                    Parallelamente, l’obiettivo è far crescere la community attraverso contenuti che valorizzano Venezia, l’artigianalità e il “dietro le quinte”, migliorando allo stesso tempo l’esperienza cliente, riducendo resi e difettosità e aumentando i livelli di soddisfazione e fidelizzazione.
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
                                Il primo passo nella strategia di crescita di Venetian Beauty è stato l’espansione internazionale, con l’intento di portare il marchio in mercati chiave come Europa, Nord America e Asia. Nonostante l’espansione globale, l’azienda ha sempre mantenuto un forte focus sull’autenticità e sull’artigianalità, che sono i pilastri della sua identità veneziana.
                            </p>
                            <p>
                                L’approccio strategico ha mirato a integrare la tradizione artigianale con un’innovazione moderna, creando una fusione perfetta tra il patrimonio storico e le esigenze di un mercato globale e contemporaneo. Questo equilibrio ha permesso al brand di crescere senza compromettere i valori che lo rendono unico.
                            </p>
                            <p>
                                La strategia di Venetian Beauty si è focalizzata sulla creazione di contenuti visivi che raccontassero non solo la bellezza dei prodotti, ma anche la storia di Venezia e il processo artigianale che li rende unici. Attraverso storytelling coinvolgenti e collaborazioni culturali, l’azienda ha ampliato la percezione del brand, legandolo indissolubilmente alla tradizione e all’autenticità veneziana. Questi contenuti hanno permesso di raccontare il valore del made in Italy e dell’artigianalità, facendo emergere l’essenza del marchio in modo che ogni prodotto non fosse solo un accessorio, ma un vero e proprio pezzo di storia e cultura.
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
                                <h2 className="mb-6 text-3xl font-bold md:text-4xl">Risultati e Valore Aggiunto</h2>
                                <div className="prose prose-lg text-gray-300">
                                    <p>
                                        Il valore aggiunto dell’agenzia è stato fondamentale nell’aiutare Venetian Beauty a costruire un brand solido, autentico e sostenibile. Grazie a una strategia mirata, l’azienda è riuscita ad espandersi a livello internazionale, raggiungendo nuovi mercati senza compromettere mai la sua identità artigianale.
                                    </p>
                                    <p>
                                        Il risultato è un marchio che continua a crescere globalmente, pur mantenendo intatti i valori di tradizione, qualità e sostenibilità che lo rendono unico e riconoscibile, sia in Italia che all’estero.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Costruisci il tuo Brand <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Brand Identity</h4>
                                    <p className="text-gray-200">Costruzione di un brand forte e autentico, capace di affermarsi a livello internazionale.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Storytelling</h4>
                                    <p className="text-gray-200">Contenuti visivi che raccontano la storia di Venezia e il processo artigianale.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Espansione</h4>
                                    <p className="text-gray-200">Crescita strutturata dell'e-commerce e apertura a nuovi mercati globali.</p>
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

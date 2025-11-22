import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Leaf, ShoppingBag, Target, Lightbulb, CheckCircle2, BarChart3, Video } from "lucide-react";
import Link from "next/link";

export default function NaturwarenCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <Section className="relative flex min-h-[80vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container relative z-10 text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#FFD700]/20 px-4 py-2 text-[#FFD700]">
                        <span className="font-bold uppercase tracking-wider">Case Study: Beauty & Cosmetics</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Naturwaren</h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl leading-relaxed">
                        Mela Services ha supportato Naturwaren nel raggiungimento di un significativo incremento del fatturato e una maggiore marginalità sui prodotti, attraverso una strategia ibrida Vendor/Seller e l'espansione su TikTok Shop.
                    </p>
                </div>
            </Section>

            {/* Key Highlights */}
            <Section className="relative z-20 -mt-20 bg-transparent">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { label: "Strategia", value: "Hybrid (Vendor + Seller)", icon: Target },
                            { label: "Canale", value: "Amazon + TikTok Shop", icon: Video },
                            { label: "Obiettivo", value: "Marginalità & Fatturato", icon: BarChart3 },
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
                                    Naturwaren è una multinazionale tedesca specializzata nella distribuzione di prodotti cosmetici naturali. La filiale italiana è strutturata con una direzione generale, 30 agenti plurimandatari e aree marketing, commerciale e amministrativa.
                                </p>
                                <p>
                                    L’azienda investe nella formazione dei giovani per garantire una solida preparazione nel settore. Con un ampio portfolio di sottobrand, Naturwaren si conferma un leader nel suo campo.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">Obiettivi e Sfide</h3>
                            <div className="prose text-gray-600">
                                <p>
                                    Gli obiettivi principali per Naturwaren erano aumentare il fatturato, aprire un account Amazon Seller per ampliare la vendita diretta e garantire una maggiore marginalità sui prodotti.
                                </p>
                                <p>
                                    Inoltre, l’azienda mirava ad espandere la propria presenza anche su altre piattaforme di social commerce, con un focus particolare su TikTok Shop. Questa espansione avrebbe permesso di raggiungere un pubblico più ampio, migliorando la visibilità del brand e creando nuove opportunità di vendita diretta, aumentando così la competitività nel mercato online.
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
                                Il primo approccio con Naturwaren ha visto il consolidamento su Amazon Vendor, dove abbiamo lavorato per raggiungere e superare il Performance Index (PI) prefissato, migliorando la visibilità dei prodotti.
                            </p>
                            <p>
                                Successivamente, abbiamo avviato l’apertura del canale Amazon Seller, espandendo la presenza dell’azienda e permettendo di diversificare le vendite e raggiungere nuovi segmenti di mercato. Questo ha gettato le basi per una crescita futura solida su Amazon.
                            </p>
                            <p>
                                La strategia mista adottata per Naturwaren si è basata su un approccio Vendor per la vendita di prodotti ad alta rotazione, come i pack singoli, e un approccio Seller per i bundle, dove l’azienda può garantire maggior marginalità. Questa combinazione ha permesso di ottimizzare la gestione dei canali di vendita e di rispondere in modo più efficiente alle diverse esigenze del mercato.
                            </p>
                            <p>
                                Inoltre, è stata adottata anche una strategia multichannel che ha incluso l’espansione su TikTok Shop, amplificando la presenza online e raggiungendo nuovi segmenti di clienti. Questo approccio ha creato una solida base per massimizzare le vendite e migliorare i margini complessivi, favorendo una crescita sostenibile su più canali.
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
                                        Naturwaren ha ottenuto un aumento significativo del fatturato e una maggior marginalità sui prodotti, grazie all’ottimizzazione dei canali di vendita tramite l’approccio Vendor per i prodotti ad alta rotazione e Seller per i bundle.
                                    </p>
                                    <p>
                                        Inoltre, c’è stato un arricchimento del catalogo con l’introduzione di nuovi bundle, che ha permesso di diversificare l’offerta e rispondere meglio alle esigenze dei consumatori. Questi risultati hanno consolidato la posizione dell’azienda nel mercato e ne hanno accelerato la crescita.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button className="bg-[#FFD700] text-[#0B223A] hover:bg-white">
                                        <Link href="/contatti" className="flex items-center">
                                            Diversifica i tuoi Canali <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Marginalità</h4>
                                    <p className="text-gray-200">Aumento dei margini grazie alla strategia ibrida Vendor/Seller.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Multichannel</h4>
                                    <p className="text-gray-200">Espansione su TikTok Shop per raggiungere nuove audience.</p>
                                </div>
                                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h4 className="mb-2 text-xl font-bold text-[#FFD700]">Crescita</h4>
                                    <p className="text-gray-200">Incremento significativo del fatturato e diversificazione dell'offerta.</p>
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

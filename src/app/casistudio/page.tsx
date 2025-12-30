"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Tag } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CaseStudiesPage() {
    const [activeCategory, setActiveCategory] = useState("Tutti");

    const categories = [
        "Tutti",
        "Beauty",
        "Cura e Benessere",
        "Accessori Auto",
        "Edilizia",
        "Cibi e Bevande",
        "Oggettistica",
        "Abbigliamento e Accessori"
    ];

    const caseStudies = [
        {
            client: "Dermomamma",
            slug: "dermomamma",
            website: "https://dermomamma.it/",
            category: "Beauty",
            tags: ["Amazon Seller", "Amazon ADS", "TikTok"],
            description: "Strategia multicanale integrata per il brand Dermomamma.",
        },
        {
            client: "Ethical Grace",
            slug: "ethicalgrace",
            website: null,
            category: "Beauty",
            tags: ["Amazon Seller", "Ebay", "Meta ADS", "Google ADS"],
            description: "Espansione sui marketplace e advertising performante.",
        },
        {
            client: "Alveario",
            slug: "alveario",
            website: "https://alveario.it/",
            category: "Cibi e Bevande",
            tags: ["Amazon Seller", "Ebay", "Meta ADS", "Google ADS"],
            description: "Gestione completa account e campagne pubblicitarie.",
        },
        {
            client: "Formularity",
            slug: "formularity",
            website: "https://formularity.it/",
            category: "Cura e Benessere",
            tags: ["Amazon Seller", "Ebay", "Meta ADS", "Google ADS"],
            description: "Ottimizzazione listing e strategie di crescita.",
        },
        {
            client: "Eusphera",
            slug: "eusphera",
            website: "https://eusphera.com/",
            category: "Cura e Benessere",
            tags: ["Amazon Seller", "Ebay", "Meta ADS", "Google ADS"],
            description: "Lancio e consolidamento del brand sui canali digitali.",
        },
        {
            client: "Life 120",
            slug: "life120",
            website: "https://life120.it/",
            category: "Cura e Benessere",
            tags: ["Amazon", "Ebay", "Meta ADS", "Google ADS"],
            description: "Strategia omnicanale per massimizzare la visibilità.",
        },
        {
            client: "Naturwaren",
            slug: "naturwaren",
            website: "https://naturwaren.it/",
            category: "Cura e Benessere",
            tags: ["Amazon Seller", "Amazon Vendor", "Amazon ADS"],
            description: "Gestione ibrida Seller/Vendor e advertising avanzato.",
        },
        {
            client: "Farmacia 724",
            slug: "farmacia724",
            website: "https://farmacia724.com/",
            category: "Cura e Benessere",
            tags: ["Amazon Seller", "Ebay", "Meta ADS", "Google ADS"],
            description: "Digitalizzazione e crescita delle vendite online.",
        },
        {
            client: "Glielmi",
            slug: "glielmi",
            website: "https://glemishoponline.com/",
            category: "Abbigliamento e Accessori",
            tags: ["Amazon Seller", "Ebay", "Meta ADS", "Google ADS"],
            description: "Supporto strategico per l'espansione sui marketplace.",
        },
        {
            client: "Pegasium",
            slug: "pegasium",
            website: null,
            category: "Accessori Auto",
            tags: ["Amazon Seller", "Ebay", "Meta ADS", "Google ADS"],
            description: "Ottimizzazione conversioni e gestione campagne.",
        },
        {
            client: "FT Metalli",
            slug: "ftmetalli",
            website: "https://ftmetalli.it/",
            category: "Edilizia",
            tags: ["Amazon Seller", "Ebay", "Meta ADS", "Google ADS"],
            description: "Strategia B2B e B2C sui principali marketplace.",
        },
        {
            client: "Molino Chiavazza",
            slug: "molinochiavazza",
            website: "https://molinochiavazza.com/",
            category: "Cibi e Bevande",
            tags: ["Amazon Seller", "Ebay", "Meta ADS", "Google ADS"],
            description: "Posizionamento del brand e incremento vendite.",
        },
        {
            client: "Ronco Andrea",
            slug: "roncoandrea",
            website: "https://www.impresaedileronco.it/",
            category: "Edilizia",
            tags: ["Amazon Seller", "Ebay", "Meta ADS", "Google ADS"],
            description: "Strategia digitale per l'edilizia e l'espansione europea.",
        },
        {
            client: "Naturae Victus",
            slug: "naturaevictus",
            website: null,
            category: "Cibi e Bevande",
            tags: ["Amazon Seller", "Ebay", "Meta ADS", "Google ADS"],
            description: "Lancio prodotti e gestione advertising.",
        },
        {
            client: "Rambloc",
            slug: "rambloc",
            website: "https://rambloc.it/",
            category: "Oggettistica",
            tags: ["Amazon Seller", "Ebay", "Meta ADS", "Google ADS"],
            description: "Mela Services ha affiancato Rambloc con una strategia integrata su Amazon, eBay e advertising multicanale.",
        },
        {
            client: "Valenti Argenti",
            slug: "valentiargenti",
            website: "https://valentiargenti.it/",
            category: "Oggettistica",
            tags: ["Amazon Seller", "Amazon Vendor", "Amazon ADS"],
            description: "Gestione strategica account Vendor e Seller con focus su Amazon Advertising.",
        },
        {
            client: "Colleoni",
            slug: "colleoni",
            website: null,
            category: "Oggettistica",
            tags: ["Amazon Seller e ADS", "Ebay", "Meta ADS"],
            description: "Metodo end-to-end specifico per Amazon, audit e ottimizzazione contenuti.",
        },
        {
            client: "Grifos Pens",
            slug: "grifos",
            website: "https://grifos-pens.it/",
            category: "Oggettistica",
            tags: ["Amazon Seller", "Meta ADS", "Amazon ADS"],
            description: "Valorizzazione del Made in Italy attraverso strategie digitali mirate.",
        },
        {
            client: "Venetian Beauty",
            slug: "venetian",
            website: null,
            category: "Beauty",
            tags: ["Amazon Seller", "Meta ADS", "Amazon ADS"],
            description: "Lancio e crescita del brand nel settore beauty.",
        },
    ];

    const filteredStudies = caseStudies.filter((study) => {
        if (activeCategory === "Tutti") return true;
        return study.category === activeCategory;
    });

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                {/* Hero Section */}
                <Section className="bg-gradient-to-br from-[#0B223A] to-[#1a3a5a] py-24 text-white lg:py-36">
                    <FadeIn className="container">
                        <div className="mx-auto max-w-4xl text-center">
                            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                                I nostri <span className="text-[#FFD700]">Casi Studio</span>
                            </h1>
                            <p className="text-xl text-white/90 md:text-2xl">
                                Scopri come abbiamo aiutato le aziende a crescere e scalare il loro business online
                            </p>
                        </div>
                    </FadeIn>
                </Section>

                {/* Filter Section */}
                <Section className="bg-white pt-15 md:pt-15 lg:pt-15 pb-5 md:pb-5 lg:pb-5">
                    <div className="container">
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={cn(
                                        "rounded-full px-6 py-2 text-sm font-medium transition-all duration-300",
                                        activeCategory === category
                                            ? "bg-[#0B223A] text-white shadow-lg scale-105"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105"
                                    )}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Case Studies Grid */}
                <Section className="bg-white pt-15 md:pt-15 lg:pt-15 pb-5 md:pb-5 lg:pb-5">
                    <div className="container">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {filteredStudies.map((study, index) => (
                                <FadeIn key={`${study.client}-${index}`} delay={index * 0.05}>
                                    <div className="glass-card group flex h-full flex-col justify-between rounded-3xl border border-gray-100 p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10">
                                        <div>
                                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                                {study.website ? (
                                                    <a
                                                        href={study.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-[#FFD700] transition-colors underline decoration-[#FFD700]/30 hover:decoration-[#FFD700]"
                                                    >
                                                        {study.client}
                                                    </a>
                                                ) : (
                                                    study.client
                                                )}
                                            </h3>
                                            <div className="mb-6 flex flex-wrap gap-2">
                                                {study.tags.map((tag, i) => (
                                                    <span key={i} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                                        <Tag className="mr-1 h-3 w-3" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="mb-8 text-gray-600">{study.description}</p>
                                        </div>
                                        <div className="mt-auto">
                                            <Link href={`/casistudio/${study.slug}`}>
                                                <Button variant="outline" className="w-full group-hover:bg-[#FFD700]/10 group-hover:text-[#0B223A] group-hover:border-[#FFD700]">
                                                    Scopri di più <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* CTA Section */}
                <Section className="bg-gradient-to-br from-[#0B223A] to-[#1a3a5a] py-20 text-white lg:py-28">
                    <FadeIn className="container text-center">
                        <div className="mx-auto max-w-3xl">
                            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Vuoi essere il prossimo caso di successo?</h2>
                            <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90">
                                Contattaci per analizzare le potenzialità del tuo progetto.
                            </p>
                            <Link href="/contatti">
                                <Button size="lg" className="rounded-full bg-[#FFD700] text-[#0B223A] hover:bg-[#FFC700]">
                                    Parla con noi
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </Section>
            </main>
            <Footer />
        </div>
    );
}

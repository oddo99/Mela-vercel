import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ShoppingBag, Globe, Users, BarChart3, ArrowRight } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            id: "marketplace",
            title: "Marketplace",
            description: "Partendo dalle nostre consulenze marketplace vi forniamo tutto ciò che serve per arrivare al successo. Pianificazione e analisi costi ricavi.",
            details: "Se hai in mente di iniziare o portare il tuo business online, è importante conoscere nel dettaglio i costi che bisogna affrontare.",
            icon: ShoppingBag,
            href: "/servizi/marketplace",
            image: "/images/marketplace.png"
        },
        {
            id: "e-commerce",
            title: "E-commerce",
            description: "Dalla pianificazione costi e ricavi fino alla fase di creazione e gestione di contenuti per le vetrine online.",
            details: "La nostra consulenza per l’e-commerce supporta le aziende nella creazione e ottimizzazione del proprio negozio online, migliorando performance, conversioni e redditività.",
            icon: Globe,
            href: "/servizi/e-commerce",
            image: "/images/ecommerce.png"
        },
        {
            id: "leads",
            title: "Leads",
            description: "Il nostro servizio Leads permette alle aziende di generare contatti davvero qualificati in modo costante e misurabile.",
            details: "Riduci i costi di acquisizione e aumenta le vendite con strategie mirate di Lead Generation e Sistemi di Acquisizione.",
            icon: Users,
            href: "/servizi/leads",
            image: "/images/leads.png"
        },
        {
            id: "advertising",
            title: "Advertising",
            description: "Il servizio Advertising è essenziale perché permette alle aziende di aumentare visibilità, vendite e redditività.",
            details: "Campagne strutturate e ottimizzate sui canali più efficaci. Advertising e Performance Media per il massimo ROI.",
            icon: BarChart3,
            href: "/servizi/advertising",
            image: "/images/advertising.png"
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                <Section className="bg-gradient-to-br from-[#0B223A] to-[#1a3a5a] py-24 text-white lg:py-36">
                    <div className="container text-center">
                        <h1 className="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
                            I Nostri <span className="text-[#FFD700]">Servizi</span>
                        </h1>
                        <p className="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">
                            Soluzioni complete per la crescita del tuo business digitale
                        </p>
                    </div>
                </Section>

                <Section className="py-20 lg:py-28">
                    <div className="container">
                        <div className="grid gap-20">
                            {services.map((service, index) => (
                                <div key={index} className={`flex flex-col gap-12 md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center`}>
                                    <div className="flex-1">
                                        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0B223A] to-[#1a3a5a] text-white shadow-xl">
                                            <service.icon className="h-10 w-10" />
                                        </div>
                                        <h2 className="mb-6 text-4xl font-bold text-gray-900">{service.title}</h2>
                                        <p className="mb-4 text-xl leading-relaxed text-gray-700">{service.description}</p>
                                        <p className="mb-8 text-lg leading-relaxed text-gray-600">{service.details}</p>
                                        <Link href={service.href}>
                                            <Button size="lg" className="group gap-3 rounded-full">
                                                Scopri di più <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="flex-1">
                                        <div className="relative h-96 w-full overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B223A]/50 to-transparent" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { ShoppingBag, Globe, Users, BarChart3, ArrowRight, MapPin, Search, Link as LinkIcon, Mail, PenTool, FileText, Smartphone, PieChart } from "lucide-react";

export const metadata: Metadata = {
    title: "I Nostri Servizi",
    description: "Scopri i servizi Mela: Marketplace, E-commerce, Lead Generation, Advertising, SEO e Content Strategy per far crescere il tuo business online.",
    openGraph: {
        title: "I Nostri Servizi | Mela Services",
        description: "Soluzioni digitali complete per ogni fase della tua crescita: Marketplace, E-commerce, Leads e Advertising.",
    },
};

export default function ServicesPage() {
    const coreServices = [
        // Mela Core Services
        {
            id: "marketplace",
            title: "Marketplace",
            description: "Strategie complete per vendere su Amazon e altri marketplace. Analisi, gestione account e lancio internazionale.",
            icon: ShoppingBag,
            href: "/servizi/marketplace",
        },
        {
            id: "e-commerce",
            title: "E-commerce",
            description: "Sviluppo e gestione del tuo negozio online proprietario. Design, piattaforma e ottimizzazione delle conversioni.",
            icon: Globe,
            href: "/servizi/e-commerce",
        },
        {
            id: "leads",
            title: "Leads",
            description: "Sistemi avanzati per generare contatti qualificati. Campagne multicanale e funnel ad alta conversione.",
            icon: Users,
            href: "/servizi/leads",
        },
        {
            id: "advertising",
            title: "Advertising",
            description: "Campagne pubblicitarie data-driven per massimizzare il ROI. Strategia media, PPC e creatività performanti.",
            icon: BarChart3,
            href: "/servizi/advertising",
        },
    ];

    const marketingServices = [
        {
            id: "local-seo",
            title: "Local Search Strategy",
            description: "Ottimizzazione della presenza locale per attrarre clienti nella tua area geografica e aumentare la visibilità su Google Maps.",
            icon: MapPin,
            href: "/contatti",
        },
        {
            id: "map-optimization",
            title: "Map Search Optimization",
            description: "Strategie mirate per migliorare il posizionamento nelle ricerche su mappe e directory locali.",
            icon: Search,
            href: "/contatti",
        },
        {
            id: "link-building",
            title: "Link Building & Content",
            description: "Acquisizione di backlink di qualità e creazione di contenuti strategici per aumentare l'autorità del dominio.",
            icon: LinkIcon,
            href: "/contatti",
        },
        {
            id: "paid-search",
            title: "Paid Search Advertising",
            description: "Gestione campagne Google Ads e SEM per intercettare la domanda consapevole e generare traffico immediato.",
            icon: PieChart,
            href: "/contatti",
        },
    ];

    const contentServices = [
        {
            id: "email-design",
            title: "Custom Email Design",
            description: "Progettazione di template email personalizzati e responsive per comunicazioni efficaci e professionali.",
            icon: Mail,
            href: "/contatti",
        },
        {
            id: "email-marketing",
            title: "Email Marketing Campaign",
            description: "Strategie di email marketing automation per nutrire i lead e fidelizzare i clienti esistenti.",
            icon: Smartphone,
            href: "/contatti",
        },
        {
            id: "content-strategy",
            title: "Content Strategy",
            description: "Pianificazione editoriale data-driven per creare contenuti che attraggono, coinvolgono e convertono il target.",
            icon: FileText,
            href: "/contatti",
        },
        {
            id: "content-development",
            title: "Content Development",
            description: "Produzione di contenuti di alta qualità: articoli blog, whitepaper, case study e copy per il web.",
            icon: PenTool,
            href: "/contatti",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0B223A] font-sans text-white overflow-x-hidden">
            <Navbar />
            <main>
                {/* Hero Section - Dark */}
                <Section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0B223A]">
                    <div className="container text-center">
                        <FadeIn>
                            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                                I Nostri <span className="text-[#FFD700]">Servizi</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
                                Soluzioni digitali complete per ogni fase della tua crescita.
                            </p>
                        </FadeIn>
                    </div>
                </Section>

                {/* Core Services Section - White Background */}
                <Section className="py-24 lg:py-32 bg-white text-[#0B223A]">
                    <div className="container">
                        <FadeIn>
                            <div className="text-center mb-20">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategie Core</h2>
                                <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">Il cuore della nostra offerta per scalare il tuo business online.</p>
                            </div>
                        </FadeIn>

                        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                            {coreServices.map((service, index) => (
                                <FadeIn key={index} delay={index * 0.05} className="h-full">
                                    <Link href={service.href} className="block h-full group">
                                        <div className="h-full p-6 transition-all duration-300 hover:bg-gray-50 rounded-2xl flex flex-col">
                                            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 text-[#0B223A] bg-[#FFD700]/20 rounded-xl group-hover:bg-[#0B223A] group-hover:text-[#FFD700] transition-all duration-300">
                                                <service.icon className="h-7 w-7" />
                                            </div>
                                            <h3 className="mb-4 text-2xl font-bold group-hover:text-[#0B223A] transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="mb-6 text-gray-600 leading-relaxed text-base">
                                                {service.description}
                                            </p>
                                            <div className="mt-auto flex items-center text-[#0B223A] font-bold text-sm uppercase tracking-wider group-hover:text-[#FFD700] transition-colors">
                                                Scopri di più
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                                            </div>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Digital Marketing & SEO Section - Dark Background */}
                <Section className="py-24 lg:py-32 bg-[#0B223A] text-white">
                    <div className="container">
                        <FadeIn>
                            <div className="text-center mb-20">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Digital Marketing & SEO</h2>
                                <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">Visibilità organica e strategie di acquisizione locale per dominare il tuo mercato.</p>
                            </div>
                        </FadeIn>

                        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                            {marketingServices.map((service, index) => (
                                <FadeIn key={index} delay={index * 0.05} className="h-full">
                                    <Link href={service.href} className="block h-full group">
                                        <div className="h-full p-6 transition-all duration-300 hover:bg-white/5 rounded-2xl flex flex-col">
                                            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
                                                <service.icon className="h-10 w-10" />
                                            </div>
                                            <h3 className="mb-4 text-2xl font-bold group-hover:text-[#FFD700] transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="mb-6 text-gray-400 leading-relaxed text-base">
                                                {service.description}
                                            </p>
                                            <div className="mt-auto flex items-center text-[#FFD700] font-semibold text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                                                Scopri di più
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                                            </div>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Content & Email Section - White Background */}
                <Section className="py-24 lg:py-32 bg-white text-[#0B223A]">
                    <div className="container">
                        <FadeIn>
                            <div className="text-center mb-20">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Content & Email Strategy</h2>
                                <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">Contenuti che convertono e strategie di fidelizzazione per il lungo termine.</p>
                            </div>
                        </FadeIn>

                        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                            {contentServices.map((service, index) => (
                                <FadeIn key={index} delay={index * 0.05} className="h-full">
                                    <Link href={service.href} className="block h-full group">
                                        <div className="h-full p-6 transition-all duration-300 hover:bg-gray-50 rounded-2xl flex flex-col">
                                            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 text-[#0B223A] bg-[#FFD700]/20 rounded-xl group-hover:bg-[#0B223A] group-hover:text-[#FFD700] transition-all duration-300">
                                                <service.icon className="h-7 w-7" />
                                            </div>
                                            <h3 className="mb-4 text-2xl font-bold group-hover:text-[#0B223A] transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="mb-6 text-gray-600 leading-relaxed text-base">
                                                {service.description}
                                            </p>
                                            <div className="mt-auto flex items-center text-[#0B223A] font-bold text-sm uppercase tracking-wider group-hover:text-[#FFD700] transition-colors">
                                                Scopri di più
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                                            </div>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Latest Projects Section - Dark Background */}
                <Section className="py-24 lg:py-32 bg-[#0B223A] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#FFD700]/10 blur-[120px]" />
                    </div>
                    <div className="container text-center relative z-10">
                        <FadeIn>
                            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                                I Nostri <span className="text-[#FFD700]">Ultimi Progetti</span>
                            </h2>
                            <p className="mb-12 text-xl text-gray-300 max-w-2xl mx-auto">
                                Esplora i nostri casi studio e scopri come abbiamo aiutato altre aziende a raggiungere il successo digitale.
                            </p>

                            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
                                {/* Life120 */}
                                <Link href="/casistudio/life120" className="group">
                                    <div className="relative aspect-video rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-[#1a3a5a] via-[#0B223A] to-[#1a3a5a] hover:border-[#FFD700]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FFD700]/10">
                                        {/* Decorative gradient orb */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFD700]/20 to-transparent rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

                                        {/* Category badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 text-xs font-semibold bg-[#FFD700]/20 text-[#FFD700] rounded-full border border-[#FFD700]/30">
                                                Cura e Benessere
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-[#FFD700] transition-colors mb-2">Life120</h3>
                                            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Strategia omnicanale per massimizzare la visibilità</p>
                                        </div>

                                        {/* Arrow indicator */}
                                        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFD700] transition-all duration-300">
                                            <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-[#0B223A] transition-colors" />
                                        </div>
                                    </div>
                                </Link>

                                {/* Naturwaren */}
                                <Link href="/casistudio/naturwaren" className="group">
                                    <div className="relative aspect-video rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-[#1a3a5a] via-[#0B223A] to-[#1a3a5a] hover:border-[#FFD700]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FFD700]/10">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                                                Cura e Benessere
                                            </span>
                                        </div>

                                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-[#FFD700] transition-colors mb-2">Naturwaren</h3>
                                            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Prodotti naturali e cosmetici biologici</p>
                                        </div>

                                        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFD700] transition-all duration-300">
                                            <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-[#0B223A] transition-colors" />
                                        </div>
                                    </div>
                                </Link>

                                {/* Dermomamma */}
                                <Link href="/casistudio/dermomamma" className="group">
                                    <div className="relative aspect-video rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-[#1a3a5a] via-[#0B223A] to-[#1a3a5a] hover:border-[#FFD700]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FFD700]/10">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 text-xs font-semibold bg-pink-500/20 text-pink-400 rounded-full border border-pink-500/30">
                                                Beauty
                                            </span>
                                        </div>

                                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-[#FFD700] transition-colors mb-2">Dermomamma</h3>
                                            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Strategia multicanale integrata Amazon e TikTok</p>
                                        </div>

                                        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFD700] transition-all duration-300">
                                            <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-[#0B223A] transition-colors" />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <Link href="/casistudio">
                                <Button size="lg" className="rounded-full bg-[#FFD700] px-10 text-[#0B223A] hover:bg-white font-bold transition-all duration-300 shadow-xl">
                                    Vedi tutti i progetti
                                </Button>
                            </Link>
                        </FadeIn>
                    </div>
                </Section>

                {/* CTA Section */}
                <Section className="py-20 bg-[#1a3a5a] border-t border-white/5">
                    <div className="container text-center">
                        <FadeIn>
                            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                                Pronto a scalare il tuo business?
                            </h2>
                            <p className="mb-8 text-gray-300 max-w-xl mx-auto">
                                Contattaci oggi per una consulenza gratuita e personalizzata.
                            </p>
                            <Link href="/contatti">
                                <Button size="lg" className="rounded-full bg-white px-8 text-[#0B223A] hover:bg-[#FFD700] font-bold transition-all duration-300">
                                    Parla con noi
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

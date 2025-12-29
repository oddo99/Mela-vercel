import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Marquee } from "@/components/ui/Marquee";
import { FadeIn } from "@/components/ui/FadeIn";
import { PartnersSlider } from "@/components/ui/PartnersSlider";
import { CertificationsSlider } from "@/components/ui/CertificationsSlider";
import { CaseStudyMap } from "@/components/ui/CaseStudyMap";
import {
  ShoppingCart,
  Globe,
  Users,
  Megaphone,
  Package,
  Award,
  ArrowRight
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Marketplace",
      description: "Gestione completa strategy, logistica e visibilità su Amazon e marketplace.",
      href: "/servizi/marketplace"
    },
    {
      icon: Globe,
      title: "E-commerce",
      description: "Sviluppo e ottimizzazione store proprietari per il massimo controllo del brand.",
      href: "/servizi/e-commerce"
    },
    {
      icon: Users,
      title: "Leads",
      description: "Strategie SEO e CRO per convertire visitatori in clienti fedeli.",
      href: "/servizi/leads"
    },
    {
      icon: Megaphone,
      title: "Advertising",
      description: "Campagne PPC e Social Ads ad alto ROI per scalare le vendite.",
      href: "/servizi/advertising"
    }
  ];

  const stats = [
    { label: "Clienti Serviti", value: "150+", icon: Users },
    { label: "Progetti Completati", value: "500+", icon: Package },
    { label: "Anni di Esperienza", value: "10+", icon: Award },
    { label: "Marketplace Gestiti", value: "20+", icon: ShoppingCart },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />

      <main>
        {/* Mega Hero Section */}
        <Section className="relative bg-[#0B223A] py-24 text-white lg:py-32">
          <FadeIn className="container relative z-10 text-center" duration={0.8}>
            <h1 className="mb-8 text-5xl font-black tracking-tight md:text-7xl lg:text-8xl leading-tight">
              MELA <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] to-[#B8860B]">SERVICES</span>
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl font-light text-gray-300 md:text-2xl">
              Acceleriamo la tua crescita digitale su Marketplace ed E-commerce.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contatti">
                <Button size="lg" className="h-14 rounded-full bg-[#FFD700] px-8 text-lg font-bold text-[#0B223A] hover:bg-[#FFC700] hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.5)]">
                  Inizia Ora
                </Button>
              </Link>
              <Link href="/servizi">
                <Button size="lg" variant="outline" className="h-14 rounded-full border-2 border-white/20 bg-transparent px-8 text-lg font-bold text-white hover:bg-white/10">
                  I Nostri Servizi
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Marquee - Positioned absolutely but visible due to removed overflow-hidden on Section */}
          <div className="absolute bottom-0 left-0 w-[110%] -translate-x-[5%] translate-y-1/2 rotate-[-2deg] bg-[#FFD700] py-4 shadow-xl z-20">
            <Marquee className="text-[#0B223A]" repeat={10} duration={120}>
              <span className="mx-8 text-2xl font-black uppercase tracking-widest">Marketplace</span>
              <span className="mx-8 text-2xl font-black uppercase tracking-widest">•</span>
              <span className="mx-8 text-2xl font-black uppercase tracking-widest">E-commerce</span>
              <span className="mx-8 text-2xl font-black uppercase tracking-widest">•</span>
              <span className="mx-8 text-2xl font-black uppercase tracking-widest">Growth</span>
              <span className="mx-8 text-2xl font-black uppercase tracking-widest">•</span>
              <span className="mx-8 text-2xl font-black uppercase tracking-widest">Advertising</span>
              <span className="mx-8 text-2xl font-black uppercase tracking-widest">•</span>
            </Marquee>
          </div>
        </Section>

        {/* Stats Section */}
        <Section className="bg-white py-32 pt-48">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-4">
              {stats.map((stat, index) => (
                <FadeIn key={index} delay={index * 0.1} className="text-center group">
                  <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0B223A]/5 text-[#FFD700] transition-all group-hover:scale-110 group-hover:bg-[#0B223A] group-hover:shadow-xl">
                    <stat.icon className="h-10 w-10" />
                  </div>
                  <div className="mb-2 text-5xl font-black text-[#0B223A]">{stat.value}</div>
                  <div className="text-lg font-medium text-gray-500 uppercase tracking-wide">{stat.label}</div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Section>

        {/* Partners Slider Section */}
        <PartnersSlider />

        {/* Premium Grid Services (Replaced Bento) */}
        <Section className="bg-gray-50 py-24">
          <div className="container">
            <FadeIn className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-[#0B223A] md:text-6xl">I Nostri Servizi</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Soluzioni integrate per ogni fase della tua crescita digitale.
              </p>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Link href={service.href} className="group h-full block">
                    <Card className="h-full p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0B223A]/10 border-t-4 border-transparent hover:border-[#FFD700]">
                      <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B223A]/5 text-[#0B223A] transition-colors group-hover:bg-[#0B223A] group-hover:text-[#FFD700]">
                        <service.icon className="h-8 w-8" />
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-[#0B223A]">{service.title}</h3>
                      <p className="mb-8 text-gray-600 leading-relaxed">{service.description}</p>
                      <span className="inline-flex items-center font-bold text-[#0B223A] group-hover:text-[#FFD700] transition-colors">
                        Scopri di più <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Card>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </Section>

        {/* Why Us Section */}
        <Section className="bg-white py-24">
          <div className="container">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <FadeIn direction="right">
                <h2 className="mb-6 text-4xl font-bold text-[#0B223A] md:text-6xl leading-tight">
                  Hai un buon prodotto? <br />
                  <span className="text-[#FFD700]">Noi lo facciamo vendere.</span>
                </h2>
                <p className="mb-8 text-xl text-gray-600 leading-relaxed">
                  Il nostro team unisce esperienza e innovazione, con professionisti esperti pronti a offrire soluzioni sicure e innovative.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Supporto 360°", desc: "Gestiamo tutti gli aspetti tecnici e digitali per una crescita completa." },
                    { title: "Innovazione AI", desc: "Utilizziamo tecnologie all'avanguardia per soluzioni performanti." },
                    { title: "Focus sul Risultato", desc: "Il tuo successo è il nostro unico KPI." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[#B8860B]">
                        <Award className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#0B223A]">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn direction="left" className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/generated/office-team.png"
                  alt="Mela Services Team"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B223A]/80 via-transparent to-transparent flex items-end p-10">
                  <span className="text-white/90 text-2xl font-bold">Il tuo partner per la crescita digitale</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* Certifications Slider Section */}
        <CertificationsSlider />

        {/* Technology Section */}
        <Section className="bg-[#0B223A] py-24 text-white">
          <div className="container">
            <FadeIn className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-6xl">Strumenti & Tecnologia</h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-300">
                Sfruttiamo dati e intelligenza artificiale per decisioni vincenti.
              </p>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "Dashboard Presentazioni", desc: "Monitora vendite, ricavi e ordini in un'unica vista." },
                { title: "Analisi Offerte", desc: "Ottimizza listini e pricing con dati dettagliati." },
                { title: "Reporting Finanziario", desc: "Visione chiara delle performance per decisioni informate." },
                { title: "Gestione Inventario", desc: "Analisi trend per evitare stock-out o eccessi." },
                { title: "Analisi Campagne", desc: "Monitoraggio avanzato di PPC e conversioni." },
                { title: "AI Insights", desc: "Raccomandazioni automatiche per ottimizzare le strategie." }
              ].map((tech, i) => (
                <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="mb-3 text-xl font-bold text-[#FFD700]">{tech.title}</h3>
                  <p className="text-gray-300">{tech.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </Section>

        {/* Case Studies Map Section */}
        <Section className="bg-gray-50 py-24">
          <div className="container">
            <FadeIn className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-[#0B223A] md:text-6xl">Casi Studio</h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-600">
                I nostri clienti nel mondo. Clicca su un pin per scoprire il caso studio.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <CaseStudyMap />
            </FadeIn>
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section className="bg-white py-24">
          <div className="container">
            <FadeIn className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-[#0B223A] md:text-6xl">Dicono di Noi</h2>
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { quote: "Mela Services ha trasformato il nostro e-commerce. Le vendite sono aumentate notevolmente.", author: "Massimo D'Ambrosio" },
                { quote: "Grazie a Mela Services, abbiamo ottimizzato la nostra presenza online e le conversioni sono cresciute.", author: "Roberto Panzironi" },
                { quote: "Un servizio eccezionale e una squadra dedicata. Non potremmo essere più felici!", author: "Paolo Dabbene" }
              ].map((testimonial, i) => (
                <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-gray-50 relative">
                  <div className="text-6xl text-[#FFD700] absolute top-4 left-6">"</div>
                  <p className="mb-6 text-lg text-gray-600 italic relative z-10 pt-6">{testimonial.quote}</p>
                  <div className="font-bold text-[#0B223A]">{testimonial.author}</div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Section>


        {/* Mega Footer CTA */}
        <Section className="bg-[#0B223A] py-24 text-center text-white">
          <FadeIn className="container">
            <h2 className="mb-8 text-4xl font-black md:text-6xl">
              PARLIAMO DEL <br />
              <span className="text-[#FFD700]">TUO PROGETTO?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300">
              Trasforma la tua visione in risultati concreti con il partner giusto.
            </p>
            <Link href="/contatti">
              <Button size="lg" className="h-16 rounded-full bg-white px-10 text-xl font-bold text-[#0B223A] hover:bg-gray-100 hover:scale-105 transition-transform">
                Contattaci Ora
              </Button>
            </Link>
          </FadeIn>
        </Section>

      </main>
      <Footer />
    </div>
  );
}

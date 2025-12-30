'use client';

import React from "react";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                {/* Hero Section */}
                <Section className="bg-gradient-to-br from-[#0B223A] to-[#1a3a5a] py-24 text-white lg:py-36">
                    <div className="container">
                        <div className="mx-auto max-w-4xl text-center">
                            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                                Contattaci per una <span className="text-[#FFD700]">consulenza gratuita</span>
                            </h1>
                            <p className="text-xl text-white/90 md:text-2xl">
                                Siamo qui per rispondere alle tue domande e supportarti nei tuoi progetti di marketing online
                            </p>
                        </div>
                    </div>
                </Section>

                {/* Contact Info & Form */}
                <Section className="bg-white py-20 lg:py-28">
                    <div className="container">
                        <div className="grid gap-12 lg:grid-cols-2">
                            {/* Contact Information */}
                            <div>
                                <h2 className="mb-8 text-2xl font-bold text-gray-900">Rimani in Contatto con noi</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-primary">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold text-gray-900">Telefono</h3>
                                            <a href="tel:+3901118837132" className="text-gray-600 hover:text-primary">
                                                011 1883 7132
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-primary">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold text-gray-900">Email</h3>
                                            <a href="mailto:info@mela.services" className="text-gray-600 hover:text-primary">
                                                info@mela.services
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-primary">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold text-gray-900">Indirizzo</h3>
                                            <p className="text-gray-600">
                                                Corso Dante 118<br />
                                                10126 – Torino, Italia
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="mb-4 font-semibold text-gray-900">Social Media</h3>
                                        <div className="flex gap-4">
                                            <a
                                                href="https://www.facebook.com/melasrl"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary transition-colors hover:bg-primary hover:text-white"
                                            >
                                                <Facebook className="h-5 w-5" />
                                            </a>
                                            <a
                                                href="https://www.instagram.com/mela.services/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary transition-colors hover:bg-primary hover:text-white"
                                            >
                                                <Instagram className="h-5 w-5" />
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/company/melaservices"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary transition-colors hover:bg-primary hover:text-white"
                                            >
                                                <Linkedin className="h-5 w-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form - GoHighLevel Embed */}
                            <div className="w-full max-w-lg mx-auto lg:mx-0">
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/form/UMuYDb5YtJ0wQfbrTPcP"
                                    style={{ width: '100%', height: '700px', border: 'none' }}
                                    id="inline-UMuYDb5YtJ0wQfbrTPcP"
                                    data-layout="{'id':'INLINE'}"
                                    data-trigger-type="alwaysShow"
                                    data-trigger-value=""
                                    data-activation-type="alwaysActivated"
                                    data-activation-value=""
                                    data-deactivation-type="neverDeactivate"
                                    data-deactivation-value=""
                                    data-form-name="Discover new Marketing Strategies"
                                    data-height="700"
                                    data-layout-iframe-id="inline-UMuYDb5YtJ0wQfbrTPcP"
                                    data-form-id="UMuYDb5YtJ0wQfbrTPcP"
                                    title="Discover new Marketing Strategies"
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Newsletter Section */}
                <Section className="bg-gradient-to-br from-[#0B223A] to-[#1a3a5a] py-20 text-white lg:py-28">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                                Iscriviti alla newsletter di Mela Services
                            </h2>
                            <p className="mb-10 text-xl text-white/90">
                                Ricevi aggiornamenti, consigli e novità sul mondo del digital marketing direttamente nella tua inbox.
                            </p>
                            <form className="mx-auto flex flex-col sm:flex-row max-w-md gap-4">
                                <input
                                    type="email"
                                    placeholder="La tua email"
                                    className="flex-1 rounded-full border-0 px-6 py-4 text-gray-900 placeholder-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                                />
                                <button
                                    type="submit"
                                    className="rounded-full bg-[#FFD700] px-8 py-4 font-semibold text-[#0B223A] transition-all hover:bg-[#FFC700] hover:shadow-xl w-full sm:w-auto"
                                >
                                    Iscriviti
                                </button>
                            </form>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
            {/* GoHighLevel Form Script */}
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
        </div>
    );
}

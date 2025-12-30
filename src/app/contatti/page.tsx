'use client';

import React, { useState } from "react";
import { Turnstile } from '@marsidev/react-turnstile';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaToken) {
            setStatus('error');
            setErrorMessage('Per favore completa la verifica CAPTCHA');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, captchaToken }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Errore durante l\'invio');
            }

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setCaptchaToken(null);

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Errore durante l\'invio del messaggio');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

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

                            {/* Contact Form */}
                            <div className="glass-card rounded-3xl border border-gray-100 p-8 shadow-xl">
                                <h2 className="mb-6 text-2xl font-bold text-gray-900">Invia un messaggio</h2>

                                {/* Success Message */}
                                {status === 'success' && (
                                    <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800">
                                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                                        <p className="text-sm font-medium">Messaggio inviato con successo! Ti risponderemo presto.</p>
                                    </div>
                                )}

                                {/* Error Message */}
                                {status === 'error' && (
                                    <div className="mb-6 flex items-center gap-3 rounded-lg bg-red-50 p-4 text-red-800">
                                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                                        <p className="text-sm font-medium">{errorMessage}</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                                            Nome *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={status === 'loading'}
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:bg-gray-50 disabled:cursor-not-allowed"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={status === 'loading'}
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:bg-gray-50 disabled:cursor-not-allowed"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                                            Telefono
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            disabled={status === 'loading'}
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:bg-gray-50 disabled:cursor-not-allowed"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                                            Messaggio *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            disabled={status === 'loading'}
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:bg-gray-50 disabled:cursor-not-allowed"
                                        />
                                    </div>

                                    {/* Cloudflare Turnstile CAPTCHA */}
                                    <div className="flex justify-center">
                                        <Turnstile
                                            siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
                                            onSuccess={(token) => setCaptchaToken(token)}
                                            onError={() => setCaptchaToken(null)}
                                            onExpire={() => setCaptchaToken(null)}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full rounded-full"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? 'Invio in corso...' : 'Invia messaggio'}
                                    </Button>
                                </form>
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
                            <form className="mx-auto flex max-w-md gap-4">
                                <input
                                    type="email"
                                    placeholder="La tua email"
                                    className="flex-1 rounded-full border-0 px-6 py-4 text-gray-900 placeholder-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                                />
                                <button
                                    type="submit"
                                    className="rounded-full bg-[#FFD700] px-8 py-4 font-semibold text-[#0B223A] transition-all hover:bg-[#FFC700] hover:shadow-xl"
                                >
                                    Iscriviti
                                </button>
                            </form>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}

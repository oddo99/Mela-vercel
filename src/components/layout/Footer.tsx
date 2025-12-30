import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="relative bg-[#0a1628] pt-20 pb-10 overflow-hidden font-sans border-t border-white/5">
            {/* Gradient Top Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />



            {/* Pattern Overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="1" fill="white"/></svg>')`
                }}
            />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column (Largest) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Logo */}
                        <Link href="/" className="inline-block group">
                            <div className="relative">
                                {/* Sun/Glow Effect starting from Logo */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD700]/10 blur-[90px] rounded-full -z-10 pointer-events-none" />

                                <Image
                                    src="/images/logo-mela.png"
                                    alt="Mela Services"
                                    width={160}
                                    height={50}
                                    className="h-12 md:h-14 lg:h-16 w-auto brightness-0 invert opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 -z-10 bg-[#FFD700]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </Link>

                        <p className="text-white/60 leading-relaxed max-w-sm">
                            Agenzia digitale specializzata in marketing online e strategie per l&apos;e-commerce. Trasformiamo le tue idee in successi concreti nel mondo digitale.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/melasrl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/5 hover:border-[#FFD700]/50 hover:bg-[#FFD700]/10 transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-white/70 group-hover:text-[#FFD700] transition-colors" />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/mela.services/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/5 hover:border-[#FFD700]/50 hover:bg-[#FFD700]/10 transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-white/70 group-hover:text-[#FFD700] transition-colors" />
                            </a>

                            {/* TikTok (Custom SVG) */}
                            <a
                                href="https://www.tiktok.com/@melaservices"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/5 hover:border-[#FFD700]/50 hover:bg-[#FFD700]/10 transition-all duration-300"
                                aria-label="TikTok"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 text-white/70 group-hover:text-[#FFD700] transition-colors"
                                >
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/melaservices"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/5 hover:border-[#FFD700]/50 hover:bg-[#FFD700]/10 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 text-white/70 group-hover:text-[#FFD700] transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
                        {/* Servizi */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-gradient-to-b from-[#FFD700] to-[#FFA500] rounded-full" />
                                Servizi
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/servizi" className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FFD700] transition-colors" />
                                        Tutti i servizi
                                    </Link>
                                </li>
                                {['Marketplace', 'E-commerce', 'Leads', 'Advertising'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/servizi/${item.toLowerCase().replace(' ', '-')}`}
                                            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FFD700] transition-colors" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Azienda */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-gradient-to-b from-[#FFD700] to-[#FFA500] rounded-full" />
                                Azienda
                            </h3>
                            <ul className="space-y-4">
                                {['Home', 'Casi Studio', 'Blog', 'About', 'Contatti'].map((item) => {
                                    const href = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`;
                                    return (
                                        <li key={item}>
                                            <Link
                                                href={href}
                                                className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FFD700] transition-colors" />
                                                {item}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Contatti */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-gradient-to-b from-[#FFD700] to-[#FFA500] rounded-full" />
                                Contatti
                            </h3>
                            <div className="space-y-5">
                                <a
                                    href="https://maps.app.goo.gl/1gvGqvevWRLjELpF7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <div className="flex items-start gap-3 text-white/60 group-hover:text-white transition-colors">
                                        <MapPin className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                                        <span className="text-sm">Corso Dante 118, 10126<br />Torino, Italia</span>
                                    </div>
                                </a>

                                <a href="mailto:info@mela.services" className="block group">
                                    <div className="flex items-center gap-3 text-white/60 group-hover:text-white transition-colors">
                                        <Mail className="w-5 h-5 text-[#FFD700] shrink-0" />
                                        <span className="text-sm">info@mela.services</span>
                                    </div>
                                </a>

                                <a href="tel:+3901118837132" className="block group">
                                    <div className="flex items-center gap-3 text-white/60 group-hover:text-white transition-colors">
                                        <Phone className="w-5 h-5 text-[#FFD700] shrink-0" />
                                        <span className="text-sm">+39 011 1883 7132</span>
                                    </div>
                                </a>

                                {/* CTA Button */}
                                <div className="pt-2">
                                    <Link href="/contatti" className="inline-block">
                                        <button className="relative px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 hover:border-[#FFD700]/30 transition-all duration-300 group">
                                            Lavora con noi
                                            <ArrowRight className="inline-block ml-2 w-4 h-4 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">
                        &copy; 2025 Mela Services. Tutti i diritti riservati.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="https://www.iubenda.com/privacy-policy/36360556"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/40 hover:text-[#FFD700] transition-colors relative group"
                        >
                            Privacy Policy
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFD700] transition-all duration-300 group-hover:w-full" />
                        </a>
                        <Link
                            href="/termini-e-condizioni"
                            className="text-sm text-white/40 hover:text-[#FFD700] transition-colors relative group"
                        >
                            Termini e Condizioni
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFD700] transition-all duration-300 group-hover:w-full" />
                        </Link>
                        <a
                            href="https://www.iubenda.com/privacy-policy/36360556/cookie-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/40 hover:text-[#FFD700] transition-colors relative group"
                        >
                            Cookie Policy
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFD700] transition-all duration-300 group-hover:w-full" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

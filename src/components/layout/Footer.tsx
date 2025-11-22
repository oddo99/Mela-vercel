import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#0B223A] px-6 pb-0 pt-16 text-white md:px-10 lg:px-16">
            {/* Decorative background pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>')`
                }}
            />

            {/* SVG Gradients for social icons */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#f09433', stopOpacity: 1 }} />
                        <stop offset="25%" style={{ stopColor: '#e6683c', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: '#dc2743', stopOpacity: 1 }} />
                        <stop offset="75%" style={{ stopColor: '#cc2366', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#bc1888', stopOpacity: 1 }} />
                    </linearGradient>
                    <linearGradient id="tiktok-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#00f2ea', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: '#ff0050', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#ee1d52', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
            </svg>

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Main footer content */}
                <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    {/* About Column */}
                    <div className="lg:pr-5">
                        <img
                            src="https://mela.services/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/05/logo-mela-x2.png.webp"
                            alt="Mela Services"
                            className="mb-5 w-32"
                            width="130"
                            height="auto"
                        />
                        <p className="mb-6 text-base leading-relaxed opacity-95">
                            Agenzia digitale specializzata in marketing online e strategie per l&apos;e-commerce. Trasformiamo le tue idee in successi concreti nel mondo digitale.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/melasrl"
                                className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/12 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#FFD700] hover:shadow-[0_10px_25px_rgba(255,215,0,0.3)]"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="transition-colors group-hover:text-[#0B223A]">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/mela.services/"
                                className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/12 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#FFD700] hover:shadow-[0_10px_25px_rgba(255,215,0,0.3)]"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="transition-colors group-hover:text-[#0B223A]">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.tiktok.com/@melaservices"
                                className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/12 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#FFD700] hover:shadow-[0_10px_25px_rgba(255,215,0,0.3)]"
                                aria-label="TikTok"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="transition-colors group-hover:text-[#0B223A]">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/melaservices"
                                className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/12 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#FFD700] hover:shadow-[0_10px_25px_rgba(255,215,0,0.3)]"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="transition-colors group-hover:text-[#0B223A]">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="relative mb-6 inline-block text-2xl font-bold tracking-tight">
                            Servizi
                            <span className="absolute -bottom-2.5 left-0 h-1 w-12 rounded bg-[#FFD700]" />
                        </h3>
                        <ul className="space-y-3.5">
                            <li>
                                <Link href="/servizi" className="group relative inline-block text-base opacity-90 transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700] hover:opacity-100">
                                    Servizi
                                </Link>
                            </li>
                            <li>
                                <Link href="/servizi/marketplace" className="group relative inline-block text-base opacity-90 transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700] hover:opacity-100">
                                    Marketplace
                                </Link>
                            </li>
                            <li>
                                <Link href="/servizi/e-commerce" className="group relative inline-block text-base opacity-90 transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700] hover:opacity-100">
                                    E-commerce
                                </Link>
                            </li>
                            <li>
                                <Link href="/servizi/leads" className="group relative inline-block text-base opacity-90 transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700] hover:opacity-100">
                                    Leads
                                </Link>
                            </li>
                            <li>
                                <Link href="/servizi/advertising" className="group relative inline-block text-base opacity-90 transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700] hover:opacity-100">
                                    Advertising
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="relative mb-6 inline-block text-2xl font-bold tracking-tight">
                            Azienda
                            <span className="absolute -bottom-2.5 left-0 h-1 w-12 rounded bg-[#FFD700]" />
                        </h3>
                        <ul className="space-y-3.5">
                            <li>
                                <Link href="/" className="group relative inline-block text-base opacity-90 transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700] hover:opacity-100">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/casistudio" className="group relative inline-block text-base opacity-90 transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700] hover:opacity-100">
                                    Casi Studio
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="group relative inline-block text-base opacity-90 transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700] hover:opacity-100">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="group relative inline-block text-base opacity-90 transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700] hover:opacity-100">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contatti" className="group relative inline-block text-base opacity-90 transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700] hover:opacity-100">
                                    Contatti
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contacts Column */}
                    <div>
                        <h3 className="relative mb-6 inline-block text-2xl font-bold tracking-tight">
                            Contatti
                            <span className="absolute -bottom-2.5 left-0 h-1 w-12 rounded bg-[#FFD700]" />
                        </h3>
                        <div className="space-y-3.5">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFD700]" />
                                <a
                                    href="https://maps.app.goo.gl/1gvGqvevWRLjELpF7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base leading-relaxed opacity-90 transition-colors hover:text-[#FFD700] hover:opacity-100"
                                >
                                    Corso Dante 118, 10126<br />Torino, Italia
                                </a>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFD700]" />
                                <a
                                    href="mailto:info@mela.services"
                                    className="text-base leading-relaxed opacity-90 transition-colors hover:text-[#FFD700] hover:opacity-100"
                                >
                                    info@mela.services
                                </a>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFD700]" />
                                <a
                                    href="tel:+3901118837132"
                                    className="text-base leading-relaxed opacity-90 transition-colors hover:text-[#FFD700] hover:opacity-100"
                                >
                                    +39 011 1883 7132
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-wrap items-center justify-between gap-5 py-6">
                    <p className="text-[15px] opacity-80">
                        &copy; 2025 Mela Services. Tutti i diritti riservati.
                    </p>
                    <div className="flex flex-wrap gap-7">
                        <Link
                            href="/privacy-policy"
                            className="group relative text-[15px] opacity-80 transition-all duration-300 hover:text-[#FFD700] hover:opacity-100"
                        >
                            Privacy Policy
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#FFD700] transition-all duration-300 group-hover:w-full" />
                        </Link>
                        <Link
                            href="/termini-e-condizioni"
                            className="group relative text-[15px] opacity-80 transition-all duration-300 hover:text-[#FFD700] hover:opacity-100"
                        >
                            Termini e Condizioni
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#FFD700] transition-all duration-300 group-hover:w-full" />
                        </Link>
                        <Link
                            href="/cookie-policy"
                            className="group relative text-[15px] opacity-80 transition-all duration-300 hover:text-[#FFD700] hover:opacity-100"
                        >
                            Cookie Policy
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#FFD700] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

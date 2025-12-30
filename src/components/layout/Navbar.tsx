'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
    variant?: 'light' | 'dark';
}

const servicesLinks = [
    {
        href: '/servizi/marketplace',
        label: 'Marketplace',
        description: 'Vendi su Amazon, eBay e altri marketplace'
    },
    {
        href: '/servizi/e-commerce',
        label: 'E-commerce',
        description: 'Crea il tuo negozio online su misura'
    },
    {
        href: '/servizi/leads',
        label: 'Lead Generation',
        description: 'Acquisisci nuovi clienti qualificati'
    },
    {
        href: '/servizi/advertising',
        label: 'Advertising',
        description: 'Campagne pubblicitarie performanti'
    },
];

export const Navbar = ({ variant = 'light' }: NavbarProps) => {
    const isDark = variant === 'dark';
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Always show solid background for consistent appearance
    const navBgClass = 'bg-[#0a1628]/95 backdrop-blur-xl border-b border-white/5';

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${navBgClass}`}>
            {/* Gradient line at top when scrolled */}
            <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

            <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <Image
                            src="/images/logo-mela.png"
                            alt="Mela Services"
                            width={180}
                            height={60}
                            priority
                            className="h-14 md:h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 -z-10 bg-[#FFD700]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-1 md:flex">
                    <Link
                        href="/"
                        className="relative px-4 py-2 text-lg font-medium text-white/80 hover:text-white transition-all duration-300 group"
                    >
                        Home
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] group-hover:w-3/4 transition-all duration-300" />
                    </Link>

                    {/* Services Mega Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                        <button
                            className="relative flex items-center gap-1.5 px-4 py-2 text-lg font-medium text-white/80 hover:text-white transition-all duration-300 group"
                        >
                            Servizi
                            <ChevronDown className={`h-4 w-4 transition-all duration-300 ${servicesDropdownOpen ? 'rotate-180 text-[#FFD700]' : ''}`} />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] group-hover:w-3/4 transition-all duration-300" />
                        </button>

                        {/* Bridge to prevent closing when moving from button to menu */}
                        {servicesDropdownOpen && (
                            <div className="absolute top-full left-0 w-full h-6 bg-transparent" />
                        )}

                        {/* Mega Dropdown Menu */}
                        <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-300 pointer-events-none ${servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="relative w-[480px] rounded-2xl p-1 bg-gradient-to-b from-white/10 to-white/5 pointer-events-auto">
                                {/* Inner container with glass effect */}
                                <div className="rounded-xl bg-[#0a1628]/95 backdrop-blur-xl p-4 shadow-2xl">
                                    {/* Header */}
                                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                                        <Sparkles className="h-4 w-4 text-[#FFD700]" />
                                        <span className="text-sm font-semibold text-white/60 uppercase tracking-wider">I Nostri Servizi</span>
                                    </div>

                                    {/* Services Grid */}
                                    <div className="grid grid-cols-2 gap-2">
                                        {servicesLinks.map((service) => (
                                            <Link
                                                key={service.href}
                                                href={service.href}
                                                className="group/item flex flex-col gap-1 p-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                                            >
                                                <span className="text-lg font-semibold text-white group-hover/item:text-[#FFD700] transition-colors duration-200">
                                                    {service.label}
                                                </span>
                                                <span className="text-sm text-white/50 group-hover/item:text-white/70 transition-colors duration-200">
                                                    {service.description}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Footer CTA */}
                                    <Link
                                        href="/servizi"
                                        className="group/link flex items-center justify-between mt-4 pt-3 border-t border-white/10"
                                    >
                                        <span className="text-lg font-medium text-[#FFD700]">Scopri tutti i servizi</span>
                                        <ArrowRight className="h-4 w-4 text-[#FFD700] group-hover/link:translate-x-1 transition-transform duration-200" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/casistudio"
                        className="relative px-4 py-2 text-lg font-medium text-white/80 hover:text-white transition-all duration-300 group"
                    >
                        Casi Studio
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] group-hover:w-3/4 transition-all duration-300" />
                    </Link>

                    <Link
                        href="/about"
                        className="relative px-4 py-2 text-lg font-medium text-white/80 hover:text-white transition-all duration-300 group"
                    >
                        Chi Siamo
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] group-hover:w-3/4 transition-all duration-300" />
                    </Link>

                    {/* CTA Button */}
                    <Link href="/contatti" className="ml-4">
                        <button className="relative group/btn px-6 py-2.5 rounded-full font-semibold text-lg overflow-hidden transition-transform duration-300 hover:scale-110">
                            {/* Gradient background */}
                            <span className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
                            {/* Shine effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                            {/* Text */}
                            <span className="relative text-[#0a1628] font-bold">Parla con noi</span>
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden relative p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-6">
                        <Menu className={`absolute inset-0 h-6 w-6 text-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
                        <X className={`absolute inset-0 h-6 w-6 text-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-[#0a1628]/98 backdrop-blur-xl border-t border-white/5">
                    <div className="container mx-auto px-4 py-6 space-y-2">
                        <Link
                            href="/"
                            className="block py-3 px-4 rounded-lg text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>

                        {/* Mobile Services Accordion */}
                        <div className="rounded-lg overflow-hidden">
                            <button
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                className="flex items-center justify-between w-full py-3 px-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200"
                            >
                                <span>Servizi</span>
                                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-[#FFD700]' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
                                <div className="pl-4 pr-2 py-2 space-y-1 bg-white/5 rounded-b-lg mx-2">
                                    {servicesLinks.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="block py-2.5 px-3 rounded-md text-lg text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="font-medium">{service.label}</span>
                                            <span className="block text-sm text-white/40 mt-0.5">{service.description}</span>
                                        </Link>
                                    ))}
                                    <Link
                                        href="/servizi"
                                        className="flex items-center gap-2 py-2.5 px-3 text-lg font-semibold text-[#FFD700]"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Tutti i Servizi
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/casistudio"
                            className="block py-3 px-4 rounded-lg text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Casi Studio
                        </Link>
                        <Link
                            href="/about"
                            className="block py-3 px-4 rounded-lg text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Chi Siamo
                        </Link>

                        {/* Mobile CTA */}
                        <div className="pt-4">
                            <Link href="/contatti" onClick={() => setMobileMenuOpen(false)}>
                                <button className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0a1628] hover:shadow-lg hover:shadow-[#FFD700]/20 hover:scale-105 transition-all duration-300">
                                    Parla con noi
                                </button>
                            </Link>
                        </div>

                        {/* Contact info */}
                        <div className="pt-4 mt-4 border-t border-white/10">
                            <p className="text-xs text-white/40 text-center">
                                📧 info@mela.services • 📞 +39 XXX XXX XXXX
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

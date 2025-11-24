'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
    variant?: 'light' | 'dark';
}

const servicesLinks = [
    { href: '/servizi/marketplace', label: 'Marketplace' },
    { href: '/servizi/e-commerce', label: 'E-commerce' },
    { href: '/servizi/leads', label: 'Leads' },
    { href: '/servizi/advertising', label: 'Advertising' },
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
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // For dark variant pages, always show solid background
    // For light variant pages, show transparent at top, dark when scrolled
    const isTransparent = !isDark && !scrolled;
    const navBgClass = isTransparent
        ? 'bg-transparent border-transparent'
        : 'bg-[#0B223A] border-b border-white/10 shadow-lg backdrop-blur-md';

    // Text is always white for this design
    const textColorClass = 'text-white';

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${navBgClass}`}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center">
                    <img
                        src="https://mela.services/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/05/logo-mela-x2.png.webp"
                        alt="Mela Services"
                        className="h-12 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link href="/" className={`text-sm font-medium transition-colors ${textColorClass} hover:text-[#FFD700]`}>
                        Home
                    </Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                        <button
                            className={`flex items-center gap-1 text-sm font-medium transition-colors ${textColorClass} hover:text-[#FFD700]`}
                        >
                            Servizi
                            <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {servicesDropdownOpen && (
                            <div className="absolute left-0 top-full w-56 pt-2">
                                <div className="rounded-lg shadow-xl border bg-white border-gray-200">
                                    <div className="py-2">
                                        {servicesLinks.map((service) => (
                                            <Link
                                                key={service.href}
                                                href={service.href}
                                                className="block px-4 py-2 text-sm transition-colors text-gray-700 hover:bg-gray-50 hover:text-[#0B223A]"
                                            >
                                                {service.label}
                                            </Link>
                                        ))}
                                        <div className="mx-2 my-1 border-t border-gray-200" />
                                        <Link
                                            href="/servizi"
                                            className="block px-4 py-2 text-sm font-medium transition-colors text-[#0B223A] hover:bg-gray-50"
                                        >
                                            Tutti i Servizi →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/casistudio" className={`text-sm font-medium transition-colors ${textColorClass} hover:text-[#FFD700]`}>
                        Casi Studio
                    </Link>
                    <Link href="/about" className={`text-sm font-medium transition-colors ${textColorClass} hover:text-[#FFD700]`}>
                        About
                    </Link>
                    <Link href="/contatti">
                        <Button size="default" className="bg-[#FFD700] text-[#0B223A] hover:bg-white">Contattaci</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className={`h-6 w-6 ${textColorClass}`} />
                    ) : (
                        <Menu className={`h-6 w-6 ${textColorClass}`} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/10 bg-[#0B223A]">
                    <div className="container mx-auto px-4 py-4 space-y-2">
                        <Link
                            href="/"
                            className="block py-2 text-sm font-medium text-gray-300 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>

                        {/* Mobile Services Accordion */}
                        <div>
                            <button
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-300 hover:text-white"
                            >
                                Servizi
                                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {mobileServicesOpen && (
                                <div className="pl-4 mt-1 space-y-1">
                                    {servicesLinks.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="block py-2 text-sm text-gray-400 hover:text-white"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {service.label}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/servizi"
                                        className="block py-2 text-sm font-medium text-[#FFD700] hover:text-white"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Tutti i Servizi →
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/casistudio"
                            className="block py-2 text-sm font-medium text-gray-300 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Casi Studio
                        </Link>
                        <Link
                            href="/about"
                            className="block py-2 text-sm font-medium text-gray-300 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link href="/contatti" onClick={() => setMobileMenuOpen(false)}>
                            <Button size="default" className="w-full mt-4 bg-[#FFD700] text-[#0B223A] hover:bg-white">Contattaci</Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu } from 'lucide-react';

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="text-2xl font-bold text-[#0B223A]">
                    Mela<span className="text-[#FFD700]">.</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <Link href="/servizi" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#0B223A]">
                        Servizi
                    </Link>
                    <Link href="/casistudio" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#0B223A]">
                        Casi Studio
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#0B223A]">
                        About
                    </Link>
                    <Link href="/contatti">
                        <Button size="default">Contattaci</Button>
                    </Link>
                </div>

                <button className="md:hidden">
                    <Menu className="h-6 w-6 text-[#0B223A]" />
                </button>
            </div>
        </nav>
    );
};

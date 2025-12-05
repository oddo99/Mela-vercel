'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
    id: string;
    name: string;
    country: string;
    href: string;
    tags: string[];
    position: { left: string; top: string };
}

const caseStudies: CaseStudy[] = [
    {
        id: 'grifos',
        name: 'Grifos',
        country: 'USA',
        href: '/casistudio/grifos',
        tags: ['Amazon', 'International'],
        position: { left: '18%', top: '42%' }
    },
    {
        id: 'formularity',
        name: 'Formularity',
        country: 'UK',
        href: '/casistudio/formularity',
        tags: ['E-commerce', 'UK Market'],
        position: { left: '46%', top: '28%' }
    },
    {
        id: 'pegasium',
        name: 'Pegasium',
        country: 'Francia',
        href: '/casistudio/pegasium',
        tags: ['Marketplace', 'France'],
        position: { left: '47%', top: '35%' }
    },
    {
        id: 'life120',
        name: 'Life120',
        country: 'Germania',
        href: '/casistudio/life120',
        tags: ['E-commerce', 'Strategy'],
        position: { left: '50%', top: '30%' }
    },
    {
        id: 'valentiargenti',
        name: 'Valenti',
        country: 'Italia',
        href: '/casistudio/valentiargenti',
        tags: ['Amazon', 'Made in Italy'],
        position: { left: '51%', top: '38%' }
    },
    {
        id: 'dermomamma',
        name: 'Dermomamma',
        country: 'Spagna',
        href: '/casistudio/dermomamma',
        tags: ['Marketplace', 'Healthcare'],
        position: { left: '44%', top: '40%' }
    }
];

export const CaseStudyMap = () => {
    const [activePin, setActivePin] = useState<string | null>(null);

    // Keep card visible when hovering over it
    const handleCardMouseEnter = () => {
        // Don't clear activePin when entering the card
    };

    const handleCardMouseLeave = () => {
        setActivePin(null);
    };

    return (
        <div className="w-full">
            {/* Map Container */}
            <div
                className="relative w-full aspect-[2/1] max-w-6xl mx-auto"
                onMouseLeave={() => setActivePin(null)}
            >
                {/* World Map Background */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                        src="/images/world-map.png"
                        alt="World Map"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Pins */}
                {caseStudies.map((study) => (
                    <div
                        key={study.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                        style={{ left: study.position.left, top: study.position.top }}
                        onMouseEnter={() => setActivePin(study.id)}
                    >
                        {/* Pin with pulse animation */}
                        <Link href={study.href} className="block relative group">
                            {/* Pulse effect */}
                            <div className="absolute inset-0 -m-2 rounded-full bg-[#8B5CF6]/30 animate-ping" />
                            <div className="absolute inset-0 -m-1 rounded-full bg-[#8B5CF6]/50 animate-pulse" />

                            {/* Pin marker */}
                            <div className="relative w-6 h-6 rounded-full bg-[#8B5CF6] border-2 border-white shadow-lg 
                            flex items-center justify-center cursor-pointer
                            group-hover:bg-[#FFD700] group-hover:scale-125 transition-all duration-300">
                                <div className="w-2 h-2 rounded-full bg-white" />
                            </div>

                            {/* Tooltip Label */}
                            <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
                             px-3 py-1 bg-[#0B223A] text-white text-sm font-medium 
                             rounded-lg whitespace-nowrap shadow-xl
                             transition-all duration-300 pointer-events-none
                             ${activePin === study.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                {study.name} – {study.country}
                                <div className="absolute left-1/2 -translate-x-1/2 top-full 
                              border-4 border-transparent border-t-[#0B223A]" />
                            </div>
                        </Link>
                    </div>
                ))}

                {/* Active Case Study Card - Stays visible when hovering */}
                {activePin && (
                    <div
                        className="absolute right-4 top-4 w-72 bg-white rounded-xl shadow-2xl 
                      border border-gray-100 overflow-hidden z-20
                      animate-fade-in"
                        onMouseEnter={handleCardMouseEnter}
                        onMouseLeave={handleCardMouseLeave}
                    >
                        {caseStudies.filter(s => s.id === activePin).map(study => (
                            <Link href={study.href} key={study.id} className="block group">
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold text-[#0B223A]">{study.name}</h3>
                                        <span className="text-sm text-gray-500">{study.country}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {study.tags.map((tag, i) => (
                                            <span key={i} className="px-2 py-1 text-xs font-medium 
                                             bg-gray-100 text-gray-600 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-[#0B223A] font-semibold 
                                 group-hover:text-[#FFD700] transition-colors 
                                 flex items-center text-sm">
                                        Leggi il Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Mobile: List of Case Studies */}
            <div className="md:hidden mt-8 grid gap-4">
                {caseStudies.map((study) => (
                    <Link
                        key={study.id}
                        href={study.href}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md 
                     hover:shadow-lg transition-shadow group"
                    >
                        <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center 
                          group-hover:bg-[#FFD700] transition-colors">
                            <div className="w-3 h-3 rounded-full bg-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-[#0B223A]">{study.name}</h3>
                            <p className="text-sm text-gray-500">{study.country}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#FFD700] transition-colors" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

'use client';

import React from 'react';
import Image from 'next/image';

const certifications = [
    {
        name: 'Partner 1',
        url: 'https://staging.mela.services/wp-content/uploads/2025/12/Progetto-senza-titolo-2-150x150-removebg-preview.png'
    },
    {
        name: 'Partner 2',
        url: 'https://staging.mela.services/wp-content/uploads/2025/12/Progetto-senza-titolo-1-1-150x150-removebg-preview.png'
    },
    {
        name: 'Partner 3',
        url: 'https://staging.mela.services/wp-content/uploads/2025/10/Progetto-senza-titolo-1-copia-2-150x150.png'
    },
    {
        name: 'Partner 4',
        url: 'https://staging.mela.services/wp-content/uploads/2025/12/Progetto-senza-titolo-1-copia-6-150x150-removebg-preview.png'
    },
    {
        name: 'Partner 5',
        url: 'https://staging.mela.services/wp-content/uploads/2025/12/Progetto-senza-titolo-1-2-150x150-removebg-preview.png'
    },
    {
        name: 'Partner 6',
        url: 'https://staging.mela.services/wp-content/uploads/2025/10/Progetto-senza-titolo-1-copia-3-150x150.png'
    },
    {
        name: 'Partner 7',
        url: 'https://staging.mela.services/wp-content/uploads/2025/10/Progetto-senza-titolo-1-copia-4-150x150.png'
    },
    {
        name: 'Partner 8',
        url: 'https://staging.mela.services/wp-content/uploads/2025/10/Progetto-senza-titolo-1-copia-5-150x150.png'
    }
];

export const CertificationsSlider = () => {
    return (
        <div className="w-full overflow-hidden bg-gray-50 py-16">
            <div className="container mx-auto mb-12">
                <h2 className="text-center text-4xl font-bold text-[#0B223A] md:text-5xl">
                    Partner e Certificazioni
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
                    Le nostre competenze certificate dai leader del settore
                </p>
            </div>

            <div className="relative">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent" />
                <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent" />

                {/* Scrolling container */}
                <div className="flex w-full items-center">
                    {/* First set of logos */}
                    <div className="flex animate-scroll-infinite gap-16 px-8 items-center" style={{ animationDuration: '20s' }}>
                        {certifications.map((cert, index) => (
                            <div
                                key={`set1-${index}`}
                                className="flex h-32 w-48 flex-shrink-0 items-center justify-center self-center"
                            >
                                <Image
                                    src={cert.url}
                                    alt={cert.name}
                                    width={150}
                                    height={150}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="flex animate-scroll-infinite gap-16 px-8 items-center" style={{ animationDuration: '20s' }}>
                        {certifications.map((cert, index) => (
                            <div
                                key={`set2-${index}`}
                                className="flex h-32 w-48 flex-shrink-0 items-center justify-center self-center"
                            >
                                <Image
                                    src={cert.url}
                                    alt={cert.name}
                                    width={150}
                                    height={150}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

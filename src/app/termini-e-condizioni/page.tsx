import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                <Section className="bg-gradient-to-br from-[#0B223A] to-[#1a3a5a] py-24 text-white lg:py-36">
                    <div className="container">
                        <div className="mx-auto max-w-4xl text-center">
                            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                                Termini e <span className="text-[#FFD700]">Condizioni</span>
                            </h1>
                        </div>
                    </div>
                </Section>

                <Section className="py-24 lg:py-32">
                    <div className="container">
                        <div className="mx-auto max-w-4xl prose prose-lg">
                            <p className="text-gray-600 text-center">
                                Termini e condizioni in fase di aggiornamento.
                            </p>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}

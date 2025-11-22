import React from 'react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const Hero = () => {
    return (
        <Section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gray-50 pt-32">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-1/4 -top-1/4 h-[1000px] w-[1000px] rounded-full bg-blue-100/30 blur-3xl" />
                <div className="absolute -bottom-1/4 -right-1/4 h-[1000px] w-[1000px] rounded-full bg-purple-100/30 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-primary md:text-7xl">
                    Fai crescere il tuo business con <span className="gradient-text">Mela Services</span>
                </h1>
                <p className="mb-10 text-xl text-gray-600 md:text-2xl">
                    Consulenze strategiche per Marketplace, E-commerce, Leads e Advertising.
                    Trasformiamo la tua visione in risultati misurabili.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="w-full sm:w-auto">
                        Scopri i nostri servizi
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        Contattaci
                    </Button>
                </div>
            </div>
        </Section>
    );
};

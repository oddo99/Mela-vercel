import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Construction } from "lucide-react";
import Link from "next/link";

export default function DamcoCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Section className="relative flex min-h-[60vh] items-center justify-center bg-[#0B223A] text-white">
                <div className="container text-center">
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">Damco</h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-300">
                        Case Study in lavorazione.
                    </p>
                </div>
            </Section>

            <Section className="py-24 text-center">
                <div className="container">
                    <p className="text-xl text-gray-600 mb-8">
                        Stiamo finalizzando i contenuti per questo caso studio. Torna presto per scoprire come abbiamo aiutato Damco.
                    </p>
                    <Link href="/">
                        <Button>Torna alla Home</Button>
                    </Link>
                </div>
            </Section>
            <Footer />
        </div>
    );
}

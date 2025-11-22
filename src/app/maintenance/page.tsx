import React from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Construction, Mail } from "lucide-react";
import Link from "next/link";

export default function MaintenancePage() {
    return (
        <div className="min-h-screen bg-[#0B223A] flex items-center justify-center p-4 text-white">
            <FadeIn className="max-w-2xl w-full text-center space-y-8">
                <div className="flex justify-center mb-8">
                    <div className="h-24 w-24 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700] animate-pulse">
                        <Construction className="h-12 w-12" />
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                    STIAMO <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#B8860B]">
                        AGGIORNANDO
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
                    Il sito è attualmente in manutenzione per migliorare la tua esperienza.
                    Torneremo online a breve con tante novità!
                </p>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="mailto:info@melaservices.it">
                        <Button size="lg" className="rounded-full bg-[#FFD700] text-[#0B223A] hover:bg-[#FFC700] font-bold px-8">
                            <Mail className="mr-2 h-5 w-5" />
                            Contattaci
                        </Button>
                    </Link>
                </div>

                <div className="pt-12 text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Mela Services. Tutti i diritti riservati.
                </div>
            </FadeIn>
        </div>
    );
}

'use client';

import React, { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Script from 'next/script';

export default function PrivacyPolicyPage() {
    useEffect(() => {
        // Force reload iubenda script if already loaded
        if (window._iub) {
            window._iub.cons_instructions = window._iub.cons_instructions || [];
        }
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* iubenda Script */}
            <Script
                id="iubenda-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function (w,d) {
                            var loader = function () {
                                var s = d.createElement("script"), 
                                    tag = d.getElementsByTagName("script")[0]; 
                                s.src="https://cdn.iubenda.com/iubenda.js"; 
                                tag.parentNode.insertBefore(s,tag);
                            }; 
                            if(w.addEventListener){
                                w.addEventListener("load", loader, false);
                            }else if(w.attachEvent){
                                w.attachEvent("onload", loader);
                            }else{
                                w.onload = loader;
                            }
                        })(window, document);
                    `
                }}
            />

            <main className="py-24 lg:py-32">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <a
                            href="https://www.iubenda.com/privacy-policy/36360556"
                            className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
                            title="Privacy Policy"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

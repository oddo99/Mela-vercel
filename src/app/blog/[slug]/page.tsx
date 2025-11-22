import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import { getPostBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function SinglePostPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Article Header */}
            <Section className="bg-[#0B223A] text-white py-20 relative overflow-hidden">
                {post.featuredImage?.node?.sourceUrl && (
                    <div className="absolute inset-0 z-0 opacity-20">
                        <img
                            src={post.featuredImage.node.sourceUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                <div className="container relative z-10">
                    <Link href="/blog" className="inline-flex items-center text-gray-300 hover:text-[#FFD700] mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Torna al Blog
                    </Link>
                    <h1 className="mb-6 text-4xl font-bold md:text-6xl leading-tight max-w-4xl">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-gray-300">
                        <span className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-[#FFD700]" />
                            {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        {post.author?.node?.name && (
                            <span className="flex items-center gap-2">
                                <User className="h-5 w-5 text-[#FFD700]" />
                                {post.author.node.name}
                            </span>
                        )}
                    </div>
                </div>
            </Section>

            {/* Article Content */}
            <Section className="py-20">
                <div className="container max-w-4xl">
                    <div
                        className="prose prose-lg prose-headings:text-[#0B223A] prose-a:text-[#0B223A] prose-strong:text-[#0B223A] max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <Link href="/contatti">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-bold text-[#0B223A] mb-4">Ti è piaciuto questo articolo?</h3>
                                <p className="text-gray-600 mb-6">
                                    Se vuoi approfondire come possiamo aiutare la tua azienda a crescere su Amazon, contattaci per una consulenza gratuita.
                                </p>
                                <Button className="bg-[#0B223A] text-white hover:bg-[#1a3a5a]">
                                    Parla con un Esperto
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}

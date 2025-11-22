import React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/lib/wordpress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// This ensures the page is revalidated every 60 seconds
export const revalidate = 60;

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                {/* Hero Section */}
                <Section className="bg-[#0B223A] text-white py-24 lg:py-36">
                    <div className="container text-center">
                        <h1 className="mb-6 text-5xl font-bold md:text-7xl">Blog & News</h1>
                        <p className="mx-auto max-w-2xl text-xl text-gray-300">
                            Approfondimenti su E-commerce, Marketplace e Strategie Digitali.
                        </p>
                    </div>
                </Section>

                {/* Blog Grid */}
                <Section className="py-24">
                    <div className="container">
                        {posts && posts.length > 0 ? (
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {posts.map((post: any) => (
                                    <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                                        <div className="relative h-48 bg-gray-200 overflow-hidden">
                                            {post.featuredImage?.node?.sourceUrl ? (
                                                <img
                                                    src={post.featuredImage.node.sourceUrl}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-[#0B223A]/5 text-gray-400">
                                                    <span className="text-4xl font-bold opacity-20">MELA</span>
                                                </div>
                                            )}
                                            <div className="absolute top-4 left-4 bg-[#FFD700] text-[#0B223A] px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider">
                                                {post.categories?.nodes[0]?.name || "News"}
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
                                                </span>
                                            </div>
                                            <h3 className="mb-3 text-xl font-bold text-[#0B223A] group-hover:text-[#1a3a5a] transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <div
                                                className="text-gray-600 mb-6 line-clamp-3 flex-grow text-sm"
                                                dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                            />
                                            <Link href={`/blog/${post.slug}`} className="mt-auto">
                                                <Button variant="outline" className="w-full group-hover:bg-[#0B223A] group-hover:text-white transition-colors">
                                                    Leggi Articolo <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <h3 className="text-2xl font-bold text-gray-400 mb-4">Nessun articolo trovato</h3>
                                <p className="text-gray-500">
                                    Assicurati di aver configurato correttamente WPGraphQL sul tuo sito WordPress.
                                </p>
                            </div>
                        )}
                    </div>
                </Section>

                {/* Newsletter CTA */}
                <Section className="bg-gradient-to-br from-[#0B223A] to-[#1a3a5a] py-20 text-white lg:py-28">
                    <div className="container text-center">
                        <div className="mx-auto max-w-3xl">
                            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Rimani aggiornato</h2>
                            <p className="mb-10 text-xl text-white/90">
                                Iscriviti alla newsletter per ricevere i nostri ultimi articoli e insights direttamente nella tua inbox.
                            </p>
                            <div className="mx-auto flex max-w-md gap-4">
                                <input
                                    type="email"
                                    placeholder="La tua email"
                                    className="flex-1 rounded-full border-0 px-6 py-4 text-gray-900 placeholder-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                                />
                                <button className="rounded-full bg-[#FFD700] px-8 py-4 font-semibold text-[#0B223A] transition-all hover:bg-[#FFC700] hover:shadow-xl">
                                    Iscriviti
                                </button>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}

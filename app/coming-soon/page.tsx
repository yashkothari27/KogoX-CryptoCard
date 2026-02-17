"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"

export default function ComingSoonPage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-4">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow"
                    style={{ animationDelay: "1.5s" }}
                />
                <div className="absolute inset-0 surface-grid opacity-40" />
            </div>

            <div className="relative z-10 max-w-2xl w-full text-center">
                {/* logo */}
                <div className="mb-12 flex justify-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />
                        <div className="relative w-32 h-32 md:w-40 md:h-40 animate-float">
                            <Image
                                src="/kogo-flower.png"
                                alt="KogoX Flower"
                                fill
                                className="object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]"
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-border mb-4">
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">In Development</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        Something <span className="gradient-text">Great</span> is Coming
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed mb-10">
                        We're working hard to bring you the full KogoX experience. This feature will be available very soon.
                    </p>

                    <Button
                        asChild
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg group shadow-xl shadow-primary/20"
                    >
                        <Link href="/">
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </Button>
                </div>

                {/* Footer info */}
                <div className="mt-20 text-muted-foreground/60 text-sm">
                    © 2026 KogoX. All rights reserved.
                </div>
            </div>
        </main>
    )
}

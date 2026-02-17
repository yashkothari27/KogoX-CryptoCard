"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function PrepaidCardSection() {
    return (
        <section className="py-20 lg:py-32 relative overflow-hidden bg-background">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Card Image Wrapper */}
                    <ScrollReveal direction="left" className="relative order-2 lg:order-1">
                        <div className="relative group">
                            {/* Glow effect behind the card */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform transition-transform duration-700 hover:scale-105 active:scale-100">
                                <Image
                                    src="/KogoX Prepaid Visa card.png"
                                    alt="KogoX Prepaid Visa Card"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>

                            {/* Decorative floating badge */}
                            <div className="absolute -bottom-6 -right-6 md:-right-8 bg-card border border-border p-4 md:p-6 rounded-2xl shadow-2xl animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-foreground">Premium Quality</div>
                                        <div className="text-xs text-muted-foreground">Everyday Crypto Spending</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <ScrollReveal>
                            <span className="text-primary font-medium text-sm lg:text-base uppercase tracking-widest mb-4 block">
                                The Platinum Experience
                            </span>
                        </ScrollReveal>

                        <ScrollReveal delayMs={100}>
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                Designed for <span className="gradient-text">Excellence</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delayMs={200}>
                            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                                Elevate your daily transactions with the KogoX Prepaid Visa Card. A masterpiece of security and design, built specifically for the modern crypto enthusiast.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delayMs={300}>
                            <div className="space-y-4 mb-10">
                                {[
                                    "Accepted at 80M+ merchants globally",
                                    "Real-time transaction tracking",
                                    "Advanced security with biometric controls",
                                    "Instant funding from your crypto wallet"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span className="text-foreground/90 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delayMs={400}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
                                    <Link href="/coming-soon">
                                        Get Your Card Now
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

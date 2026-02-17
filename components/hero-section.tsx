import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Zap, Shield } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute inset-0 surface-grid opacity-60" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-border mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Spend globally with a card built for everyday crypto</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                Load with crypto, <span className="gradient-text">spend anywhere</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delayMs={140}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                The <span className="text-foreground font-medium">KogoX Crypto Card</span> lets you pay online and
                in-store with confidence—simple, fast, and designed for real life.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
                >
                  <Link href="/coming-soon">
                    Get Your KogoX Crypto Card
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Trust Indicators */}
            <ScrollReveal delayMs={260}>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>Global acceptance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>Seamless payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Security-first controls</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Card Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/25 via-primary/15 to-[#8a6b1f]/20 rounded-3xl blur-2xl scale-110" />

              {/* Card */}
              <div className="relative w-80 md:w-[28rem] aspect-[1.586/1] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/KogoX Prepaid Visa card.png"
                  alt="KogoX Prepaid Visa Card"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Elements (Keeping these for extra flair if they look good, or removing if they clash) */}
              <div
                className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-card border border-border p-2 md:p-3 shadow-xl z-20"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary to-[#8a6b1f] flex items-center justify-center">
                  <span className="text-white font-bold text-[10px] md:text-xs">PAY</span>
                </div>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-card border border-border p-2 md:p-3 shadow-xl z-20"
                style={{ animationDelay: "1s" }}
              >
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#8a6b1f] to-primary flex items-center justify-center">
                  <span className="text-white font-bold text-[10px] md:text-xs">CARD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

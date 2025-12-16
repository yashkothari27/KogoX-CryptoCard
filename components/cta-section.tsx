import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-[#8a6b1f]/10" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Get Your KogoX Crypto Card Today
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={100}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Apply in minutes and start using your card for everyday payments—globally, securely, and with full
              control.
            </p>
          </ScrollReveal>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary px-10 py-6 text-lg bg-transparent"
            >
              Contact Support
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">Global</div>
              <div className="text-sm text-muted-foreground">Merchant acceptance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">Real-time</div>
              <div className="text-sm text-muted-foreground">Card controls</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">Secure</div>
              <div className="text-sm text-muted-foreground">Compliance-focused</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

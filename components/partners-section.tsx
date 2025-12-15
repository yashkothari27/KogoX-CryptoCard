import { ScrollReveal } from "@/components/scroll-reveal"

const partners = [
  { name: "Mastercard", logo: "Mastercard" },
  { name: "Visa", logo: "Visa" },
  { name: "Chainlink", logo: "Chainlink" },
  { name: "Fireblocks", logo: "Fireblocks" },
  { name: "Circle", logo: "Circle" },
  { name: "Polygon", logo: "Polygon" },
]

function Wordmark({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center h-10 w-full">
      <span className="text-sm md:text-base font-semibold tracking-wide text-foreground/70 group-hover:text-foreground transition-colors">
        {text}
      </span>
    </div>
  )
}

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Rapidz Trusted Partners</h2>
          </ScrollReveal>
          <ScrollReveal delayMs={100}>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We collaborate with trusted partners across issuing, processing, and infrastructure.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <ScrollReveal key={index} delayMs={Math.min(index * 60, 240)}>
              <div className="group flex items-center justify-center p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-center">
                  <div className="w-full px-1">
                    <Wordmark text={partner.logo} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

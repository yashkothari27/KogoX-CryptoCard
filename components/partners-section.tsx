import { PartnerLogo } from "@/components/partner-logo"
import { ScrollReveal } from "@/components/scroll-reveal"

const partners = [
  { name: "Mastercard" },
  { name: "Visa" },
  { name: "Chainlink" },
  { name: "Fireblocks" },
  { name: "Circle" },
  { name: "Polygon" },
]

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trusted Partners</h2>
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
              <div className="group flex items-center justify-center p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 min-h-[120px]">
                <div className="text-center w-full h-full flex items-center justify-center">
                  <PartnerLogo name={partner.name} className="w-full" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

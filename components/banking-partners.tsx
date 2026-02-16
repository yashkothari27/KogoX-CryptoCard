import { ScrollReveal } from "@/components/scroll-reveal"
import { PartnerLogo } from "@/components/partner-logo"

const bankingPartners = [
  { name: "UAE Central Bank" },
  { name: "Emirates NBD" },
  { name: "SWIFT" },
  { name: "SEPA" },
  { name: "Clearbank" },
  { name: "Banking Circle" },
]

export function BankingPartnersSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Banking Partners</h2>
          </ScrollReveal>
          <ScrollReveal delayMs={100}>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Trusted by leading financial institutions worldwide for secure and compliant operations.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {bankingPartners.map((partner, index) => (
            <ScrollReveal key={index} delayMs={Math.min(index * 60, 240)}>
              <div className="group flex items-center justify-center p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full min-h-[140px]">
                <div className="text-center flex flex-col items-center justify-center h-full w-full">
                  <PartnerLogo name={partner.name} className="w-full h-full" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}


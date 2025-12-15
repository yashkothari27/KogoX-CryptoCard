import { ScrollReveal } from "@/components/scroll-reveal"

const bankingPartners = [
  { name: "UAE Central Bank", logo: "UCB" },
  { name: "Emirates NBD", logo: "ENBD" },
  { name: "SWIFT", logo: "SWIFT" },
  { name: "SEPA", logo: "SEPA" },
  { name: "Clearbank", logo: "CB" },
  { name: "Banking Circle", logo: "BC" },
]

export function BankingPartnersSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Rapidz Banking Partners</h2>
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
              <div className="group flex items-center justify-center p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center border border-white/10">
                    <span className="text-lg font-bold text-white/90">{partner.logo}</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {partner.name}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Globe, Zap, CreditCard, Smartphone, Shield, Clock } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    icon: Globe,
    title: "Spend Crypto Easily Worldwide",
    description: "Use your card for everyday purchases at home or abroad—online and in-store.",
  },
  {
    icon: CreditCard,
    title: "Global Card Acceptance",
    description: "Accepted anywhere Mastercard is welcomed—online and in-store.",
  },
  {
    icon: Zap,
    title: "Instant & Seamless Payments",
    description: "Fast authorizations and smooth checkout experiences across merchants.",
  },
  {
    icon: Smartphone,
    title: "Real-Time Card Control",
    description: "Lock/unlock your card, set controls, and stay in control from your phone.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Advanced protection with instant card lock, spending limits, and alerts.",
  },
  {
    icon: Clock,
    title: "Designed for Everyday Use",
    description: "Perfect for daily purchases, travel, and online shopping.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-cyan-300 font-medium text-sm uppercase tracking-wider">Features</span>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
              Built for <span className="gradient-text">everyday spending</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={140}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The KogoX Crypto Card helps you use crypto with the simplicity of a card—wherever life takes you.
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delayMs={Math.min(index * 60, 240)}>
              <div className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-cyan-400/40 transition-all duration-300">
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/8 via-blue-500/6 to-violet-500/6 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400/15 to-blue-600/15 flex items-center justify-center mb-5 border border-white/5">
                    <feature.icon className="w-7 h-7 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

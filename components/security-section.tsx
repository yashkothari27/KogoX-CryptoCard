import { Shield, Lock, Eye, CheckCircle, Server, Key } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const securityFeatures = [
  {
    icon: Shield,
    title: "Advanced Security Standards",
    description: "Enterprise-grade encryption and security protocols protect every transaction.",
  },
  {
    icon: Lock,
    title: "User Fund Protection",
    description: "Your funds are safeguarded with multi-layer security and insurance coverage.",
  },
  {
    icon: Eye,
    title: "Industry-Grade Compliance",
    description: "Fully compliant with global financial regulations and standards.",
  },
  {
    icon: Server,
    title: "Trusted Infrastructure",
    description: "Built on reliable, secure infrastructure with 99.9% uptime.",
  },
]

export function SecuritySection() {
  return (
    <section id="security" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="text-cyan-300 font-medium text-sm uppercase tracking-wider">Security & Trust</span>
            </ScrollReveal>
            <ScrollReveal delayMs={80}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
                Security you can <span className="gradient-text">count on</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delayMs={140}>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Built with robust controls and a compliance-first approach—so you can use your card with confidence.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <ScrollReveal key={index} delayMs={Math.min(index * 70, 210)}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0 border border-white/5">
                      <feature.icon className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Security Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated Rings */}
              <div
                className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping"
                style={{ animationDuration: "3s" }}
              />
              <div
                className="absolute inset-4 rounded-full border border-blue-400/25 animate-ping"
                style={{ animationDuration: "3s", animationDelay: "0.5s" }}
              />
              <div
                className="absolute inset-8 rounded-full border border-violet-400/20 animate-ping"
                style={{ animationDuration: "3s", animationDelay: "1s" }}
              />

              {/* Center Shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400/18 via-blue-500/16 to-violet-500/16 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-card border border-border flex items-center justify-center shadow-2xl">
                    <Shield className="w-14 h-14 text-cyan-300" />
                  </div>
                </div>
              </div>

              {/* Floating Security Icons */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg animate-float">
                <Lock className="w-6 h-6 text-cyan-300" />
              </div>
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <div
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <Key className="w-6 h-6 text-cyan-300" />
              </div>
              <div
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <Eye className="w-6 h-6 text-cyan-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

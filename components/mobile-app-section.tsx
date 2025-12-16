import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const appFeatures = [
  "Track all your spending in real-time",
  "Manage card settings instantly",
  "Set spending limits and alerts",
  "Secure access with biometric login",
  "View transaction history",
  "Instant card freeze and unfreeze",
]

export function MobileAppSection() {
  return (
    <section id="app" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/6 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Phone Mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-64 md:w-72 aspect-[9/19] rounded-[3rem] bg-gradient-to-b from-slate-800 to-slate-900 p-2 shadow-2xl border border-white/10">
                {/* Screen */}
                <div className="w-full h-full rounded-[2.5rem] bg-background overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-8 bg-card flex items-center justify-center">
                    <div className="w-20 h-5 bg-black rounded-full" />
                  </div>

                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Balance Card */}
                    <div className="bg-gradient-to-br from-primary to-[#8a6b1f] rounded-2xl p-4 text-white">
                      <div className="text-xs opacity-80">Available Balance</div>
                      <div className="text-2xl font-bold">$12,458.00</div>
                      <div className="text-xs opacity-80 mt-1">≈ 0.4523 BTC</div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-3 gap-2">
                      {["Cards", "Limits", "Settings"].map((action) => (
                        <div key={action} className="bg-card rounded-xl p-3 text-center border border-border">
                          <div className="w-8 h-8 mx-auto mb-1 rounded-lg bg-secondary flex items-center justify-center">
                            <div className="w-3 h-3 rounded bg-primary" />
                          </div>
                          <span className="text-xs text-muted-foreground">{action}</span>
                        </div>
                      ))}
                    </div>

                    {/* Transactions */}
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-muted-foreground">Recent Activity</div>
                      {[
                        { name: "Amazon", amount: "-$89.99" },
                        { name: "Coffee Shop", amount: "-$4.50" },
                        { name: "Card Funding", amount: "+$500.00" },
                      ].map((tx, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-border">
                          <span className="text-sm text-foreground">{tx.name}</span>
                          <span
                            className={`text-sm font-medium ${tx.amount.startsWith("+") ? "text-green-500" : "text-foreground"}`}
                          >
                            {tx.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-card border border-border shadow-lg">
                <span className="text-sm font-medium text-foreground">Secure access</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <span className="text-primary/90 font-medium text-sm uppercase tracking-wider">Mobile App</span>
            </ScrollReveal>
            <ScrollReveal delayMs={80}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
                Card control, <span className="gradient-text">made simple</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delayMs={140}>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Manage your KogoX Crypto Card from your phone: track spending, adjust settings, and access security
                controls in seconds.
              </p>
            </ScrollReveal>

            {/* Feature List */}
            <ul className="space-y-4 mb-10">
              {appFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 border border-white/5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get the App
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

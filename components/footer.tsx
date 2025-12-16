import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                <Image src="/kogo-logo.png" alt="KogoX" width={40} height={40} />
              </div>
              <span className="text-xl font-bold text-foreground">
                Kogo<span className="gradient-text">X</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A premium crypto card experience built for everyday payments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#app" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Why KogoX
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer - MANDATORY TEXT */}
        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            © 2025 Kogo Global Technology LLC (License No. 1088408).
            <br />
            KogoX Crypto Card and KogoX brand are owned and operated by Kogo Global Technology LLC, a UAE-registered
            blockchain technology company. KogoX Card is powered by Rapidz.money, our authorised card-issuing partner.
            <br />
            Use of the card is subject to programme terms, network rules, and issuer approval.
          </p>
        </div>
      </div>
    </footer>
  )
}

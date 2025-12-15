import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { MobileAppSection } from "@/components/mobile-app-section"
import { SecuritySection } from "@/components/security-section"
import { PartnersSection } from "@/components/partners-section"
import { BankingPartnersSection } from "@/components/banking-partners-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MobileAppSection />
      <SecuritySection />
      <PartnersSection />
      <BankingPartnersSection />
      <CTASection />
      <Footer />
    </main>
  )
}

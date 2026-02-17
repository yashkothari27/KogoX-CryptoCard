import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "KogoPAY | Under Maintenance",
  description: "KogoPAY is currently upgrading our system and refreshing all website content as part of our rebranding.",
}

export default function KogoPayPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 surface-grid opacity-70" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-3xl rounded-full animate-glow" />
        <div
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/6 blur-3xl rounded-full animate-glow"
          style={{ animationDelay: "1.2s" }}
        />

        <div className="relative w-full max-w-2xl text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
              <Image src="/kogo-logo-gold.svg" alt="KogoPAY" width={48} height={48} priority />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-balance">
            We’re updating our platform.
          </h1>

          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            KogoPAY is currently upgrading our system and refreshing all website content as part of our rebranding.
            Please check back soon for the latest information on our upcoming services.
          </p>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Coming soon</span>
          </div>
        </div>
      </div>
    </main>
  )
}




"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
              <Image src="/kogo-logo-gold.svg" alt="KogoX" width={40} height={40} priority />
            </div>
            <span className="text-xl font-bold text-foreground">
              Kogo<span className="gradient-text">X</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/coming-soon" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/coming-soon" className="text-muted-foreground hover:text-foreground transition-colors">
              App
            </Link>
            <Link href="/coming-soon" className="text-muted-foreground hover:text-foreground transition-colors">
              Security
            </Link>
            <Link href="/coming-soon" className="text-muted-foreground hover:text-foreground transition-colors">
              Partners
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
              <Link href="/coming-soon">
                Get Your KogoX Crypto Card
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="/coming-soon" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="/coming-soon" className="text-muted-foreground hover:text-foreground transition-colors">
                App
              </Link>
              <Link href="/coming-soon" className="text-muted-foreground hover:text-foreground transition-colors">
                Security
              </Link>
              <Link href="/coming-soon" className="text-muted-foreground hover:text-foreground transition-colors">
                Partners
              </Link>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2">
                <Link href="/coming-soon">
                  Get Your KogoX Crypto Card
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

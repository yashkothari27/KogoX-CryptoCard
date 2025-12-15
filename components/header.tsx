"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/95 flex items-center justify-center shadow-sm shadow-cyan-500/10 overflow-hidden">
              <Image src="/kogo-logo.svg" alt="KogoX" width={40} height={40} priority />
            </div>
            <span className="text-xl font-bold text-foreground">
              Kogo<span className="gradient-text">X</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#app" className="text-muted-foreground hover:text-foreground transition-colors">
              App
            </a>
            <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
            <a href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">
              Partners
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-white px-6">
              Get Your KogoX Crypto Card
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
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#app" className="text-muted-foreground hover:text-foreground transition-colors">
                App
              </a>
              <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors">
                Security
              </a>
              <a href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">
                Partners
              </a>
              <Button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-white w-full mt-2">
                Get Your KogoX Crypto Card
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

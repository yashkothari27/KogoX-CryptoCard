"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type ScrollRevealProps = {
  className?: string
  delayMs?: number
  children: React.ReactNode
}

export function ScrollReveal({ className, delayMs = 0, children }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (inView) return
    const el = ref.current
    if (!el) return

    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setInView(true)
        observer.disconnect()
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [inView])

  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "reveal-in", className)}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}




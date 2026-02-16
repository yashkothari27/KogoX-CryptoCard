import { Landmark, Hexagon, Circle, Box, Globe } from "lucide-react"

interface PartnerLogoProps {
    name: string
    className?: string
}

export function PartnerLogo({ name, className = "" }: PartnerLogoProps) {
    const normalizeName = name.toLowerCase().replace(/\s/g, "")

    switch (normalizeName) {
        case "mastercard":
            return (
                <div className={`flex items-center justify-center ${className}`} aria-label={name}>
                    <div className="relative flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#EB001B] opacity-80"></div>
                        <div className="w-8 h-8 rounded-full bg-[#FF5F00] opacity-80 -ml-4"></div>
                    </div>
                    <span className="ml-2 font-semibold hidden md:block">Mastercard</span>
                </div>
            )
        case "visa":
            return (
                <div className={`flex items-center justify-center ${className}`} aria-label={name}>
                    <span className="text-2xl font-bold italic text-[#1434CB]">VISA</span>
                </div>
            )
        case "chainlink":
            return (
                <div className={`flex items-center justify-center gap-2 ${className}`} aria-label={name}>
                    <Hexagon className="w-8 h-8 text-[#375BD2] fill-current" />
                    <span className="font-bold text-[#375BD2]">Chainlink</span>
                </div>
            )
        case "fireblocks":
            return (
                <div className={`flex items-center justify-center gap-2 ${className}`} aria-label={name}>
                    <Box className="w-8 h-8 text-foreground" />
                    <span className="font-bold">Fireblocks</span>
                </div>
            )
        case "circle":
            return (
                <div className={`flex items-center justify-center gap-2 ${className}`} aria-label={name}>
                    <Circle className="w-8 h-8 text-foreground" />
                    <span className="font-bold">Circle</span>
                </div>
            )
        case "polygon":
            return (
                <div className={`flex items-center justify-center gap-2 ${className}`} aria-label={name}>
                    <Hexagon className="w-8 h-8 text-[#8247E5] fill-current" />
                    <span className="font-bold text-[#8247E5]">Polygon</span>
                </div>
            )
        case "uaecentralbank":
            return (
                <div className={`flex flex-col items-center justify-center text-center ${className}`} aria-label={name}>
                    <Landmark className="w-10 h-10 mb-2 text-foreground/80" />
                    <span className="text-xs font-semibold">UAE Central Bank</span>
                </div>
            )
        case "emiratesnbd":
            return (
                <div className={`flex flex-col items-center justify-center text-center ${className}`} aria-label={name}>
                    <div className="w-10 h-10 bg-[#002C5F] rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-xs">ENBD</span>
                    </div>
                    <span className="text-xs font-semibold">Emirates NBD</span>
                </div>
            )
        case "swift":
            return (
                <div className={`flex flex-col items-center justify-center text-center ${className}`} aria-label={name}>
                    <Globe className="w-10 h-10 mb-2 text-foreground/80" />
                    <span className="text-sm font-bold tracking-widest">SWIFT</span>
                </div>
            )
        case "sepa":
            return (
                <div className={`flex flex-col items-center justify-center text-center ${className}`} aria-label={name}>
                    <div className="border-2 border-foreground/50 px-2 py-1 rounded mb-2">
                        <span className="text-sm font-bold">SEPA</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Euro Payments</span>
                </div>
            )
        case "clearbank":
            return (
                <div className={`flex flex-col items-center justify-center text-center ${className}`} aria-label={name}>
                    <div className="text-xl font-bold flex items-center">
                        <span className="text-foreground">Clear</span>
                        <span className="text-primary">.bank</span>
                    </div>
                </div>
            )
        case "bankingcircle":
            return (
                <div className={`flex flex-col items-center justify-center text-center ${className}`} aria-label={name}>
                    <div className="w-10 h-10 rounded-full border-4 border-primary/60 mb-2"></div>
                    <span className="text-xs font-semibold">Banking Circle</span>
                </div>
            )
        default:
            return (
                <div className={`flex items-center justify-center ${className}`} aria-label={name}>
                    <span className="text-lg font-semibold">{name}</span>
                </div>
            )
    }
}

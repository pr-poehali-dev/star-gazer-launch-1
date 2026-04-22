import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { MagneticButton } from "@/components/magnetic-button"
import { HeroSection } from "@/components/sections/hero-section"
import { SegmentsSection } from "@/components/sections/segments-section"
import { BorrowerSection } from "@/components/sections/borrower-section"
import { InvestorSection } from "@/components/sections/investor-section"
import { PartnerSection } from "@/components/sections/partner-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { CabinetSection } from "@/components/sections/cabinet-section"
import { StatusSection } from "@/components/sections/status-section"
import { GarantSection } from "@/components/sections/garant-section"
import { TrustSection } from "@/components/sections/trust-section"
import { FaqSection } from "@/components/sections/faq-section"
import { FinalCtaSection } from "@/components/sections/final-cta-section"
import { FooterSection } from "@/components/sections/footer-section"
import { useRef, useEffect, useState } from "react"
import Icon from "@/components/ui/icon"

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const shaderContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) clearInterval(intervalId)
    }, 100)

    const fallbackTimer = setTimeout(() => setIsLoaded(true), 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileMenuOpen(false)
  }

  const navItems = [
    { label: "Заемщикам", id: "borrower" },
    { label: "Инвесторам", id: "investor" },
    { label: "Партнёрам", id: "partner" },
    { label: "Гарант", id: "garant" },
    { label: "FAQ", id: "faq" },
  ]

  return (
    <main className="relative min-h-screen bg-background">
      <CustomCursor />
      <GrainOverlay />

      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 pointer-events-none ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict", height: "100vh" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#1a3a5c"
            colorB="#0a1f35"
            speed={0.4}
            detail={0.6}
            blend={60}
            coarseX={30}
            coarseY={30}
            mediumX={30}
            mediumY={30}
            fineX={30}
            fineY={30}
          />
          <ChromaFlow
            baseColor="#0a2540"
            upColor="#0a2540"
            downColor="#0d1f35"
            leftColor="#1a3a5c"
            rightColor="#1a3a5c"
            intensity={0.7}
            radius={2}
            momentum={20}
            maskType="alpha"
            opacity={0.95}
          />
        </Shader>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10">
        <nav
          className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 md:px-12 ${
            scrolled
              ? "bg-background/80 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent"
          } ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 transition-transform hover:scale-105"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/15 backdrop-blur-md">
              <span className="font-sans text-lg font-bold text-foreground">Ф</span>
            </div>
            <span className="font-sans text-base font-semibold tracking-tight text-foreground">ФинансСистема</span>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative font-sans text-sm font-medium text-foreground/75 hover:text-foreground transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px bg-foreground w-0 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton variant="primary" onClick={() => scrollToSection("borrower")}>
              Подать заявку
            </MagneticButton>
          </div>

          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 border border-white/15"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={18} className="text-foreground" />
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-20 px-6 gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground text-lg font-medium py-3 border-b border-white/8 hover:text-foreground/70 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("borrower")}
              className="mt-4 bg-primary text-white rounded-xl py-3 font-medium text-base"
            >
              Подать заявку
            </button>
          </div>
        )}

        <div id="hero">
          <HeroSection onScrollTo={scrollToSection} />
        </div>

        <div className="bg-background/60 backdrop-blur-sm">
          <SegmentsSection onScrollTo={scrollToSection} />
          <div id="borrower"><BorrowerSection /></div>
          <div id="investor"><InvestorSection /></div>
          <div id="partner"><PartnerSection /></div>
          <HowItWorksSection />
          <CabinetSection />
          <StatusSection />
          <div id="garant"><GarantSection /></div>
          <TrustSection />
          <div id="faq"><FaqSection /></div>
          <FinalCtaSection onScrollTo={scrollToSection} />
          <FooterSection />
        </div>
      </div>
    </main>
  )
}

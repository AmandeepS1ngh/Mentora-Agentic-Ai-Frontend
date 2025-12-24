import {
  Footer,
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  CTASection,
} from "@/components/landing"
import { AppHeader } from "@/components/AppHeader"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95">
      <AppHeader maxWidth="6xl" />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}


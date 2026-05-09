// VF Digital Solutions Landing Page
import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { WhyUsSection } from "@/components/landing/why-us-section"
import { ProcessSection } from "@/components/landing/process-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  )
}

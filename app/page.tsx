import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ValuePropositionSection } from "@/components/value-proposition-section"
import { DemoSection } from "@/components/demo-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { Footer } from "@/components/footer"
import { TabSection } from "@/components/tab-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <HeroSection />
          /* <TabSection />   여기에 추가 */
          <FeaturesSection />
          <ValuePropositionSection />
          <DemoSection />
          <PricingSection />
          <FAQSection />
          <WaitlistSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

import Hero from "../components/hero"
import Services from "../components/services"
import AboutSection from "../components/about-section"
import ProcessSection from "../components/process-section"
import StatsSection from "../components/stats-section"
import TestimonialsSection from "../components/testimonials-section"
import CtaSection from "../components/cta-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <AboutSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}

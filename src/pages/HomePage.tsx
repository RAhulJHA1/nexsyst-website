import { Nav } from "../landing/Nav"
import { Hero } from "../landing/Hero"
import { Stats } from "../landing/Stats"
import { ModulesGrid } from "../landing/ModulesGrid"
import { Features, SolutionsBand } from "../landing/Features"
import { Pricing } from "../landing/Pricing"
import { Faq } from "../landing/Faq"
import { Newsletter } from "../landing/Newsletter"
import { Footer } from "../landing/Footer"
import { StickyCta } from "../landing/StickyCta"
import { SmoothScroll } from "../landing/SmoothScroll"

/** Deep Ocean corporate landing + module entry points. */
export function HomePage() {
  return (
    <div className="min-h-svh bg-[#0f1419] pb-16 text-[#a8b2c1]">
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <ModulesGrid />
        <Features />
        <SolutionsBand />
        <Pricing />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
      <StickyCta />
    </div>
  )
}

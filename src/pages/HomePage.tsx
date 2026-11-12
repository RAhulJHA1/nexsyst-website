import { Hero } from "../components/Hero"
import { ProblemSection } from "../components/ProblemSection"
import { ProductTheater } from "../components/ProductTheater"
import { ModulesStrip } from "../components/ModulesStrip"
import { ProofBar, InlineQuoteCapture } from "../components/ConversionSections"
import { CtaBanner } from "../components/CtaBanner"
import { Faq } from "../components/Faq"

/**
 * Umenit-inspired rhythm:
 * black centered hero → proof → product → problem → modules → quote → FAQ → CTA
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <ProofBar />
      <ProductTheater />
      <ProblemSection />
      <ModulesStrip />
      <InlineQuoteCapture />
      <Faq />
      <CtaBanner />
    </>
  )
}

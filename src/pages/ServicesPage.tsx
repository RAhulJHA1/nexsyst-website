import { PageHero } from "../components/PageHero"
import { Services } from "../components/Services"
import { HowItWorks } from "../components/HowItWorks"
import { BuyPath } from "../components/BuyPath"

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="NexSyst Services"
        description="Cloud delivery, enterprise AI/ML integration, and RAG solutions — alongside the NexSyst industrial software suite."
      />
      <Services />
      <HowItWorks />
      <BuyPath />
    </>
  )
}

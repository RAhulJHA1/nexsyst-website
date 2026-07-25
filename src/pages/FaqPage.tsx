import { PageHero } from "../components/PageHero"
import { Faq } from "../components/Faq"

export function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="NexSyst FAQ"
        description="Direct answers about NexSyst, the official website nexsyst.in, products, cloud, AI/ML, RAG, and how to request a demo."
      />
      <Faq />
    </>
  )
}

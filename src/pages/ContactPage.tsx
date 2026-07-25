import { PageHero } from "../components/PageHero"
import { Contact } from "../components/Contact"

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact NexSyst"
        description="Request a NexSyst demo or talk to the team about plant software, cloud, AI/ML, and RAG. Official contact via nexsyst.in."
      />
      <Contact />
    </>
  )
}

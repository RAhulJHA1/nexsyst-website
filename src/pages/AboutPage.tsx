import { PageHero } from "../components/PageHero"
import { Mission } from "../components/Mission"
import { WhyNexSyst } from "../components/WhyNexSyst"
import { Stats } from "../components/Stats"
import { GlobalPresence } from "../components/GlobalPresence"

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About NexSyst"
        description="NexSyst is the official industrial software brand for process plants and industrial businesses — plant intelligence and business apps in one suite."
      />
      <Mission />
      <Stats />
      <WhyNexSyst />
      <GlobalPresence />
    </>
  )
}

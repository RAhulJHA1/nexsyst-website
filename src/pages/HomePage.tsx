import { Hero } from "../components/Hero"
import { Mission } from "../components/Mission"
import { Stats } from "../components/Stats"
import { Products } from "../components/Products"
import { Services } from "../components/Services"
import { TechOrbit } from "../components/TechOrbit"
import { WhyNexSyst } from "../components/WhyNexSyst"
import { HowItWorks } from "../components/HowItWorks"
import { GlobalPresence } from "../components/GlobalPresence"
import { Industries } from "../components/Industries"
import { SocialProof } from "../components/SocialProof"
import { BuyPath } from "../components/BuyPath"
import { Suite } from "../components/Suite"
import { Platform } from "../components/Platform"
import { Faq } from "../components/Faq"
import { Contact } from "../components/Contact"

/**
 * Cinematic scroll story:
 * Hero → Mission → Stats → Products → Services → Technology → Why → Process →
 * Presence → Industries → Stories → Buy → Suite → Platform → FAQ → Contact
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Stats />
      <Products />
      <Services />
      <TechOrbit />
      <WhyNexSyst />
      <HowItWorks />
      <GlobalPresence />
      <Industries />
      <SocialProof />
      <BuyPath />
      <Suite />
      <Platform />
      <Faq />
      <Contact />
    </>
  )
}

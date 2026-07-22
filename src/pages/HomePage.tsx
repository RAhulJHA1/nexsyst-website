import { Hero } from "../components/Hero"
import { TrustBar } from "../components/TrustBar"
import { FeaturedApps } from "../components/FeaturedApps"
import { Stats } from "../components/Stats"
import { Products } from "../components/Products"
import { Suite } from "../components/Suite"
import { BuyPath } from "../components/BuyPath"
import { WhyNexSyst } from "../components/WhyNexSyst"
import { SocialProof } from "../components/SocialProof"
import { Platform } from "../components/Platform"
import { HowItWorks } from "../components/HowItWorks"
import { Industries } from "../components/Industries"
import { Faq } from "../components/Faq"
import { Contact } from "../components/Contact"

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedApps />
      <Stats />
      <Products />
      <BuyPath />
      <WhyNexSyst />
      <SocialProof />
      <Suite />
      <Platform />
      <HowItWorks />
      <Industries />
      <Faq />
      <Contact />
    </>
  )
}

import { PageHero } from "../components/PageHero"
import { WhyChooseErp } from "../components/WhyChooseErp"
import { Ecosystem } from "../components/Ecosystem"
import { CtaBanner } from "../components/CtaBanner"
import { FadeItem, MotionSection } from "../components/Motion"
import { brand } from "../data/content"

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`About ${brand.name}`}
        description="Nexsyst is an all-in-one business ERP — connecting customers, purchasing, accounting, people, and analytics in one intelligent platform."
      />
      <MotionSection className="section-space">
        <div className="section-pad mx-auto max-w-3xl text-center">
          <FadeItem>
            <p className="text-lg leading-relaxed text-muted sm:text-xl">
              We build software for operators who are done stitching together CRM, spreadsheets,
              Tally exports, attendance tools, and payroll runs. {brand.name} is the connected
              system of record — so every department works from the same live picture of the business.
            </p>
          </FadeItem>
        </div>
      </MotionSection>
      <Ecosystem />
      <WhyChooseErp />
      <CtaBanner />
    </>
  )
}

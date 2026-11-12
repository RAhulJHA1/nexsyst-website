import { PageHero } from "../components/PageHero"
import { WhyChooseErp } from "../components/WhyChooseErp"
import { Pricing } from "../components/Pricing"
import { CtaBanner } from "../components/CtaBanner"
import { FadeItem, MotionSection } from "../components/Motion"

const services = [
  {
    title: "Implementation & onboarding",
    body: "Scoped rollout of CRM, PO, finance, and HR modules with role setup and approval chains.",
  },
  {
    title: "Tally & accounting integration",
    body: "Connect ledgers, vouchers, and statements so ERP operations stay reconciled with accounting.",
  },
  {
    title: "Payroll & attendance go-live",
    body: "Salary structures, statutory setup, muster alignment, and first successful payroll cycle.",
  },
  {
    title: "Analytics & executive dashboards",
    body: "KPI packs for revenue, cash, receivables, attendance, and payroll performance.",
  },
]

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Nexsyst Services"
        description="From implementation to integrations — get the ERP live with the workflows your teams already understand."
      />
      <MotionSection className="section-space">
        <div className="section-pad mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <FadeItem key={s.title}>
              <article className="card-soft h-full rounded-3xl p-6">
                <h2 className="font-display text-xl font-bold text-brand">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </article>
            </FadeItem>
          ))}
        </div>
      </MotionSection>
      <WhyChooseErp />
      <Pricing />
      <CtaBanner />
    </>
  )
}

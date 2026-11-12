import { Link } from "react-router-dom"
import { PageHero } from "../components/PageHero"
import { LeadForm } from "../components/LeadForm"
import { FadeItem, MotionSection } from "../components/Motion"

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a demo"
        title="Walk through your Tuesday with Nexsyst"
        description="A 30-minute session mapped to your CRM, purchase, attendance, or payroll pain — then a clear next step toward quotation."
      />
      <MotionSection className="section-space pt-10">
        <div className="section-pad mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeItem>
            <h2 className="text-2xl font-bold text-slate-900">What we’ll cover</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600">
              <li>• Your current tools and the handoffs that break</li>
              <li>• Which Nexsyst modules fit a first pilot</li>
              <li>• Rough timeline and what a quotation will include</li>
              <li>• Questions for IT, HR, and finance stakeholders</li>
            </ul>
            <p className="mt-8 text-sm text-slate-500">
              Already know the modules? Skip ahead and{" "}
              <Link to="/quote" className="font-semibold text-slate-800 hover:underline">
                request a quotation
              </Link>
              .
            </p>
          </FadeItem>
          <FadeItem>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <LeadForm intent="demo" variant="full" />
            </div>
          </FadeItem>
        </div>
      </MotionSection>
    </>
  )
}

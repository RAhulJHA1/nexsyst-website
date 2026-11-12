import { Link } from "react-router-dom"
import { PageHero } from "../components/PageHero"
import { LeadForm } from "../components/LeadForm"
import { FadeItem, MotionSection } from "../components/Motion"
import { quoteDrivers, onboardingSteps } from "../data/conversion"

export function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quotation"
        title="Get a scoped Nexsyst quotation — not a vague “call us”"
        description="Tell us modules, users, and timeline. We reply with a commercial outline your purchase and finance teams can actually review."
      />

      <MotionSection className="section-space pt-10">
        <div className="section-pad mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeItem>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">What happens after you submit</h2>
              <ol className="mt-6 space-y-4">
                {onboardingSteps.slice(0, 2).map((s) => (
                  <li key={s.step} className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">
                      {s.step} · {s.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
                  </li>
                ))}
              </ol>

              <h3 className="mt-10 text-lg font-bold text-slate-900">What drives the number</h3>
              <ul className="mt-4 space-y-3">
                {quoteDrivers.map((d) => (
                  <li key={d.title} className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">{d.title}.</span> {d.body}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm text-slate-500">
                Prefer a walkthrough first?{" "}
                <Link to="/contact" className="font-semibold text-slate-800 hover:underline">
                  Book a demo
                </Link>{" "}
                — same team, different intent.
              </p>
            </div>
          </FadeItem>

          <FadeItem>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold text-slate-800">Quotation form · ~2 minutes</p>
              <p className="mt-1 text-sm text-slate-500">
                Required fields help us avoid a useless “starting from…” reply.
              </p>
              <div className="mt-6">
                <LeadForm intent="quote" variant="full" />
              </div>
            </div>
          </FadeItem>
        </div>
      </MotionSection>
    </>
  )
}

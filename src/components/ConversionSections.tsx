import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck } from "lucide-react"
import {
  comparisonRows,
  objections,
  onboardingSteps,
  proofStats,
  quoteDrivers,
  roiOutcomes,
  securityPoints,
} from "../data/conversion"
import { FadeItem, MotionSection } from "./Motion"
import { SectionHeading } from "./ui/SectionHeading"
import { LeadForm } from "./LeadForm"

/** Compact proof rail — metrics as a strip, not a card farm. */
export function ProofBar() {
  return (
    <MotionSection className="border-y border-white/8 bg-black text-white">
      <div className="section-pad mx-auto max-w-6xl">
        <div className="grid gap-1 py-2 sm:grid-cols-4 sm:gap-0">
          {proofStats.map((s) => (
            <FadeItem key={s.label}>
              <div className="rounded-2xl px-4 py-7 text-center transition hover:bg-white/[0.03] sm:px-5 sm:text-left">
                <p className="font-display text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-[1.85rem]">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-white/75">{s.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/35">{s.hint}</p>
              </div>
            </FadeItem>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export function RoiSection() {
  return (
    <MotionSection className="section-space bg-white">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          align="left"
          eyebrow="Outcomes buyers care about"
          title="What you should feel in the first quarter"
          description="Not vanity dashboards — fewer chases, cleaner month-end, and a Monday view leadership can trust."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {roiOutcomes.map((o) => (
            <FadeItem key={o.title}>
              <article className="rounded-2xl border border-slate-200 bg-[#f0f3f7] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">{o.metric}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{o.body}</p>
              </article>
            </FadeItem>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export function ComparisonSection() {
  return (
    <MotionSection className="section-space bg-[#f0f3f7]">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          align="left"
          eyebrow="Why quote Nexsyst"
          title="Spreadsheets vs point tools vs one workspace"
          description="Procurement asks “why not keep what we have?” This is the honest comparison."
        />
        <FadeItem>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Workflow</th>
                  <th className="px-4 py-3 font-semibold">Spreadsheets</th>
                  <th className="px-4 py-3 font-semibold">Separate apps</th>
                  <th className="px-4 py-3 font-semibold text-[#3d7eff]">Nexsyst</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r) => (
                  <tr key={r.label} className="border-b border-slate-100">
                    <td className="px-4 py-3 font-semibold text-slate-900">{r.label}</td>
                    <td className="px-4 py-3 text-slate-500">{r.spreadsheets}</td>
                    <td className="px-4 py-3 text-slate-500">{r.pointTools}</td>
                    <td className="px-4 py-3 font-medium text-slate-900">{r.nexsyst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeItem>
        <div className="mt-6">
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Get a quotation for your mix
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </MotionSection>
  )
}

export function ObjectionsSection() {
  return (
    <MotionSection className="section-space bg-white">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          align="left"
          eyebrow="Straight answers"
          title="The questions that usually delay a quote"
          description="We answered them here so you can move to a commercial conversation faster."
        />
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {objections.map((o) => (
            <FadeItem key={o.q}>
              <details className="group rounded-xl border border-slate-200 bg-[#f0f3f7] p-5 open:bg-white open:shadow-sm">
                <summary className="cursor-pointer list-none text-sm font-bold text-slate-900 marker:content-none">
                  <span className="flex items-start justify-between gap-3">
                    {o.q}
                    <span className="text-slate-700 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{o.a}</p>
              </details>
            </FadeItem>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export function OnboardingSection() {
  return (
    <MotionSection id="solutions" className="section-space bg-[#050a14] text-white">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          light
          align="left"
          eyebrow="Path to yes"
          title="From enquiry to a quotation you can approve"
          description="Modeled on how mid-market buyers actually buy — discovery, scoped commercial, pilot, expand."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {onboardingSteps.map((s) => (
            <FadeItem key={s.step}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-slate-300">{s.step}</p>
                <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.body}</p>
              </div>
            </FadeItem>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export function SecuritySection() {
  return (
    <MotionSection className="section-space bg-[#f0f3f7]">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          align="left"
          eyebrow="Trust & security"
          title="What procurement usually asks before signing"
          description="Enough clarity to unblock legal and IT — details go into your proposal."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {securityPoints.map((p) => (
            <FadeItem key={p.title}>
              <article className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                <div>
                  <h3 className="font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{p.body}</p>
                </div>
              </article>
            </FadeItem>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Read our{" "}
          <Link to="/privacy" className="font-semibold text-slate-800 hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/terms" className="font-semibold text-slate-800 hover:underline">
            Terms & Conditions
          </Link>
          .
        </p>
      </div>
    </MotionSection>
  )
}

export function QuoteDriversSection() {
  return (
    <MotionSection className="section-space bg-white">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          align="left"
          eyebrow="Transparent commercials"
          title="What affects your quotation"
          description="We publish the drivers so “custom pricing” still feels fair — then we put numbers on your scope."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quoteDrivers.map((d) => (
            <FadeItem key={d.title}>
              <article className="h-full rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.body}</p>
              </article>
            </FadeItem>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

/** Homepage mid-page quote capture — converts without forcing navigation */
export function InlineQuoteCapture() {
  return (
    <MotionSection id="get-quote" className="relative overflow-hidden border-t border-white/8 py-20 text-white sm:py-28">
      <div className="aurora absolute inset-0" aria-hidden />
      <div className="section-pad relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <FadeItem>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8eb4ff]">
            Request a quotation
          </p>
          <h2 className="mt-3 text-[clamp(1.85rem,3.8vw,2.7rem)] font-extrabold leading-[1.1] tracking-[-0.035em]">
            Ready for a number? Tell us the scope.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Select modules, approximate users, and timeline. We come back with a scoped outline — or a
            30-minute call if we need one detail to price fairly.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/50">
            <li className="before:mr-2 before:text-[#3d7eff] before:content-['▸']">
              No obligation quotation
            </li>
            <li className="before:mr-2 before:text-[#3d7eff] before:content-['▸']">
              Line-item style proposal after discovery
            </li>
            <li className="before:mr-2 before:text-[#3d7eff] before:content-['▸']">
              Pilot-scoped options welcome
            </li>
          </ul>
        </FadeItem>
        <FadeItem>
          <div className="glass rounded-[1.35rem] p-6 sm:p-8">
            <LeadForm intent="quote" variant="panel" />
          </div>
        </FadeItem>
      </div>
    </MotionSection>
  )
}

import { Link } from "react-router-dom"
import { pricingTiers } from "../data/erp"
import { FadeItem, MotionSection } from "./Motion"
import { SectionHeading } from "./ui/SectionHeading"

export function Pricing() {
  return (
    <MotionSection id="pricing" ariaLabelledBy="pricing-heading" className="section-space">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          id="pricing-heading"
          align="left"
          eyebrow="Pricing"
          title="Custom quotes — with clear package starting points"
          description="Every engagement is scoped. These packages help you self-qualify before you request a formal quotation."
        />

        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <FadeItem key={tier.name}>
              <article
                className={`flex h-full flex-col rounded-xl p-6 ${
                  tier.featured ? "bg-[#050a14] text-white shadow-lg" : "page-surface"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                    tier.featured ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {tier.name}
                </p>
                <p className="mt-3 text-3xl font-bold tracking-tight">{tier.price}</p>
                <p className={`mt-2 text-sm leading-relaxed ${tier.featured ? "text-white/65" : "text-slate-600"}`}>
                  {tier.blurb}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {tier.points.map((p) => (
                    <li
                      key={p}
                      className={`text-sm ${tier.featured ? "text-white/80" : "text-slate-700"}`}
                    >
                      <span className={tier.featured ? "text-slate-300" : "text-slate-700"}>✓ </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/quote"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold ${
                    tier.featured
                      ? "bg-white text-slate-900 hover:bg-slate-100"
                      : "btn-primary"
                  }`}
                >
                  Request this quotation
                </Link>
              </article>
            </FadeItem>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-slate-600">
          Prefer a walkthrough before commercials?{" "}
          <Link to="/contact" className="font-semibold text-slate-800 hover:underline">
            Book a demo
          </Link>
          . Most buyers do both — demo to confirm fit, quotation to get approval.
        </p>
      </div>
    </MotionSection>
  )
}

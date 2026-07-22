import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { FadeItem, MotionSection } from "./Motion"
import { buyPath, purchaseComfort } from "../data/content"

export function BuyPath() {
  return (
    <MotionSection
      id="buy"
      className="section-pad relative overflow-hidden bg-white py-24 md:py-28"
      ariaLabelledBy="buy-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">How to buy</p>
          <h2
            id="buy-heading"
            className="mt-3 max-w-2xl font-display text-[clamp(1.85rem,3.5vw,2.7rem)] font-bold leading-tight text-ink text-balance"
          >
            A calm path from interest to go-live
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            No pressure checkout. Industrial software deserves a clear demo, a scoped quote, and support through
            cutover — so your team feels safe saying yes.
          </p>
        </FadeItem>

        <ol className="mt-12 grid gap-5 lg:grid-cols-3">
          {buyPath.map((step) => (
            <FadeItem key={step.step}>
              <li className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-surface to-white p-7 shadow-[0_20px_40px_-36px_rgba(12,21,36,0.35)]">
                <span className="font-display text-4xl font-extrabold tracking-tight text-accent/25">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-muted">{step.body}</p>
              </li>
            </FadeItem>
          ))}
        </ol>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {purchaseComfort.map((item) => (
            <FadeItem key={item.title}>
              <div className="h-full rounded-xl border border-accent/15 bg-accent/[0.04] p-5">
                <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </FadeItem>
          ))}
        </div>

        <FadeItem>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/#contact"
              className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold"
            >
              Start with a demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-sm text-muted">Typical response within one business day.</p>
          </div>
        </FadeItem>
      </div>
    </MotionSection>
  )
}

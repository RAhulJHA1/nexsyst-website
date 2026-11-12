import { FadeItem, MotionSection } from "./Motion"
import { whyNexsyst } from "../data/content"

export function WhyNexsyst() {
  return (
    <MotionSection
      id="why"
      className="section-pad bg-brand py-24 text-white md:py-28"
      ariaLabelledBy="why-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Why Nexsyst</p>
          <h2
            id="why-heading"
            className="mt-3 max-w-2xl font-display text-[clamp(1.85rem,3.5vw,2.6rem)] font-bold leading-tight text-balance"
          >
            Suite power without the silo tax
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            Stop stitching together separate tools for CRM, QC, energy, and payroll. Nexsyst is one connected
            system — familiar suite thinking, industrial DNA.
          </p>
        </FadeItem>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {whyNexsyst.map((item) => (
            <FadeItem key={item.title}>
              <article className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-white/60">{item.body}</p>
              </article>
            </FadeItem>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

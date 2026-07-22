import { FadeItem, MotionSection } from "./Motion"
import { industries } from "../data/content"

export function Industries() {
  return (
    <MotionSection
      id="industries"
      className="section-pad bg-canvas py-24 md:py-28"
      ariaLabelledBy="industries-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">Industries</p>
          <h2
            id="industries-heading"
            className="mt-3 max-w-xl font-display text-[clamp(1.75rem,3vw,2.4rem)] font-bold text-ink"
          >
            Built for continuous-process environments
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            The same suite adapts to how your industry works — compliance depth for pharma, energy and OEE for
            cement, high-speed KPIs for CPG.
          </p>
        </FadeItem>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <FadeItem key={ind.name}>
              <article className="h-full rounded-xl border border-line bg-white p-5 shadow-[0_1px_0_rgba(12,21,36,0.04)]">
                <h3 className="font-display text-lg font-bold text-ink">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{ind.blurb}</p>
              </article>
            </FadeItem>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

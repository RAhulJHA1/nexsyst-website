import { FadeItem, MotionSection } from "./Motion"
import { howItWorks } from "../data/content"

export function HowItWorks() {
  return (
    <MotionSection
      id="how"
      className="section-pad bg-surface py-24 md:py-28"
      ariaLabelledBy="how-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">How it works</p>
          <h2
            id="how-heading"
            className="mt-3 max-w-xl font-display text-[clamp(1.75rem,3vw,2.4rem)] font-bold text-ink"
          >
            Ease into a new way of working
          </h2>
        </FadeItem>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {howItWorks.map((step) => (
            <FadeItem key={step.step}>
              <li className="h-full rounded-2xl border border-line bg-white p-6">
                <span className="font-display text-sm font-bold text-steel">{step.step}</span>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{step.body}</p>
              </li>
            </FadeItem>
          ))}
        </ol>
      </div>
    </MotionSection>
  )
}

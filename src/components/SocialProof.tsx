import { FadeItem, MotionSection } from "./Motion"
import { testimonials } from "../data/content"

export function SocialProof() {
  return (
    <MotionSection
      id="stories"
      className="section-pad bg-brand py-24 text-white md:py-28"
      ariaLabelledBy="stories-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Customer confidence</p>
          <h2
            id="stories-heading"
            className="mt-3 max-w-2xl font-display text-[clamp(1.85rem,3.5vw,2.6rem)] font-bold leading-tight text-balance"
          >
            Plants choose Nexsyst when the cost of chaos gets higher than the cost of change
          </h2>
        </FadeItem>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <FadeItem key={t.role + t.context}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
                <blockquote className="flex-1 text-[1.05rem] leading-relaxed text-white/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-display text-sm font-bold text-white">{t.role}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-white/45">{t.context}</div>
                </figcaption>
              </figure>
            </FadeItem>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

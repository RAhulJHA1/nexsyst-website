import { benefits } from "../data/erp"
import { FadeItem, HoverLift, MotionSection } from "./Motion"
import { SectionHeading } from "./ui/SectionHeading"

export function WhyChooseErp() {
  return (
    <MotionSection ariaLabelledBy="why-heading" className="section-space">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          id="why-heading"
          align="left"
          eyebrow="Why teams stay"
          title="What changes after the first month"
          description="Less rebuilding. Fewer “final” files. Approvals that find the right person. Finance and operations arguing about exceptions — not about which sheet is true."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <HoverLift key={b.title}>
                <FadeItem>
                  <article className="page-surface h-full p-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 text-base font-bold text-slate-900">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.body}</p>
                  </article>
                </FadeItem>
              </HoverLift>
            )
          })}
        </div>
      </div>
    </MotionSection>
  )
}

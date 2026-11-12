import { industries } from "../data/erp"
import { FadeItem, HoverLift, MotionSection } from "./Motion"
import { SectionHeading } from "./ui/SectionHeading"

export function Industries() {
  return (
    <MotionSection id="industries" ariaLabelledBy="industries-heading" className="section-space bg-white">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          id="industries-heading"
          align="left"
          eyebrow="Who it’s for"
          title="Familiar problems, different industries"
          description="The modules stay the same. The pain points don’t — manufacturing rushes POs; services chase receivables; HR fights month-end."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon
            return (
              <HoverLift key={item.name}>
                <FadeItem>
                  <article className="page-surface group relative overflow-hidden p-5">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#050a14] text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
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

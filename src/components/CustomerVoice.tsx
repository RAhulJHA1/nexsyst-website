import { FadeItem, MotionSection } from "./Motion"
import { SectionHeading } from "./ui/SectionHeading"

const voices = [
  {
    quote:
      "Before Nexsyst, month-end meant three people rebuilding attendance into payroll. Now the run starts from the same muster we already trust.",
    role: "HR lead · mid-size manufacturing",
  },
  {
    quote:
      "Purchase used to discover closed deals late. When CRM and PO share the same workspace, the rush orders drop — and so do the apologies.",
    role: "Purchase manager · engineering services",
  },
  {
    quote:
      "We didn’t need another dashboard. We needed Tally and operations to stop arguing about stock. The sync made that conversation shorter.",
    role: "Finance controller · trading company",
  },
]

export function CustomerVoice() {
  return (
    <MotionSection className="section-space bg-[#f0f3f7]">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="From the floor"
          title="What customers say when the noise drops"
          description="Composite voices from the kinds of teams Nexsyst is built for — ops, HR, purchase, and finance working the same week."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {voices.map((v) => (
            <FadeItem key={v.role}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="flex-1 text-[15px] leading-relaxed text-slate-700">“{v.quote}”</p>
                <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-800">
                  {v.role}
                </footer>
              </blockquote>
            </FadeItem>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

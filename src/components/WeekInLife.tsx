import { FadeItem, MotionSection } from "./Motion"
import { SectionHeading } from "./ui/SectionHeading"

const days = [
  {
    day: "Mon",
    title: "Sales updates the pipeline",
    detail:
      "A won opportunity lands with customer, value, and delivery notes already attached — purchase can see demand without a separate brief.",
  },
  {
    day: "Tue",
    title: "Purchase raises the PO",
    detail:
      "Vendors, approvals, and line items stay in Nexsyst. Receiving and returns don’t need a parallel Excel tracker.",
  },
  {
    day: "Wed",
    title: "People mark attendance & leave",
    detail:
      "Muster, leave balances, and gate pass requests feed the same employee record HR and payroll already trust.",
  },
  {
    day: "Thu",
    title: "Finance checks Tally-linked reality",
    detail:
      "Invoices and stock masters sync so commercial ops and accounting argue less about “which number is right.”",
  },
  {
    day: "Fri",
    title: "Payroll run is a review — not a rebuild",
    detail:
      "Payable days, structures, and statutory pieces are already in the run. Managers approve exceptions, not recreate the month.",
  },
]

export function WeekInLife() {
  return (
    <MotionSection id="how-it-works" ariaLabelledBy="week-heading" className="section-space bg-white">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          id="week-heading"
          eyebrow="How it works"
          title="What a normal week looks like when the handoffs stay inside Nexsyst"
          description="Not a feature list — a week your ops lead, purchase head, and HR manager would recognize."
        />

        <ol className="mt-12 space-y-4">
          {days.map((d, i) => (
            <FadeItem key={d.day}>
              <li className="grid gap-4 rounded-2xl border border-slate-200 bg-[#f0f3f7] p-5 sm:grid-cols-[88px_1fr] sm:items-start">
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-slate-300">
                    {i + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {d.day}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{d.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{d.detail}</p>
                </div>
              </li>
            </FadeItem>
          ))}
        </ol>
      </div>
    </MotionSection>
  )
}

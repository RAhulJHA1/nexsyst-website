import { Factory, FolderKanban, Package, Users } from "lucide-react"
import { FadeItem, MotionSection } from "./Motion"

const audiences = [
  {
    icon: Factory,
    title: "Manufacturing ops",
    body: "Purchase, receiving, and payroll stop living in three chats. One chain from PO to payslip.",
  },
  {
    icon: FolderKanban,
    title: "Engineering & projects",
    body: "Won opportunities shouldn’t disappear into a shared drive. CRM demand feeds purchase and delivery.",
  },
  {
    icon: Package,
    title: "Trading & distribution",
    body: "Sales, stock, and Tally stop arguing at month-end when ops and finance share a closer truth.",
  },
  {
    icon: Users,
    title: "HR & finance",
    body: "Muster and leave already exist. Payroll should start from them — not from a rebuilt spreadsheet.",
  },
]

/** Editorial audience band — not another 4-card metric farm. */
export function TrustStrip() {
  return (
    <MotionSection className="border-b border-slate-200 bg-white">
      <div className="section-pad mx-auto max-w-6xl py-14 md:py-16">
        <FadeItem>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d7eff]">Who it’s for</p>
            <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.15rem)] font-extrabold tracking-tight text-slate-900">
              Built for teams who feel the handoff pain every week
            </h2>
          </div>
        </FadeItem>

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {audiences.map((a) => {
            const Icon = a.icon
            return (
              <FadeItem key={a.title}>
                <div className="grid gap-3 py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#050a14] text-[#8eb4ff]">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <p className="font-bold text-slate-900">{a.title}</p>
                  </div>
                  <p className="text-[15px] leading-relaxed text-slate-600 sm:pt-2">{a.body}</p>
                </div>
              </FadeItem>
            )
          })}
        </div>
      </div>
    </MotionSection>
  )
}

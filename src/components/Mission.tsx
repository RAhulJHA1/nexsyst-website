import { FadeItem, MotionSection } from "./Motion"
import { brand } from "../data/content"

/** Mission / about — answer-first for AEO with cinematic reveal. */
export function Mission() {
  return (
    <MotionSection
      id="about"
      className="section-pad section-space relative overflow-hidden border-b border-line"
      ariaLabelledBy="mission-heading"
    >
      <div className="pointer-events-none absolute inset-0 aurora opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Mission</p>
          <h2
            id="mission-heading"
            className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.08] tracking-tight text-balance"
          >
            {brand.suiteLine} — one integrated suite for process plants and industrial teams.
          </h2>
        </FadeItem>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeItem>
            <p className="text-lg leading-relaxed text-muted md:text-[1.15rem]">
              <strong className="font-semibold text-white">{brand.name}</strong> is the official industrial
              software brand for manufacturing and process industries. Plant apps cover Energy Management,
              Alarm Management, Audit Trail, QC Log Book, Batch Report, and OEE. Business apps cover CRM,
              purchase orders, inventory, assets, projects, HR, payroll, expenses, and gate pass.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted md:text-[1.15rem]">
              We also deliver cloud services, enterprise AI/ML integration, and RAG — so plant knowledge and
              operations stay connected to the systems that run the business.
            </p>
          </FadeItem>
          <FadeItem>
            <div className="glass grid gap-4 rounded-3xl p-6 sm:p-8">
              {[
                { label: "Plant intelligence", value: "Energy · Alarms · QC · Batch · OEE" },
                { label: "Business suite", value: "CRM · PO · Inventory · People · Projects" },
                { label: "Advanced services", value: "Cloud · AI/ML · RAG · OT–IT" },
              ].map((row) => (
                <div key={row.label} className="border-b border-line pb-4 last:border-0 last:pb-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">{row.label}</p>
                  <p className="mt-2 font-display text-lg font-semibold text-white">{row.value}</p>
                </div>
              ))}
            </div>
          </FadeItem>
        </div>
      </div>
    </MotionSection>
  )
}

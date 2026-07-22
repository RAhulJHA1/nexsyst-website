import { FadeItem, MotionSection } from "./Motion"
import { brand } from "../data/content"

/** Answer-first block for AEO / featured snippets. */
export function AnswerBlock() {
  return (
    <MotionSection
      id="about"
      className="section-pad border-b border-line bg-canvas py-20 md:py-24"
      ariaLabelledBy="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">What is NexSyst?</p>
          <h2
            id="about-heading"
            className="mt-3 max-w-3xl font-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-tight text-ink text-balance"
          >
            {brand.suiteLine} — one integrated suite for process plants and industrial teams.
          </h2>
        </FadeItem>

        <FadeItem>
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              <strong className="font-semibold text-ink">{brand.name}</strong> is an all-in-one software suite
              for manufacturing and process industries. Plant apps cover Energy Management, Alarm Management,
              Audit Trail, QC Log Book, Batch Report, and OEE. Business apps cover CRM, purchase orders,
              inventory, assets, projects, HR, payroll, expenses, and gate pass.
            </p>
            <p>
              Teams share one login, one permission model, and one set of masters — so sales, stores, QA, and
              operators work from the same system instead of disconnected tools. Start with a few apps, then
              expand across the suite as you grow.
            </p>
          </div>
        </FadeItem>
      </div>
    </MotionSection>
  )
}

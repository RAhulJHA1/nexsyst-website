import { FadeItem, HoverLift, MotionSection } from "./Motion"
import { platformModules } from "../data/content"

export function Platform() {
  return (
    <MotionSection
      id="platform"
      className="section-pad relative overflow-hidden bg-surface py-24 md:py-32"
      ariaLabelledBy="platform-heading"
    >
      <div className="relative mx-auto max-w-6xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">Business apps</p>
          <h2
            id="platform-heading"
            className="mt-3 max-w-2xl font-display text-[clamp(1.85rem,3.5vw,2.75rem)] font-bold leading-tight text-ink text-balance"
          >
            Everything around the plant — sales, supply, people, projects
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Like a full business suite, NexSyst includes the apps your office and floor teams already need —
            integrated with plant products so data never stops at the control room door.
          </p>
        </FadeItem>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platformModules.map((mod) => (
            <FadeItem key={mod.name}>
              <HoverLift className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition duration-300 hover:border-accent/40 hover:bg-surface">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-steel">
                    {mod.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{mod.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{mod.blurb}</p>
                </div>
              </HoverLift>
            </FadeItem>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

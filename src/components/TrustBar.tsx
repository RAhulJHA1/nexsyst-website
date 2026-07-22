import { FadeItem, MotionSection } from "./Motion"
import { trustChips } from "../data/content"
import { ShieldCheck, Layers, Headset, Cloud } from "lucide-react"

const icons = [Layers, ShieldCheck, Headset, Cloud]

export function TrustBar() {
  return (
    <MotionSection className="border-b border-line bg-surface" ariaLabelledBy="trust-heading">
      <h2 id="trust-heading" className="sr-only">
        Why buyers trust NexSyst
      </h2>
      <div className="section-pad mx-auto grid max-w-6xl gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {trustChips.map((chip, i) => {
          const Icon = icons[i]!
          return (
            <FadeItem key={chip}>
              <div className="flex items-start gap-3 rounded-xl border border-line/80 bg-surface/80 px-4 py-3.5">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-deep">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <p className="text-sm font-semibold leading-snug text-ink">{chip}</p>
              </div>
            </FadeItem>
          )
        })}
      </div>
    </MotionSection>
  )
}

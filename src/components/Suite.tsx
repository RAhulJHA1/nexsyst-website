import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { FadeItem, MotionSection, easeOut } from "./Motion"
import { brand, suitePillars } from "../data/content"

export function Suite() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const pillar = suitePillars[active]!

  return (
    <MotionSection
      id="suite"
      className="section-pad bg-canvas py-24 md:py-32"
      ariaLabelledBy="suite-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">NexSyst One</p>
          <h2
            id="suite-heading"
            className="mt-3 max-w-3xl font-display text-[clamp(1.85rem,3.5vw,2.75rem)] font-bold leading-tight text-ink text-balance"
          >
            {brand.suiteLine}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            All your teams — plant, sales, stores, HR, and projects — better together as one. Pick the apps that
            fix today&apos;s pain, then expand across the suite without changing platforms.
          </p>
        </FadeItem>

        <FadeItem>
          <div
            className="mt-10 flex flex-wrap gap-2 border-b border-line pb-1"
            role="tablist"
            aria-label="Suite areas"
          >
            {suitePillars.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`rounded-md px-3.5 py-2 text-sm font-semibold transition ${
                  active === i
                    ? "bg-brand text-white"
                    : "bg-white text-muted hover:text-ink border border-line"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </FadeItem>

        <AnimatePresence mode="wait">
          <motion.div
            key={pillar.id}
            role="tabpanel"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="mt-8 grid gap-8 rounded-2xl border border-line bg-white p-7 md:grid-cols-[1.2fr_1fr] md:p-10"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">{pillar.headline}</h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{pillar.body}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex text-sm font-semibold text-steel hover:text-accent-deep"
              >
                Talk through this area →
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Apps in this area</p>
              <ul className="mt-3 space-y-2">
                {pillar.apps.map((app) => (
                  <li
                    key={app}
                    className="rounded-md border border-line bg-surface px-3 py-2.5 text-sm font-medium text-ink before:mr-2 before:text-accent before:content-['▸']"
                  >
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </MotionSection>
  )
}

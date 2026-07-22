import { motion, useReducedMotion } from "framer-motion"
import { MapPin } from "lucide-react"
import { FadeItem, HoverLift, MotionSection } from "./Motion"
import { Logo } from "./Logo"

const hubs = [
  { label: "India", region: "APAC hub", blurb: "Delivery, support & plant programs" },
  { label: "USA", region: "Americas", blurb: "Cloud & enterprise engagements" },
  { label: "Europe", region: "EMEA", blurb: "Compliance-ready rollouts" },
  { label: "Singapore", region: "SEA", blurb: "Regional cloud & AI delivery" },
] as const

export function GlobalPresence() {
  const reduce = useReducedMotion()

  return (
    <MotionSection
      id="presence"
      className="section-pad relative overflow-hidden py-24 md:py-28"
      ariaLabelledBy="presence-heading"
    >
      <div className="pointer-events-none absolute inset-0 aurora opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <FadeItem>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Global delivery</p>
            <h2
              id="presence-heading"
              className="mt-3 max-w-xl font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold text-white text-balance"
            >
              Connected teams. Worldwide reach.
            </h2>
            <p className="mt-4 max-w-lg text-lg text-white/55">
              We build and support cloud, AI, and industrial software programs across regions — with secure
              delivery hubs you can trust.
            </p>
            <div className="mt-8 inline-flex rounded-2xl glass p-4">
              <Logo variant="full" tone="onDark" className="!h-12 sm:!h-14 !max-w-[280px]" />
            </div>
          </FadeItem>

          <FadeItem>
            <div className="relative">
              {/* subtle network backdrop */}
              <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" aria-hidden>
                <defs>
                  <linearGradient id="hub-line" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#6c63ff" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <motion.line
                  x1="20%"
                  y1="25%"
                  x2="80%"
                  y2="25%"
                  stroke="url(#hub-line)"
                  strokeWidth="1"
                  animate={reduce ? undefined : { opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                />
                <motion.line
                  x1="20%"
                  y1="25%"
                  x2="20%"
                  y2="75%"
                  stroke="url(#hub-line)"
                  strokeWidth="1"
                  animate={reduce ? undefined : { opacity: [0.25, 0.8, 0.25] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
                />
                <motion.line
                  x1="80%"
                  y1="25%"
                  x2="80%"
                  y2="75%"
                  stroke="url(#hub-line)"
                  strokeWidth="1"
                  animate={reduce ? undefined : { opacity: [0.25, 0.8, 0.25] }}
                  transition={{ duration: 3.8, repeat: Infinity, delay: 0.5 }}
                />
                <motion.line
                  x1="20%"
                  y1="75%"
                  x2="80%"
                  y2="75%"
                  stroke="url(#hub-line)"
                  strokeWidth="1"
                  animate={reduce ? undefined : { opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 4.2, repeat: Infinity, delay: 0.2 }}
                />
              </svg>

              <div className="relative grid gap-4 sm:grid-cols-2">
                {hubs.map((hub, i) => (
                  <HoverLift key={hub.label}>
                    <motion.article
                      className="glass relative overflow-hidden rounded-2xl p-5"
                      animate={reduce ? undefined : { y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                      transition={{ duration: 4.5 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="relative mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                          <MapPin className="h-4 w-4" aria-hidden />
                          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_#00e5ff]" />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-bold text-white">{hub.label}</h3>
                          <p className="mt-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent/80">
                            {hub.region}
                          </p>
                          <p className="mt-2 text-sm text-white/50">{hub.blurb}</p>
                        </div>
                      </div>
                    </motion.article>
                  </HoverLift>
                ))}
              </div>
            </div>
          </FadeItem>
        </div>
      </div>
    </MotionSection>
  )
}

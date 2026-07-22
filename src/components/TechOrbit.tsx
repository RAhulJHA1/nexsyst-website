import { motion, useReducedMotion } from "framer-motion"
import { Cloud, Boxes, Brain, Code2, Container, Server, Workflow } from "lucide-react"
import { FadeItem, HoverLift, MotionSection } from "./Motion"
import { Logo } from "./Logo"

const stack = [
  { label: "Azure", icon: Cloud },
  { label: "Docker", icon: Container },
  { label: "AI / ML", icon: Brain },
  { label: "React", icon: Code2 },
  { label: "Kubernetes", icon: Boxes },
  { label: ".NET", icon: Server },
  { label: "DevOps", icon: Workflow },
] as const

export function TechOrbit() {
  const reduce = useReducedMotion()

  return (
    <MotionSection
      id="stack"
      className="section-pad relative overflow-hidden border-y border-white/10 bg-surface py-24 md:py-28"
      ariaLabelledBy="stack-heading"
    >
      <div className="pointer-events-none absolute inset-0 aurora opacity-25" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <FadeItem>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Technology</p>
            <h2
              id="stack-heading"
              className="mt-3 max-w-xl font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold text-white text-balance"
            >
              Modern stack. Industrial outcomes.
            </h2>
            <p className="mt-4 max-w-lg text-lg text-white/55">
              Cloud platforms, containers, AI, and enterprise engineering sit around one brand —
              delivered with the same quality you see in the logo.
            </p>
            <div className="mt-8 inline-flex rounded-2xl glass p-4">
              <Logo variant="full" tone="onDark" className="!h-12 sm:!h-14 !max-w-[260px]" />
            </div>
          </FadeItem>

          <FadeItem>
            <div className="relative">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
                animate={reduce ? undefined : { scale: [1, 1.2, 1], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">
                {stack.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <HoverLift key={item.label} className={i === stack.length - 1 ? "sm:col-start-2" : undefined}>
                      <motion.div
                        className="glass flex flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center"
                        animate={reduce ? undefined : { y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                        transition={{ duration: 4 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-deep/30 text-accent">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="text-sm font-semibold text-white/90">{item.label}</span>
                      </motion.div>
                    </HoverLift>
                  )
                })}
              </div>
            </div>
          </FadeItem>
        </div>
      </div>
    </MotionSection>
  )
}

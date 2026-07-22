import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FadeItem, MotionSection } from "./Motion"
import { howItWorks } from "../data/content"

export function HowItWorks() {
  const reduce = useReducedMotion()
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 40%"],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0.08, 1])

  return (
    <MotionSection
      id="how"
      className="section-pad relative overflow-hidden py-24 md:py-28"
      ariaLabelledBy="how-heading"
    >
      <div className="relative mx-auto max-w-6xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Delivery timeline</p>
          <h2
            id="how-heading"
            className="mt-3 max-w-xl font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white"
          >
            Discover → Design → Develop → Deploy → Support
          </h2>
        </FadeItem>

        <div ref={trackRef} className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 md:block" aria-hidden />
          <motion.div
            className="absolute left-0 top-7 hidden h-px origin-left bg-gradient-to-r from-accent via-accent-deep to-steel md:block"
            style={{ scaleX: reduce ? 1 : lineScale }}
            aria-hidden
          />

          <ol className="grid gap-5 md:grid-cols-5">
            {howItWorks.map((step, i) => (
              <FadeItem key={step.step}>
                <li className="relative">
                  <motion.div
                    className="mb-4 flex h-14 items-start md:justify-center"
                    whileInView={reduce ? undefined : { scale: [0.85, 1.08, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.55 }}
                  >
                    <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/50 bg-brand text-xs font-bold text-accent shadow-[0_0_20px_rgba(0,229,255,0.45)]">
                      {step.step}
                    </span>
                  </motion.div>
                  <article className="glass h-full rounded-2xl p-4 md:p-5">
                    <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{step.body}</p>
                  </article>
                </li>
              </FadeItem>
            ))}
          </ol>
        </div>
      </div>
    </MotionSection>
  )
}

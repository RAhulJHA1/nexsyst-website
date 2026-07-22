import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { FadeItem, MotionSection } from "./Motion"
import { stats } from "../data/content"

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.55 })
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setN(value)
      return
    }
    const start = performance.now()
    const duration = 1600
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 4)
      setN(Math.round(value * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduce, value])

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  )
}

export function Stats() {
  const reduce = useReducedMotion()

  return (
    <MotionSection
      className="relative overflow-hidden border-y border-white/10 bg-surface"
      ariaLabelledBy="stats-heading"
    >
      <h2 id="stats-heading" className="sr-only">
        NexSyst delivery metrics
      </h2>
      <div className="section-pad mx-auto grid max-w-6xl grid-cols-2 gap-8 py-16 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeItem key={stat.label}>
            <motion.div
              className="glass relative rounded-2xl p-5"
              whileHover={reduce ? undefined : { y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="font-display text-3xl font-bold text-glow text-white md:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                {stat.label}
              </div>
              <motion.div
                aria-hidden
                className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.7 }}
              />
            </motion.div>
          </FadeItem>
        ))}
      </div>
    </MotionSection>
  )
}

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { FadeItem, MotionSection } from "./Motion"
import { stats } from "../data/content"

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setN(value)
      return
    }
    const start = performance.now()
    const duration = 1100
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.round(value * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduce, value])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <MotionSection className="relative overflow-hidden border-b border-line bg-white" ariaLabelledBy="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        NexSyst delivery metrics
      </h2>
      <div className="section-pad mx-auto grid max-w-6xl grid-cols-2 gap-8 py-14 sm:grid-cols-4">
        {stats.map((stat) => (
          <FadeItem key={stat.label}>
            <motion.div whileHover={{ y: -2 }} className="relative">
              <div className="font-display text-3xl font-bold text-ink md:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </div>
            </motion.div>
          </FadeItem>
        ))}
      </div>
    </MotionSection>
  )
}

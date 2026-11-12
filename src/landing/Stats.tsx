import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "framer-motion"
import { stats } from "./data"
import { Reveal, Stagger, StaggerItem } from "./Motion"

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!active) return
    if (reduce) {
      setValue(target)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration, reduce])

  return value
}

function StatCard({
  value,
  suffix,
  label,
  active,
}: {
  value: number
  suffix: string
  label: string
  active: boolean
}) {
  const n = useCountUp(value, active)
  return (
    <div className="card-ocean px-5 py-7 text-center">
      <p className="text-3xl font-extrabold tracking-tight text-[#d5dbe5] sm:text-4xl">
        {n}
        <span className="text-[#4a9a8e]">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-[#a8b2c1]">{label}</p>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })

  return (
    <section id="stats" ref={ref} className="section-space border-y border-[rgba(168,178,193,0.1)] bg-[#0f1419]">
      <div className="section-pad mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a9a8e]">By the numbers</p>
            <h2 className="mt-3 text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold text-[#d5dbe5]">
              Built for mid-market teams that need control
            </h2>
          </div>
        </Reveal>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <StatCard value={s.value} suffix={s.suffix} label={s.label} active={inView} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

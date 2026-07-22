import { Link } from "react-router-dom"
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef, type MouseEvent } from "react"
import { brand, trustChips } from "../data/content"
import { easeOut, ParallaxBlob } from "./Motion"

const showcase = [
  { name: "Energy Management", metric: "vs target", value: "−18%" },
  { name: "Alarm Management", metric: "critical open", value: "3" },
  { name: "QC Log Book", metric: "checks done", value: "92%" },
  { name: "AI · Cloud · RAG", metric: "enterprise services", value: "Live" },
] as const

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 90, damping: 18 })
  const sy = useSpring(my, { stiffness: 90, damping: 18 })
  const rotateX = useTransform(sy, [-30, 30], [3, -3])
  const rotateY = useTransform(sx, [-30, 30], [-4, 4])

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 40)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 40)
  }

  return (
    <header
      id="top"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0)
        my.set(0)
      }}
      className="mesh-hero relative min-h-[100svh] overflow-hidden text-white"
    >
      <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute inset-0 aurora opacity-60" aria-hidden />
      <ParallaxBlob
        speed={40}
        className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />
      <ParallaxBlob
        speed={-28}
        className="pointer-events-none absolute -right-16 bottom-10 h-96 w-96 rounded-full bg-accent-deep/25 blur-3xl"
      />

      <motion.div
        className="section-pad relative mx-auto grid max-w-6xl gap-12 pb-20 pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12 lg:pb-28 lg:pt-32"
        style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
      >
        <div>
          <motion.p
            className="font-display text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[0.92] tracking-tight text-white"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            {brand.name}
          </motion.p>

          <motion.p
            className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/45"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {brand.tagline}
          </motion.p>

          <motion.h1
            className="mt-6 max-w-xl font-display text-[clamp(1.35rem,2.8vw,2rem)] font-bold leading-[1.15] tracking-tight text-white"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
          >
            Engineering the Future with
            <span className="mt-2 block text-accent">AI · Cloud · DevOps · Automation</span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-white/60"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
          >
            Industrial software suite plus cloud services, enterprise AI/ML, and RAG — start small, prove value,
            expand with confidence.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            <motion.div whileHover={reduce ? undefined : { y: -4, scale: 1.03 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Link to="/#contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                Get started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={reduce ? undefined : { y: -4, scale: 1.02 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Link
                to="/#contact"
                className="glass inline-flex items-center rounded-full px-7 py-3.5 text-sm font-semibold text-white transition hover:border-accent/40"
              >
                Book demo
              </Link>
            </motion.div>
          </motion.div>

          <motion.ul
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {trustChips.slice(0, 3).map((chip) => (
              <li key={chip} className="flex items-center gap-1.5 text-xs text-white/45">
                <span className="h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_#00e5ff]" aria-hidden />
                {chip}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
          className="relative"
        >
          <div className="glass-strong relative overflow-hidden rounded-3xl p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">Product snapshot</p>
                <p className="mt-1 font-display text-lg font-bold">Suite in one view</p>
              </div>
              <motion.span
                className="rounded-full border border-accent/40 bg-accent/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-accent"
                animate={reduce ? undefined : { opacity: [0.65, 1, 0.65] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              >
                Live
              </motion.span>
            </div>

            <div className="space-y-3">
              {showcase.map((row, i) => (
                <motion.div
                  key={row.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5"
                  initial={reduce ? false : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.5, ease: easeOut }}
                  whileHover={reduce ? undefined : { y: -2, borderColor: "rgba(0,229,255,0.35)" }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{row.name}</p>
                      <p className="text-[0.7rem] text-white/40">{row.metric}</p>
                    </div>
                    <span className="font-semibold tabular-nums text-accent">{row.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  )
}

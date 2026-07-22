import { Link } from "react-router-dom"
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { useRef, type MouseEvent } from "react"
import { brand, trustChips } from "../data/content"
import { easeOut, ParallaxBlob } from "./Motion"

function HeroVisual() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 120, damping: 18 })
  const sy = useSpring(my, { stiffness: 120, damping: 18 })
  const rotateX = useTransform(sy, [-40, 40], [5, -5])
  const rotateY = useTransform(sx, [-40, 40], [-7, 7])

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 70)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 70)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0)
        my.set(0)
      }}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
      className="relative mx-auto aspect-[4/5] w-full max-w-[440px] lg:max-w-none lg:aspect-[5/6]"
    >
      <motion.div
        aria-hidden
        className="absolute -inset-8 rounded-[2.75rem] bg-gradient-to-br from-accent/30 via-steel/10 to-steel/35 blur-3xl"
        animate={reduce ? undefined : { opacity: [0.5, 0.85, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-white/14 bg-gradient-to-br from-[#152438] to-[#060b14] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.85)]">
        <div className="absolute inset-0 opacity-35 grid-fade" />
        <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-display text-lg font-bold tracking-tight">Plant command</p>
              <p className="mt-0.5 text-xs text-white/45">Live · secured · suite-connected</p>
            </div>
            <motion.span
              className="rounded-md border border-accent/45 bg-accent/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-accent"
              animate={reduce ? undefined : { opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              Live
            </motion.span>
          </div>

          <div className="mt-8 flex-1 space-y-3">
            {[
              { label: "Energy vs target", w: "78%", value: "−18%", tone: "bg-accent" },
              { label: "Critical alarms", w: "35%", value: "3", tone: "bg-steel" },
              { label: "QC checks done", w: "92%", value: "92%", tone: "bg-mist" },
              { label: "Batch packs ready", w: "67%", value: "14", tone: "bg-accent/70" },
            ].map((row, i) => (
              <div
                key={row.label}
                className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-3.5 backdrop-blur-sm"
              >
                <div className="mb-2 flex justify-between text-xs">
                  <span className="text-white/55">{row.label}</span>
                  <span className="font-semibold text-white/85">{row.value}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className={`h-full rounded-full ${row.tone}`}
                    initial={reduce ? { width: row.w } : { width: 0 }}
                    animate={{ width: row.w }}
                    transition={{ delay: 0.35 + i * 0.1, duration: 0.85, ease: easeOut }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs text-white/55">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden />
            Audit-ready · role-based · OT–IT connected
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <header id="top" className="mesh-hero relative min-h-[100svh] overflow-hidden text-white">
      <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden />
      <ParallaxBlob
        speed={45}
        className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
      />
      <ParallaxBlob
        speed={-30}
        className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-steel/30 blur-3xl"
      />

      <div className="section-pad relative mx-auto grid max-w-6xl gap-12 pb-20 pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12 lg:pb-28 lg:pt-32">
        <div>
          <motion.p
            className="font-display text-[clamp(2.4rem,6vw,4.2rem)] font-extrabold leading-[0.95] tracking-tight"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOut }}
          >
            {brand.name}
          </motion.p>

          <motion.h1
            className="mt-4 max-w-xl font-display text-[clamp(1.35rem,2.8vw,1.85rem)] font-bold uppercase leading-[1.2] tracking-[0.12em] text-accent"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: easeOut }}
          >
            {brand.tagline}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-lg text-[1.08rem] leading-relaxed text-white/65"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
          >
            {brand.suiteLine}. Digitize energy, alarms, audit, QC, and batch reporting — then connect CRM,
            procurement, and people in one suite. Start small, prove value, expand with confidence.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            <motion.div whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Link to="/#contact" className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold">
                Request a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={reduce ? undefined : { scale: 1.02 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Link
                to="/#products"
                className="inline-flex items-center rounded-md border border-white/25 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/[0.07]"
              >
                Browse products
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
              <li key={chip} className="flex items-center gap-1.5 text-xs text-white/50">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                {chip}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.95, delay: 0.15, ease: easeOut }}
          style={{ perspective: 1100 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </header>
  )
}

import { Link } from "react-router-dom"
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { lazy, Suspense, useRef, type MouseEvent } from "react"
import { brand } from "../data/content"
import { easeOut } from "./Motion"

const HeroScene = lazy(() =>
  import("./HeroScene").then((m) => ({ default: m.HeroScene })),
)

const pillars = ["AI", "Cloud", "DevOps", "Automation"] as const

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 65, damping: 18 })
  const sy = useSpring(my, { stiffness: 65, damping: 18 })
  const rotateX = useTransform(sy, [-28, 28], [2.8, -2.8])
  const rotateY = useTransform(sx, [-28, 28], [-4, 4])
  const sceneX = useTransform(sx, [-28, 28], [-16, 16])
  const sceneY = useTransform(sy, [-28, 28], [12, -12])

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 52)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 52)
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
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-80" aria-hidden />
      <div className="pointer-events-none absolute inset-0 aurora opacity-60" aria-hidden />
      <div className="noise-overlay absolute inset-0" aria-hidden />

      {/* soft light beams */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-24 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[100px]"
        animate={reduce ? undefined : { opacity: [0.35, 0.65, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-[32rem] w-[32rem] rounded-full bg-steel/20 blur-[110px]"
        animate={reduce ? undefined : { opacity: [0.3, 0.55, 0.3], x: [0, -24, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="section-pad relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-8 pb-20 pt-28 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.35fr)] lg:gap-2 lg:pb-24 lg:pt-24 xl:max-w-[88rem]"
        style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1500 }}
      >
        <div className="relative z-20 max-w-xl lg:pr-6">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5"
            initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-accent">
              {brand.tagline}
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 font-display text-[clamp(3.4rem,9.5vw,6.6rem)] font-extrabold leading-[0.88] tracking-[-0.04em]"
            initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.05, ease: easeOut }}
          >
            <span className="bg-gradient-to-br from-white via-white to-accent/80 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,229,255,0.25)]">
              {brand.name}
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-lg font-display text-[clamp(1.25rem,2.5vw,1.85rem)] font-semibold leading-[1.25] text-white/92"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.14, ease: easeOut }}
          >
            Engineering the future with
          </motion.p>

          <motion.ul
            className="mt-4 flex flex-wrap gap-2"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
          >
            {pillars.map((item, i) => (
              <motion.li
                key={item}
                className="glass rounded-full px-3.5 py-1.5 text-sm font-semibold text-accent"
                whileHover={reduce ? undefined : { y: -2, scale: 1.04, borderColor: "rgba(0,229,255,0.45)" }}
                transition={{ delay: 0.02 * i }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
          >
            Industrial software, enterprise intelligence, and cloud delivery — crafted as one connected
            suite.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
          >
            <motion.div
              whileHover={reduce ? undefined : { y: -4, scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              <Link
                to="/#contact"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold shadow-[0_0_40px_rgba(0,229,255,0.25)]"
              >
                Request a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={reduce ? undefined : { y: -4 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Link
                to="/#products"
                className="glass link-underline inline-flex items-center rounded-full px-7 py-3.5 text-sm font-semibold text-white/90 hover:border-white/25"
              >
                Explore products
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="relative z-0 isolate lg:-mr-8 lg:translate-x-4 xl:-mr-16 xl:translate-x-8"
          style={reduce ? undefined : { x: sceneX, y: sceneY }}
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.15, delay: 0.18, ease: easeOut }}
        >
          {/* framing ring behind sculpture */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
          />

          {reduce ? (
            <div className="mx-auto flex h-[min(56vh,460px)] max-w-md items-center justify-center lg:max-w-none lg:h-[min(72vh,640px)]">
              <div className="relative h-52 w-52 lg:h-72 lg:w-72">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,#00e5ff,#6c63ff_48%,#050816_78%)] opacity-90 shadow-[0_0_100px_rgba(0,229,255,0.4)]" />
                <div className="absolute -inset-6 rounded-full border border-accent/30" />
                <div className="absolute -inset-12 rounded-full border border-steel/25" />
              </div>
            </div>
          ) : (
            <Suspense
              fallback={
                <div className="mx-auto h-[min(64vh,560px)] w-full animate-pulse rounded-full bg-white/[0.03] lg:h-[min(82vh,760px)]" />
              }
            >
              <HeroScene reduceMotion={false} />
            </Suspense>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-7 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.8 }}
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2.5 text-[0.62rem] uppercase tracking-[0.32em] text-white/40">
          <span>Scroll</span>
          <span className="relative h-10 w-5 rounded-full border border-white/20">
            <motion.span
              className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent"
              animate={reduce ? undefined : { y: [0, 14, 0], opacity: [1, 0.35, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </div>
      </motion.div>
    </header>
  )
}

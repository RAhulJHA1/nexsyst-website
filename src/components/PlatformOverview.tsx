import { useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { erpModules } from "../data/erp"
import { easeOut } from "./Motion"
import { scrollPageTo } from "./SmoothScroll"
import { SectionHeading } from "./ui/SectionHeading"

/** Core product modules for the scroll story (keeps the chapter count intentional). */
const scrollModules = erpModules.slice(0, 8)

function ModuleCard({
  mod,
  large = false,
}: {
  mod: (typeof scrollModules)[number]
  large?: boolean
}) {
  const Icon = mod.icon
  return (
    <article
      id={large ? `module-${mod.id}` : undefined}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white text-slate-900 shadow-[0_40px_100px_-48px_rgba(0,0,0,0.55)] ${
        large ? "p-7 sm:p-9" : "p-5"
      }`}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl"
        style={{ background: mod.accent }}
        aria-hidden
      />

      <div className="relative flex items-start gap-4">
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
          style={{ background: "#050a14" }}
        >
          <Icon className="h-7 w-7 text-[#8eb4ff]" strokeWidth={1.75} />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d7eff]">
            Module
          </p>
          <h3 className={`mt-1 font-extrabold tracking-tight text-slate-900 ${large ? "text-3xl sm:text-4xl" : "text-xl"}`}>
            {mod.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-500">{mod.short}</p>
        </div>
      </div>

      <p className={`relative mt-5 leading-relaxed text-slate-600 ${large ? "text-base sm:text-lg" : "text-sm"}`}>
        {mod.description}
      </p>

      <ul className="relative mt-6 grid gap-2 sm:grid-cols-2">
        {mod.features.map((f) => (
          <li
            key={f}
            className="rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-700"
          >
            {f}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition hover:gap-2"
      >
        Ask for a walkthrough of {mod.name}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  )
}

function StaticFallback() {
  return (
    <section id="products" aria-labelledby="products-heading" className="section-space bg-[#050a14] text-white">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          id="products-heading"
          light
          align="left"
          eyebrow="Products"
          title="Modules your teams already know how to ask for"
          description="Named the way the Nexsyst app names them — scroll the story, or jump straight to the module that matters."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {scrollModules.map((mod) => (
            <ModuleCard key={mod.id} mod={mod} />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Apple-style sticky scroll: one module takes the stage as you move down.
 * Progress drives the active chapter; content crossfades with motion.
 */
export function PlatformOverview() {
  const reduce = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const count = scrollModules.length

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  useMotionValueEvent(smoothProgress, "change", (v) => {
    const next = Math.min(count - 1, Math.max(0, Math.floor(v * count)))
    setActive((prev) => (prev === next ? prev : next))
  })

  // Keep hash deep-links (#module-crm) usable when landing mid-page
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (!hash.startsWith("module-")) return
    const id = hash.replace("module-", "")
    const idx = scrollModules.findIndex((m) => m.id === id)
    if (idx < 0 || !containerRef.current) return
    const top =
      containerRef.current.offsetTop + ((idx + 0.12) / count) * containerRef.current.offsetHeight
    scrollPageTo(top)
  }, [count])

  const activeMod = scrollModules[active]!

  const chapterHeight = useMemo(() => `${Math.max(count * 85, 240)}vh`, [count])

  if (reduce) return <StaticFallback />

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      ref={containerRef}
      className="relative bg-[#050a14] text-white"
      style={{ height: chapterHeight }}
    >
      <div className="sticky top-0 flex min-h-svh flex-col justify-center overflow-hidden py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.45) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[-10%] top-1/4 h-[28rem] w-[28rem] rounded-full blur-3xl transition-colors duration-700"
          style={{ background: `${activeMod.accent}33` }}
          aria-hidden
        />

        <div className="section-pad relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8eb4ff]">
              Products
            </p>
            <h2
              id="products-heading"
              className="mt-3 max-w-md text-[clamp(1.85rem,3.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-balance"
            >
              Modules your teams already know how to ask for
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
              Scroll to move through the Nexsyst shell — each chapter is a live product module, not a
              brochure tile.
            </p>

            <ol className="mt-8 space-y-1.5" aria-label="Module chapters">
              {scrollModules.map((mod, i) => {
                const Icon = mod.icon
                const isActive = i === active
                return (
                  <li key={mod.id}>
                    <button
                      type="button"
                      onClick={() => {
                        if (!containerRef.current) return
                        const top =
                          containerRef.current.offsetTop +
                          ((i + 0.15) / count) * containerRef.current.offsetHeight
                        scrollPageTo(top)
                      }}
                      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/45 hover:bg-white/5 hover:text-white/80"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
                          isActive ? "bg-[#3d7eff] text-white" : "bg-white/5 text-white/50"
                        }`}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold">{mod.name}</span>
                        <span className="block truncate text-xs text-white/40">{mod.short}</span>
                      </span>
                      <span
                        className={`text-[10px] font-bold tabular-nums tracking-wider ${
                          isActive ? "text-[#8eb4ff]" : "text-white/25"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>

            <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10" aria-hidden>
              <motion.div className="h-full rounded-full bg-[#3d7eff]" style={{ width: progressWidth }} />
            </div>
          </div>

          <div className="relative min-h-[28rem] sm:min-h-[32rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMod.id}
                initial={{ opacity: 0, y: 36, scale: 0.96, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, scale: 0.98, filter: "blur(6px)" }}
                transition={{ duration: 0.55, ease: easeOut }}
                className="absolute inset-0 flex items-center"
              >
                <ModuleCard mod={activeMod} large />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

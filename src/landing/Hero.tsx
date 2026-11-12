import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { brand } from "./data"
import { easeOut } from "./Motion"

const HERO_BG = "https://picsum.photos/seed/nexsyst-ocean-hero/1920/1080"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <header id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={HERO_BG}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[#0f1419]/78" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419]/55 via-[#0f1419]/65 to-[#0f1419]" />

      <div className="section-pad relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center pb-24 pt-32 text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="mb-2"
        >
          <img
            src="/nexsyst-logo.png?v=6"
            alt={brand.name}
            width={372}
            height={135}
            className="mx-auto h-14 w-auto max-w-[min(100%,300px)] object-contain sm:h-16"
            decoding="async"
            fetchPriority="high"
          />
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
          className="mt-5 text-[clamp(1.15rem,2.5vw,1.55rem)] font-semibold text-[#4a9a8e]"
        >
          {brand.tagline}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: easeOut }}
          className="mt-4 text-[clamp(1.85rem,4.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#d5dbe5] text-balance"
        >
          One ERP workspace for the whole company
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: easeOut }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-[#a8b2c1] sm:text-lg"
        >
          One professional workspace for CRM, purchase, Tally, HR, and payroll — so handoffs stop
          living in WhatsApp threads and end-of-month spreadsheets.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease: easeOut }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#pricing"
            className="btn-teal"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
          >
            View pricing
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="btn-ghost"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
          >
            Explore features
          </a>
        </motion.div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[#a8b2c1]/70 transition hover:text-[#4a9a8e]"
        aria-label="Scroll to statistics"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </header>
  )
}

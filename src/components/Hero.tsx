import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { brand } from "../data/content"
import { HeroReel } from "./HeroReel"
import { TrustLogos } from "./TrustLogos"
import { easeOut } from "./Motion"

/** Modern centered hero — aurora plate, glass pill, gradient CTAs, product reel. */
export function Hero() {
  const reduce = useReducedMotion()

  return (
    <header id="top" className="relative isolate overflow-hidden text-white">
      <div className="aurora absolute inset-0" aria-hidden />
      <div className="noise absolute inset-0" aria-hidden />

      <div className="section-pad relative mx-auto flex max-w-5xl flex-col items-center pb-16 pt-28 text-center sm:pb-24 sm:pt-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="inline-flex items-center gap-2.5"
          aria-label={brand.name}
        >
          <span className="inline-flex h-10 w-10 overflow-hidden rounded-2xl ring-1 ring-white/15">
            <img
              src="/nexsyst-mark.png?v=5"
              alt=""
              aria-hidden
              width={40}
              height={40}
              className="h-full w-full object-cover"
              decoding="async"
            />
          </span>
          <span className="font-display text-xl font-bold tracking-[-0.03em] sm:text-2xl">
            {brand.name}
          </span>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06, ease: easeOut }}
          className="mt-7"
        >
          <Link
            to="/about"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] text-white/80 transition hover:border-white/25 hover:bg-white/[0.07]"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#3d7eff]/20 text-[#8eb4ff]">
              <Sparkles className="h-3 w-3" />
            </span>
            <span>
              Built for teams tired of{" "}
              <span className="font-semibold text-white">spreadsheet handoffs</span>
            </span>
          </Link>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          className="mt-7 max-w-3xl text-[clamp(2.15rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-balance"
        >
          One ERP workspace that{" "}
          <span className="text-gradient">grows with your business</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: easeOut }}
          className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55 sm:text-base"
        >
          CRM, purchase, Tally, HR, and payroll — connected across teams so handoffs stop living in
          WhatsApp and spreadsheets.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22, ease: easeOut }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link to="/quote" className="btn-modern btn-modern-primary">
            Get a quotation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="#product" className="btn-modern btn-modern-ghost">
            See the product
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: easeOut }}
          className="relative mt-14 w-full sm:mt-16"
        >
          <div
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(61,126,255,0.35), transparent 65%)",
            }}
            aria-hidden
          />
          <HeroReel />
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.38, ease: easeOut }}
          className="mt-12 w-full border-t border-white/8 pt-10 sm:mt-14"
        >
          <TrustLogos />
        </motion.div>
      </div>
    </header>
  )
}

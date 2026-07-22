import { motion, useReducedMotion } from "framer-motion"
import {
  Bot,
  Cloud,
  Cpu,
  Factory,
  FileSearch,
  Headphones,
  Network,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"
import { services } from "../data/content"
import { FadeItem, MotionSection, easeOut } from "./Motion"

const icons: LucideIcon[] = [
  Cloud,
  Bot,
  FileSearch,
  Cpu,
  Network,
  Rocket,
  ShieldCheck,
  Headphones,
  Factory,
]

export function Services() {
  const reduce = useReducedMotion()

  return (
    <MotionSection
      id="services"
      className="section-pad relative overflow-hidden py-24 md:py-32"
      ariaLabelledBy="services-heading"
    >
      <div className="pointer-events-none absolute inset-0 aurora opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Services</p>
          <h2
            id="services-heading"
            className="mt-3 max-w-3xl font-display text-[clamp(1.85rem,3.5vw,2.75rem)] font-bold leading-tight text-white text-balance"
          >
            Cloud, AI/ML, RAG, and industrial software — delivered end to end
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/55">
            Beyond the NexSyst product suite — cloud, enterprise AI/ML, RAG, OT–IT engineering, and secure
            delivery with ongoing support.
          </p>
        </FadeItem>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1100 }}>
          {services.map((service, i) => {
            const Icon = icons[i] ?? Cloud
            return (
              <FadeItem key={service.title}>
                <motion.article
                  className="group relative h-full overflow-hidden rounded-2xl glass p-6"
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          rotateY: 8,
                          rotateX: -4,
                          y: -10,
                          scale: 1.02,
                          boxShadow: "0 30px 80px -30px rgba(0,229,255,0.45)",
                          borderColor: "rgba(0,229,255,0.45)",
                        }
                  }
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition duration-500 group-hover:bg-accent/25"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <motion.span
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-deep/30 text-accent"
                      whileHover={reduce ? undefined : { rotate: 360 }}
                      transition={{ duration: 0.7, ease: easeOut }}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </motion.span>
                    <span className="font-display text-sm font-bold tabular-nums text-white/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-white/55">{service.body}</p>
                </motion.article>
              </FadeItem>
            )
          })}
        </div>
      </div>
    </MotionSection>
  )
}

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion"
import type { ReactNode } from "react"

export const easeOut = [0.22, 1, 0.36, 1] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48, filter: "blur(8px)", scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.95, ease: easeOut },
  },
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
}

export function MotionSection({
  children,
  className = "",
  id,
  ariaLabelledBy,
}: {
  children: ReactNode
  className?: string
  id?: string
  ariaLabelledBy?: string
}) {
  const reduce = useReducedMotion()

  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -8% 0px" }}
      variants={reduce ? undefined : stagger}
      style={{ perspective: 1400 }}
    >
      {children}
    </motion.section>
  )
}

export function FadeItem({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={
        reduce
          ? undefined
          : fadeUp
      }
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  )
}

export function HoverLift({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      whileHover={
        reduce
          ? undefined
          : { y: -8, rotateX: 3, rotateY: -3, transition: { type: "spring", stiffness: 280, damping: 22 } }
      }
      whileTap={reduce ? undefined : { scale: 0.985 }}
      style={{ transformStyle: "preserve-3d", perspective: 900 }}
    >
      {children}
    </motion.div>
  )
}

export function RevealCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 52, rotate: 3, scale: 0.96, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.85, delay, ease: easeOut }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const reduce = useReducedMotion()
  if (reduce) return null

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent via-accent-deep to-steel"
      style={{ scaleX }}
      aria-hidden
    />
  )
}

export function ParallaxBlob({
  className,
  speed = 40,
}: {
  className?: string
  speed?: number
}) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, speed])
  const reduce = useReducedMotion()

  return <motion.div aria-hidden className={className} style={reduce ? undefined : { y }} />
}

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
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
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
      viewport={{ once: true, amount: 0.14, margin: "0px 0px -8% 0px" }}
      variants={reduce ? undefined : stagger}
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
    <motion.div className={className} variants={reduce ? undefined : fadeUp}>
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
      whileHover={reduce ? undefined : { y: -6, transition: { type: "spring", stiffness: 380, damping: 22 } }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
    >
      {children}
    </motion.div>
  )
}

/** Thin scroll progress bar under the fixed nav. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })
  const reduce = useReducedMotion()
  if (reduce) return null

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent via-steel to-accent"
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

  return (
    <motion.div
      aria-hidden
      className={className}
      style={reduce ? undefined : { y }}
    />
  )
}

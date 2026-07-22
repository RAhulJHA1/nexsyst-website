import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import { useEffect } from "react"

/** Soft glowing cursor follower — desktop only, respects reduced motion. */
export function GlowCursor() {
  const reduce = useReducedMotion()
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 280, damping: 28 })
  const sy = useSpring(y, { stiffness: 280, damping: 28 })

  useEffect(() => {
    if (reduce) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [reduce, x, y])

  if (reduce) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.16)_0%,transparent_70%)] mix-blend-screen md:block"
      style={{ x: sx, y: sy }}
    />
  )
}

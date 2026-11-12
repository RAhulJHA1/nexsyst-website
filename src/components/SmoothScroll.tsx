import { useEffect } from "react"
import Lenis from "lenis"
import { useReducedMotion } from "framer-motion"

let lenisInstance: Lenis | null = null

/** Shared Lenis handle so sticky chapters / hash jumps stay in sync with smooth scroll. */
export function getLenis() {
  return lenisInstance
}

export function scrollPageTo(top: number, immediate = false) {
  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(top, { immediate, duration: immediate ? 0 : 1.05 })
    return
  }
  window.scrollTo({ top, behavior: immediate ? "auto" : "smooth" })
}

export function SmoothScroll() {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) {
      lenisInstance = null
      return
    }

    const lenis = new Lenis({
      duration: 0.85,
      smoothWheel: true,
      touchMultiplier: 1,
      wheelMultiplier: 1,
    })
    lenisInstance = lenis

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      if (lenisInstance === lenis) lenisInstance = null
    }
  }, [reduce])

  return null
}

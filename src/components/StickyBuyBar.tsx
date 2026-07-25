import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowRight, X } from "lucide-react"

/** Persistent conversion bar — appears after scroll so buying never feels far away. */
export function StickyBuyBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const reduce = useReducedMotion()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setDismissed(false)
  }, [pathname])

  const show = visible && !dismissed

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduce ? { opacity: 1 } : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4"
        >
          <div className="section-pad mx-auto max-w-6xl">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-brand/95 px-4 py-3 shadow-[0_-12px_40px_-12px_rgba(5,10,20,0.65)] backdrop-blur-xl sm:gap-5 sm:px-5 sm:py-3.5">
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-sm font-bold text-white sm:text-base">
                  Ready when you are — demo first, then a scoped quote
                </p>
                <p className="hidden text-xs text-white/50 sm:block">
                  Start with the modules you need. Expand when the plant is ready.
                </p>
              </div>
              <Link
                to="/contact"
                className="btn-primary inline-flex shrink-0 items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold"
              >
                Request demo
                <ArrowRight className="hidden h-4 w-4 sm:inline" />
              </Link>
              <button
                type="button"
                aria-label="Dismiss"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-white/50 hover:bg-white/10 hover:text-white"
                onClick={() => setDismissed(true)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

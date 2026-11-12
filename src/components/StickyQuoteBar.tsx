import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

/** Appears after scroll — keeps quotation CTA always one click away. */
export function StickyQuoteBar() {
  const [show, setShow] = useState(false)
  const reduce = useReducedMotion()
  const { pathname } = useLocation()
  const hideOn = pathname === "/quote" || pathname === "/contact" || pathname === "/privacy" || pathname === "/terms"

  useEffect(() => {
    if (hideOn) {
      setShow(false)
      return
    }
    const onScroll = () => setShow(window.scrollY > 520)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [hideOn])

  return (
    <AnimatePresence>
      {show && !hideOn && (
        <motion.div
          initial={reduce ? false : { y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-8px_30px_-12px_rgba(15,23,42,0.25)] backdrop-blur-md safe-area-inset-bottom"
        >
          <div className="section-pad mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Need a commercial number?</span>{" "}
              Get a scoped quotation for your modules and users.
            </p>
            <div className="flex gap-2">
              <Link
                to="/contact"
                className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Book demo
              </Link>
              <Link
                to="/quote"
                className="rounded-lg bg-[#3d7eff] px-4 py-2.5 text-sm font-semibold text-white hover:brightness-110"
              >
                Get quotation
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

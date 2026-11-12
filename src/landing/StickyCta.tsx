import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function StickyCta() {
  const [show, setShow] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduce ? false : { y: 48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(168,178,193,0.14)] bg-[#192028]/95 p-3 backdrop-blur-md"
        >
          <div className="section-pad mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-[#a8b2c1]">
              <span className="font-semibold text-[#d5dbe5]">Ready to scope Nexsyst?</span> Get a
              quotation for your modules and users.
            </p>
            <a
              href="#pricing"
              className="btn-teal"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get quotation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

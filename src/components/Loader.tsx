import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"
import { Logo } from "./Logo"

const lines = ["System initializing…", "AI modules loading…", "Cloud connected…", "Ready"]

export function Loader() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(true)
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (reduce) {
      setVisible(false)
      return
    }

    const start = performance.now()
    const duration = 2200
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      setProgress(Math.round(t * 100))
      setStep(Math.min(lines.length - 1, Math.floor(t * lines.length)))
      if (t < 1) frame = requestAnimationFrame(tick)
      else setTimeout(() => setVisible(false), 280)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [reduce])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          aria-hidden={!visible}
        >
          <div className="section-pad w-full max-w-md text-center">
            <motion.div
              className="mx-auto inline-flex justify-center"
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              <Logo variant="full" tone="onDark" className="!h-14 sm:!h-16 !max-w-[300px]" />
            </motion.div>

            <div className="mx-auto mt-10 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent via-accent-deep to-steel"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-5 text-sm tracking-wide text-white/55">{lines[step]}</p>
            <p className="mt-2 font-mono text-xs text-accent/80">{progress}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Pause, Play } from "lucide-react"
import { productShots } from "../data/productShots"
import { easeOut } from "./Motion"

const INTERVAL_MS = 4200

/** Modern product reel — glass chrome, flat 16:9 frames. */
export function HeroReel() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(!reduce)
  const shot = productShots[index]!

  useEffect(() => {
    if (!playing || reduce) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % productShots.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [playing, reduce])

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#0c0c0e] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
        <div className="flex h-9 items-center gap-2 border-b border-white/8 bg-white/[0.03] px-3.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-1 truncate text-[11px] text-white/35">nexsyst.app</span>
        </div>

        <div className="relative aspect-video w-full overflow-hidden bg-[#0c0c0e]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={shot.id}
              src={shot.src}
              alt={shot.alt}
              width={1280}
              height={720}
              initial={reduce ? false : { opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.45, ease: easeOut }}
              className="absolute inset-0 h-full w-full object-cover object-top"
              decoding="async"
              fetchPriority={index === 0 ? "high" : "low"}
            />
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3 border-t border-white/8 bg-black/80 px-3 py-3 backdrop-blur-md sm:px-4">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
            aria-label={playing ? "Pause product reel" : "Play product reel"}
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 pl-0.5" />}
          </button>

          <div className="min-w-0 flex-1 text-left">
            <p className="truncate text-sm font-semibold text-white">{shot.title}</p>
            <p className="truncate text-xs text-white/40">{shot.line}</p>
          </div>

          <div className="hidden w-44 gap-1.5 sm:flex" aria-hidden>
            {productShots.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className="h-1 flex-1 overflow-hidden rounded-full bg-white/10"
                onClick={() => {
                  setIndex(i)
                  setPlaying(true)
                }}
                aria-label={`Show ${s.title}`}
              >
                <motion.span
                  className="block h-full rounded-full bg-[#3d7eff]"
                  initial={false}
                  animate={{
                    scaleX: i === index ? 1 : i < index ? 1 : 0,
                    opacity: i === index ? 1 : i < index ? 0.35 : 0,
                  }}
                  style={{ transformOrigin: "left" }}
                  transition={{ duration: i === index && playing ? INTERVAL_MS / 1000 : 0.25 }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

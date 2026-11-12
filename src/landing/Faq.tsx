import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { faqs } from "./data"
import { Reveal, easeOut } from "./Motion"

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const reduce = useReducedMotion()

  return (
    <section id="faq" className="section-space bg-[#192028]/35">
      <div className="section-pad mx-auto max-w-3xl">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a9a8e]">FAQ</p>
            <h2 className="mt-3 text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold text-[#d5dbe5]">
              Questions buyers ask before signing
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 divide-y divide-[rgba(168,178,193,0.12)] overflow-hidden rounded-2xl border border-[rgba(168,178,193,0.12)] bg-[#192028]">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="text-sm font-semibold text-[#d5dbe5] sm:text-base">{item.q}</span>
                    <ChevronDown
                      className={`mt-0.5 h-5 w-5 shrink-0 text-[#4a9a8e] transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: easeOut }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-[#a8b2c1] sm:px-6">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { FadeItem, MotionSection, easeOut } from "./Motion"
import { faqs } from "../data/content"

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const reduce = useReducedMotion()

  return (
    <MotionSection
      id="faq"
      className="section-pad bg-white py-24 md:py-32"
      ariaLabelledBy="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">FAQ</p>
          <h2 id="faq-heading" className="mt-3 font-display text-[clamp(1.85rem,3.5vw,2.6rem)] font-bold text-ink">
            Answers about NexSyst
          </h2>
          <p className="mt-3 text-lg text-muted">
            Direct answers for search engines, AI assistants, and plant decision-makers.
          </p>
        </FadeItem>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <FadeItem key={faq.question}>
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="m-0">
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span itemProp="name" className="font-display text-lg font-bold text-ink">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-1 shrink-0 text-muted"
                      >
                        <ChevronDown className="h-5 w-5" aria-hidden />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        key="content"
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: easeOut }}
                        className="overflow-hidden"
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <p itemProp="text" className="pb-5 pr-8 text-[1.02rem] leading-relaxed text-muted">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeItem>
            )
          })}
        </div>
      </div>
    </MotionSection>
  )
}

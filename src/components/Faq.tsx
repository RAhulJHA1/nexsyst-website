import { useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { FadeItem, MotionSection, easeOut } from "./Motion"
import { buyerFaqs } from "../data/conversion"

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const reduce = useReducedMotion()

  return (
    <MotionSection id="faq" className="bg-white py-20 sm:py-28" ariaLabelledBy="faq-heading">
      <div className="section-pad mx-auto max-w-3xl">
        <FadeItem>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#3d7eff]">FAQ</p>
          <h2
            id="faq-heading"
            className="mt-3 text-[clamp(1.85rem,3.8vw,2.6rem)] font-extrabold tracking-[-0.035em] text-slate-900"
          >
            Questions buyers ask before requesting a quotation
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Pricing drivers, timeline, Tally, payroll, and what happens after you submit the form.
          </p>
        </FadeItem>

        <div className="mt-10 divide-y divide-slate-200/80 rounded-[1.25rem] border border-slate-200/80 bg-[#f4f6f9] px-5 sm:px-6">
          {buyerFaqs.map((faq, i) => {
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
                      <span itemProp="name" className="text-base font-bold text-slate-900 sm:text-lg">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-1 shrink-0 text-slate-400"
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
                        transition={{ duration: 0.3, ease: easeOut }}
                        className="overflow-hidden"
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <p itemProp="text" className="pb-5 pr-4 text-[15px] leading-relaxed text-slate-600">
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

        <FadeItem>
          <p className="mt-8 text-center text-sm text-slate-600">
            Still deciding?{" "}
            <Link to="/quote" className="font-semibold text-slate-800 hover:underline">
              Request a quotation
            </Link>{" "}
            or{" "}
            <Link to="/contact" className="font-semibold text-slate-800 hover:underline">
              book a walkthrough
            </Link>
            .
          </p>
        </FadeItem>
      </div>
    </MotionSection>
  )
}

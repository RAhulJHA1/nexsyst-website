import { motion, useReducedMotion } from "framer-motion"
import { ecosystemFlows } from "../data/erp"
import { FadeItem, MotionSection } from "./Motion"
import { SectionHeading } from "./ui/SectionHeading"

export function Ecosystem() {
  const reduce = useReducedMotion()

  return (
    <MotionSection id="solutions" ariaLabelledBy="ecosystem-heading" className="section-space relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(27,107,255,0.08),transparent_60%)]" aria-hidden />
      <div className="section-pad relative mx-auto max-w-6xl">
        <SectionHeading
          id="ecosystem-heading"
          align="left"
          eyebrow="Connected ecosystem"
          title="The path an order (and a payslip) actually take"
          description="These aren’t buzzwords — they’re the routes your Tuesday already travels. Nexsyst just keeps them on one map."
        />

        <div className="mt-12 space-y-8">
          {ecosystemFlows.map((flow, fi) => (
            <FadeItem key={flow.id}>
              <div className="page-surface p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">{flow.label}</p>
                <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-0">
                  {flow.nodes.map((node, i) => (
                    <div key={node} className="flex items-center">
                      <motion.div
                        className="relative rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm sm:px-4 sm:text-sm"
                        initial={reduce ? false : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fi * 0.05 + i * 0.05 }}
                      >
                        {!reduce && (
                          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white shadow-[0_0_0_4px_rgba(13,148,136,0.18)]" />
                        )}
                        {node}
                      </motion.div>
                      {i < flow.nodes.length - 1 && (
                        <svg
                          className="mx-1 hidden h-4 w-10 text-[#3d7eff] sm:block"
                          viewBox="0 0 40 16"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M2 8h30"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            className={reduce ? undefined : "dash-flow"}
                          />
                          <path d="M30 3l7 5-7 5" stroke="currentColor" strokeWidth="1.6" fill="none" />
                        </svg>
                      )}
                      {i < flow.nodes.length - 1 && (
                        <span className="mx-1 text-[#3d7eff] sm:hidden" aria-hidden>
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeItem>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

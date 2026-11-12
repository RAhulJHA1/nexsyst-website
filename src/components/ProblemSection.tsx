import { motion, useReducedMotion } from "framer-motion"
import { Link2, MessageSquare, Table2, Workflow } from "lucide-react"
import { easeOut } from "./Motion"

const points = [
  {
    icon: MessageSquare,
    title: "Deals close in chat",
    body: "Sales wins in CRM — purchase still waits for a WhatsApp forward.",
  },
  {
    icon: Table2,
    title: "Month-end in Excel",
    body: "Attendance in one tool. Payroll rebuilt from scratch every cycle.",
  },
  {
    icon: Link2,
    title: "Tools that don’t talk",
    body: "CRM, PO, Tally, and HR stay siloed — leadership never sees one truth.",
  },
  {
    icon: Workflow,
    title: "Nexsyst keeps the handoff",
    body: "One record moves from pipeline to purchase to payroll — inside one workspace.",
  },
]

export function ProblemSection() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-20 text-white sm:py-28">
      <div className="aurora absolute inset-0" aria-hidden />
      <div className="noise absolute inset-0" aria-hidden />

      <div className="section-pad relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8eb4ff]">
            The leak
          </p>
          <h2 className="mt-3 text-[clamp(1.85rem,4vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.035em]">
            Your teams aren’t inefficient.
            <span className="mt-1 block text-white/40">Your tools don’t talk.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.article
                key={p.title}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: easeOut }}
                className="glass rounded-[1.25rem] p-5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#3d7eff]/15 text-[#8eb4ff]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-bold tracking-[-0.02em]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{p.body}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

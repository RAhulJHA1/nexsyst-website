import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { erpModules } from "../data/erp"
import { FadeItem, MotionSection } from "./Motion"

/** Modern module grid — interactive tiles with soft hover lift. */
export function ModulesStrip() {
  return (
    <MotionSection id="modules" className="relative overflow-hidden bg-[#f4f6f9] py-20 sm:py-28">
      <div className="section-pad relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#3d7eff]">
            Modules
          </p>
          <h2 className="mt-3 text-[clamp(1.85rem,4vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-900">
            Everything your Tuesday needs — in one shell
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Start with the two modules that hurt most. Expand when the handoff is real.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {erpModules.slice(0, 6).map((mod) => {
            const Icon = mod.icon
            return (
              <FadeItem key={mod.id}>
                <Link
                  to="/#product"
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_60px_-36px_rgba(15,23,42,0.35)]"
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(ellipse 70% 60% at 0% 0%, ${mod.accent}18, transparent 55%)`,
                    }}
                    aria-hidden
                  />
                  <span
                    className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-sm"
                    style={{ background: mod.accent }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="relative mt-4 flex items-center gap-2 text-lg font-bold tracking-[-0.02em] text-slate-900">
                    {mod.name}
                    <ArrowUpRight className="h-4 w-4 translate-y-0.5 opacity-0 transition group-hover:opacity-100" />
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-500">
                    {mod.description}
                  </p>
                </Link>
              </FadeItem>
            )
          })}
        </div>
      </div>
    </MotionSection>
  )
}

import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { erpModules } from "../data/erp"
import { Reveal, Stagger, StaggerItem } from "./Motion"

export function ModulesGrid() {
  return (
    <section id="modules" className="section-space">
      <div className="section-pad mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a9a8e]">Modules</p>
            <h2 className="mt-3 text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold text-[#d5dbe5]">
              Every Nexsyst module — open its own page
            </h2>
            <p className="mt-4 text-base text-[#a8b2c1]">
              Explore CRM, purchase, payroll, and more. Each page covers capabilities and typical
              buying scope.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {erpModules.map((mod) => {
            const Icon = mod.icon
            return (
              <StaggerItem key={mod.id}>
                <Link
                  to={`/modules/${mod.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-[rgba(168,178,193,0.12)] bg-[#192028] p-5 transition hover:-translate-y-0.5 hover:border-[rgba(74,154,142,0.4)] hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.7)]"
                >
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white"
                    style={{ background: mod.accent }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 flex items-center gap-2 text-lg font-bold text-[#d5dbe5]">
                    {mod.name}
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#4a9a8e]">
                    {mod.short}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#a8b2c1]">{mod.description}</p>
                </Link>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}

import { Check } from "lucide-react"
import { pricingPlans } from "./data"
import { Reveal, Stagger, StaggerItem } from "./Motion"

export function Pricing() {
  return (
    <section id="pricing" className="section-space">
      <div className="section-pad mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a9a8e]">Pricing</p>
            <h2 className="mt-3 text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold text-[#d5dbe5]">
              Clear starting bands — scoped quotation after discovery
            </h2>
            <p className="mt-4 text-base text-[#a8b2c1]">
              Figures below are indicative monthly bands for budgeting. Your proposal is line-itemed
              for modules, users, and implementation.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <StaggerItem key={plan.id}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
                  plan.highlighted
                    ? "border-[#4a9a8e]/55 bg-[#192028] shadow-[0_24px_60px_-28px_rgba(74,154,142,0.45)]"
                    : "border-[rgba(168,178,193,0.12)] bg-[#192028]"
                }`}
              >
                {plan.highlighted ? (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-[rgba(74,154,142,0.16)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#4a9a8e]">
                    Most chosen
                  </span>
                ) : (
                  <span className="mb-3 inline-flex h-6" />
                )}
                <h3 className="text-xl font-extrabold text-[#d5dbe5]">{plan.name}</h3>
                <p className="mt-2 text-sm text-[#a8b2c1]">{plan.blurb}</p>
                <p className="mt-5 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold tracking-tight text-[#d5dbe5]">
                    {plan.price}
                  </span>
                  {plan.period ? (
                    <span className="text-sm text-[#a8b2c1]">{plan.period}</span>
                  ) : null}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#a8b2c1]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4a9a8e]" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 ${plan.highlighted ? "btn-teal" : "btn-ghost"}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Request quotation
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

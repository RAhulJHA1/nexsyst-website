import { Link } from "react-router-dom"
import { Check } from "lucide-react"
import { featureBlocks } from "./data"
import { Reveal } from "./Motion"

const featureToModule: Record<string, string> = {
  crm: "crm",
  purchase: "po",
  people: "payroll",
  ops: "inventory",
}

export function Features() {
  return (
    <section id="features" className="section-space">
      <div className="section-pad mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a9a8e]">Features</p>
            <h2 className="mt-3 text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold text-[#d5dbe5]">
              Modules that close the Tuesday handoff gap
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#a8b2c1]">
              Single-column story with alternating layouts — product surfaces on one side, outcomes
              on the other.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-20 lg:space-y-28">
          {featureBlocks.map((block, i) => {
            const imageLeft = i % 2 === 1
            return (
              <div
                key={block.id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal delay={0.05} className={imageLeft ? "lg:order-1" : "lg:order-2"}>
                  <div className="overflow-hidden rounded-2xl border border-[rgba(168,178,193,0.12)] bg-[#192028] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.65)]">
                    <img
                      src={block.image}
                      alt={block.imageAlt}
                      width={960}
                      height={640}
                      className="aspect-[3/2] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.15} className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a9a8e]">
                    {block.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[clamp(1.4rem,2.5vw,1.9rem)] font-extrabold leading-snug text-[#d5dbe5]">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#a8b2c1]">{block.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {block.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-[#d5dbe5]">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(74,154,142,0.18)] text-[#4a9a8e]">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  {featureToModule[block.id] ? (
                    <Link
                      to={`/modules/${featureToModule[block.id]}`}
                      className="mt-6 inline-flex text-sm font-semibold text-[#4a9a8e] hover:underline"
                    >
                      Open {block.eyebrow.split("&")[0]?.trim()} module page →
                    </Link>
                  ) : null}
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function SolutionsBand() {
  return (
    <section id="solutions" className="section-space bg-[#192028]/45">
      <div className="section-pad mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a9a8e]">
                Solutions
              </p>
              <h2 className="mt-3 text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold text-[#d5dbe5]">
                Scoped for plants, trading firms, and service companies
              </h2>
            </div>
            <p className="text-base leading-relaxed text-[#a8b2c1]">
              Whether you need CRM-to-PO discipline, attendance-linked payroll, or a Tally bridge for
              finance, Nexsyst is implemented as a phased suite — start with the two modules that
              hurt most, then expand with confidence.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Sales-led SMEs",
                body: "Pipeline, customers, and purchase demand on one record.",
              },
              {
                title: "Manufacturing HR",
                body: "Muster to salary register with statutory deductions.",
              },
              {
                title: "Finance ops",
                body: "Fewer Excel reconciliations between ops and Tally.",
              },
            ].map((c) => (
              <article key={c.title} className="card-ocean p-6">
                <h3 className="text-lg font-bold text-[#d5dbe5]">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#a8b2c1]">{c.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

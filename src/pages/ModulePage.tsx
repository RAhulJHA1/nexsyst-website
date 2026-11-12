import { Link, Navigate, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { erpModules } from "../data/erp"
import { Nav } from "../landing/Nav"
import { Footer } from "../landing/Footer"
import { StickyCta } from "../landing/StickyCta"
import { SmoothScroll } from "../landing/SmoothScroll"
import { Reveal, Stagger, StaggerItem } from "../landing/Motion"

export function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const mod = erpModules.find((m) => m.id === moduleId)
  if (!mod) return <Navigate to="/#modules" replace />

  const Icon = mod.icon
  const others = erpModules.filter((m) => m.id !== mod.id).slice(0, 3)
  const image = `https://picsum.photos/seed/nexsyst-module-${mod.id}/1200/720`

  return (
    <div className="min-h-svh bg-[#0f1419] pb-16 text-[#a8b2c1]">
      <SmoothScroll />
      <Nav />
      <main>
        <section className="relative overflow-hidden border-b border-[rgba(168,178,193,0.1)] pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(ellipse 55% 45% at 80% 0%, ${mod.accent}33, transparent 60%)`,
            }}
            aria-hidden
          />
          <div className="section-pad relative mx-auto max-w-6xl">
            <Reveal>
              <Link
                to="/#modules"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a9a8e] hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                All modules
              </Link>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                  style={{ background: mod.accent }}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a9a8e]">
                    {mod.short}
                  </p>
                  <h1 className="mt-1 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold tracking-tight text-[#d5dbe5]">
                    {mod.name}
                  </h1>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#a8b2c1] sm:text-lg">
                {mod.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/#pricing" className="btn-teal">
                  Get quotation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/#contact" className="btn-ghost">
                  Talk to us
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-space">
          <div className="section-pad mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-[rgba(168,178,193,0.12)] bg-[#192028]">
                <img
                  src={image}
                  alt={`${mod.name} module preview`}
                  width={1200}
                  height={720}
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a9a8e]">
                Capabilities
              </p>
              <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold text-[#d5dbe5]">
                What teams run inside {mod.name}
              </h2>
              <ul className="mt-6 space-y-3">
                {mod.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-[#d5dbe5]">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: `${mod.accent}22`, color: mod.accent }}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section-space bg-[#192028]/40">
          <div className="section-pad mx-auto max-w-6xl">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold text-[#d5dbe5]">
                Why buyers add {mod.name}
              </h2>
            </Reveal>
            <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Fits the Nexsyst shell",
                  body: `Same login, same employee directory, same permission model — ${mod.name} appears beside the modules you already run.`,
                },
                {
                  title: "Scoped commercial path",
                  body: "Start with this module alone or bundle it in a Growth quotation. Implementation is phased around your go-live window.",
                },
                {
                  title: "Handoffs stay inside one record",
                  body: "Data entered here can feed the next team — sales to purchase, attendance to payroll, ops to Tally — without re-typing.",
                },
              ].map((card) => (
                <StaggerItem key={card.title}>
                  <article className="card-ocean h-full p-6">
                    <h3 className="text-lg font-bold text-[#d5dbe5]">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#a8b2c1]">{card.body}</p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="section-space">
          <div className="section-pad mx-auto max-w-6xl">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a9a8e]">
                    Related modules
                  </p>
                  <h2 className="mt-2 text-[clamp(1.4rem,2.8vw,1.9rem)] font-extrabold text-[#d5dbe5]">
                    Often quoted together
                  </h2>
                </div>
                <Link to="/#modules" className="text-sm font-semibold text-[#4a9a8e] hover:underline">
                  View all modules →
                </Link>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {others.map((m) => {
                const MIcon = m.icon
                return (
                  <Link
                    key={m.id}
                    to={`/modules/${m.id}`}
                    className="card-ocean flex items-start gap-3 p-5 transition hover:border-[rgba(74,154,142,0.35)]"
                  >
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                      style={{ background: m.accent }}
                    >
                      <MIcon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-bold text-[#d5dbe5]">{m.name}</span>
                      <span className="mt-1 block text-sm text-[#a8b2c1]">{m.short}</span>
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </div>
  )
}

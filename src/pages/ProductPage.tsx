import { Link, Navigate, useParams } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { FadeItem, MotionSection, easeOut } from "../components/Motion"
import { brand } from "../data/content"
import { getProduct, productPath, products, type ProductId } from "../data/products"
import { useEffect } from "react"

function setPageMeta(title: string, description: string) {
  document.title = title
  const desc = document.querySelector('meta[name="description"]')
  if (desc) desc.setAttribute("content", description)
}

export function ProductPage() {
  const { productId } = useParams<{ productId: string }>()
  const product = getProduct(productId)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!product) return
    setPageMeta(
      `${product.name} | NexSyst`,
      product.answer,
    )
    return () => {
      setPageMeta(
        "NexSyst | The Operating System for Plant & Business",
        brand.description,
      )
    }
  }, [product])

  if (!product) {
    return <Navigate to="/#products" replace />
  }

  const others = products.filter((p) => p.id !== product.id)

  return (
    <>
      <header className="mesh-hero relative overflow-hidden pb-16 pt-28 text-white md:pb-20 md:pt-32">
        <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden />
        <div className="section-pad relative mx-auto max-w-6xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <Link
              to="/#products"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All products
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              {product.category} · NexSyst product
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-[1.05] tracking-tight">
              {product.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">{product.heroLine}</p>
            <p className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed text-white/55">{product.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/#contact"
                className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold"
              >
                Request a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#why"
                className="inline-flex items-center rounded-md border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Why it helps
              </a>
            </div>
            <p className="mt-5 text-xs text-white/45">
              Demo first → scoped quote → pilot. No surprise cart checkout.
            </p>
            <p className="mt-6 max-w-xl text-sm text-white/50">
              <span className="font-semibold text-white/75">Who it&apos;s for: </span>
              {product.whoFor}
            </p>
          </motion.div>
        </div>
      </header>

      <MotionSection id="why" className="section-pad bg-surface py-20 md:py-24" ariaLabelledBy="why-title">
        <div className="mx-auto max-w-6xl">
          <FadeItem>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">Why this product helps</p>
            <h2 id="why-title" className="mt-3 max-w-2xl font-display text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-ink">
              Outcomes teams feel after they switch on {product.name}
            </h2>
          </FadeItem>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {product.whyHelps.map((item) => (
              <FadeItem key={item.title}>
                <article className="h-full rounded-xl border border-line bg-white p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-deep" aria-hidden />
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                      <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{item.body}</p>
                    </div>
                  </div>
                </article>
              </FadeItem>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="use-cases" className="section-pad bg-canvas py-20 md:py-24" ariaLabelledBy="usecases-title">
        <div className="mx-auto max-w-6xl">
          <FadeItem>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">Use cases</p>
            <h2 id="usecases-title" className="mt-3 max-w-2xl font-display text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-ink">
              How plants use {product.name} day to day
            </h2>
          </FadeItem>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {product.useCases.map((uc) => (
              <FadeItem key={uc.title}>
                <article className="h-full rounded-xl border border-line bg-white p-6">
                  {uc.industry && (
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-steel">
                      {uc.industry}
                    </span>
                  )}
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{uc.title}</h3>
                  <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{uc.body}</p>
                </article>
              </FadeItem>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="features" className="section-pad bg-white py-20 md:py-24" ariaLabelledBy="features-title">
        <div className="mx-auto max-w-6xl">
          <FadeItem>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">Features</p>
            <h2 id="features-title" className="mt-3 max-w-2xl font-display text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-ink">
              Capabilities included with {product.name}
            </h2>
          </FadeItem>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f, i) => (
              <FadeItem key={f.title}>
                <article className="h-full rounded-xl border border-line bg-surface p-5">
                  <span className="font-display text-sm font-bold text-steel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
                </article>
              </FadeItem>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="section-pad relative overflow-hidden border-t border-line bg-brand py-20 text-white">
        <div
          className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Next step</p>
              <h2 className="mt-3 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-bold leading-tight">
                See {product.name} on your plant — then decide with a clear proposal
              </h2>
              <p className="mt-3 max-w-xl text-white/60">
                Book a live walkthrough. We scope modules, users, and timeline into a commercial proposal you can
                take to leadership without guesswork.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/55">
                <li className="before:mr-2 before:text-accent before:content-['▸']">Pilot with this product alone or as a suite pilot</li>
                <li className="before:mr-2 before:text-accent before:content-['▸']">Human quote — not a self-serve surprise bill</li>
                <li className="before:mr-2 before:text-accent before:content-['▸']">Training and AMC so you are not left alone after go-live</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur">
              <Link
                to="/#contact"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-md px-5 py-3.5 text-sm font-semibold"
              >
                Request a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/#buy"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                See how buying works
              </Link>
              <p className="text-center text-xs text-white/40">Usually a reply within one business day</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface py-16 pb-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-xl font-bold text-ink">More plant products</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.id}
                to={productPath(p.id as ProductId)}
                className="rounded-xl border border-line bg-white p-4 transition hover:border-accent/40"
              >
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-steel">
                  {p.category}
                </span>
                <div className="mt-1 font-display font-bold text-ink">{p.name}</div>
                <p className="mt-1 text-sm text-muted line-clamp-2">{p.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

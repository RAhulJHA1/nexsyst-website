import { Link } from "react-router-dom"
import { Activity, BookOpen, FileBarChart, Gauge, ShieldCheck, Zap } from "lucide-react"
import { FadeItem, HoverLift, MotionSection } from "./Motion"
import { products, productPath, type ProductId } from "../data/products"

const icons = {
  energy: Zap,
  alarm: Activity,
  audit: ShieldCheck,
  qc: BookOpen,
  batch: FileBarChart,
  oee: Gauge,
} as const

export function Products() {
  return (
    <MotionSection
      id="products"
      className="section-pad relative overflow-hidden bg-surface py-24 md:py-32"
      ariaLabelledBy="products-heading"
    >
      <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">Plant products</p>
          <h2
            id="products-heading"
            className="mt-3 max-w-2xl font-display text-[clamp(1.85rem,3.5vw,2.75rem)] font-bold leading-tight text-ink text-balance"
          >
            Industrial apps that close the gap from shop floor to compliance
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Open any product for why it helps, real plant use cases, and full feature detail — or start with the
            module that hurts most today.
          </p>
        </FadeItem>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = icons[product.id]
            return (
              <FadeItem key={product.id}>
                <HoverLift className="h-full">
                  <Link
                    to={productPath(product.id as ProductId)}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-[0_1px_0_rgba(12,21,36,0.04)] transition duration-300 hover:border-accent/35 hover:shadow-[0_24px_50px_-28px_rgba(15,159,138,0.45)] md:min-h-[300px]"
                  >
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-steel transition duration-500 group-hover:scale-x-100"
                      aria-hidden
                    />
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-canvas text-accent-deep ring-1 ring-line transition group-hover:bg-accent/10 group-hover:ring-accent/30">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="rounded-md bg-canvas px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-muted">
                        {product.category}
                      </span>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl font-bold text-ink">{product.name}</h3>
                      <span className="font-display text-sm font-bold text-steel/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-muted">{product.summary}</p>
                    <span className="mt-5 text-sm font-semibold text-steel group-hover:text-accent-deep">
                      View details →
                    </span>
                  </Link>
                </HoverLift>
              </FadeItem>
            )
          })}
        </div>
      </div>
    </MotionSection>
  )
}

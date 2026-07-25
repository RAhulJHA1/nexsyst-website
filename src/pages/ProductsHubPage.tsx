import { Link } from "react-router-dom"
import { PageHero } from "../components/PageHero"
import { Products } from "../components/Products"
import { Platform } from "../components/Platform"
import { plantProducts, products, productPath } from "../data/products"

export function ProductsHubPage() {
  const business = products.filter((p) => p.category !== "Plant")

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="NexSyst Products & Apps"
        description="Explore every NexSyst plant product and business app — Energy, Alarms, QC, CRM, Purchase Orders, HR, and more."
      />
      <Products />
      <Platform />
      <section className="section-pad border-t border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold text-ink">All NexSyst apps</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[...plantProducts, ...business].map((p) => (
              <li key={p.id}>
                <Link
                  to={productPath(p.id)}
                  className="block rounded-xl border border-line bg-canvas/40 px-4 py-3 text-sm font-semibold text-ink transition hover:border-accent/40 hover:text-accent"
                >
                  NexSyst {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

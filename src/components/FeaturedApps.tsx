import { Link } from "react-router-dom"
import { FadeItem, HoverLift, MotionSection } from "./Motion"
import { featuredApps } from "../data/content"

export function FeaturedApps() {
  return (
    <MotionSection
      id="apps"
      className="section-pad border-b border-line bg-surface py-16 md:py-20"
      ariaLabelledBy="featured-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeItem>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">Featured apps</p>
              <h2 id="featured-heading" className="mt-2 font-display text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-ink">
                Run plant and business on one suite
              </h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-steel hover:text-accent-deep">
              Explore all products →
            </Link>
          </div>
        </FadeItem>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {featuredApps.map((app) => (
            <FadeItem key={app.id}>
              <HoverLift className="h-full">
                <Link
                  to={app.href}
                  className="flex h-full flex-col rounded-xl border border-line bg-surface p-4 transition hover:border-accent/40 hover:bg-surface"
                >
                  <span className="font-display text-base font-bold text-ink">{app.name}</span>
                  <span className="mt-1 text-xs leading-snug text-muted">{app.tagline}</span>
                </Link>
              </HoverLift>
            </FadeItem>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

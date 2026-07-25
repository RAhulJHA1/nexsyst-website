import { Link } from "react-router-dom"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

/** Shared page header with a real H1 for sitelink / crawl pages. */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <header className="mesh-hero relative overflow-hidden border-b border-line pb-14 pt-28 text-white md:pb-16 md:pt-32">
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div className="section-pad relative mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] tracking-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/65">{description}</p>
        <p className="mt-6 text-sm text-white/40">
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">{title}</span>
        </p>
      </div>
    </header>
  )
}

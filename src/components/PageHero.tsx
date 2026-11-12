import { Link } from "react-router-dom"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

/** Inner-page header matching the black umenit-style plate. */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-white/10 bg-black pb-12 pt-28 md:pb-14 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(61,126,255,0.14), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="section-pad relative mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8eb4ff]">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/55">{description}</p>
        <p className="mt-5 text-sm text-white/40">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">{title}</span>
        </p>
      </div>
    </header>
  )
}

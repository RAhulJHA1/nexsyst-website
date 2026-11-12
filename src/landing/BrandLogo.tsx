import { Link } from "react-router-dom"

const FULL = "/nexsyst-logo.png?v=6"

/** Official white-on-dark lockup (mark + Nexsyst + tagline). */
export function BrandLogo({
  className = "",
  heightClass = "h-10 sm:h-11",
}: {
  className?: string
  heightClass?: string
}) {
  return (
    <Link to="/" className={`inline-flex shrink-0 items-center ${className}`} aria-label="Nexsyst home">
      <img
        src={FULL}
        alt="Nexsyst — Smart Systems. Better Solutions."
        width={372}
        height={135}
        className={`${heightClass} w-auto max-w-[min(100%,220px)] object-contain object-left sm:max-w-[260px]`}
        decoding="async"
      />
    </Link>
  )
}

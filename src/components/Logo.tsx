import { brand } from "../data/content"

type LogoVariant = "mark" | "nav" | "full"
type LogoTone = "onDark" | "onLight"

interface LogoProps {
  variant?: LogoVariant
  tone?: LogoTone
  className?: string
}

const MARK = "/nexsyst-mark.png?v=5"
const FULL = "/nexsyst-logo.png?v=5"

/**
 * Official assets are white-on-dark.
 * - onDark: use PNG lockup as-is (native brand plate)
 * - onLight: mark chip + CSS wordmark “Nexsyst” (never cram full PNG into a tiny black pill)
 */
export function Logo({ variant = "nav", tone = "onDark", className = "" }: LogoProps) {
  if (variant === "mark") {
    return (
      <span
        className={`inline-flex h-10 w-10 overflow-hidden rounded-lg bg-[#050a14] ${className}`}
      >
        <img
          src={MARK}
          alt={brand.name}
          width={40}
          height={40}
          className="h-full w-full object-cover"
          decoding="async"
        />
      </span>
    )
  }

  if (tone === "onDark" || variant === "full") {
    return (
      <img
        src={FULL}
        alt={brand.name}
        width={372}
        height={135}
        className={
          variant === "full"
            ? `h-12 w-auto max-w-[min(100%,320px)] object-contain object-left sm:h-[3.75rem] ${className}`
            : `h-11 w-auto max-w-[min(100%,240px)] object-contain object-left sm:h-12 sm:max-w-[280px] ${className}`
        }
        decoding="async"
      />
    )
  }

  // Light surfaces: composed lockup matching logo spelling
  return (
    <span className={`inline-flex items-center gap-2.5 text-[#050a14] ${className}`} aria-label={brand.name}>
      <span className="inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-[#050a14]">
        <img src={MARK} alt="" aria-hidden width={40} height={40} className="h-full w-full object-cover" decoding="async" />
      </span>
      <span className="hidden min-w-0 flex-col leading-none sm:flex">
        <span className="text-[1.15rem] font-bold tracking-[-0.02em]">{brand.name}</span>
        <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-slate-500">
          {brand.tagline}
        </span>
      </span>
    </span>
  )
}

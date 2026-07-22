import { brand } from "../data/content"

type LogoVariant = "mark" | "nav" | "full"
type LogoTone = "onDark" | "onLight"

interface LogoProps {
  variant?: LogoVariant
  /** onDark = white artwork; onLight = inverted for pale surfaces */
  tone?: LogoTone
  /** Force wordmark visible (footer). */
  alwaysShowWordmark?: boolean
  className?: string
}

const MARK = "/nexsyst-mark.png?v=2"
const FULL = "/nexsyst-logo.png?v=2"

function toneFilter(tone: LogoTone) {
  return tone === "onLight" ? "brightness(0) opacity(0.92)" : undefined
}

/**
 * Brand lockup.
 * - full: official logo PNG (header)
 * - nav: mark + NexSyst wordmark + tagline (footer / compact)
 */
export function Logo({
  variant = "nav",
  tone = "onDark",
  alwaysShowWordmark = false,
  className = "",
}: LogoProps) {
  const filter = toneFilter(tone)
  const textClass = tone === "onLight" ? "text-ink" : "text-white"

  if (variant === "mark") {
    return (
      <img
        src={MARK}
        alt={brand.name}
        width={40}
        height={40}
        style={filter ? { filter } : undefined}
        className={`h-9 w-9 object-contain ${className}`}
        decoding="async"
      />
    )
  }

  if (variant === "full") {
    return (
      <img
        src={FULL}
        alt={brand.name}
        width={372}
        height={135}
        style={filter ? { filter } : undefined}
        className={`h-14 w-auto max-w-[min(100%,280px)] object-contain object-left sm:h-16 sm:max-w-[340px] ${className}`}
        decoding="async"
      />
    )
  }

  const showWordmarkClass = alwaysShowWordmark ? "flex" : "hidden sm:flex"
  const showRuleClass = alwaysShowWordmark ? "block" : "hidden sm:block"

  return (
    <span className={`inline-flex min-w-0 items-center gap-2.5 ${textClass} ${className}`} aria-label={brand.name}>
      <img
        src={MARK}
        alt=""
        aria-hidden
        width={36}
        height={36}
        style={filter ? { filter } : undefined}
        className="h-9 w-9 shrink-0 object-contain"
        decoding="async"
      />
      <span className={`h-8 w-px shrink-0 bg-current opacity-25 ${showRuleClass}`} aria-hidden />
      <span className={`min-w-0 flex-col justify-center gap-0.5 leading-none ${showWordmarkClass}`}>
        <span className="font-display text-[1.05rem] font-bold tracking-tight">{brand.name}</span>
        <span className="text-[0.58rem] font-medium uppercase tracking-[0.2em] opacity-50">
          {brand.tagline}
        </span>
      </span>
    </span>
  )
}

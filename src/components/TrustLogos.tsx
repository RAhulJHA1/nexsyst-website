import { clientLogos } from "../data/clients"

/** Mono logo row — modern spacing, ready for real client marks. */
export function TrustLogos() {
  return (
    <div className="w-full" aria-label="Industries we serve">
      <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-white/30">
        Trusted across plants &amp; mid-market teams
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-12">
        {clientLogos.map((c) => (
          <div
            key={c.id}
            className="flex h-8 items-center opacity-55 transition hover:opacity-100"
          >
            {c.src ? (
              <img
                src={c.src}
                alt={c.name}
                height={32}
                className="h-6 w-auto max-w-[130px] object-contain object-left sm:h-7"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const el = e.currentTarget
                  el.style.display = "none"
                  const fallback = el.nextElementSibling as HTMLElement | null
                  if (fallback) fallback.hidden = false
                }}
              />
            ) : null}
            <span
              hidden={Boolean(c.src)}
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/55"
            >
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

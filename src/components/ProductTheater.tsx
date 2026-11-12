import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { productShots } from "../data/productShots"
import { easeOut } from "./Motion"

/** Modern product stage — soft plate, pill tabs, glass browser frame. */
export function ProductTheater() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const shot = productShots[active]!

  return (
    <section
      id="product"
      className="relative overflow-hidden bg-[#f4f6f9] py-20 text-slate-900 sm:py-28"
      aria-label="Product"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(61,126,255,0.08), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="section-pad relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#3d7eff]">
            Product
          </p>
          <h2 className="mt-3 text-[clamp(1.85rem,4vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.035em]">
            Real screens your team will open every day
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Switch surfaces — CRM, purchase, payroll — same shell, same truth.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Product screens"
        >
          {productShots.map((s, i) => {
            const on = i === active
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls="product-stage"
                id={`product-tab-${s.id}`}
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  on
                    ? "bg-slate-900 text-white shadow-[0_10px_30px_-14px_rgba(15,23,42,0.55)]"
                    : "bg-white/80 text-slate-600 ring-1 ring-slate-200/80 backdrop-blur hover:text-slate-900"
                }`}
              >
                {s.title}
              </button>
            )
          })}
        </div>

        <div
          id="product-stage"
          role="tabpanel"
          aria-labelledby={`product-tab-${shot.id}`}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white shadow-[0_40px_100px_-48px_rgba(15,23,42,0.45)]">
            <div className="flex h-10 items-center gap-1.5 border-b border-slate-100 bg-slate-50/90 px-4">
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="ml-2 truncate text-[11px] text-slate-400">
                nexsyst.app · {shot.title}
              </span>
            </div>
            <div className="relative aspect-video w-full bg-slate-100">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={shot.id}
                  src={shot.src}
                  alt={shot.alt}
                  width={1280}
                  height={720}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.35, ease: easeOut }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  decoding="async"
                />
              </AnimatePresence>
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-slate-500 sm:text-base">
            <span className="font-semibold text-slate-800">{shot.title}.</span> {shot.line}
          </p>
        </div>
      </div>
    </section>
  )
}

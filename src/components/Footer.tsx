import { Link } from "react-router-dom"
import { Mail } from "lucide-react"
import { brand } from "../data/content"
import { erpModules } from "../data/erp"
export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black text-white">
      <div className="section-pad mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5" aria-label={brand.name}>
            <span className="inline-flex h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/10">
              <img
                src="/nexsyst-mark.png?v=5"
                alt=""
                aria-hidden
                width={36}
                height={36}
                className="h-full w-full object-cover"
                decoding="async"
              />
            </span>
            <span className="font-display text-lg font-bold tracking-[-0.03em]">{brand.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
            {brand.name} connects CRM, purchase, Tally, HR, payroll, and operations in one workspace —
            built for teams tired of spreadsheet handoffs.
          </p>
          <a
            href={`mailto:${brand.email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8eb4ff] hover:text-white"
          >
            <Mail className="h-4 w-4" />
            {brand.email}
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Products</p>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {erpModules.slice(0, 6).map((m) => (
              <li key={m.id}>
                <Link to="/#product" className="hover:text-white">
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Buyers</p>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>
              <Link to="/quote" className="hover:text-white">
                Request quotation
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Book a demo
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-pad mx-auto flex max-w-6xl flex-col gap-2 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. {brand.tagline}
          </p>
          <p>{brand.url.replace("https://", "")}</p>
        </div>
      </div>
    </footer>
  )
}

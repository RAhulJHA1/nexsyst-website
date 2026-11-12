import { Link } from "react-router-dom"
import { Mail, Share2 } from "lucide-react"
import { BrandLogo } from "./BrandLogo"
import { brand } from "./data"
import { erpModules } from "../data/erp"

export function Footer() {
  return (
    <footer className="border-t border-[rgba(168,178,193,0.12)] bg-[#0f1419]">
      <div className="section-pad mx-auto grid max-w-6xl gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <BrandLogo heightClass="h-11 sm:h-12" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#a8b2c1]">
            {brand.tagline} Corporate ERP for CRM, purchase, Tally, HR, payroll, and operations.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4a9a8e]">Modules</p>
          <ul className="mt-3 space-y-1.5 text-sm text-[#a8b2c1]">
            {erpModules.slice(0, 6).map((m) => (
              <li key={m.id}>
                <Link to={`/modules/${m.id}`} className="hover:text-[#d5dbe5]">
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4a9a8e]">Company</p>
          <ul className="mt-3 space-y-1.5 text-sm text-[#a8b2c1]">
            <li>
              <Link to="/#pricing" className="hover:text-[#d5dbe5]">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-[#d5dbe5]">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#d5dbe5]">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[rgba(168,178,193,0.1)]">
        <div className="section-pad mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 py-5 text-sm text-[#a8b2c1] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.name}. {brand.tagline}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center gap-1.5 transition hover:text-[#4a9a8e]"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">{brand.email}</span>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-[#4a9a8e]"
              aria-label="LinkedIn"
            >
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

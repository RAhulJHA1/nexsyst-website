import { Link } from "react-router-dom"
import { brand } from "../data/content"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="section-pad mx-auto flex max-w-6xl flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Link to="/" className="inline-flex items-center">
            <Logo variant="nav" tone="onLight" alwaysShowWordmark />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Industrial software suite for plant operations and business teams.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm font-medium text-muted" aria-label="Footer">
          <Link to="/#suite" className="hover:text-ink">
            Suite
          </Link>
          <Link to="/#products" className="hover:text-ink">
            Products
          </Link>
          <Link to="/#platform" className="hover:text-ink">
            Business apps
          </Link>
          <Link to="/#faq" className="hover:text-ink">
            FAQ
          </Link>
          <Link to="/#contact" className="hover:text-ink">
            Contact
          </Link>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="section-pad mx-auto flex max-w-6xl flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <a href={`mailto:${brand.email}`} className="hover:text-ink">
            {brand.email}
          </a>
        </div>
      </div>
    </footer>
  )
}

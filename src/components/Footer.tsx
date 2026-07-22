import { Link } from "react-router-dom"
import { brand } from "../data/content"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand text-white">
      <div className="section-pad mx-auto flex max-w-6xl flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Link to="/" className="inline-flex shrink-0 items-center">
            <Logo variant="full" tone="onDark" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Industrial software suite for plant operations and business teams.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm font-medium text-white/65" aria-label="Footer">
          <Link to="/#suite" className="hover:text-white">
            Suite
          </Link>
          <Link to="/#products" className="hover:text-white">
            Products
          </Link>
          <Link to="/#platform" className="hover:text-white">
            Business apps
          </Link>
          <Link to="/#faq" className="hover:text-white">
            FAQ
          </Link>
          <Link to="/#contact" className="hover:text-white">
            Contact
          </Link>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="section-pad mx-auto flex max-w-6xl flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <a href={`mailto:${brand.email}`} className="hover:text-white/80">
            {brand.email}
          </a>
        </div>
      </div>
    </footer>
  )
}

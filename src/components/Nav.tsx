import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { brand } from "../data/content"
import { APP_LOGIN_URL } from "../data/erp"

const links = [
  { to: "/#product", label: "Product" },
  { to: "/#modules", label: "Modules" },
  { to: "/quote", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
]

/** Floating glass nav — modern SaaS chrome. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  return (
    <motion.header
      initial={reduce ? false : { y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-x-0 top-0 z-50 text-white"
    >
      <div className="section-pad mx-auto max-w-6xl pt-3 sm:pt-4">
        <div
          className={`glass-strong flex h-14 items-center justify-between gap-3 rounded-2xl px-3 transition sm:h-16 sm:px-4 ${
            scrolled ? "shadow-[0_20px_50px_-24px_rgba(0,0,0,0.85)]" : ""
          }`}
        >
          <Link
            to="/"
            className="inline-flex shrink-0 items-center gap-2.5"
            aria-label="Nexsyst home"
          >
            <span className="inline-flex h-8 w-8 overflow-hidden rounded-xl ring-1 ring-white/10 sm:h-9 sm:w-9">
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
            <span className="font-display text-[1.02rem] font-bold tracking-[-0.03em]">
              {brand.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-white/60 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={APP_LOGIN_URL}
              className="hidden rounded-full px-3 py-2 text-sm font-semibold text-white/65 transition hover:text-white sm:inline-flex"
            >
              Login
            </a>
            <Link
              to="/quote"
              className="hidden rounded-full bg-[#3d7eff] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_28px_-12px_rgba(61,126,255,0.9)] transition hover:brightness-110 sm:inline-flex"
            >
              Get quotation
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 text-white md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="section-pad mx-auto mt-2 max-w-6xl md:hidden"
            aria-label="Mobile"
          >
            <div className="glass-strong flex flex-col rounded-2xl p-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="rounded-xl px-3 py-3 text-base font-medium text-white/80"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a href={APP_LOGIN_URL} className="rounded-xl px-3 py-3 font-semibold text-white">
                Login
              </a>
              <Link
                to="/quote"
                className="mt-1 rounded-xl bg-[#3d7eff] px-3 py-3 text-center font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get quotation
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

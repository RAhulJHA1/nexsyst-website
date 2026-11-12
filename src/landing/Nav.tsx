import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { BrandLogo } from "./BrandLogo"
import { navLinks } from "./data"
import { erpModules } from "../data/erp"

function scrollToHash(href: string) {
  const id = href.replace("#", "")
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [modsOpen, setModsOpen] = useState(false)
  const reduce = useReducedMotion()
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
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
    setModsOpen(false)
  }, [location.pathname, location.hash])

  const goHash = (href: string) => {
    setOpen(false)
    if (!onHome) {
      navigate(`/${href}`)
      return
    }
    scrollToHash(href)
  }

  return (
    <motion.header
      initial={reduce ? false : { y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${
        scrolled
          ? "border-[rgba(168,178,193,0.12)] bg-[#0f1419]/95 backdrop-blur-md shadow-[0_12px_40px_-24px_rgba(0,0,0,0.8)]"
          : "border-transparent bg-[#0f1419]/80 backdrop-blur-sm"
      }`}
      onMouseLeave={() => setModsOpen(false)}
    >
      <div className="section-pad mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4">
        <BrandLogo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.href === "#modules" ? (
              <div key={link.href} className="relative">
                <button
                  type="button"
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#a8b2c1] transition hover:text-[#d5dbe5]"
                  onMouseEnter={() => setModsOpen(true)}
                  onFocus={() => setModsOpen(true)}
                  onClick={() => goHash("#modules")}
                  aria-expanded={modsOpen}
                >
                  {link.label}
                </button>
                <AnimatePresence>
                  {modsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute left-0 top-full z-50 mt-2 w-[22rem] rounded-xl border border-[rgba(168,178,193,0.14)] bg-[#192028] p-2 shadow-2xl"
                    >
                      <div className="grid max-h-[22rem] grid-cols-1 gap-0.5 overflow-y-auto">
                        {erpModules.map((m) => {
                          const Icon = m.icon
                          return (
                            <Link
                              key={m.id}
                              to={`/modules/${m.id}`}
                              className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition hover:bg-white/5"
                              onClick={() => setModsOpen(false)}
                            >
                              <span
                                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
                                style={{ background: m.accent }}
                              >
                                <Icon className="h-4 w-4" />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-[#d5dbe5]">
                                  {m.name}
                                </span>
                                <span className="block text-xs text-[#a8b2c1]">{m.short}</span>
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.href}
                href={onHome ? link.href : `/${link.href}`}
                onClick={(e) => {
                  e.preventDefault()
                  goHash(link.href)
                }}
                className="rounded-md px-3 py-2 text-sm font-medium text-[#a8b2c1] transition hover:text-[#d5dbe5]"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={onHome ? "#pricing" : "/#pricing"}
            className="btn-teal hidden sm:inline-flex"
            onClick={(e) => {
              e.preventDefault()
              goHash("#pricing")
            }}
          >
            Get quotation
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(168,178,193,0.2)] text-[#d5dbe5] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[rgba(168,178,193,0.12)] bg-[#0f1419] lg:hidden"
            aria-label="Mobile"
          >
            <div className="section-pad flex max-h-[80vh] flex-col overflow-y-auto py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={onHome ? link.href : `/${link.href}`}
                  className="rounded-lg px-3 py-3 text-base font-medium text-[#d5dbe5]"
                  onClick={(e) => {
                    e.preventDefault()
                    goHash(link.href)
                  }}
                >
                  {link.label}
                </a>
              ))}
              <p className="mt-2 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4a9a8e]">
                Modules
              </p>
              {erpModules.map((m) => (
                <Link
                  key={m.id}
                  to={`/modules/${m.id}`}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#a8b2c1]"
                  onClick={() => setOpen(false)}
                >
                  {m.name}
                </Link>
              ))}
              <a
                href={onHome ? "#pricing" : "/#pricing"}
                className="btn-teal mt-3"
                onClick={(e) => {
                  e.preventDefault()
                  goHash("#pricing")
                }}
              >
                Get quotation
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

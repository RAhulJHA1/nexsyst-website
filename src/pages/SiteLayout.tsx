import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"

/**
 * Thin shell. Home + module pages own their chrome; legal pages get a simple frame.
 */
export function SiteLayout() {
  const { pathname, hash } = useLocation()
  const isChromePage = pathname === "/" || pathname.startsWith("/modules/")

  useEffect(() => {
    if (hash && pathname === "/") {
      const id = hash.replace("#", "")
      // Wait a tick for home sections to mount after cross-route navigation
      const t = window.setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 72
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
        }
      }, 50)
      return () => window.clearTimeout(t)
    }
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  if (isChromePage) {
    return <Outlet />
  }

  return (
    <div className="min-h-svh bg-[#0f1419] text-[#a8b2c1]">
      <a
        href="/"
        className="section-pad mx-auto flex max-w-6xl items-center gap-2 py-5 text-sm font-semibold text-[#4a9a8e]"
      >
        ← Back to Nexsyst
      </a>
      <main className="section-pad mx-auto max-w-3xl pb-16">
        <Outlet />
      </main>
    </div>
  )
}

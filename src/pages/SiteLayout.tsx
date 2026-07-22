import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Seo } from "../components/Seo"
import { ScrollProgress } from "../components/Motion"
import { Nav } from "../components/Nav"
import { Footer } from "../components/Footer"
import { StickyBuyBar } from "../components/StickyBuyBar"

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export function SiteLayout() {
  return (
    <div className="min-h-svh">
      <Seo />
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-brand"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <StickyBuyBar />
    </div>
  )
}

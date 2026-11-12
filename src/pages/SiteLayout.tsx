import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Seo } from "../components/Seo"
import { Nav } from "../components/Nav"
import { Footer } from "../components/Footer"
import { SmoothScroll, scrollPageTo } from "../components/SmoothScroll"

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 72
        scrollPageTo(Math.max(0, top))
        return
      }
    }
    scrollPageTo(0, true)
  }, [pathname, hash])

  return null
}

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-black text-white">
      <Seo />
      <SmoothScroll />
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-[#3d7eff] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

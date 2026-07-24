import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { buildJsonLd } from "../data/seo"
import { applyPageMeta, metaForPath } from "../lib/pageMeta"
import { brand } from "../data/content"

const SCRIPT_ID = "nexsyst-jsonld"

export function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = metaForPath(pathname)
    applyPageMeta(meta)

    const existing = document.getElementById(SCRIPT_ID)
    if (existing) existing.remove()

    const script = document.createElement("script")
    script.id = SCRIPT_ID
    script.type = "application/ld+json"
    script.text = JSON.stringify(buildJsonLd(meta.path))
    document.head.appendChild(script)

    return () => {
      document.getElementById(SCRIPT_ID)?.remove()
    }
  }, [pathname])

  // Visible-to-crawlers brand claim (screen-reader / SEO text)
  return (
    <div className="sr-only" aria-hidden={false}>
      <p>
        Official website of {brand.name}: {brand.url}. Also known as Nexsyst, Nex Syst, and NEXSYST.
        Contact {brand.email}.
      </p>
    </div>
  )
}

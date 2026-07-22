import { useEffect } from "react"
import { buildJsonLd } from "../data/seo"

const SCRIPT_ID = "nexsyst-jsonld"

export function Seo() {
  useEffect(() => {
    const existing = document.getElementById(SCRIPT_ID)
    if (existing) existing.remove()

    const script = document.createElement("script")
    script.id = SCRIPT_ID
    script.type = "application/ld+json"
    script.text = JSON.stringify(buildJsonLd())
    document.head.appendChild(script)

    return () => {
      document.getElementById(SCRIPT_ID)?.remove()
    }
  }, [])

  return null
}

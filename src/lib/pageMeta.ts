import { brand } from "../data/content"
import { getProduct, products } from "../data/products"

export type PageMeta = {
  title: string
  description: string
  path: string
  keywords?: string
  type?: "website" | "article" | "product"
}

const HOME_META: PageMeta = {
  title: "NexSyst | Official Website — nexsyst.in",
  description:
    "Official NexSyst website (nexsyst.in). NexSyst industrial software for process plants — Energy, Alarms, Audit, QC, Batch, OEE, CRM — plus cloud, AI/ML, and RAG. SMART SYSTEMS. BETTER SOLUTIONS.",
  path: "/",
  keywords: brand.keywords,
  type: "website",
}

export function metaForPath(pathname: string): PageMeta {
  const clean = pathname.replace(/\/+$/, "") || "/"

  if (clean === "/") return HOME_META

  const productMatch = clean.match(/^\/products\/([^/]+)$/)
  if (productMatch) {
    const product = getProduct(productMatch[1])
    if (product) {
      return {
        title: `NexSyst ${product.name} | Official NexSyst Product — nexsyst.in`,
        description: product.answer.startsWith("NexSyst")
          ? `${product.answer} Official product page on nexsyst.in.`
          : `NexSyst ${product.name}. ${product.answer} Official page on nexsyst.in.`,
        path: `/products/${product.id}`,
        keywords: `NexSyst ${product.name}, NexSyst, Nexsyst, ${product.name} software, nexsyst.in`,
        type: "product",
      }
    }
  }

  return {
    ...HOME_META,
    path: clean.startsWith("/") ? clean : `/${clean}`,
  }
}

export function absoluteUrl(path: string) {
  const base = brand.url.replace(/\/+$/, "")
  if (!path || path === "/") return `${base}/`
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}

export function allIndexablePaths() {
  return ["/", ...products.map((p) => `/products/${p.id}`)]
}

function upsertMeta(
  selector: string,
  attrs: Record<string, string>,
  create: "name" | "property",
  key: string,
) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(create, key)
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement("link")
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

/** Apply brand-first page meta for Google, Bing, and Yahoo (Bing-powered). */
export function applyPageMeta(meta: PageMeta) {
  const url = absoluteUrl(meta.path)
  const image = `${brand.url}/nexsyst-logo.png`

  document.title = meta.title

  upsertMeta('meta[name="description"]', { content: meta.description }, "name", "description")
  upsertMeta(
    'meta[name="keywords"]',
    { content: meta.keywords ?? brand.keywords },
    "name",
    "keywords",
  )
  upsertMeta('meta[name="author"]', { content: "NexSyst" }, "name", "author")
  upsertMeta('meta[name="copyright"]', { content: "NexSyst" }, "name", "copyright")
  upsertMeta(
    'meta[name="robots"]',
    { content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    "name",
    "robots",
  )
  upsertMeta('meta[name="googlebot"]', { content: "index, follow" }, "name", "googlebot")
  upsertMeta('meta[name="bingbot"]', { content: "index, follow" }, "name", "bingbot")

  upsertLink("canonical", url)

  upsertMeta('meta[property="og:type"]', { content: meta.type === "product" ? "website" : "website" }, "property", "og:type")
  upsertMeta('meta[property="og:site_name"]', { content: "NexSyst" }, "property", "og:site_name")
  upsertMeta('meta[property="og:locale"]', { content: "en_US" }, "property", "og:locale")
  upsertMeta('meta[property="og:url"]', { content: url }, "property", "og:url")
  upsertMeta('meta[property="og:title"]', { content: meta.title }, "property", "og:title")
  upsertMeta('meta[property="og:description"]', { content: meta.description }, "property", "og:description")
  upsertMeta('meta[property="og:image"]', { content: image }, "property", "og:image")
  upsertMeta(
    'meta[property="og:image:alt"]',
    { content: "NexSyst — Official website nexsyst.in. Smart Systems. Better Solutions." },
    "property",
    "og:image:alt",
  )

  upsertMeta('meta[name="twitter:card"]', { content: "summary_large_image" }, "name", "twitter:card")
  upsertMeta('meta[name="twitter:title"]', { content: meta.title }, "name", "twitter:title")
  upsertMeta('meta[name="twitter:description"]', { content: meta.description }, "name", "twitter:description")
  upsertMeta('meta[name="twitter:image"]', { content: image }, "name", "twitter:image")
}

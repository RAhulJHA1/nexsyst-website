import { brand } from "../data/content"
import { allProductPaths, getProduct } from "../data/products"

export type PageMeta = {
  title: string
  description: string
  path: string
  keywords?: string
  type?: "website" | "article" | "product"
}

const HOME_META: PageMeta = {
  title: brand.shortSeoTitle,
  description: brand.metaDescription,
  path: "/",
  keywords: brand.keywords,
  type: "website",
}

function clipMeta(text: string, max = 155) {
  const t = text.trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max - 1)
  const at = cut.lastIndexOf(" ")
  return `${(at > 80 ? cut.slice(0, at) : cut).trimEnd()}…`
}

const SITE_PAGES: Record<string, PageMeta> = {
  "/about": {
    title: "About Nexsyst | Business ERP Platform — nexsyst.in",
    description:
      "About Nexsyst — all-in-one business ERP connecting CRM, purchasing, accounting, payroll, and analytics.",
    path: "/about",
    keywords: "About Nexsyst, Nexsyst ERP, nexsyst.in",
  },
  "/services": {
    title: "Nexsyst Services | Implementation & Integrations — nexsyst.in",
    description:
      "Nexsyst services: ERP implementation, Tally integration, payroll go-live, and executive analytics.",
    path: "/services",
    keywords: "Nexsyst services, ERP implementation, Tally integration",
  },
  "/products": {
    title: "Nexsyst ERP Modules | CRM, PO, Payroll & More — nexsyst.in",
    description:
      "Explore Nexsyst ERP modules — CRM, purchase orders, accounting, attendance, payroll, leave, and BI.",
    path: "/products",
    keywords: "Nexsyst products, ERP modules, CRM, payroll, purchase orders",
  },
  "/faq": {
    title: "Nexsyst FAQ | Official Answers — nexsyst.in",
    description:
      "Nexsyst FAQ — what Nexsyst ERP is, modules, pricing path, and how to request a demo.",
    path: "/faq",
    keywords: "Nexsyst FAQ, What is Nexsyst, nexsyst.in",
  },
  "/contact": {
    title: "Book a Nexsyst Demo — nexsyst.in",
    description:
      "Book a 30-minute Nexsyst walkthrough mapped to your CRM, purchase, payroll, or Tally workflows.",
    path: "/contact",
    keywords: "Nexsyst demo, book demo, nexsyst.in contact",
  },
  "/quote": {
    title: "Request a Nexsyst Quotation — nexsyst.in",
    description:
      "Request a scoped Nexsyst quotation — modules, users, hosting, and implementation for your business.",
    path: "/quote",
    keywords: "Nexsyst quotation, ERP pricing, request quote, nexsyst.in",
  },
  "/privacy": {
    title: "Privacy Policy | Nexsyst — nexsyst.in",
    description: "How Nexsyst handles website enquiry and quotation data.",
    path: "/privacy",
    keywords: "Nexsyst privacy policy",
  },
  "/terms": {
    title: "Terms & Conditions | Nexsyst — nexsyst.in",
    description: "Website terms, quotations, and commercial boundaries for Nexsyst.",
    path: "/terms",
    keywords: "Nexsyst terms and conditions",
  },
}

export function metaForPath(pathname: string): PageMeta {
  const clean = pathname.replace(/\/+$/, "") || "/"

  if (clean === "/") return HOME_META

  if (SITE_PAGES[clean]) return SITE_PAGES[clean]

  const productMatch = clean.match(/^\/products\/([^/]+)$/)
  if (productMatch) {
    const product = getProduct(productMatch[1])
    if (product) {
      const raw = product.answer.startsWith("Nexsyst")
        ? product.answer
        : `Nexsyst ${product.name}. ${product.answer}`
      return {
        title: `Nexsyst ${product.name} | Official Product — nexsyst.in`,
        description: clipMeta(raw),
        path: `/products/${product.id}`,
        keywords: `Nexsyst ${product.name}, Nexsyst, Nexsyst, ${product.name} software, nexsyst.in`,
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
  return ["/", "/about", "/services", "/products", "/faq", "/contact", ...allProductPaths()]
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
  upsertMeta('meta[name="author"]', { content: "Nexsyst" }, "name", "author")
  upsertMeta('meta[name="copyright"]', { content: "Nexsyst" }, "name", "copyright")
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
  upsertMeta('meta[property="og:site_name"]', { content: "Nexsyst" }, "property", "og:site_name")
  upsertMeta('meta[property="og:locale"]', { content: "en_US" }, "property", "og:locale")
  upsertMeta('meta[property="og:url"]', { content: url }, "property", "og:url")
  upsertMeta('meta[property="og:title"]', { content: meta.title }, "property", "og:title")
  upsertMeta('meta[property="og:description"]', { content: meta.description }, "property", "og:description")
  upsertMeta('meta[property="og:image"]', { content: image }, "property", "og:image")
  upsertMeta(
    'meta[property="og:image:alt"]',
    { content: "Nexsyst — Official website nexsyst.in. Smart Systems. Better Solutions." },
    "property",
    "og:image:alt",
  )

  upsertMeta('meta[name="twitter:card"]', { content: "summary_large_image" }, "name", "twitter:card")
  upsertMeta('meta[name="twitter:title"]', { content: meta.title }, "name", "twitter:title")
  upsertMeta('meta[name="twitter:description"]', { content: meta.description }, "name", "twitter:description")
  upsertMeta('meta[name="twitter:image"]', { content: image }, "name", "twitter:image")
}

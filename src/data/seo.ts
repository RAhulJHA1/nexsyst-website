import { brand, faqs, platformModules, products, services } from "./content"

export function buildJsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": `${brand.url}/#organization`,
    name: brand.name,
    url: brand.url,
    email: brand.email,
    description: brand.description,
    slogan: brand.tagline,
    logo: `${brand.url}/nexsyst-logo.png`,
  }

  const website = {
    "@type": "WebSite",
    "@id": `${brand.url}/#website`,
    url: brand.url,
    name: brand.name,
    description: brand.description,
    publisher: { "@id": `${brand.url}/#organization` },
    inLanguage: "en",
  }

  const software = {
    "@type": "SoftwareApplication",
    "@id": `${brand.url}/#software`,
    name: brand.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Industrial / Manufacturing Software",
    operatingSystem: "Web",
    description: brand.description,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
      description: "Contact for pricing and demo",
    },
    featureList: [...products.map((p) => p.name), ...platformModules.map((m) => m.name)].join(", "),
    provider: { "@id": `${brand.url}/#organization` },
  }

  const productList = {
    "@type": "ItemList",
    "@id": `${brand.url}/#products`,
    name: "NexSyst industrial software products",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${brand.url}/products/${p.id}`,
      description: p.answer,
    })),
  }

  const serviceList = {
    "@type": "ItemList",
    "@id": `${brand.url}/#services`,
    name: "NexSyst IT and industrial software services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      description: s.body,
      url: `${brand.url}/#services`,
    })),
  }

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${brand.url}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  }

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, software, productList, serviceList, faqPage],
  }
}

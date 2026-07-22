import { brand, faqs, platformModules, products, services } from "./content"

export function buildJsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": `${brand.url}/#organization`,
    name: "NexSyst",
    legalName: "NexSyst",
    alternateName: ["Nexsyst", "Nex Syst", "NexSyst Software"],
    url: brand.url,
    email: brand.email,
    description: brand.description,
    slogan: brand.tagline,
    logo: {
      "@type": "ImageObject",
      url: `${brand.url}/nexsyst-logo.png`,
      caption: "NexSyst logo — Smart Systems. Better Solutions.",
    },
    brand: {
      "@type": "Brand",
      name: "NexSyst",
      slogan: brand.tagline,
    },
    knowsAbout: [
      "NexSyst industrial software",
      "Cloud services",
      "Enterprise AI and machine learning",
      "RAG retrieval-augmented generation",
      "Energy management",
      "Alarm management",
      "Audit trail",
      "QC log book",
      "Batch reporting",
      "OEE",
      "CRM",
      "Purchase orders",
      "Process plant software",
    ],
  }

  const website = {
    "@type": "WebSite",
    "@id": `${brand.url}/#website`,
    url: brand.url,
    name: "NexSyst Official Website",
    alternateName: "NexSyst",
    description: brand.description,
    publisher: { "@id": `${brand.url}/#organization` },
    inLanguage: "en",
    copyrightHolder: { "@id": `${brand.url}/#organization` },
    copyrightNotice: "© NexSyst. All rights reserved. Original content.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${brand.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  const webPage = {
    "@type": "WebPage",
    "@id": `${brand.url}/#webpage`,
    url: brand.url,
    name: brand.shortSeoTitle,
    description: brand.description,
    isPartOf: { "@id": `${brand.url}/#website` },
    about: { "@id": `${brand.url}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${brand.url}/nexsyst-logo.png`,
    },
    inLanguage: "en",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#about-heading", "#faq"],
    },
  }

  const software = {
    "@type": "SoftwareApplication",
    "@id": `${brand.url}/#software`,
    name: "NexSyst",
    alternateName: ["NexSyst Suite", "NexSyst Software"],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Industrial / Manufacturing Software",
    operatingSystem: "Web",
    description: brand.description,
    url: brand.url,
    image: `${brand.url}/nexsyst-logo.png`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
      description: "Contact NexSyst for pricing and demo",
    },
    featureList: [...products.map((p) => `NexSyst ${p.name}`), ...platformModules.map((m) => `NexSyst ${m.name}`)].join(
      ", ",
    ),
    provider: { "@id": `${brand.url}/#organization` },
    brand: { "@type": "Brand", name: "NexSyst" },
  }

  const productList = {
    "@type": "ItemList",
    "@id": `${brand.url}/#products`,
    name: "NexSyst industrial software products",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `NexSyst ${p.name}`,
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
    "@graph": [organization, website, webPage, software, productList, serviceList, faqPage],
  }
}

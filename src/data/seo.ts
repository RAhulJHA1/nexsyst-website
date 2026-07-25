import { brand, faqs, platformModules, products, services } from "./content"

export function buildJsonLd(pagePath = "/") {
  const pageUrl =
    !pagePath || pagePath === "/"
      ? `${brand.url}/`
      : `${brand.url}${pagePath.startsWith("/") ? pagePath : `/${pagePath}`}`

  const organization = {
    "@type": "Organization",
    "@id": `${brand.url}/#organization`,
    name: "NexSyst",
    legalName: "NexSyst",
    alternateName: [
      "Nexsyst",
      "Nex Syst",
      "NEXSYST",
      "NexSyst Software",
      "NexSyst Official",
      "nexsyst.in",
    ],
    url: brand.url,
    email: brand.email,
    description: brand.description,
    slogan: brand.tagline,
    foundingLocation: {
      "@type": "Place",
      name: "India",
    },
    logo: {
      "@type": "ImageObject",
      url: `${brand.url}/nexsyst-logo.png`,
      caption: "NexSyst logo — Smart Systems. Better Solutions. Official mark of nexsyst.in",
    },
    image: `${brand.url}/nexsyst-logo.png`,
    brand: {
      "@type": "Brand",
      "@id": `${brand.url}/#brand`,
      name: "NexSyst",
      alternateName: ["Nexsyst", "Nex Syst", "NEXSYST"],
      slogan: brand.tagline,
      url: brand.url,
      logo: `${brand.url}/nexsyst-logo.png`,
    },
    knowsAbout: [
      "NexSyst",
      "NexSyst official website",
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
    alternateName: ["NexSyst", "Nexsyst", "nexsyst.in", "Nex Syst"],
    description:
      "Official website of NexSyst (nexsyst.in) — industrial software suite, cloud services, AI/ML, and RAG.",
    publisher: { "@id": `${brand.url}/#organization` },
    creator: { "@id": `${brand.url}/#organization` },
    copyrightHolder: { "@id": `${brand.url}/#organization` },
    inLanguage: "en",
    copyrightNotice: "© NexSyst. All rights reserved. Official site: nexsyst.in",
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
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name:
      pagePath === "/" || pagePath === ""
        ? "NexSyst | Official Website — nexsyst.in"
        : `NexSyst | ${pagePath.replace(/^\//, "")}`,
    description: brand.description,
    isPartOf: { "@id": `${brand.url}/#website` },
    about: [
      { "@id": `${brand.url}/#organization` },
      { "@id": `${brand.url}/#brand` },
    ],
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${brand.url}/nexsyst-logo.png`,
    },
    inLanguage: "en",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#mission-heading", "#faq-heading", "#faq"],
    },
  }

  const software = {
    "@type": "SoftwareApplication",
    "@id": `${brand.url}/#software`,
    name: "NexSyst",
    alternateName: ["NexSyst Suite", "NexSyst Software", "Nexsyst"],
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
      description: "Contact NexSyst for pricing and demo via the official website nexsyst.in",
    },
    featureList: [...products.map((p) => `NexSyst ${p.name}`), ...platformModules.map((m) => `NexSyst ${m.name}`)].join(
      ", ",
    ),
    provider: { "@id": `${brand.url}/#organization` },
    brand: { "@id": `${brand.url}/#brand` },
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
      url: `${brand.url}/services`,
    })),
  }

  const appList = {
    "@type": "ItemList",
    "@id": `${brand.url}/#apps`,
    name: "NexSyst suite apps — plant and business",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `NexSyst ${p.name}`,
      url: `${brand.url}/products/${p.id}`,
      description: p.answer,
    })),
  }

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${brand.url}/faq#faq`,
    url: `${brand.url}/faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  }

  const siteNav = {
    "@type": "SiteNavigationElement",
    "@id": `${brand.url}/#sitenav`,
    name: "NexSyst primary navigation",
    hasPart: [
      { "@type": "WebPage", name: "Home", url: `${brand.url}/` },
      { "@type": "WebPage", name: "About", url: `${brand.url}/about` },
      { "@type": "WebPage", name: "Products", url: `${brand.url}/products` },
      { "@type": "WebPage", name: "Services", url: `${brand.url}/services` },
      { "@type": "WebPage", name: "FAQ", url: `${brand.url}/faq` },
      { "@type": "WebPage", name: "Contact", url: `${brand.url}/contact` },
    ],
  }

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, webPage, software, productList, serviceList, appList, faqPage, siteNav],
  }
}

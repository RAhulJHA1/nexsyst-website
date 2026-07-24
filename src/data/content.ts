export const brand = {
  name: "NexSyst",
  tagline: "SMART SYSTEMS. BETTER SOLUTIONS.",
  /** Public marketing URL — update when the site is deployed. */
  url: "https://nexsyst.in",
  email: "info@nexsyst.in",
  description:
    "NexSyst is the official industrial software suite for process plants and industrial businesses — energy, alarms, audit, QC, batch reporting, CRM, procurement, assets, HR, and projects. NexSyst also delivers cloud services, enterprise AI/ML integration, and RAG (retrieval-augmented generation) solutions. SMART SYSTEMS. BETTER SOLUTIONS.",
  suiteLine: "The operating system for plant & business",
  shortSeoTitle: "NexSyst | Official Website — nexsyst.in",
  /** Keep ~120–155 chars for Google/Bing snippet limits. */
  metaDescription:
    "Official NexSyst website. Industrial plant software — Energy, Alarms, QC, Batch, OEE, CRM — plus cloud, AI/ML, and RAG.",
  keywords:
    "NexSyst, Nexsyst, Nex Syst, NEXSYST, nexsyst.in, NexSyst official website, official NexSyst site, NexSyst software, NexSyst industrial suite, NexSyst cloud services, NexSyst AI ML, NexSyst RAG, enterprise AI integration, retrieval augmented generation, NexSyst energy management, process plant software, industrial software suite",
}

/** Featured apps strip on the homepage */
export const featuredApps = [
  {
    id: "energy",
    name: "Energy",
    tagline: "Cut waste. See every kWh.",
    href: "/products/energy",
  },
  {
    id: "crm",
    name: "CRM",
    tagline: "Pipeline to close.",
    href: "/products/crm",
  },
  {
    id: "qc",
    name: "QC Log Book",
    tagline: "Paperless quality.",
    href: "/products/qc",
  },
  {
    id: "po",
    name: "Purchase Orders",
    tagline: "Vendor to PDF.",
    href: "/products/purchase-orders",
  },
  {
    id: "people",
    name: "People & Payroll",
    tagline: "Muster to payslip.",
    href: "/products/hr-payroll",
  },
  {
    id: "assets",
    name: "Assets",
    tagline: "Lifecycle control.",
    href: "/products/assets",
  },
] as const

export { products, plantProducts } from "./products"
export type { ProductDetail, ProductId } from "./products"
export { getProduct, productPath } from "./products"

/** Suite pillars by department */
export const suitePillars = [
  {
    id: "plant",
    title: "Plant operations",
    headline: "Keep the floor visible, compliant, and under control",
    body: "Digitize energy, alarms, audit trails, QC log books, batch dossiers, and OEE so operators and QA work from the same source of truth — not binders and spreadsheets.",
    apps: [
      "Energy Management",
      "Alarm Management",
      "Audit Trail",
      "QC Log Book",
      "Batch Report",
      "OEE & Production KPIs",
    ],
  },
  {
    id: "sales",
    title: "Sales & customers",
    headline: "Define and run a repeatable sales process",
    body: "Capture accounts, opportunities, and activities in one CRM workspace. Hand off won work into projects, POs, and delivery without re-keying customer data.",
    apps: ["CRM & Pipeline", "Customers & accounts", "Activities & follow-ups", "Lead reports"],
  },
  {
    id: "supply",
    title: "Procurement & inventory",
    headline: "From indent to GRN without email chaos",
    body: "Material requests, purchase orders, vendor masters, receipts, and dispatches stay linked — with approvals and branded PO PDFs your finance team recognizes.",
    apps: ["Purchase Orders", "Vendors", "Inventory & GRNs", "Material Indents", "Dispatches"],
  },
  {
    id: "people",
    title: "People & workforce",
    headline: "Onboard, track attendance, and run payroll",
    body: "Employee masters, muster rolls, leave, compensation, advances, and statutory payroll in one place — plus gate pass for visitors and material movement.",
    apps: ["HR & Attendance", "Payroll", "Expense Portal", "Gate Pass"],
  },
  {
    id: "delivery",
    title: "Projects & assets",
    headline: "Deliver work and protect capital equipment",
    body: "Plan projects, log timesheets, transfer resources, and manage asset lifecycle from registration through maintenance and disposal.",
    apps: ["Projects & Timesheets", "Asset Management", "Transfers & appraisals"],
  },
] as const

export const platformModules = [
  {
    id: "crm",
    name: "CRM & Pipeline",
    blurb: "Customers, opportunities, and activities in one sales workspace — from first contact to close.",
    category: "Sales",
    href: "/products/crm",
  },
  {
    id: "purchase-orders",
    name: "Purchase Orders",
    blurb: "Vendor-to-PO workflows with approvals and classic branded PDF output for finance.",
    category: "Supply",
    href: "/products/purchase-orders",
  },
  {
    id: "inventory",
    name: "Inventory & Indents",
    blurb: "Stock, GRNs, dispatches, and material request routing with operator-friendly workflows.",
    category: "Supply",
    href: "/products/inventory",
  },
  {
    id: "assets",
    name: "Asset Management",
    blurb: "Enterprise asset lifecycle — registration, assignment, maintenance, and disposal.",
    category: "Delivery",
    href: "/products/assets",
  },
  {
    id: "projects",
    name: "Projects & Timesheets",
    blurb: "Delivery tracking, transfers, effort capture, and project ratings in one place.",
    category: "Delivery",
    href: "/products/projects",
  },
  {
    id: "hr-payroll",
    name: "HR, Attendance & Payroll",
    blurb: "Muster, leave, compensation, payslips, and statutory runs for industrial workforces.",
    category: "People",
    href: "/products/hr-payroll",
  },
  {
    id: "expenses",
    name: "Expense Portal",
    blurb: "Employee claims, category controls, and multi-level approval chains.",
    category: "People",
    href: "/products/expenses",
  },
  {
    id: "gate-pass",
    name: "Gate Pass",
    blurb: "Visitor and material movement with security check-in and approval trails.",
    category: "People",
    href: "/products/gate-pass",
  },
] as const

export const whyNexSyst = [
  {
    title: "One suite. Zero silos.",
    body: "Plant, sales, procurement, people, and projects share the same identity, permissions, and customer/vendor masters — one operating system for your business, not a pile of disconnected tools.",
  },
  {
    title: "Built for process industries",
    body: "Energy, alarms, audit, QC, and batch reporting sit beside CRM and purchase orders — designed for regulated manufacturing and industrial operations.",
  },
  {
    title: "OT meets IT",
    body: "Bridge PLC/SCADA and edge data into dashboards and enterprise workflows so floor events become actionable business records.",
  },
  {
    title: "Role-ready from day one",
    body: "Operators, QA, sales, stores, HR, and leadership each get focused workspaces with module-level permissions — not one cluttered screen for everyone.",
  },
] as const

export const howItWorks = [
  {
    step: "01",
    title: "Discover",
    body: "Map plant pain, compliance needs, cloud readiness, and AI opportunities — then pick the first modules that prove value.",
  },
  {
    step: "02",
    title: "Design",
    body: "Architecture, UX, integrations, and security model aligned to your OT–IT landscape and enterprise standards.",
  },
  {
    step: "03",
    title: "Develop",
    body: "Build NexSyst apps, cloud services, AI/ML pipelines, and RAG knowledge layers with iterative demos.",
  },
  {
    step: "04",
    title: "Deploy",
    body: "Go live on cloud or on-prem with roles, training, cutover support, and measurable success criteria.",
  },
  {
    step: "05",
    title: "Support",
    body: "AMC and 24×365 coverage — monitoring, enhancements, and continuous improvement as you expand the suite.",
  },
] as const

export const services = [
  {
    title: "Cloud Services",
    body: "Design, migrate, and operate NexSyst and enterprise workloads in the cloud — secure hosting, environments, backups, scaling, and managed delivery for industrial teams.",
  },
  {
    title: "AI & ML for Enterprise",
    body: "Build and integrate enterprise AI/ML into plant and business workflows — predictive insights, anomaly detection, decision support, and model pipelines grounded in your operational data.",
  },
  {
    title: "RAG Solutions",
    body: "Retrieval-augmented generation (RAG) for enterprise knowledge — connect SOPs, manuals, QC records, and policies so teams get accurate, cited answers instead of generic chat.",
  },
  {
    title: "Industrial Software Engineering",
    body: "Custom MES views, plant applications, and extensions designed around your process — not generic templates.",
  },
  {
    title: "OT–IT Integration",
    body: "Bridge PLC/SCADA, edge gateways, and enterprise systems so floor data feeds CRM, inventory, reporting, and AI pipelines.",
  },
  {
    title: "Digital Transformation",
    body: "Roadmaps that replace paper QC, manual batch books, and siloed alarms with connected NexSyst modules and modern cloud delivery.",
  },
  {
    title: "Secure Platform Delivery",
    body: "Hosted or on-prem deployments with role-based access, auditability, and secure collaboration workflows.",
  },
  {
    title: "AMC & 24×365 Support",
    body: "Ongoing support for production software — monitoring, enhancements, and rapid incident response.",
  },
  {
    title: "Turnkey Project Delivery",
    body: "From discovery and UX to commissioning — single-vendor accountability for software, cloud, and AI programs.",
  },
] as const

/** Extra interest options on the demo form (services + suite). */
export const serviceInterestOptions = [
  "Cloud Services",
  "AI & ML for Enterprise",
  "RAG Solutions",
  "Full NexSyst Suite",
] as const

export const industries = [
  {
    name: "Pharmaceuticals & Chemical",
    blurb: "Audit trails, QC log books, and batch reports for regulated batch and continuous processes.",
  },
  {
    name: "Cement & Process",
    blurb: "Energy, alarms, and OEE across kilns, mills, and utilities with harsh-environment reliability.",
  },
  {
    name: "Metals & Mining",
    blurb: "Material handling visibility, asset lifecycle, and downtime tracking for heavy industry.",
  },
  {
    name: "CPG & Packaging",
    blurb: "Line OEE, quality checks, and supply workflows for high-speed packaging plants.",
  },
  {
    name: "Water Treatment",
    blurb: "Alarm discipline, auditability, and operations records for municipal and industrial water.",
  },
  {
    name: "Automotive",
    blurb: "Production KPIs, projects, and workforce tools for plants and Tier suppliers.",
  },
] as const

export const stats = [
  { value: 150, suffix: "+", label: "Satisfied clients" },
  { value: 340, suffix: "+", label: "Projects delivered" },
  { value: 50, suffix: "+", label: "Certified engineers" },
  { value: 24, suffix: "×365", label: "Support coverage" },
] as const

/** Trust chips under hero / sticky bar */
export const trustChips = [
  "Start with 1–2 modules",
  "Scoped quote — no surprise sprawl",
  "AMC & 24×365 support",
  "On-prem or cloud delivery",
] as const

/** Clear buying journey — reduces purchase anxiety for B2B */
export const buyPath = [
  {
    step: "01",
    title: "Book a live demo",
    body: "Walk through the products that match your plant pain — energy, QC, batch, CRM, or the full suite — with your real constraints in mind.",
    cta: "Request a demo",
  },
  {
    step: "02",
    title: "Get a scoped proposal",
    body: "We map modules, users, integrations, and timeline into a clear commercial proposal. You choose pilot scope before a plant-wide rollout.",
    cta: "Talk pricing",
  },
  {
    step: "03",
    title: "Go live with support",
    body: "Configure, train, and cut over with our team beside you — then stay covered with AMC so the system keeps earning its keep.",
    cta: "Plan go-live",
  },
] as const

export const testimonials = [
  {
    quote:
      "We replaced paper QC books and end-of-batch scrambling with one digital trail. Release reviews are calmer — and audit prep is no longer a fire drill.",
    role: "Quality Head",
    context: "Pharmaceutical manufacturing",
  },
  {
    quote:
      "Energy and OEE in the same workspace finally linked cost to downtime. The board sees numbers they trust, and the floor sees boards they can act on.",
    role: "Plant Manager",
    context: "Cement & process",
  },
  {
    quote:
      "CRM to PO to inventory without re-typing. Sales and stores stopped fighting over which spreadsheet was current.",
    role: "Commercial Director",
    context: "Industrial services",
  },
] as const

export const purchaseComfort = [
  {
    title: "Buy only what you need first",
    body: "Pilot Energy + QC, or CRM + purchase orders — then expand. You are not forced into a full-suite license on day one.",
  },
  {
    title: "Human proposal, not a checkout cart",
    body: "Industrial software needs scoping. You get a clear quote, timeline, and success criteria — not a surprise monthly charge.",
  },
  {
    title: "Risk shared through rollout",
    body: "Training, cutover support, and AMC mean you are not left alone after the license is signed.",
  },
] as const

/** Answer-engine friendly FAQs — plain, direct answers. Brand-first for NexSyst search. */
export const faqs = [
  {
    question: "What is NexSyst?",
    answer:
      "NexSyst is an official industrial software brand and integrated suite for process plants and industrial businesses — the operating system for plant and business. NexSyst includes energy management, alarm management, audit trails, QC log books, batch reports, OEE, plus CRM, purchase orders, inventory, assets, HR, payroll, expenses, projects, and gate pass. The official website is https://nexsyst.in.",
  },
  {
    question: "What is the official NexSyst website?",
    answer:
      "The official NexSyst website is https://nexsyst.in. When people search for NexSyst, Nexsyst, Nex Syst, or NEXSYST, nexsyst.in is the authoritative home for NexSyst software, product information, suite overview, industries served, FAQs, and demo requests.",
  },
  {
    question: "Is Nexsyst the same as NexSyst?",
    answer:
      "Yes. Nexsyst, Nex Syst, and NEXSYST are common spellings of the same brand: NexSyst. The official website for all of these searches is https://nexsyst.in.",
  },
  {
    question: "Where can I find NexSyst online?",
    answer:
      "Find NexSyst online at the official website https://nexsyst.in and contact the team at info@nexsyst.in. nexsyst.in is the primary web presence for NexSyst software and services.",
  },
  {
    question: "What does the NexSyst tagline mean?",
    answer:
      "The NexSyst tagline is SMART SYSTEMS. BETTER SOLUTIONS. It reflects NexSyst’s focus on practical industrial software that improves plant visibility, compliance, and business operations.",
  },
  {
    question: "What products does NexSyst offer?",
    answer:
      "NexSyst plant products include Energy Management, Alarm Management, Audit Trail, QC Log Book, Batch Report, and OEE. NexSyst business modules include CRM, Purchase Orders, Inventory & Indents, Asset Management, Projects, HR/Attendance/Payroll, Expense Portal, and Gate Pass.",
  },
  {
    question: "Does NexSyst provide cloud, AI/ML, and RAG services?",
    answer:
      "Yes. NexSyst provides cloud services for secure hosting and managed delivery, enterprise AI and machine learning integration for plant and business workflows, and RAG (retrieval-augmented generation) solutions that answer from your own SOPs, manuals, and operational documents.",
  },
  {
    question: "What is NexSyst RAG?",
    answer:
      "NexSyst RAG is a retrieval-augmented generation service: enterprise documents and plant knowledge are indexed so AI answers stay grounded in your content with relevant context — useful for SOPs, QC guidance, maintenance manuals, and policy Q&A.",
  },
  {
    question: "Who is NexSyst for?",
    answer:
      "NexSyst is built for process industries including pharmaceuticals, chemical, cement, metals and mining, CPG, water treatment, and automotive — from operators and QA to sales, stores, HR, and leadership.",
  },
  {
    question: "How is NexSyst different from generic plant software?",
    answer:
      "NexSyst connects plant intelligence — energy, alarms, audit, QC, and batch reporting — with CRM, purchase orders, assets, and people in one workspace. That OT–IT link is designed for industrial teams, not office-only tools.",
  },
  {
    question: "Can we start with a few NexSyst apps and expand?",
    answer:
      "Yes. Most plants start with NexSyst plant modules (for example Energy + QC + Batch) or business modules (CRM + purchase orders), then add payroll, assets, or OEE as adoption grows — the same NexSyst suite, phased rollout.",
  },
  {
    question: "Does NexSyst support audit and compliance?",
    answer:
      "Yes. NexSyst Audit Trail captures who changed what and when. NexSyst QC Log Book and Batch Report support digital quality records and end-of-batch dossiers suitable for regulated environments.",
  },
  {
    question: "How do I purchase NexSyst software?",
    answer:
      "Request a NexSyst demo on this official website. After a walkthrough, you receive a scoped proposal covering modules, users, hosting, timeline, and AMC. Most plants start with a pilot of one or two NexSyst products, then expand.",
  },
  {
    question: "How do I request a NexSyst demo?",
    answer:
      "Use the Request a demo form on the official NexSyst website. Your details are emailed to the NexSyst team so we can map a rollout to your plant and compliance needs.",
  },
] as const

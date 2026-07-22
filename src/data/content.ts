export const brand = {
  name: "NexSyst",
  tagline: "SMART SYSTEMS. BETTER SOLUTIONS.",
  /** Public marketing URL — update when the site is deployed. */
  url: "https://nexsyst.com",
  email: "info@nexsyst.com",
  description:
    "NexSyst is the operating system for process plants and industrial businesses — energy, alarms, audit, QC, batch reporting, CRM, procurement, assets, HR, and projects in one connected suite.",
  suiteLine: "The operating system for plant & business",
}

/** Zoho-style featured apps strip */
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
    href: "/#platform",
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
    href: "/#platform",
  },
  {
    id: "people",
    name: "People & Payroll",
    tagline: "Muster to payslip.",
    href: "/#platform",
  },
  {
    id: "assets",
    name: "Assets",
    tagline: "Lifecycle control.",
    href: "/#platform",
  },
] as const

export { products } from "./products"
export type { ProductDetail, ProductId } from "./products"
export { getProduct, productPath } from "./products"

/** Suite pillars — like Zoho One department tabs */
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
    name: "CRM & Pipeline",
    blurb: "Customers, opportunities, and activities in one sales workspace — from first contact to close.",
    category: "Sales",
  },
  {
    name: "Purchase Orders",
    blurb: "Vendor-to-PO workflows with approvals and classic branded PDF output for finance.",
    category: "Supply",
  },
  {
    name: "Inventory & Indents",
    blurb: "Stock, GRNs, dispatches, and material request routing with operator-friendly workflows.",
    category: "Supply",
  },
  {
    name: "Asset Management",
    blurb: "Enterprise asset lifecycle — registration, assignment, maintenance, and disposal.",
    category: "Delivery",
  },
  {
    name: "Projects & Timesheets",
    blurb: "Delivery tracking, transfers, effort capture, and project ratings in one place.",
    category: "Delivery",
  },
  {
    name: "HR, Attendance & Payroll",
    blurb: "Muster, leave, compensation, payslips, and statutory runs for industrial workforces.",
    category: "People",
  },
  {
    name: "Expense Portal",
    blurb: "Employee claims, category controls, and multi-level approval chains.",
    category: "People",
  },
  {
    name: "Gate Pass",
    blurb: "Visitor and material movement with security check-in and approval trails.",
    category: "People",
  },
] as const

export const whyNexSyst = [
  {
    title: "One suite. Zero silos.",
    body: "Plant, sales, procurement, people, and projects share the same identity, permissions, and customer/vendor masters — like an operating system for your business, not a pile of point tools.",
  },
  {
    title: "Built for process industries",
    body: "Energy, alarms, audit, QC, and batch reporting sit beside CRM and PO — designed for regulated manufacturing, not generic office SaaS alone.",
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
    title: "Map your plant & teams",
    body: "We scope lines, compliance needs, and which modules you need first — energy and QC, CRM and PO, or the full suite.",
  },
  {
    step: "02",
    title: "Configure & connect",
    body: "Roles, masters, approvals, and OT–IT integrations are set up so data flows from floor to finance without re-entry.",
  },
  {
    step: "03",
    title: "Go live & improve",
    body: "Train users, cut over from paper or legacy tools, then iterate with AMC support, dashboards, and new modules as you grow.",
  },
] as const

export const services = [
  {
    title: "Industrial Software Engineering",
    body: "Custom MES views, plant applications, and extensions designed around your process — not generic templates.",
  },
  {
    title: "OT–IT Integration",
    body: "Bridge PLC/SCADA, edge gateways, and enterprise systems so floor data feeds CRM, inventory, and reporting.",
  },
  {
    title: "Digital Transformation",
    body: "Roadmaps that replace paper QC, manual batch books, and siloed alarms with connected NexSyst modules.",
  },
  {
    title: "Cloud & Secure Delivery",
    body: "Hosted or on-prem deployments with role-based access, auditability, and Microsoft Teams-ready workflows.",
  },
  {
    title: "AMC & 24×365 Support",
    body: "Ongoing support for production software — monitoring, enhancements, and rapid incident response.",
  },
  {
    title: "Turnkey Project Delivery",
    body: "From discovery and UX to commissioning — single-vendor accountability for software and automation programs.",
  },
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
    body: "Pilot Energy + QC, or CRM + PO — then expand. You are not forced into a 40-app license on day one.",
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

/** Answer-engine friendly FAQs — plain, direct answers. */
export const faqs = [
  {
    question: "What is NexSyst?",
    answer:
      "NexSyst is an integrated software suite for process plants and industrial businesses — the operating system for plant and business. It includes energy management, alarm management, audit trails, QC log books, batch reports, OEE, plus CRM, purchase orders, inventory, assets, HR, payroll, expenses, projects, and gate pass.",
  },
  {
    question: "Is NexSyst like Zoho One for manufacturing?",
    answer:
      "NexSyst follows a similar suite idea — one platform for many teams — but is purpose-built for industrial and process plants. It combines shop-floor products (energy, alarms, audit, QC, batch) with business apps (CRM, PO, inventory, HR) instead of only office SaaS tools.",
  },
  {
    question: "What products does NexSyst offer?",
    answer:
      "Plant products: Energy Management, Alarm Management, Audit Trail, QC Log Book, Batch Report, and OEE. Business modules: CRM, Purchase Orders, Inventory & Indents, Asset Management, Projects, HR/Attendance/Payroll, Expense Portal, and Gate Pass.",
  },
  {
    question: "Who is NexSyst for?",
    answer:
      "NexSyst is built for process industries including pharmaceuticals, chemical, cement, metals and mining, CPG, water treatment, and automotive — from operators and QA to sales, stores, HR, and leadership.",
  },
  {
    question: "How is NexSyst different from a generic ERP?",
    answer:
      "Generic ERP focuses on back-office finance and inventory. NexSyst adds plant intelligence — energy, alarms, audit, QC, and batch reporting — and connects them to CRM, PO, assets, and people in one workspace designed for OT–IT integration.",
  },
  {
    question: "Can we start with a few apps and expand?",
    answer:
      "Yes. Most plants start with plant modules (for example Energy + QC + Batch) or business modules (CRM + PO), then add payroll, assets, or OEE as adoption grows — the same suite, phased rollout.",
  },
  {
    question: "Does NexSyst support audit and compliance?",
    answer:
      "Yes. Audit Trail captures who changed what and when. QC Log Book and Batch Report support digital quality records and end-of-batch dossiers suitable for regulated environments.",
  },
  {
    question: "How do I purchase NexSyst?",
    answer:
      "Request a demo on this website. After a walkthrough, we send a scoped proposal covering modules, users, hosting, timeline, and AMC. Most plants start with a pilot of one or two products, then expand.",
  },
  {
    question: "How do I request a NexSyst demo?",
    answer:
      "Use the Request a demo form on this website. Your details are emailed to our team so we can map a rollout to your plant and compliance needs.",
  },
] as const

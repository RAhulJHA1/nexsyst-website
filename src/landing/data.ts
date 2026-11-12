export const brand = {
  name: "Nexsyst",
  tagline: "Smart Systems. Better Solutions.",
  email: "info@nexsyst.in",
  url: "https://nexsyst.in",
}

export const navLinks = [
  { href: "#modules", label: "Modules" },
  { href: "#features", label: "Features" },
  { href: "#solutions", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export const stats = [
  { value: 150, suffix: "+", label: "Companies onboarded" },
  { value: 12, suffix: "+", label: "Live product modules" },
  { value: 98, suffix: "%", label: "Month-end on-time runs" },
  { value: 24, suffix: "/7", label: "Support coverage" },
]

export const featureBlocks = [
  {
    id: "crm",
    eyebrow: "CRM & sales",
    title: "Pipeline clarity without the spreadsheet chase",
    body: "Track leads, opportunities, and follow-ups in one board. When a deal advances, purchase and finance see demand without waiting for a WhatsApp forward.",
    points: ["Kanban & list views", "Activity timelines", "Rupee-ready deal values"],
    image: "https://picsum.photos/seed/nexsyst-crm/960/640",
    imageAlt: "CRM pipeline workspace preview",
  },
  {
    id: "purchase",
    eyebrow: "Purchase & vendors",
    title: "Approvals that move as fast as your floor",
    body: "Raise POs, route approvals, and track receiving in a single register. Vendors, amounts, and statuses stay aligned with the teams that need them.",
    points: ["Approval workflows", "Vendor history", "Receiving status"],
    image: "https://picsum.photos/seed/nexsyst-po/960/640",
    imageAlt: "Purchase order dashboard preview",
  },
  {
    id: "people",
    eyebrow: "HR & payroll",
    title: "Attendance to payslip — without rebuilding the month",
    body: "Import muster data, edit payable days, and run salary with Indian statutory deductions. Month-end becomes a review, not a rebuild in Excel.",
    points: ["Payable days & LOP", "PF / ESI / TDS ready", "Salary register export"],
    image: "https://picsum.photos/seed/nexsyst-payroll/960/640",
    imageAlt: "Payroll run and salary register preview",
  },
  {
    id: "ops",
    eyebrow: "Operations shell",
    title: "One workspace for the whole Tuesday",
    body: "Apps home gives every department the same shell — CRM, purchase, Tally sync, inventory, expense, and manufacturing — without hopping between tools.",
    points: ["Shared employee directory", "Role-based access", "Tally bridge options"],
    image: "https://picsum.photos/seed/nexsyst-apps/960/640",
    imageAlt: "Nexsyst apps home module grid",
  },
]

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    price: "₹18,000",
    period: "/ month",
    blurb: "For focused teams piloting CRM + purchase.",
    features: ["Up to 25 users", "CRM & Purchase modules", "Email support", "Standard onboarding"],
    highlighted: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹42,000",
    period: "/ month",
    blurb: "Most mid-market buyers start here.",
    features: [
      "Up to 100 users",
      "CRM, PO, HR & Payroll",
      "Tally sync add-on ready",
      "Priority support & AMC options",
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    blurb: "Plant-wide suites, SSO, and scoped SLAs.",
    features: [
      "Unlimited modules mix",
      "Dedicated success manager",
      "On-prem or private cloud",
      "Custom integrations",
    ],
    highlighted: false,
  },
]

export const faqs = [
  {
    q: "How do we get a Nexsyst quotation?",
    a: "Share module mix, approximate users, and timeline via the quote form. We aim to reply within one business day with a scoped commercial outline.",
  },
  {
    q: "Can we start with only two modules?",
    a: "Yes. Most buyers pilot CRM + Purchase or HR + Payroll first, then expand once the handoff is proven.",
  },
  {
    q: "Does payroll support Indian statutory needs?",
    a: "Payroll is built for India-based processing including structures, attendance-linked pay, and statutory deductions such as PF, ESI, PT, and TDS — configured during implementation.",
  },
  {
    q: "Do you integrate with Tally?",
    a: "Yes. Tally sync can bridge invoices, stock masters, and finance views so ops and accounts stop maintaining parallel books.",
  },
  {
    q: "Is pricing fixed on the website?",
    a: "Commercials depend on module mix and user counts. Growth plan figures are indicative starting bands — your quotation is line-itemed after a short discovery.",
  },
]

export type ProductShot = {
  id: string
  title: string
  line: string
  src: string
  alt: string
}

/** Flat 1280×720 product frames — keep aspect-video in UI so nothing crops crooked. */
export const productShots: ProductShot[] = [
  {
    id: "apps",
    title: "Apps home",
    line: "Every module your teams ask for — in one shell.",
    src: "/product/apps-home.jpg",
    alt: "Nexsyst apps home with CRM, Purchase, Payroll and other module tiles",
  },
  {
    id: "crm",
    title: "CRM pipeline",
    line: "When a deal moves, purchase can already see demand.",
    src: "/product/crm-pipeline.jpg",
    alt: "Nexsyst CRM pipeline board with opportunity stages and rupee values",
  },
  {
    id: "po",
    title: "Purchase orders",
    line: "Approvals, vendors, and receiving — without a parallel Excel.",
    src: "/product/purchase-orders.jpg",
    alt: "Nexsyst purchase order list with open POs and approval statuses",
  },
  {
    id: "payroll",
    title: "Payroll run",
    line: "Month-end becomes a review — not a rebuild.",
    src: "/product/payroll-run.jpg",
    alt: "Nexsyst payroll run with gross, deductions, and net pay",
  },
]

import type { LucideIcon } from "lucide-react"
import {
  Building2,
  Calculator,
  ClipboardList,
  Factory,
  FolderKanban,
  HardDrive,
  IndianRupee,
  Package,
  Receipt,
  ShieldCheck,
  ShoppingCart,
  UserCog,
  Users,
  Wallet,
  Workflow,
  Layers,
  Zap,
  Timer,
  BarChart3,
  GraduationCap,
  Handshake,
} from "lucide-react"

export const APP_LOGIN_URL =
  (import.meta.env.VITE_APP_LOGIN_URL as string | undefined) ??
  "https://nexion-crm.vercel.app/login"

export const APP_TRIAL_URL =
  (import.meta.env.VITE_APP_TRIAL_URL as string | undefined) ?? "/contact"

/** Product chrome — midnight shell + signal blue accent */
export const PRODUCT_TEAL = "#3d7eff"
export const BRAND_NAVY = "#050a14"
export const SIGNAL_BLUE = "#3d7eff"

/**
 * Real Nexsyst app modules (from src/lib/modules.ts + ModuleTiles colors).
 * Marketing copy stays faithful to product names and Zoho-style tile colors.
 */
export type ErpModule = {
  id: string
  name: string
  short: string
  description: string
  icon: LucideIcon
  /** Hex from MODULE_TILE_COLORS in the app */
  accent: string
  features: string[]
}

export const erpModules: ErpModule[] = [
  {
    id: "crm",
    name: "CRM",
    short: "Pipeline & customers",
    description: "Customer Relationship Management — leads, pipeline, activities, and analytics.",
    icon: Building2,
    accent: "#e42527",
    features: [
      "Lead & opportunity pipeline",
      "Customer database",
      "Activities & follow-ups",
      "Sales order reports",
      "CRM analytics dashboard",
    ],
  },
  {
    id: "po",
    name: "Purchase Orders",
    short: "Procurement",
    description: "Purchase order dashboard — create, approve, receive, and match with Tally.",
    icon: ShoppingCart,
    accent: "#f57c00",
    features: [
      "PO create & approve",
      "Vendor management",
      "Receiving & returns",
      "Rockwell booking reports",
      "PO–Tally match",
    ],
  },
  {
    id: "tally",
    name: "Tally Sync",
    short: "Accounting bridge",
    description: "Copy invoices, stock masters, and finance views from Tally ERP into Nexsyst.",
    icon: IndianRupee,
    accent: "#c62828",
    features: [
      "Invoice sync",
      "Stock item master",
      "Business dashboard",
      "Receipts & payments",
      "Expense reports",
    ],
  },
  {
    id: "hr",
    name: "HR",
    short: "Employee master",
    description: "Employee master, reporting managers, Outlook password, muster roll, and leave admin.",
    icon: UserCog,
    accent: "#3949ab",
    features: [
      "Employee records",
      "Reporting manager",
      "Muster roll",
      "Leave sources & admin",
      "Offer letters",
    ],
  },
  {
    id: "employee",
    name: "People",
    short: "Self-service",
    description: "Employee self-service — attendance, leave, compensation, and workplace requests.",
    icon: Users,
    accent: "#1e88e5",
    features: [
      "Attendance summary",
      "Leave applications",
      "Compensation view",
      "Advance requests",
      "Gate pass requests",
    ],
  },
  {
    id: "payroll",
    name: "Payroll",
    short: "Salary & statutory",
    description: "CTC structures, monthly runs, PF/ESI/TDS, payslips, and salary register.",
    icon: Wallet,
    accent: "#43a047",
    features: [
      "Salary structures",
      "Monthly payroll runs",
      "PF, ESI, PT, TDS",
      "Payslip generation",
      "Salary register reports",
    ],
  },
  {
    id: "expense",
    name: "Expense",
    short: "Claims & approvals",
    description: "Expense reports, approvals, categories, and branded voucher exports.",
    icon: Receipt,
    accent: "#00897b",
    features: [
      "Expense reports",
      "Approval workflow",
      "Categories",
      "Dashboard",
      "PDF vouchers",
    ],
  },
  {
    id: "inventory",
    name: "Inventory",
    short: "Stock & GRN",
    description: "Stock items, goods receipts, and dispatch visibility for operations teams.",
    icon: Package,
    accent: "#ef6c00",
    features: ["Item master", "GRNs", "Dispatches", "Stock visibility", "PO linkage"],
  },
  {
    id: "eam",
    name: "Asset Management",
    short: "Lifecycle",
    description: "Enterprise asset registration, assignment, maintenance, and disposal.",
    icon: HardDrive,
    accent: "#00838f",
    features: [
      "Asset register",
      "Assignment",
      "Maintenance",
      "Disposal",
      "Lifecycle history",
    ],
  },
  {
    id: "gatepass",
    name: "Gate Pass",
    short: "Visitor & security",
    description: "Visitor gate pass requests, approvals, and security check-in/out.",
    icon: ShieldCheck,
    accent: "#5e35b1",
    features: [
      "Gate pass requests",
      "Approvals",
      "Security check-in",
      "Dashboard",
      "Audit trail",
    ],
  },
  {
    id: "mfg",
    name: "Manufacturing",
    short: "Panel workflow",
    description: "Panel manufacturing workflow — design through dispatch and production status.",
    icon: Factory,
    accent: "#6d4c41",
    features: [
      "Work orders",
      "Production board",
      "Stock & PR cards",
      "Dispatch",
      "Status tracking",
    ],
  },
  {
    id: "aicosting",
    name: "AI Costing",
    short: "Quotations",
    description: "BOM templates, catalog prices, and guided DOL quotations with AI assist.",
    icon: Calculator,
    accent: "#1565c0",
    features: [
      "BOM templates",
      "Catalog prices",
      "Guided quotations",
      "Chat assist",
      "Quotation history",
    ],
  },
]

/** Secondary modules referenced in ecosystem / footer */
export const moreModules = [
  { id: "project", name: "Projects", icon: FolderKanban, accent: "#2e7d32" },
  { id: "indent", name: "Indents", icon: ClipboardList, accent: "#546e7a" },
  { id: "flowise", name: "AI Flow Studio", icon: Workflow, accent: "#050a14" },
]

export const benefits = [
  {
    title: "One workspace for every team",
    body: "CRM, PO, Tally, HR, payroll, expense, and manufacturing in the same Nexsyst shell your teams already use.",
    icon: Layers,
  },
  {
    title: "Role-based module access",
    body: "Module switcher and permissions mirror the live product — people only see what they can run.",
    icon: ShieldCheck,
  },
  {
    title: "Approval-ready workflows",
    body: "PO, expense, leave, CTC, and gate pass approvals move work forward without spreadsheet chasing.",
    icon: Workflow,
  },
  {
    title: "Attendance-linked payroll",
    body: "Muster and overrides feed payable days so monthly runs stay tied to real presence data.",
    icon: Timer,
  },
  {
    title: "Tally-connected finance",
    body: "Sync invoices and stock masters so operations and accounting stay reconciled.",
    icon: IndianRupee,
  },
  {
    title: "Live operational dashboards",
    body: "CRM analytics, PO dashboards, payroll status, and Tally business views in one product.",
    icon: BarChart3,
  },
  {
    title: "Reduced duplicate entry",
    body: "Customers, vendors, employees, and stock flow across modules from a shared database.",
    icon: Zap,
  },
  {
    title: "Scalable architecture",
    body: "Same .NET + React stack that powers production — grow modules without changing platforms.",
    icon: Building2,
  },
  {
    title: "Secure business operations",
    body: "JWT auth, Microsoft MFA options, audit trails, and enterprise chrome controls.",
    icon: ShieldCheck,
  },
]

export const industries = [
  {
    name: "Manufacturing",
    body: "Panel manufacturing, inventory, PO, and payroll on one shop-floor-to-finance thread.",
    icon: Factory,
  },
  {
    name: "Engineering & projects",
    body: "CRM opportunities, projects, timesheets, and purchase control for delivery teams.",
    icon: FolderKanban,
  },
  {
    name: "Trading & distribution",
    body: "Sales pipeline, purchase orders, inventory, and Tally sync for commercial ops.",
    icon: Package,
  },
  {
    name: "Service companies",
    body: "CRM, people, expense, and payroll for teams that sell and deliver services.",
    icon: Handshake,
  },
  {
    name: "Industrial enterprises",
    body: "Assets, gate pass, manufacturing, and compliance-oriented HR in one suite.",
    icon: HardDrive,
  },
  {
    name: "Corporate organizations",
    body: "Central HR, payroll, expense, and executive reporting across departments.",
    icon: GraduationCap,
  },
]

export const pricingTiers = [
  {
    name: "Starter",
    price: "Custom",
    blurb: "Core CRM + PO for growing commercial teams.",
    points: ["CRM & Purchase Orders", "Role-based access", "Email support", "Standard workflows"],
    cta: "Talk to Sales",
    featured: false,
  },
  {
    name: "Business",
    price: "Custom",
    blurb: "Full people + finance stack for mid-market operations.",
    points: [
      "HR, People & Payroll",
      "Tally Sync",
      "Expense & approvals",
      "Attendance-linked runs",
      "Priority onboarding",
    ],
    cta: "Request a Demo",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "Manufacturing, assets, AI costing, and dedicated success.",
    points: [
      "All product modules",
      "Manufacturing & Assets",
      "AI Costing / Flow Studio",
      "SSO & MFA options",
      "Dedicated CSM",
    ],
    cta: "Contact Sales",
    featured: false,
  },
]

export const ecosystemFlows = [
  {
    id: "commercial",
    label: "Commercial flow",
    nodes: ["CRM", "Sales Order", "Purchase Order", "Inventory", "Tally Sync", "Payment"],
  },
  {
    id: "people",
    label: "People flow",
    nodes: ["HR", "People", "Attendance", "Leave", "Payroll", "Tally / Finance"],
  },
]

export const heroKpis = [
  { label: "Pipeline value", value: "₹48.2L", delta: "+12.4%", color: "#e42527" },
  { label: "Open POs", value: "18", delta: "3 awaiting", color: "#f57c00" },
  { label: "Attendance", value: "94.2%", delta: "142 present", color: "#1e88e5" },
  { label: "Payroll MTD", value: "₹18.2L", delta: "Ready", color: "#43a047" },
]

export const revenueSeries = [
  { month: "Apr", revenue: 32, expense: 21 },
  { month: "May", revenue: 38, expense: 24 },
  { month: "Jun", revenue: 35, expense: 26 },
  { month: "Jul", revenue: 44, expense: 28 },
  { month: "Aug", revenue: 41, expense: 27 },
  { month: "Sep", revenue: 49, expense: 31 },
  { month: "Oct", revenue: 52, expense: 33 },
]

export const attendanceSeries = [
  { day: "Mon", present: 92, late: 5 },
  { day: "Tue", present: 95, late: 3 },
  { day: "Wed", present: 90, late: 6 },
  { day: "Thu", present: 94, late: 4 },
  { day: "Fri", present: 88, late: 7 },
]

export const cashFlowSeries = [
  { month: "May", inflow: 42, outflow: 31 },
  { month: "Jun", inflow: 38, outflow: 34 },
  { month: "Jul", inflow: 46, outflow: 33 },
  { month: "Aug", inflow: 51, outflow: 36 },
  { month: "Sep", inflow: 48, outflow: 35 },
  { month: "Oct", inflow: 55, outflow: 38 },
]

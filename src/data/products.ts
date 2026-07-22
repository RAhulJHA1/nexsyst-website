export type ProductId = "energy" | "alarm" | "audit" | "qc" | "batch" | "oee"

export type ProductDetail = {
  id: ProductId
  name: string
  category: string
  summary: string
  whoFor: string
  heroLine: string
  points: string[]
  answer: string
  whyHelps: { title: string; body: string }[]
  useCases: { title: string; body: string; industry?: string }[]
  features: { title: string; body: string }[]
}

export const products: ProductDetail[] = [
  {
    id: "energy",
    name: "Energy Management",
    category: "Plant",
    summary:
      "Real-time load monitoring, KPI dashboards, and consumption analytics that turn plant power data into actionable savings.",
    whoFor: "Utilities, plant engineering, and sustainability teams who need line- and shift-level visibility.",
    heroLine: "See every kilowatt — then cut the waste you can finally measure.",
    points: [
      "Live kWh & demand tracking",
      "Shift and line-level insights",
      "Exception alerts on overruns",
      "Target vs actual dashboards",
    ],
    answer:
      "NexSyst Energy Management software monitors plant power in real time, tracks demand and kWh by line or shift, and alerts teams when consumption exceeds targets.",
    whyHelps: [
      {
        title: "Turn invoices into action",
        body: "Monthly utility bills arrive too late to change behavior. Live load and demand views let engineers act in the shift — not after the close.",
      },
      {
        title: "Find the real consumers",
        body: "Plant-level totals hide which line, compressor, or mill drives cost. Line- and area-level KPIs show where savings actually live.",
      },
      {
        title: "Prove sustainability results",
        body: "Targets vs actuals and trend history give leadership auditable evidence for energy reduction programs and ESG reporting.",
      },
      {
        title: "Connect energy to production",
        body: "When energy sits in the same suite as OEE and batch data, you can correlate high consumption with downtime, changeovers, or idle loads.",
      },
    ],
    useCases: [
      {
        title: "Peak demand control",
        industry: "Cement & process",
        body: "Supervisors watch demand approaching contracted limits and shed non-critical loads before penalties hit.",
      },
      {
        title: "Shift energy scorecards",
        industry: "CPG & packaging",
        body: "Each shift sees kWh per unit produced, so teams compete on efficiency without waiting for month-end reports.",
      },
      {
        title: "Utilities baseline & ROI",
        industry: "Pharma & chemical",
        body: "Engineering baselines chiller and boiler performance before a retrofit, then proves savings after commissioning.",
      },
      {
        title: "Idle-load detection",
        industry: "Metals & mining",
        body: "Alerts flag motors and conveyors drawing power with zero throughput — targeting easy wins for maintenance.",
      },
    ],
    features: [
      {
        title: "Live consumption dashboards",
        body: "kWh, demand, and power-factor style KPIs with refresh suited to operations — not overnight batch only.",
      },
      {
        title: "Line, area & shift breakdowns",
        body: "Slice consumption by production line, utility area, or shift so accountability is clear.",
      },
      {
        title: "Target vs actual",
        body: "Set budgets or specific energy targets and highlight overruns with exception alerts.",
      },
      {
        title: "Trend & compare",
        body: "Compare days, shifts, or lines to spot drift, seasonality, and improvement after interventions.",
      },
      {
        title: "Exception notifications",
        body: "Notify the right owners when consumption or demand crosses thresholds you define.",
      },
      {
        title: "Suite-ready data",
        body: "Works alongside OEE, alarms, and batch modules so energy is part of plant intelligence — not a separate silo.",
      },
    ],
  },
  {
    id: "alarm",
    name: "Alarm Management",
    category: "Plant",
    summary:
      "Prioritized alarm streams with acknowledgement workflows so operators focus on what matters — not noise.",
    whoFor: "Control room and shift supervisors managing high-volume plant alarms.",
    heroLine: "Cut alarm noise. Keep critical events impossible to miss.",
    points: [
      "Severity-based routing",
      "Ack / escalate trails",
      "Shift handover snapshots",
      "Noise reduction workflows",
    ],
    answer:
      "NexSyst Alarm Management prioritizes plant alarms by severity, supports acknowledge and escalate workflows, and keeps a clear trail for operators and supervisors.",
    whyHelps: [
      {
        title: "Reduce alarm flood",
        body: "When everything flashes red, nothing is urgent. Severity routing and filtering help operators focus on critical and high-priority events first.",
      },
      {
        title: "Create accountability",
        body: "Acknowledge and escalate trails show who owned an alarm, when it was handled, and whether it was passed to the next shift.",
      },
      {
        title: "Safer handovers",
        body: "Shift snapshots summarize open and critical alarms so the incoming team starts with context — not a blank screen.",
      },
      {
        title: "Support continuous improvement",
        body: "Patterns of nuisance alarms become visible, giving automation and process teams a backlog to rationalize.",
      },
    ],
    useCases: [
      {
        title: "Control-room prioritization",
        industry: "Water treatment",
        body: "Operators triage critical process alarms while advisory noise is deferred to engineering review.",
      },
      {
        title: "Shift handover pack",
        industry: "Pharma",
        body: "Outgoing supervisors hand over open critical alarms with ack status before leaving the desk.",
      },
      {
        title: "Escalation on no-ack",
        industry: "Chemical",
        body: "Unacknowledged high-severity alarms escalate to the on-call engineer after a defined window.",
      },
      {
        title: "Nuisance alarm reviews",
        industry: "Cement",
        body: "Weekly reviews use alarm history to identify chatter tags for deadband and logic fixes.",
      },
    ],
    features: [
      {
        title: "Severity-based streams",
        body: "Separate critical, high, and advisory alarms so attention matches risk.",
      },
      {
        title: "Acknowledge & escalate",
        body: "Operators ack events; unhandled items escalate with a clear ownership trail.",
      },
      {
        title: "Shift handover snapshots",
        body: "Capture open alarm state at shift change for continuity and auditability.",
      },
      {
        title: "History & filters",
        body: "Search and filter by area, severity, and time to support RCA and rationalization.",
      },
      {
        title: "Role-aware views",
        body: "Operators, supervisors, and engineers see the depth they need without drowning in noise.",
      },
      {
        title: "Links to plant context",
        body: "Fits with Audit Trail and Batch Report so alarm history can feed compliance and batch reviews.",
      },
    ],
  },
  {
    id: "audit",
    name: "Audit Trail",
    category: "Compliance",
    summary:
      "Immutable activity history across users, recipes, and setpoints — built for regulated environments.",
    whoFor: "QA, compliance, and IT teams preparing for audits and change control.",
    heroLine: "Know who changed what, when — before the auditor asks.",
    points: [
      "Who / what / when capture",
      "Exportable compliance packs",
      "Role-aware visibility",
      "Recipe & setpoint history",
    ],
    answer:
      "NexSyst Audit Trail records who changed what and when across users, recipes, and setpoints, with exportable packs for regulated plant environments.",
    whyHelps: [
      {
        title: "Replace spreadsheet forensics",
        body: "Investigating setpoint or recipe changes from email and paper wastes days. A structured trail answers change-control questions in minutes.",
      },
      {
        title: "Strengthen GxP / ISO readiness",
        body: "Regulated plants need traceable user actions. Audit Trail makes who/what/when a product capability — not a manual ritual.",
      },
      {
        title: "Protect against silent edits",
        body: "Role-aware visibility and immutable history discourage untracked tweaks and support fair investigations.",
      },
      {
        title: "Export what auditors need",
        body: "Compliance packs package relevant history for a period, product, or change — ready for review without custom SQL.",
      },
    ],
    useCases: [
      {
        title: "Recipe change investigation",
        industry: "Pharma & chemical",
        body: "QA traces which user updated a critical parameter and whether the change was authorized.",
      },
      {
        title: "Setpoint drift review",
        industry: "Process plants",
        body: "Engineering reviews who adjusted control limits overnight after an unexpected quality excursion.",
      },
      {
        title: "Access & privilege audits",
        industry: "All regulated sites",
        body: "IT and compliance export user activity around a sensitive system change window.",
      },
      {
        title: "CAPA evidence pack",
        industry: "Quality teams",
        body: "Attach audit extracts to CAPA records to show corrective actions and prior state.",
      },
    ],
    features: [
      {
        title: "Who / what / when capture",
        body: "Log user, action, object, and timestamp for critical plant and configuration events.",
      },
      {
        title: "Recipe & setpoint history",
        body: "Track changes that affect product quality and process stability.",
      },
      {
        title: "Exportable compliance packs",
        body: "Generate reviewable extracts for audits, investigations, and management reviews.",
      },
      {
        title: "Role-aware visibility",
        body: "Limit sensitive history to roles that need it while keeping operations productive.",
      },
      {
        title: "Search & period filters",
        body: "Narrow trails by user, asset, recipe, or date range for fast RCA.",
      },
      {
        title: "Suite integration",
        body: "Complements QC Log Book and Batch Report so quality and process history tell one story.",
      },
    ],
  },
  {
    id: "qc",
    name: "QC Log Book",
    category: "Quality",
    summary:
      "Digital quality logs that replace paper binders with structured checks, signatures, and deviation notes.",
    whoFor: "Quality and lab teams replacing paper QC books on the shop floor.",
    heroLine: "Retire the binder. Keep the checks, signatures, and deviations.",
    points: [
      "Batch-linked entries",
      "e-signature ready",
      "Deviation & CAPA hooks",
      "Structured check templates",
    ],
    answer:
      "NexSyst QC Log Book replaces paper quality binders with digital, batch-linked checks, signatures, and deviation notes for shop-floor and lab teams.",
    whyHelps: [
      {
        title: "Eliminate paper lag",
        body: "Paper QC books get lost, smudged, or filled after the fact. Digital entries are structured, searchable, and available to reviewers immediately.",
      },
      {
        title: "Standardize checks",
        body: "Templates enforce the right fields for in-process and lab checks so quality does not depend on who holds the pen.",
      },
      {
        title: "Link quality to the batch",
        body: "Batch-linked entries make release review faster — every check sits with the right lot or batch context.",
      },
      {
        title: "Start deviations where they happen",
        body: "When a check fails, capture deviation notes in context and hand off toward CAPA instead of starting from a blank form.",
      },
    ],
    useCases: [
      {
        title: "In-process quality rounds",
        industry: "CPG",
        body: "Operators complete structured checks on tablets at the line; QA reviews the same day without collecting binders.",
      },
      {
        title: "Lab result logging",
        industry: "Pharma",
        body: "Analysts record results against batch IDs with signature-ready confirmation for release.",
      },
      {
        title: "Deviation on failed check",
        industry: "Chemical",
        body: "A failed IPC opens a deviation note with product, time, and measured value already attached.",
      },
      {
        title: "Multi-plant consistency",
        industry: "Multi-site groups",
        body: "Shared templates keep the same QC discipline across sites while still allowing local parameters.",
      },
    ],
    features: [
      {
        title: "Structured check templates",
        body: "Define fields, limits, and required notes for each QC activity.",
      },
      {
        title: "Batch-linked entries",
        body: "Tie every log to the correct batch or lot for faster release review.",
      },
      {
        title: "e-signature ready",
        body: "Support sign-off workflows suited to regulated quality processes.",
      },
      {
        title: "Deviation & CAPA hooks",
        body: "Capture failures in context and route toward corrective action.",
      },
      {
        title: "Searchable history",
        body: "Find checks by product, batch, date, or result — no binder archaeology.",
      },
      {
        title: "Works with Batch Report",
        body: "QC entries flow into end-of-batch dossiers so release packs stay complete.",
      },
    ],
  },
  {
    id: "batch",
    name: "Batch Report",
    category: "Quality",
    summary:
      "Automated end-of-batch dossiers that pull process, alarm, and QC data into a single reviewable report.",
    whoFor: "Production and QA reviewers who assemble batch release documentation.",
    heroLine: "One click from process + QC + alarms to a review-ready batch dossier.",
    points: [
      "One-click generation",
      "Plant-floor + lab fusion",
      "PDF / archive ready",
      "Review-friendly layout",
    ],
    answer:
      "NexSyst Batch Report automatically builds end-of-batch dossiers from process, alarm, and QC data into one reviewable PDF-ready report.",
    whyHelps: [
      {
        title: "Kill manual dossier assembly",
        body: "Teams waste hours copying screenshots, alarm lists, and QC sheets into Word. Automation builds the pack from live sources.",
      },
      {
        title: "Reduce release delays",
        body: "Incomplete packs stall batch release. A fused report from floor and lab shortens review cycles.",
      },
      {
        title: "Improve review quality",
        body: "Consistent layout means reviewers spend time on exceptions — not hunting missing pages.",
      },
      {
        title: "Archive with confidence",
        body: "PDF-ready output supports long-term retention and retrieval for inspections and customer audits.",
      },
    ],
    useCases: [
      {
        title: "Batch release review",
        industry: "Pharma",
        body: "QA opens a generated dossier with process summary, alarms, and QC checks before releasing the lot.",
      },
      {
        title: "Customer quality pack",
        industry: "Specialty chemical",
        body: "Commercial teams attach a clean batch report to shipment documentation for key accounts.",
      },
      {
        title: "Investigation after complaint",
        industry: "CPG",
        body: "Quality regenerates the batch pack for a complained lot without rebuilding from scratch.",
      },
      {
        title: "Campaign / campaign-end archive",
        industry: "Process plants",
        body: "At campaign close, production archives a standardized report set for every batch run.",
      },
    ],
    features: [
      {
        title: "One-click generation",
        body: "Build the end-of-batch dossier from configured data sources without manual copy-paste.",
      },
      {
        title: "Plant-floor + lab fusion",
        body: "Combine process context, alarm history, and QC log entries in one narrative.",
      },
      {
        title: "PDF / archive ready",
        body: "Export a stable document for review, retention, and inspection readiness.",
      },
      {
        title: "Review-friendly layout",
        body: "Consistent sections help reviewers find exceptions and sign-off points quickly.",
      },
      {
        title: "Batch identity & metadata",
        body: "Keep product, lot, dates, and ownership clear on every page of the pack.",
      },
      {
        title: "Tied to QC & alarms",
        body: "Designed to consume QC Log Book and Alarm Management context inside the NexSyst suite.",
      },
    ],
  },
  {
    id: "oee",
    name: "OEE & Production KPIs",
    category: "Plant",
    summary:
      "Availability, performance, and quality scored against targets — visible to shop floor and leadership alike.",
    whoFor: "Production managers tracking downtime, speed, and quality losses.",
    heroLine: "Make losses visible — availability, speed, and quality on one scorecard.",
    points: [
      "Line OEE scorecards",
      "Downtime reason codes",
      "Trend & compare views",
      "Shift performance boards",
    ],
    answer:
      "NexSyst OEE modules score availability, performance, and quality against targets with downtime reason codes and trend views for production leadership.",
    whyHelps: [
      {
        title: "Stop arguing about the number",
        body: "Shared OEE definitions and scorecards align floor and management on the same availability, performance, and quality math.",
      },
      {
        title: "Attack the right loss",
        body: "Downtime reason codes and trends show whether the problem is breakdowns, changeovers, slow cycles, or scrap — not a vague “efficiency” complaint.",
      },
      {
        title: "Engage the shift",
        body: "Shift boards make performance visible during the run, when teams can still recover the day.",
      },
      {
        title: "Link to energy and quality",
        body: "In the NexSyst suite, OEE sits next to energy and QC — so improvement projects consider cost and quality together.",
      },
    ],
    useCases: [
      {
        title: "Daily production meeting",
        industry: "Automotive & CPG",
        body: "Leaders review line OEE, top downtime reasons, and quality losses from the previous shifts.",
      },
      {
        title: "Changeover reduction",
        industry: "Packaging",
        body: "Teams track changeover time as a downtime category and measure improvement week over week.",
      },
      {
        title: "Bottleneck line focus",
        industry: "Process plants",
        body: "Compare lines to prioritize capital and maintenance on the true constraint.",
      },
      {
        title: "Shift ownership",
        industry: "Multi-shift plants",
        body: "Each shift sees its OEE board and owns recovery actions before handover.",
      },
    ],
    features: [
      {
        title: "Line OEE scorecards",
        body: "Availability × performance × quality views for each production line.",
      },
      {
        title: "Downtime reason codes",
        body: "Capture why the line stopped so Pareto analysis drives real fixes.",
      },
      {
        title: "Trend & compare",
        body: "Compare shifts, days, and lines to spot regressions and wins.",
      },
      {
        title: "Shift performance boards",
        body: "Floor-visible KPIs that keep teams focused during the run.",
      },
      {
        title: "Target tracking",
        body: "Show progress against OEE or throughput targets leadership sets.",
      },
      {
        title: "Suite context",
        body: "Correlate with Energy Management and quality modules for fuller improvement stories.",
      },
    ],
  },
]

export function getProduct(id: string | undefined): ProductDetail | undefined {
  if (!id) return undefined
  return products.find((p) => p.id === id)
}

export function productPath(id: ProductId): string {
  return `/products/${id}`
}

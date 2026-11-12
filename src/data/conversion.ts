/** Conversion-focused copy — buyer objections, quote drivers, trust, policies. */

export const proofStats = [
  { value: "12+", label: "Live product modules", hint: "CRM to manufacturing in one shell" },
  { value: "2–4 wks", label: "Typical first go-live", hint: "Scoped pilot, not endless discovery" },
  { value: "1", label: "Shared database", hint: "No more “final_v7.xlsx”" },
  { value: "1 day", label: "Quote turnaround aim", hint: "After a short discovery call" },
]

export const quoteDrivers = [
  {
    title: "Modules you enable",
    body: "CRM + PO alone is a different scope than full HR, payroll, Tally sync, and manufacturing.",
  },
  {
    title: "Named users & roles",
    body: "Quotes reflect who needs access — sales, purchase, HR, finance, shop floor — not a vague “enterprise seat.”",
  },
  {
    title: "Hosting & environments",
    body: "Cloud or customer-hosted, staging vs production, and SSO/MFA requirements change implementation effort.",
  },
  {
    title: "Integrations",
    body: "Tally sync depth, biometric attendance, and email/SSO add clear line items — we don’t hide them.",
  },
  {
    title: "Data migration",
    body: "Clean customer/vendor/employee masters migrate fast. Messy multi-year Excel histories need a defined package.",
  },
  {
    title: "Training & AMC",
    body: "Onboarding workshops, admin training, and annual maintenance are itemized so finance can approve cleanly.",
  },
]

export const roiOutcomes = [
  {
    title: "Fewer “where is the PO?” calls",
    body: "When CRM and purchase share the same workspace, sales stop chasing status and purchase stops guessing demand.",
    metric: "Ops time back",
  },
  {
    title: "Payroll that starts from muster",
    body: "Attendance and leave feed the run. Finance reviews exceptions instead of rebuilding the month in Excel.",
    metric: "Month-end calm",
  },
  {
    title: "Approvals that find people",
    body: "PO, expense, leave, and CTC queues surface in one place — managers act, they don’t hunt for WhatsApp threads.",
    metric: "Faster decisions",
  },
  {
    title: "One number for leadership",
    body: "Pipeline, open POs, attendance, and payroll readiness come from the same records teams update all week.",
    metric: "Monday clarity",
  },
]

export const objections = [
  {
    q: "We already have CRM / Tally / payroll tools.",
    a: "Most Nexsyst buyers do. The quote is for connecting the handoffs — not forcing a rip-and-replace of everything on day one. Start with the two modules that hurt most.",
  },
  {
    q: "Will this disrupt month-end?",
    a: "Pilots are scoped around a quiet window. Payroll and Tally cutovers are planned with finance — we don’t flip everything the week salary is due.",
  },
  {
    q: "Is pricing transparent?",
    a: "Yes on drivers. Commercials are custom because module mix and user counts vary. You get a line-item quotation after a short discovery — not a surprise invoice later.",
  },
  {
    q: "How long before we see value?",
    a: "A focused CRM + PO or HR + payroll pilot often goes live in 2–4 weeks. Broader suites phase after the first win is real.",
  },
  {
    q: "Who owns our data?",
    a: "You do. Access is role-based; audit trails exist for sensitive actions. Hosting options and retention are written into the proposal.",
  },
  {
    q: "What if we only want a quote, not a long demo?",
    a: "Use Request a quotation. Share modules, headcount, and timeline — we reply with a scoped commercial outline, then optional walkthrough.",
  },
]

export const onboardingSteps = [
  {
    step: "01",
    title: "Discovery (30–45 min)",
    body: "We map your Tuesday: CRM handoffs, purchase approvals, attendance, payroll, Tally. You leave with a clear module shortlist.",
  },
  {
    step: "02",
    title: "Scoped quotation",
    body: "Line items for modules, users, hosting, migration, training, and AMC — so purchase and finance can approve without guessing.",
  },
  {
    step: "03",
    title: "Pilot go-live",
    body: "Configure roles, import masters, train admins. First workflows run in production with a named success contact.",
  },
  {
    step: "04",
    title: "Expand with proof",
    body: "Add payroll, manufacturing, or assets after the first modules are adopted — expansion quotes stay predictable.",
  },
]

export const securityPoints = [
  {
    title: "Role-based access",
    body: "Module switcher and permissions mirror the live product — people only see what they are allowed to run.",
  },
  {
    title: "Authentication options",
    body: "Password and Microsoft MFA paths supported for teams that need stronger sign-in policy.",
  },
  {
    title: "Auditability",
    body: "Sensitive business actions leave trails — important for purchase, payroll, and admin changes.",
  },
  {
    title: "Operational hosting",
    body: "Cloud delivery with TLS; customer-hosted options discussed in the proposal when policy requires it.",
  },
]

export const comparisonRows = [
  {
    label: "CRM → Purchase handoff",
    spreadsheets: "WhatsApp + Excel",
    pointTools: "Manual export",
    nexsyst: "Same workspace",
  },
  {
    label: "Attendance → Payroll",
    spreadsheets: "Rebuild every month",
    pointTools: "CSV upload hope",
    nexsyst: "Muster feeds the run",
  },
  {
    label: "Approvals",
    spreadsheets: "Email chase",
    pointTools: "Per-app inboxes",
    nexsyst: "Unified queues",
  },
  {
    label: "Tally / finance truth",
    spreadsheets: "Month-end fight",
    pointTools: "Separate silo",
    nexsyst: "Sync + shared ops view",
  },
  {
    label: "Leadership Monday view",
    spreadsheets: "Slide deck scramble",
    pointTools: "Five logins",
    nexsyst: "One live overview",
  },
]

export const buyerFaqs = [
  {
    question: "How do I get a Nexsyst quotation?",
    answer:
      "Open Request a quotation, select the modules you need, share approximate users and timeline, and submit. We aim to reply within one business day with a scoped commercial outline — or book a short discovery if details are incomplete.",
  },
  {
    question: "What information do you need for an accurate quote?",
    answer:
      "Module shortlist (e.g. CRM, PO, Payroll, Tally), approximate named users by team, hosting preference, must-have integrations (Tally, biometric, SSO), and whether you need data migration or training workshops.",
  },
  {
    question: "Is there a fixed public price list?",
    answer:
      "Nexsyst is quoted per scope because mid-market rollouts vary widely. We publish what drives cost (modules, users, hosting, integrations, migration, AMC) so procurement knows what to expect before the call.",
  },
  {
    question: "Can we start with only two modules?",
    answer:
      "Yes — and that is the recommended path. Most teams start with CRM + Purchase or HR + Payroll, prove the handoff, then expand. Your first quotation can be pilot-scoped.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "A focused pilot commonly goes live in 2–4 weeks after kickoff. Broader suites (payroll + manufacturing + assets) are phased so operations are not disrupted.",
  },
  {
    question: "Do you integrate with Tally?",
    answer:
      "Yes. Tally Sync covers invoices and stock masters so operations and accounting share a closer truth. Depth of sync is confirmed in the quotation.",
  },
  {
    question: "Does payroll support Indian statutory needs?",
    answer:
      "Payroll is built for India-based processing including structures, attendance-linked pay, and statutory deductions such as PF, ESI, PT, and TDS — configured to your policies during implementation.",
  },
  {
    question: "Who owns the data and who can access it?",
    answer:
      "Your organization owns the business data. Access is controlled by roles. Hosting location, backups, and retention are documented in the proposal and our Privacy Policy.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "You receive an on-screen confirmation. The Nexsyst team gets your details by email, usually replies within one business day, and either sends a draft quotation outline or schedules a 30-minute discovery call.",
  },
  {
    question: "Can purchase / finance get a formal proposal PDF?",
    answer:
      "Yes. After discovery we issue a scoped proposal covering modules, users, implementation, timeline, and AMC suitable for internal approval.",
  },
]

export const privacyPolicy = {
  title: "Privacy Policy",
  updated: "10 November 2026",
  sections: [
    {
      heading: "Who we are",
      body: "Nexsyst (“we”, “us”) operates the marketing website nexsyst.in and related product experiences. This policy explains how we handle personal information collected through the website, demo requests, and quotation forms. For product-environment data inside a customer’s Nexsyst tenant, the customer’s agreement and admin controls apply.",
    },
    {
      heading: "Information we collect",
      body: "When you request a demo or quotation we collect name, work email, phone (optional), company, job title, modules of interest, message content, and preferred contact time. We also collect basic technical logs (IP address, browser type, pages viewed) needed to secure and improve the site. We do not knowingly collect children’s data.",
    },
    {
      heading: "How we use information",
      body: "We use enquiry data to respond to your request, prepare quotations, schedule walkthroughs, improve our messaging, and maintain security. We do not sell personal information. Marketing follow-ups are limited to relevant Nexsyst product communications; you can ask to stop at any time by emailing info@nexsyst.in.",
    },
    {
      heading: "Legal bases & sharing",
      body: "We process enquiry data to take steps at your request before a contract and for our legitimate interest in responding to business enquiries. We share data with infrastructure providers that host email delivery and the website (for example email relay and hosting) under appropriate safeguards. We may disclose information if required by law.",
    },
    {
      heading: "Retention",
      body: "Lead and quotation records are retained as long as needed to complete the sales process and for reasonable business record-keeping (typically up to 24 months for inactive leads, unless a longer period is required for contracts or disputes). You may request deletion subject to legal holds.",
    },
    {
      heading: "Security",
      body: "We use HTTPS/TLS for website traffic and restrict access to enquiry inboxes. No method of transmission is 100% secure; please avoid sending passwords or highly sensitive personal data in the website forms.",
    },
    {
      heading: "Your choices",
      body: "You may request access, correction, or deletion of enquiry data, or raise a privacy question, by emailing info@nexsyst.in. We will respond within a reasonable period.",
    },
    {
      heading: "Contact",
      body: "Privacy enquiries: info@nexsyst.in · Official site: https://nexsyst.in",
    },
  ],
}

export const termsOfService = {
  title: "Terms & Conditions",
  updated: "10 November 2026",
  sections: [
    {
      heading: "Agreement",
      body: "By using the Nexsyst marketing website and submitting demo or quotation requests, you agree to these terms. Software licences, implementation, and AMC are governed by a separate commercial proposal or agreement. If those conflict with this page, the signed commercial terms control.",
    },
    {
      heading: "Website use",
      body: "Content on nexsyst.in is for general information about Nexsyst products and services. We may update features, modules, and descriptions without notice. You agree not to misuse the site (including scraping that degrades service, attempting unauthorized access, or submitting malicious content).",
    },
    {
      heading: "Quotations & proposals",
      body: "Quotations are estimates based on information you provide and remain valid for the period stated in the proposal (or 30 days if unspecified). Final fees may change if scope, users, integrations, or migration complexity change. A quotation is not a binding contract until accepted in writing by both parties.",
    },
    {
      heading: "Pilots & implementation",
      body: "Timelines depend on customer readiness (master data, decision-makers, UAT). Delays caused by missing inputs may shift go-live dates. Training and migration packages are as defined in the proposal.",
    },
    {
      heading: "Intellectual property",
      body: "Nexsyst branding, software, documentation, and website content are owned by Nexsyst or its licensors. You receive no licence to the product by browsing the site. Customer data remains the customer’s property.",
    },
    {
      heading: "Disclaimer",
      body: "The website is provided “as is.” To the fullest extent permitted by law, we disclaim warranties of uninterrupted availability or fitness for a particular purpose regarding marketing content. Product warranties, if any, appear in the commercial agreement.",
    },
    {
      heading: "Limitation of liability",
      body: "To the fullest extent permitted by law, Nexsyst is not liable for indirect or consequential damages arising from website use or reliance on marketing materials. Liability for paid services is limited as stated in the applicable commercial agreement.",
    },
    {
      heading: "Governing law",
      body: "These website terms are governed by the laws of India, without regard to conflict-of-law rules. Courts in India shall have exclusive jurisdiction for disputes arising from website use, unless a commercial agreement specifies otherwise.",
    },
    {
      heading: "Contact",
      body: "Questions about these terms: info@nexsyst.in · https://nexsyst.in",
    },
  ],
}

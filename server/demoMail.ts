/**
 * Server-only demo/quote-request mailer.
 * Used by Vercel `/api/demo-request` and the Vite local middleware.
 * Never import this from React/browser code.
 */

export type DemoMailInput = {
  name?: string | null
  email?: string | null
  phone?: string | null
  company?: string | null
  jobTitle?: string | null
  productsInterested?: string[] | null
  message?: string | null
  preferredTime?: string | null
  intent?: string | null
  employeeCount?: string | null
  timeline?: string | null
  budgetBand?: string | null
  /** Honeypot — must be empty */
  website?: string | null
}

export type DemoMailConfig = {
  resendApiKey: string
  fromAddress: string
  notifyEmail: string
  fromName?: string
}

export type DemoMailResult =
  | {
      ok: true
      sent: boolean
      message: string
    }
  | {
      ok: false
      status: number
      message: string
    }

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function clean(value: string | null | undefined): string {
  return (value ?? "").trim()
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function row(label: string, value: string | null | undefined): string {
  const v = clean(value)
  if (!v) return ""
  return `<tr>
    <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;width:160px;font-size:13px;">${esc(label)}</td>
    <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;">${esc(v)}</td>
  </tr>`
}

function buildHtml(input: DemoMailInput): string {
  const products = (input.productsInterested ?? [])
    .map((p) => clean(p))
    .filter(Boolean)
    .join(", ")

  const intent = clean(input.intent).toLowerCase() === "quote" ? "quote" : "demo"
  const intentLabel = intent === "quote" ? "quotation request" : "demo request"

  const message = clean(input.message)
  const notes = message
    ? `<p style="margin:20px 0 0;font-size:14px;color:#374151;"><strong>Message</strong></p>
       <p style="margin:8px 0 0;padding:12px;background:#f9fafb;border-radius:8px;color:#111827;white-space:pre-wrap;">${esc(message)}</p>`
    : ""

  const email = clean(input.email)

  return `<!DOCTYPE html>
<html><body style="margin:0;padding:24px;background:#f0fdfa;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #ccfbf1;">
    <tr><td style="background:linear-gradient(135deg,#134e4a,#0f766e);padding:24px 28px;color:#fff;">
      <p style="margin:0;font-size:12px;letter-spacing:.12em;text-transform:uppercase;opacity:.8;">Website lead · ${esc(intent)}</p>
      <p style="margin:8px 0 0;font-size:22px;font-weight:700;">NexSyst ${esc(intentLabel)}</p>
    </td></tr>
    <tr><td style="padding:28px;">
      <p style="margin:0;font-size:16px;">Hello <strong>Rahul</strong>,</p>
      <p style="margin:12px 0 0;font-size:15px;color:#134e4a;">A new <strong>NexSyst ${esc(intentLabel)}</strong> was submitted from the marketing website.</p>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:20px;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        ${row("Intent", intent)}
        ${row("Name", input.name)}
        ${row("Email", input.email)}
        ${row("Phone", input.phone)}
        ${row("Company", input.company)}
        ${row("Job title", input.jobTitle)}
        ${row("Products interested", products)}
        ${row("Approx. employees / users", input.employeeCount)}
        ${row("Timeline", input.timeline)}
        ${row("Budget band", input.budgetBand)}
        ${row("Preferred time", input.preferredTime)}
        ${row("Submitted (UTC)", new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC")}
        ${row("Source", "NexSyst website")}
      </table>
      ${notes}
      <p style="margin:20px 0 0;font-size:14px;">Reply to <a href="mailto:${esc(email)}">${esc(email)}</a>.</p>
    </td></tr>
  </table>
</body></html>`
}

export async function processDemoRequest(
  input: DemoMailInput,
  config: DemoMailConfig,
): Promise<DemoMailResult> {
  if (clean(input.website)) {
    return {
      ok: true,
      sent: true,
      message: "Thank you. We will contact you shortly.",
    }
  }

  const name = clean(input.name)
  const email = clean(input.email)

  if (!name || !email) {
    return { ok: false, status: 400, message: "Name and email are required." }
  }
  if (!isEmail(email)) {
    return { ok: false, status: 400, message: "A valid email address is required." }
  }

  if (!config.resendApiKey || !config.fromAddress || !config.notifyEmail) {
    console.error("Demo mail misconfigured: missing RESEND_API_KEY, RESEND_FROM_ADDRESS, or DEMO_NOTIFY_EMAIL")
    return {
      ok: false,
      status: 503,
      message: "Request service is temporarily unavailable. Please try again later.",
    }
  }

  const company = clean(input.company)
  const intent = clean(input.intent).toLowerCase() === "quote" ? "quote" : "demo"
  const subject =
    intent === "quote"
      ? `NexSyst QUOTE request — ${name}${company ? ` (${company})` : ""}`
      : `NexSyst demo request — ${name}${company ? ` (${company})` : ""}`
  const from = config.fromName
    ? `${config.fromName} <${config.fromAddress}>`
    : config.fromAddress

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [config.notifyEmail],
      reply_to: email,
      subject,
      html: buildHtml(input),
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => "")
    console.error("Resend error", res.status, detail)
    return {
      ok: false,
      status: 502,
      message: "Could not send your request right now. Please try again shortly.",
    }
  }

  return {
    ok: true,
    sent: true,
    message:
      intent === "quote"
        ? "Thank you. We received your quotation request and will reply within one business day."
        : "Thank you. We received your demo request and will contact you shortly.",
  }
}

export function loadDemoMailConfig(env: Record<string, string | undefined>): DemoMailConfig {
  return {
    resendApiKey: (env.RESEND_API_KEY ?? "").trim(),
    fromAddress: (env.RESEND_FROM_ADDRESS ?? "").trim(),
    notifyEmail: (env.DEMO_NOTIFY_EMAIL ?? "info@nexsyst.in").trim(),
    fromName: (env.RESEND_FROM_NAME ?? "NexSyst").trim(),
  }
}

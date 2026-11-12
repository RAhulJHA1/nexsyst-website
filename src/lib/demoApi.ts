export type LeadIntent = "demo" | "quote"

export type DemoRequestPayload = {
  name: string
  email: string
  phone: string
  company: string
  jobTitle: string
  productsInterested: string[]
  message: string
  preferredTime: string
  /** demo | quote */
  intent?: LeadIntent
  employeeCount?: string
  timeline?: string
  budgetBand?: string
  /** Honeypot — leave empty */
  website: string
}

export type DemoRequestResponse = {
  sent: boolean
  message: string
}

/**
 * Same-origin Vercel serverless route (or Vite local middleware).
 * Secrets stay on the server — never call Resend from the browser.
 */
export async function submitDemoRequest(payload: DemoRequestPayload): Promise<DemoRequestResponse> {
  const res = await fetch("/api/demo-request", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: payload.name.trim(),
      email: payload.email.trim(),
      phone: payload.phone.trim() || null,
      company: payload.company.trim() || null,
      jobTitle: payload.jobTitle.trim() || null,
      productsInterested: payload.productsInterested,
      message: payload.message.trim() || null,
      preferredTime: payload.preferredTime.trim() || null,
      intent: payload.intent ?? "demo",
      employeeCount: payload.employeeCount?.trim() || null,
      timeline: payload.timeline?.trim() || null,
      budgetBand: payload.budgetBand?.trim() || null,
      website: payload.website || null,
    }),
  })

  const data = (await res.json().catch(() => ({}))) as DemoRequestResponse & {
    message?: string
  }

  if (!res.ok) {
    throw new Error(data.message || `Request failed (${res.status})`)
  }

  return {
    sent: Boolean(data.sent),
    message: data.message || "Thank you. We will contact you shortly.",
  }
}

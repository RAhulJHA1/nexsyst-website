import type { VercelRequest, VercelResponse } from "@vercel/node"
import { loadDemoMailConfig, processDemoRequest, type DemoMailInput } from "../server/demoMail.js"

/**
 * Vercel serverless — secrets from project Environment Variables only.
 * Never expose RESEND_API_KEY to the browser (no VITE_ prefix).
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "no-store")

  if (req.method === "OPTIONS") {
    res.status(204).end()
    return
  }

  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" })
    return
  }

  const body = (typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body ?? {}) as DemoMailInput

  const result = await processDemoRequest(body, loadDemoMailConfig(process.env))

  if (!result.ok) {
    res.status(result.status).json({ sent: false, message: result.message })
    return
  }

  res.status(200).json({ sent: result.sent, message: result.message })
}

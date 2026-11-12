import { useState, type FormEvent } from "react"
import { CheckCircle2, Loader2, Send } from "lucide-react"
import { erpModules } from "../data/erp"
import { submitDemoRequest, type DemoRequestPayload, type LeadIntent } from "../lib/demoApi"

const empty = (intent: LeadIntent): DemoRequestPayload => ({
  name: "",
  email: "",
  phone: "",
  company: "",
  jobTitle: "",
  productsInterested: [],
  message: "",
  preferredTime: "",
  intent,
  employeeCount: "",
  timeline: "",
  budgetBand: "",
  website: "",
})

type Props = {
  intent?: LeadIntent
  /** Compact embed on homepage vs full page */
  variant?: "full" | "panel"
  className?: string
}

export function LeadForm({ intent = "quote", variant = "full", className = "" }: Props) {
  const [form, setForm] = useState<DemoRequestPayload>(() => empty(intent))
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle")
  const [feedback, setFeedback] = useState("")

  const isQuote = intent === "quote"
  const dark = variant === "panel"

  const field = dark
    ? "w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/30"
    : "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#3d7eff]"

  const label = dark
    ? "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50"
    : "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500"

  const toggle = (name: string) => {
    setForm((prev) => {
      const set = new Set(prev.productsInterested)
      if (set.has(name)) set.delete(name)
      else set.add(name)
      return { ...prev, productsInterested: [...set] }
    })
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (status === "submitting") return
    if (form.productsInterested.length === 0) {
      setStatus("error")
      setFeedback("Select at least one module so we can scope the quotation.")
      return
    }
    setStatus("submitting")
    setFeedback("")
    try {
      const res = await submitDemoRequest({ ...form, intent })
      setStatus("ok")
      setFeedback(res.message)
      setForm(empty(intent))
    } catch (err) {
      setStatus("error")
      setFeedback(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "ok") {
    return (
      <div
        className={`rounded-2xl border p-8 ${
          dark ? "border-slate-400/30 bg-white/[0.04] text-white" : "border-slate-200 bg-slate-100 text-slate-900"
        } ${className}`}
      >
        <CheckCircle2 className={`h-10 w-10 ${dark ? "text-slate-300" : "text-slate-700"}`} />
        <h3 className="mt-4 text-xl font-bold">Request received</h3>
        <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-slate-600"}`}>
          {feedback}
        </p>
        <ul className={`mt-4 space-y-1.5 text-sm ${dark ? "text-white/60" : "text-slate-600"}`}>
          <li>✓ We review modules, users, and timeline</li>
          <li>✓ You get a scoped outline or a short discovery invite</li>
          <li>✓ Typical reply: within one business day</li>
        </ul>
        <button
          type="button"
          className={`mt-6 rounded-lg px-4 py-2 text-sm font-semibold ${
            dark ? "border border-white/20 text-white hover:bg-white/5" : "border border-slate-200 bg-white hover:bg-slate-50"
          }`}
          onClick={() => {
            setStatus("idle")
            setFeedback("")
          }}
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className={className} noValidate>
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Full name *</span>
          <input required className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" />
        </label>
        <label className="block">
          <span className={label}>Work email *</span>
          <input
            required
            type="email"
            className={field}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            autoComplete="email"
          />
        </label>
        <label className="block">
          <span className={label}>Phone *</span>
          <input
            required
            className={field}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            autoComplete="tel"
            placeholder="+91 …"
          />
        </label>
        <label className="block">
          <span className={label}>Company *</span>
          <input
            required
            className={field}
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            autoComplete="organization"
          />
        </label>
        <label className="block">
          <span className={label}>Job title</span>
          <input className={field} value={form.jobTitle} onChange={(e) => setForm({ ...form, jobTitle: e.target.value })} />
        </label>
        <label className="block">
          <span className={label}>Approx. users / employees</span>
          <select
            className={field}
            value={form.employeeCount}
            onChange={(e) => setForm({ ...form, employeeCount: e.target.value })}
          >
            <option value="">Select…</option>
            <option value="1-25">1–25</option>
            <option value="26-100">26–100</option>
            <option value="101-300">101–300</option>
            <option value="301-1000">301–1,000</option>
            <option value="1000+">1,000+</option>
          </select>
        </label>
        {isQuote && (
          <>
            <label className="block">
              <span className={label}>Go-live timeline</span>
              <select
                className={field}
                value={form.timeline}
                onChange={(e) => setForm({ ...form, timeline: e.target.value })}
              >
                <option value="">Select…</option>
                <option value="ASAP / this month">ASAP / this month</option>
                <option value="1-3 months">1–3 months</option>
                <option value="3-6 months">3–6 months</option>
                <option value="Exploring / budget stage">Exploring / budget stage</option>
              </select>
            </label>
            <label className="block">
              <span className={label}>Budget band (optional)</span>
              <select
                className={field}
                value={form.budgetBand}
                onChange={(e) => setForm({ ...form, budgetBand: e.target.value })}
              >
                <option value="">Prefer to discuss</option>
                <option value="Under ₹2L / year">Under ₹2L / year</option>
                <option value="₹2L–₹8L / year">₹2L–₹8L / year</option>
                <option value="₹8L–₹20L / year">₹8L–₹20L / year</option>
                <option value="₹20L+ / year">₹20L+ / year</option>
              </select>
            </label>
          </>
        )}
      </div>

      <fieldset className="mt-5">
        <legend className={label}>Modules for quotation *</legend>
        <div className="flex flex-wrap gap-2">
          {erpModules.map((m) => {
            const on = form.productsInterested.includes(m.name)
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => toggle(m.name)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  on
                    ? dark
                      ? "border-white/30 bg-white/10 text-slate-100"
                      : "border-slate-900 bg-slate-900 text-white"
                    : dark
                      ? "border-white/15 bg-white/5 text-white/70"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-400"
                }`}
              >
                {m.name}
              </button>
            )
          })}
        </div>
      </fieldset>

      <label className="mt-5 block">
        <span className={label}>What should the quotation solve?</span>
        <textarea
          rows={4}
          className={`${field} resize-y`}
          placeholder="e.g. CRM + PO for 40 users; payroll for 180 employees; Tally sync required…"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </label>

      {status === "error" && (
        <p className={`mt-3 text-sm ${dark ? "text-red-300" : "text-red-600"}`} role="alert">
          {feedback}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold disabled:opacity-70 sm:w-auto ${
          dark
            ? "bg-white text-slate-900 hover:bg-slate-100"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {isQuote ? "Get my quotation" : "Request a demo"}
          </>
        )}
      </button>
      <p className={`mt-3 text-xs ${dark ? "text-white/40" : "text-slate-500"}`}>
        By submitting you agree to our{" "}
        <a href="/privacy" className="underline underline-offset-2">
          Privacy Policy
        </a>
        . No spam — only a scoped reply about your request.
      </p>
    </form>
  )
}

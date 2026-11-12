import { useState, type FormEvent } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { CheckCircle2, Loader2, Send } from "lucide-react"
import { FadeItem, MotionSection } from "./Motion"
import { erpModules } from "../data/erp"
import { submitDemoRequest, type DemoRequestPayload } from "../lib/demoApi"

const emptyForm: DemoRequestPayload = {
  name: "",
  email: "",
  phone: "",
  company: "",
  jobTitle: "",
  productsInterested: [],
  message: "",
  preferredTime: "",
  website: "",
}

const interestOptions = erpModules.map((m) => m.name)

export function Contact() {
  const reduce = useReducedMotion()
  const [form, setForm] = useState<DemoRequestPayload>(emptyForm)
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle")
  const [feedback, setFeedback] = useState("")

  const toggleProduct = (name: string) => {
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
    setStatus("submitting")
    setFeedback("")
    try {
      const res = await submitDemoRequest(form)
      setStatus("ok")
      setFeedback(res.message)
      setForm(emptyForm)
    } catch (err) {
      setStatus("error")
      setFeedback(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-accent/60 focus:bg-white/[0.08]"

  return (
    <MotionSection
      id="contact"
      className="section-pad relative overflow-hidden py-24 pb-32 md:py-32 md:pb-36"
      ariaLabelledBy="contact-heading"
    >
      <div className="absolute inset-0 bg-[#050a14]" aria-hidden />
      <div className="grid-fade-dark pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 10%, rgba(13,148,136,0.18), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Next step</p>
          <h2
            id="contact-heading"
            className="mt-3 max-w-xl font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-tight text-balance text-white"
          >
            Tell us about one messy Tuesday. We’ll map the walkthrough to it.
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/65">
            Share your team size, current tools, and which handoffs hurt most — CRM to purchase,
            attendance to payroll, or ops to Tally. We reply with a scoped demo agenda, not a generic pitch deck.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-white/55">
            <li className="before:mr-2 before:text-slate-400 before:content-['▸']">
              CRM, PO, Tally, HR, payroll, expense & manufacturing
            </li>
            <li className="before:mr-2 before:text-slate-400 before:content-['▸']">
              Product walkthrough in the real Nexsyst workspace
            </li>
            <li className="before:mr-2 before:text-slate-400 before:content-['▸']">
              Typically a response within one business day
            </li>
          </ul>
        </FadeItem>

        <FadeItem>
          {status === "ok" ? (
            <div className="rounded-2xl border border-[#3d7eff]/35 bg-white/[0.04] p-8 text-white">
              <CheckCircle2 className="h-10 w-10 text-slate-400" aria-hidden />
              <h3 className="mt-4 font-display text-xl font-bold">Request received</h3>
              <p className="mt-2 text-white/65">{feedback}</p>
              <button
                type="button"
                className="mt-6 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5"
                onClick={() => {
                  setStatus("idle")
                  setFeedback("")
                }}
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-[#070d19]/85 p-6 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-8"
              noValidate
            >
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
                <label className="block sm:col-span-1">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                    Full name *
                  </span>
                  <input
                    required
                    className={fieldClass}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                    Work email *
                  </span>
                  <input
                    required
                    type="email"
                    className={fieldClass}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    autoComplete="email"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                    Phone
                  </span>
                  <input
                    className={fieldClass}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    autoComplete="tel"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                    Company
                  </span>
                  <input
                    className={fieldClass}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    autoComplete="organization"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                    Job title
                  </span>
                  <input
                    className={fieldClass}
                    value={form.jobTitle}
                    onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                    autoComplete="organization-title"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                    Preferred time
                  </span>
                  <input
                    className={fieldClass}
                    placeholder="e.g. Weekdays after 2pm IST"
                    value={form.preferredTime}
                    onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                  />
                </label>
              </div>

              <fieldset className="mt-5">
                <legend className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                  Modules interested
                </legend>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((name) => {
                    const on = form.productsInterested.includes(name)
                    return (
                      <button
                        key={name}
                        type="button"
                        onClick={() => toggleProduct(name)}
                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                          on
                            ? "border-white/30 bg-white/10 text-slate-100"
                            : "border-white/15 bg-white/5 text-white/70 hover:border-white/30"
                        }`}
                      >
                        {name}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <label className="mt-5 block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                  Message / requirements
                </span>
                <textarea
                  rows={4}
                  className={`${fieldClass} resize-y`}
                  placeholder="Team size, current tools, must-have modules…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-300" role="alert">
                  {feedback}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold disabled:opacity-70 sm:w-auto"
                whileHover={reduce || status === "submitting" ? undefined : { scale: 1.02 }}
                whileTap={reduce || status === "submitting" ? undefined : { scale: 0.98 }}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Request a demo
                  </>
                )}
              </motion.button>
            </form>
          )}
        </FadeItem>
      </div>
    </MotionSection>
  )
}

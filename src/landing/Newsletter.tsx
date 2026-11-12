import { useState, type FormEvent } from "react"
import { Loader2, Send } from "lucide-react"
import { Reveal } from "./Motion"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "ok">("idle")

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || status === "loading") return
    setStatus("loading")
    window.setTimeout(() => {
      setStatus("ok")
      setEmail("")
    }, 700)
  }

  return (
    <section id="contact" className="section-space">
      <div className="section-pad mx-auto max-w-6xl">
        <Reveal>
          <div className="card-ocean overflow-hidden">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-b border-[rgba(168,178,193,0.1)] p-8 sm:p-10 lg:border-b-0 lg:border-r">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a9a8e]">
                  Stay informed
                </p>
                <h2 className="mt-3 text-[clamp(1.55rem,3vw,2.2rem)] font-extrabold text-[#d5dbe5]">
                  Product updates &amp; implementation notes
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[#a8b2c1]">
                  Occasional emails on payroll readiness, CRM releases, and mid-market ERP practice —
                  no spam, unsubscribe anytime.
                </p>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10">
                {status === "ok" ? (
                  <p className="text-sm font-semibold text-[#4a9a8e]">
                    Thanks — you’re on the list. We’ll be in touch with useful updates only.
                  </p>
                ) : (
                  <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
                    <label className="sr-only" htmlFor="newsletter-email">
                      Work email
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Work email"
                      className="w-full flex-1 rounded-lg border border-[rgba(168,178,193,0.2)] bg-[#0f1419] px-4 py-3 text-sm text-[#d5dbe5] outline-none placeholder:text-[#a8b2c1]/55 focus:border-[#4a9a8e]"
                    />
                    <button type="submit" className="btn-teal shrink-0" disabled={status === "loading"}>
                      {status === "loading" ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                      Subscribe
                    </button>
                  </form>
                )}
                <p className="mt-3 text-xs text-[#a8b2c1]/70">
                  Prefer a scoped quote?{" "}
                  <a href="mailto:info@nexsyst.in" className="font-semibold text-[#4a9a8e] hover:underline">
                    info@nexsyst.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

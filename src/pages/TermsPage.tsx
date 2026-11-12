import { termsOfService } from "../data/conversion"

export function TermsPage() {
  return (
    <article className="py-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a9a8e]">Legal</p>
      <h1 className="mt-3 text-3xl font-extrabold text-[#d5dbe5]">{termsOfService.title}</h1>
      <p className="mt-2 text-sm text-[#a8b2c1]">Last updated {termsOfService.updated}</p>
      {termsOfService.sections.map((s) => (
        <section key={s.heading} className="mt-8">
          <h2 className="text-xl font-bold text-[#d5dbe5]">{s.heading}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#a8b2c1]">{s.body}</p>
        </section>
      ))}
    </article>
  )
}

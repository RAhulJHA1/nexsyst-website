import { PageHero } from "../components/PageHero"
import { termsOfService } from "../data/conversion"

export function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={termsOfService.title}
        description={`Last updated ${termsOfService.updated}. Website use, quotations, and commercial boundaries.`}
      />
      <article className="section-pad mx-auto max-w-3xl py-12 md:py-16">
        {termsOfService.sections.map((s) => (
          <section key={s.heading} className="mb-8">
            <h2 className="text-xl font-bold text-slate-900">{s.heading}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{s.body}</p>
          </section>
        ))}
      </article>
    </>
  )
}

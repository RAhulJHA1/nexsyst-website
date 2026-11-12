import { PageHero } from "../components/PageHero"
import { privacyPolicy } from "../data/conversion"

export function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={privacyPolicy.title}
        description={`Last updated ${privacyPolicy.updated}. How Nexsyst handles enquiry and website data.`}
      />
      <article className="section-pad mx-auto max-w-3xl py-12 md:py-16">
        {privacyPolicy.sections.map((s) => (
          <section key={s.heading} className="mb-8">
            <h2 className="text-xl font-bold text-slate-900">{s.heading}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{s.body}</p>
          </section>
        ))}
      </article>
    </>
  )
}

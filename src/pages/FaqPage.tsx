import { PageHero } from "../components/PageHero"
import { Faq } from "../components/Faq"
import { Link } from "react-router-dom"

export function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Nexsyst buyer FAQ"
        description="Quotations, modules, Tally, payroll, implementation timeline, and what happens after you submit a request."
      />
      <Faq />
      <div className="section-pad mx-auto max-w-3xl pb-16 text-center">
        <Link
          to="/quote"
          className="inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Request a quotation
        </Link>
      </div>
    </>
  )
}

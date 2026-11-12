import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { MotionSection, FadeItem } from "./Motion"

export function CtaBanner() {
  return (
    <MotionSection className="relative overflow-hidden py-20 sm:py-24">
      <div className="aurora absolute inset-0" aria-hidden />
      <div className="noise absolute inset-0" aria-hidden />
      <div className="section-pad relative mx-auto max-w-3xl text-center text-white">
        <FadeItem>
          <h2 className="text-[clamp(1.75rem,3.8vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-balance">
            Don’t leave with “we’ll think about it.” Leave with a quote request.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-white/55 sm:text-base">
            Share modules and users now. We’ll return a scoped commercial outline your purchase team
            can put in front of finance.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/quote" className="btn-modern btn-modern-primary">
              Get quotation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-modern btn-modern-ghost">
              Book walkthrough
            </Link>
          </div>
        </FadeItem>
      </div>
    </MotionSection>
  )
}

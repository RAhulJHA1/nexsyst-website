import { FadeItem, MotionSection } from "./Motion"
import { services } from "../data/content"

export function Services() {
  return (
    <MotionSection
      id="services"
      className="section-pad bg-canvas py-24 md:py-32"
      ariaLabelledBy="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeItem>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-deep">Services</p>
          <h2
            id="services-heading"
            className="mt-3 max-w-2xl font-display text-[clamp(1.85rem,3.5vw,2.75rem)] font-bold leading-tight text-ink text-balance"
          >
            IT and industrial software services, end to end
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            As an IT services partner for process industries, we design, integrate, and support the systems
            that sit on top of automation — from custom apps to OT–IT bridges.
          </p>
        </FadeItem>

        <ol className="mt-14 divide-y divide-line border-y border-line">
          {services.map((service, i) => (
            <FadeItem key={service.title}>
              <li className="group grid gap-3 py-8 transition md:grid-cols-[5rem_1fr_1.2fr] md:items-start md:gap-8 md:hover:bg-white/60 md:hover:px-4 md:hover:-mx-4 md:rounded-xl">
                <span className="font-display text-sm font-bold text-steel transition group-hover:text-accent-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-bold text-ink">{service.title}</h3>
                <p className="text-[1.02rem] leading-relaxed text-muted">{service.body}</p>
              </li>
            </FadeItem>
          ))}
        </ol>
      </div>
    </MotionSection>
  )
}

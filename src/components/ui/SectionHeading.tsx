import { FadeItem } from "../Motion"

type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  id?: string
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  light = false,
}: Props) {
  const alignCls = align === "center" ? "mx-auto text-center" : "text-left"
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow ? (
        <FadeItem>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.18em] ${
              light ? "text-[#8eb4ff]" : "text-[#3d7eff]"
            }`}
          >
            {eyebrow}
          </p>
        </FadeItem>
      ) : null}
      <FadeItem>
        <h2
          id={id}
          className={`mt-3 text-[clamp(1.7rem,3.4vw,2.55rem)] font-extrabold leading-[1.12] tracking-tight text-balance ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
      </FadeItem>
      {description ? (
        <FadeItem>
          <p
            className={`mt-4 text-[15px] leading-relaxed sm:text-base ${
              light ? "text-white/65" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        </FadeItem>
      ) : null}
    </div>
  )
}

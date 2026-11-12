import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import { useRef, type ReactNode, type MouseEvent } from "react"
import { Link } from "react-router-dom"

type Props = {
  children: ReactNode
  className?: string
  href?: string
  to?: string
  onClick?: () => void
  type?: "button" | "submit"
  external?: boolean
}

export function MagneticButton({
  children,
  className = "",
  href,
  to,
  onClick,
  type = "button",
  external,
}: Props) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.28)
    y.set((e.clientY - r.top - r.height / 2) * 0.28)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const inner = (
    <motion.span style={reduce ? undefined : { x: sx, y: sy }} className="inline-flex items-center justify-center gap-2">
      {children}
    </motion.span>
  )

  const shellClass = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${className}`

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="inline-flex">
      {to ? (
        <Link to={to} className={shellClass} onClick={onClick}>
          {inner}
        </Link>
      ) : href ? (
        <a
          href={href}
          className={shellClass}
          onClick={onClick}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {inner}
        </a>
      ) : (
        <button type={type} className={shellClass} onClick={onClick}>
          {inner}
        </button>
      )}
    </div>
  )
}

import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import { brand } from "../data/content"
import { Logo } from "./Logo"

export function Footer() {
  const reduce = useReducedMotion()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand text-white">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.18),transparent_70%)]" aria-hidden />

      {/* animated wave */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full text-accent/20"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          fill="currentColor"
          animate={
            reduce
              ? undefined
              : {
                  d: [
                    "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z",
                    "M0,50 C240,20 480,90 720,50 C960,10 1200,90 1440,50 L1440,0 L0,0 Z",
                    "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z",
                  ],
                }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="section-pad relative mx-auto flex max-w-6xl flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between">
        <div>
          <Link to="/" className="inline-flex shrink-0 items-center">
            <motion.div
              animate={reduce ? undefined : { rotateY: [0, 12, 0, -12, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Logo variant="full" tone="onDark" />
            </motion.div>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            Official {brand.name} website —{" "}
            <a href={brand.url} className="text-white/70 hover:text-accent">
              nexsyst.in
            </a>
            . Industrial software suite plus cloud, enterprise AI/ML, and RAG.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm font-medium text-white/55" aria-label="Footer">
          <Link to="/about" className="hover:text-accent">
            About
          </Link>
          <Link to="/products" className="hover:text-accent">
            Products
          </Link>
          <Link to="/services" className="hover:text-accent">
            Services
          </Link>
          <Link to="/faq" className="hover:text-accent">
            FAQ
          </Link>
          <Link to="/contact" className="hover:text-accent">
            Contact
          </Link>
        </nav>
      </div>

      <div className="relative border-t border-white/10">
        <div className="section-pad mx-auto flex max-w-6xl flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {brand.name}. Official site: nexsyst.in. All rights reserved.
          </span>
          <a href={`mailto:${brand.email}`} className="hover:text-accent">
            {brand.email}
          </a>
        </div>
      </div>
    </footer>
  )
}

import { motion, useReducedMotion } from "framer-motion"
import { Area, AreaChart, ResponsiveContainer } from "recharts"
import {
  Building2,
  ShoppingCart,
  IndianRupee,
  UserCog,
  Users,
  Wallet,
  Receipt,
  Package,
} from "lucide-react"
import { revenueSeries } from "../data/erp"
import { easeOut } from "./Motion"

/** Restrained product preview — midnight + signal blue + slate. */
const apps = [
  { name: "CRM", icon: Building2 },
  { name: "Purchase", icon: ShoppingCart },
  { name: "Tally", icon: IndianRupee },
  { name: "HR", icon: UserCog },
  { name: "People", icon: Users },
  { name: "Payroll", icon: Wallet },
  { name: "Expense", icon: Receipt },
  { name: "Inventory", icon: Package },
]

const kpis = [
  { label: "Open opportunities", value: "42", note: "₹48.2L pipeline" },
  { label: "POs awaiting you", value: "3", note: "Approve before Friday" },
  { label: "Present today", value: "142", note: "of 151 on muster" },
  { label: "Payroll run", value: "Ready", note: "Oct · ₹18.2L" },
]

export function HeroDashboard() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[540px]"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
      aria-hidden
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#f0f3f7] shadow-[0_32px_80px_-28px_rgba(0,0,0,0.65)]">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-3 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
          </div>
          <span className="text-[11px] font-medium text-slate-500">nexsyst.app</span>
          <span className="rounded bg-[#eaf1ff] px-2 py-0.5 text-[10px] font-semibold text-[#2f6ae6]">Live</span>
        </div>

        <div className="grid grid-cols-[76px_1fr]">
          <aside className="bg-[#050a14] px-2 py-3">
            <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-white/10">
              <img src="/nexsyst-mark.png?v=5" alt="" className="h-full w-full object-cover" />
            </div>
            {["CRM", "PO", "HR", "Pay"].map((item, i) => (
              <div
                key={item}
                className={`mb-1 rounded-md px-1 py-1.5 text-center text-[9px] font-medium ${
                  i === 0 ? "bg-white/10 text-white" : "text-white/40"
                }`}
              >
                {item}
              </div>
            ))}
          </aside>

          <div className="min-w-0 p-3 sm:p-3.5">
            <div className="rounded-xl border border-slate-200 bg-white px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                Tuesday · 10:14 AM
              </p>
              <p className="mt-0.5 text-sm font-bold text-slate-900">What needs you today</p>
              <p className="mt-1 text-[11px] leading-snug text-slate-500">
                3 POs waiting · 2 leave approvals · Payroll draft ready for review
              </p>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-2">
              {apps.map((app) => {
                const Icon = app.icon
                return (
                  <div key={app.name} className="flex flex-col items-center gap-1">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#050a14] text-[#8eb4ff] shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="w-full truncate text-center text-[9px] font-medium text-slate-600">
                      {app.name}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {kpis.map((k) => (
                <div key={k.label} className="rounded-lg border border-slate-200 bg-white p-2.5">
                  <p className="text-[10px] font-medium text-slate-500">{k.label}</p>
                  <p className="mt-0.5 text-base font-bold text-slate-900">{k.value}</p>
                  <p className="text-[10px] text-[#2f6ae6]">{k.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-2 rounded-lg border border-slate-200 bg-white p-2.5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold text-slate-700">Pipeline this quarter</p>
                <p className="text-[10px] text-slate-400">₹ lakhs</p>
              </div>
              <div className="mt-1 h-[72px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueSeries}>
                    <defs>
                      <linearGradient id="heroSignal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3d7eff" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#3d7eff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#3d7eff"
                      strokeWidth={2}
                      fill="url(#heroSignal)"
                      isAnimationActive={!reduce}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-[11px] text-white/40">
        Preview of the live Nexsyst workspace — not a stock illustration
      </p>
    </motion.div>
  )
}

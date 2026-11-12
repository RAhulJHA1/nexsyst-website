import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { attendanceSeries, cashFlowSeries, erpModules, revenueSeries } from "../data/erp"
import { FadeItem, MotionSection } from "./Motion"
import { SectionHeading } from "./ui/SectionHeading"

const tabs = ["Overview", "CRM", "Purchase", "Payroll", "Tally"] as const
type Tab = (typeof tabs)[number]

const sidebar = [
  { label: "Apps", id: "apps" },
  { label: "CRM", id: "crm" },
  { label: "Purchase", id: "po" },
  { label: "HR", id: "hr" },
  { label: "Payroll", id: "payroll" },
  { label: "Tally", id: "tally" },
  { label: "Expense", id: "expense" },
]

const pendingPos = [
  { id: "PO-2041", vendor: "ElectroMart", amount: "₹2.4L", status: "Approval" },
  { id: "PO-2038", vendor: "SteelWorks", amount: "₹86K", status: "Receiving" },
  { id: "PO-2033", vendor: "Nova Parts", amount: "₹1.2L", status: "Draft" },
]

export function DashboardShowcase() {
  const [tab, setTab] = useState<Tab>("Overview")
  const reduce = useReducedMotion()

  return (
    <MotionSection id="features" ariaLabelledBy="dashboard-heading" className="section-space bg-white">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          id="dashboard-heading"
          align="left"
          eyebrow="Inside the product"
          title="This is the same shell your team will log into."
          description="Midnight sidebar, soft gray workspace, signal-blue actions — the live Nexsyst chrome, not a marketing cartoon."
        />

        <FadeItem>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-[#f0f3f7] shadow-[0_24px_60px_-36px_rgba(5,10,20,0.5)]">
            <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs font-medium text-slate-500">nexsyst.app / dashboard</span>
            </div>

            <div className="grid lg:grid-cols-[200px_1fr]">
              <aside className="hidden bg-[#050a14] p-3 text-white lg:block">
                <div className="mb-4 flex items-center gap-2.5 px-2">
                  <img src="/nexsyst-mark.png" alt="" className="h-8 w-8 object-contain" />
                  <div>
                    <p className="text-sm font-bold leading-none">Nexsyst</p>
                    <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-white/40">
                      Smart systems
                    </p>
                  </div>
                </div>
                <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">
                  Modules
                </p>
                <ul className="mt-2 space-y-0.5">
                  {sidebar.map((item) => (
                    <li
                      key={item.id}
                      className={`rounded-lg px-3 py-2 text-sm ${
                        item.label === "CRM" ? "bg-white/10 font-semibold" : "text-white/55"
                      }`}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-3 gap-1.5 px-1">
                  {erpModules.slice(0, 6).map((m) => {
                    const Icon = m.icon
                    return (
                      <span
                        key={m.id}
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-slate-300"
                        title={m.name}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                    )
                  })}
                </div>
              </aside>

              <div className="p-4 sm:p-5">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2">
                  <p className="text-sm font-semibold text-slate-800">Business overview</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tabs.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTab(t)}
                        className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                          tab === t
                            ? "bg-slate-800 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-3 lg:grid-cols-3"
                  >
                    <Kpi
                      label={tab === "Payroll" ? "Payroll MTD" : "Revenue MTD"}
                      value={tab === "Payroll" ? "₹18.2L" : "₹52.4L"}
                      hint={tab === "Payroll" ? "Run ready for approval" : "+8.2% vs last month"}
                      accent="#3d7eff"
                    />
                    <Kpi
                      label={tab === "Purchase" ? "Open POs" : "Active pipeline"}
                      value={tab === "Purchase" ? "18" : "₹48.2L"}
                      hint={tab === "Purchase" ? "3 awaiting approval" : "42 open opportunities"}
                      accent={tab === "Purchase" ? "#f57c00" : "#64748b"}
                    />
                    <Kpi
                      label={tab === "Tally" ? "Synced invoices" : "Attendance"}
                      value={tab === "Tally" ? "1,284" : "94%"}
                      hint={tab === "Tally" ? "Last sync 12 min ago" : "142 of 151 present"}
                      accent={tab === "Tally" ? "#94a3b8" : "#1e88e5"}
                    />

                    <div className="page-surface p-3 lg:col-span-2">
                      <p className="mb-2 text-xs font-semibold text-slate-700">
                        {tab === "Payroll"
                          ? "Attendance overview"
                          : tab === "Tally"
                            ? "Cash flow (Tally-linked)"
                            : tab === "Purchase"
                              ? "Purchase trend"
                              : "Sales & expense trend"}
                      </p>
                      <div className="h-[210px]">
                        <ResponsiveContainer width="100%" height="100%">
                          {tab === "Payroll" ? (
                            <BarChart data={attendanceSeries}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                              <YAxis tick={{ fontSize: 11 }} />
                              <Tooltip />
                              <Bar dataKey="present" fill="#3d7eff" radius={[4, 4, 0, 0]} />
                              <Bar dataKey="late" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                            </BarChart>
                          ) : tab === "Tally" ? (
                            <AreaChart data={cashFlowSeries}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                              <YAxis tick={{ fontSize: 11 }} />
                              <Tooltip />
                              <Area type="monotone" dataKey="inflow" stroke="#3d7eff" fill="#3d7eff33" />
                              <Area type="monotone" dataKey="outflow" stroke="#94a3b8" fill="#94a3b818" />
                            </AreaChart>
                          ) : (
                            <AreaChart data={revenueSeries}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                              <YAxis tick={{ fontSize: 11 }} />
                              <Tooltip />
                              <Area
                                type="monotone"
                                dataKey={tab === "Purchase" ? "expense" : "revenue"}
                                stroke="#3d7eff"
                                fill="#3d7eff33"
                                strokeWidth={2}
                              />
                            </AreaChart>
                          )}
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="page-surface p-3">
                      <p className="text-xs font-semibold text-slate-700">
                        {tab === "Purchase" ? "Pending purchase orders" : "Recent activity"}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {pendingPos.map((po) => (
                          <li key={po.id} className="rounded-lg bg-slate-50 px-3 py-2">
                            <div className="flex items-center justify-between gap-2 text-xs">
                              <span className="font-semibold text-slate-800">{po.id}</span>
                              <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-800">
                                {po.status}
                              </span>
                            </div>
                            <p className="mt-1 text-[11px] text-slate-500">
                              {po.vendor} · {po.amount}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </FadeItem>
      </div>
    </MotionSection>
  )
}

function Kpi({
  label,
  value,
  hint,
  accent,
}: {
  label: string
  value: string
  hint: string
  accent: string
}) {
  return (
    <div className="page-surface p-4">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
        <p className="text-xs font-medium text-slate-500">{label}</p>
      </div>
      <p className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900">{value}</p>
      <p className="mt-1 text-[11px] font-medium text-slate-700">{hint}</p>
    </div>
  )
}

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
import { cashFlowSeries, revenueSeries } from "../data/erp"
import { AnimatedCounter } from "./ui/AnimatedCounter"
import { FadeItem, MotionSection } from "./Motion"
import { SectionHeading } from "./ui/SectionHeading"

const tiles = [
  { label: "Pipeline growth", value: 18.4, suffix: "%", hint: "CRM YoY" },
  { label: "PO cycle time", value: 4.2, suffix: "d", decimals: 1, hint: "Avg approval → receive" },
  { label: "Payroll accuracy", value: 99.2, suffix: "%", decimals: 1, hint: "Runs without rework" },
  { label: "Live modules", value: 12, suffix: "+", hint: "In the app switcher" },
]

export function Analytics() {
  return (
    <MotionSection ariaLabelledBy="analytics-heading" className="section-space bg-[#050a14] text-white">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          id="analytics-heading"
          light
          align="left"
          eyebrow="Visibility"
          title="Numbers leaders already ask for on Monday"
          description="Pipeline, open POs, cash movement, attendance, payroll readiness — pulled from the same records teams update all week."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <FadeItem key={tile.label}>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-white/45">{tile.label}</p>
                <p className="mt-2 text-3xl font-bold tracking-tight">
                  <AnimatedCounter
                    value={tile.value}
                    suffix={tile.suffix}
                    decimals={tile.decimals ?? 0}
                  />
                </p>
                <p className="mt-1 text-sm text-white/50">{tile.hint}</p>
              </div>
            </FadeItem>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <FadeItem>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-slate-900">
              <p className="text-sm font-semibold">CRM revenue vs purchase</p>
              <div className="mt-3 h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueSeries}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#3d7eff" fill="#3d7eff33" />
                    <Area type="monotone" dataKey="expense" stroke="#94a3b8" fill="#94a3b818" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </FadeItem>
          <FadeItem>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-slate-900">
              <p className="text-sm font-semibold">Cash flow monitoring</p>
              <div className="mt-3 h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={cashFlowSeries}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Bar dataKey="inflow" fill="#3d7eff" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="outflow" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </FadeItem>
        </div>
      </div>
    </MotionSection>
  )
}

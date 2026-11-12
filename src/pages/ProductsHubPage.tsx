import { PageHero } from "../components/PageHero"
import { PlatformOverview } from "../components/PlatformOverview"
import { DashboardShowcase } from "../components/DashboardShowcase"
import { CtaBanner } from "../components/CtaBanner"

export function ProductsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Nexsyst ERP Modules"
        description="Explore CRM, purchase orders, accounting, attendance, payroll, leave, and analytics — designed as one connected suite."
      />
      <PlatformOverview />
      <DashboardShowcase />
      <CtaBanner />
    </>
  )
}

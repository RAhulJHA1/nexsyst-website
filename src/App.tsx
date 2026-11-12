import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { SiteLayout } from "./pages/SiteLayout"
import { HomePage } from "./pages/HomePage"
import { ModulePage } from "./pages/ModulePage"
import { PrivacyPage } from "./pages/PrivacyPage"
import { TermsPage } from "./pages/TermsPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="modules/:moduleId" element={<ModulePage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

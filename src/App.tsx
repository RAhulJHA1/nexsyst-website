import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { SiteLayout } from "./pages/SiteLayout"
import { HomePage } from "./pages/HomePage"
import { ProductPage } from "./pages/ProductPage"
import { AboutPage } from "./pages/AboutPage"
import { ServicesPage } from "./pages/ServicesPage"
import { ProductsHubPage } from "./pages/ProductsHubPage"
import { FaqPage } from "./pages/FaqPage"
import { ContactPage } from "./pages/ContactPage"
import { QuotePage } from "./pages/QuotePage"
import { PrivacyPage } from "./pages/PrivacyPage"
import { TermsPage } from "./pages/TermsPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="products" element={<ProductsHubPage />} />
          <Route path="products/:productId" element={<ProductPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="quote" element={<QuotePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

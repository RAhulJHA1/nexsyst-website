import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { SiteLayout } from "./pages/SiteLayout"
import { HomePage } from "./pages/HomePage"
import { ProductPage } from "./pages/ProductPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products/:productId" element={<ProductPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

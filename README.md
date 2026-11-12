# Nexsyst Website

Standalone marketing site for the **Nexsyst ERP** platform — separate from the Nexsyst CRM/ERP app. Deploy this `website/` folder as its own Vercel project.

## Run locally

```bash
cd website
npm install
cp .env.example .env.local   # add real Resend key (never commit)
npm run dev
```

Opens at [http://localhost:5174](http://localhost:5174).

From the monorepo root you can also run:

```bash
npm run website
```

Optional client env (safe to expose):

| Name | Purpose |
|------|---------|
| `VITE_APP_LOGIN_URL` | Login button target (defaults to production app login) |
| `VITE_APP_TRIAL_URL` | Free-trial CTA (`/contact` by default) |

The demo form posts to `/api/demo-request`. Locally, Vite middleware handles it using secrets from `.env.local` (no `VITE_` prefix).

## Deploy to Vercel

1. Import **only** the `website` directory as the project root (or set Root Directory = `website`).
2. Framework preset: Vite (or leave auto).
3. In **Project → Settings → Environment Variables**, add (Production + Preview):

| Name | Example | Notes |
|------|---------|--------|
| `RESEND_API_KEY` | `re_…` | **Server only** — never use `VITE_` |
| `RESEND_FROM_ADDRESS` | `noreply@nexsyst.in` | Verified sender in Resend |
| `RESEND_FROM_NAME` | `Nexsyst` | Optional |
| `DEMO_NOTIFY_EMAIL` | `info@nexsyst.in` | Inbox for leads |

4. Deploy. Form → `POST /api/demo-request` (Vercel serverless) → email via Resend.

## Build

```bash
npm run build
npm run preview
```

## Contents

Conversion-focused ERP marketing site (patterns from Zoho One / Sage / mid-market ERP):

- Problem-led hero + product shell preview
- Proof, week-in-life story, modules, comparison table, ROI
- **Request a quotation** (`/quote`) + demo (`/contact`) paths
- Sticky quote bar, inline quote form, pricing drivers
- Buyer FAQ, security/trust, Privacy + Terms
- Demo/quote email via `/api/demo-request` (Resend)

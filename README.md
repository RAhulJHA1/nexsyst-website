# NexSyst Website

Standalone marketing site — **separate from the NexSyst CRM app**. Deploy this `website/` folder as its own Vercel project.

## Run locally

```bash
cd website
npm install
cp .env.example .env.local   # add real Resend key (never commit)
npm run dev
```

Opens at [http://localhost:5174](http://localhost:5174).

The demo form posts to `/api/demo-request`. Locally, Vite middleware handles it using secrets from `.env.local` (no `VITE_` prefix).

## Deploy to Vercel

1. Import **only** the `website` directory as the project root (or set Root Directory = `website`).
2. Framework preset: Vite (or leave auto).
3. In **Project → Settings → Environment Variables**, add (Production + Preview):

| Name | Example | Notes |
|------|---------|--------|
| `RESEND_API_KEY` | `re_…` | **Server only** — never use `VITE_` |
| `RESEND_FROM_ADDRESS` | `noreply@nexsyst.in` | Verified sender in Resend |
| `RESEND_FROM_NAME` | `NexSyst` | Optional |
| `DEMO_NOTIFY_EMAIL` | `rahul.jha@nexionautomation.com` | Inbox for leads |

4. Deploy. Form → `POST /api/demo-request` (Vercel serverless) → email via Resend.

Secrets never ship in the JS bundle. Only names without the `VITE_` prefix stay on the server.

## Build

```bash
npm run build
npm run preview
```

## Contents

- **Products** — Energy Management, Alarm Management, Audit Trail, QC Log Book, Batch Report, OEE
- **Platform** — CRM, PO, Inventory, Assets, Projects, HR/Payroll, Expense, Gate Pass
- **Services** — Industrial software, OT–IT, digital transformation, AMC, turnkey
- **SEO / AEO** — meta, OG, JSON-LD, FAQ
- **Contact** — Vercel serverless + Resend (self-contained)

# Deploying to Vercel

Two options are supported: connect the GitHub repo in Vercel (recommended) or use the Vercel CLI.

1) GitHub integration (recommended)

- In Vercel dashboard, click **New Project** → Import Git Repository → select this repository.
- Configure the project (framework: Next.js, Root: `/`).
- Add repository secrets in the GitHub repo or Vercel as described below.
- This project includes a GitHub Actions workflow at `.github/workflows/vercel-deploy.yml` that will run on push to `main`. The workflow requires these GitHub secrets:

  - `VERCEL_TOKEN` — a personal token from Vercel (Account Settings → Tokens)
  - `VERCEL_ORG_ID` — your Vercel Organization ID
  - `VERCEL_PROJECT_ID` — the Vercel Project ID (available in project settings)

Set those secrets in the repository Settings → Secrets → Actions, then push to `main` to trigger deployment.

2) Vercel CLI (quick manual deploy)

Install and login:

```bash
npm i -g vercel
vercel login
```

From the project root:

```bash
vercel --prod
```

You can also run `vercel` for an interactive preview deploy.

Notes
- The repo contains a `vercel.json` file to hint the Next.js builder. For production-grade deployment, link the repository in Vercel and set environment variables and secrets (e.g., DB, API keys).
- This repo currently uses an in-memory CRM store — for persistence configure a database (Supabase/Postgres) and update `lib/crm.ts`.

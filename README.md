# Horizon · Restart CRM

A role-aware CRM for a Restart-style employment programme. Built with React + Vite,
designed for a Supabase Postgres backend.

## Setup

```bash
npm install
cp .env.example .env   # optional — app runs in demo mode without it
npm run dev
```

Log in with any email, pick a role, type any password.

## Roles

Administrator · Manager · Team Manager · Office Manager · Operations Manager ·
Regional Manager · Employment Adviser · Recruitment · Trainer · Client ·
Wellbeing Lead · Wellbeing Officer.

Each role sees its own sidebar, KPIs, and pages.

## Stack

- React 18 + Vite
- Supabase JS client (wired in `src/lib/supabaseClient.js`)
- Semantic CSS design tokens (`src/styles/tokens.css`)

## Structure

- `src/components/` — feature-grouped components with colocated CSS
- `src/hooks/` — `useAuth`, `useKanban`, `useLocalRecords`, `useToast`
- `src/lib/` — config, roles, demo data, Supabase client
- `src/router/` — tiny hash router with `:param` support

## Accessibility

Semantic HTML, ARIA labels, keyboard focus visible, `prefers-reduced-motion`
respected, colour contrast meets WCAG AA.
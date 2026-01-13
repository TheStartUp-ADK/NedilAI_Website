# NedilAI 

Production-ready, single-page marketing site for **NedilAI** built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Supabase** (for the email waitlist).

---

## 1. Tech Stack

- **Framework**: Next.js 14 (App Router, `app/` directory, React Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with a custom dark glassmorphic design system
- **Animation**: Framer Motion
- **Backend**: Supabase (Postgres + Row Level Security)
- **Deployment Targets**: Vercel (recommended) or any Node.js host that supports Next.js

---

## 2. Local Development

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> These are **public** Supabase credentials (anon key) used from the browser. Do not put any private service-role keys here.

### Run the dev server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

---

## 3. Supabase Setup (Waitlist)

1. Create a new Supabase project.
2. In the SQL editor, run:

```sql
CREATE TABLE waitlist (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

3. Copy your **Project URL** and **anon public key** from Supabase → Project Settings → API, and paste them into `.env.local` as shown above.

The API route at `app/api/waitlist/route.ts`:

- Validates email input and normalizes it
- Prevents duplicate entries
- Handles Supabase misconfiguration gracefully without exposing errors to end users

---

## 4. Production Build & Run

Build the optimized production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Important environment configuration (production)

Set **the same environment variables** in your hosting provider:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

On Vercel, configure these under **Project Settings → Environment Variables**, then re-deploy.

---

## 5. Project Structure

```text
app/
  api/
    waitlist/
      route.ts       # Supabase-backed email waitlist endpoint
  globals.css        # Global styles, Tailwind base, glassmorphism utilities
  icon.svg           # App favicon for the browser tab
  layout.tsx         # Root layout + metadata
  page.tsx           # Main landing page (hero, value, how-it-works, waitlist)
public/              # Static assets (e.g. favicon.svg)
tailwind.config.ts   # Tailwind configuration (colors, gradients, content)
next.config.js       # Next.js configuration (React strict mode)
package.json         # Scripts and dependencies
```

---

## 6. NPM Scripts

- `npm run dev` – Start the Next.js dev server
- `npm run build` – Create an optimized production build
- `npm start` – Run the production server
- `npm run lint` – Run ESLint (Next.js defaults) against the codebase

---

## 7. Operational Notes

- **Error handling**: The waitlist API never exposes raw stack traces or configuration details to users; all errors return friendly, user-facing messages and log internal details on the server only.
- **Caching & favicon**: The app uses `app/icon.svg` as the primary favicon. If you change it, you may need to restart the dev server and hard-refresh the browser due to favicon caching.
- **Security**: Only the Supabase anon key is used client-side; all write access is limited via RLS + policies to the `waitlist` table.

This repository is intended to be deployable as-is with minimal configuration: set the two Supabase environment variables, run the migrations above, and deploy.

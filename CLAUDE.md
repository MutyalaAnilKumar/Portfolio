
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build (TypeScript errors are ignored by config)
npm run start    # Serve production build
npm run lint     # Run ESLint
```

The project uses `pnpm` for package management (pnpm-lock.yaml present). Use `pnpm` when installing new packages.

## Architecture

**Next.js 16 App Router portfolio site** with React Server Components enabled.

### Key directories

- `app/` — App Router pages and API routes
  - `page.tsx` — Main portfolio page, imports and composes all portfolio sections
  - `layout.tsx` — Root layout with font variables and metadata
  - `globals.css` — Design tokens (OKLch colors, font variables, custom keyframes)
  - `upload-resume/page.tsx` — Client page for uploading resume PDF
  - `api/upload/route.ts` — Vercel Blob API for resume file storage
- `components/portfolio/` — One file per portfolio section (navigation, hero, about, tools, services, projects, contact, footer)
- `components/ui/` — shadcn/ui component library (Radix UI primitives, do not hand-edit)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `hooks/` — `use-mobile.ts` (breakpoint detection), `use-toast.ts`

### Data flow

The site is fully static — no database. All portfolio content (projects, skills, experience) is hardcoded in the portfolio section components. The only dynamic server feature is the `api/upload` route which writes to **Vercel Blob** storage.

### Styling

- Tailwind CSS v4 via PostCSS
- Design tokens defined as CSS custom properties in `app/globals.css` using OKLch color space
- Primary: deep violet (`oklch(0.5 0.22 285)`), Accent: coral (`oklch(0.7 0.18 15)`)
- Fonts: Poppins (body, `--font-poppins`), Space Grotesk (headings, `--font-space-grotesk`), Fira Code (mono)
- Custom animations: `blink`, `draw` (SVG stroke), `fade-in` — defined in globals.css

### Component conventions

- Portfolio sections use `IntersectionObserver` for scroll-triggered animations
- Mobile nav uses shadcn `Sheet`; project details use shadcn `Dialog`
- Skills carousel (`tools.tsx`) duplicates items and pauses on hover for an infinite scroll effect
- Contact form uses `mailto:` action (no server-side form handling)
- Path alias `@/*` resolves to the repo root

### Config notes

- `next.config.mjs`: `ignoreBuildErrors: true` for TypeScript, images unoptimized (remote devicons from `cdn.jsdelivr.net`)
- `components.json`: shadcn style `new-york`, neutral base, Lucide icons

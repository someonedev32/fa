# Flamur Ahmeti — Premium Portfolio (PRD)

## Original Problem Statement
Build a premium one-page fullscreen portfolio/CV website inspired by modern developer portfolios,
with a cleaner cinematic UI and smoother motion design than www.flamurahmeti.com.
Goal: feel like a senior software engineer personal brand page — elegant, dark, animated, immersive, memorable.

## Architecture
- **Frontend**: React 18 (CRA) + TailwindCSS + Framer Motion + lucide-react
- **Backend**: FastAPI (minimal — `/api/health` only; portfolio is fully static)
- **Database**: MongoDB (present in stack, currently unused)
- **Deployment target**: Vercel-ready (static build via `yarn build`)

## User Persona
Visitors are recruiters, founders, and enterprise clients evaluating a senior full-stack
engineer for SaaS, e-commerce, mobile, or AI engagements. They land, judge taste in seconds,
and need a frictionless contact path.

## Core Requirements (static)
1. Single-page, fullscreen hero experience
2. Dark futuristic UI (matte black #050505, charcoal surfaces)
3. Cinematic ambient animations (mesh gradient, particles, grid, grain, cursor glow)
4. Sections: Hero → About → Projects → Tech Stack → Socials → Contact → Footer
5. Magnetic CTA buttons, blur-to-focus reveals, staggered letter animation on the name
6. mailto:contact@flamurahmeti.com primary contact
7. Real projects: Shopify Apps + iOS Apps (10+)
8. Fully responsive (mobile + desktop)

## What's Been Implemented (Jan 2026)
- ✅ Modern loading transition (1.6s) with shimmer line + monogram
- ✅ Animated mesh gradient background with two slow-drifting orbs
- ✅ Soft cyber grid + grain overlay for cinematic depth
- ✅ 22 floating CSS particles
- ✅ Mouse-follow radial cursor glow (desktop only)
- ✅ Hero: per-letter staggered shimmer reveal of "FLAMUR AHMETI"
- ✅ Rotating role text (Software Engineer / Full Stack Developer / AI & Automation Builder)
- ✅ Status pill (Available for select work · 2026), brand monogram, location/timezone
- ✅ Scroll hint with looping indicator line
- ✅ Magnetic buttons with spring physics (Framer Motion)
- ✅ About section with 4-stat grid
- ✅ Projects section with 2 glass cards (Shopify App System, iOS Applications) — hover glow, underline reveal, tech pills, external links with target=_blank
- ✅ Tech stack: 16 animated pills
- ✅ Socials: 6 channels (Shopify, App Store, GitHub, LinkedIn, X, Web)
- ✅ Contact: glass CTA card with mailto button + copy-email button (with copied state)
- ✅ Footer with year and location signature
- ✅ Custom SVG favicon
- ✅ All interactive elements have unique `data-testid` attributes
- ✅ Tested end-to-end (frontend) — 14/14 acceptance criteria pass on desktop & mobile

## Prioritized Backlog
### P1
- Update GitHub / LinkedIn / X social links to real handles once user provides them
- Add `react-helmet-async` or `<meta og:image>` for richer link previews when shared

### P2
- Add Vercel deployment instructions / `vercel.json`
- Light/dark theme toggle (currently dark-only by design)
- Add a 3rd or 4th project once user shares more case studies
- Optional: i18n (Albanian / English) toggle for local visitors

### P3
- Replace 1.6s loader with a true asset-aware preloader
- WebGL/Three.js variant of the mesh gradient for premium "wow" mode
- Add `prefers-reduced-motion` media query overrides

## Next Tasks
- Await user feedback on visual direction
- Collect real GitHub/LinkedIn/X URLs
- Generate production build & document Vercel deploy

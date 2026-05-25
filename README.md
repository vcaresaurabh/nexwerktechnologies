# NexWerk Technologies — Website

Corporate website for **NexWerk Technologies**, a full-service IT company based in Ghaziabad, U.P., India.

## Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **UI**: Tailwind CSS v4, shadcn/ui
- **Animation**: Framer Motion 12
- **Language**: TypeScript

## Getting Started

```bash
npm install
npm run dev       # dev server at localhost:3000
npm run build     # production build
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home (hero, services, about, testimonials, contact) |
| `/services` | Full services listing with process section |
| `/about` | Company story, team, milestones |
| `/case-studies` | Client success stories |
| `/blog` | Articles & insights |
| `/careers` | Open positions |
| `/contact` | Contact form + FAQ |

---

## Completed Tasks

### Phase 1 — Initial Build
- Multi-page Next.js 16 site with 14 static routes
- Responsive layout with Header, Footer, PageHero components
- Sections: Hero, Services, About, Testimonials, Contact
- Blog, Careers, Case Studies, legal pages

### Phase 2 — Bug Fixes (Tailwind v4 + Framer Motion)
- Fixed hero text invisible: replaced Framer Motion stagger variant propagation with direct per-element `initial`/`animate` props (React 19 Strict Mode incompatibility)
- Fixed all `bg-gradient-to-*` → `bg-linear-to-*` (Tailwind v4 rename) across 10+ files
- Fixed `flex-shrink-0` → `shrink-0` (Tailwind v4 removal) across 7 files
- Fixed `-left-[2.85rem]` → `left-[-2.85rem]` (Tailwind v4 canonical format)

### Phase 3 — Hero Background Animation + Contact Info
- Replaced static blur blobs with 5 animated Framer Motion aurora orbs + animated dot-grid overlay
- Updated phone: `+91 79828 95936` and address: `F-115, Sector 12, New Vijay Nagar, Ghaziabad, U.P. 201009` in Contact section and Footer

### Phase 4 — Hero Background Image
- Added royalty-free data-center background image (Unsplash) to hero section
- Applied dark gradient overlay (`from-slate-950/92 via-blue-950/88`) for text readability
- Animated blue color sweep layer for depth
- Updated all hero text to white/light colors for dark background contrast
- Retain floating tech cards, animated dot-grid texture, and per-element entrance animations

### Phase 5 — Header, Cards, Marquee Polish
- **Header**: Dark semi-transparent background (`bg-slate-950/65 backdrop-blur-md`) when not scrolled → white on scroll; nav text white on dark, slate on white; Logo gets `dark` prop for white text on dark bg
- **Logo**: Added `dark?: boolean` prop — controls "Nex" text and "Technologies" subtitle color
- **Floating cards**: Redistributed all 6 positions (3L/3R) for clean vertical spacing, no overlap; all start below the 72px header (min top: 13-14%)
- **Managed IT card**: Changed image from `1558494949-ef010cbdcc31` (same as hero bg) to `1629654297299-c8506221ca97` (server rack with blue lighting)
- **Hero content**: `pt-28` → `pt-36` so headline never clips behind header
- **TechMarquee**: Replaced two independently-animated `<ul>` elements with one `.marquee-track` div containing both lists; CSS keyframes now go `translateX(0) → translateX(-50%)` so both lists move as a single unit — no desync

### Phase 6 — UI Polish, Fonts & Production Readiness
- **Floating hero cards**: Replaced 6 Unsplash-image cards with glassmorphism stat/metric cards — icon + colored accent strip + "LIVE" indicator on uptime/web-dev cards; no external image dependencies
- **Typography**: Added `Space_Grotesk` as display font via `--font-display` CSS variable; all `h1`–`h4` headings auto-use Space Grotesk via global CSS rule; body text stays Inter
- **Mobile overflow**: Added `overflow-x: hidden` to `<html>` element — eliminates blank right-side space on mobile
- **FloatingCard type**: Updated interface — removed `imageId`, added `icon`, `stat`, `color`, `live` fields
- **Build**: 14/14 static routes, clean TS check

---

## Contact

- **Phone**: +91 79828 95936
- **Email**: contact@nexwerktechnologies.com
- **Address**: F-115, Sector 12, New Vijay Nagar, Ghaziabad, U.P. 201009

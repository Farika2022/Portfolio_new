# Farika — Developer Portfolio

A polished, recruiter-ready single-page portfolio with a warm-dark design, a fully editable content config, and tasteful Motion animations. Dark-first with a working light toggle.

## Design system (`src/styles.css`)
- Warm near-black background, warm off-white for light mode and card panels
- Coral — accent, hover, active states, highlights, email CTA
- Teal — links, success states, tech tags
- Amber — code-snippet accents, hover glows, timeline connector
- Monospace font for code snippets and the terminal easter egg; clean sans for body/headings
- All colors as `oklch` semantic tokens with `.dark` class variants; honor `prefers-reduced-motion`

## Sections (in order)
1. **Hero** — Name + headline "I build interfaces that think — and feel.", subline, decorative real code snippet with amber glow, teal links, coral email CTA
2. **Projects** — Expandable cards array (Overseas Voyagers wired to https://overseas-voyages.vercel.app/, plus editable placeholders); amber "featured" label, coral border-glow spotlight on hover
3. **Tech stack** — Logo/icon grid with animated proficiency dots
4. **Experience** — Timeline with coral dots and an amber connector that draws on scroll
5. **About** — Warm off-white panel with a styled, swappable photo placeholder (replace later by editing config) + bio
6. **Education** — Minimal block
7. **Contact** — Teal links, coral email CTA, no contact form (direct links only)
8. **Footer** — Terminal easter egg that types out `$ whoami → farika`

## Developer-craft details
- Dark/light theme toggle (React state + localStorage, animated sun/moon morph)
- Custom coral-dot cursor on desktop (trails pointer, scales on hover)
- GitHub contribution-graph strip as a decorative visual element (links to https://github.com/Farika2022)

## Animations & UI effects (Motion + MagicUI-style, reduced-motion aware)
- Staggered scroll reveals for cards and timeline items
- Hero typewriter headline, coral gradient name highlight, animated code background
- Magic-card spotlight + lift on project cards, shimmer/glow on CTAs
- Animated proficiency dots, timeline draw-in, contribution graph fades cell-by-cell, terminal types out

## Editable content (`src/content/portfolio.ts`)
A single typed config file holding hero text, projects array (append to add future projects), skills, experience, about + photo path, education, contact, social links, and footer easter-egg text. All visible copy comes from here.

## Technical notes
- Build on existing TanStack Start home route (`src/routes/index.tsx`); add components under `src/components/` and a `ThemeProvider` hook under `src/hooks/`
- Motion (Framer Motion) for animations; inline SVGs / lucide-react for icons
- SEO `head()` on the route: title < 60 chars with keyword, meta description, single H1, og tags
- No backend, no auth, no database, no contact form

## Decisions made on your behalf
- Photo: styled placeholder block wired into the About panel — swap it later by setting the photo path in the config (upload a PNG/JPG anytime and I'll drop it in)

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite, localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint
```

No test suite is configured. Deploy target is Vercel (see `vercel.json`).

## Architecture

Single-page React 18 app (JSX, no TypeScript) built with Vite. All content is rendered in `src/App.jsx` as a vertically stacked set of sections. There is no routing — `react-router-dom` is installed but not yet used.

**Section order (top → bottom):**
`Navbar` → `Hero` → `Manifesto` → `BentoGrid` → `Security` → `Expansion` → `CTA` → `Footer`

**Theme system:** Dark/light mode is managed in `App.jsx` state via `isDark`, persisted to `localStorage` under the key `cnhora-theme`. Dark mode is activated by toggling the `dark` class on the root `<div>`. The `toggleTheme` handler is passed down only to `Navbar`.

**Styling:** Tailwind CSS v3 with `darkMode: "class"`. The design system uses Material Design 3-style color tokens defined in `tailwind.config.js` (e.g. `primary`, `secondary`, `surface`, `on-surface`, etc.). CSS custom properties in `src/index.css` mirror these tokens and override them for dark mode. Reusable component classes (`glass-nav`, `liquid-orange-gradient`, `display-hero`, `headline-section`, `tonal-stack-low`, `no-line-card`) are defined in the `@layer components` block in `src/index.css`.

**Typography:** Plus Jakarta Sans (loaded via Google Fonts in `index.html`) — mapped to Tailwind font families `headline`, `body`, and `label`.

**Animations:** Framer Motion is used for entry animations and hover/tap interactions across all sections.

**Component exports:** `src/components/index.js` and `src/components/ui/index.js` are barrel files for re-exports. `src/hooks/index.js` and `src/utils/index.js` exist as stubs for future use.

**SEO:** `react-helmet-async` with `<HelmetProvider>` in `src/main.jsx`; page `<title>` and `<meta>` description are set in `App.jsx`.

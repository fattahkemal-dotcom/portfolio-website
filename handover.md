# Handover — Kemal Portfolio Website

**Last updated:** 2026-10-04 — Phase 1 (Foundation) complete

**State:**
- Project rebuilt from scratch as an Astro + TypeScript + Tailwind v4 site, per PRD.md and DESIGN-SYSTEM.md (both committed at repo root — DESIGN-SYSTEM.md is the source of truth for all visual decisions).
- Phase 1 (PRD §10.1) done:
  - Astro scaffolded (minimal template, strict TS), Tailwind v4 via @tailwindcss/vite.
  - src/styles/tokens.css — exact copy of DESIGN-SYSTEM.md §13 tokens.
  - src/styles/global.css — imports tokens + Tailwind, maps colors/radii into the Tailwind theme via @theme inline, defines named type-scale classes (.text-display, .text-h1, ... .text-caption) and hairline/container/skip-link utilities.
  - Hanken Grotesk Variable self-hosted via @fontsource-variable/hanken-grotesk (no Google Fonts network request).
  - Layout: BaseLayout.astro, Nav.astro (scroll hairline, mobile full-screen overlay menu), Footer.astro (oversized clipped wordmark), Container.astro, Section.astro (background prop: paper/paper-2/ink).
  - UI atoms: Button.astro (primary/primary-ink/text/text-ink variants), Tag.astro, Metric.astro, FilterChips.astro (toggles aria-pressed + dispatches a "filterchange" CustomEvent for Phase 3 to wire up).
  - src/data/site.ts — nav links, contact (email/WhatsApp/LinkedIn placeholders), footer note. All marked [placeholder] where real values are needed from Kemal.
  - /styleguide page — dev only (redirects to /404 when `import.meta.env.PROD`), renders every color token, the full type scale, spacing scale, radius scale, and every UI component.
  - src/pages/index.astro — minimal stub (full 7 home sections are Phase 2, not built yet).
  - src/pages/404.astro — minimal placeholder (Phase 4 gives it real design).
- Verified: `npx astro check` (0 errors), `npm run build` (succeeds, confirms /styleguide correctly becomes a redirect stub in prod), dev server smoke-tested in Chrome — colors/type/components all render correctly, filter chip active-state toggle works.
- Pushed to GitHub: https://github.com/fattahkemal-dotcom/portfolio-website (built in a git worktree, merged back and pushed from main).

**Next steps (Phase 2 — Home, per PRD §10.2):**
1. Build all 7 home sections with placeholder data: Hero (+ Growth System Map — the signature animated component, DESIGN-SYSTEM.md §8), Selected Work, About & Capabilities, Approach, Stack, Experience, Contact.
2. Build `src/components/system/SystemMap.astro` — the one animated element on the site (line draw + staggered node fill, prefers-reduced-motion respected).
3. Expand src/data/site.ts with real section copy; add src/data/stack.ts, experience.ts, metrics.ts per PRD §9.
4. Confirm responsive behavior down to 360px width (this session's browser-resize check for mobile viewport didn't reliably reflect in screenshots — verify manually or with a real device/DevTools next time).

**Decisions / gotchas:**
- `npm create astro@latest .` ignored the `.` target and scaffolded into a randomly-named subfolder (`ecliptic-eclipse`) despite the dot arg — had to move files up manually. Known quirk with `--yes` flag; worth passing `--template minimal <dirname>` explicitly if this comes up again.
- Did NOT use Tailwind utility classes for typography (e.g. chaining `text-small font-medium`) because Tailwind v4's cascade-layer ordering between a custom `@layer components` block and Tailwind's own `utilities` layer was ambiguous given how `@theme`/`@import "tailwindcss"` register layers. Used Astro scoped `<style>` blocks with direct `var(--token)` references in components instead (Button, Tag, Metric, FilterChips, Nav, Footer) — more verbose but unambiguous and still 100% token-driven.
- Tailwind's default spacing scale conflicts with the design system's named, non-multiplier `--space-1..11` scale — didn't remap Tailwind's `--spacing`; spacing is applied via CSS vars directly (either in scoped `<style>` or `style="padding: var(--space-5)"`) rather than Tailwind spacing utilities. Keep doing this in Phase 2 for consistency.
- `/styleguide` gating uses `Astro.redirect("/404")` guarded by `import.meta.env.PROD`, which runs at build time (static output) — confirmed the built `dist/styleguide/index.html` is a redirect stub, not real content.
- gh CLI full path is `C:\Program Files\GitHub CLI\gh.exe` — not yet on PATH in already-open shells from before its install.

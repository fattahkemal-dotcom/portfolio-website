# Handover — Kemal Portfolio Website

**Last updated:** 2026-10-05 — Hero spec revised (CTAs removed, portrait becomes an alpha cutout). Spec only; code not yet changed.

**State:**
- Project is an Astro + TypeScript + Tailwind v4 site, per PRD.md and DESIGN-SYSTEM.md (both at repo root — DESIGN-SYSTEM.md is the source of truth for all visual decisions).
- Phase 1 (Foundation) complete — see prior entries in git log for details (tokens, layout shell, UI atoms, /styleguide).
- Hero section built (first piece of Phase 2 — Home), based on a reference PDF the user supplied (`Documents\project\Portfolio Kemal\website-portfolio-references.pdf`, the "Finox" Webflow template): light large display headline, rotated side label, top stat row, portrait bleeding to the viewport edge, year + scroll cue, all above the Growth System Map as its own row.
  - `src/components/sections/Hero.astro` — the section.
  - `src/components/system/SystemMap.astro` — the signature animated element: CSS `scale()` line-draw + staggered node fade-in, respects `prefers-reduced-motion`, vertical layout under 768px, `static` prop for future case-study reuse. **Working well, out of scope for the current hero revision.**
  - `src/data/site.ts` — hero copy + system-map node data, all placeholder content.
  - `src/pages/index.astro` renders `<Hero />`.
- **2026-10-05 — hero spec revised, implementation still pending.** Client feedback: (1) get the hero closer to the reference, (2) use the portrait with no background, (3) drop both hero CTA buttons. DESIGN-SYSTEM.md §6.1 was rewritten and §5.3 / §7.1 / §9 / §10 / §12 / §13 touched; PRD.md §4.1 / §7 / §8 updated. **No `src/` file has been changed yet — the built hero still shows the old CTAs, the bone box and `/images/foto-kemal.svg`.**
- Real portrait asset now in repo: `src/assets/images/kemal-portrait.png`, 1440×2560, chest-up, verified true alpha (0 outside subject, 255 on subject).

**Next steps:**
1. **Implement the revised hero** per DESIGN-SYSTEM.md §6.1 (the spec is written to be implementable without further design decisions):
   - Delete `.hero-lead-row`, `.hero-ctas`, the `Button` import, and `hero.ctaPrimary` / `hero.ctaSecondary` from `src/data/site.ts`.
   - Add the short vertical hairline rule between the lead line and the year/scroll row.
   - Replace the portrait: `astro:assets` import of `kemal-portrait.png`, no bone background, **delete `.hero-portrait-overlay`** (a multiply layer over a transparent PNG repaints the bone rectangle — this is the main trap), apply `--hero-cutout-filter` to the `<img>`.
   - `align-self: end` so the figure's torso is cut by the hairline above the System Map; height-driven sizing via `--hero-cutout-h*`; right edge 24px past the viewport edge; verify by eye that the face/glasses/near shoulder are never cropped.
   - Add the new hero tokens to `src/styles/tokens.css` (§13).
   - Grid goes 7fr/5fr → 8fr/4fr at ≥1024px.
2. Verify the hero's mobile layout (<1024px: rotated label hides, cutout stacks below text, right-aligned not centered). Use real DevTools device emulation — window-resize screenshots were unreliable last session.
3. Build the remaining 6 home sections (Selected Work, About & Capabilities, Approach, Stack, Experience, Contact) — placeholder data until Kemal supplies real copy and numbers.
4. When real case studies exist (Phase 3), wire `systemMapNodes[].href` to real project slugs.

**Decisions / gotchas:**
- **Hero CTAs are gone on purpose.** Both were duplicates of nav affordances (`Book a call` button, `Work` link). `See selected work` is not relocated: making `Scroll down ↓` a link would put an arrow on a link label, which §12 forbids. Tracking consequence (documented in PRD §7): `cta_click` never fires with `cta_location: "hero"` — not a bug.
- **No backdrop behind the cutout, ever.** The bone block + bone multiply overlay was a print-mount device for an opaque rectangular photo. With a true cutout it would redraw the rectangle and read as a card. Tone now comes from one alpha-safe filter chain on the image; `mix-blend-mode` over alpha is banned (added to §9 and §12).
- **Astro scoped-CSS cross-component gotcha (important, bit twice already):** a `<style>` block in `ComponentA.astro` can only reach elements `ComponentA` renders directly in its own template. If `ComponentA` wraps a child component (e.g. `<Container class="hero-grid">`) and styles the class ON that child's root element, the scoped selector silently never matches. Fix: wrap that one selector in `:global(...)`. Hit this exact bug with `.hero-grid` (two-column layout silently stayed one column, portrait invisible). **Audit any component that passes a styling class into a wrapper component's own tag** (Container, Section) before assuming a layout bug is something else.
- **Local build/dev flakiness specific to `.claude/worktrees/*` paths:** `npm run build` / `npm run dev` intermittently fail inside a worktree with `Tsconfig not found astro/tsconfigs/strict` plus a native `UV_HANDLE_CLOSING` crash (Vite 8 rolldown resolver vs. the bare-specifier tsconfig `extends`). Byte-identical source built fine outside the worktree — environment/path-specific, not a real config problem. **Workaround already applied:** `tsconfig.json` inlines the `strict` preset's options. Build/dev work reliably from the main checkout (`C:\Users\fatta\Projects\portfolio-website`). If it resurfaces, verify from the main checkout first; don't re-debug the root cause.
- Tailwind v4 cascade-layer / spacing-scale notes from Phase 1 still apply — direct `var(--token)` references in scoped `<style>`, not chained Tailwind utilities, for anything typography/spacing related.
- gh CLI full path: `C:\Program Files\GitHub CLI\gh.exe` (may not be on PATH in older shells).

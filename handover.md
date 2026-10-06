# Handover — Kemal Portfolio Website

**Last updated:** 2026-10-07 — Implementation pass: built the §6.1 hero cutout revision and the new Stack section in code.

**State:**
- Project is an Astro + TypeScript + Tailwind v4 site, per PRD.md and DESIGN-SYSTEM.md (both at repo root — DESIGN-SYSTEM.md is the source of truth for all visual decisions).
- Phase 1 (Foundation) complete — see git log (tokens, layout shell, UI atoms, /styleguide).
- Hero section built (first piece of Phase 2 — Home), based on a reference PDF the user supplied (`Documents\project\Portfolio Kemal\website-portfolio-references.pdf`, the "Finox" Webflow template): light large display headline, rotated side label, top stat row, portrait bleeding to the viewport edge, year + scroll cue, all above the Growth System Map as its own row.
  - `src/components/sections/Hero.astro` — the section. **Currently implements the 2026-10-05 spec; the 2026-10-07 §6.1 revision below is NOT implemented yet.**
  - `src/components/system/SystemMap.astro` — the signature animated element: CSS `scale()` line-draw + staggered node fade-in, respects `prefers-reduced-motion`, vertical layout under 768px, `static` prop for future case-study reuse. Working well, out of scope.
  - `src/data/site.ts` — hero copy + system-map node data, all placeholder content.
  - `src/pages/index.astro` renders `<Hero />`.
- **2026-10-07 — spec revisions written (DESIGN-SYSTEM.md + PRD.md only, no src/ changes).**
  - **§6.1 hero, third revision.** Root cause of the client's "photo too small / wrong position": the asset's subject only occupies the lower ~70% of its 1440×2560 canvas (measured alpha box `x 296…1344`, `y 762…2560` = 1048×1798), so the old canvas-driven `height: clamp(400px, 64svh, 760px)` rendered a figure of only ~404×236 at 1440×900. Fixes specced: a subject-tight crop box on `.hero-portrait` (`aspect-ratio: 1048/1798`, `overflow: hidden`, img at `width: 137.40%; margin-left: -28.24%; margin-top: -72.71%`); `--hero-cutout-h` **redefined to mean visible figure height** with new values `clamp(480px, 72svh, 860px)` / `-md clamp(380px, 52svh, 560px)` / `-sm clamp(300px, 44svh, 420px)`; width = `min(h × 1048/1798, 100% + bleed)`; grid 8fr/4fr → **7fr/5fr** at ≥1024px with `min-height: var(--hero-cutout-h)`; headline `14ch → 11ch`, lead `44ch → 40ch`; `--hero-cutout-bleed` token (24/16/12px) replaces the hard-coded space tokens in the breakout math. Net ≈1.6× linear / 2.6× area. Kept unchanged: no backdrop, no frame, full color/no filter, `align-self: end` die-cut at the hairline.
  - **§6.4 + §7.8 Stack section, fully respecced** (the old "comma-separated text rows, no logos" idea is replaced, never built). Four equal `paper-2` cards (`radius-md`, `--space-6` padding) on a `paper` section, 4 cols ≥1024 / 2 cols 768–1023 / 1 col below, gap `--space-5`. Card = `text-h3` heading + hairline + a single column of tool rows; each row = a 56×32 `radius-sm` logo-placeholder chip (1px `line`, `paper` fill, empty until real logos) + the tool name in `text-caption` olive. Equal height via grid `align-items: stretch`, never `min-height`.
  - **§12 overrides documented** (not silently broken): narrow carve-outs added to "logo walls for tools" and "uniform grids of identical rounded cards", both scoped to Stack and conditioned.
  - Small additive edits: §2.3 note, §3 gained the `ink on paper-2` pairing row, §4.2/§5.3 Use columns mention Stack, §9/§10 notes, §13 tokens.css updated (hero tokens + a `--stack-*` block + new media-query overrides). §6.4 Contact was renumbered to **§6.5** to make room for Stack; PRD cross-references to DESIGN-SYSTEM sections were corrected to the real numbers while editing.
  - PRD: §4.1 portrait bullet, §4.5 rewritten with the verbatim client tool list, §7 and §8 notes, §11 exception clause.

**Next steps:**
1. Build the remaining home sections (Selected Work, About, Approach, Experience, Contact) and wire them into `src/pages/index.astro` between/after `<Hero />` / `<Stack />` in PRD §4 order.
2. When real case studies exist (Phase 3), wire `systemMapNodes[].href` to real project slugs.
3. Ask Kemal for real tool logo assets; the chip is designed so they drop in one at a time without disturbing the grid.

**Decisions / gotchas:**
- **New gotcha found while implementing §6.1 (2026-10-07):** `global.css`'s base-layer rule `img, svg { max-width: 100% }` silently clamps any `<img>` width set in percent above 100%, even from an unlayered component `<style>` block (layers don't help here — `max-width` wins over `width` in used-value resolution regardless of cascade origin). This broke the `.hero-portrait-img` crop-box math (`width: 137.40%`) until `max-width: none` was added directly on `.hero-portrait-img`. Any future component that needs an `<img>` wider than its container (crop boxes, bleed images) will hit this — add the same override.
- **The hero asset has a big empty alpha band at the top.** Subject box is 1048×1798 inside a 1440×2560 canvas. Anything that sizes the raw canvas will undersize the figure by ~30%. This is measured, recorded in §6.1, and should not be re-derived by eye.
- **`overflow: hidden` on `.hero-portrait` is allowed now** and is not the banned "backdrop block behind a cutout" — the box paints nothing, it only trims transparent pixels. The 2026-10-05 line forbidding it is explicitly superseded in §6.1.
- **The hero is allowed to exceed the fold now.** The System Map sitting below the fold on a 900px laptop is intended; don't "fix" it by shrinking the photo.
- Specced `min-height: auto` below 1024px on `.hero-grid` — this should also fix the known mobile gap between the footer row and the portrait (previously caused by the blanket `min-height: 60svh`).
- **Hero CTAs are gone on purpose.** Both were duplicates of nav affordances. `cta_click` never fires with `cta_location: "hero"` — not a bug.
- **No backdrop behind the cutout, ever**, and **no filter on it** (client override 2026-10-05, still in force). `mix-blend-mode` over alpha is banned (§9, §12).
- **Astro scoped-CSS cross-component gotcha (bit twice already):** a `<style>` block in `ComponentA.astro` only reaches elements `ComponentA` renders in its own template. Styling a class on a *child component's* root element (e.g. `<Container class="hero-grid">`) silently never matches. Fix: `:global(...)` on that selector. Hit this with `.hero-grid`. The Stack section will hit it too if the card grid class is passed into `Container`/`Section`.
- **Local build/dev flakiness specific to `.claude/worktrees/*` paths:** `npm run build` / `npm run dev` intermittently fail inside a worktree with `Tsconfig not found astro/tsconfigs/strict` plus a native `UV_HANDLE_CLOSING` crash. Workaround already applied: `tsconfig.json` inlines the `strict` preset. Build/dev reliably from the main checkout (`C:\Users\fatta\Projects\portfolio-website`). Don't re-debug.
- Tailwind v4 cascade-layer / spacing-scale notes from Phase 1 still apply — direct `var(--token)` references in scoped `<style>`, not chained Tailwind utilities, for anything typography/spacing related.
- gh CLI full path: `C:\Program Files\GitHub CLI\gh.exe`.

**Preferences:**
- DESIGN-SYSTEM.md is followed *literally* by whoever builds next, so specs must give exact values, not intent. When a decision is reversed, append a dated revision-history entry and keep the superseded text marked as such (the §6.1 pattern) rather than deleting it.
- Client instructions override the §12 anti-slop checklist, but the override must be written down and narrowed, never silent.

# Handover — Kemal Portfolio Website

**Last updated:** 2026-10-07 — §6.1 hero revision **(d)** written to spec (horizontal sizing rebuilt). **Spec only — `Hero.astro` and `tokens.css` are still at revision (c) and must be updated.**

**State:**
- Astro + TypeScript + Tailwind v4 site. `DESIGN-SYSTEM.md` (repo root) is the source of truth for all visual decisions; `PRD.md` is product scope.
- Phase 1 (Foundation) complete. Phase 2 (Home) in progress: Hero + SystemMap + Stack built.
- `src/components/sections/Hero.astro` + `src/styles/tokens.css` implement §6.1 revision **(c)** (= (b) plus the margin-alignment fix). **Revision (d) is specified but NOT implemented.** The delta is enumerated in DESIGN-SYSTEM.md §6.1 "Implementation note" (9 items) and the full token block is in §13.
- `src/components/system/SystemMap.astro` — the signature animated element. Working, out of scope.
- `src/data/site.ts` — hero copy is placeholder (`headline: "Hello"`, `lead: "I'm Kemal a Senior Growth Performance"`). No data change needed for (d).

**2026-10-07 (d) — hero spec revision, what changed (DESIGN-SYSTEM.md §5.2, §6.1, §9, §12, §13; PRD §4.1, §8):**
- Client: *"make this to closely on the left container… very far GAP from the left container and right container."* Measured live at **1440×722**: 240px of dead space between `.hero-text` (right edge 774) and `.hero-portrait` (left edge 1014), and the photo's right edge at 1389 — **51px short** of the intended 24px bleed past the viewport edge.
- **Root cause 1:** `.hero-portrait`'s width was `calc(var(--hero-cutout-h) * 1048 / 1798)` — a pure function of viewport **height** — inside a fixed `5fr` track, right-anchored. Shorter window → narrower box → its *left* edge moves right → bigger gap. Real laptop windows are short; (b)'s worked examples assumed ~full-screen height.
- **Root cause 2:** the ≥1320px `margin-right: calc(-50vw + var(--container-max)/2 - bleed)` omits `--container-pad` (48px) and mixes `50vw` (counts the scrollbar) with the container's layout box (doesn't) → the bleed never landed.
- **The fix:** width is now the **primary** dimension, derived from the space beside the text (`--hero-figure-slot`, 45% of the band from the container's left content edge to viewport-right+bleed); height is **derived** from the width and capped by the row (`--hero-figure-h`); the box leaves the grid and is `position: absolute; bottom: 0; right: calc(-1 * var(--hero-cutout-bleed))` inside `.hero-content`; the **text column's width is derived from the figure's** (`--hero-figure-reserve` + `--hero-figure-gap`) so the gutter is a constant **64px at every viewport**. 7fr/5fr is retired at ≥1024px; the ≥1320px media block in `Hero.astro` is deleted outright.
- **The key discovery:** the three `.hero-portrait-img` percentages (137.40% / -28.24% / -72.71%) resolve against the box's **width only**, so the crop box's aspect ratio can vary freely — height only decides how far down the torso `overflow: hidden` cuts. **They are unchanged.** `--hero-figure-ar-max: 1` ("never wider than tall") is the head-safety rail and the only tunable.
- Numbers: 1440×722 → **586×586** (was 375×643), gap 64, right edge 1464. 1440×900 → **610×764** (was 445×764, same height, 1.37× wider). 1024×1366 → **453×777** (was 431×739). 2560×1440 → 610×1040, i.e. (b)'s max figure unchanged.
- **Side effects recorded:** §9's "wider head-and-shoulders cutout" asset request is **withdrawn** (the variable crop window produces it from the existing file); it is replaced by a *resolution* request (subject alpha box ≥1800px wide) which alone would let `--hero-figure-w-max: 610px` rise. §5.2 gained a corollary banning `50vw`-built bleeds. §12 gained an entry on unexplained voids. New token `--hero-text-max: 720px` keeps the 70–80% headline-fill band valid ≥1500px wide.
- Deliberately NOT touched: row height (`--hero-row-h` = (b)'s `--hero-cutout-h` value, renamed) and therefore crown-64px-below-nav, scroll cue on the fold, die-cut hairline at `100svh`, System Map position; the cutout/no-backdrop/no-filter decisions; the left rail; everything <1024px.

**Next steps:**
1. **Implement revision (d)** in `src/styles/tokens.css` + `src/components/sections/Hero.astro` per §6.1's 9-item implementation note. No markup change is required (`.container` sets no `position`, so the absolute portrait resolves against `.hero-content`). Then run §6.1's five acceptance checks in a real browser at **1440×722, 1440×900, 1024×1366** and ≥1920 — check 2 (64px gap) and check 4 (the die-cut must fall below the collarbone, never at the chin) are the ones that can fail.
2. If check 4 fails, lower `--hero-figure-ar-max` (1 → 0.85 → 0.75) and nothing else; the 64px gap is unaffected by that token.
3. Re-measure LCP (PRD §8) — the figure is wider now.
4. Build the remaining home sections (Selected Work, About, Approach, Experience, Contact) in PRD §4 order.
5. **Raise with the client:** §8.2's System Map draw animation runs on page load but the Map starts at the fold, so the animation may be spent unseen. An intersection trigger is the obvious fix; §8 was out of scope for all hero revisions.
6. **Asset request for Kemal (changed):** no longer a wider crop — a **higher-resolution** re-export of the same shoot (subject alpha box ≥1800px wide vs today's 1048px). Nice-to-have, not a blocker.
7. Delete `scratch-revert-note.txt` at the repo root — created in error on 2026-10-07, no content, nothing references it.
8. When real case studies exist (Phase 3), wire `systemMapNodes[].href` to real project slugs.
9. Ask Kemal for real tool logo assets; the Stack chip is designed so they drop in one at a time.

**Decisions / gotchas:**
- **The crop percentages depend on the box's WIDTH, not its aspect ratio.** Percentage margins resolve against the containing block's inline size, so a variable-height crop box is free. This is what unlocked revision (d) — and it means any future resize must only ever leave the *width* math intact.
- **Never build a right-edge bleed out of `50vw - var(--container-max)/2`.** It omits `--container-pad` and disagrees with the layout box about the scrollbar. Use `position: absolute; right: <negative bleed>` against a full-width relative wrapper. Written into §5.2 as a rule.
- **`global.css`'s `img, svg { max-width: 100% }` silently clamps any `<img>` width set above 100%**, even from an unlayered component `<style>` block. `max-width: none` on `.hero-portrait-img` is load-bearing.
- **The hero asset has a big empty alpha band at the top.** Subject box is 1048×1798 inside a 1440×2560 canvas. Measured, recorded in §6.1, do not re-derive.
- **`overflow: hidden` on `.hero-portrait` is allowed** and is not the banned "backdrop block behind a cutout" — the box paints nothing.
- **`--hero-row-h` is coupled to `--nav-h` and `.hero`'s `padding-top`.** Changing either changes the row and therefore the figure. Intended, but not editable casually.
- **The hero is allowed to exceed the fold.** The System Map below the fold is intended; don't "fix" it by shrinking the photo.
- **Hero CTAs are gone on purpose.** `cta_click` never fires with `cta_location: "hero"` — not a bug.
- **No backdrop behind the cutout, ever**, and **no filter on it** (client override 2026-10-05, still in force). `mix-blend-mode` over alpha is banned (§9, §12).
- **Astro scoped-CSS cross-component gotcha (bit twice):** a `<style>` block only reaches elements that component renders itself. Styling `.hero-grid` (a `Container` root class) needs `:global(...)`.
- **Local build/dev flakiness specific to `.claude/worktrees/*` paths:** `npm run build` / `npm run dev` intermittently fail with `Tsconfig not found astro/tsconfigs/strict` plus a native `UV_HANDLE_CLOSING` crash. `tsconfig.json` inlines the `strict` preset as a workaround. Build/dev from the main checkout (`C:\Users\fatta\Projects\portfolio-website`). Don't re-debug.
- Tailwind v4 cascade-layer / spacing-scale notes from Phase 1 still apply — direct `var(--token)` references in scoped `<style>`, not chained Tailwind utilities, for anything typography/spacing related.
- gh CLI full path: `C:\Program Files\GitHub CLI\gh.exe`.

**Preferences:**
- DESIGN-SYSTEM.md is followed *literally* by whoever builds next, so specs must give exact values, not intent. When a decision is reversed, append a dated revision-history entry and keep the superseded text marked as such (the §6.1 pattern) rather than deleting it. Same-day revisions get `(a)` / `(b)` / `(c)` / `(d)` suffixes.
- Client instructions override the §12 anti-slop checklist, but the override must be written down and narrowed, never silent.
- When a spec change is prompted by a named UX/design pattern, record which pattern and how it was applied, in the spec itself (§6.1 does this) — the client asks for the skills to be used and wants to see it.
- Stay inside the section you were asked to change. Consequences for other sections get flagged as open items, not edited in.
- **Measure in a real browser at a realistic window size before writing a geometry spec.** Three of the four hero revisions were caused by worked examples computed at a near-full-screen viewport.

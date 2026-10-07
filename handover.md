# Handover — Kemal Portfolio Website

**Last updated:** 2026-10-07 — §6.1 hero revision (b) (the "Finox" reference) implemented in code. `Hero.astro` and `tokens.css` now match the spec below.

**State:**
- Astro + TypeScript + Tailwind v4 site. `DESIGN-SYSTEM.md` (repo root) is the source of truth for all visual decisions; `PRD.md` is product scope.
- Phase 1 (Foundation) complete. Phase 2 (Home) in progress: Hero + SystemMap + Stack built.
- **`src/components/sections/Hero.astro` now implements the 2026-10-07 (b) spec** (left rail, dominant-figure `--hero-cutout-h`, `--text-display-xl` headline, corrected `.hero-portrait` width guard). `src/styles/tokens.css` has `--nav-h`, `--text-display-xl`, the re-valued `--hero-cutout-h`, and `--hero-rule-h` scoped `<1024px` only. `src/styles/global.css` gained a `.text-display-xl` utility (same weight/line-height/tracking as `.text-display`, new token). Verified: `astro check` 0 errors, `npm run build` succeeds, dev server rendered the expected markup (`hero-content` wrapper, `hero-rail` with its three children, `hero-headline text-display-xl`). Manually recomputed the formula against the spec's worked examples (1440×900 → 764×445, 1920×1080 → 944×550) — both match exactly. No headless-browser/screenshot tool was available in this environment, so the visual check at each breakpoint was done by formula recomputation + markup inspection, not a rendered screenshot — flag this if a stricter visual sign-off is needed.
- `src/components/system/SystemMap.astro` — the signature animated element. Working, out of scope.
- `src/data/site.ts` — hero copy is placeholder (`headline: "Hello"`, `lead: "I'm Kemal a Senior Growth Performance"`), already in the short-headline shape the new spec assumes.

**2026-10-07 (b) — hero spec revision, what changed (DESIGN-SYSTEM.md §6.1, §4.2, §13; PRD §4.1, §8):**
- Client supplied a real reference screenshot: `C:\Users\fatta\Documents\project\Portfolio Kemal\References\Hero-Banner.png`. Measurements taken off that image are tabulated in §6.1 — **do not re-derive them by eye.**
- `--hero-cutout-h` is now **derived, not tuned**: `clamp(560px, calc(100svh - var(--nav-h) - var(--space-8)), 1040px)` (was `clamp(480px, 72svh, 860px)`). Consequence: crown of the head 64px below the nav, die-cut hairline exactly on the fold. New token `--nav-h: 72px`.
- **Left rail restructured.** The rotated label, the vertical rule and the year merge into one spine at the far-left edge (label → long `flex: 1` hairline → rotated year). The rule **moved out of the text column**; the year **moved out of the bottom row**. Below 1024px the rail is hidden and both stay in the text column as built.
- Bottom row at ≥1024px holds only `Scroll down ↓`, **bottom-left** (was bottom-right).
- New token `--text-display-xl: clamp(4.5rem, 16vw, 15rem)` for the hero `h1`. `--text-display` is retained for the sentence-headline case; the choice is conditional on the copy (table in §6.1 "Display headline").
- **Bug fixed in spec:** the `min()` width guard on `.hero-portrait` under-stated available width by a whole `--container-pad`, and ignored the container margin at ≥1320px — which is why the figure silently stopped growing at 1920 wide. New per-breakpoint second terms in §6.1.
- Markup change required: wrap `<Container class="hero-grid">` in `<div class="hero-content">` (`position: relative`) and move the rail inside it. The current `bottom: 0` against `.hero` would run the rail past the System Map.
- Explicitly reviewed and UNCHANGED (table at the end of §6.1): cutout vs rectangle, no backdrop/frame/filter, no hero CTAs, crop-box technique + its 4 percentages, 7fr/5fr grid, `align-self: end`, bleed 24/16/12, `-md`/`-sm` heights, `.hero` padding.

**Next steps:**
1. **Visually sign off revision (b) in a real browser** (this session had no screenshot tool) — confirm at 1440×900, 1920×1080 and ~375px by eye, and verify the 1024×1366 viewport specifically (the only case where the `.hero-portrait` width term binds, per §6.1's worked-examples table). Re-measure LCP (the cutout is now certainly the LCP element — PRD §8).
2. Build the remaining home sections (Selected Work, About, Approach, Experience, Contact) in PRD §4 order.
3. **Raise with the client:** §8.2 specifies the System Map's draw animation as running on page load, but the Map now starts exactly at the fold, so the animation may be spent before anyone sees it. An intersection trigger is the obvious fix — but §8 was out of scope for the hero work, so it was deliberately left alone. Flagged in §6.1 and PRD §4.1.
4. **Asset request for Kemal:** a wider head-and-shoulders cutout (subject aspect nearer 1:1 than the current 0.583, cropped at the collarbone). Logged in §9. It is the only thing that closes the remaining ~230px gap between the headline and the figure; do not compensate for it in CSS.
5. Delete `scratch-revert-note.txt` at the repo root — created in error on 2026-10-07, no content, nothing references it.
6. When real case studies exist (Phase 3), wire `systemMapNodes[].href` to real project slugs.
7. Ask Kemal for real tool logo assets; the Stack chip is designed so they drop in one at a time.

**Decisions / gotchas:**
- **`global.css`'s `img, svg { max-width: 100% }` silently clamps any `<img>` width set above 100%**, even from an unlayered component `<style>` block. This broke `.hero-portrait-img`'s `width: 137.40%` until `max-width: none` was added directly on it. Any future crop box or bleed image will hit the same thing.
- **The hero asset has a big empty alpha band at the top.** Subject box is 1048×1798 inside a 1440×2560 canvas. Anything that sizes the raw canvas undersizes the figure by ~30%. Measured, recorded in §6.1, do not re-derive.
- **`overflow: hidden` on `.hero-portrait` is allowed** and is not the banned "backdrop block behind a cutout" — the box paints nothing, it only trims transparent pixels.
- **`--hero-cutout-h` is now coupled to `--nav-h` and `.hero`'s `padding-top`.** Changing either changes the figure's size. That is intended, but it means neither can be edited casually.
- **The hero is allowed to exceed the fold.** The System Map below the fold is intended; don't "fix" it by shrinking the photo.
- **Hero CTAs are gone on purpose.** `cta_click` never fires with `cta_location: "hero"` — not a bug.
- **No backdrop behind the cutout, ever**, and **no filter on it** (client override 2026-10-05, still in force — note the reference screenshot's photo is black and white and we are deliberately not copying that). `mix-blend-mode` over alpha is banned (§9, §12).
- **Astro scoped-CSS cross-component gotcha (bit twice):** a `<style>` block in `ComponentA.astro` only reaches elements `ComponentA` renders in its own template. Styling a class on a *child component's* root element (e.g. `<Container class="hero-grid">`) silently never matches. Fix: `:global(...)`. Relevant again for the new `.hero-content` wrapper.
- **Local build/dev flakiness specific to `.claude/worktrees/*` paths:** `npm run build` / `npm run dev` intermittently fail inside a worktree with `Tsconfig not found astro/tsconfigs/strict` plus a native `UV_HANDLE_CLOSING` crash. Workaround applied: `tsconfig.json` inlines the `strict` preset. Build/dev from the main checkout (`C:\Users\fatta\Projects\portfolio-website`). Don't re-debug.
- Tailwind v4 cascade-layer / spacing-scale notes from Phase 1 still apply — direct `var(--token)` references in scoped `<style>`, not chained Tailwind utilities, for anything typography/spacing related.
- gh CLI full path: `C:\Program Files\GitHub CLI\gh.exe`.

**Preferences:**
- DESIGN-SYSTEM.md is followed *literally* by whoever builds next, so specs must give exact values, not intent. When a decision is reversed, append a dated revision-history entry and keep the superseded text marked as such (the §6.1 pattern) rather than deleting it. Same-day revisions get `(a)` / `(b)` suffixes.
- Client instructions override the §12 anti-slop checklist, but the override must be written down and narrowed, never silent.
- When a spec change is prompted by a named UX/design pattern, record which pattern and how it was applied, in the spec itself (§6.1 does this) — the client asks for the skills to be used and wants to see it.
- Stay inside the section you were asked to change. Consequences for other sections get flagged as open items, not edited in.

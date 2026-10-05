# DESIGN SYSTEM — Kemal Portfolio

> Source of truth for every visual decision. Implement tokens in `src/styles/tokens.css` as CSS variables, then map them into the Tailwind theme. Never hard-code a hex value, font size, or spacing value inside a component.

---

## 1. Design intent

**Concept: "the system, drawn quietly."**
Kemal's work is connecting things: ads to pages, pages to tracking, tracking to CRM, CRM to automation. The site expresses that through **one** bold element, the **Growth System Map** (§8). Everything else stays calm, editorial, and disciplined: warm paper, near-black ink, light large type, generous space, hairline structure.

Three principles:
1. **Spend boldness in one place.** The System Map is the only element allowed to animate on its own or draw attention without being touched.
2. **Structure is information.** Lines, numbers, and labels exist only when they encode something (a sequence, a boundary, a data point). Nothing is decorative.
3. **Proof over adjectives.** Metrics and real project names do the selling. Copy is plain and specific.

Reference feel: minimal portfolio layouts with large light grotesk type, row-based experience lists, and a dark contact panel. Take the calm and the spacing, not the template.

---

## 2. Color

### 2.1 Core palette (given)

| Token | Hex | Name | Role |
|---|---|---|---|
| `--color-ink` | `#11120D` | Smoky Black | Primary text, dark sections, primary buttons |
| `--color-olive` | `#565449` | Olive Drab | Secondary text, captions, labels, active lines |
| `--color-bone` | `#D8CFBC` | Bone | Hairlines, tags, image placeholders, accents on dark |
| `--color-paper` | `#FFFBF4` | Floral White | Page background |

### 2.2 Derived tokens

| Token | Hex | Role |
|---|---|---|
| `--color-paper-2` | `#F3EEE3` | Sunk surface (About section bg, row hover) |
| `--color-ink-soft` | `#9C9687` | Secondary text **on ink** backgrounds |
| `--color-line` | `#D8CFBC` | Hairlines on paper (= bone) |
| `--color-line-dark` | `#2C2D26` | Hairlines on ink |
| `--color-wordmark` | `#1D1E18` | Footer giant wordmark on ink (barely visible) |

No other colors. No gradients. No accent color beyond the palette. Status colors are not needed on this site.

### 2.3 Section backgrounds

| Section | Background |
|---|---|
| Hero, Selected Work, Stack, Experience | `paper` |
| About & Capabilities | `paper-2` |
| Approach | `ink` |
| Contact panel | `ink` (rounded panel sitting on `paper`) |
| Footer | `ink` |

---

## 3. Approved text/background pairings (WCAG checked)

Use only these for text. Anything not listed is decorative-only.

| Text | Background | Ratio | Use |
|---|---|---|---|
| ink | paper | ~18:1 | All primary text |
| olive | paper | ~7.4:1 | Secondary text, captions, labels |
| olive | paper-2 | ~6.5:1 | Secondary text in About |
| ink | bone | ~12:1 | Text on bone (active chip alt, placeholders) |
| olive | bone | ~4.9:1 | Small text on bone tags |
| paper | ink | ~18:1 | Primary text on dark |
| bone | ink | ~12:1 | Headings / numbers on dark |
| ink-soft | ink | ~6.4:1 | Secondary text on dark |

**Never:** bone text on paper (1.5:1), olive text on ink (2.5:1).

---

## 4. Typography

### 4.1 Typeface
**Hanken Grotesk (variable, 100–900)**, self-hosted via `@fontsource-variable/hanken-grotesk`.
One family for everything. Personality comes from weight contrast: very light (300) at large sizes against regular (400–500) at reading sizes.

Fallback stack: `"Hanken Grotesk Variable", "Helvetica Neue", Arial, sans-serif`.

Numbers: always `font-variant-numeric: tabular-nums lining-nums` for metrics, years, and step numbers.

No monospace font. No serif. No italic accents.

### 4.2 Type scale (fluid)

| Token | Size | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|
| `--text-display` | `clamp(3rem, 7vw + 1rem, 8rem)` | 300 | 0.95 | -0.035em | Hero headline only |
| `--text-h1` | `clamp(2.5rem, 4vw + 1rem, 4.5rem)` | 300 | 1.0 | -0.03em | Case study title, `/work` title |
| `--text-h2` | `clamp(2rem, 2.5vw + 1rem, 3rem)` | 350 | 1.05 | -0.02em | Section headings |
| `--text-h3` | `1.5rem` | 450 | 1.2 | -0.01em | Project titles, pillar titles, step names |
| `--text-metric` | `clamp(2.5rem, 3vw + 1.25rem, 4rem)` | 300 | 1.0 | -0.03em | Metric values |
| `--text-lead` | `1.25rem` | 400 | 1.5 | -0.005em | Hero supporting line, intros |
| `--text-body` | `1.0625rem` | 400 | 1.6 | 0 | Body copy |
| `--text-small` | `0.9375rem` | 400 | 1.5 | 0 | Row details, nav |
| `--text-caption` | `0.8125rem` | 450 | 1.4 | 0.01em | Labels, metric labels, tags |

### 4.3 Rules
- Left-aligned everywhere. Centered text is allowed only inside the Contact panel heading.
- Body line length: `max-width: 62ch`.
- Sentence case for everything: headings, buttons, labels, tags. **No all-caps text.**
- Do not highlight a single word inside a headline (no colored, bold, or italic word).
- No eyebrow label above section headings. A section is introduced by its heading plus an optional side note to the right (see §6.2).

---

## 5. Spacing, grid, shape

### 5.1 Spacing scale (4px base)
`--space-1: 4px` · `2: 8px` · `3: 12px` · `4: 16px` · `5: 24px` · `6: 32px` · `7: 48px` · `8: 64px` · `9: 96px` · `10: 128px` · `11: 160px`

- Section vertical padding: `clamp(5rem, 10vw, 10rem)` (`--space-section`).
- Heading to content: `--space-8` desktop, `--space-7` mobile.

### 5.2 Grid
- Container: `max-width: 1320px`, inline padding `clamp(1.25rem, 4vw, 3rem)`.
- 12 columns, gap `24px` (desktop) / `16px` (mobile < 768px, collapses to 4 columns).
- Breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`.
- Layout is **asymmetric**: headings typically span cols 1–7, side notes sit in cols 9–12.

### 5.3 Radius (hierarchical, not one value everywhere)

| Token | Value | Use |
|---|---|---|
| `--radius-none` | 0 | Rows, lists, pillars, hairline structures, **hero cutout (no frame at all)** |
| `--radius-sm` | 4px | Row thumbnails, small images |
| `--radius-md` | 12px | Lead project media, About portrait |
| `--radius-lg` | 20px | Contact panel |
| `--radius-pill` | 999px | Buttons, tags, filter chips |

### 5.4 Elevation
**No shadows.** Separation comes from hairlines (`1px solid var(--color-line)`) and background shifts (`paper` → `paper-2` → `ink`).

---

## 6. Layout patterns

### 6.1 Hero

**Revision history.**

*2026-10-04 — the hero carries a portrait.* Earlier drafts kept the hero
text-only so the Growth System Map was the single bold element. Reviewing
against a reference layout (large light display word + full-bleed portrait +
rotated side label + top stat numbers + scroll cue) showed that device works
well here too, as long as the Map keeps its own uncluttered moment immediately
below rather than competing inside the same row. So: hero now has a portrait,
and the Map becomes the hero section's closing beat, not a line squeezed in
next to a photo.

*2026-10-05 — CTAs removed from the hero; the portrait becomes a free-standing
die-cut figure.* Two changes, both client-directed, both pushing the hero closer
to the reference layout:
1. **No CTA buttons in the hero body.** The reference hero has no button inside
   the content block at all — the only `Book a call` lives in the nav bar. Both
   hero CTAs were duplicates of affordances the nav already carries sitewide
   (`Book a call` button, `Work` link), so removing them costs no path and
   returns the hero to being a statement rather than a conversion unit. See
   "Why the secondary CTA does not resurface" below.
2. **The portrait is now a true alpha cutout, so the bone mount is gone.** The
   §9 hero treatment was written for an opaque rectangular photo cropped inside
   a `bone` block with a `bone` multiply overlay — a print-mount device. The
   real asset (`src/assets/images/kemal-portrait.png`, 1440×2560, verified true
   alpha) has no rectangle to mount. Keeping the bone block would re-draw the
   exact rectangle the cutout removes, and would read as a card. So the cutout
   stands directly on `paper` with no backdrop, no frame, no radius.

```
┌──────────────────────────────────────────────────────────────┐
│ Kemal                     Work  About  Approach  Contact  [Book a call] │
├──────────────────────────────────────────────────────────────┤
│ │                                                                      │
│S│ 8+            55+                                     ▄▄▄▄           │
│e│ Brands        Systems                                ███████         │
│n│ handled       shipped                               ████████         │
│i│                                                    ██████████        │
│o│ I build growth systems, from the                   ██████████        │
│r│ first ad click to the CRM that                    ████████████       │
│ │ closes the deal.                                 ██████████████      │
│G│                                                 ███████████████      │
│r│ Performance marketing, websites,               ██████████████████    │
│o│ tracking, CRM and automation.                 ███████████████████    │
│w│                                              █████████████████████   │
│t│ │  ← short vertical rule                    ███████████████████████  │
│h│ │                                         █████████████████████████ │
│ │ 2026                      Scroll down ↓  ████████████████████████████│
└──────────────────────────────────────────────────────────────┘
────────────────────────────────────────────────────────────────  (hairline)
  ○────────○────────○────────○────────○                              ← SYSTEM MAP, its own row
  Ads      Landing  Tracking CRM      Automation
  ...      page     ...      ...      ...
```

*(The figure is a cutout silhouette standing on `paper` — no box edge anywhere.
Its torso is cut only by the hairline above the System Map, and its outer
shoulder is tangent to the right viewport edge.)*

**Content, top to bottom (this is the complete list — nothing else goes in the hero body):**

1. **Rotated side label** (≥1024px only): role line (`Senior Growth`, wrapped),
   `text-caption`, olive, rotated -90°, anchored to the far-left edge of the
   container, reading bottom-to-top. Informational, not decorative, so it's
   allowed under §12. This also carries the role, which is why the hero body has
   no separate name/role line (the name is the nav wordmark).
2. **Top stat row**: 2 metrics (not the full impact row — that stays with the
   System Map below), same `Metric` component, smaller context-setting numbers.
3. **Display headline** — `text-display`, ink, `max-width: 16ch` mobile /
   `14ch` ≥1024px.
4. **Lead line** — one short line in `text-lead`, olive, directly under the
   headline. Now a direct child of the text column: the old `.hero-lead-row`
   (lead paragraph and CTA stack side by side) is **deleted**, not repurposed.
   The lead gets the full text column width back: `max-width: 44ch` ≥1024px,
   `48ch` below. No em-dash or any other decorative prefix (the reference's
   `— It's Finox…` dash encodes nothing; §1 principle 2).
5. **Short vertical rule** — the one thing that takes over the space the CTA
   stack vacated. `1px` wide, `var(--color-line)`, height `var(--hero-rule-h)`,
   left-aligned to the text column's left edge, `--space-6` above and below.
   It encodes the boundary between the statement block (stats, headline, lead)
   and the frame furniture (year, scroll cue) — the same job as the hairline
   above the System Map, rotated — and it keeps the column from going
   top-heavy once the buttons are gone. It is not a link and carries no hover
   state. `aria-hidden="true"`.
6. **Year + scroll cue**: bottom-left `2026` in `text-caption` olive (tabular
   nums), bottom-right `Scroll down ↓` in `text-small` olive. **Static text, not
   a link** — this is the one place a bare `↓` is allowed, precisely because it
   is an affordance and not a label (§12 bans arrows on button/link labels, so
   making this a link would break that rule).
7. **The cutout portrait** (spec below), right column.

Below the content row, unchanged and out of scope for this revision: the
Growth System Map (§8) as its own full-width row with a hairline above it, then
the impact metrics row. Still inside the `#top` section, still the site's one
animated element.

**Why the secondary CTA does not resurface.** `See selected work` is dropped
outright rather than moved next to the scroll cue. Three reasons: the nav's
`Work` link already covers it from every scroll position; the next thing below
the fold is the System Map, whose nodes link into the work in Phase 3, so the
hero already points at the work structurally; and turning `Scroll down ↓` into
a link would put an arrow on a link label, which §12 forbids. Tracking
consequence: `cta_click` with `cta_location: "hero"` is no longer emitted —
that is expected, not a regression. The nav remains the only CTA source above
the fold.

**The cutout portrait — exact treatment.**

*Asset.* `src/assets/images/kemal-portrait.png`, 1440×2560 (intrinsic 9:16),
chest-up, true alpha (alpha 0 outside the subject). Import through
`astro:assets` and emit explicit `width`/`height` so there is no CLS. `loading="eager"`,
`decoding="async"`. The §9 bone-block placeholder rule no longer applies to the
hero — a real asset exists.

*Backdrop.* None. No `background`, no `bone` block, no frame, no border,
`--radius-none`, no shadow (§5.4). The figure stands directly on `paper`. The
element must not be given `overflow: hidden` — there is nothing to clip.

*Tone.* **2026-10-05 client override — supersedes the filter-chain decision
below.** The client rejected the toned treatment outright: the hero photo
renders in its natural full color, with **no `filter` property on the `<img>`
at all**. `--hero-cutout-filter` is no longer applied anywhere; the token stays
defined in `tokens.css` for now only as a historical record, not referenced by
any component. Do not reintroduce `grayscale`/`sepia`/any tint on this image
without a new client sign-off.

*Original design-director tone spec (no longer in effect, kept for context).*
The earlier instruction was to apply a single alpha-safe filter chain to the
`<img>` itself:

```css
filter: grayscale(1) contrast(1.04) sepia(0.22) saturate(1.15) brightness(0.98);
```

(token: `--hero-cutout-filter`). Intent: the same job the old grayscale + bone
multiply did — pull the photo into the ink/olive/bone family — achieved without
touching a rectangle. Acceptance check: sample a blazer or skin midtone; it must
read as a **warm neutral gray in the bone/olive family** (hue roughly 35–45°,
saturation under ~15%). If it reads as a sepia photograph, lower `sepia()`
first, then `saturate()`.

*Banned implementation (this is the trap).* Do **not** keep the
`.hero-portrait-overlay` div — an absolutely positioned `bone` layer with
`mix-blend-mode: multiply` over a transparent PNG tints its whole box, including
the transparent region, which paints back exactly the bone rectangle this
revision removes. Any `mix-blend-mode` layer over an alpha cutout is wrong
unless it is masked by the image's own alpha; do not use a mask here, the filter
chain above is the approved route.

*Size.* Height-driven, width derived, so the figure can never grow past the
fold and crop its own head:

```css
height: var(--hero-cutout-h);   /* clamp(400px, 64svh, 760px) */
width: auto;                    /* ≈ 0.5625 × height, from the 9:16 asset */
```

At a 1440×900 desktop this renders ≈576×324 — roughly a third of the text
column's width, deliberately slimmer than the old full-bleed block, because a
die-cut figure reads at a smaller scale than a photo panel. Breakpoint values:
`--hero-cutout-h-md` `clamp(320px, 42svh, 420px)` for 640–1023px, and
`--hero-cutout-h-sm` `clamp(260px, 38svh, 340px)` below 640px.

*Vertical alignment.* Hard constraint: `align-self: end` — the bottom of the
image box sits flush on the bottom of the hero content row, i.e. directly on the
hairline above the System Map, so the figure's torso is cut by that hairline.
That cut is the whole point: a figure standing up out of the line reads as a
deliberate die-cut; a vertically sliced arm reads as a bug. Tuning target: the
crown of the head should land level with, or up to ~24px above, the cap line of
the display headline's first line. If it falls below the cap line at a given
viewport, raise the `svh` term in `--hero-cutout-h` — never translate the image
up, which would break the flush bottom.

*Horizontal placement.* Grid cols 8–12, `justify-self: end`, and the image box's
right edge sits **24px (`--space-5`) past the right viewport edge**, with
`overflow: hidden` on `.hero` doing the cropping. Keep the existing breakout
math (`margin-right: calc(-1 * var(--container-pad))` at ≥1024px, and
`calc(-50vw + var(--container-max) / 2)` at ≥1320px) and add the extra 24px on
top. Rule the engineer must verify by eye, not by number: **no more than ~6% of
the subject's width may sit beyond the viewport edge, and the face, glasses and
near shoulder must never be cropped.** The outer shoulder grazing the edge is
intended tangency; anything more is a slice — pull it back.

*Below 1024px.* The cutout follows the text block in flow, `justify-self: end`,
right edge 16px (`--space-4`) past the viewport edge, same filter, same
`align-self: end` against the hairline, heights per the `-md` / `-sm` tokens
above. It is never centered (§12) and never overlaps the text. The rotated side
label stays hidden below 1024px.

**Grid.** `.hero-grid` becomes `minmax(0, 8fr) minmax(0, 4fr)` at ≥1024px (was
7fr/5fr) — the slimmer cutout hands a column back to the text. Gap `--space-8`.
Content row `min-height: 60svh`. Hero height overall: content-driven, min
`90svh` on desktop including the System Map row.

**Implementation note (not code, just the delta):** `hero.ctaPrimary` and
`hero.ctaSecondary` come out of `src/data/site.ts`; the `Button` import and
`.hero-lead-row` / `.hero-ctas` / `.hero-portrait-overlay` markup and styles
come out of `Hero.astro`. The `<img src="/images/foto-kemal.svg">` is replaced
by an `astro:assets` import of `kemal-portrait.png`.

### 6.2 Section header

```
Selected work                                  Four projects where the ad,
                                               the page and the CRM were
                                               built as one system.
──────────────────────────────────────────────────────────────── (hairline)
```
Heading `h2` cols 1–7; side note `small`/olive cols 9–12, aligned to the heading's baseline.

### 6.3 Selected work

```
┌─────────────────────────────────────┐  Padel club, Jakarta
│                                     │  CRM architecture and membership
│        lead project media           │  booking for a padel club
│        (16:10, radius-md)           │  Members were booking through DMs...
│                                     │  ─────────
└─────────────────────────────────────┘  -35%  Cost per lead
                                         [Architecture & CRM] [Build]
                                         Read case study
────────────────────────────────────────────────────────────────
2025   Cross-channel funnel diagnostics       -28% CPL      [Performance]
────────────────────────────────────────────────────────────────
2025   An ads creative system ...             3× output     [Content systems]
────────────────────────────────────────────────────────────────
2024   A Chrome extension for reading ads...  2h → 10m      [Build]
────────────────────────────────────────────────────────────────
                                                    All projects (8)
```
One lead project (media cols 1–8, text cols 9–12), then the rest as rows. **Never** a uniform 3-column card grid.

### 6.4 Contact

```
┌──────────────────────────────────────────────────────────────┐  ink, radius-lg
│  Let's work together                                         │
│                                                              │
│  Hiring?                        │  Have a project?           │
│  Senior growth role, in-house   │  Ads, landing pages,       │
│  or remote.                     │  tracking, CRM setup.      │
│  [Download CV]  LinkedIn ↗      │  [Book a call]  Email      │
└──────────────────────────────────────────────────────────────┘
```

---

## 7. Components

### 7.1 Button
| Variant | Style |
|---|---|
| Primary (on paper) | bg `ink`, text `paper`, pill, height 48px, padding-inline 24px, `text-small` weight 500. Hover: bg `olive`. |
| Primary (on ink) | bg `bone`, text `ink`. Hover: bg `paper`. |
| Text link | text `ink`, underline 1px, `text-underline-offset: 4px`. Hover: underline 2px. On ink: `paper`. |

- Labels say exactly what happens: `Book a call`, `Download CV`, `Read case study`, `All projects`.
- **No arrows appended to labels.** The only allowed icon is `↗` on links that open an external site (LinkedIn, WhatsApp, live project URL), because it carries meaning.
- Focus: `outline: 2px solid var(--color-ink); outline-offset: 3px` (on ink: `bone`).
- No buttons in the hero body (§6.1) — the nav's `Book a call` is the only CTA above the fold.

### 7.2 Tag
Pill, `1px solid var(--color-line)`, text `olive`, `text-caption`, padding `4px 12px`. On ink: border `line-dark`, text `ink-soft`. Tags are not clickable.

### 7.3 Filter chip
Pill, height 36px, padding-inline 16px, `text-small`.
- Default: border `line`, text `ink`.
- Hover: bg `paper-2`.
- Active: bg `ink`, text `paper`, `aria-pressed="true"`.

### 7.4 Metric
Hairline on top (`1px solid line`, `padding-top: space-4`), value in `text-metric` tabular nums, label in `text-caption` olive below. Left-aligned. On ink: value `bone`, label `ink-soft`, hairline `line-dark`.

### 7.5 Nav
Height 72px, bg `paper`. Wordmark `Kemal` at `text-h3` weight 500 left; links `text-small` center-right; primary button right. A bottom hairline appears only after scrolling 8px. No blur, no transparency effects.
Mobile: wordmark + `Menu` text button → full-screen `paper` overlay with links at `text-h2`.

### 7.6 Pillar (About)
No card. Top hairline, `h3` title, one-sentence outcome in `body` ink, then 3–4 deliverables as a plain list in `small` olive. Stacked vertically in the right column.

### 7.7 Approach step (on ink)
Row with bottom hairline `line-dark`. Grid: number cols 1–2 (`text-metric`, `bone`, e.g. `1` not `01`), name cols 3–6 (`h3`, `paper`), principle cols 7–12 (`lead`, `ink-soft`).

### 7.8 Stack group
Definition-list style rows separated by hairlines: group name cols 1–4 (`small`, olive), tools cols 5–12 as a comma-separated sentence in `lead`, ink. Text only, no logos.

### 7.9 Experience row
Hairline-separated. Company + location (`h3`) and period (`caption` olive) cols 1–5; role/scope (`small` olive) cols 6–9; tags right-aligned cols 10–12.

### 7.10 Project row (`/work`, Selected Work)
Hairline-separated. Year cols 1 (`small`, olive, tabular); title cols 2–6 (`h3`); key metric cols 7–9 (`small`, ink); tags cols 10–12. Whole row is the link. Hover (desktop, fine pointer only): row bg `paper-2`, and a 320×200 thumbnail (`radius-sm`) appears in a fixed preview slot on the right side of the viewport. Mobile: rows stack; no thumbnail.

### 7.11 Footer
bg `ink`. Top: nav links + socials + contact in `paper`/`ink-soft`. Bottom: the wordmark `Kemal` at `font-size: 24vw`, weight 300, color `--color-wordmark`, tracking -0.05em, clipped so only the top ~70% shows. Final line: `© 2026 Kemal. Designed and built with Claude Code.` in `caption` `ink-soft`.

---

## 8. Signature element — Growth System Map

The one memorable thing on the site. Used in the Hero (5 fixed nodes) and in every case study's "System" section (nodes from `systemMap` frontmatter).

### 8.1 Anatomy
```
  ●───────────────●───────────────○───────────────○───────────────○
  Ads             Landing page    Tracking        CRM             Automation
  Meta, Google,   Built in-house  GA4, GTM, CAPI  HubSpot         Cekat, Mekari
  TikTok
```
- **Line:** SVG, 1px, `olive`, full container width (desktop), connecting node centers.
- **Node:** 14px circle. Default: fill `paper`, 1px `ink` stroke. Hover/focus: fill `ink`. Nodes that link to a project are `<a>` elements with an accessible name ("Ads — see WSE funnel diagnostics").
- **Label:** `h3`-weight 450 at `text-body` size, ink, below node.
- **Note:** `caption`, olive, max 2 lines, below label (tools or project name).
- Desktop: 5 nodes evenly spaced on one horizontal line. Mobile (< 768px): vertical line on the left, nodes stacked with label/note to the right.

### 8.2 Motion (the only autonomous animation on the site)
On first load of the hero:
1. Line draws left → right (`stroke-dashoffset`, 900ms, `cubic-bezier(0.2, 0, 0, 1)`).
2. Nodes fill in sequence as the line reaches them (each node: 150ms, staggered to match the line).
3. Labels and notes fade in with their node (opacity only, no slide).

Runs once. Under `prefers-reduced-motion: reduce`, render the final state immediately. In case studies the map renders static (no animation).

---

## 9. Imagery

- **Portrait (About):** real photo of Kemal, cropped 4:5, `radius-md`. Treatment: `filter: grayscale(1) contrast(1.05)` plus an overlay of `bone` with `mix-blend-mode: multiply` at 30% opacity, so the photo sits inside the palette. This is the print-mount treatment and it stays, because the About portrait is a rectangular photo mounted inside the layout. Unchanged by the 2026-10-05 hero revision.
- **Portrait (Hero) — alpha cutout, revised 2026-10-05:** a true transparent-background cutout (`src/assets/images/kemal-portrait.png`, 1440×2560, alpha 0 outside the subject), standing directly on `paper` with **no backdrop block, no frame, no border, `--radius-none`**. Tone comes from one alpha-safe filter chain on the image — `grayscale(1) contrast(1.04) sepia(0.22) saturate(1.15) brightness(0.98)` (`--hero-cutout-filter`) — and **never** from a `mix-blend-mode` overlay layer, which would tint the transparent region and repaint a bone rectangle. Sizing, alignment and bleed rules: §6.1. The earlier spec here (cover-cropped inside a bone box with a bone multiply overlay) was written for an opaque rectangular photo and no longer applies to the hero.
- **Project covers:** real screenshots of the work (landing pages, dashboards, CRM pipelines, ad creatives) shown on a `bone` background with generous padding inside the frame, like a print mount. Never stock photos, never AI-generated objects or abstract 3D shapes.
- **Placeholders** (until real assets exist): flat `bone` block with the project name in `caption` olive, bottom-left. Does not apply to the hero portrait — the real cutout exists.
- **Alpha cutouts in general:** no backdrop block behind them, no `mix-blend-mode` layer over them, and they are cropped only by a structural edge (a hairline, the viewport edge) — never by a box of their own.
- Images never have shadows, borders, or tilt.

---

## 10. Motion (everything else)

| Interaction | Duration | Property |
|---|---|---|
| Button / chip / link hover | 150ms ease-out | background-color, text-decoration-thickness |
| Row hover | 150ms ease-out | background-color |
| Filter change | 200ms | opacity crossfade of the list |
| Mobile menu open | 250ms `cubic-bezier(0.2,0,0,1)` | opacity |

**No** scroll-triggered reveals on sections, no parallax, no cursor followers, no marquee, no counters that tick up. The hero cutout does not animate, float, or parallax.

---

## 11. Voice & copy

- Plain, specific, first person. "I rebuilt the tracking so the CRM got clean leads", not "Leveraging cutting-edge solutions".
- Every claim tied to a project or a number. If there's no number yet, write `[placeholder]`; never invent one.
- Sentence case, short sentences, active voice.
- Banned words: unlock, elevate, empower, seamless, cutting-edge, leverage, supercharge, game-changer, synergy, journey (as a metaphor), passionate.

---

## 12. Do not (AI-slop checklist)

Review every page against this list before calling a phase done.

- ❌ Gradients, glow, glassmorphism, blurred blobs, noise textures
- ❌ Uniform grids of identical rounded cards with icons in circles
- ❌ Drop shadows of any kind
- ❌ All-caps labels or eyebrows above headings
- ❌ One highlighted word in a headline
- ❌ Monospace font for labels
- ❌ `01 / 02 / 03` numbering on anything that is not a real sequence (only Approach uses numbers)
- ❌ Arrows appended to button labels (only `↗` for external links)
- ❌ Meta strings joined with middle dots
- ❌ Emoji as icons
- ❌ Logo walls for tools
- ❌ Stock photos, AI-generated 3D objects, abstract illustrations
- ❌ Fade-and-slide-up on every section
- ❌ Centered layouts (except the Contact panel heading)
- ❌ Colors or font sizes not defined in this file
- ❌ A rectangular backdrop block behind a transparent cutout image (§9)

---

## 13. tokens.css (starting point)

```css
:root {
  /* color */
  --color-ink: #11120D;
  --color-olive: #565449;
  --color-bone: #D8CFBC;
  --color-paper: #FFFBF4;
  --color-paper-2: #F3EEE3;
  --color-ink-soft: #9C9687;
  --color-line: #D8CFBC;
  --color-line-dark: #2C2D26;
  --color-wordmark: #1D1E18;

  /* type */
  --font-sans: "Hanken Grotesk Variable", "Helvetica Neue", Arial, sans-serif;
  --text-display: clamp(3rem, 7vw + 1rem, 8rem);
  --text-h1: clamp(2.5rem, 4vw + 1rem, 4.5rem);
  --text-h2: clamp(2rem, 2.5vw + 1rem, 3rem);
  --text-h3: 1.5rem;
  --text-metric: clamp(2.5rem, 3vw + 1.25rem, 4rem);
  --text-lead: 1.25rem;
  --text-body: 1.0625rem;
  --text-small: 0.9375rem;
  --text-caption: 0.8125rem;

  /* space */
  --space-1: 4px;  --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
  --space-5: 24px; --space-6: 32px;  --space-7: 48px;  --space-8: 64px;
  --space-9: 96px; --space-10: 128px; --space-11: 160px;
  --space-section: clamp(5rem, 10vw, 10rem);

  /* layout */
  --container-max: 1320px;
  --container-pad: clamp(1.25rem, 4vw, 3rem);
  --grid-gap: 24px;

  /* hero (§6.1) */
  --hero-cutout-h: clamp(400px, 64svh, 760px);
  --hero-cutout-h-md: clamp(320px, 42svh, 420px);
  --hero-cutout-h-sm: clamp(260px, 38svh, 340px);
  --hero-cutout-filter: grayscale(1) contrast(1.04) sepia(0.22) saturate(1.15) brightness(0.98);
  --hero-rule-h: clamp(40px, 6vw, 72px);

  /* shape */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  /* motion */
  --ease-out: cubic-bezier(0.2, 0, 0, 1);
  --dur-fast: 150ms;
  --dur-base: 250ms;
  --dur-draw: 900ms;
}

@media (max-width: 767px) {
  :root { --grid-gap: 16px; }
}

@media (prefers-reduced-motion: reduce) {
  :root { --dur-fast: 0ms; --dur-base: 0ms; --dur-draw: 0ms; }
}
```

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
| `--color-paper-2` | `#F3EEE3` | Sunk surface (About section bg, Stack cards, row hover) |
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

The Stack section's own background stays `paper`; its four cards are `paper-2` panels sitting on it (§7.8). That `paper` → `paper-2` shift is the only separation they get — no border, no shadow (§5.4).

---

## 3. Approved text/background pairings (WCAG checked)

Use only these for text. Anything not listed is decorative-only.

| Text | Background | Ratio | Use |
|---|---|---|---|
| ink | paper | ~18:1 | All primary text |
| olive | paper | ~7.4:1 | Secondary text, captions, labels |
| ink | paper-2 | ~17:1 | Headings and primary text on paper-2 (About pillars, Stack card headings) |
| olive | paper-2 | ~6.5:1 | Secondary text in About, Stack tool names |
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
| `--text-h3` | `1.5rem` | 450 | 1.2 | -0.01em | Project titles, pillar titles, step names, Stack card headings |
| `--text-metric` | `clamp(2.5rem, 3vw + 1.25rem, 4rem)` | 300 | 1.0 | -0.03em | Metric values |
| `--text-lead` | `1.25rem` | 400 | 1.5 | -0.005em | Hero supporting line, intros |
| `--text-body` | `1.0625rem` | 400 | 1.6 | 0 | Body copy |
| `--text-small` | `0.9375rem` | 400 | 1.5 | 0 | Row details, nav |
| `--text-caption` | `0.8125rem` | 450 | 1.4 | 0.01em | Labels, metric labels, tags, Stack tool names |

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
| `--radius-sm` | 4px | Row thumbnails, small images, **Stack logo chips (§7.8)** |
| `--radius-md` | 12px | Lead project media, About portrait, **Stack cards (§7.8)** |
| `--radius-lg` | 20px | Contact panel |
| `--radius-pill` | 999px | Buttons, tags, filter chips |

Hierarchy inside Stack is deliberate: the card (a container) takes `md`, the chip (a small object inside it) takes `sm`. Never give both the same radius.

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

*2026-10-07 — the figure is sized from the subject, not the canvas, and reads
at hero scale.* Client-directed: "put my photo on the right side and with
proper size… the current design is too small and not proper position… make it a
good hero banner, the objective is showing professionality."

Root cause, measured on the asset rather than guessed: **the subject only
occupies the lower-right ~70% of the 1440×2560 canvas.** The alpha bounding box
is `x 296…1344`, `y 762…2560` (1048 × 1798 px) — there is a ~762px fully
transparent band above the crown of the head and ~290/100px of empty margin
left/right. The 2026-10-05 spec sized the *canvas* (`height: clamp(400px, 64svh,
760px)`), so at a 1440×900 desktop the canvas rendered 576px tall but the
**visible figure was only ~404px tall and ~236px wide, floating in the lower
part of its own box.** That is why it reads small and badly placed, and it is
also why the old tuning target ("crown level with the headline's cap line") was
unreachable no matter how far the `svh` term was raised.

Three changes follow, all specified below:
1. **A crop box removes the empty alpha padding**, so every number in this spec
   describes the figure the visitor actually sees.
2. **Sizing is expressed as figure height and is no longer capped at the fold.**
   The hero content row is now allowed to be taller than the viewport; the
   System Map sitting below the fold on a laptop is accepted and intended.
3. **The right column grows from 4fr to 5fr** so the larger figure has a column
   that belongs to it, and the headline tightens to match.

Everything approved in the 2026-10-05 revision is **kept unchanged**: no
backdrop, no frame, no border, no shadow, full natural color with no filter, and
`align-self: end` so the torso is die-cut by the hairline above the System Map.

```
┌──────────────────────────────────────────────────────────────┐
│ Kemal                     Work  About  Approach  Contact  [Book a call] │
├──────────────────────────────────────────────────────────────┤
│ │                                              ▄▄▄▄▄▄▄▄▄▄▄▄  │
│S│ 8+            55+                          ███████████████ │
│e│ Brands        Systems                     ████████████████ │
│n│ handled       shipped                    █████████████████ │
│i│                                         ██████████████████ │
│o│ I build growth                          ██████████████████ │
│r│ systems, from the                      ███████████████████ │
│ │ first ad click to                     ████████████████████ │
│G│ the CRM that closes                  ██████████████████████│
│r│ the deal.                           ███████████████████████│
│o│                                    ████████████████████████│
│w│ Performance marketing,            █████████████████████████│
│t│ websites, tracking, CRM.         ██████████████████████████│
│h│ │  ← short vertical rule        ███████████████████████████│
│ │ │                              ████████████████████████████│
│ │ 2026          Scroll down ↓   █████████████████████████████│
└──────────────────────────────────────────────────────────────┘
────────────────────────────────────────────────────────────────  (hairline)
  ○────────○────────○────────○────────○                              ← SYSTEM MAP, its own row
  Ads      Landing  Tracking CRM      Automation
  ...      page     ...      ...      ...
```

*(The figure is a cutout silhouette standing on `paper` — no box edge anywhere.
The crown of the head now starts at the top of the content row, level with the
top stat numbers. Its torso is cut only by the hairline above the System Map,
and its outer shoulder is tangent to the right viewport edge.)*

**Content, top to bottom (this is the complete list — nothing else goes in the hero body):**

1. **Rotated side label** (≥1024px only): role line (`Senior Growth`, wrapped),
   `text-caption`, olive, rotated -90°, anchored to the far-left edge of the
   container, reading bottom-to-top. Informational, not decorative, so it's
   allowed under §12. This also carries the role, which is why the hero body has
   no separate name/role line (the name is the nav wordmark).
2. **Top stat row**: 2 metrics (not the full impact row — that stays with the
   System Map below), same `Metric` component, smaller context-setting numbers.
3. **Display headline** — `text-display`, ink, `max-width: 16ch` mobile /
   **`11ch` ≥1024px** (was 14ch; see "Grid" below for why it tightened).
4. **Lead line** — one short line in `text-lead`, olive, directly under the
   headline. Now a direct child of the text column: the old `.hero-lead-row`
   (lead paragraph and CTA stack side by side) is **deleted**, not repurposed.
   `max-width: 40ch` ≥1024px (was 44ch), `48ch` below. No em-dash or any other
   decorative prefix (the reference's `— It's Finox…` dash encodes nothing;
   §1 principle 2).
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

*Measured alpha bounding box (2026-10-07, do not re-derive by eye).*

| Quantity | Value |
|---|---|
| Canvas | 1440 × 2560 |
| Subject left edge | `x = 296` |
| Subject right edge | `x = 1344` |
| Subject top (crown of hair) | `y = 762` |
| Subject bottom | `y = 2560` (bleeds off the canvas bottom) |
| Subject box | **1048 × 1798** (aspect `1048 / 1798` ≈ 0.583) |

*Backdrop.* None. No `background`, no `bone` block, no frame, no border,
`--radius-none`, no shadow (§5.4). The figure stands directly on `paper`.

*Tone.* **2026-10-05 client override — supersedes the filter-chain decision
below.** The client rejected the toned treatment outright: the hero photo
renders in its natural full color, with **no `filter` property on the `<img>`
at all**. `--hero-cutout-filter` is no longer applied anywhere; the token stays
defined in `tokens.css` for now only as a historical record, not referenced by
any component. Do not reintroduce `grayscale`/`sepia`/any tint on this image
without a new client sign-off. **Still in force after the 2026-10-07 revision.**

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
unless it is masked by the image's own alpha; do not use a mask here.

*The crop box — new 2026-10-07, build this first.* `.hero-portrait` stops being
a plain `width: fit-content` wrapper and becomes a **subject-tight crop box**:
its edges are the subject's alpha bounding box, and the `<img>` is scaled and
offset inside it so the empty alpha padding falls outside. Every other number in
this section is measured against this box.

```css
.hero-portrait {
  /* the box IS the figure */
  aspect-ratio: var(--hero-cutout-ar);          /* 1048 / 1798 */
  overflow: hidden;                              /* clips transparent pixels only */
  justify-self: end;
  align-self: end;
}

.hero-portrait-img {
  display: block;
  width: 137.40%;        /* 1440 / 1048  — scale canvas up so the subject fills the box width */
  height: auto;
  margin-left: -28.24%;  /*  296 / 1048  — pull the left margin out */
  margin-top: -72.71%;   /*  762 / 1048  — pull the empty top band out */
  /* percentage margins resolve against the box WIDTH; that is what makes this work */
}
```

Two things the engineer must know about this block:

- `overflow: hidden` here is **not** the banned backdrop rectangle (§9, §12).
  Nothing is painted — the box has no background, no border and no radius. It
  only stops transparent pixels from inflating the layout box. The §6.1
  2026-10-05 line "the element must not be given `overflow: hidden` — there is
  nothing to clip" is superseded: there *is* something to clip, 762px of empty
  alpha, and clipping it is the fix for the client's complaint.
- The subject bleeds off the canvas bottom (`y = 2560`), so the image's bottom
  edge and the box's bottom edge coincide. The flush `align-self: end` die-cut
  against the hairline is preserved exactly as before, with no extra offset.
- **If a tightly cropped asset is ever supplied** (alpha box = full canvas), set
  `width: 100%; margin-left: 0; margin-top: 0` and update `--hero-cutout-ar` to
  the new file's ratio. Nothing else in this spec changes.

*Size — revised 2026-10-07.* Sizing is still height-driven, but the height now
means **the visible figure's height**, not the canvas height. Read that
sentence twice: `--hero-cutout-h` changed meaning in this revision, and the old
value would now render ~40% larger than it did before even with the same number.

```css
.hero-portrait {
  width: min(
    calc(var(--hero-cutout-h) * 1048 / 1798),   /* figure height → figure width  */
    calc(100% + var(--hero-cutout-bleed))       /* never wider than its column + bleed */
  );
  aspect-ratio: var(--hero-cutout-ar);
}
```

| Token | Value | Applies |
|---|---|---|
| `--hero-cutout-h` | `clamp(480px, 72svh, 860px)` | ≥1024px |
| `--hero-cutout-h-md` | `clamp(380px, 52svh, 560px)` | 768–1023px |
| `--hero-cutout-h-sm` | `clamp(300px, 44svh, 420px)` | <768px |
| `--hero-cutout-ar` | `1048 / 1798` | all |
| `--hero-cutout-bleed` | `24px` ≥1024px · `16px` 768–1023px · `12px` <768px | all |

Worked examples (figure height × figure width, after the `min()` guard):

| Viewport | Old visible figure | New visible figure |
|---|---|---|
| 1440 × 900 | ~404 × 236 | **648 × 378** |
| 1920 × 1080 | ~484 × 283 | **778 × 453** |
| 1512 × 982 (laptop) | ~441 × 258 | **707 × 412** |
| 1280 × 800 | ~359 × 210 | **576 × 336** |

That is roughly **1.6× the linear size and 2.6× the visual area** of the
rejected version, before the column change below. The head alone goes from
~112px wide to ~180px — large enough to read as a portrait rather than a
thumbnail, which is the "showing professionality" the client asked for.

The `min()` second term is the safety rail that replaces the old "never grow
past the fold" conservatism: the figure can be as tall as it likes, but it can
never be wider than its own grid column plus the bleed, so it can never slide
left over the headline. On a tall narrow viewport (e.g. 1024 × 1366) the width
term binds and the figure simply stops growing. Verify this case in dev tools
before sign-off.

*The fold constraint is deliberately relaxed.* The previous spec sized the photo
so the hero content row always fitted above the fold. That is what produced a
timid image. From 2026-10-07: **the hero content row may exceed the viewport
height, and the System Map is expected to sit below the fold on a 900px-tall
laptop.** The `Scroll down ↓` cue already handles that, and the Map was always
specified as "the hero's closing beat", not an above-the-fold element. The one
hard limit that remains: the crown of the head must never be clipped by the top
of the section (guaranteed by `align-self: end` plus the content-row min-height
below, not by a magic number).

*Vertical alignment.* Unchanged in principle, with a tuning target that is now
actually reachable because the crop box starts at the crown of the head:

- Hard constraint, unchanged: `align-self: end`. The bottom of the box sits
  flush on the bottom of the hero content row — directly on the hairline above
  the System Map — so the figure's torso is die-cut by that hairline. A figure
  standing up out of the line reads as deliberate; a vertically sliced arm
  reads as a bug. Never translate the image up; that breaks the flush bottom.
- New tuning target: **the crown of the head lands level with the top of the
  top stat row** (its hairline), within ±16px. This falls out automatically
  when the content row's `min-height` equals the figure height, so set
  `min-height: var(--hero-cutout-h)` on `.hero-grid` at ≥1024px rather than
  nudging anything by hand.
- The old instruction "if the crown falls below the headline's cap line, raise
  the `svh` term" is **deleted**. It was compensating for the empty alpha band
  and will now oversize the figure.

*Horizontal placement — revised 2026-10-07.* Grid cols 8–12 (see "Grid" below),
`justify-self: end`, with the box's right edge sitting
`var(--hero-cutout-bleed)` past the right viewport edge and `overflow: hidden`
on `.hero` doing the cropping. Keep the existing breakout math and add the bleed
on top:

```css
/* ≥1024px */
.hero-portrait { margin-right: calc(-1 * var(--container-pad) - var(--hero-cutout-bleed)); }
/* ≥1320px */
.hero-portrait { margin-right: calc(-50vw + var(--container-max) / 2 - var(--hero-cutout-bleed)); }
```

Rule the engineer must verify by eye, not by number, unchanged in intent and
now easier to check because the box is the figure: **no more than ~6% of the
box's width may sit beyond the viewport edge, and the face, glasses and near
shoulder must never be cropped.** At the worked sizes above, 24px of a 378–453px
box is 5.3–6.4% — right at the limit, which is the intended tangency. The outer
(viewer-right) sleeve grazing the edge is correct; a visibly sliced arm is not.
If a future viewport pushes past ~6%, reduce `--hero-cutout-bleed`, never the
figure height.

*Below 1024px.* The cutout follows the text block in flow, `justify-self: end`,
`align-self: end` against the hairline, heights per the `-md` / `-sm` tokens and
bleed per the table above. Same crop box, same no-filter full color. It is never
centered (§12) and never overlaps the text. The rotated side label stays hidden
below 1024px.

**Grid — revised 2026-10-07.**

```css
/* ≥1024px */
.hero-grid {
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);   /* was 8fr / 4fr */
  gap: var(--space-8);
  min-height: var(--hero-cutout-h);                        /* was 60svh */
  align-items: center;
}
/* <1024px */
.hero-grid {
  grid-template-columns: 1fr;
  gap: var(--space-7);
  align-content: start;
  min-height: auto;                                        /* was 60svh — see note */
}
```

Why 7fr/5fr and not 6fr/6fr: the client asked for right-side prominence, and
5fr is what the larger figure needs — at a 1320px container the right column
goes from 387px to 483px, so the figure fills ~78–94% of its column instead of
~61% and finally owns the right side of the screen. 6fr/6fr was tested on paper
and rejected: it leaves the text column at 580px, and `--text-display` at that
viewport is ~108px, so the headline would wrap to five or six ragged lines and
the hero would lose its statement. 7fr/5fr is the largest photo column the
display type survives.

Consequences of the narrower text column, both already folded into the content
list above: headline `max-width` drops from `14ch` to `11ch` and the lead from
`44ch` to `40ch` at ≥1024px. At 7fr the column is 512–677px wide and the display
type is 88–128px, which is ~11 characters per line — so `11ch` is now a real cap
that produces a balanced rag instead of a value the column was already
overriding. A taller, narrower text block is also the right counterweight to a
taller figure.

`min-height: auto` below 1024px is an intentional fix, not an omission: the old
blanket `min-height: 60svh` on the single-column stack is what opened the gap
between the footer row and the portrait on mobile (noted in `handover.md`).
Hero height overall stays content-driven.

**Implementation note (not code, just the delta from the 2026-10-05 build):**
`.hero-portrait` gains `aspect-ratio` + `overflow: hidden` + the `min()` width
and loses `width: fit-content`; `.hero-portrait-img` loses its `height` rules
and gains the three percentage values; `.hero-grid` goes 8fr/4fr → 7fr/5fr and
`min-height: 60svh` → `var(--hero-cutout-h)` at ≥1024px / `auto` below;
`--space-4`/`--space-5` in the `margin-right` breakout math are replaced by
`var(--hero-cutout-bleed)`. No markup changes, no data changes.

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

### 6.4 Stack

Full component spec in §7.8. Layout at a glance: the standard §6.2 section
header, then one row of four equal cards.

```
Stack                                          The tools I actually build
                                               with, grouped by the job
                                               they do.
──────────────────────────────────────────────────────────────── (hairline)

┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ Digital        │ │ Digital        │ │ Website        │ │ CRM and        │
│ performance    │ │ tracking       │ │ developer      │ │ automation     │
│ ─────────────  │ │ ─────────────  │ │ ─────────────  │ │ ─────────────  │
│ ▭  Google An.. │ │ ▭  Google An.. │ │ ▭  Laravel     │ │ ▭  n8n         │
│ ▭  Google Ads  │ │ ▭  Google Ta.. │ │ ▭  Cloudflare  │ │ ▭  Make.com    │
│ ▭  Meta Ads    │ │ ▭  Pixel Hub.. │ │ ▭  Vercel      │ │ ▭  HubSpot     │
│ ▭  TikTok Ads  │ │                │ │ ▭  Lovable     │ │ ▭  Zapier      │
│                │ │                │ │ ▭  GitHub      │ │ ▭  Spreadsheet │
│                │ │                │ │ ▭  Codex       │ │ ▭  WABA        │
│                │ │                │ │ ▭  Claude Code │ │                │
└────────────────┘ └────────────────┘ └────────────────┘ └────────────────┘
```

(Names are truncated in this ASCII sketch only — they never truncate or wrap in
the build; see §7.8.)

### 6.5 Contact

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

### 7.8 Stack card

**Revision history.**

*Original spec (superseded 2026-10-07).* "Definition-list style rows separated
by hairlines: group name cols 1–4 (`small`, olive), tools cols 5–12 as a
comma-separated sentence in `lead`, ink. Text only, no logos." That treatment
was never built. It is replaced in full by the card grid below.

*2026-10-07 — client-directed replacement.* Client's words: *"Please make
section for such as 'ads', 'landing page'… change with a good section design. I
need you to create this with a card section and same size with each others to
make this design clean and more professional, you have 1 main card and card for
photo placeholder for a logo for skill/tools I build. For logo placeholder its
shape rectangle with a same size for every logo and dont put this big, perhaps
you can build this 15px x 15px."*

Read as: four equal cards (one per tool group), each with the group name as a
heading and a uniform column of small rectangular logo slots inside, one per
tool. That is what is specified here.

**§12 override — read this before building.** This section breaks two entries on
the AI-slop checklist, both by explicit client instruction, and both are
narrowed rather than deleted (see §12 for the matching carve-outs):

1. *"❌ Logo walls for tools."* The rule stands everywhere else on the site. The
   exception is narrow and is defined by all four of these conditions holding at
   once: the chips are **small** (56 × 32px, ~19% of card width), they are
   **grouped by function** rather than dumped in one undifferentiated grid,
   **every chip carries a text label** so it is readable without logo
   recognition, and there are **four groups, never more**. What the rule was
   protecting against — a wide undifferentiated band of vendor marks used as
   borrowed credibility — is exactly what this layout is not. A full-width
   logo strip, a 3+ column chip grid, or logo chips anywhere outside this
   section remain banned.
2. *"❌ Uniform grids of identical rounded cards with icons in circles."* Four
   equal-size rounded cards is the client's explicit, repeated request ("same
   size with each others"), and the client's instruction wins over the checklist.
   The parts of that pattern that are *not* required by the client are still
   refused: no icons, no circles, no shadows (§5.4), no border, no hover lift,
   no per-card accent color. The cards are flat `paper-2` panels and nothing
   more. The grid is also honest content — four real capability groups, matching
   the three pillars in §4.3 of the PRD and the System Map's node language —
   not four invented buckets filled to make a grid balance.

**Card.**

| Property | Value |
|---|---|
| Background | `var(--color-paper-2)` on the section's `paper` |
| Border / shadow | none / none (§5.4 — the background shift is the separation) |
| Radius | `var(--radius-md)` (12px) |
| Padding | `var(--space-6)` (32px) all sides; `var(--space-5)` (24px) below 768px |
| Width | `1fr` of the card grid — never a fixed px width |
| Height | equal across the row via `align-items: stretch` on the grid — **do not** set a `min-height`, and **do not** use `justify-content: space-between` inside the card (that would spread short lists and break cross-card row alignment) |

**Card grid.**

| Breakpoint | Columns | Gap |
|---|---|---|
| ≥1024px | `repeat(4, minmax(0, 1fr))` | `var(--space-5)` (24px) |
| 768–1023px | `repeat(2, minmax(0, 1fr))` | `var(--space-5)` (24px) |
| <768px | `1fr` | `var(--space-4)` (16px) |

At the 1320px container this gives a 294px card; at 768px, a ~341px card. Equal
height applies only when cards sit side by side (≥768px); stacked on mobile each
card hugs its own content.

**Card heading.** Group name, `text-h3` (1.5rem / 450), ink, sentence case. Wraps
to two lines on a 294px card — that is fine and expected, and the hairline below
it keeps the cards aligned anyway. Below the heading: `var(--space-4)` (16px),
then a `1px solid var(--color-line)` hairline across the full card content
width, then `var(--space-5)` (24px) before the first tool row. No tool count, no
eyebrow, no icon — the heading is the only label the card gets (§1 principle 2).

**Tool row.** One row per tool, in the order given in the data file. Always a
**single column**, at every breakpoint, so the rows line up horizontally across
all four cards and the section reads as a table rather than four unrelated
boxes.

```
▭   Google Tag Manager
└─ chip 56×32       └─ text-caption, olive
```

| Property | Value |
|---|---|
| Row layout | flex, `align-items: center`, `gap: var(--space-3)` (12px) |
| Row height | `32px` (= chip height) |
| Row-to-row gap | `var(--space-3)` (12px) |
| Label | `text-caption` (0.8125rem / 450 / 0.01em), `var(--color-olive)`, sentence-case as written in the data file (brand names keep their own casing: `n8n`, `Make.com`, `GitHub`, `HubSpot`, `TikTok Ads`) |
| Label wrapping | must not wrap. At a 294px card there are 162px of label space, which fits ~22 characters at `text-caption`. **Keep tool names ≤ 20 characters.** The longest current name, `Google Tag Manager` (18), measures ~113px — comfortable. |

**Logo chip (the placeholder).**

| Property | Value |
|---|---|
| Size | **56 × 32px**, identical for every chip in every card, never intrinsic to the logo |
| Radius | `var(--radius-sm)` (4px) |
| Background | `var(--color-paper)` |
| Border | `1px solid var(--color-line)` |
| Content, placeholder state | empty — the framed rectangle *is* the placeholder. No letter, no initial, no `?`, no emoji. |
| Content, real-logo state | the logo image centred inside, `max-width: 44px; max-height: 20px; object-fit: contain`, natural color, no filter. The chip frame, size and background do not change when a logo lands, so swapping assets in one at a time never disturbs the grid. |
| `flex: 0 0 56px` | so the chip never shrinks when a label is long |

*On the client's "15px x 15px".* Taken as intent, not as a measurement, and
documented here as a deliberate override. 15 × 15px cannot hold a logo: typical
vendor wordmarks are 3:1 to 5:1, so at 15px tall a mark would render under 4px
of cap height — illegible, and visually indistinguishable from a stray dot
rather than an intentional slot. It is also off the 4px spacing scale's useful
range for a bordered box. **56 × 32px (7:4)** is the smallest rectangle that
holds a real wordmark at a legible ~20px cap height while staying clearly
modest: it is 19% of the card's width and the chips together occupy under a
quarter of the card's area. The client's actual constraint — "don't put this
big", no logo wall — is honored. The ~15px figure survives as the logo's cap
height inside the chip, which is almost certainly what was meant.

**Data.** `src/data/stack.ts`, shape:

```ts
export const stackGroups = [
  { group: "Digital performance", tools: [{ name: "Google Analytics" }, …] },
  …
] as const;
```

`tools[].logo?` is added later as an `ImageMetadata` import when real assets
exist; until then every chip renders in its placeholder state. Groups and tool
names are client-supplied verbatim (sentence-cased per §4.3) — do not rename,
reorder, merge or "improve" them, including `Website developer`, `Pixel
Hubspot`, `Spreadsheet` and `WABA`. The full list lives in PRD §4.5.

**Accessibility.** The card is a `<section>` with its heading as the accessible
name; the tool list is a `<ul>`. Chips are decorative placeholders — `aria-hidden="true"`
until a real logo exists, at which point the `<img>` takes `alt=""` because the
adjacent text label already names the tool. Nothing here is interactive: no
links, no hover state, no focus target (§7.2's "tags are not clickable" logic).

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

- **Portrait (About):** real photo of Kemal, cropped 4:5, `radius-md`. Treatment: `filter: grayscale(1) contrast(1.05)` plus an overlay of `bone` with `mix-blend-mode: multiply` at 30% opacity, so the photo sits inside the palette. This is the print-mount treatment and it stays, because the About portrait is a rectangular photo mounted inside the layout. Unchanged by the hero revisions.
- **Portrait (Hero) — alpha cutout, revised 2026-10-05, resized 2026-10-07:** a true transparent-background cutout (`src/assets/images/kemal-portrait.png`, 1440×2560, alpha 0 outside the subject), standing directly on `paper` with **no backdrop block, no frame, no border, `--radius-none`**. It renders in **full natural color with no `filter` at all** (2026-10-05 client override — the filter-chain text that used to sit here is superseded; see §6.1 "Tone"). Tone must **never** come from a `mix-blend-mode` overlay layer, which would tint the transparent region and repaint a bone rectangle. Sizing, the subject-tight crop box, alignment and bleed rules: §6.1. The earliest spec here (cover-cropped inside a bone box with a bone multiply overlay) was written for an opaque rectangular photo and no longer applies to the hero.
- **Project covers:** real screenshots of the work (landing pages, dashboards, CRM pipelines, ad creatives) shown on a `bone` background with generous padding inside the frame, like a print mount. Never stock photos, never AI-generated objects or abstract 3D shapes.
- **Placeholders** (until real assets exist): flat `bone` block with the project name in `caption` olive, bottom-left. Does not apply to the hero portrait — the real cutout exists. Does not apply to Stack logo chips either — they have their own placeholder state (§7.8).
- **Tool logos (Stack only):** real vendor marks, natural color, contained inside the fixed 56×32 chip (§7.8). Never scaled to their own intrinsic size, never used anywhere else on the site, never used as a credibility strip.
- **Alpha cutouts in general:** no backdrop block behind them, no `mix-blend-mode` layer over them, and they are cropped only by a structural edge (a hairline, the viewport edge) — never by a visible box of their own. A transparent, unpainted crop box used solely to trim empty alpha padding (§6.1) is not a backdrop block and is allowed.
- Images never have shadows, borders, or tilt. (The Stack logo chip's 1px hairline frames an empty *slot*, not an image, and is part of the chip, not of any photo.)

---

## 10. Motion (everything else)

| Interaction | Duration | Property |
|---|---|---|
| Button / chip / link hover | 150ms ease-out | background-color, text-decoration-thickness |
| Row hover | 150ms ease-out | background-color |
| Filter change | 200ms | opacity crossfade of the list |
| Mobile menu open | 250ms `cubic-bezier(0.2,0,0,1)` | opacity |

**No** scroll-triggered reveals on sections, no parallax, no cursor followers, no marquee, no counters that tick up. The hero cutout does not animate, float, or parallax. Stack cards and logo chips have **no** hover state at all — nothing in that section is interactive.

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
- ❌ Uniform grids of identical rounded cards with icons in circles — **one carve-out: the four Stack cards (§7.8), client-directed. Even there: no icons, no circles, no borders, no shadows, no hover state, no per-card color.**
- ❌ Drop shadows of any kind
- ❌ All-caps labels or eyebrows above headings
- ❌ One highlighted word in a headline
- ❌ Monospace font for labels
- ❌ `01 / 02 / 03` numbering on anything that is not a real sequence (only Approach uses numbers)
- ❌ Arrows appended to button labels (only `↗` for external links)
- ❌ Meta strings joined with middle dots
- ❌ Emoji as icons
- ❌ Logo walls for tools — **one carve-out: the Stack logo chips (§7.8), client-directed, and only while all four conditions in §7.8 hold (56×32 chips, grouped by function, every chip text-labelled, four groups max). Logo chips are banned in every other section, as is any full-width logo strip.**
- ❌ Stock photos, AI-generated 3D objects, abstract illustrations
- ❌ Fade-and-slide-up on every section
- ❌ Centered layouts (except the Contact panel heading)
- ❌ Colors or font sizes not defined in this file
- ❌ A rectangular backdrop block behind a transparent cutout image (§9). A transparent, unpainted crop box that only trims empty alpha padding is not this.

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

  /* hero (§6.1) — revised 2026-10-07.
     NOTE: --hero-cutout-h now means the VISIBLE FIGURE height, not the canvas
     height. The canvas is cropped to the subject's alpha box by .hero-portrait. */
  --hero-cutout-h: clamp(480px, 72svh, 860px);     /* >=1024px */
  --hero-cutout-h-md: clamp(380px, 52svh, 560px);  /* 768-1023px */
  --hero-cutout-h-sm: clamp(300px, 44svh, 420px);  /* <768px */
  --hero-cutout-ar: 1048 / 1798;                   /* measured subject alpha box */
  --hero-cutout-bleed: 24px;                       /* past the right viewport edge */
  --hero-cutout-filter: grayscale(1) contrast(1.04) sepia(0.22) saturate(1.15) brightness(0.98); /* historical only — not applied */
  --hero-rule-h: clamp(40px, 6vw, 72px);

  /* stack (§7.8) */
  --stack-card-pad: var(--space-6);
  --stack-chip-w: 56px;
  --stack-chip-h: 32px;
  --stack-chip-logo-max-w: 44px;
  --stack-chip-logo-max-h: 20px;
  --stack-row-gap: var(--space-3);

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

@media (max-width: 1023px) {
  :root { --hero-cutout-bleed: 16px; }
}

@media (max-width: 767px) {
  :root {
    --grid-gap: 16px;
    --hero-cutout-bleed: 12px;
    --stack-card-pad: var(--space-5);
  }
}

@media (prefers-reduced-motion: reduce) {
  :root { --dur-fast: 0ms; --dur-base: 0ms; --dur-draw: 0ms; }
}
```

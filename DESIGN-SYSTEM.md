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
| `--text-display-xl` | `clamp(4.5rem, 16vw, 15rem)` | 300 | 0.95 | -0.035em | **Hero headline, short form only (1–2 words).** Added 2026-10-07 (b) — see §6.1. |
| `--text-display` | `clamp(3rem, 7vw + 1rem, 8rem)` | 300 | 0.95 | -0.035em | Hero headline, **sentence form only**. Unchanged; no longer the default for the hero — see §6.1 "Display headline". |
| `--text-h1` | `clamp(2.5rem, 4vw + 1rem, 4.5rem)` | 300 | 1.0 | -0.03em | Case study title, `/work` title |
| `--text-h2` | `clamp(2rem, 2.5vw + 1rem, 3rem)` | 350 | 1.05 | -0.02em | Section headings |
| `--text-h3` | `1.5rem` | 450 | 1.2 | -0.01em | Project titles, pillar titles, step names, Stack card headings |
| `--text-metric` | `clamp(2.5rem, 3vw + 1.25rem, 4rem)` | 300 | 1.0 | -0.03em | Metric values |
| `--text-lead` | `1.25rem` | 400 | 1.5 | -0.005em | Hero supporting line, intros |
| `--text-body` | `1.0625rem` | 400 | 1.6 | 0 | Body copy |
| `--text-small` | `0.9375rem` | 400 | 1.5 | 0 | Row details, nav |
| `--text-caption` | `0.8125rem` | 450 | 1.4 | 0.01em | Labels, metric labels, tags, Stack tool names |

`--text-display-xl` is the only token in this scale that may exceed the width of its
own column if misused. It is permitted on exactly one element — the hero `h1` — and
only while the hero headline is 1–2 words. The guard rail and the fallback are in
§6.1.

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
- **One shared left/right content edge, added 2026-10-07 (c).** Every section's
  primary content — nav links, hero headline/stats, section headings, card
  grids, footer links — reads from the exact same `Container` left/right edge
  down the whole page. A `<section>` wrapper MUST NOT add its own
  `padding-left`/`padding-right` alongside a centered `Container` child: doing
  so makes the `Container`'s `margin: auto` centering math asymmetric (the
  parent's content box is no longer symmetric around the viewport center), and
  the two edges silently drift out of alignment with every other section —
  exactly the bug fixed in the hero (§6.1): `.hero { padding-left:
  var(--space-7) }` shifted the hero's text column 24px right of the nav/
  footer/section-heading line, while contributing nothing the container's own
  gutter didn't already have room for. If an element needs to sit *outside*
  the shared content edge (like the hero's rotated rail, or the hero portrait
  since revision (d)), position it `absolute`/`fixed` within that gutter space
  — never widen the gutter itself by padding the section.
- **Corollary added 2026-10-07 (d) — right-edge bleeds are anchored, not
  calculated.** An element that must reach the viewport's right edge from
  inside a centered `Container` must not get there with a negative
  `margin-right` built out of `50vw - var(--container-max) / 2`. That
  expression omits `--container-pad` unless it is added explicitly, and
  `100vw`/`50vw` count the classic scrollbar while the layout box does not, so
  the result lands tens of pixels short or long depending on the browser. Pin
  the element with `position: absolute; right: <negative bleed>` against a
  full-width `position: relative` wrapper instead, and let the section's
  `overflow: hidden` do the cropping. The hero portrait's 51px right-edge
  shortfall (§6.1 revision (d)) was caused by exactly this.

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

*2026-10-07 (a) — the figure is sized from the subject, not the canvas, and reads
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
part of its own box.** That is why it read small and badly placed, and it is
also why the old tuning target ("crown level with the headline's cap line") was
unreachable no matter how far the `svh` term was raised.

Three changes followed: a crop box that removes the empty alpha padding; sizing
expressed as figure height and no longer capped at the fold; and the right
column growing from 4fr to 5fr. The crop-box technique survives into revisions
(b) and (d) below; the 7fr/5fr grid survives into (b) and is **retired in (d)**;
the specific `--hero-cutout-h` value from this revision (`clamp(480px, 72svh,
860px)`) does not survive at all.

*2026-10-07 (b) — the reference screenshot: a full-viewport figure, a left-rail
spine, and a greeting-scale headline.* **The composition in this entry is still
in force; its `.hero-portrait` sizing mechanism is superseded by (d) below.**
Client-directed, with an actual reference screenshot supplied for the first time
(the "Finox" Webflow template hero, saved at
`Documents\project\Portfolio Kemal\References\Hero-Banner.png`). Client's words:
*"please make our layout hero banner like the reference [image] and use the
ui/ux skills for improving your website development output."*

*2026-10-07 (c) — margin-alignment bugfix, found during a general "add proper
margins" request.* Not a design change — a CSS bug introduced by revision (b)'s
own `.hero { padding-left: var(--space-7) }`. That rule sat on the `<section>`
wrapping a centered `Container`, which made the container's `margin: auto`
centering asymmetric: measured live, the hero's text column (stats/headline/
lead) rendered 24px right of the nav logo, the section headings, and the
footer links — every other section's content shares one left edge; the hero
alone had drifted off it. The rail never needed the extra space: `left:
var(--space-3)` (12px) already fits inside the container's own gutter, which
never drops below 20px even at the narrowest desktop width. Fix: delete the
`padding-left` rule, nothing else changes. See §5.2's new shared-edge rule —
this bug is the reason that rule now exists, so it doesn't recur elsewhere.

*2026-10-07 (d) — the figure's width stops being a function of viewport height,
the crop window becomes variable, and the photo leaves the grid.* **This is the
revision in force.** Client-directed: *"I think for my photo on hero banner, you
can make this to closely on the left container. Because I see its very far GAP
from the left container and right container."*

Measured live, in a real browser, at **1440 × 722** — a realistic laptop *window*,
not the 1440×900 near-full-screen case revision (b) worked its examples against:

| Measured | Value |
|---|---|
| `.hero-text` right edge | `x = 774` |
| `.hero-portrait` left edge | `x = 1014` |
| **Dead space between the text column and the figure** | **240px** |
| `.hero-portrait` right edge | `x = 1389` (viewport 1440) — **51px short** of the intended 24px bleed *past* the edge |

Two separate defects, both in revision (b)'s `.hero-portrait` block.

**Defect 1 — width was a pure function of viewport *height*, inside a
fixed-fraction column.** `width: min(calc(var(--hero-cutout-h) * 1048 / 1798),
…)` derives the figure's width from `--hero-cutout-h`, which is itself derived
from `100svh`. The box then sits in a `minmax(0, 5fr)` grid track and is pinned
to that track's **right** edge (`justify-self: end` + a negative
`margin-right`). So when the viewport gets **shorter — not narrower, shorter** —
the derived width shrinks while the track's width does not, and because the box
is right-anchored, every pixel of width it loses moves its **left** edge further
right. The gap to the text column grows as the window gets shorter. Real laptop
windows are short: browser tabs, a bookmarks bar and the OS taskbar eat vertical
space that `100svh` never sees, which is why the 1440×900 worked examples looked
fine on paper and the same machine looked wrong in practice. At 1440×722 the
height-derived width was ~375px against ~615px of genuinely available
horizontal room — the figure was filling about 60% of its own slot and the
remaining 40% was the hole the client is pointing at.

**Defect 2 — the right-edge bleed was computed, and computed wrong.** The
≥1320px term `margin-right: calc(-50vw + var(--container-max) / 2 -
var(--hero-cutout-bleed))` accounts for the container's outer margin
(`50vw - 660px`) but **omits `--container-pad` entirely** (48px at this width),
so the box's right edge lands 48px inside where it should, of which the 24px
bleed only buys back half: a guaranteed 24px shortfall by arithmetic, before
anything else. The remainder of the measured 51px is the classic scrollbar:
`50vw` counts it, the container's layout box does not, so the two halves of the
expression are measured against different widths. The intended "slight graze
past the right edge" was therefore never happening at any viewport. §5.2 gained
a corollary so this class of bug does not recur elsewhere.

**The fix, in one sentence.** The figure's **width** becomes the primary,
horizontally-derived dimension — read off the space that actually exists between
the text column and the viewport edge — its **height** becomes the derived and
capped dimension, the crop window's aspect ratio becomes variable instead of
fixed, the box leaves the grid and is pinned straight to the viewport edge, and
the text column's width is derived *from the figure* so the gutter between them
is a designed constant at every viewport. Full specification under "Size" and
"Horizontal placement" below.

**What does not change, and why that is the hard part.** The subject's alpha box
is 1048 × 1798 (aspect 0.583) — tall and narrow. At the approved figure height
(586px at 1440×722) an aspect-locked box is only 342px wide, and no amount of
re-anchoring makes a 342px box fill a 615px slot. Growing it by height alone is
not available either: closing the slot at 1440×722 by height would need a
1055px-tall box, which would put the crown ~470px above the top of the content
row — behind the nav and clipped by `.hero { overflow: hidden }`. So the gap
could only be closed by making the box **wider relative to its height**, i.e. by
cutting the figure higher on the torso. That is now done in CSS, and it is the
one genuinely new idea in this revision:

> **The crop box's aspect ratio is no longer fixed.** The three
> `.hero-portrait-img` percentages (`width: 137.40%`, `margin-left: -28.24%`,
> `margin-top: -72.71%`) resolve **against the box's width only** — percentage
> margins on a child resolve against the containing block's *inline* size. They
> scale the canvas so the subject's width equals the box's width exactly, and
> offset it so the subject's left edge sits on the box's left edge and the crown
> of the head sits on the box's **top** edge. None of that depends on the box's
> height. The box's height therefore controls one thing only: **how far down the
> subject the `overflow: hidden` edge cuts.** Revision (b)'s note that these
> percentages are "tuned to the box's aspect ratio" is corrected here — they are
> tuned to the box's *width*. **They are unchanged by this revision and must not
> be recomputed.**

Consequence: letting the box be wider than `height × 0.583` simply crops the
figure higher — which is precisely the "wider head-and-shoulders cutout, cropped
at the collarbone" that §9 logged as an asset request under revision (b). We can
produce it from the existing asset, so that asset request is **withdrawn and
replaced** (see §9 — what is still wanted from a new shoot is *resolution*, not a
wider crop).

**Which ui/ux findings this revision leans on** (project convention: record the
pattern, not just the outcome):

- **`hero-centric-design`** — the "let the hero dominate the initial viewport
  without hiding the next content cue" clause is the constraint that kept this
  from being solved the easy, wrong way. The easy fix for a 240px hole is to
  shrink the figure until the hole closes; that would undo revision (b), which
  the client signed off after seeing the reference. Instead the figure gets
  **wider** (610px vs 445px at 1440×900, +37% linear) while the content row's
  height is left exactly as (b) set it — so the scroll cue still sits on the
  fold, the die-cut hairline and the System Map still start at `100svh`, and the
  next-content cue is untouched.
- **`minimalism-and-swiss-style`** — used again as a veto list, and again it is
  what identifies the bug as a bug: §1 principle 2 says structure is information,
  and a 240px void between two elements encodes nothing. It is also why the gap
  is closed by **derivation** (the text column's width is computed from the
  figure's, so the gutter is one constant, `--space-8`, already in the spacing
  rhythm) rather than by a tuned magic number per breakpoint. Palette, typeface,
  hairline vocabulary, the no-filter override and the full-colour cutout are
  explicitly out of scope and untouched.

```
┌────────────────────────────────────────────────────────────────┐
│ Kemal              Work  About  Approach  Contact [Book a call] │ ← nav, --nav-h (72px)
├────────────────────────────────────────────────────────────────┤
│                                     ▄▄▄▄▄▄▄▄▄▄▄▄▄              │ ← crown = content-row top
│ ▲                                 ████████████████             │   (--space-8 below the nav)
│ S                                ██████████████████            │
│ e   8+          55+             ███████████████████            │ ← stats, --space-8 below
│ n   Brands      Systems         ███████████████████            │   the content-row top
│ i   handled     shipped        ████████████████████            │
│ o                              ████████████████████            │
│ r                              ████████████████████            │
│                                ████████████████████            │
│ │   Hello                      ████████████████████            │ ← --text-display-xl
│ │                              ████████████████████            │
│ │                              ████████████████████            │
│ │   I'm Kemal, a senior        ████████████████████            │ ← --text-lead
│ │   growth specialist.         █████████████████████           │
│ │                              █████████████████████           │
│ │                              ██████████████████████          │
│ ▼                              ██████████████████████          │
│ 2026                           ███████████████████████         │
│     Scroll down ↓              ███████████████████████         │
└────────────────────────────────────────────────────────────────┘ ← the fold
────────────────────────────────────────────────────────────────── (hairline, at 100svh)
  ○────────○────────○────────○────────○                             ← SYSTEM MAP, its own row
  Ads      Landing  Tracking CRM      Automation                       (below the fold, intended)
  ...      page     ...      ...      ...
```

*(Left rail, top to bottom: rotated `Senior Growth`, the long hairline, rotated
`2026`. The figure is a cutout silhouette standing on `paper` — no box edge
anywhere. Its crown is level with the top of the content row, 64px under the
nav; its torso is cut only by the hairline above the System Map, which now sits
on the fold; its outer shoulder is tangent to the right viewport edge.)*

> **Proportions in the sketch above predate revision (d).** Since (d) the figure
> is ~1.4× wider, is cut higher on the torso, actually clears the right viewport
> edge by the 24px bleed, and its left edge sits exactly `--space-8` (64px) from
> the text column at every viewport. The horizontal construction diagram is under
> "Size" below; the vertical construction is unchanged.

**Content, top to bottom (this is the complete list — nothing else goes in the hero body):**

1. **Left rail** (≥1024px only) — **restructured 2026-10-07 (b).** One element,
   three parts, anchored to the far-left edge of the section and spanning the
   full height of the hero content row (top of the row down to the hairline):
   - *Rotated role label* — `Senior Growth`, `text-caption`, olive, reading
     bottom-to-top, at the top of the rail. Informational, not decorative, so
     it's allowed under §12. This carries the role, which is why the hero body
     has no separate name/role line (the name is the nav wordmark).
   - *Long vertical hairline* — the middle segment, filling whatever height is
     left. **This is the rule that used to sit inside the text column.** Its job
     is unchanged — it encodes the boundary between the identity mark at the top
     and the timestamp at the bottom — but in the rail it also does a second job
     the reference showed: it gives the hero a left edge, so the eye has a
     vertical anchor opposite the figure. `aria-hidden="true"`, not a link, no
     hover state.
   - *Rotated year* — `2026`, `text-caption`, olive, tabular lining nums, reading
     bottom-to-top, at the bottom of the rail. **Moved here from the bottom row.**
     Static text, not a link.
2. **Top stat row**: 2 metrics (not the full impact row — that stays with the
   System Map below), same `Metric` component, smaller context-setting numbers.
   Sits `--space-8` (64px) below the top of the content row, i.e. **below the
   crown of the head, not level with it** — see "Vertical alignment".
3. **Display headline** — **`--text-display-xl`** (was `--text-display`), ink.
   `max-width: 16ch` mobile / `11ch` ≥1024px. See "Display headline" below for
   the short-headline condition and the fallback.
4. **Lead line** — one short line in `text-lead`, olive, directly under the
   headline. `max-width: 40ch` ≥1024px, `48ch` below. No em-dash or any other
   decorative prefix (the reference's `— It's Finox…` dash encodes nothing;
   §1 principle 2).
5. **Bottom row** — **revised 2026-10-07 (b).**
   - ≥1024px: contains **only** `Scroll down ↓` in `text-small` olive, aligned
     left to the text column's left edge, pinned to the bottom of the content
     row. The year is in the rail (item 1).
   - <1024px: the rail is hidden, so this row keeps **both** `2026` (left,
     `text-caption`, tabular) and `Scroll down ↓` (right, `text-small`), exactly
     as built — and the short in-column vertical rule above it is retained at
     this breakpoint only, with `height: var(--hero-rule-h)`.
   - Either way it is **static text, not a link** — this is the one place a bare
     `↓` is allowed, precisely because it is an affordance and not a label (§12
     bans arrows on button/link labels, so making this a link would break that
     rule).
6. **The cutout portrait** (spec below). Through revision (c) it was the second
   grid column; since **(d)** it is **out of flow** — absolutely positioned
   against the right viewport edge inside `.hero-content`.

Below the content row, unchanged and out of scope for this revision: the
Growth System Map (§8) as its own full-width row with a hairline above it, then
the impact metrics row. Still inside the `#top` section, still the site's one
animated element.

> **Open question for the next pass (not changed here, §8 is out of scope for
> this revision):** the Map's draw animation is specified in §8.2 as running "on
> first load of the hero". Now that the Map begins exactly at the fold rather
> than above it, that animation may be spent before anyone sees it. Flag to the
> client; do not change §8 as part of the hero work. Revision (d) does not move
> the Map — the content row's height is untouched — so this item is still open
> and still unchanged.

**Why the secondary CTA does not resurface.** `See selected work` is dropped
outright rather than moved next to the scroll cue. Three reasons: the nav's
`Work` link already covers it from every scroll position; the next thing below
the fold is the System Map, whose nodes link into the work in Phase 3, so the
hero already points at the work structurally; and turning `Scroll down ↓` into
a link would put an arrow on a link label, which §12 forbids. Tracking
consequence: `cta_click` with `cta_location: "hero"` is no longer emitted —
that is expected, not a regression. The nav remains the only CTA source above
the fold.

**Display headline — new 2026-10-07 (b), acceptance basis amended (d).**

The reference's `Hello` is ~19% of the viewport's height and fills ~76% of its
text column. `--text-display` tops out at `8rem` (128px), which at a 1935px-wide
viewport is roughly 2.5× too small, and at a 1440px laptop fills only ~41% of the
text column. The headline is therefore set in **`--text-display-xl`:
`clamp(4.5rem, 16vw, 15rem)`**, weight 300, line-height 0.95, tracking -0.035em.

| Viewport width | `--text-display-xl` | `Hello` rendered width | Text column (rev. d) | Fill |
|---|---|---|---|---|
| 390px | 72px (min binds) | ~156px | ~350px (single col) | 45% |
| 768px | 123px | ~267px | ~706px (single col) | — |
| 1024px | 164px | ~356px | ~490px | 73% |
| 1280px | 205px | ~445px | ~627px | 71% |
| 1440px | 230px | ~499px | ~682px (at 900px tall) / ~706px (at 722px tall) | 73% / 71% |
| 1920px | 240px (max binds) | ~521px | 720px (`--hero-text-max` binds) | 72% |
| 2560px | 240px (max binds) | ~521px | 720px (`--hero-text-max` binds) | 72% |

The `15rem` max exists because the text column stops growing once the container
hits `1320px`; without it a `vw`-only size would eventually overrun its own
column on a wide display.

*Acceptance check — by proportion, not by pixel.* At ≥1024px the rendered
headline must occupy **70–80% of the text column's width**. If it falls outside
that band after a copy change, adjust the `15rem` maximum, never the `16vw` term
(the `vw` term is what keeps the mid-range viewports proportional).

*Amended 2026-10-07 (d) — what "the text column" means in that check.* The text
column is no longer a `7fr` grid track; it is the container's content width minus
the figure's reserve (see "Size"), capped by `--hero-text-max: 720px`. The
numbers barely moved — 682px at 1440×900 against 677px at `7fr` — which is why
the band still holds, and the `720px` cap is what keeps it holding on wide
displays, where the figure's reserve stops binding and an uncapped column would
balloon to ~1160px (fill would fall to 45%). The cap is inert below ~1500px.

*The guard rail — read this before changing hero copy.* `--text-display-xl` is
safe only for a **1–2 word headline**. The current approved copy is
`hero.headline = "Hello"` in `src/data/site.ts`, which mirrors the reference. If
a sentence-length headline is ever restored (PRD §4.1 originally carried
`I build growth systems, from the first ad click to the CRM that closes the deal.`
as its placeholder), `--text-display-xl` would set it at ~2.9 characters per line
in a 677px column. In that case the headline **must** be switched back to
`--text-display`, and the `11ch` / `16ch` max-widths become live constraints
again. The token to use is therefore a function of the copy, not a fixed choice:

| Headline copy | Token | max-width |
|---|---|---|
| 1–2 words (≤ 12 characters) — current | `--text-display-xl` | `11ch` ≥1024px (inert at this size, kept as a backstop) |
| A sentence | `--text-display` | `11ch` ≥1024px / `16ch` below |

Implement this as a single modifier class on the `h1` (e.g. `.hero-headline--xl`),
chosen in the template from the copy — not as a magic number typed into the
component. Both tokens stay defined in `tokens.css`.

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
**Reviewed 2026-10-07 (b) against the reference and unchanged** — the reference's
photo is an opaque rectangle whose background happens to match its page, which is
a different device for the same effect; our asset achieves it honestly, and the
client approved the cutout on 2026-10-05. Do not re-litigate.

*Tone.* **2026-10-05 client override — supersedes the filter-chain decision
below.** The client rejected the toned treatment outright: the hero photo
renders in its natural full color, with **no `filter` property on the `<img>`
at all**. `--hero-cutout-filter` is no longer applied anywhere; the token stays
defined in `tokens.css` for now only as a historical record, not referenced by
any component. Do not reintroduce `grayscale`/`sepia`/any tint on this image
without a new client sign-off. **Still in force after all three 2026-10-07
revisions — note in particular that the reference screenshot's photo is black and
white, and we are deliberately not copying that.**

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

*The crop box — introduced 2026-10-07 (a), **percentages unchanged in (b) and
(d)**, build this first.* `.hero-portrait` is not a plain `width: fit-content`
wrapper; it is a **crop window onto the subject**: its left and top edges are the
subject's left and top alpha edges, and the `<img>` is scaled and offset inside
it so the empty alpha padding falls outside. Every other number in this section
is measured against this box. All three percentage values below are correct as
built — **do not recompute them.**

```css
.hero-portrait {
  overflow: hidden;                              /* clips transparent pixels only */
  /* <1024px: a fixed-ratio box, in flow */
  aspect-ratio: var(--hero-cutout-ar);           /* 1048 / 1798 */
  justify-self: end;
  align-self: end;
  /* >=1024px: ratio is derived from an explicit width + height — see "Size" */
}

.hero-portrait-img {
  display: block;
  max-width: none;       /* global.css sets img { max-width: 100% }, which silently
                            clamps the scale-up below and breaks the whole crop */
  width: 137.40%;        /* 1440 / 1048  — scale canvas up so the subject fills the box width */
  height: auto;
  margin-left: -28.24%;  /*  296 / 1048  — pull the left margin out */
  margin-top: -72.71%;   /*  762 / 1048  — pull the empty top band out */
  /* percentage margins resolve against the box WIDTH; that is what makes this work,
     and it is why the box's HEIGHT can vary freely without retuning them (rev. d) */
}
```

Four things the engineer must know about this block:

- `overflow: hidden` here is **not** the banned backdrop rectangle (§9, §12).
  Nothing is painted — the box has no background, no border and no radius. It
  only stops transparent pixels from inflating the layout box. The §6.1
  2026-10-05 line "the element must not be given `overflow: hidden` — there is
  nothing to clip" is superseded: there *is* something to clip, 762px of empty
  alpha, and clipping it is the fix for the client's complaint.
- **The three percentages are a function of the box's WIDTH only** (percentage
  margins resolve against the containing block's inline size). Given a box of
  width `W`, the subject always renders `W` wide and `W × 1798 / 1048` tall, with
  its left edge on the box's left edge and the crown on the box's top edge. So:
  the head can never be cropped, and the box's height decides only how far down
  the torso the bottom edge cuts. **Revision (d) changes the box's height/ratio
  and therefore changes nothing here.**
- The subject bleeds off the canvas bottom (`y = 2560`). Through revision (c) the
  box's height was always exactly `W × 1798 / 1048`, so the image's bottom edge
  and the box's bottom edge coincided. Since (d) the box may be *shorter* than
  that, in which case the bottom of the chest is clipped by the box — which is
  the same die-cut, just higher up the torso. The box must **never be taller**
  than `W × 1798 / 1048`, or the figure floats above the hairline with empty box
  below it; that is what the second `min()` in `--hero-figure-h` prevents.
- **If a tightly cropped asset is ever supplied** (alpha box = full canvas), set
  `width: 100%; margin-left: 0; margin-top: 0`, update `--hero-cutout-ar` to the
  new file's ratio, and replace the `1798 / 1048` constants in `--hero-figure-h`
  and in the acceptance checks with the new subject ratio. Nothing else in this
  spec changes.

*Size — rewritten 2026-10-07 (d). Width is the primary driver; height is derived
and capped.*

**Superseded (rev. b).** `--hero-cutout-h: clamp(560px, calc(100svh -
var(--nav-h) - var(--space-8)), 1040px)` as *the figure's height*, with
`width: min(calc(var(--hero-cutout-h) * 1048 / 1798), <available width>)` and a
per-breakpoint available-width table. Retired for the two defects recorded in the
(d) revision entry above. The *value* of that clamp survives — it is now
`--hero-row-h`, and it sizes the hero **content row** rather than the figure, so
every vertical property revision (b) established (crown 64px below the nav,
scroll cue and die-cut hairline on the fold, Map starting at `100svh`) is
preserved exactly.

The horizontal construction, which is what (d) adds:

```
 0                                                                      100vw
 │                                                                        │
 │◀── gutter-x ──▶┌─ Container content box (C) ─────────┐◀── gutter-x ──▶ │
 │                │                                     │                 │
 │                │  text column           │◀─ gap ─▶│  figure (W)        │
 │                │  = C − reserve − gap   └─────────┤███████████████████▓│▓▓
 │                │                                  │                    │ └ bleed (24px),
 │                └──────────────────────────────────┼────────────────────┘   clipped by
 │                                                   │                        .hero {overflow}
 │                                reserve ──────────▶│◀── the part of W that
 │                                                                 lies inside C
```

```css
/* tokens.css — all >=1024px only; see the token table for the full list */
--hero-row-h:      clamp(560px, calc(100svh - var(--nav-h) - var(--space-8)), 1040px);
--hero-gutter-x:   calc((100vw - min(100vw, var(--container-max))) / 2 + var(--container-pad));
--hero-figure-slot: calc(0.45 * (100vw + var(--hero-cutout-bleed) - var(--hero-gutter-x)));
--hero-figure-ar-max: 1;      /* the box is never wider than it is tall */
--hero-figure-w-max: 610px;   /* resolution ceiling: 1048 source px / 610 = 1.72x */
--hero-figure-w: clamp(
  400px,
  min(var(--hero-figure-slot), calc(var(--hero-row-h) * var(--hero-figure-ar-max))),
  var(--hero-figure-w-max)
);
--hero-figure-h: min(var(--hero-row-h), calc(var(--hero-figure-w) * 1798 / 1048));
--hero-figure-gap: var(--space-8);   /* the designed gutter, text column -> figure */
--hero-figure-reserve: max(
  0px,
  calc(var(--hero-figure-w) - var(--hero-cutout-bleed) - var(--hero-gutter-x))
);
--hero-text-max: 720px;
```

Read each term literally, in this order — the order is the argument:

1. **`--hero-gutter-x`** is the distance from a viewport edge to the `Container`'s
   content edge: the container's own outer margin plus `--container-pad`. It is
   the same on both sides (the container is centered), which is why one token
   serves. At 1440 it is `60 + 48 = 108px`; at 1024, `0 + 40.96 = 41px`. This is
   the quantity revision (b)'s `margin-right` formula was missing half of.
2. **`--hero-figure-slot`** is the horizontally available width: the band from the
   container's left content edge out to the viewport's right edge plus the bleed,
   split **45% to the figure, 55% to the text**. The `0.45` is not a taste
   number: at the client's own 1440px viewport width the band is
   `1440 + 24 − 108 = 1356px`, and `0.45 × 1356 = 610.2px` — exactly the
   resolution ceiling below. So the share is set so that at 1440 the figure is as
   wide as the source file can afford, and narrower viewports scale down from
   there in proportion. If the asset's resolution improves, raise
   `--hero-figure-w-max` first and leave `0.45` alone.
3. **`--hero-figure-w`** is the figure's width — **the primary dimension now.**
   Three guards, in `clamp`/`min` order:
   - the slot (above) — this is the term that closes the gap;
   - `--hero-row-h × --hero-figure-ar-max` — **the box is never wider than it is
     tall.** This is the head-safety rail: at `W = H` the box shows
     `1 / 1.7156 = 58%` of the subject's rendered height, which lands the bottom
     edge around the collarbone. It is the only tunable in this block (see the
     acceptance check below);
   - `--hero-figure-w-max: 610px` — effective pixel density `1048 / 610 = 1.72×`,
     the floor revision (b) set. Raise only with a larger source asset.
   - the `400px` floor is a backstop; at ≥1024px the slot never falls below
     ~453px, so it does not bind in practice.
4. **`--hero-figure-h`** is **derived**: the row height, or the height at which
   the subject would run out of pixels, whichever is smaller. The second term
   matters on tall, narrow viewports (1024×1366), where a 453px-wide box can only
   be 777px tall before the subject's own bottom edge arrives; without it the box
   would be 1040px tall and the figure would float 263px above the hairline with
   empty box beneath it, breaking the die-cut.
5. **`--hero-figure-reserve`** is the part of the figure that lies *inside* the
   container's content box, and **the text column is `C − reserve −
   --hero-figure-gap`**. That is the whole gap fix: the text column's right edge
   is defined as "64px to the left of wherever the figure starts", so the gutter
   is a constant at every viewport width *and* every viewport height, and it stays
   a constant under any retuning of the figure's size. `max(0px, …)` handles very
   wide viewports (≥~2200px) where the figure sits entirely outside the container
   and reserves nothing.
6. **`--hero-text-max: 720px`** caps the text column so the §6.1 headline-fill
   band survives on wide displays (see "Display headline"). Inert below ~1500px.

```css
/* >=1024px — the figure leaves the grid */
.hero-content { position: relative; }   /* unchanged, from revision (b) */

.hero-portrait {
  position: absolute;
  bottom: 0;                                     /* replaces align-self: end — same die-cut */
  right: calc(-1 * var(--hero-cutout-bleed));    /* the bleed, anchored not calculated */
  width: var(--hero-figure-w);
  height: var(--hero-figure-h);
  aspect-ratio: auto;                            /* the ratio is now w/h, derived */
  margin-right: 0;                               /* the rev. (b) breakout margins are deleted */
  overflow: hidden;
}

.hero-text {
  margin-right: calc(var(--hero-figure-reserve) + var(--hero-figure-gap));
  max-width: var(--hero-text-max);
}
```

`.hero-portrait` stays where it is in the markup (inside `<Container
class="hero-grid">`). `.container` sets no `position`, so an absolutely positioned
child resolves against `.hero-content` — the full-viewport-width wrapper revision
(b) introduced — and **no markup change is required by this revision.** Leaving it
in the Container also means the base (<1024px) rules keep working untouched: there
it is still a normal grid item with `aspect-ratio`, `justify-self: end`,
`align-self: end`.

Why absolute positioning rather than a grid column: the grid track was supplying
a width the figure did not use, and the only way out of the track to the viewport
edge was a negative margin built from `vw` arithmetic — the source of defect 2 and
of the scrollbar mismatch. `right: calc(-1 * var(--hero-cutout-bleed))` is exact
in every browser at every width, needs no breakpoint table, and the ≥1320px
special case disappears with it. `bottom: 0` resolves against `.hero-content`,
whose height is the content row's height, i.e. the hairline above the System Map —
byte-for-byte the same edge `align-self: end` was hitting.

*Why `100vw` is still acceptable in these formulas.* `--hero-gutter-x` and
`--hero-figure-slot` do use `100vw`, which counts the classic scrollbar (~15px on
Windows) while the layout box does not. The error is ~7px in `gutter-x`, which
moves the figure's width by ~3px and the text column by ~4px — invisible, and it
cannot affect the figure's right edge, which is anchored rather than computed.
Do **not** "fix" it by swapping `100%` for `100vw`: percentages in
`--hero-figure-w` would resolve against `.hero-content` (viewport width) while the
same token used in `.hero-text`'s margin would resolve against the Container's
content box, and the two would silently disagree.

*Acceptance checks for this block, in dev tools, at ≥1024px:*

1. `.hero-portrait` right edge = viewport width + 24px (clipped). Measure the
   element, not the paint.
2. `.hero-portrait` left edge − `.hero-text` right edge = **64px**, at 1440×722,
   1440×900 and 1024×1366. This is the client's complaint; it must be 64 at every
   one of them.
3. `.hero-portrait` bottom edge = the hairline above the System Map (0px gap).
4. The crown of the head is never clipped, and at 1440-wide viewports the box's
   **bottom edge falls below the collarbone, never at or above the chin.** This is
   the one thing a formula cannot verify, because the head's share of the subject
   box was never measured. If 58% of the subject (the `W = H` case, which binds on
   short viewports) cuts too high, lower **`--hero-figure-ar-max`** — `0.85` shows
   68%, `0.75` shows 77% — and nothing else. Never raise it above `1`. The gap in
   check 2 stays 64px whatever you set it to, because the reserve is derived from
   the same token.
5. Effective density `1048 / <measured box width>` ≥ 1.7.

*Worked examples, ≥1024px (`--container-max` 1320px, pad `clamp(20px, 4vw, 48px)`,
bleed 24px, nav 72px, `--space-8` 64px). "Visible" = the share of the subject's
1798px height the box shows; the remainder is die-cut by the hairline.*

| Viewport | Row h | Slot | **Figure (w × h)** | Visible | Text col | **Gap** | Figure right edge | Binding width term |
|---|---|---|---|---|---|---|---|---|
| **1440 × 722** (the reported case) | 586 | 610 | **586 × 586** | 58% | 706 | **64** | 1464 | `ar-max` (height) |
| **1440 × 900** (rev. b's example) | 764 | 610 | **610 × 764** | 73% | 682 | **64** | 1464 | `w-max` |
| 1280 × 800 | 664 | 565 | **565 × 664** | 68% | 627 | 64 | 1304 | slot |
| 1366 × 768 | 632 | 594 | **594 × 632** | 62% | 661 | 64 | 1390 | slot |
| **1024 × 1366** (tall, narrow) | 1040 | 453 | **453 × 777** | 100% | 490 | **64** | 1048 | slot |
| 1024 × 640 (short, narrow) | 560 | 453 | **453 × 560** | 72% | 490 | 64 | 1048 | slot |
| 1440 × 650 (very short) | 560 | 610 | **560 × 560** | 58% | 720 (capped) | 76 | 1464 | `ar-max` (height) |
| 1920 × 1080 | 944 | 718 | **610 × 944** | 90% | 720 (capped) | 174 | 1944 | `w-max` |
| 2560 × 1440 | 1040 | 862 | **610 × 1040** | 99% | 720 (capped) | 442 | 2584 | `w-max` |

Against revision (b), at the same viewports: 1440×722 was **375 × 643** with a
240px gap and the right edge 51px *short* of the viewport; it is now **586 × 586**
with a 64px gap and the bleed landing correctly — **1.56× wider**. 1440×900 was
764 × 445; it is now 764 tall × **610** wide — same height, **1.37× wider**,
1.37× the area, so the "figure must read as dominant" constraint from (b) is met
by a wider margin than before, not undone. 1024×1366 was 739 × 431 and is now
777 × 453. 2560×1440 reproduces revision (b)'s maximum figure (1040 × 606) almost
exactly at 1040 × 610 — the ceiling has not moved.

Note the two rows where the gap is *not* 64px (1440×650, and ≥1600-wide
viewports): there `--hero-text-max` has clipped the text column before the
reserve could, so the surplus appears as extra air to the right of the text. That
is the headline-fill band being protected, and it is a cap on a *text measure*,
not dead space inside the figure's slot. At 1920 and above the figure also sits
largely outside the capped container by construction — that is inherent to
"bleed to the viewport edge" plus "container maxes out at 1320px", it was equally
true of every previous revision, and the glyph-to-figure air at 1920 is
unchanged from (b) (~465px vs ~477px).

- *Row-height minimum `560px`* — binds below a ~696px-tall viewport (e.g. a
  1280×650 window). Below that, letting the row keep shrinking turns the figure
  back into the thumbnail this whole thread is about; accept that the hairline
  drops below the fold instead.
- *Row-height maximum `1040px`* — binds above a ~1176px-tall viewport. Past
  ~1040px the head renders larger than life size on a 27" display, and at
  `--hero-figure-w-max: 610px` the box is anyway within a pixel of showing the
  entire subject, so more height would buy nothing.
- *This formula is coupled to two other values.* `--nav-h` (§7.5's 72px, now a
  token) and `.hero { padding-top: var(--space-8) }`. If either changes, the row
  and therefore the figure change with it — which is correct and intended, but it
  means neither can be edited casually.

*The fold constraint stays relaxed.* **The hero content row may exceed the
viewport height, and the System Map is expected to sit below the fold.** The
`Scroll down ↓` cue handles that, and the Map was always specified as "the hero's
closing beat". Since revision (b) the Map starts *immediately* at the fold, and
revision (d) does not move it — the row height is untouched. The one hard limit
that remains: the crown of the head must never be clipped by the top of the
section, which `bottom: 0` plus `--hero-figure-h ≤ --hero-row-h` guarantees by
construction rather than by a magic number.

*Vertical alignment — target from revision (b), mechanism updated in (d).*

- Hard constraint, **unchanged**: the bottom of the box sits flush on the bottom
  of the hero content row — directly on the hairline above the System Map — so
  the figure's torso is die-cut by that hairline. A figure standing up out of the
  line reads as deliberate; a vertically sliced arm reads as a bug. Never
  translate the image up; that breaks the flush bottom. Since (d) this is
  `bottom: 0` on an absolutely positioned box instead of `align-self: end` on a
  grid item; the resulting edge is identical.
- **Superseded (rev. a):** *"the crown of the head lands level with the top of
  the top stat row (its hairline), within ±16px."* The reference does not do
  this. Measured there, the crown is at 16.1% of viewport height and the stat
  row's top is at 23.4% — **the stats start ~90px (7.3% of viewport height) below
  the crown**, which at a 900px laptop is ~66px.
- **Tuning target (rev. b, still in force):** the crown lands level with the
  **top of the content row** (`min-height: var(--hero-row-h)` + a bottom-anchored
  box of the same height gives this for free), and the top stat row sits
  **`--space-8` (64px) below it**, via `padding-top: var(--space-8)` on
  `.hero-text` at ≥1024px only. Tolerance ±12px. Do not nudge anything else by
  hand.
- **Exception introduced by (d), expected and correct:** when
  `--hero-figure-h` is capped by the subject's own pixels rather than by the row
  (tall, narrow viewports — 1024×1366 is the case), the box is shorter than the
  row, so the crown sits *below* the row top (263px below it at 1024×1366) and
  there is air above the head. The figure cannot be taller without being wider,
  and it cannot be wider without overrunning the text column. Revision (b) had
  the same behaviour and more of it (301px of air at the same viewport). Do not
  "fix" this by scaling the image up inside the box — that would crop the crown.
- The rotated label at the top of the left rail starts **`--space-5` (24px)** below
  the content-row top (reference: 30px at its scale ≈ 22px at ours), so the rail
  begins just under the crown, not level with it.

*Horizontal placement — rewritten 2026-10-07 (d).* The figure is pinned to the
right **viewport** edge, not to a grid column:

```css
/* >=1024px, and the only rule needed at any width >=1024 */
.hero-portrait { position: absolute; right: calc(-1 * var(--hero-cutout-bleed)); }
```

**Superseded (rev. a/b/c):** `justify-self: end` plus
`margin-right: calc(-1 * var(--container-pad) - var(--hero-cutout-bleed))` at
≥1024px and `margin-right: calc(-50vw + var(--container-max) / 2 -
var(--hero-cutout-bleed))` at ≥1320px, with the `min()` available-width table
below. All of it is deleted at ≥1024px. The ≥1320px breakpoint for
`.hero-portrait` disappears entirely — there is nothing left in it.

**Superseded table (rev. b's `min()` second term), kept only so nobody
reintroduces it:**

| Breakpoint | `min()` second term — DO NOT USE at ≥1024px |
|---|---|
| <768px | `calc(100% + var(--container-pad) + var(--hero-cutout-bleed))` — **still in force below 768px** |
| 768–1023px | `calc(100% + var(--container-pad) + var(--hero-cutout-bleed))` — **still in force 768–1023px** |
| 1024–1319px | ~~`calc(100% + var(--container-pad) + var(--hero-cutout-bleed))`~~ |
| ≥1320px | ~~`calc(100% + 50vw - var(--container-max) / 2 + var(--hero-cutout-bleed))`~~ |

Rule the engineer must verify by eye, not by number: **no more than ~6% of the
box's width may sit beyond the viewport edge, and the face, glasses and near
shoulder must never be cropped.** The larger figure makes this *easier*, not
harder — 24px of a 453–610px box is **3.9–5.3%**, comfortably inside the limit.
The outer (viewer-right) sleeve grazing the edge is correct; a visibly sliced arm
is not. If a future viewport pushes past ~6%, reduce `--hero-cutout-bleed`, never
the figure width.

*~~Accepted deviation from the reference — the horizontal gap.~~ **Superseded
2026-10-07 (d).*** Revision (b) recorded that our asset's 0.583 subject aspect
leaves ~230px of air between the headline and the figure at 1440×900, that this
was "a property of the asset, not of the layout", and that the only real fix was
a wider head-and-shoulders cutout from the same shoot. That reasoning held only
while the crop box's aspect ratio was locked to the subject's full alpha box. It
is not locked: the three crop percentages depend on the box's width alone, so the
box can be cut shorter and the figure rendered larger and wider from the same
file. Revision (d) does exactly that, and the air at 1440×900 drops from ~230px to
a designed 64px gutter. The asset request in §9 is updated accordingly — what is
still wanted from a new shoot is **more pixels**, not a wider crop.

*Below 1024px — reviewed, unchanged by (d).* The cutout follows the text block in
flow, as a fixed-ratio box: `aspect-ratio: var(--hero-cutout-ar)`,
`justify-self: end`, `align-self: end` against the hairline, `width: min(<height
token> × 1048 / 1798, calc(100% + var(--container-pad) + var(--hero-cutout-bleed)))`,
`margin-right: calc(-1 * var(--container-pad) - var(--hero-cutout-bleed))`,
heights per the `-md` / `-sm` tokens and bleed per the token table below. Same
crop box, same no-filter full color. It is never centered (§12) and never
overlaps the text. The left rail stays hidden below 1024px, which is why the year
and the short in-column rule are retained in the stacked layout at these
breakpoints (content item 5). The `-md` and `-sm` heights are **deliberately not
raised**: the reference is a desktop screenshot and gives no mobile guidance, the
stacked layout already gives the figure a full-width row of its own, and
`clamp(380px, 52svh, 560px)` on a 768×1024 tablet is already ~55% of the viewport.
The stacked layout has no "gap to the text" to close — the figure is below the
text, not beside it — so none of (d) applies here.

| Token | Value | Applies | Status |
|---|---|---|---|
| `--nav-h` | `72px` | all | 2026-10-07 (b) — tokenises the 72px nav height from §7.5 so the hero row height can reference it. No visual change to the nav. |
| `--hero-row-h` | `clamp(560px, calc(100svh - var(--nav-h) - var(--space-8)), 1040px)` | ≥1024px | **renamed + re-roled 2026-10-07 (d)** — same value as (b)'s `--hero-cutout-h`, but it now sizes the hero **content row** and caps the figure's height. It is no longer "the figure's height". |
| ~~`--hero-cutout-h`~~ | ~~`clamp(560px, calc(100svh - var(--nav-h) - var(--space-8)), 1040px)`~~ | ~~≥1024px~~ | **deleted 2026-10-07 (d)** — replaced by `--hero-row-h`. Remove the name so nothing can keep sizing the figure from viewport height alone. |
| `--hero-gutter-x` | `calc((100vw - min(100vw, var(--container-max))) / 2 + var(--container-pad))` | ≥1024px | **new (d)** — viewport edge → `Container` content edge, identical both sides |
| `--hero-figure-slot` | `calc(0.45 * (100vw + var(--hero-cutout-bleed) - var(--hero-gutter-x)))` | ≥1024px | **new (d)** — the available-width term, and the gap fix |
| `--hero-figure-ar-max` | `1` | ≥1024px | **new (d)** — box never wider than tall; the head-safety tunable |
| `--hero-figure-w-max` | `610px` | ≥1024px | **new (d)** — resolution ceiling, `1048 / 610 = 1.72×` |
| `--hero-figure-w` | `clamp(400px, min(var(--hero-figure-slot), calc(var(--hero-row-h) * var(--hero-figure-ar-max))), var(--hero-figure-w-max))` | ≥1024px | **new (d)** — **the primary dimension** |
| `--hero-figure-h` | `min(var(--hero-row-h), calc(var(--hero-figure-w) * 1798 / 1048))` | ≥1024px | **new (d)** — derived from the width |
| `--hero-figure-gap` | `var(--space-8)` | ≥1024px | **new (d)** — the designed text→figure gutter |
| `--hero-figure-reserve` | `max(0px, calc(var(--hero-figure-w) - var(--hero-cutout-bleed) - var(--hero-gutter-x)))` | ≥1024px | **new (d)** — the figure's intrusion into the container; drives the text column's width |
| `--hero-text-max` | `720px` | ≥1024px | **new (d)** — keeps the headline-fill band valid on wide displays |
| `--hero-cutout-h-md` | `clamp(380px, 52svh, 560px)` | 768–1023px | reviewed, unchanged by (d) |
| `--hero-cutout-h-sm` | `clamp(300px, 44svh, 420px)` | <768px | reviewed, unchanged by (d) |
| `--hero-cutout-ar` | `1048 / 1798` | **<1024px only after (d)** | value unchanged; at ≥1024px the box's ratio is derived from its explicit width and height, so this token is no longer referenced there |
| `--hero-cutout-bleed` | `24px` ≥1024px · `16px` 768–1023px · `12px` <768px | all | reviewed, unchanged — at ≥1024px it is now consumed by `right:` rather than by a `margin-right` |
| `--hero-rule-h` | `clamp(40px, 6vw, 72px)` | **<1024px only** | scope narrowed 2026-10-07 (b) — the ≥1024px rule is the rail's `flex: 1` segment and has no fixed height |

**The left rail — new 2026-10-07 (b), ≥1024px only. Unchanged by (d).**

The rail replaces the old `.hero-edge-label` (which held only the rotated role
label) and absorbs two elements that used to live elsewhere. It must span the
**hero content row**, from the top of that row down to the hairline above the
System Map — *not* the whole `#top` section, which also contains the System Map
and the impact row.

*Required markup.* `<Container class="hero-grid">` is wrapped in a
`position: relative` element — `<div class="hero-content">` — and the rail is a
child of that wrapper, not of `.hero`. Anchoring the rail with `position:
absolute; top: var(--space-8); bottom: 0` against `.hero` would resolve to the
bottom of the System Map row and run the hairline straight down past the Map. Do
not fix that with a hard-coded height. (Since revision (d) this same wrapper is
also the containing block for the absolutely positioned portrait, so it is now
load-bearing twice.)

```css
.hero-content { position: relative; }

/* ≥1024px */
.hero-rail {
  position: absolute;
  inset-block: 0;                       /* = the content row, i.e. crown → hairline */
  left: var(--space-3);                 /* 12px; fits inside the container's own gutter (rev. c) */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--space-5);          /* 24px — the label starts just below the crown */
  padding-bottom: var(--space-5);
}

.hero-rail-label,
.hero-rail-year {
  writing-mode: vertical-rl;
  transform: rotate(180deg);            /* reads bottom-to-top */
  font-size: var(--text-caption);
  font-weight: 450;
  letter-spacing: 0.01em;
  color: var(--color-olive);
  white-space: nowrap;
}

.hero-rail-year { font-variant-numeric: tabular-nums lining-nums; }

.hero-rail-rule {
  flex: 1 1 auto;                       /* the length is derived, never a token */
  width: 1px;
  min-height: var(--space-8);           /* 64px — if the rail is ever too short, the
                                           rule shrinks to this and the rail stays legible */
  background: var(--color-line);
  margin-block: var(--space-6) var(--space-4);   /* 32px above, 16px below */
}

/* <1024px */
.hero-rail { display: none; }
```

Why the rule's length is `flex: 1` rather than a token: in the reference the rule
occupies 51.5% of the viewport's height, but that number is a *consequence* of
the label, the year and the gaps — it is not a designed value. Deriving it means
the spine stays correct at every viewport height instead of needing a second
clamp. At 1440 × 900 this yields a ~570px rule (63% of the viewport), slightly
longer than the reference because `Senior Growth` is a shorter label than the
reference's `Product Designer`; that is correct and should not be trimmed.

*Accessibility.* Do **not** put `aria-hidden="true"` on the rail as a whole — the
role label and the year are real content, and the role label is the only place
the site states Kemal's role above the fold. Mark only `.hero-rail-rule` with
`aria-hidden="true"`. This is also why the year must not be duplicated into the
bottom row at ≥1024px: it would be read twice.

**The text column — spacing revised 2026-10-07 (b), width revised (d).**

At ≥1024px `.hero-text` stops using a single uniform flex `gap` and takes the
measured rhythm from the reference. Below 1024px the existing uniform
`gap: var(--space-6)` is kept exactly as built.

| From → to | ≥1024px | Reference basis |
|---|---|---|
| Content-row top → top stat row | `padding-top: var(--space-8)` (64px) | stats start 12.8% of viewport height below the nav |
| Stat row → headline | `var(--space-8)` (64px) | ~116px measured; the display line-box's own leading supplies the rest |
| Headline → lead line | `var(--space-5)` (24px) | ~31px measured |
| Lead line → bottom row | `margin-top: auto` on the bottom row | the reference leaves the column's lower third empty on purpose |
| Bottom row → content-row bottom | 0 (the row sits on the hairline) | scroll cue at 94% of viewport height |

**Width, revision (d).** `.hero-text` is the hero grid's only in-flow item at
≥1024px, so its width is the container's content width minus the figure's
reserve and the designed gutter, capped by `--hero-text-max`:

```css
/* ≥1024px */
.hero-text {
  margin-right: calc(var(--hero-figure-reserve) + var(--hero-figure-gap));
  max-width: var(--hero-text-max);     /* 720px */
}
```

This is the mechanism that makes the gap a constant: the column ends where the
figure begins, minus 64px, by derivation rather than by a fraction that happens
to fit. At 1440×900 it measures 682px against the 677px the retired `7fr` track
gave, which is why none of the headline/lead measures or the fill band needed
retuning.

`.hero-text` keeps `align-self: stretch` so `margin-top: auto` on the bottom row
resolves against the full row height. With the row at 764px (1440×900) the text
column's content measures ~500px, leaving ~250px of deliberate air above the
scroll cue — that emptiness is the reference's composition and is not a bug to
fill.

**Grid — 7fr/5fr retired 2026-10-07 (d).**

```css
/* ≥1024px */
.hero-grid {
  grid-template-columns: minmax(0, 1fr);   /* was minmax(0, 7fr) minmax(0, 5fr) */
  gap: 0;                                  /* was var(--space-8); nothing to space */
  min-height: var(--hero-row-h);           /* was var(--hero-cutout-h) — same value */
  align-items: stretch;                    /* was center; inert either way now */
}
/* <1024px — unchanged */
.hero-grid {
  grid-template-columns: 1fr;
  gap: var(--space-7);
  align-content: start;
  min-height: auto;
}
```

**Superseded (rev. a/b):** `grid-template-columns: minmax(0, 7fr) minmax(0, 5fr)`
with `gap: var(--space-8)` at ≥1024px. Revision (b) already observed that the
ratio had stopped controlling the figure's size and that the `5fr` track was
"now only a cap". It was worse than that: it was a cap that reserved 483px at
1440 and then let the figure use only 375px of it, with the surplus landing as
dead space on the figure's left — the bug this revision fixes. With the figure
out of flow there is no second track to size, and the `--space-8` grid gap is
re-expressed, unchanged in value, as `--hero-figure-gap`.

What `7fr` used to control was the **text column**, and the replacement
derivation lands within ~5px of it at the client's viewport (682px vs 677px at
1440×900), so the 70–80% headline-fill band and the `40ch` lead measure carry
over untouched. 6fr/6fr remains rejected for the reason given in revision (a) —
and the question is now moot, since the split is derived from the figure rather
than chosen.

`min-height: auto` below 1024px is an intentional fix, not an omission: the old
blanket `min-height: 60svh` on the single-column stack is what opened the gap
between the footer row and the portrait on mobile. Hero height overall stays
content-driven below 1024px.

**Implementation note (not code — the delta from the current build, which is at
revision (c)):**

1. **No markup change.** `.hero-content`, `.hero-rail` and the portrait's
   position in the tree all stay as built. (`.container` sets no `position`, so
   the absolutely positioned portrait resolves against `.hero-content`.)
2. `tokens.css`: delete `--hero-cutout-h`; add `--hero-row-h` (same value),
   `--hero-gutter-x`, `--hero-figure-slot`, `--hero-figure-ar-max`,
   `--hero-figure-w-max`, `--hero-figure-w`, `--hero-figure-h`,
   `--hero-figure-gap`, `--hero-figure-reserve`, `--hero-text-max`. Full block in
   §13. `--hero-cutout-ar`, `-h-md`, `-h-sm`, `--hero-cutout-bleed`,
   `--hero-rule-h` are unchanged.
3. `.hero-portrait` at **≥1024px**: replace the whole `width: min(...)` +
   `margin-right` pair with `position: absolute; bottom: 0; right: calc(-1 *
   var(--hero-cutout-bleed)); width: var(--hero-figure-w); height:
   var(--hero-figure-h); aspect-ratio: auto; margin-right: 0`.
4. **Delete the `@media (min-width: 1320px)` block from `Hero.astro`
   entirely** — both of its rules were `.hero-portrait` width/margin overrides and
   both are now wrong. Nothing replaces it.
5. `.hero-portrait` base rule (<768px) and the 768–1023px override: **unchanged.**
   They keep `aspect-ratio: var(--hero-cutout-ar)`, `justify-self: end`,
   `align-self: end`, the `width: min(...)` pair and the `margin-right` breakout.
6. `.hero-text` at ≥1024px: add `margin-right: calc(var(--hero-figure-reserve) +
   var(--hero-figure-gap))` and `max-width: var(--hero-text-max)`. Its
   `padding-top`, its per-pair spacing and `align-self: stretch` are unchanged.
7. `.hero-grid` at ≥1024px: `grid-template-columns: minmax(0, 1fr)`, `gap: 0`,
   `min-height: var(--hero-row-h)`, `align-items: stretch`.
8. `.hero-portrait-img`: **untouched.** All three percentages stay exactly as
   built, including `max-width: none`.
9. Everything else in `Hero.astro` — the rail, the headline modifier logic, the
   footer row, the map row, `.hero { padding-top / overflow: hidden }` — is
   untouched.

No data changes are required by this revision. The current `src/data/site.ts`
copy (`headline: "Hello"`, `lead: "I'm Kemal a Senior Growth Performance"`) is
already in the short-headline shape this spec assumes; it is still placeholder
copy that Kemal replaces, but any replacement headline must stay 1–2 words or the
token must change with it.

**Reviewed in revisions (b) and (d) and deliberately NOT changed — with reasons.**
Do not "also fix" any of these.

| Element | Reason |
|---|---|
| Alpha cutout rather than a rectangular photo | Client-approved 2026-10-05; the reference's rectangle only works because its background matches its page |
| No backdrop, frame, border, radius, shadow | Client-approved 2026-10-05; §12 |
| Full natural color, no `filter` | Client override 2026-10-05; the reference being black and white does not reopen it |
| No CTA buttons in the hero body | Client-approved 2026-10-05; the reference agrees |
| Crop-box technique + its three `.hero-portrait-img` percentages | Fixes a measured bug; and (d) deliberately changes only the box's height/ratio, which these percentages do not depend on |
| `--hero-row-h`'s value, i.e. the content row's height | (d) is a horizontal fix. Keeping the row height identical is what preserves the crown-64px-below-the-nav target, the scroll cue on the fold, the die-cut hairline at `100svh` and the Map's position |
| Bottom-flush die-cut at the hairline | Reproduces the reference's "figure cut by the bottom edge" with a structural edge instead of an overflow. (d) changes only the CSS that achieves it (`bottom: 0` vs `align-self: end`) |
| `--hero-cutout-bleed` 24/16/12px | The larger figure improves the overflow ratio to 3.9–5.3%; (d) makes the 24px actually land |
| `--hero-cutout-h-md` / `-sm` and the whole <1024px layout | Reference gives no mobile guidance; the stacked figure has no side gap to close |
| `.hero { padding-top: var(--space-8) }` | 64px vs the reference's ~50px equivalent; within tolerance, and load-bearing in `--hero-row-h` |
| `.hero { overflow: hidden }` | Still what crops the bleed — and now the only thing that does |
| Left rail, its position, styling and accessibility rules | Untouched by (d); it lives in the left gutter, the figure in the right |
| Lead line directly under the headline, `40ch` / `48ch` | Matches the reference's tagline placement and measure; the derived column is within 5px of the retired `7fr` one |
| Top stat row content (2 metrics, `Metric` component) | Matches the reference's two-stat row |
| System Map + impact row below | Out of scope for both revisions |

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
- **Portrait (Hero) — alpha cutout, revised 2026-10-05, resized 2026-10-07 (a), (b) and (d):** a true transparent-background cutout (`src/assets/images/kemal-portrait.png`, 1440×2560, alpha 0 outside the subject), standing directly on `paper` with **no backdrop block, no frame, no border, `--radius-none`**. It renders in **full natural color with no `filter` at all** (2026-10-05 client override — the filter-chain text that used to sit here is superseded; see §6.1 "Tone"). Tone must **never** come from a `mix-blend-mode` overlay layer, which would tint the transparent region and repaint a bone rectangle. Sizing, the crop window, alignment and bleed rules: §6.1. Since revision (d) the crop window's **aspect ratio is variable** — it is cut as wide as the space beside the text allows and as deep as the viewport height allows, so on a short laptop window the figure reads as a head-and-shoulders crop and on a tall one as the full chest-up figure. The earliest spec here (cover-cropped inside a bone box with a bone multiply overlay) was written for an opaque rectangular photo and no longer applies to the hero.
  - *~~Asset request, logged 2026-10-07 (b): a wider head-and-shoulders cutout.~~* **Withdrawn 2026-10-07 (d)** — the variable crop window produces that framing from the existing file, because the crop percentages depend on the box's width only (§6.1 "The crop box"). Nothing in CSS is compensating for a missing asset any more.
  - *Asset request, replaced 2026-10-07 (d) — resolution, not crop.* The figure's width is capped at `--hero-figure-w-max: 610px` purely to hold effective pixel density at `1048 / 610 ≈ 1.72×`. A re-export of the same shoot with the **subject's alpha box at ≥1800px wide** (the current one is 1048px) is the only thing that would let that cap rise, which is the only thing that would let the figure grow further on large displays. It is a nice-to-have, not a blocker: at every viewport up to ~1520px wide the cap is not even the binding term.
- **Project covers:** real screenshots of the work (landing pages, dashboards, CRM pipelines, ad creatives) shown on a `bone` background with generous padding inside the frame, like a print mount. Never stock photos, never AI-generated objects or abstract 3D shapes.
- **Placeholders** (until real assets exist): flat `bone` block with the project name in `caption` olive, bottom-left. Does not apply to the hero portrait — the real cutout exists. Does not apply to Stack logo chips either — they have their own placeholder state (§7.8).
- **Tool logos (Stack only):** real vendor marks, natural color, contained inside the fixed 56×32 chip (§7.8). Never scaled to their own intrinsic size, never used anywhere else on the site, never used as a credibility strip.
- **Alpha cutouts in general:** no backdrop block behind them, no `mix-blend-mode` layer over them, and they are cropped only by a structural edge (a hairline, the viewport edge) — never by a visible box of their own. A transparent, unpainted crop box used solely to trim empty alpha padding, or to cut the figure at a structural edge, is not a backdrop block and is allowed (§6.1).
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
- ❌ A rectangular backdrop block behind a transparent cutout image (§9). A transparent, unpainted crop box that only trims empty alpha padding, or cuts the figure at a structural edge, is not this.
- ❌ Copying a reference template's decoration along with its proportions. The 2026-10-07 (b) hero takes the reference's composition and measurements only; its grayscale photo, its `— ` em-dash tagline prefix and its underlined nav CTA were each examined and rejected (§6.1).
- ❌ Large voids between two elements that nothing explains. Negative space is either a measured part of the composition (the air above the hero's scroll cue) or a layout bug (the hero's 240px text-to-figure gap, §6.1 revision (d)). If you cannot name which, it is the second one.

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
  --text-display-xl: clamp(4.5rem, 16vw, 15rem);   /* hero h1, SHORT headline only (§6.1) */
  --text-display: clamp(3rem, 7vw + 1rem, 8rem);   /* hero h1, sentence headline only (§6.1) */
  --font-sans: "Hanken Grotesk Variable", "Helvetica Neue", Arial, sans-serif;
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
  --nav-h: 72px;                     /* the §7.5 nav height, tokenised 2026-10-07 (b)
                                        because the hero row height is derived from it.
                                        Nav styling itself is unchanged. */

  /* hero (§6.1) — horizontal sizing rewritten 2026-10-07 (d).
     READ §6.1 "Size" BEFORE TOUCHING ANY OF THESE.
     NOTE 1: the hero figure's PRIMARY dimension is now its WIDTH, derived from
     the horizontal space beside the text column. Its HEIGHT is derived from that
     width and capped by the row. Revision (b)'s --hero-cutout-h (width derived
     from viewport HEIGHT) is deleted: it made the gap to the text column grow
     whenever the browser window got shorter.
     NOTE 2: the crop box's aspect ratio at >=1024px is VARIABLE (width / height
     as computed below). The three .hero-portrait-img percentages depend on the
     box's WIDTH only, so they are unaffected — do not recompute them.
     NOTE 3: --hero-row-h carries revision (b)'s value and all of its vertical
     consequences (crown --space-8 below the nav, scroll cue and die-cut hairline
     on the fold). Changing --nav-h or .hero's padding-top changes it. */
  --hero-row-h: clamp(560px, calc(100svh - var(--nav-h) - var(--space-8)), 1040px); /* >=1024px */
  --hero-gutter-x: calc((100vw - min(100vw, var(--container-max))) / 2 + var(--container-pad));
  --hero-figure-slot: calc(0.45 * (100vw + var(--hero-cutout-bleed) - var(--hero-gutter-x)));
  --hero-figure-ar-max: 1;      /* the crop box is never wider than it is tall; lower this
                                   (0.85, 0.75) if the die-cut lands too high on the torso */
  --hero-figure-w-max: 610px;   /* resolution ceiling: 1048 source px / 610 = 1.72x */
  --hero-figure-w: clamp(
    400px,
    min(var(--hero-figure-slot), calc(var(--hero-row-h) * var(--hero-figure-ar-max))),
    var(--hero-figure-w-max)
  );
  --hero-figure-h: min(var(--hero-row-h), calc(var(--hero-figure-w) * 1798 / 1048));
  --hero-figure-gap: var(--space-8);   /* designed gutter, text column -> figure */
  --hero-figure-reserve: max(
    0px,
    calc(var(--hero-figure-w) - var(--hero-cutout-bleed) - var(--hero-gutter-x))
  );
  --hero-text-max: 720px;              /* keeps the §6.1 headline-fill band valid >=1500px */

  --hero-cutout-h-md: clamp(380px, 52svh, 560px);  /* 768-1023px, figure height */
  --hero-cutout-h-sm: clamp(300px, 44svh, 420px);  /* <768px, figure height */
  --hero-cutout-ar: 1048 / 1798;                   /* measured subject alpha box.
                                                      Used <1024px only since (d). */
  --hero-cutout-bleed: 24px;                       /* past the right viewport edge */
  --hero-cutout-filter: grayscale(1) contrast(1.04) sepia(0.22) saturate(1.15) brightness(0.98); /* historical only — not applied */
  --hero-rule-h: clamp(40px, 6vw, 72px);           /* the SHORT in-column rule, <1024px ONLY.
                                                      At >=1024px the rule lives in the left
                                                      rail and is sized by flex: 1 (§6.1). */

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

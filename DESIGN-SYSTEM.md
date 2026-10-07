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
  the shared content edge (like the hero's rotated rail), position it
  `absolute`/`fixed` within that gutter space — never widen the gutter itself
  by padding the section.

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
column growing from 4fr to 5fr. The crop-box technique and the 7fr/5fr grid from
this revision both **survive into revision (b) below**; the specific
`--hero-cutout-h` value from this revision (`clamp(480px, 72svh, 860px)`) does
not.

*2026-10-07 (b) — the reference screenshot: a full-viewport figure, a left-rail
spine, and a greeting-scale headline.* **This is the revision in force.**
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

Revision (a) got the figure to ~72svh and ~378px wide at 1440×900. Measured
against the reference screenshot, that is still roughly 15% short in height and,
more importantly, **the supporting furniture is in the wrong places**. Findings,
measured off the reference image rather than described from memory (reference
viewport in the screenshot ≈ 1935 × 1233; percentages are of that viewport, and
the ×0.73 column converts them to a 1440 × 900 laptop):

| Reference element | Measured | % of viewport | At 1440 × 900 |
|---|---|---|---|
| Nav bottom edge | y ≈ 130 | 10.5% h | ~72px (our nav height, unchanged) |
| Photo crown of head | y ≈ 198 | 16.1% h | ~50px below the nav |
| Photo bottom | clipped by the viewport | — | the fold |
| **Visible figure height** | **≈ 1027px** | **83% of viewport h / 95% of the area below the nav** | **~750px** |
| Rotated label (top of left rail) | y 228…408, x ≈ 98 | starts 8% below the nav; rail at 5.1% w | ~22px below the content top |
| Top stat row | y 288…378 | starts 12.8% below the nav | ~66px below the content top |
| **Long vertical rule — in the LEFT RAIL, not the text column** | y 455…1090, x ≈ 98 | 51.5% of viewport h | — |
| **Year `2026` — rotated, at the BOTTOM of the left rail** | y 1100…1170, x ≈ 98 | 89…95% h | — |
| `Scroll down ↓` | y ≈ 1160, x ≈ 218 (text-column left edge) | bottom-**left** | — |
| Headline cap height | y 537…772 ≈ 235px | **19% of viewport h** | ~215px cap → ~240px font |
| Headline rendered width | x 240…835 ≈ 595px | **~76% of its text column** | — |

Five changes follow, all specified below. Everything else in the hero is
**reviewed and explicitly unchanged** (table at the end of this section).

1. **`--hero-cutout-h` is re-derived from the viewport, not guessed.** It is now
   exactly the distance from the bottom of the hero's top padding to the fold, so
   the figure fills the first screen and the hairline that die-cuts it lands on
   the fold. `clamp(480px, 72svh, 860px)` → **`clamp(560px, calc(100svh -
   var(--nav-h) - var(--space-8)), 1040px)`**.
2. **The rotated label, the vertical rule and the year merge into one continuous
   left rail.** In the reference these are not three scattered marks — they are a
   single vertical spine at the far-left edge reading *who → boundary → when*.
   The short vertical rule **moves out of the text column** and becomes the long
   middle segment of that spine; the year **moves out of the bottom row** and
   becomes its bottom terminal, rotated to match the label.
3. **The bottom row keeps only `Scroll down ↓`**, bottom-**left**, aligned to the
   text column's left edge — matching the reference exactly, and keeping the cue
   permanently clear of the figure. (The previous spec put it bottom-right, which
   under the larger figure would land underneath the portrait.)
4. **The headline jumps to greeting scale** via the new `--text-display-xl`
   (§4.2). The reference headline is ~19% of viewport height; `--text-display`
   maxed out at 128px, roughly 2.5× too small.
5. **The `min()` width guard is corrected.** Revision (a)'s second term
   (`100% + bleed`) under-stated the room available to the figure by a whole
   `--container-pad`, and at ≥1320px it ignored the entire container margin — so
   on a 1920- or 2560-wide display the figure was being capped at ~507px wide and
   silently refused to grow with `svh`. Fixed per breakpoint below.

**Which ui/ux-pro-max findings were applied, and how** (the client asked for the
skill to be used, so this is recorded rather than left implicit):

- **`hero-centric-design`** (landing domain) — *"Full-bleed Hero (headline +
  visual)… Let the hero dominate the initial viewport **without hiding the next
  content cue**."* Applied in two halves, and the second half is the one that
  shaped the spec most. *Dominate:* `--hero-cutout-h` is now literally defined as
  "the initial viewport, minus the nav, minus the hero's top padding", so the
  figure cannot be timid at any viewport height — it is sized **by** the fold
  rather than fitted inside it; and the headline was raised to greeting scale so
  the pair dominates together, rather than a big photo sitting next to small
  type. *Without hiding the next cue:* this is why `Scroll down ↓` survives the
  revision, why it moves to the bottom-left where the figure can never cover it,
  and why the hairline + System Map are placed to begin **exactly at the fold**
  (`figure bottom = 100svh`) rather than far below it — one scroll tick reveals
  the next section. It is also why the figure is cut by a structural hairline at
  the fold instead of simply overflowing off-screen the way the reference's photo
  does.
- **`minimalism-and-swiss-style`** (style domain) — *clean, high-contrast,
  grid-based, sans-serif, monochromatic, no unnecessary decoration, single
  primary accent only.* Used as a **veto list**, which is its most useful role
  here: it confirms this revision is about proportion and composition only, so
  the ink/olive/bone/paper palette, Hanken Grotesk, the hairline vocabulary, the
  no-shadow/no-gradient rules and the no-filter client override are all
  explicitly out of scope and untouched. It is also the direct justification for
  change 2: consolidating three scattered marks into one continuous grid-aligned
  rail is a Swiss move (structure that encodes something, §1 principle 2), where
  leaving a stray rule floating in the middle of the text column was the
  decorative option. And it is why three things visible in the reference were
  examined and **not** copied: its grayscale photo treatment (the client's
  full-colour override stands), its `— It's Finox a design wizerd` em-dash
  prefix (encodes nothing), and its underlined nav CTA.

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
6. **The cutout portrait** (spec below), right column.

Below the content row, unchanged and out of scope for this revision: the
Growth System Map (§8) as its own full-width row with a hairline above it, then
the impact metrics row. Still inside the `#top` section, still the site's one
animated element.

> **Open question for the next pass (not changed here, §8 is out of scope for
> this revision):** the Map's draw animation is specified in §8.2 as running "on
> first load of the hero". Now that the Map begins exactly at the fold rather
> than above it, that animation may be spent before anyone sees it. Flag to the
> client; do not change §8 as part of the hero work.

**Why the secondary CTA does not resurface.** `See selected work` is dropped
outright rather than moved next to the scroll cue. Three reasons: the nav's
`Work` link already covers it from every scroll position; the next thing below
the fold is the System Map, whose nodes link into the work in Phase 3, so the
hero already points at the work structurally; and turning `Scroll down ↓` into
a link would put an arrow on a link label, which §12 forbids. Tracking
consequence: `cta_click` with `cta_location: "hero"` is no longer emitted —
that is expected, not a regression. The nav remains the only CTA source above
the fold.

**Display headline — new 2026-10-07 (b).**

The reference's `Hello` is ~19% of the viewport's height and fills ~76% of its
text column. `--text-display` tops out at `8rem` (128px), which at a 1935px-wide
viewport is roughly 2.5× too small, and at a 1440px laptop fills only ~41% of the
text column. The headline is therefore set in **`--text-display-xl`:
`clamp(4.5rem, 16vw, 15rem)`**, weight 300, line-height 0.95, tracking -0.035em.

| Viewport width | `--text-display-xl` | `Hello` rendered width | Text column (7fr) | Fill |
|---|---|---|---|---|
| 390px | 72px (min binds) | ~156px | ~350px (single col) | 45% |
| 768px | 123px | ~267px | ~706px (single col) | — |
| 1024px | 164px | ~356px | ~472px | 75% |
| 1280px | 205px | ~445px | ~584px | 76% |
| 1440px | 230px | ~499px | ~677px | 74% |
| ≥1519px | 240px (max binds) | ~521px | ~677px | 77% |

The `15rem` max exists because the text column stops growing once the container
hits `1320px`; without it a `vw`-only size would eventually overrun its own
column on a wide display.

*Acceptance check — by proportion, not by pixel.* At ≥1024px the rendered
headline must occupy **70–80% of the text column's width**. If it falls outside
that band after a copy change, adjust the `15rem` maximum, never the `16vw` term
(the `vw` term is what keeps the mid-range viewports proportional).

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
without a new client sign-off. **Still in force after both 2026-10-07 revisions
— note in particular that the reference screenshot's photo is black and white,
and we are deliberately not copying that.**

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

*The crop box — introduced 2026-10-07 (a), **unchanged in (b)**, build this
first.* `.hero-portrait` is not a plain `width: fit-content` wrapper; it is a
**subject-tight crop box**: its edges are the subject's alpha bounding box, and
the `<img>` is scaled and offset inside it so the empty alpha padding falls
outside. Every other number in this section is measured against this box. All
four percentage values below are correct as built — do not recompute them.

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
  max-width: none;       /* global.css sets img { max-width: 100% }, which silently
                            clamps the scale-up below and breaks the whole crop */
  width: 137.40%;        /* 1440 / 1048  — scale canvas up so the subject fills the box width */
  height: auto;
  margin-left: -28.24%;  /*  296 / 1048  — pull the left margin out */
  margin-top: -72.71%;   /*  762 / 1048  — pull the empty top band out */
  /* percentage margins resolve against the box WIDTH; that is what makes this work */
}
```

Three things the engineer must know about this block:

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

*Size — revised 2026-10-07 (b).* Sizing is still height-driven and
`--hero-cutout-h` still means **the visible figure's height**, not the canvas
height. What changed is where the number comes from: it is no longer a tuned
`svh` fraction but a **derivation from the fold**.

```css
--hero-cutout-h: clamp(560px, calc(100svh - var(--nav-h) - var(--space-8)), 1040px);
```

Read the middle term literally: *viewport height, minus the nav, minus the hero's
top padding.* Because the content row's `min-height` equals this value and the
figure is `align-self: end` inside it, the consequence is exact, and it is the
whole point of the revision:

> **The crown of the head sits `--space-8` (64px) below the nav, and the bottom
> of the figure — with the hairline that die-cuts it — lands on the fold.**

That reproduces the reference's single most important proportion (figure ≈ 95% of
the height of the area below the nav) without a magic number, and it self-corrects
on every viewport height instead of being tuned for one.

- *Minimum `560px`* — binds below a ~696px-tall viewport (e.g. a 1280×650 window).
  Below that, letting the figure keep shrinking turns it back into the thumbnail
  this whole thread is about; accept that the hairline drops below the fold
  instead.
- *Maximum `1040px`* — binds above a ~1176px-tall viewport. Two reasons: past
  ~1040px the head renders larger than life size on a 27" display, and the
  subject in the source is 1798px tall, so 1040 CSS px is the last size that keeps
  the figure above ~1.7× effective pixel density. Raise it only together with a
  larger source asset.
- *This formula is coupled to two other values.* `--nav-h` (§7.5's 72px, now a
  token) and `.hero { padding-top: var(--space-8) }`. If either changes, the
  figure changes with it — which is correct and intended, but it means neither
  can be edited casually.

```css
.hero-portrait {
  aspect-ratio: var(--hero-cutout-ar);
  width: min(
    calc(var(--hero-cutout-h) * 1048 / 1798),   /* figure height → figure width */
    /* the available-width term for this breakpoint — see the table below */
  );
}
```

*The available-width term — corrected 2026-10-07 (b).* Revision (a) used
`calc(100% + var(--hero-cutout-bleed))` at every breakpoint. That was wrong in
two ways, and it is why the figure stopped growing on large monitors: the box's
`margin-right` already pulls it out past the container padding, and at ≥1320px it
pulls it all the way out into the container's side margin — neither of which the
old term accounted for. At 1920×1080 the old term capped the figure at 507px wide
(≈870px tall) when 944px of height was available. Use these instead:

| Breakpoint | `min()` second term |
|---|---|
| <768px | `calc(100% + var(--container-pad) + var(--hero-cutout-bleed))` |
| 768–1023px | `calc(100% + var(--container-pad) + var(--hero-cutout-bleed))` |
| 1024–1319px | `calc(100% + var(--container-pad) + var(--hero-cutout-bleed))` |
| ≥1320px | `calc(100% + 50vw - var(--container-max) / 2 + var(--hero-cutout-bleed))` |

Each term is exactly *column width + whatever the matching `margin-right` pulls
the box out by*. Keep them paired: if one is edited the other must be too.

Worked examples at ≥1024px (figure height × figure width, after the `min()` guard;
container 1320px max, pad 48px, gap `--space-8`):

| Viewport | Figure before (rev. a) | **Figure now** | Available width | Binding term |
|---|---|---|---|---|
| 1280 × 800 | 576 × 336 | **664 × 387** | 539 | height |
| 1440 × 900 | 648 × 378 | **764 × 445** | 567 | height |
| 1512 × 982 | 707 × 412 | **846 × 493** | 603 | height |
| 1920 × 1080 | 778 × 453 (capped) | **944 × 550** | 807 | height |
| 2560 × 1440 | 778 × 453 (capped) | **1040 × 606** (max) | 1127 | the `1040px` max |
| 1024 × 1366 (tall, narrow) | 560 × 326 | **739 × 431** | 431 | **width** — the safety rail |

At 1440 × 900 that is **1.18× the linear size and 1.39× the area** of revision
(a), and **1.89× / 3.57×** against the version the client rejected on 2026-10-07.
Verify the 1024 × 1366 row in dev tools before sign-off — it is the only case
where the width term binds, and it must degrade by getting shorter, never by
overlapping the text.

*The fold constraint stays relaxed.* **The hero content row may exceed the
viewport height, and the System Map is expected to sit below the fold.** The
`Scroll down ↓` cue handles that, and the Map was always specified as "the hero's
closing beat". Under revision (b) the Map now starts *immediately* at the fold
rather than well below it, which is the `hero-centric-design` pattern's "without
hiding the next content cue" clause satisfied by construction. The one hard
limit that remains: the crown of the head must never be clipped by the top of the
section (guaranteed by `align-self: end` plus the content-row `min-height`, not
by a magic number).

*Vertical alignment — tuning target revised 2026-10-07 (b).*

- Hard constraint, **unchanged**: `align-self: end`. The bottom of the box sits
  flush on the bottom of the hero content row — directly on the hairline above
  the System Map — so the figure's torso is die-cut by that hairline. A figure
  standing up out of the line reads as deliberate; a vertically sliced arm reads
  as a bug. Never translate the image up; that breaks the flush bottom.
- **Superseded (rev. a):** *"the crown of the head lands level with the top of
  the top stat row (its hairline), within ±16px."* The reference does not do
  this. Measured there, the crown is at 16.1% of viewport height and the stat
  row's top is at 23.4% — **the stats start ~90px (7.3% of viewport height) below
  the crown**, which at a 900px laptop is ~66px.
- **New tuning target (rev. b):** the crown lands level with the **top of the
  content row** (which `min-height: var(--hero-cutout-h)` + `align-self: end`
  gives for free), and the top stat row sits **`--space-8` (64px) below it**, via
  `padding-top: var(--space-8)` on `.hero-text` at ≥1024px only. Tolerance ±12px.
  Do not nudge anything else by hand.
- The rotated label at the top of the left rail starts **`--space-5` (24px)** below
  the content-row top (reference: 30px at its scale ≈ 22px at ours), so the rail
  begins just under the crown, not level with it.

*Horizontal placement — reviewed 2026-10-07 (b), unchanged.* Grid cols 8–12,
`justify-self: end`, with the box's right edge sitting `var(--hero-cutout-bleed)`
past the right viewport edge and `overflow: hidden` on `.hero` doing the
cropping:

```css
/* ≥1024px */
.hero-portrait { margin-right: calc(-1 * var(--container-pad) - var(--hero-cutout-bleed)); }
/* ≥1320px */
.hero-portrait { margin-right: calc(-50vw + var(--container-max) / 2 - var(--hero-cutout-bleed)); }
```

Rule the engineer must verify by eye, not by number: **no more than ~6% of the
box's width may sit beyond the viewport edge, and the face, glasses and near
shoulder must never be cropped.** The larger figure makes this *easier*, not
harder — 24px of a 445–606px box is **4.0–5.4%**, comfortably inside the limit
(it was 5.3–6.4%, right at the limit, under revision (a)). The outer
(viewer-right) sleeve grazing the edge is correct; a visibly sliced arm is not.
If a future viewport pushes past ~6%, reduce `--hero-cutout-bleed`, never the
figure height.

*Accepted deviation from the reference — the horizontal gap.* In the reference
the headline's right edge and the subject's near shoulder almost touch (~15px
apart), because that photo is a tight head-and-shoulders crop roughly as wide as
it is tall. Our asset is a chest-up 9:16 crop with a subject aspect of 0.583, so
at the same height it is ~45% narrower and leaves ~230px of air between the
headline and the figure at 1440×900. This is a property of the asset, not of the
layout, and it is **not** to be closed by shrinking the figure's height, widening
the text column past 7fr, or scaling the headline beyond the 80% acceptance band.
The only real fix is a wider head-and-shoulders cutout from the same shoot; that
is logged as an asset request in §9 rather than compensated for in CSS.

*Below 1024px — reviewed, unchanged.* The cutout follows the text block in flow,
`justify-self: end`, `align-self: end` against the hairline, heights per the `-md`
/ `-sm` tokens and bleed per the token table below. Same crop box, same no-filter
full color. It is never centered (§12) and never overlaps the text. The left rail
stays hidden below 1024px, which is why the year and the short in-column rule are
retained in the stacked layout at these breakpoints (content item 5). The `-md`
and `-sm` heights are **deliberately not raised**: the reference is a desktop
screenshot and gives no mobile guidance, the stacked layout already gives the
figure a full-width row of its own, and `clamp(380px, 52svh, 560px)` on a
768×1024 tablet is already ~55% of the viewport.

| Token | Value | Applies | Status |
|---|---|---|---|
| `--nav-h` | `72px` | all | **new 2026-10-07 (b)** — tokenises the 72px nav height from §7.5 so `--hero-cutout-h` can reference it. No visual change to the nav. |
| `--hero-cutout-h` | `clamp(560px, calc(100svh - var(--nav-h) - var(--space-8)), 1040px)` | ≥1024px | **revised 2026-10-07 (b)** (was `clamp(480px, 72svh, 860px)`) |
| `--hero-cutout-h-md` | `clamp(380px, 52svh, 560px)` | 768–1023px | reviewed, unchanged |
| `--hero-cutout-h-sm` | `clamp(300px, 44svh, 420px)` | <768px | reviewed, unchanged |
| `--hero-cutout-ar` | `1048 / 1798` | all | unchanged |
| `--hero-cutout-bleed` | `24px` ≥1024px · `16px` 768–1023px · `12px` <768px | all | reviewed, unchanged |
| `--hero-rule-h` | `clamp(40px, 6vw, 72px)` | **<1024px only** | **scope narrowed 2026-10-07 (b)** — the ≥1024px rule is now the rail's `flex: 1` segment and has no fixed height |

**The left rail — new 2026-10-07 (b), ≥1024px only.**

The rail replaces the old `.hero-edge-label` (which held only the rotated role
label) and absorbs two elements that used to live elsewhere. It must span the
**hero content row**, from the top of that row down to the hairline above the
System Map — *not* the whole `#top` section, which also contains the System Map
and the impact row.

*Required markup change.* Wrap `<Container class="hero-grid">` in a
`position: relative` element — `<div class="hero-content">` — and make the rail a
child of that wrapper, not of `.hero`. The current build anchors the rail with
`position: absolute; top: var(--space-8); bottom: 0` against `.hero`, which now
resolves to the bottom of the System Map row and would run the hairline straight
down past the Map. Do not fix this with a hard-coded height.

```css
.hero-content { position: relative; }

/* ≥1024px */
.hero-rail {
  position: absolute;
  inset-block: 0;                       /* = the content row, i.e. crown → hairline */
  left: var(--space-3);                 /* 12px; .hero keeps padding-left: --space-7 to clear it */
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

**The text column — spacing revised 2026-10-07 (b).**

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

`.hero-text` keeps `align-self: stretch` so `margin-top: auto` on the bottom row
resolves against the full row height. With the figure at 764px (1440×900) the
text column's content measures ~500px, leaving ~250px of deliberate air above the
scroll cue — that emptiness is the reference's composition and is not a bug to
fill.

**Grid — reviewed 2026-10-07 (b), ratio unchanged.**

```css
/* ≥1024px */
.hero-grid {
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);   /* UNCHANGED */
  gap: var(--space-8);                                     /* UNCHANGED */
  min-height: var(--hero-cutout-h);                        /* same rule, new value */
  align-items: center;                                     /* UNCHANGED (inert: text stretches, photo ends) */
}
/* <1024px */
.hero-grid {
  grid-template-columns: 1fr;
  gap: var(--space-7);
  align-content: start;
  min-height: auto;
}
```

7fr/5fr survives this revision, and revision (a)'s reasoning still holds, with one
addition. The ratio no longer controls the figure's size at all — the figure's
width is driven by its height and it breaks out of its column to the viewport
edge, so the `5fr` track is now only a **cap**, and after the `min()` correction
above it is a cap that binds in exactly one case (a tall, narrow 1024×1366
viewport). What `7fr` still controls is the **text column**, and 677px at a 1440
laptop is what makes the 70–80% headline fill band land where it does. Widening
the text column to 8fr would not close the gap to the figure (that gap is set by
the asset's crop — see "Accepted deviation" above) and would push the headline
fill down to ~65%. 6fr/6fr remains rejected for the reason given in revision (a).

`min-height: auto` below 1024px is an intentional fix, not an omission: the old
blanket `min-height: 60svh` on the single-column stack is what opened the gap
between the footer row and the portrait on mobile. Hero height overall stays
content-driven below 1024px.

**Implementation note (not code — the delta from the current build):**

1. New markup wrapper `<div class="hero-content">` around `<Container class="hero-grid">`; `position: relative`.
2. `.hero-edge-label` → `.hero-rail`, moved inside `.hero-content`, now containing three children: `.hero-rail-label`, `.hero-rail-rule` (`aria-hidden`), `.hero-rail-year`. Its `top`/`bottom` are replaced by `inset-block: 0`.
3. `.hero-rule` (the in-column rule) is rendered **only below 1024px**; `display: none` at ≥1024px.
4. `.hero-footer-row`: at ≥1024px the year span is not rendered (it is in the rail) and `justify-content` becomes `flex-start`; below 1024px it is unchanged.
5. `.hero-headline` gains the `--text-display-xl` modifier class per the copy-conditional table above.
6. `.hero-text` gains `padding-top: var(--space-8)` at ≥1024px, and its uniform `gap` is replaced by the per-pair spacing table at that breakpoint only.
7. `.hero-portrait`: the `min()` **second** term is replaced per the breakpoint table (`+ var(--container-pad)` added below 1320px; the `50vw` term added at ≥1320px). The first term, the `aspect-ratio`, the `margin-right` rules and the four crop percentages are untouched.
8. `tokens.css`: `--nav-h` and `--text-display-xl` added; `--hero-cutout-h` re-valued. `--hero-rule-h` stays, now <1024px only.

No data changes are required by this revision. The current `src/data/site.ts`
copy (`headline: "Hello"`, `lead: "I'm Kemal a Senior Growth Performance"`) is
already in the short-headline shape this spec assumes; it is still placeholder
copy that Kemal replaces, but any replacement headline must stay 1–2 words or the
token must change with it.

**Reviewed in this revision and deliberately NOT changed — with reasons.** Do not
"also fix" any of these.

| Element | Reason |
|---|---|
| Alpha cutout rather than a rectangular photo | Client-approved 2026-10-05; the reference's rectangle only works because its background matches its page |
| No backdrop, frame, border, radius, shadow | Client-approved 2026-10-05; §12 |
| Full natural color, no `filter` | Client override 2026-10-05; the reference being black and white does not reopen it |
| No CTA buttons in the hero body | Client-approved 2026-10-05; the reference agrees |
| Crop-box technique + its four percentages | Fixes a measured bug; the reference does not bear on it |
| 7fr/5fr grid ratio and the `--space-8` grid gap | See "Grid" above — the ratio now governs the text column only |
| `align-self: end` die-cut at the hairline | Reproduces the reference's "figure cut by the bottom edge" with a structural edge instead of an overflow |
| `--hero-cutout-bleed` 24/16/12px | The larger figure improves the overflow ratio to 4.0–5.4%; no change needed |
| `--hero-cutout-h-md` / `-sm` | Reference gives no mobile guidance; current values already read as dominant in a stacked layout |
| `.hero { padding-top: var(--space-8) }` | 64px vs the reference's ~50px equivalent; within tolerance, and it is now load-bearing in the `--hero-cutout-h` formula |
| `.hero { overflow: hidden }` | Still what crops the bleed |
| `.hero-portrait` `margin-right` breakout math | Correct as built; only the `min()` cap beside it was wrong |
| Lead line directly under the headline, `40ch` / `48ch` | Matches the reference's tagline placement and measure |
| Top stat row content (2 metrics, `Metric` component) | Matches the reference's two-stat row |
| Rotated side label's left-edge position and `text-caption`/olive styling | Matches the reference at 5.1% of viewport width; only what sits *below* it in the rail changed |
| System Map + impact row below | Out of scope for this revision |

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
- **Portrait (Hero) — alpha cutout, revised 2026-10-05, resized 2026-10-07 (a), resized again 2026-10-07 (b):** a true transparent-background cutout (`src/assets/images/kemal-portrait.png`, 1440×2560, alpha 0 outside the subject), standing directly on `paper` with **no backdrop block, no frame, no border, `--radius-none`**. It renders in **full natural color with no `filter` at all** (2026-10-05 client override — the filter-chain text that used to sit here is superseded; see §6.1 "Tone"). Tone must **never** come from a `mix-blend-mode` overlay layer, which would tint the transparent region and repaint a bone rectangle. Sizing, the subject-tight crop box, alignment and bleed rules: §6.1. The earliest spec here (cover-cropped inside a bone box with a bone multiply overlay) was written for an opaque rectangular photo and no longer applies to the hero.
  - *Asset request, logged 2026-10-07 (b):* a **wider head-and-shoulders cutout** of Kemal from the same shoot (subject aspect closer to 1:1 than the current 0.583, i.e. cropped at the collarbone rather than mid-chest) would close the last gap to the reference composition — see §6.1 "Accepted deviation from the reference". Until it exists, nothing in CSS should compensate for it.
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
- ❌ Copying a reference template's decoration along with its proportions. The 2026-10-07 (b) hero takes the reference's composition and measurements only; its grayscale photo, its `— ` em-dash tagline prefix and its underlined nav CTA were each examined and rejected (§6.1).

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
                                        because --hero-cutout-h is derived from it.
                                        Nav styling itself is unchanged. */

  /* hero (§6.1) — revised 2026-10-07 (b).
     NOTE 1: --hero-cutout-h means the VISIBLE FIGURE height, not the canvas
     height. The canvas is cropped to the subject's alpha box by .hero-portrait.
     NOTE 2: the >=1024px value is DERIVED, not tuned — it is exactly the
     distance from the bottom of the hero's top padding to the fold, so the
     crown sits --space-8 below the nav and the die-cut hairline lands at 100svh.
     Changing --nav-h or .hero's padding-top changes the figure. */
  --hero-cutout-h: clamp(560px, calc(100svh - var(--nav-h) - var(--space-8)), 1040px); /* >=1024px */
  --hero-cutout-h-md: clamp(380px, 52svh, 560px);  /* 768-1023px */
  --hero-cutout-h-sm: clamp(300px, 44svh, 420px);  /* <768px */
  --hero-cutout-ar: 1048 / 1798;                   /* measured subject alpha box */
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

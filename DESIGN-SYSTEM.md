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
| `--radius-none` | 0 | Rows, lists, pillars, hairline structures |
| `--radius-sm` | 4px | Row thumbnails, small images |
| `--radius-md` | 12px | Lead project media, portrait |
| `--radius-lg` | 20px | Contact panel |
| `--radius-pill` | 999px | Buttons, tags, filter chips |

### 5.4 Elevation
**No shadows.** Separation comes from hairlines (`1px solid var(--color-line)`) and background shifts (`paper` → `paper-2` → `ink`).

---

## 6. Layout patterns

### 6.1 Hero

**Revision (2026-10-04): the hero carries a portrait.** Earlier drafts kept the
hero text-only so the Growth System Map was the single bold element. Reviewing
against a reference layout (large light display word + full-bleed portrait +
rotated side label + top stat numbers + scroll cue) showed that device works
well here too, as long as the Map keeps its own uncluttered moment immediately
below rather than competing inside the same row. So: hero now has a portrait,
and the Map becomes the hero section's closing beat, not a line squeezed in
next to a photo.

```
┌──────────────────────────────────────────────────────────────┐
│ Kemal                     Work  About  Approach  Contact  [Book a call] │
├──────────────────────────────────────────────────────────────┤
│ │                                                  ┌──────────────┐│
│S│ 8+            55+                                │              ││
│e│ Brands        Systems                            │              ││
│n│ handled       shipped                            │   portrait   ││
│i│                                                   │  (grayscale, ││
│o│ I build growth systems, from the                 │  bone-mult.  ││
│r│ first ad click to the CRM that                   │  overlay,    ││
│ │ closes the deal.                                 │  bleeds to   ││
│G│                                                   │  the right   ││
│r│ Performance marketing, websites,    [Book a call] │  viewport    ││
│o│ tracking, CRM and automation.       See selected  │  edge)       ││
│w│                                      work         │              ││
│t│                                                   │              ││
│h│ 2026                               Scroll down ↓  └──────────────┘│
└──────────────────────────────────────────────────────────────┘
────────────────────────────────────────────────────────────────  (hairline)
  ○────────○────────○────────○────────○                              ← SYSTEM MAP, its own row
  Ads      Landing  Tracking CRM      Automation
  ...      page     ...      ...      ...
```

- **Rotated side label** (desktop only): role line (`Senior Growth`, wrapped),
  `text-caption`, olive, rotated -90°, anchored to the far-left edge of the
  container, reading bottom-to-top. Same device as the small stat/role labels
  in editorial portfolio references — informational, not decorative, so it's
  allowed under §12.
- **Top stat row**: 2 metrics (not the full impact row — that stays with the
  System Map below), same `Metric` component, smaller context-setting numbers.
- **Portrait**: real photo of Kemal, same treatment as the About portrait
  (§9: grayscale + bone multiply overlay), but `radius-none` and allowed to
  bleed to the right edge of the viewport (breaks out of `.container`) since
  it's anchored to the frame rather than mounted inside it. Until a real photo
  exists, use the flat-`bone`-block placeholder from §9.
- **Year + scroll cue**: bottom-left `2026` in `text-caption` olive (tabular
  nums), bottom-right (under the CTAs) `Scroll down ↓` in `text-small` olive.
  This is the one place a bare `↓` is allowed outside a button, since it's a
  static scroll affordance, not a link label.
- The Growth System Map (§8) sits directly below the hero content as its own
  full-width row with a hairline above it — still inside the `#top` section
  (hero stays one of the seven sections), still the site's one animated
  element, just no longer sharing a row with CTAs or a photo.

Hero height: content-driven, min `90svh` on desktop (text column + portrait),
System Map row adds its own height below that.

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

- Labels say exactly what happens: `Book a call`, `Download CV`, `Read case study`, `See selected work`.
- **No arrows appended to labels.** The only allowed icon is `↗` on links that open an external site (LinkedIn, WhatsApp, live project URL), because it carries meaning.
- Focus: `outline: 2px solid var(--color-ink); outline-offset: 3px` (on ink: `bone`).

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

- **Portrait (About):** real photo of Kemal, cropped 4:5, `radius-md`. Treatment: `filter: grayscale(1) contrast(1.05)` plus an overlay of `bone` with `mix-blend-mode: multiply` at 30% opacity, so the photo sits inside the palette.
- **Portrait (Hero):** same photo treatment as About (grayscale + bone multiply overlay), but `radius-none` and allowed to bleed to the right edge of the viewport — see §6.1. Taller crop (~3:4) than the About portrait so it reads as a frame edge, not a mounted photo.
- **Project covers:** real screenshots of the work (landing pages, dashboards, CRM pipelines, ad creatives) shown on a `bone` background with generous padding inside the frame, like a print mount. Never stock photos, never AI-generated objects or abstract 3D shapes.
- **Placeholders** (until real assets exist): flat `bone` block with the project name in `caption` olive, bottom-left.
- Images never have shadows, borders, or tilt.

---

## 10. Motion (everything else)

| Interaction | Duration | Property |
|---|---|---|
| Button / chip / link hover | 150ms ease-out | background-color, text-decoration-thickness |
| Row hover | 150ms ease-out | background-color |
| Filter change | 200ms | opacity crossfade of the list |
| Mobile menu open | 250ms `cubic-bezier(0.2,0,0,1)` | opacity |

**No** scroll-triggered reveals on sections, no parallax, no cursor followers, no marquee, no counters that tick up.

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

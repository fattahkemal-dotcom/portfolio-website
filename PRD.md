# PRD — Kemal Portfolio Website

> Read this file together with `DESIGN-SYSTEM.md` before writing any code.
> `DESIGN-SYSTEM.md` is the source of truth for every visual decision. If this PRD and the design system disagree on anything visual, the design system wins.

---

## 1. Goal

A personal portfolio that positions Kemal as a **senior growth specialist who builds the whole growth system himself**: paid acquisition, landing pages, tracking, CRM, and automation. The site must convince two audiences in under 30 seconds:

| Audience | What they need to see | Primary action |
|---|---|---|
| Recruiters / hiring managers | Seniority, scope, experience timeline, tools | Download CV |
| Clients (freelance / consulting) | Proof of results, end-to-end capability, how he works | Book a call (WhatsApp / email) |

The site itself is proof of the "AI Code Development" skill: fast, clean, hand-tuned, not a template.

### Non-goals
- No blog in v1.
- No CMS admin panel. Content lives in Markdown/MDX files in the repo.
- No dark-mode toggle (the palette already uses light and dark sections deliberately).
- No pricing page.

---

## 2. Tech stack

- **Framework:** Astro (latest stable) with TypeScript, static output.
- **Styling:** Tailwind CSS v4, configured from the tokens in `DESIGN-SYSTEM.md` (CSS variables first, Tailwind theme maps to them).
- **Content:** Astro Content Collections with MDX for case studies, schema validated with Zod.
- **Interactivity:** Vanilla JS or a single small Astro island for the work filter. No React unless genuinely needed.
- **Fonts:** Self-hosted via `@fontsource` (no Google Fonts request at runtime).
- **Hosting:** Vercel or Cloudflare Pages, free tier. Static build, no server.
- **Analytics:** Google Tag Manager container (ID via env var `PUBLIC_GTM_ID`), GA4 configured inside GTM, events pushed to `dataLayer` (see §7).

---

## 3. Sitemap

```
/                    Home (single scrolling page, 7 sections)
/work                All projects, filterable by capability
/work/[slug]         Case study page (generated from MDX)
/cv.pdf              Static file in /public
/404                 Custom not-found page
```

Navigation (top bar): `Work` · `About` · `Approach` · `Contact` + right-side button `Book a call`.
On `/` the nav items anchor-scroll to sections. On other pages they link back to `/#section`.

---

## 4. Home page — section by section

Seven sections, in this order. Keep each section to the content listed; do not add extra sections.

### 4.1 Hero — `#top`
**Job:** say who Kemal is and what makes him different, in one screen.

Content (see DESIGN-SYSTEM.md §6.1 for the full layout — revised 2026-10-04 to add a hero portrait, revised 2026-10-05 to remove the hero CTAs and present the portrait as a transparent cutout, revised again 2026-10-07 to size that cutout from the subject's alpha box and give it a wider column):
- Rotated side label (desktop only): role line, e.g. `Senior Growth`. This carries the role, so the hero body has no separate name/role line — the name is the nav wordmark.
- Top stat row: 2 metrics (placeholders), same `Metric` component used elsewhere.
- Headline (placeholder, editable): `I build growth systems, from the first ad click to the CRM that closes the deal.`
- Supporting line, one short line directly under the headline (placeholder, editable): `Performance marketing, websites, tracking, CRM and automation, built by one person who knows how they connect.`
- Short vertical hairline rule below the supporting line, marking the boundary between the statement block and the year/scroll row (DESIGN-SYSTEM.md §6.1).
- **No CTA buttons in the hero.** `Book a call` lives only in the nav; `See selected work` is dropped (the nav `Work` link and the System Map below already lead there). Consequence for §7: `cta_click` is never fired with `cta_location: "hero"`.
- Portrait: real transparent-background cutout of Kemal (`src/assets/images/kemal-portrait.png`), standing directly on the paper background with no backdrop block, in full natural color with no filter, bottom-aligned to the hairline above the System Map and grazing the right viewport edge. It is rendered inside a subject-tight crop box so the asset's empty alpha padding does not shrink it, and it occupies a 5fr right column at ≥1024px. Exact values in DESIGN-SYSTEM.md §6.1 — follow them literally.
- Year (`2026`) bottom-left, `Scroll down ↓` cue bottom-right — static text, not links.
- **Signature element: the Growth System Map** (spec in DESIGN-SYSTEM.md §8), as its own full-width row directly below the hero content, with a hairline above it. A horizontal chain of 5 nodes: `Ads → Landing page → Tracking → CRM → Automation`. Each node links to the project that best demonstrates it. On mobile it becomes a vertical chain. **Since the 2026-10-07 hero revision the Map is expected to sit below the fold on a ~900px-tall laptop** — that is intended, not a regression.
- Impact row under the map: 3–4 metrics (placeholders: `[X]+ brands handled`, `Rp[X]B+ ad spend managed`, `[X]K+ leads generated`, `[X] systems shipped`). Kemal will fill real numbers.

### 4.2 Selected Work — `#work`
**Job:** prove the claim with real projects. This comes second on purpose: proof before biography.

- Heading: `Selected work` + short side note (1–2 sentences) on the right.
- Filter chips: `All`, `Performance`, `Architecture & CRM`, `Build`, `Content systems`. Filtering is client-side; URL updates with `?filter=` so links are shareable.
- Show the 4 projects marked `featured: true`, in `order` ascending.
- Layout follows DESIGN-SYSTEM.md §6.3 (not a uniform card grid: one large lead project, then a list).
- Link at the end: `All projects (N)` → `/work`.

### 4.3 About & Capabilities — `#about`
**Job:** explain the three pillars and give recruiters the profile.

- Left column: portrait photo (toned per DESIGN-SYSTEM.md §9), 2-sentence bio.
- Right column: the three capability pillars, each as a block with a title, one sentence on the outcome, and 3–4 concrete deliverables:
  1. **Sr. Performance Growth** — Meta, Google and TikTok Ads; funnel diagnostics; budget allocation and scaling.
  2. **Digital Architecture** — GA4/GTM/Conversions API tracking, data structure, CRM pipelines, how tools connect.
  3. **AI Code Development** — landing pages, web apps, internal tools and browser extensions shipped with AI coding agents.

### 4.4 Approach — `#approach`
**Job:** show method and thinking (replaces a "motivation" section).

A 5-step process. Each step = name + one principle sentence that shows how Kemal thinks:
1. **Diagnose** — Read the funnel before touching the budget.
2. **Architect** — Tracking first, scaling second.
3. **Build** — Ship the landing page, the form, the integration. No waiting on a dev queue.
4. **Launch** — Test small, read fast, cut what doesn't move the number.
5. **Automate** — If it's done three times by hand, it becomes a system.

Numbered markers are allowed here because this is a real sequence.

### 4.5 Stack — `#stack`
**Job:** show, at a glance, which tools Kemal actually builds with, grouped by the job each group does.

**Revised 2026-10-07 — client-directed.** The earlier idea for this section (plain
hairline-separated rows, tools as a comma-separated sentence, explicitly "text-first,
no logo wall") was never built and is **replaced in full**. The client asked for a card
section with equal-size cards and a small rectangular logo placeholder per tool. Layout
and exact measurements: DESIGN-SYSTEM.md §6.4 (layout) and §7.8 (component, including
the §12 override that permits logo chips here and nowhere else).

Shape of the section:
- Standard section header (DESIGN-SYSTEM.md §6.2): heading `Stack` + short side note on the right + hairline.
- Four equal-size cards, one per group, in a single row at ≥1024px (2 columns at 768–1023px, stacked below 768px).
- Each card: group name as the heading, a hairline, then one row per tool — a fixed 56×32 logo-placeholder chip plus the tool name in `text-caption`. Chips are empty placeholders until real logo assets exist.
- Section background `paper`; the cards are `paper-2` panels. No borders, no shadows.

Groups and tools, **client-supplied verbatim** — do not rename, reorder, merge or extend without a new instruction:

| Group | Tools |
|---|---|
| Digital performance | Google Analytics, Google Ads, Meta Ads, TikTok Ads |
| Digital tracking | Google Analytics, Google Tag Manager, Pixel Hubspot |
| Website developer | Laravel, Cloudflare, Vercel, Lovable, GitHub, Codex, Claude Code |
| CRM and automation | n8n, Make.com, HubSpot, Zapier, Spreadsheet, WABA |

Group names are sentence-cased per DESIGN-SYSTEM.md §4.3; tool names keep their own brand casing. `Google Analytics` deliberately appears in two groups — that is the client's list, not a duplication error.

Store this in `src/data/stack.ts` so it's easy to edit. The type carries an optional `logo` field (an `astro:assets` `ImageMetadata`) per tool, unused until real marks are supplied; a tool with no `logo` renders the empty chip.

### 4.6 Experience — `#experience`
**Job:** give recruiters the timeline.

A row list (like the reference): company + location, period, role and one-line scope, capability tags. Data in `src/data/experience.ts`. Seed rows:
- Gentem Indonesia — Performance marketing & growth across Wall Street English, Genstarkids, GenAcePrep. `[period]`
- Freelance / consulting — Populix, AskLumia, Ventour/Vcation, Low Cost Umroh, SEAPADEL. `[period]`
- `[previous roles — Kemal to fill]`

### 4.7 Contact — `#contact` (+ footer)
**Job:** convert both audiences with two clearly separated paths.

Dark panel, two columns:
- **Hiring?** → `Download CV` (fires `cv_download`) + LinkedIn link.
- **Have a project?** → `Book a call` (WhatsApp deep link with prefilled message) + email.

Footer: nav repeat, social links, `© 2026 Kemal`, and the line `Designed and built with Claude Code. Deployed on [Vercel/Cloudflare].` The oversized wordmark sits in the footer per DESIGN-SYSTEM.md §7.11.

---

## 5. `/work` page

- Same filter chips as home, plus all projects.
- Row-list layout (DESIGN-SYSTEM.md §7.10): year, project name, client, one-line result, capability tags, thumbnail revealed on hover (desktop only).
- Sorted by `order`, then `year` descending.

---

## 6. Case study page `/work/[slug]`

### 6.1 Layout
- Header: project title, client, year, role, capability tags, one key metric shown large.
- Body (left, ~7 cols) with a sticky meta sidebar (right, ~4 cols) listing: client, industry, role, duration, stack.
- Fixed section order inside the MDX body:
  1. **Context** — brand, situation, Kemal's role.
  2. **Problem** — what was broken or missing.
  3. **Diagnosis** — how it was found (data, audit).
  4. **System** — a System Map diagram (same component as hero, nodes configurable per project) showing what was built and how it connects.
  5. **Execution** — what was built, with which tools.
  6. **Results** — before/after metrics.
  7. **Learnings** — reusable insights.
- Footer of page: `Next project` link + contact CTA.

### 6.2 Content schema (`src/content.config.ts`)

```ts
{
  title: string,
  slug: string,
  client: string,               // can be anonymized, e.g. "Padel club, Jakarta"
  industry: string,
  year: number,
  role: string,
  duration?: string,
  summary: string,              // one sentence, used on cards
  problem: string,              // one sentence, used on cards
  keyMetric: { value: string, label: string },  // e.g. { value: "-35%", label: "Cost per lead" }
  capabilities: ("performance" | "architecture-crm" | "build" | "content-systems")[],
  stack: string[],
  systemMap?: { label: string, note?: string }[],  // nodes for the System Map
  cover: image(),
  featured: boolean,
  order: number,
  confidential: boolean,        // true = show percentages only, hide absolute numbers
}
```

### 6.3 Seed case studies (create MDX files with placeholder body text)

| Slug | Title (working) | Capabilities | Featured |
|---|---|---|---|
| `seapadel-crm-booking` | CRM architecture and membership booking for a padel club | architecture-crm, build | yes |
| `wse-funnel-diagnostics` | Cross-channel funnel diagnostics for an English academy | performance | yes |
| `genstarkids-ads-content-system` | An ads creative system that ships feed and reels at volume | content-systems, build | yes |
| `ads-analysis-chrome-extension` | A Chrome extension for reading Meta and Google Ads faster | build | yes |
| `wse-quiz-lead-magnet` | Interactive quiz lead magnet | performance, build | no |
| `lcu-modular-landing-page` | Modular landing page template for an umrah travel brand | build | no |
| `populix-asklumia-meta-ads` | Meta Ads performance for research and AI products | performance | no |
| `ventour-vcation-landing-pages` | Landing pages and TikTok Ads tests for travel brands | build, performance | no |

All numbers in seed files are `[placeholder]`. Never invent metrics.

---

## 7. Analytics & tracking

Push these to `window.dataLayer` (GTM handles GA4):

| Event | When | Params |
|---|---|---|
| `cta_click` | Any CTA button | `cta_label`, `cta_location` |
| `book_call_click` | WhatsApp / booking link | `cta_location` |
| `cv_download` | CV link | — |
| `case_study_view` | Case study page load | `project_slug`, `capabilities` |
| `work_filter` | Filter chip change | `filter_value` |
| `outbound_click` | LinkedIn / email / external | `link_url` |

Use a single helper `src/lib/track.ts`. GTM must load only when `PUBLIC_GTM_ID` is set.

`cta_location: "hero"` is intentionally never emitted — the hero has no CTA buttons (§4.1). Above the fold, CTA clicks come from `cta_location: "nav"` only.

The Stack section emits nothing: it has no links, buttons or hover states (DESIGN-SYSTEM.md §7.8).

---

## 8. SEO, performance, accessibility

- Per-page `<title>`, meta description, canonical, Open Graph + Twitter image (generate OG images at build time using the design tokens, or a static fallback `og-default.png`).
- `sitemap.xml` and `robots.txt`.
- JSON-LD `Person` on home, `CreativeWork` on case studies.
- Lighthouse targets (mobile): Performance ≥ 95, Accessibility 100, Best Practices 100, SEO 100.
- Images via `astro:assets`, AVIF/WebP, explicit width/height, lazy below the fold. The hero cutout must keep its alpha channel — WebP/AVIF only, never JPEG.
- The hero cutout is now rendered larger (DESIGN-SYSTEM.md §6.1): keep `loading="eager"` and make sure the emitted `srcset` covers up to ~1.4× the largest rendered box width (~740px CSS, so ~1480px at 2×) so it never looks soft on a retina laptop.
- Total JS on home < 30 KB gzipped.
- WCAG AA contrast (token pairings in DESIGN-SYSTEM.md §3 are pre-checked; do not use other pairings for text).
- Visible focus states, skip-to-content link, semantic landmarks, `prefers-reduced-motion` respected.

---

## 9. Project structure

```
src/
  components/
    layout/      Nav.astro, Footer.astro, Section.astro, Container.astro
    ui/          Button.astro, Tag.astro, Metric.astro, FilterChips.astro
    system/      SystemMap.astro            ← signature component
    work/        ProjectLead.astro, ProjectRow.astro
    sections/    Hero, SelectedWork, About, Approach, Stack, Experience, Contact
  content/work/  *.mdx
  data/          site.ts, stack.ts, experience.ts, metrics.ts
  lib/           track.ts
  styles/        tokens.css, global.css
  pages/         index.astro, work/index.astro, work/[slug].astro, 404.astro
public/          cv.pdf, og-default.png, favicon.svg
```

All editable copy (headline, bio, metrics, contact links) lives in `src/data/site.ts`, never hard-coded inside components.

---

## 10. Build phases

Work in this order and stop for review at the end of each phase.

1. **Foundation** — Astro + Tailwind setup, tokens.css from DESIGN-SYSTEM.md, fonts, layout components, Nav, Footer, a `/styleguide` page (dev only) rendering every token and UI component.
2. **Home** — all 7 sections with placeholder data, SystemMap component, responsive down to 360px.
3. **Work** — content collection, `/work` list + filter, case study template, 8 seed MDX files.
4. **Polish** — analytics, SEO, OG images, 404, Lighthouse pass, cross-browser check.

## 11. Definition of done
- Every section in §4 exists, in order, with no extra sections.
- No visual decision contradicts DESIGN-SYSTEM.md, including its "Do not" list — the only exceptions are the two explicitly documented, client-directed carve-outs in §12 of that file, both scoped to the Stack section.
- Lighthouse targets met on mobile.
- All copy and data editable from `src/data/` and `src/content/`.
- No invented metrics anywhere.

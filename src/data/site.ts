// Single source of truth for editable site copy and links.
// PRD.md §9: "All editable copy ... lives in src/data/site.ts, never
// hard-coded inside components." Phase 2+ will add hero/about/contact copy.

export const site = {
  name: "Kemal",
  role: "Senior Growth Specialist",
};

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/#about" },
  { label: "Approach", href: "/#approach" },
  { label: "Contact", href: "/#contact" },
] as const;

export const navCta = { label: "Book a call", href: "/#contact" };

export const contact = {
  email: "fattahkemalprayoga@gmail.com",
  whatsappUrl:
    "https://wa.me/6282219725939?text=Hi%20Kemal%2C%20I%27d%20like%20to%20talk%20about%20a%20project",
  whatsappDisplay: "+62 822-1972-5939",
  linkedinUrl: "https://www.linkedin.com/in/fattah-kemal-/",
  linkedinDisplay: "fattah-kemal",
  cvPath: "/cv.pdf",
};

// Hero — DESIGN-SYSTEM.md §6.1 (dummy copy; Kemal to replace all of it)
export const hero = {
  rotatedLabel: "Senior Growth",
  topStats: [
    { value: "6+", label: "Years Experience" },
    { value: "12+", label: "Brand Handled" },
  ],
  headline: "Hello",
  lead: "I'm Kemal a Senior Growth Performance",
  year: "2026",
  scrollCue: "Scroll down ↓",
};

// Highlights marquee — DESIGN-SYSTEM.md §6.1A. Each `headline` is the bold,
// quoted part; `description` is the plain-weight text after it.
export const highlights = [
  { headline: "6+ Years Of Experience", description: "Performance & Digital Marketing" },
  { headline: "12+ Brands Managed", description: "Across multiple industries" },
  { headline: "Digital Ecosystem Architecture", description: "Tracking, CRM & marketing workflows" },
  { headline: "AI-Powered Marketing", description: "AI-assisted analysis and workflows" },
  { headline: "Growth Strategy", description: "Full-funnel optimization & acquisition efficiency" },
] as const;

// Work features — accordion/dropdown section. Each item links to its real
// case study page, and `mockup` recreates that project's own real hero
// banner — kicker/title/intro copied verbatim from that page's own hero,
// plus the same visual centerpiece it uses there. Never a fabricated
// visual or invented copy:
// - `figure.kind: "ring"` — a scaled-down copy of that case study's hero
//   "stat ring" (Gentem / Taiwan NSC have no UI screenshot; their real
//   hero IS this ring), value/label pulled straight from that page's data.
// - `figure.kind: "frame"` — the same `DeviceFrame` chrome used on that
//   project's own hero, holding its real screenshot, resolved in
//   WorkFeatures.astro by `project` slug.
export const workFeatures = [
  {
    title: "Performance Marketing & Growth",
    description:
      "Acquisition strategy, funnel optimization, and measurable business outcomes.",
    cta: { label: "View project", href: "/work/gentem-digital-growth-strategy" },
    mockup: {
      kicker: "Project 01 / Growth Strategy",
      title: "Turning Funnel Data into Acquisition Growth",
      intro:
        "I managed full-funnel acquisition performance across Google Ads and Meta Ads, focusing on conversion bottlenecks, Total Contract targets, and customer acquisition cost.",
      figure: {
        kind: "ring",
        eyebrow: "January / performance",
        value: "112%",
        label: "Total Contract target achieved",
      },
    },
  },
  {
    title: "Organic Growth Strategy",
    description:
      "Audience insights, content strategy, and organic channel development.",
    cta: { label: "View project", href: "/work/taiwan-nsc-organic-growth-strategy" },
    mockup: {
      kicker: "Project 02 / Organic Growth",
      title: "Organic Growth Strategy",
      intro:
        "Built an educational content strategy to help prospective students access clear, reliable information about studying in Taiwan, while strengthening brand visibility and audience engagement.",
      figure: {
        kind: "ring",
        eyebrow: "Audience / growth",
        value: "+11.8%",
        label: "Follower growth, net",
      },
    },
  },
  {
    title: "Conversion Experience",
    description:
      "Landing page design, messaging hierarchy, and user journey planning.",
    cta: { label: "View project", href: "/work/landing-page-design" },
    mockup: {
      kicker: "Project 03 / Landing page & website design",
      title: "Landing page design",
      intro:
        "I design and build the pages that sit between an ad and a decision: clear enough to explain the offer, structured enough to earn trust, and built so the next step is never in question.",
      figure: { kind: "frame", project: "landing-page-design" },
    },
  },
  {
    title: "Product & Systems Development",
    description:
      "Business process improvement, CRM architecture, and workflow automation.",
    cta: { label: "View project", href: "/work/product-systems-design" },
    mockup: {
      kicker: "Project 04 / Product & business systems",
      title: "Make operations work as one.",
      intro:
        "From manual operations to a connected product system: turning fragmented booking, membership, payments, and customer management into a single structured operating model.",
      figure: { kind: "frame", project: "product-systems-design" },
    },
  },
] as const;

// About & Capabilities accordion (home `#about`) — DESIGN-SYSTEM.md
// ink/olive/bone/paper tokens only. `stats` are real figures already
// published on the linked case studies, never invented for this summary.
export const capabilities = [
  {
    step: "01",
    title: "Growth Strategy & Performance",
    description:
      "I turn campaign and funnel data into decisions about where to allocate effort, improve acquisition efficiency, and move customers toward conversion.",
    stats: [
      { value: "112%", label: "January contract target achievement" },
      { value: "−18.2%", label: "Cost per FPDP over three months" },
    ],
    tags: ["Google Ads", "Meta Ads", "Funnel optimization", "Budget allocation"],
  },
  {
    step: "02",
    title: "Conversion Experience",
    description:
      "I structure digital experiences around what people need to understand, believe, and do, using clear messaging, value propositions, and well-placed calls to action.",
    stats: [],
    tags: ["Landing page strategy", "Messaging", "User journey", "Figma"],
  },
  {
    step: "03",
    title: "Product & Systems Thinking",
    description:
      "I translate messy operational needs into practical product rules, connected customer data, and automation, choosing lean solutions over unnecessary complexity.",
    stats: [],
    tags: ["Product rules", "CRM architecture", "Automation", "Operational workflows"],
  },
] as const;

// Approach (home `#approach`) — fed into the shared PillarExplorer component
// (src/components/case-study/PillarExplorer.astro), same tab + swapping
// typographic-module pattern already used on the Taiwan NSC case study.
export const approachSteps = [
  {
    step: "01",
    title: "Diagnose before scaling.",
    note:
      "Find where the business is losing opportunities before increasing spend, launching another campaign, or adding new technology.",
  },
  {
    step: "02",
    title: "Connect the full journey.",
    note:
      "Look beyond traffic and leads to understand quality, progression, conversion, and what happens after acquisition.",
  },
  {
    step: "03",
    title: "Build what solves it.",
    note:
      "Choose the simplest useful mix of strategy, digital experience, product logic, and automation for the actual business constraint.",
  },
] as const;

// Growth System Map (DESIGN-SYSTEM.md §8) — hero's fixed 5 nodes.
// `href` left undefined until Phase 3 case studies exist to link to.
export const systemMapNodes = [
  { label: "Ads", note: "Meta, Google, TikTok" },
  { label: "Landing page", note: "Built in-house" },
  { label: "Tracking", note: "GA4, GTM, CAPI" },
  { label: "CRM", note: "HubSpot" },
  { label: "Automation", note: "Cekat, Mekari" },
] as const;

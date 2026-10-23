// Case study content — "Turning Funnel Data into Acquisition Growth".
// Single edit point for this page, per PRD.md's rule that editable copy
// lives in data files, not components.
//
// Terminology fix (flagged by the client before publishing): the 112%
// figure is the "Total Contract" funnel stage's target achievement, so it
// is called that consistently here — never the vaguer "purchase target" —
// to avoid the ambiguity the client called out.
//
// Numbers not directly in the source brief are computed, never invented:
// the flat "Target cost per FPDP" reference line is back-solved from the
// two disclosed variance percentages (Nov +5.8% above target, Jan -13.5%
// below target), both of which resolve to ~IDR 2.72–2.73M — see
// `costPerFpdp.referenceNote`. December's actual cost was not in the
// supplied figures, so it is left `null` rather than guessed (see
// `costPerFpdp.months`/`actual`); TrendChart renders that gap as a
// lighter "interpolated" segment, not a plotted data point.

export const caseStudy = {
  slug: "gentem-digital-growth-strategy",
  meta: {
    title: "Turning Funnel Data into Acquisition Growth — Kemal",
    description:
      "Full-funnel acquisition case study across Google Ads and Meta Ads for Gentem Indonesia: funnel diagnostics, channel strategy, and the results.",
  },
  header: {
    kicker: "Project 01 / Growth Strategy",
    title: "Turning Funnel Data into Acquisition Growth",
    client: "Gentem Indonesia",
    role: "Digital Performance Marketing",
    duration: "Nov 2025 – Jan 2026",
    intro:
      "I managed full-funnel acquisition performance across Google Ads and Meta Ads, focusing on conversion bottlenecks, Total Contract targets, and customer acquisition cost.",
    stats: [
      { value: "112%", label: "Total Contract target achieved" },
      { value: "−18.2%", label: "Cost per FPDP, Nov–Jan" },
      { value: "IDR 397M", label: "Combined media investment*" },
      { value: "189", label: "Customers acquired across channels*" },
    ],
    statsFootnote:
      "*Google Ads and Meta Ads results reported separately; combined totals are calculated from those figures.",
  },
  sidebar: {
    client: "Gentem Indonesia",
    industry: "Education — performance marketing",
    role: "Senior Growth Performance",
    duration: "Nov 2025 – Jan 2026",
    stack: ["Google Ads", "Meta Ads", "Google Analytics", "Google Tag Manager"],
  },
  glossary: {
    fpdp: "FPDP — [Kemal: spell out the full term here before publishing]",
  },
  overview: {
    challenge:
      "Improve acquisition efficiency without losing sight of conversion quality across the funnel.",
    strategy: [
      "Monitor conversion performance from traffic to final purchase.",
      "Identify funnel bottlenecks and assess lead quality through downstream outcomes.",
      "Structure Google Search by keyword intent and Meta Ads by audience temperature.",
      "Optimize media allocation against CPA and Total Contract targets.",
    ],
    outcome:
      "Lower Cost per FPDP over three months and exceed the Total Contract target in January, reaching 112% achievement.",
  },
  funnel: {
    heading: "Funnel Target Achievement (%)",
    subheading: "Nov 2025 – Jan 2026 · Monthly achievement vs. target, by funnel stage",
    caption:
      "Each line is the stage's monthly result as a percentage of that stage's own target — not a stage-to-stage conversion rate.",
    months: ["Nov", "Dec", "Jan"],
    yMax: 120,
    yTicks: [0, 30, 60, 90, 120],
    referenceLine: { value: 100, label: "Target (100%)" },
    rows: [
      { label: "Top Funnel", values: [89.1, 72.5, 67.5], weight: "muted" as const },
      { label: "Middle Funnel", values: [83.0, 65.4, 62.0], weight: "muted" as const },
      { label: "Bottom Funnel", values: [97.1, 97.8, 97.0], weight: "normal" as const },
      { label: "Total Contract", values: [94.9, 96.4, 112.0], weight: "emphasis" as const },
    ],
    takeaway:
      "Total Contract target achievement rose to 112% in January, while top- and middle-funnel target achievement declined. The next optimization priority is improving upstream performance without compromising bottom-funnel results.",
  },
  costPerFpdp: {
    heading: "Cost per FPDP vs. Target",
    subheading: "Lower is better. Values in IDR millions.",
    months: ["Nov 2025", "Dec 2025", "Jan 2026"],
    yMax: 3.2,
    yTicks: [0, 0.8, 1.6, 2.4, 3.2],
    actual: [2.88, null, 2.36],
    referenceValue: 2.72,
    referenceNote:
      "Target line derived from the two disclosed variance percentages below (not a separately disclosed target figure). December's actual cost was not included in the supplied data.",
    callouts: [
      { month: "November", value: "IDR 2.88M", delta: "5.8% above target cost" },
      { month: "January", value: "IDR 2.36M", delta: "13.5% below target cost" },
    ],
    takeaway:
      "Cost per FPDP decreased by approximately 18.2% from November to January. January was the first of these three months to beat the cost target.",
  },
  channels: [
    {
      id: "google-ads",
      eyebrow: "Channel 01 / Google Search",
      title: "Capture Demand. Convert Intent.",
      intro:
        "Built a search campaign structure around user intent, from early-stage discovery to high-intent and branded searches.",
      stats: [
        { value: "IDR 162M", label: "Media investment" },
        { value: "83", label: "Customers acquired" },
        { value: "IDR 1.95M", label: "Cost per customer" },
        { value: "3%+", label: "CTR maintained" },
      ],
      architectureHeading: "Search Funnel Architecture",
      architecture: [
        {
          step: "01",
          stage: "Discovery",
          group: "Broad & Informational Keywords",
          note: "Capture early-stage demand and introduce the brand.",
        },
        {
          step: "02",
          stage: "Consideration",
          group: "High-Intent Keywords",
          note: "Reach users actively searching for relevant programs.",
        },
        {
          step: "03",
          stage: "Conversion",
          group: "Brand Keywords",
          note: "Convert existing brand demand into customer acquisition.",
        },
      ],
      priorities: [
        "Prioritize high-intent keywords based on conversion performance.",
        "Monitor Search Impression Share and lost impression share due to rank or budget.",
        "Refine bidding, keyword targeting, and budget allocation.",
      ],
      funnel: {
        title: "Acquisition Results — reported Google Ads campaign outcomes",
        stages: [
          { label: "Total contacts", value: 1409 },
          { label: "Qualified leads", value: 1111 },
          { label: "Opportunities", value: 215 },
          { label: "Customers", value: 83 },
        ],
        note: "Bars use total contacts as the reference. They are not stage-to-stage conversion rates.",
      },
    },
    {
      id: "meta-ads",
      eyebrow: "Channel 02 / Meta Ads",
      title: "Turn Attention into Acquisition",
      intro:
        "Designed a multi-stage advertising funnel that aligned audience intent, creative messaging, and conversion objectives.",
      stats: [
        { value: "IDR 235M", label: "Media investment" },
        { value: "106", label: "Customers acquired" },
        { value: "IDR 2.22M", label: "Cost per customer" },
        { value: "395", label: "Opportunities generated" },
      ],
      architectureHeading: "Audience & Creative Strategy",
      architecture: [
        {
          step: "01",
          stage: "Cold",
          group: "Prospecting",
          note: "Broad and interest-based audiences. Strong hooks and educational creatives to build reach and engagement.",
        },
        {
          step: "02",
          stage: "Warm",
          group: "Consideration",
          note: "Retarget ad engagers and landing-page visitors with relevant information to strengthen consideration.",
        },
        {
          step: "03",
          stage: "Hot",
          group: "Conversion",
          note: "Retarget high-intent audiences with clear value propositions, offers, and direct calls to action.",
        },
      ],
      priorities: [
        "Monitor CPM and CTR to assess reach efficiency and creative engagement.",
        "Track CPL and CPA to control acquisition costs.",
        "Evaluate audience progression and downstream conversion quality.",
      ],
      funnel: {
        title: "Acquisition Results — reported Meta Ads campaign outcomes",
        stages: [
          { label: "Total contacts", value: 1637 },
          { label: "Leads", value: 1125 },
          { label: "Opportunities", value: 395 },
          { label: "Customers", value: 106 },
        ],
        note: "Bars use total contacts as the reference. They are not stage-to-stage conversion rates.",
      },
    },
  ],
  closing: {
    heading: "What the numbers tell us",
    takeaways: [
      {
        title: "Acquisition efficiency improved",
        note: "Cost per FPDP fell 18.2% between November 2025 and January 2026.",
      },
      {
        title: "Total Contract targets were exceeded",
        note: "January reached 112% of the Total Contract target, despite lower top- and middle-funnel target achievement.",
      },
      {
        title: "Channel strategy matched customer intent",
        note: "Google Search captured demand through keyword intent, while Meta Ads used audience segmentation and tailored creative messaging.",
      },
    ],
  },
} as const;

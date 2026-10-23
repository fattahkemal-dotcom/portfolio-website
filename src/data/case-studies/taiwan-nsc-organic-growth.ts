// Case study content — "From Information Gaps to Organic Growth"
// (Taiwan New South Center Indonesia). Real client data, Jul–Sep.
//
// Two corrections made against the source brief, both to keep the page
// internally consistent (the brief itself asked to double-check numbers
// before publishing):
//
// 1. The overview stat "51,070 — highest reported reach" was labeled
//    "August" in the brief's overview section, but the brief's own Results
//    section attributes 51,070 to JULY ("July reach — Highest monthly
//    reach") and describes August as a dip that September recovers from.
//    Relabeled to July here to match the Results section, which is the
//    more specific source.
// 2. "1,450 new followers across 3 months (513+441+496)" does not
//    reconcile with "+724 net growth (6,110 -> 6,834)" — 1,450 is gross
//    follows gained; 724 is net (gross minus unfollows/churn over the same
//    window). Both are real, disclosed numbers, so both are kept, but
//    labeled distinctly (`followersGained.gross` vs `followerGrowth.net`)
//    rather than presented as the same figure.
//
// Several figures from the brief (38.6K/35.9K/33.2K, 364/506/695,
// 5/16/2, 691, 144) have no clear metric label in the source and are
// intentionally left out entirely, per the brief's own instruction — see
// the closing `dataNote` below, shown on-page.
//
// August's reach and engagement-rate figures were not disclosed either;
// both series carry `null` for August rather than an interpolated guess
// (TrendChart renders that as a lighter dashed segment, not a plotted
// point).

export const caseStudy = {
  slug: "taiwan-nsc-organic-growth-strategy",
  meta: {
    title: "From Information Gaps to Organic Growth — Kemal",
    description:
      "Organic content strategy case study for Taiwan New South Center Indonesia: closing the information gap for prospective students while growing reach, followers, and engagement.",
  },
  header: {
    kicker: "Project 02 / Organic Growth",
    title: "From Information Gaps to Organic Growth",
    client: "Taiwan New South Center Indonesia",
    role: "Education / Study Abroad Consulting",
    duration: "July – September",
    intro:
      "Built an educational content strategy to help prospective students access clear, reliable information about studying in Taiwan, while strengthening brand visibility and audience engagement.",
    stats: [
      { value: "+11.8%", label: "Follower growth, net — 6,110 → 6,834" },
      { value: "5.55%", label: "September engagement rate, up from 5.22%" },
      { value: "51,070", label: "Highest monthly reach — July" },
      { value: "1,450", label: "New followers gained (gross) — 513 + 441 + 496" },
    ],
  },
  sidebar: {
    client: "Taiwan New South Center Indonesia",
    industry: "Education — study abroad consulting",
    role: "Senior Growth Performance",
    duration: "July – September",
    stack: ["Content strategy", "Instagram", "Organic social"],
  },
  problem: {
    heading: "The Growth Problem",
    subheading: "Two sides of the growth problem",
    audienceGap: {
      title: "Audience Gap",
      intro: "Prospective students struggled to find useful information.",
      items: [
        "Information accessibility",
        "Speed of information",
        "Clarity of information",
        "Community and guidance",
        "Trust in available sources",
      ],
    },
    companyGap: {
      title: "Company Gap",
      intro: "The brand needed a stronger organic content foundation.",
      items: [
        "Low brand awareness",
        "Limited audience reach",
        "Low trust equity",
        "Lack of educational content infrastructure",
      ],
    },
    opportunity: {
      label: "Strategic opportunity",
      text: "Position the brand as a reliable information hub for students exploring higher education opportunities in Taiwan.",
    },
  },
  strategy: {
    heading: "The Strategy",
    subheading: "Build an Information-Led Content Engine",
    intro:
      "Instead of relying solely on promotional content, the strategy focused on becoming a consistent source of useful information.",
    steps: [
      {
        step: "01",
        title: "Timely Information",
        note: "Deliver relevant updates about studying in Taiwan, universities, and scholarship opportunities.",
      },
      {
        step: "02",
        title: "Educational Content",
        note: "Simplify complex application processes and study-abroad information into easy-to-understand content.",
      },
      {
        step: "03",
        title: "Trust Through Consistency",
        note: "Build credibility through reliable information and a consistent educational publishing approach.",
      },
    ],
    principle: "Core principle: make the brand useful before asking the audience to convert.",
  },
  results: {
    heading: "Organic Performance Dashboard",
    subheading: "Three-month trend, July–September",
    months: ["July", "August", "September"],
    reach: {
      title: "Monthly organic reach",
      caption: "Reported reach across July, August, and September. August's figure was not disclosed.",
      values: [51070, null, 49838] as const,
      yMax: 52000,
      yTicks: [44000, 46000, 48000, 50000, 52000],
    },
    newFollowers: {
      title: "New followers gained per month",
      caption: "Gross follows gained each month (not the same as net follower-count change — see note below).",
      values: [513, 441, 496],
    },
    engagement: {
      title: "Engagement rate",
      caption: "Reported engagement rate in percent. August's figure was not disclosed.",
      values: [5.22, null, 5.55] as const,
      yMax: 5.7,
      yTicks: [5.1, 5.25, 5.4, 5.55, 5.7],
    },
    callouts: [
      { label: "July reach", value: "51,070", note: "Highest monthly reach" },
      { label: "September reach", value: "49,838", note: "Recovered from August" },
      { label: "Follower count", value: "+11.8%", note: "6,110 → 6,834" },
      { label: "Engagement rate", value: "+0.33pp", note: "5.22% → 5.55%" },
    ],
    takeaway:
      "Reach recovered after an August decline, while follower count and engagement rate increased throughout the period. This suggests positive momentum in audience growth and engagement, although the data alone does not establish causation.",
  },
  impact: {
    heading: "What Changed — Business Impact",
    items: [
      {
        title: "Stronger audience growth",
        note: "Follower count increased by 724, from 6,110 to 6,834.",
      },
      {
        title: "Improved engagement",
        note: "Engagement rate rose from 5.22% to 5.55% over three months.",
      },
      {
        title: "A more useful brand presence",
        note: "Educational content created a foundation for answering prospective students' questions and supporting inbound consultation inquiries.",
        caveat:
          "This point is a strategic outcome supported by the project narrative, not a quantified inquiry uplift — monthly inquiry or consultation data would be needed to measure it directly.",
      },
    ],
  },
  dataNote:
    "Only metrics with a clear, confirmed label in the source report are shown on this page. A handful of supplementary figures (reach breakdowns, weekly counts) were left out because their metric label was ambiguous — they'll be added once confirmed.",
} as const;

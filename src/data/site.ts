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
  whatsappUrl: "https://wa.me/0000000000?text=Hi%20Kemal%2C%20I%27d%20like%20to%20talk%20about%20a%20project", // [placeholder — Kemal to fill real number]
  linkedinUrl: "https://www.linkedin.com/in/", // [placeholder]
  cvPath: "/cv.pdf",
};

export const footerNote =
  "Designed and built with Claude Code. Deployed on Vercel."; // [placeholder — confirm host]

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

// Growth System Map (DESIGN-SYSTEM.md §8) — hero's fixed 5 nodes.
// `href` left undefined until Phase 3 case studies exist to link to.
export const systemMapNodes = [
  { label: "Ads", note: "Meta, Google, TikTok" },
  { label: "Landing page", note: "Built in-house" },
  { label: "Tracking", note: "GA4, GTM, CAPI" },
  { label: "CRM", note: "HubSpot" },
  { label: "Automation", note: "Cekat, Mekari" },
] as const;

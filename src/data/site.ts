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

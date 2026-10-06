// DESIGN-SYSTEM.md §7.8 / PRD.md §4.5 — client-supplied verbatim. Do not
// rename, reorder, merge or "improve" any group or tool name.
// `tools[].logo` stays undefined until real vendor marks exist (astro:assets
// ImageMetadata import); every chip renders in its empty placeholder state.

import type { ImageMetadata } from "astro";

interface StackTool {
  name: string;
  logo?: ImageMetadata;
}

interface StackGroup {
  group: string;
  tools: StackTool[];
}

export const stackGroups: StackGroup[] = [
  {
    group: "Digital performance",
    tools: [
      { name: "Google Analytics" },
      { name: "Google Ads" },
      { name: "Meta Ads" },
      { name: "TikTok Ads" },
    ],
  },
  {
    group: "Digital tracking",
    tools: [
      { name: "Google Analytics" },
      { name: "Google Tag Manager" },
      { name: "Pixel Hubspot" },
    ],
  },
  {
    group: "Website developer",
    tools: [
      { name: "Laravel" },
      { name: "Cloudflare" },
      { name: "Vercel" },
      { name: "Lovable" },
      { name: "GitHub" },
      { name: "Codex" },
      { name: "Claude Code" },
    ],
  },
  {
    group: "CRM and automation",
    tools: [
      { name: "n8n" },
      { name: "Make.com" },
      { name: "HubSpot" },
      { name: "Zapier" },
      { name: "Spreadsheet" },
      { name: "WABA" },
    ],
  },
];

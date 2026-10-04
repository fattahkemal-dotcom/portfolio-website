# Handover — Portfolio Website

**Last updated:** 2026-10-04 — scaffolded and pushed to GitHub

**State:**
- Plain HTML/CSS/JS static site scaffolded (index.html, css/style.css, js/main.js).
- Placeholder content: hero, about, 3 project cards, contact (uses fattahkemalprayoga@gmail.com).
- Live on GitHub: https://github.com/fattahkemal-dotcom/portfolio-website (public repo, main branch).
- GitHub CLI (gh v2.102.0) is installed at "C:\Program Files\GitHub CLI\gh.exe" and authenticated as fattahkemal-dotcom (not yet on PATH in already-open shells — use full path or open a new terminal).

**Next steps:**
1. Replace placeholder copy (hero subtitle, about bio, project descriptions/links) with real content.
2. Add real project screenshots to assets/images/.
3. Enable GitHub Pages for free hosting: repo Settings -> Pages -> Source: Deploy from branch -> main / (root). Site will be live at https://fattahkemal-dotcom.github.io/portfolio-website/
4. Going forward, commit + git push as normal to update the live repo.

**Decisions / gotchas:**
- Chose plain HTML/CSS/JS (no framework) to match the user's established pattern for landing pages (SEA Padel, Genstarkids LPs).
- Dark theme by default — easy to swap color tokens at the top of css/style.css (:root vars).
- git user.name/email were unset globally; set per-repo (git config user.name/email without --global) to make the initial commit — confirm or change the identity before further commits if needed.
- gh was freshly installed via winget this session; PATH wasn't refreshed in already-open shells, so the full binary path was used for the repo-create/push step. New terminals should have gh on PATH normally.

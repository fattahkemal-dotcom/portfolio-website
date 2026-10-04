# Handover — Portfolio Website

**Last updated:** 2026-10-04 — initial scaffold

**State:**
- Plain HTML/CSS/JS static site scaffolded (index.html, css/style.css, js/main.js).
- Placeholder content: hero, about, 3 project cards, contact (uses fattahkemalprayoga@gmail.com).
- Local git repo initialized and committed.
- NOT yet pushed to GitHub — `gh` CLI is not installed on this machine, and git had no global user.name/user.email configured before this task (set locally in this repo only, not globally).

**Next steps:**
1. Replace placeholder copy (hero subtitle, about bio, project descriptions/links) with real content.
2. Add real project screenshots to `assets/images/`.
3. To get this on GitHub, either:
   - Install GitHub CLI (`winget install GitHub.cli`), run `gh auth login`, then `gh repo create portfolio-website --public --source=. --push` from this folder, OR
   - Create an empty repo manually on github.com, then `git remote add origin <url>` and `git push -u origin main`.
4. Once on GitHub, consider enabling GitHub Pages (Settings → Pages → deploy from `main` branch) for free hosting.

**Decisions / gotchas:**
- Chose plain HTML/CSS/JS (no framework) to match the user's established pattern for landing pages (SEA Padel, Genstarkids LPs).
- Dark theme by default — easy to swap color tokens at the top of `css/style.css` (`:root` vars).
- git user.name/email were unset globally; set per-repo (`git config user.name/email` without `--global`) to make the initial commit — confirm or change the identity before pushing publicly.

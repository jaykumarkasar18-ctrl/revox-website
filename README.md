# REVOX

Smart Modular Systems for Modern Manufacturing.

REVOX is a **fictional** engineering startup concept: a public company website plus an internal
Startup Strategy dashboard (sustainability, business model, operations, financials, risk, ESG, team, roadmap).
It has no real customers, revenue or products. All figures are **projected academic assumptions**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run format   # optional: pretty-print the source with Prettier
```

## Structure

```
src/
  main.js              entry point
  router.js            hash router, navigation, footer
  styles/main.css      design system and layout
  data/                products, industries, financials, risks, esg, team, roadmap, ...
  utils/               dom, format, calculations (break-even, 5-year projection)
  components/          ui.js (tabs, drawer, KPI), charts.js (SVG charts)
  pages/               Home, Solutions, HowItWorks, Industries, Contact, ...
  pages/strategy/      Overview, Sustainability, BusinessModel, Operations, Financials, Risk, Esg, Team, Roadmap
```

Pages use hash routes (`#home`, `#p-flexstation`, `#s-fin`), so no server rewrite rules are needed.

## Publish to GitHub

```bash
git init
git add .
git commit -m "Initial commit: REVOX website"
git branch -M main
git remote add origin https://github.com/<your-username>/revox-website.git
git push -u origin main
```

Then in the repository go to **Settings, Pages, Source: GitHub Actions**. The included workflow
(`.github/workflows/deploy.yml`) builds and deploys on every push to `main`.

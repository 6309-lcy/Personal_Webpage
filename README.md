# CheukYin LAM — Personal Portfolio

Professional portfolio site built with Next.js 16 + Tailwind, designed for ML Engineer / Data Analyst roles.

## Local Development

```bash
npm run dev
```

## Deploy to GitHub Pages (github.io)

This site is configured for **static export** so it can be hosted on GitHub Pages (like your old site at `6309-lcy.github.io/Personal_Webpage`).

### One-time Setup

1. Push this folder to your GitHub repo (recommended: `Personal_Webpage`).

2. Go to your repo **Settings → Pages**:
   - Source: **GitHub Actions**

3. (Optional but recommended) If you want the site at `https://6309-lcy.github.io/Personal_Webpage/`:
   - Edit `next.config.ts` and uncomment these two lines:
     ```ts
     basePath: '/Personal_Webpage',
     assetPrefix: '/Personal_Webpage/',
     ```
   - Update the workflow if needed (usually not required).

4. Push to `main` branch.

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy to GitHub Pages.

### After first deployment

- Your site will be live at `https://6309-lcy.github.io/Personal_Webpage/` (or root if no basePath).
- Future pushes to `main` will automatically redeploy.

## Important Notes for GitHub Pages

- Uses `output: 'export'` (fully static)
- All images are served as static files (no Next.js Image optimization)
- No server-side features (API routes, etc.)

## Project Structure

- `app/page.tsx` — Main content (Hero, About, Experience, Work, Proof)
- `app/components/` — Nav + Theme toggle
- `public/` — Images and `.nojekyll`

## Updating Content

All content lives in `app/page.tsx`. Edit the sections directly. After changes, commit and push — it will redeploy automatically.

---

Built following professional UI/UX standards (no AI-template patterns, strong evidence focus, clean typography).

# Chun Wai Chiu — Portfolio

A Next.js portfolio website for graduate software engineering recruitment in Australia, configured for static export and deployment on **GitHub Pages**.

## Tech Stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- Responsive design — mobile, tablet, desktop

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Install dependencies

```bash
npm install
```

### Run locally (dev server, hot reload)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build static site

```bash
npm run build
```

This outputs a fully static site into the `out/` folder. No Node.js server is needed to serve it.

### Preview the static build locally

```bash
npm run preview
```

This serves the `out/` folder exactly as it would be served in production.

---

## Deploying to GitHub Pages

This repo is pre-configured to deploy automatically via **GitHub Actions** whenever you push to `main`.

### One-time setup

1. **Create a GitHub repository** and push this project to it.

2. **Set the repo name in `next.config.ts`.**
   Open `next.config.ts` and confirm the `REPO_NAME` constant matches your actual GitHub repository name:

   ```ts
   const REPO_NAME = "portfolio"; // change to match your repo name exactly
   ```

   This matters because GitHub Pages serves project repos from a sub-path:
   `https://<your-username>.github.io/<repo-name>/`

   > **Exception:** if your repository is named exactly `<your-username>.github.io` (a user/org page), GitHub serves it from the domain root instead of a sub-path. In that case, set `REPO_NAME = ""`.

3. **Enable GitHub Pages with Actions as the source.**
   In your repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

4. **Push to `main`.**
   The included workflow at `.github/workflows/deploy.yml` will automatically:
   - Install dependencies
   - Build the static site (`npm run build`)
   - Add a `.nojekyll` file (prevents GitHub Pages' Jekyll processor from ignoring the `_next` folder)
   - Deploy the `out/` folder to GitHub Pages

5. **Done.** After the workflow finishes (check the **Actions** tab), your site will be live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

### Manual deploy trigger

You can also trigger a deploy manually from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**, without needing a new push.

### Using a custom domain instead

If you'd rather use a custom domain (e.g. `allenchiu.dev`) instead of `github.io/portfolio`:

1. Set `REPO_NAME = ""` in `next.config.ts` (since a custom domain serves from the root, not a sub-path)
2. Add a `public/CNAME` file containing your domain, e.g. `allenchiu.dev`
3. Configure the DNS records as instructed in GitHub's [custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Project Structure

```
portfolio/
├── .github/workflows/
│   └── deploy.yml          # Auto-builds and deploys to GitHub Pages on push to main
├── app/
│   ├── layout.tsx          # Root layout (nav, footer, metadata)
│   ├── page.tsx             # Homepage
│   ├── projects/
│   │   ├── page.tsx         # All projects listing
│   │   └── [slug]/
│   │       └── page.tsx     # Dynamic case study page (statically generated per project)
│   └── research/
│       └── page.tsx         # Research / publication page
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx       # Text-based project card (no image required)
│   ├── HeroLinks.tsx
│   └── Tag.tsx
├── lib/
│   └── data.ts               # ALL site content — edit this file to update anything
├── public/
│   ├── .nojekyll              # Required for GitHub Pages to serve the _next folder
│   └── images/
│       └── pool-game.png      # Pool game screenshot (already added)
└── next.config.ts             # Static export + GitHub Pages basePath config
```

---

## How to Update Content

**All content lives in `lib/data.ts`.** You do not need to touch any page files for routine updates.

### Update personal info

Edit the `personal` object at the top of `lib/data.ts`.

### Add a project GitHub or demo link

Find the project in the `projects` array and update:

```ts
{
  slug: "ai-legal-assistant",
  githubUrl: "https://github.com/yourrepo",  // add your real URL here
  liveUrl: "https://yourdemo.com",           // add your real URL here
}
```

If `githubUrl` or `liveUrl` is `null`, the button simply doesn't render.

### Add a resume download

1. Place your resume PDF at `public/resume.pdf`
2. Add `resumeUrl: "/resume.pdf"` to the `personal` object in `lib/data.ts`
3. Reference `personal.resumeUrl` in a download button wherever you'd like one (e.g. the hero section)

### Add project screenshots (optional)

Featured/case study cards currently use a clean text-only layout and don't require screenshots. If you'd like to add one later:

1. Place the image in `public/images/`
2. Set the `image` field for that project in `lib/data.ts`, e.g. `image: "/images/hotel-booking.png"`
3. The case study page will automatically display it; the project card itself stays text-based by design

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with all sections |
| `/projects` | All projects listing |
| `/projects/ai-legal-assistant` | Case study |
| `/projects/hotel-booking-system` | Case study |
| `/projects/ourvoice` | Case study |
| `/projects/pool-game` | Case study |
| `/projects/vending-machine` | Case study |
| `/research` | Research publication page |

---

## Notes on Static Export Compatibility

This project uses `output: "export"` in `next.config.ts`, which means:

- All pages are pre-rendered to plain HTML at build time — there is no Node.js server in production
- `next/image` automatic optimization is disabled (`unoptimized: true`) since that requires a server; images load as regular `<img>` tags instead
- Dynamic project routes (`/projects/[slug]`) are pre-generated for every project at build time via `generateStaticParams` — this is required for static export and is already set up
- `trailingSlash: true` ensures each route resolves to its own `index.html` inside a matching folder, which is how GitHub Pages expects static sites to be structured

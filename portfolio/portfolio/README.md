# Chun Wai Chiu — Portfolio

A Next.js portfolio website for graduate software engineering recruitment in Australia.

## Tech Stack

- **Next.js 16** (App Router, static export-friendly)
- **TypeScript**
- **Tailwind CSS v4**
- **Responsive design** — mobile, tablet, desktop

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

---

## Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Done. Your portfolio is live.

No environment variables are needed.

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout (nav, footer, metadata)
│   ├── page.tsx            # Homepage (Hero, About, Projects, Research, Experience, Skills, Contact)
│   ├── projects/
│   │   ├── page.tsx        # All projects listing
│   │   └── [slug]/
│   │       └── page.tsx    # Dynamic case study page
│   └── research/
│       └── page.tsx        # Research / publication page
├── components/
│   ├── Nav.tsx             # Sticky navigation
│   ├── Footer.tsx          # Site footer
│   ├── ProjectCard.tsx     # Project card (used on homepage + projects page)
│   ├── HeroLinks.tsx       # Hero social links (client component)
│   └── Tag.tsx             # Tech stack tag/badge
├── lib/
│   └── data.ts             # ALL site content — edit this file to update anything
└── public/
    └── images/
        └── pool-game.png   # Pool game screenshot (already added)
```

---

## How to Update Content

**All content lives in `lib/data.ts`**. You do not need to touch any page files.

### Update personal info

Edit the `personal` object at the top of `lib/data.ts`:

```ts
export const personal = {
  name: "Chun Wai Chiu",
  email: "AllenChiu010314@gmail.com",
  phone: "0403 148 738",
  linkedin: "https://www.linkedin.com/in/...",
  github: "https://github.com/AllenChiu0314",
  // ...
};
```

### Add a project GitHub or demo link

Find the project in the `projects` array in `lib/data.ts` and update:

```ts
{
  slug: "ai-legal-assistant",
  githubUrl: "https://github.com/yourrepo",  // add your real URL here
  liveUrl: "https://yourdemo.com",           // add your real URL here
  // ...
}
```

If `githubUrl` or `liveUrl` is `null`, the button will not appear.

### Add a resume download

1. Place your resume PDF at `public/resume.pdf`
2. In `lib/data.ts`, add `resumeUrl: "/resume.pdf"` to the `personal` object
3. In `app/page.tsx` Hero section, add a button:

```tsx
<a href={personal.resumeUrl} download style={...}>Download Resume</a>
```

---

## How to Add Screenshots

Place screenshots in `public/images/` then update the `image` field in `lib/data.ts`:

```ts
{
  slug: "hotel-booking-system",
  image: "/images/hotel-booking-hero.png",  // was null
  // ...
}
```

### Screenshots to add

| Project | Suggested filename |
|---|---|
| AI Legal Assistant | `public/images/ai-legal-assistant.png` |
| Hotel Booking System | `public/images/hotel-booking.png` |
| OurVoice | `public/images/ourvoice.png` |
| JavaFX Vending Machine | `public/images/vending-machine.png` |
| Pool Game | ✅ Already added at `public/images/pool-game.png` |

Recommended image size: **1280×720px** or similar 16:9 ratio. The portfolio crops images to fill the card area.

---

## Customisation Notes

- **Colours**: edit CSS variables in `app/globals.css` under `:root {}`
- **Typography**: the site loads Inter from Google Fonts via a `<link>` tag in `app/layout.tsx`
- **New pages**: create a new folder under `app/` and add a `page.tsx`
- **Animations**: controlled by CSS keyframes in `globals.css` — remove the `animate-fade-in` classes from `page.tsx` to disable

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

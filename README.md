# Keystone OS Marketing Website

The official website for [Keystone OS](https://keystones.lovable.app), the all-in-one platform for roofing contractors.

## Quick Start (Copy and Paste)

```bash
# 1. Clone the repo
git clone https://github.com/dannyp9000/keystone-website.git
cd keystone-website

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Production

```bash
# Build the production version
npm run build

# Start the production server
npm start

# Or start on a specific port and allow network access
npx next start -H 0.0.0.0 -p 3000
```

## Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow the prompts)
vercel
```

Or connect the GitHub repo directly at [vercel.com/new](https://vercel.com/new) and it will auto-deploy on every push.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-based config)
- **Framer Motion** (scroll animations, hover effects)
- **Lucide React** (icons)
- **React Hook Form** (form validation)

## Pages

| Route | Page |
|-------|------|
| `/` | Home / Landing |
| `/features` | Full feature list |
| `/pricing` | Plans and FAQ |
| `/about` | Company story |
| `/contact` | Contact form |
| `/integrations` | Third-party connections |
| `/demo` | Request a demo |

## Project Structure

```
src/
  app/              # Pages (one folder per route)
  components/
    layout/         # Navbar, Footer, Logo, ScrollToTop
    ui/             # Button, Card, Badge, Input, Section, AnimateIn
    sections/       # Hero, Stats, Features, Pipeline, Knox, CTA, etc.
  data/             # Content (features, pricing, testimonials, integrations)
  lib/              # Utilities
```

## How to Edit Content

All website copy lives in `src/data/` as TypeScript files. Edit these to change text without touching components:

- **Features:** `src/data/features.ts`
- **Pricing tiers:** `src/data/pricing.ts`
- **Testimonials:** `src/data/testimonials.ts`
- **Integrations:** `src/data/integrations.ts`
- **Nav links:** `src/data/navigation.ts`

## How to Change Colors

Edit the CSS variables in `src/app/globals.css` under the `@theme inline` block:

```css
--color-primary: #d97706;      /* Main brand color (amber) */
--color-secondary: #1e293b;    /* Dark backgrounds */
--color-muted: #f1f5f9;        /* Light gray backgrounds */
```

## How to Change Images

All images use Unsplash URLs. Search [unsplash.com](https://unsplash.com) for a new image, copy the URL, and replace it in the component file. Format:

```
https://images.unsplash.com/photo-XXXXX?w=1600&q=80
```

## Environment

No environment variables needed. The site is fully static.

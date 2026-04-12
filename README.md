# Keystone OS — Marketing Website

The official public-facing website for Keystone OS, the operating system for roofing contractors.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/features` | Full feature breakdown |
| `/pricing` | Plans and FAQ |
| `/about` | Company story |
| `/contact` | Contact form |
| `/integrations` | Third-party integrations |
| `/demo` | Request a demo |

## Project Structure

```
src/
  app/           # Pages (Next.js App Router)
  components/
    layout/      # Navbar, Footer, Logo, ScrollToTop
    ui/          # Button, Card, Badge, Input, Section, etc.
    sections/    # Hero, Stats, Features, Pipeline, Knox, CTA, etc.
  data/          # Content data (features, pricing, testimonials, etc.)
  lib/           # Utilities (cn helper)
```

## Build for Production

```bash
npm run build
npm start
```

## Customization

- **Colors:** Edit CSS variables in `src/app/globals.css`
- **Content:** Edit data files in `src/data/`
- **Pricing:** Edit `src/data/pricing.ts`
- **Testimonials:** Edit `src/data/testimonials.ts`

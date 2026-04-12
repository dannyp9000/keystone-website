# Decisions & Assumptions

## Technology
- **Framework:** Next.js 16 (App Router) — installed via `create-next-app` with Tailwind CSS v4
- **Styling:** Tailwind CSS v4 with CSS-based theming (no `tailwind.config.ts` needed)
- **Animations:** Framer Motion for scroll-reveal and micro-interactions
- **Icons:** Lucide React — consistent, MIT-licensed icon set
- **Forms:** React Hook Form with inline validation

## Brand & Design
- **Color palette:** Amber/gold primary (#d97706) with slate/charcoal secondary — blends construction warmth with tech professionalism
- **Typography:** Inter from Google Fonts — clean, highly legible, modern
- **Tone:** Confident, no-nonsense, benefit-oriented. Written for roofing company owners and operations managers who value ROI over hype.

## Pricing
- Inferred three tiers (Starter $149/mo, Professional $349/mo, Enterprise custom) based on the feature depth across the three phases. These are placeholder prices to be adjusted.

## Testimonials
- All testimonials are placeholder content. Names, companies, and quotes are fictional but written to sound authentic to the roofing industry.

## Content
- Contact information (email, phone, address) is placeholder. Update before launch.
- Form submissions log to console. Wire up to your preferred backend (Resend, Supabase, etc.) before production.

## Pages Built
1. Home (landing page with hero, stats, features, pipeline, Knox AI, competitors, testimonials, CTA)
2. Features (full feature breakdown by category)
3. Pricing (three tiers + FAQ)
4. About (company story, values, milestones)
5. Contact (form + contact info)
6. Integrations (all third-party integrations)
7. Demo (request demo form + what to expect)

## Architecture Decisions
- All page content lives in client components (`"use client"`) to support Framer Motion animations
- Server components used for metadata exports only (SEO)
- Data files in `src/data/` for easy content updates without touching components
- Mobile-first responsive design throughout

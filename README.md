# TCHANCY TECH Website

Official multilingual website for TCHANCY TECH, built with Astro and Tailwind CSS.

## Suggested GitHub Description
Official website of TCHANCY TECH — multilingual Astro site for digital solutions, web/mobile development, enterprise systems, and cybersecurity services.

## Suggested GitHub Topics (Tags)
`astro`, `tailwindcss`, `typescript`, `javascript`, `multilingual`, `i18n`, `seo`, `vercel`, `business-website`, `cybersecurity`, `web-development`

## Overview
This project is the corporate website for TCHANCY TECH.

It includes:
- Service showcase (Web, Mobile, Enterprise, Security)
- Portfolio and credibility sections
- Contact section with email, phone, and WhatsApp
- FAQ section + FAQ structured data (JSON-LD)
- Multilingual content (EN, FR, PT, ES)
- SEO setup (meta description, Open Graph, canonical, Organization/ProfessionalService schema)

## Tech Stack
- Astro
- Tailwind CSS
- JavaScript (client-side language switcher)

## Project Structure
- `src/pages/index.astro` — main landing page
- `src/layouts/Layout.astro` — global layout, SEO tags, JSON-LD, navbar/footer
- `src/scripts/i18n.js` — language switcher logic
- `src/i18n/*.json` — translations (EN/FR/PT/ES)
- `public/` — static assets

## Local Development
### 1) Install dependencies
```bash
npm install
```

### 2) Run development server
```bash
npm run dev
```

### 3) Build for production
```bash
npm run build
```

### 4) Preview production build
```bash
npm run preview
```

## Available Scripts
- `npm run dev` — start local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview built project

## Deployment (Vercel)
Recommended settings:
- Framework Preset: Astro
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## SEO Notes
The project includes:
- Unique page title and description
- Open Graph + Twitter metadata
- Canonical URL support
- JSON-LD for:
  - `Organization`
  - `ProfessionalService`
  - `FAQPage`

## Contact (Current)
- Email: Tchancy@tech-center.com
- Phone / WhatsApp: +55 (45) 99125-7789
- Location: Paraná, Brazil

## License
Proprietary — all rights reserved by TCHANCY TECH.

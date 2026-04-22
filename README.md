## Premium Wig E-commerce

A modern, responsive e-commerce store built with Next.js 16 and React 19, featuring a premium wig and hair product catalog with shopping cart functionality and WhatsApp-based checkout.

## Project Overview

Fashion L is a fully functional e-commerce platform designed for selling premium wigs and hair products including lace front wigs, full lace wigs, synthetic wigs, and various hair styles. It features client-side cart management with localStorage persistence, WhatsApp integration for seamless checkout, and a responsive design optimized for all devices.

## Features

### Core Functionality
- Dynamic product catalog with category filtering (Human Hair, Synthetic)
- Shopping cart with add/remove items, quantity controls, and real-time totals
- WhatsApp checkout integration for direct vendor communication
- Multi-image product galleries with smooth transitions
- Promotional banners for marketing campaigns
- Contact and blog pages for content management
- Mobile-responsive navigation with hamburger menu

### Technical Highlights
- Client-side cart with localStorage persistence across sessions
- React Context API for global state management
- TypeScript strict mode for type safety
- Tailwind CSS v4 for utility-first styling
- Server and client component separation with Next.js App Router
- Optimized performance with automatic code splitting
- SEO-friendly structure with proper metadata

## Tech Stack

### Frontend
- Next.js 16.2.4
- React 19.2.4
- TypeScript 5

### Styling
- Tailwind CSS v4
- PostCSS
- Google Fonts (Playfair Display, Inter)

### Tools
- ESLint
- Git
- Node.js

## Project Structure

```bash
fashion-l/
├── public/
│   ├── product-images/
│   ├── banner-images/
│   └── shoplogo.png
├── src/
│   ├── app/
│   │   ├── blog/
│   │   ├── checkout/
│   │   ├── contact/
│   │   ├── shop/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── CategoryTabs.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductSkeleton.tsx
│   │   ├── PromotionalBanners.tsx
│   │   ├── Providers.tsx
│   │   ├── SectionHeader.tsx
│   │   └── WhatsAppButton.tsx
│   ├── context/
│   │   └── CartContext.tsx
│   └── lib/
│       └── data.ts
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

Repository: [https://github.com/enoch-systems/fashion-l](https://github.com/enoch-systems/fashion-l)

```bash
# Clone the repository
git clone https://github.com/enoch-systems/fashion-l.git
cd fashion-l

# Install dependencies
npm install

# Run development server
npm run dev
```

## Deployment

Live Demo: [https://wigseller.vercel.app](https://wigseller.vercel.app)

This project is deployed on Vercel (automatic deployment from GitHub).

## Contact

- Email: [enochc.official@gmail.com](mailto:enochc.official@gmail.com)
- GitHub: [https://github.com/enoch-systems](https://github.com/enoch-systems)
- X: [https://x.com/_enochsystems](https://x.com/_enochsystems)
- Location: Nigeria

# Brunello Cucinelli AI Boutique — Home Page

A clean, modern, and production-ready repository organizing the Brunello Cucinelli AI Boutique home page, lookbook showcase, atmospheric soundscapes, and AI styling interaction.

## Tech Stack & Architecture

- **Core**: React 18
- **Bundler & Dev Server**: Vite 6
- **Styling**: Vanilla CSS Design System with Solomeo typography tokens (`GT Eesti Pro`, `Quarto`, `Jane Austen`)
- **Assets**: Complete high-resolution images, video editorials, custom webfonts, and full preserved legacy bundle modules (`Cart`, `chapters`, `colors`, `debug`, `PromptBar`, `Wishlist`, etc.)

---

## Repository Structure

```text
home-page/
├── public/
│   ├── favicon.ico
│   ├── favicon-96x96.png
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── site.webmanifest
│   ├── fonts/                       # GT Eesti Pro, Quarto, Jane Austen WOFF/WOFF2
│   ├── images/                      # High-resolution lookbook & background imagery
│   └── videos/                      # Solomeo editorials and loader videos
├── src/
│   ├── assets/
│   │   ├── images/                  # Source image assets
│   │   ├── videos/                  # Source video assets
│   │   ├── fonts/                   # Source font files
│   │   └── bundles/                 # Preserved bundle modules (Cart, chapters, colors, debug, etc.)
│   ├── components/
│   │   ├── BrandCrest.jsx           # Solomeo medieval crest SVG emblem
│   │   ├── Header.jsx               # Navigation bar with hamburger menu & luxury actions
│   │   ├── LookbookCarousel.jsx     # 3D perspective perspective carousel & keyboard/touch navigation
│   │   ├── PromptBar.jsx            # Floating AI prompt input with dynamic cycling queries
│   │   └── Footer.jsx               # Footer credits & Callimacus architecture notice
│   ├── pages/
│   │   └── HomePage.jsx             # Main luxury boutique landing page
│   ├── styles/
│   │   └── global.css               # Core styling, animations, 3D transforms & responsive rules
│   ├── App.jsx                      # Root application component
│   └── main.jsx                     # Application entry point
├── index.html                       # HTML document template with meta and SEO tags
├── package.json                     # Scripts and dependencies
├── vite.config.js                   # Vite configuration with React plugin and path aliases
├── .gitignore                       # Standard Git ignore rules
└── README.md                        # Documentation and setup instructions
```

---

## Quick Start Guide

### 1. Install Dependencies

Open a terminal in the `home-page` directory and run:

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will run locally at:
`http://localhost:5173/`

### 3. Build for Production

```bash
npm run build
```

This compiles optimized static assets into the `dist/` directory.

### 4. Preview Production Build

```bash
npm run preview
```

---

## Features & Interactions

- **3D Perspective Lookbook**: Interactive 6-card editorial carousel featuring tailored knitwear, sartorial suiting, winter editorial, and countryside styling.
- **Dynamic AI Prompt Bar**: Smooth placeholder cycling through curated styling requests ("I need an outfit for a movie premiere", "A formal evening reception in Milan").
- **Solomeo Branding**: Vector Brunello Cucinelli crest and luxury uppercase typography.
- **Responsive Layout**: Fluid design supporting desktop, tablet, and mobile displays.
- **Preserved Assets**: Includes all original production chunks (`Cart.C6aGQEPk.js`, `chapters.w_IU9OrB.js`, `colors.Bb8yfDVH.js`, `debug.DRbc_vzF.js`, `main.DgvSKYYb.css`, etc.) for reference and downstream extensions.

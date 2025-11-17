# Astro Solar Nusantara

This is a corporate website for Solar Nusantara, built with Astro.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── .astro/
├── .gemini/
├── .git/
├── .vscode/
├── node_modules/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AboutIntro.astro
│   │   ├── Benefits.astro
│   │   ├── Copyright.astro
│   │   ├── FlipBoxGrid.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HeaderTop.astro
│   │   ├── HeroSection.astro
│   │   ├── MobileHeader.astro
│   │   ├── Navbar.astro
│   │   ├── NewsItem.astro
│   │   ├── NewsSection.astro
│   │   ├── ProductCarousel.astro
│   │   ├── ServiceCarousel.astro
│   │   ├── ServiceHighlight.astro
│   │   ├── StatItem.astro
│   │   ├── StatsGrid.astro
│   │   └── VideoSection.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── kontak.astro
│   │   ├── layanan.astro
│   │   ├── pintar.astro
│   │   ├── produk.astro
│   │   ├── tentang.astro
│   │   └── berita/
│   │       ├── [...slug].astro
│   │       └── index.astro
│   └── styles/
│       └── global.css
├── wp/
│   └── index.html
├── .gitignore
├── astro.config.mjs
├── DESIGN.md
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```

## Components

The reusable components are located in `src/components`:

- `AboutIntro.astro`: Introduction section about the company.
- `Benefits.astro`: Section describing the benefits of their services.
- `Copyright.astro`: Copyright notice for the footer.
- `FlipBoxGrid.astro`: A grid of flip boxes with calls to action.
- `Footer.astro`: The site-wide footer.
- `Header.astro`: The site-wide header, including Navbar and MobileHeader.
- `HeaderTop.astro`: The top bar of the header for desktop.
- `HeroSection.astro`: The main hero section for the homepage.
- `MobileHeader.astro`: The header for mobile devices, including the hamburger menu.
- `Navbar.astro`: The main navigation bar for desktop.
- `NewsItem.astro`: A single news item card.
- `NewsSection.astro`: A section displaying a list of news items.
- `ProductCarousel.astro`: A carousel to display products.
- `ServiceCarousel.astro`: A carousel to display services.
- `ServiceHighlight.astro`: A section to highlight specific services with stats.
- `StatItem.astro`: A single stat item used in `ServiceHighlight`.
- `StatsGrid.astro`: A grid of animated statistics.
- `VideoSection.astro`: A section to embed a YouTube video.

## Routes

The pages and routes are defined in `src/pages`:

- `/`: `src/pages/index.astro` (Homepage)
- `/kontak`: `src/pages/kontak.astro`
- `/layanan`: `src/pages/layanan.astro`
- `/pintar`: `src/pages/pintar.astro`
- `/produk`: `src/pages/produk.astro`
- `/tentang`: `src/pages/tentang.astro`
- `/berita`: `src/pages/berita/index.astro`
- `/berita/[...slug]`: `src/pages/berita/[...slug].astro` (Dynamic route for individual news articles)

If you want to check, visit astro.solar-nusantara.id

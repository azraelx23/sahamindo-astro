# Technology Stack

## Core Framework
- **Astro v5.7** - Static site generator with content collections
- **TypeScript** - Type-safe JavaScript development
- **Bun** - Fast JavaScript runtime and package manager

## Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Source Sans Pro & Source Serif 4** - Typography fonts

## Content Management
- **Keystatic CMS** - Git-based headless CMS
- **MDX** - Markdown with JSX components
- **Astro Content Collections** - Type-safe content handling

## Key Integrations
- **Pagefind** - Static site search
- **React** - For Keystatic CMS components only
- **RSS & Sitemap** - Built-in Astro integrations
- **date-fns** - Date manipulation
- **reading-time** - Article reading time estimation

## Common Commands

### Development
```bash
bun dev          # Start development server
bun build        # Build for production
bun preview      # Preview production build
```

### Keystatic CMS
1. Set `RUN_KEYSTATIC=true` in `.env`
2. Run `bun dev`
3. Access CMS at `http://localhost:4321/keystatic`

## Build Configuration
- **Base URL**: Configurable via `SITE.basePath`
- **Image optimization**: Astro's experimental responsive images
- **Path aliases**: `@/*` maps to `src/*`, `@assets/*` maps to `src/assets/*`
- **Vite plugins**: Tailwind CSS integration
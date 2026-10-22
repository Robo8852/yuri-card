# Yuri — Digital Business Card

A single-page, phone-shaped digital business card for **Yuri**, a one-man builder of redwood
fences, gates, decks and pergolas based in Sonora, California. Quick actions (call / text /
WhatsApp / save contact), a "send me a photo of your space" CTA, how he works, services,
service area, and a gallery of real job photos with a lightbox.

See `NOTES.md` for open TODOs (full name, email, business name, domain, phone, portrait consent).

## Tech stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first config via `@theme` in `src/index.css`, no `tailwind.config.js`)
- shadcn/ui (`Button` extended with `brand` / `brandSecondary` / `brandGhost` variants)
- lucide-react icons
- Font: Public Sans via Google Fonts

## Commands

```sh
npm install
npm run dev       # dev server
npm run build     # tsc -b + vite build to dist/
npm run preview   # serve the production build
```

## Notes

- **vCard**: `public/Yuri.vcf` is a real static file linked by a plain anchor with
  `download`. iOS Safari cannot download Blob vCards; never convert it.
- Phone and site URL live in one place: `src/lib/site.ts`.
- Static assets are in `public/` (`hero.webp`, `yuri.webp`, `work/`, `og-image.png`).

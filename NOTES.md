# Project Notes / TODOs

## Yuri — redwood outdoor structures, Sonora, CA

Cloned from the David Whitmire template (`~/clients/david-whitmire-card`) and re-skinned.
Content sources: `~/clients/yuri/HANDOFF.md` (confirmed facts, approved copy, positioning)
and the polished job photos in `~/Downloads/Paulina-Trockman/` (NN-polished.webp).
Nothing on this card is invented. Where a fact is missing, the section or field is left out.

### Open TODOs (need answers from Yuri, via Leo or Paulina Trockman)

- **Full name** (spelling and how he wants it shown). WhatsApp handle reads
  "~Yuiiskhovrebov"; unconfirmed, so the card shows "Yuri" only. When known, update
  `src/components/Identity.tsx` (h1), `public/Yuri.vcf` (`FN:`, `N:`, and rename the file +
  the `href`/`download` in `src/components/QuickActions.tsx`), `index.html` (title, og:title),
  `src/App.tsx` (share title/text), `src/components/Footer.tsx`, `public/og-image.png`.
- **Business name** — none confirmed. If one exists: `Identity.tsx` (line under the name),
  `Yuri.vcf` (`ORG:`), `index.html`, `Footer.tsx`.
- **Email** — unknown, so there is no Email tile and no `EMAIL:` in the vCard. Add a tile in
  `src/components/QuickActions.tsx` (the 4-column grid will need 5 columns or a swap) and
  `EMAIL:` in `public/Yuri.vcf`.
- **Domain / website** — none. No website tile. The vCard `URL:` points at this card. If a
  domain is bought: `src/lib/site.ts` (`SITE_URL`), `index.html` (og:url, og:image),
  `public/Yuri.vcf` (`URL:`).
- **Is (415) 996-5183 the number to publish?** It came from a WhatsApp contact screenshot.
  It drives Call, Text, WhatsApp, the photo CTA, the closing Call button and the vCard.
  Single source: `src/lib/site.ts` (`PHONE_E164`, `PHONE_DISPLAY`, `WHATSAPP_URL`), plus
  `public/Yuri.vcf` and the og image text.
- **Portrait consent** — the avatar, og image, favicon and apple-touch-icon use photo 13
  (Yuri cutting deck boards). Confirm Yuri agrees to his face being on the card. If not,
  swap `public/yuri.webp` (avatar), regenerate `public/og-image.png` without the portrait,
  and regenerate `public/favicon.ico` + `public/apple-touch-icon.png`.
- **Photo color** — the polished set's earlier, punchier color pass was overwritten; Leo may
  prefer it. If a new pass lands, recopy into `public/work/`, regenerate `public/work/thumb/`
  (720px max, q78), `public/hero.webp` (photo 01, 2.2:1 crop) and `public/yuri.webp`.

### Deliberately left out (no real source)
Testimonials, socials, resources/blog links, years in trade, license/insurance, guarantees,
callback promise, pricing. Those template components were deleted, not hidden.

### Build details
- Palette: dark slate ground, one steel-blue accent (`src/index.css` `:root`). NOT
  red/brown: Leo rejected the redwood-sampled palette. Buttons use dark text on the light
  blue for contrast.
- Type: Public Sans (Google Fonts, 400/500/600/700). Body copy at Regular (400) per the
  cards handoff's font-weight lesson.
- Hero: photo 01 (hillside pergola), `public/hero.webp`.
- Avatar: `public/yuri.webp`, a square crop of photo 13 centred on his face (checked at 360px).
- Gallery: 12 job photos (01 is the hero, 03 is the same deck as 07, 13 is the portrait;
  those are not in the grid). Captions are the type of work only; locations only where the
  handoff confirms them (07 Chicago area; 10 and 14 Saint Catherine's Monastery, Sonora).
  Grid loads `public/work/thumb/NN.webp`; the lightbox loads `public/work/NN.webp`.
- Primary CTA "Send me a photo of your space" opens SMS with the prefilled line
  "Hi Yuri, here's a photo of my space:" (per-platform `&body=` / `?body=`), with a
  WhatsApp link (`wa.me/14159965183?text=...`) under it, then the approved 3-step
  "how to start" copy.
- og:image is a 1200x630 PNG (`public/og-image.png`) at an absolute URL; favicon and
  apple-touch-icon were regenerated from the portrait.

### Deployment
Live at https://yuri-card.vercel.app (Vercel project `yuri-card`, auto-deploys from `main`
on github.com/Robo8852/yuri-card). Update `src/lib/site.ts` and `index.html` if a custom
domain is attached.

## Footer agency credit needs its link restored
The footer says "Card by **Proclaim Agency**" as **plain text, not a link**. Once the correct
Proclaim Agency URL is decided:

1. Edit `src/components/Footer.tsx` — wrap the agency name in an `<a>` with
   `target="_blank" rel="noopener"` and the classes `font-semibold text-primary no-underline`.
2. Remove this section from the notes.

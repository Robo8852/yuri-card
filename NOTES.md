# Project Notes / TODOs

## George (Imperial Decking) — redwood outdoor structures, Sonora, CA

Cloned from the David Whitmire template (`~/clients/david-whitmire-card`) and re-skinned.
Content sources: `~/clients/yuri/HANDOFF.md` (confirmed facts, approved copy, positioning)
and the polished job photos in `~/Downloads/Paulina-Trockman/` (NN-polished.webp).
Nothing on this card is invented. Where a fact is missing, the section or field is left out.

### Confirmed updates (2026-10-22 — ready for Fable build pass)
- **Name:** He wants to go by **George** (not Yuri). Update `Identity.tsx`, `PrimaryCtas.tsx` ("Hi George..."), `ClosingCta.tsx` ("Call George"), `Hero.tsx` alt text, `public/Imperial-Decking.vcf`, `index.html`, `App.tsx`, and `public/og-image.png`.
- **Business name:** **Imperial Decking**.
- **Experience:** **1991–2026 (35 years of hands-on experience)**. Phrase as **"Building since 1991 · 35 years of hands-on experience"** (put the years on George's craft, NOT "In business since 1991" or "Est. 1991", since he hasn't had a brick-and-mortar business).

### Done 2026-10-22 (Fable pass)
- "Yuri" → "George" everywhere user-facing (Identity, Footer, ClosingCta, share text, meta
  description, SMS/WhatsApp prefill, alt text, vCard FN/N, og-image).
- Experience line added under the subtitle in `Identity.tsx`:
  "Building since 1991 · 35 years of hands-on experience".
- Portrait renamed `public/yuri.webp` → `public/imperial-decking.webp`.

### Open TODOs (need answers from George, via Leo or Paulina Trockman)

- **Full name** (spelling and how he wants it shown). WhatsApp handle reads
  "~Yuiiskhovrebov"; unconfirmed, so the card shows "George" only. When known, update
  `src/components/Identity.tsx` (h1), `public/Imperial-Decking.vcf` (`FN:`, `N:`, and rename the file +
  the `href`/`download` in `src/components/QuickActions.tsx`), `index.html` (title, og:title),
  `src/App.tsx` (share title/text), `src/components/Footer.tsx`, `public/og-image.png`.
- **Business name** — confirmed: **Imperial Decking** (h1 in `Identity.tsx`, `ORG:` in
  `Imperial-Decking.vcf`, `index.html`, `Footer.tsx`, share text in `App.tsx`). George is the person.
- **Email** — unknown, so there is no Email tile and no `EMAIL:` in the vCard. Add a tile in
  `src/components/QuickActions.tsx` (the 4-column grid will need 5 columns or a swap) and
  `EMAIL:` in `public/Imperial-Decking.vcf`.
- **Domain / website** — none. No website tile. The vCard `URL:` points at this card. If a
  domain is bought: `src/lib/site.ts` (`SITE_URL`), `index.html` (og:url, og:image),
  `public/Imperial-Decking.vcf` (`URL:`).
- **Is (415) 996-5183 the number to publish?** It came from a WhatsApp contact screenshot.
  It drives Call, Text, WhatsApp, the photo CTA, the closing Call button and the vCard.
  Single source: `src/lib/site.ts` (`PHONE_E164`, `PHONE_DISPLAY`, `WHATSAPP_URL`), plus
  `public/Imperial-Decking.vcf` and the og image text.
- **Portrait consent** — the avatar, og image, favicon and apple-touch-icon use photo 13
  (George cutting deck boards). Confirm George agrees to his face being on the card. If not,
  swap `public/imperial-decking.webp` (avatar), regenerate `public/og-image.png` without the portrait,
  and regenerate `public/favicon.ico` + `public/apple-touch-icon.png`.
- **Photo color** — the polished set's earlier, punchier color pass was overwritten; Leo may
  prefer it. If a new pass lands, recopy into `public/work/`, regenerate `public/work/thumb/`
  (720px max, q78), `public/hero.webp` (photo 01, 2.2:1 crop) and `public/imperial-decking.webp`.

### Deliberately left out (no real source)
Testimonials, socials, resources/blog links, license/insurance, guarantees,
callback promise, pricing. Those template components were deleted, not hidden.

### Build details
- Palette (2026-10-22, matches the Forged Iron homepage at Leo's request; replaced the
  steel blue): warm charcoal #171513, cream #F2ECE3, burnt orange. `--primary` #F0A35C is
  for text and icons; solid buttons are `--brand` #C2581F → `--primary-deep` #A9481A with
  white text (`src/index.css` `:root`).
- Type: Schibsted Grotesk (body 400, headings 800) + JetBrains Mono for small labels, same
  as Forged Iron. Logo image (`public/logo-imperial-decking.webp`) is the h1.
- og:image regenerated in the same style; source `tools/og/og.html` (render at 1200x630).
- Hero: photo 01 (hillside pergola), `public/hero.webp`.
- Avatar: `public/imperial-decking.webp`, a square crop of photo 13 centred on his face (checked at 360px).
- Gallery: 12 job photos (01 is the hero, 03 is the same deck as 07, 13 is the portrait;
  those are not in the grid). Captions are the type of work only; locations only where the
  handoff confirms them (07 Chicago area; 10 and 14 Saint Catherine's Monastery, Sonora).
  Grid loads `public/work/thumb/NN.webp`; the lightbox loads `public/work/NN.webp`.
- Primary CTA "Send me a photo of your space" opens SMS with the prefilled line
  "Hi George, here's a photo of my space:" (per-platform `&body=` / `?body=`), with a
  WhatsApp link (`wa.me/14159965183?text=...`) under it, then the approved 3-step
  "how to start" copy.
- og:image is a 1200x630 PNG (`public/og-image.png`) at an absolute URL; favicon and
  apple-touch-icon were regenerated from the portrait.

### Deployment
Live at https://imperialdecking.vercel.app (Vercel project `yuri-card`, auto-deploys from `main`
on github.com/Robo8852/yuri-card). Update `src/lib/site.ts` and `index.html` if a custom
domain is attached.

## Footer agency credit needs its link restored
The footer says "Card by **Proclaim Agency**" as **plain text, not a link**. Once the correct
Proclaim Agency URL is decided:

1. Edit `src/components/Footer.tsx` — wrap the agency name in an `<a>` with
   `target="_blank" rel="noopener"` and the classes `font-semibold text-primary no-underline`.
2. Remove this section from the notes.

### Homepage directions from Claude Design (2026-10-22)
Claude Design project `01fd43b3-94cf-46e1-b570-3ee67238ce06` ("Imperial Decking homepage
directions") has four homepage variations. All four are ported as standalone static pages in
`public/homepages/` (served at `/homepages/`, with a picker at `/homepages/index.html`):
A Golden Hour, B Editorial, C Bento, D Forged Iron. They sit beside the card app and do not
touch it. Images reuse `public/work/NN.webp`; the hero is `public/homepages/hero-deck.webp`
(from `public/generated/hero-deck.png`). Pages carry `noindex` until one is chosen.
Port changes vs. the design: hover styles became CSS classes, D's sticky text pill is always
on, and phone grids drop `span 2` below 600px (it caused sideways scroll on C).

Next session: start with `HANDOFF-homepages.md` (Forged Iron state, open feedback, animation plan).

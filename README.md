# Flowtek Services website

Astro static site for Flowtek Services, a licensed plumber and gas fitter based in
Yeppoon, Queensland, serving Rockhampton, Taranganba and the Capricorn Coast.

Built to the rules in `/CLAUDE.md` and `/OS/` of the Flowtek operating system.
Read those before changing any copy or any fact on this site.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

`prebuild` regenerates `public/_redirects` from `src/data/suburbs.js`, so the
suburb aliases and the legacy WordPress redirects never drift from the data.

## Where things live

| Path | What it owns |
|---|---|
| `src/data/business.js` | **Every business fact.** Phone, credential, services, the emergency wording. Anything unconfirmed is `null` and is not rendered. |
| `src/data/suburbs.js` | The suburb library. One entry per page, each with genuinely local substance. |
| `src/data/reviews.js` | Real Google reviews, verbatim. Never edited, never attributed to a suburb. |
| `src/data/service-content.js` | Long-form service page copy. |
| `src/styles/global.css` | The whole design system, built from `/OS/brand/tokens.md`. |
| `scripts/gen-redirects.mjs` | Generates `public/_redirects`. |

## Rules that bind any change here

1. **Never invent trust.** No licence number, ABN, insurance detail, guarantee,
   star rating, review count or years in business unless it is confirmed in
   `/OS/company.md`. Four of those are still open register rows.
2. **Never claim cover that is not confirmed.** The offer is emergency response
   during active business hours. Not around the clock, not same day, and no
   response time. `/OS/decisions.md` register row 5.
3. **No aggregate rating anywhere,** including in the structured data. The live
   Google figure moves on its own.
4. **Australian English, DD/MM/YYYY, Australian dollars stating GST.**
5. **No long dashes in anything Flowtek writes.** They remain inside verbatim
   customer quotes, because a quote is never altered.
6. **No emoji in a heading, a button or an interface.**
7. **No key, password or token in this repository.** Netlify and GitHub
   credentials live in their own platforms. Form submissions go to Netlify Forms.

## URL structure

| Pattern | Count | Notes |
|---|---|---|
| `/plumber-{suburb}/` | 27 | Canonical suburb landing pages |
| `/plumbing-{suburb}/` | 27 | 301 to the canonical page, so both keyword URLs resolve |
| `/services/{service}/` | 6 | |
| `/`, `/services/`, `/areas-we-serve/`, `/about/`, `/contact/`, `/reviews/`, `/projects/` | 7 | |
| `/thanks/`, `/404` | 2 | `noindex`, and excluded from the sitemap |

## Deploy

Netlify builds `npm run build` and publishes `dist`. Pushing to `main` deploys.

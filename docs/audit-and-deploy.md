# Similarity audit, QA sign-off, and the first week

Compiled 20/08/2026, against the build deployed to `flowtek-services.netlify.app`.

---

## 1. The doorway page audit

The question the Doorway Page Auditor asks of every page: *if you deleted this page, would a
searcher in that suburb lose anything?*

### Measured similarity

Two measurements were taken across all 351 pairs of the 27 suburb pages, using 5-gram
Jaccard similarity.

| Measurement | Average | Highest pair | Verdict |
|---|---|---|---|
| Whole rendered page, header and footer stripped | 35.3% | 49.8% (Allenstown vs Wandal) | Expected. This is the shared template: navigation labels, the six service names, the form fields, the three promises, the calls to action. Every site on the internet has this. |
| **Unique local prose only** (intro, the local paragraph, the fault, the access reality, the fact list, the FAQ) | **0.07%** | **1.53%** (Zilzie vs Norman Gardens) | This is the number that matters. Effectively zero overlap. |

**Unique local copy written:** 11,451 words across 27 pages. Shortest page 373 words of
unique local content (Kawana), longest 594 (Rockhampton).

### The standing test

Two pages picked at random, read side by side, with the place names covered. A stranger can
tell which is which because the content is about different things, not because the name is
different:

- **Park Avenue** is about tree roots at the joints of vitreous clay sewer, and a blockage
  interval that gets shorter each time.
- **Farnborough** is about pressure pumps short cycling, waterlogged pressure vessels and
  on-site wastewater on properties with no mains connection.
- **The Range** is about century-old drainage under heritage Queenslanders and blocks too
  steep and narrow to get a machine onto.
- **Mulambin** is about stormwater that cannot fall away on a high tide, and holiday-let
  owners who are not in town when the fault is found.

None of those four paragraphs would survive having the suburb name swapped.

### Pages cut, and why

Nine suburbs were removed from the intended list before any page was written, because they
failed the test. The full list and the reason for each is in
[`keyword-and-suburb-map.md`](./keyword-and-suburb-map.md). The short version: Gracemere and
Mount Morgan fall outside the assumed service radius, and the rest either duplicate a
housing-age story another page already tells, or are localities that residents fold into a
suburb that already has a page. All of them are named on the areas page instead, so a
searcher from one of them still lands somewhere useful.

### Doorway Page Auditor: **signed off.**

The library is 27 pages, not 600. Every page answers a different question. The two-URL
keyword pattern was consolidated with a 301 rather than shipped as two indexable pages.

---

## 2. Accessibility and QA

Checked at 390 px and 1440 px, and by an automated pass over all 42 built pages.

| Check | Result |
|---|---|
| Pages built | 42, plus 68 redirect rules |
| Exactly one `h1` per page | Pass, 42/42 |
| Heading order, no skipped levels | Pass, 42/42 |
| `alt` on every `<img>` | Pass. Alt text describes what is actually in the frame, checked against the images themselves. |
| `width` and `height` on every `<img>` | Pass, so no layout shift |
| Canonical tag | Pass, 42/42 |
| Title length | All at or under 60 characters |
| Meta description length | All at or under 160 characters |
| JSON-LD parses | Pass, on every page, every block |
| Internal links resolve | Pass, zero broken links across the whole site |
| `tel:` href | `tel:+61448726474` everywhere, verified on all 42 pages |
| `sms:` href | `sms:+61448726474` with a prefilled body carrying the suburb name, verified on all 42 |
| Suburb name spelling | Rendered from one data file, so a suburb cannot be spelt two ways |
| Banned words from `/OS/voice.md` | Zero occurrences across the whole site |
| Long dashes | Zero in anything Flowtek wrote. They remain inside nine verbatim customer quotes, because a customer's punctuation is never altered. |
| American spelling | Zero |
| Colour contrast | Every pairing taken from the approved table in `/OS/brand/colours.md`. Orange buttons carry Ink labels at 5.28:1. Body copy on Mist is Ink at 14.38:1. Slate is used on White only. |
| Focus indicators | 3 px Ink on light surfaces, 3 px White on Navy and Ink, 2 px offset. Never removed. |
| Tap targets | Buttons 52 px minimum, nav links 48 px, the fixed action bar 60 px. All above the 44 px floor. |
| Form fields | Every field has a visible `<label>` above it, `aria-describedby` on the hint text, `required` on required fields, and 16 px input text so mobile does not zoom on focus. |
| Skip link | Present, visible on focus |
| `prefers-reduced-motion` | Honoured |
| Keyboard navigation | Mobile menu is a real `<button>` with `aria-expanded`, closes on Escape and returns focus |
| JavaScript required | None. The only script on the site is the 20-line mobile menu toggle. Every page works with JS off. |

**Accessibility and QA Engineer: signed off**, with one item carried:
`public/favicon.svg` is a placeholder mark drawn from scratch, not the Flowtek logo, because
there is no vector master and tracing the raster is banned by `logo-rules.md`. Replace it
when the vector master arrives.

---

## 3. Performance

| Item | Result |
|---|---|
| Total build | 3.9 MB including every image variant for every page |
| Largest single asset | 260 kB, a WebP hero variant at 2x |
| Fonts | Two self-hosted WebOnly WOFF2 files, 48 kB and 14 kB, latin subset. No external font request. |
| External requests | Zero. No CDN, no analytics, no tag manager, no third-party script. |
| Images | Every image is converted to WebP at build, served with a `srcset`, given explicit dimensions, and lazy-loaded below the fold. The hero on each page is `fetchpriority="high"`. |
| CSS | One stylesheet, inlined by Astro where it is small enough |

---

## 4. The local with the problem

Three pages picked at random and walked through on a 375 px viewport, as a person standing
in their laundry with water on the floor.

| Page | Do I know you do this work? | Do you come to my suburb? | Has anyone near me used you? | Can I dial? |
|---|---|---|---|---|
| `/plumber-park-avenue/` | Yes, H1 reads "Plumber in Park Avenue" | Yes, "Park Avenue 4703 · Rockhampton" and "about 40 km from our Yeppoon base" above the fold | Real named Google reviews further down, honestly not attributed to the suburb | **Orange Call button fixed at the bottom of the screen, visible without scrolling** |
| `/plumber-mulambin/` | Yes | Yes | Yes | Yes |
| `/plumber-the-range/` | Yes | Yes | Yes | Yes |

Time from landing to a dialable button: **immediate.** The fixed action bar carries a
60 px orange Call button and a Text button, and it never scrolls away on a phone. The
in-page hero also carries call, text and form.

**The local with the problem seat: reached the dial button on all three.**

---

## 5. Deploy

Already done. This section is the record and the runbook.

| Item | Value |
|---|---|
| Repository | `github.com/goallan1987/flowtek-website`, branch `main` |
| Netlify team | Flowtek Services (`jason-gr-3puw`) |
| Netlify project | `flowtek-services` |
| Live URL | `https://flowtek-services.netlify.app` |
| Build command | `npm run build` (the `prebuild` step regenerates `public/_redirects`) |
| Publish directory | `dist` |
| Node version | 22, pinned in `netlify.toml` |
| Auto deploy | On. Every push to `main` builds and publishes. |
| Deploy previews | On, and kept private to the team. Production is public. |
| Netlify Forms | Enabled. The quote form posts to the `quote` form with a honeypot. |

### No credential is stored in this repository

Nothing in this repo contains a key, password or token, and nothing should. Where each one
lives:

| Credential | Where it lives | Who can rotate it |
|---|---|---|
| GitHub account | GitHub, account `goallan1987` | Gregory Allan |
| Netlify account and team | Netlify, team Flowtek Services | Gregory Allan and Jason Breingan (2 members) |
| Domain registrar for flowtekservices.com.au | Held outside this repo | Jason Breingan |
| Google Business Profile | Google | Jason Breingan |
| Form submissions | Netlify Forms, on the project | Team members |

---

## 6. Cutting the domain over

The site is live on the Netlify subdomain. It is **not** yet on
`flowtekservices.com.au`, because that is Jason's call and it takes the old site down.

When he says go:

1. **Back up the WordPress site first.** Export the database and the media library. Some of
   the review feed and the project write-ups only exist there.
2. In Netlify → `flowtek-services` → **Domain management**, add `flowtekservices.com.au`
   and `www.flowtekservices.com.au`.
3. Point the DNS at Netlify. Either delegate the domain to Netlify DNS, or add the A record
   and CNAME that Netlify gives you at the current registrar. **Lower the TTL to 300
   seconds a day before the switch**, so a mistake is 5 minutes rather than 24 hours.
4. Wait for the Let's Encrypt certificate to issue, then set the primary domain and force
   HTTPS.
5. Check the redirects listed in section 7 resolve on the real domain.
6. Only then take the WordPress hosting down.

**One thing to check before cutover:** `flowtekservices.com.au/about/` was serving text
about online casinos when this site was sampled on 20/08/2026
(`/OS/decisions.md` register row 14). That is an injected or hijacked page and it needs to
be dealt with on the WordPress side regardless, because it may indicate a compromised
install. This site replaces `/about/` with a real page, but do not assume the cutover fixes
the underlying problem.

---

## 7. First-week checks

Do these in order, and none of them takes long.

### Day one, on cutover

- [ ] Submit `https://flowtekservices.com.au/sitemap-index.xml` in Google Search Console.
- [ ] Use the URL Inspection tool on `/`, `/plumber-yeppoon/` and `/plumber-rockhampton/`
      and request indexing on each.
- [ ] Test the quote form end to end from a phone. Submit it and confirm the submission
      lands in Netlify → Forms.
- [ ] **Set up the form notification email** in Netlify → Forms → Notifications, so Jason
      is actually told when someone fills it in. Without this the submissions sit in the
      dashboard unread. This needs the business email address, register row 3.
- [ ] Tap the call button and the text button on a real phone, on both iOS and Android.
- [ ] Check the Google Business Profile: the name, the phone `0448 726 474` and the website
      URL must match this site exactly. A mismatched phone number is the single most common
      cause of a local ranking problem.

### Day three

- [ ] In Search Console → Pages, confirm the suburb pages are being discovered and none is
      reported as "Duplicate without user-selected canonical". If any are, the 301s are not
      being followed, so check `public/_redirects` deployed correctly.
- [ ] Run the Rich Results Test on one home page, one service page and one suburb page.
      Expect `Plumber`, `Service`, `BreadcrumbList` and `FAQPage` to validate and no
      rating-related warnings, because there is deliberately no `aggregateRating`.
- [ ] Check Search Console → Core Web Vitals. It needs field data, so it may be empty this
      early.

### End of week one

- [ ] Confirm all 27 suburb pages are indexed. If some are not, that is normal on a new
      site. Link to the slow ones from the home page for a while.
- [ ] Check Search Console → Performance for the first impressions on
      "plumber {suburb}" queries, and note which suburbs are showing at all.
- [ ] Ask Jason for the first two items in
      [`outstanding-proof.md`](./outstanding-proof.md): the licence numbers and one job
      photo per suburb. The licence detail is a legal requirement on advertising in
      Queensland, so it is the most urgent thing on this whole list.
- [ ] Confirm the old WordPress URLs still 301 correctly after cutover, especially
      `/locations/`, `/about-us/`, `/contact-us/` and the six service paths.

### Month one

- [ ] Review which suburb pages are getting impressions and which are getting nothing.
      A page with impressions and no clicks needs a better title and description. A page
      with no impressions after a month either has no search volume or needs more internal
      links.
- [ ] Reinstate Gracemere as a suburb page if register row 4 confirms a radius that reaches
      it. On population it would rank about fourth.

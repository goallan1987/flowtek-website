# Outstanding proof list

Compiled 20/08/2026. Everything on this site that is currently missing, held back, or
running on a confirmed-but-thin fact. Nothing was invented to fill any of it.

Each row says exactly what Jason has to supply and exactly where it goes.

---

## A. Blocked by an open row in `/OS/decisions.md`

These are not design gaps. They are facts nobody has yet, and the site is built so that
each one drops into a single place when it arrives.

| # | What is missing | Where it goes | Register row | What happens now |
|---|---|---|---|---|
| A1 | **Licence numbers**, plumbing and gas, and confirmation from the QBCC and the Queensland gas safety regulator of exactly what must be displayed on advertising | `src/data/business.js` → `licence`. Renders in the footer and in a new line on the About page. | `/OS/decisions.md` row 2 | The site says "Licensed Plumber & Gas Fitter", which is confirmed and cleared. It never states a number. Queensland requires licence detail on advertising, so this is the most urgent row on this list. |
| A2 | **ABN and registered entity name** | `src/data/business.js` → `abn`, `legalName`. Renders in the footer legal line and in the `Organization` structured data. | Row 1 | Neither appears anywhere. |
| A3 | **Trading hours**, and whether after-hours work is offered and on what terms | `src/data/business.js` → `hours`. Adds `openingHoursSpecification` to the structured data and an hours block to the contact page. | Row 5 | The site says only "Our local emergency team is ready to respond promptly during all active business hours", exactly as published. No response time and no round-the-clock claim appears anywhere. |
| A4 | **Business email address** | `src/data/business.js` → `email`. Adds an email row to the contact page and the footer. | Row 3 | The form and the phone are the only contact routes. |
| A5 | **Street or postal address** | `src/data/business.js` → `street`. Adds `streetAddress` to the `PostalAddress` in the structured data. | Row 3 | Locality, region, postcode and country only. This is a real gap against the Google Business Profile. |
| A6 | **Public liability insurance**, cover amount and expiry | `src/data/business.js` → `insurance`. | Row 17 | No insurance claim appears anywhere on the site. Commercial customers ask for this. |
| A7 | **MPAQ membership currency** | If current, a logo block on the About page and `memberOf` in the structured data. | Row 16 | The MPAQ logo is in the old media library and has **not** been used on this site, because currency is unverified. |
| A8 | **Guarantee, warranty, call-out fee, quoting basis and payment terms** | A terms block on the contact page and a line on each service page. | `/OS/decisions.md` row 10 | No guarantee, no warranty and no fee is stated anywhere. |
| A9 | **Social media accounts** | `sameAs` in the structured data, plus footer icons. | Row 3 | No social links exist, so none are shown. The old site had footer icons linking to nothing. |
| A10 | **Confirm or correct the assumed 50 km service radius** | Decides whether the 27-page library is right, and whether Gracemere is added back. | Row 4 | Twenty-four of the 27 suburbs are included on the assumption. See the note at the top of `src/data/suburbs.js`. |
| A11 | **Brad's surname, role and trade qualification** | The About page currently says "Brad is on the tools with me", which is the confirmed limit. | `/OS/decisions.md` row 7 | Nothing beyond that is written. |

---

## B. Local proof, per suburb

The Proof Curator's list. Twenty-six of the 27 suburb pages have **no** suburb-attributed
photograph and **no** suburb-attributed review, because Flowtek has neither.

**What the pages do instead:** each one shows a real Flowtek job photograph chosen to match
the lead service for that suburb, captioned honestly with a line that says we have not
recorded which street it was on and are not going to claim it was this one. Each page also
carries a block headed "Have we worked in {Suburb}?" that says plainly we are not going to
put a made-up job or a borrowed photo there. No page fabricates local proof.

### What closes each one

For any suburb, two things:

1. **One job photograph taken in that suburb.** Landscape, upright, 2016 px minimum on the
   long edge, no filter, named `suburb-service-YYYYMMDD.jpg` per
   `/OS/brand/photography.md`. Drop it into `src/assets/` and add it to the `photoSets`
   map in `src/pages/plumber-[suburb].astro`.
2. **One customer in that suburb who has left a Google review, plus their permission to
   name the suburb beside their words.** Google does not publish a suburb against a review,
   so this cannot be taken from the feed. It has to be asked for.

### The state of it, suburb by suburb

| Suburb | Photo | Review | Note |
|---|---|---|---|
| Taranganba | **Closed.** Real job photo, and the stormwater job is written up. | Open | The only suburb with a documented job. This is what the other 26 should look like. |
| Yeppoon | Open | Open | Highest priority. It is the base and the Google Business Profile city. |
| Rockhampton | Open | Open | Second priority. A commercial site photo would do the most work here. |
| Emu Park, Cooee Bay, Lammermoor, Zilzie, Kinka Beach, Mulambin, Bangalee, Farnborough, Adelaide Park, Tanby, Cawarral, Bungundarra, Keppel Sands | Open | Open | Coast. |
| Allenstown, Frenchville, Norman Gardens, Park Avenue, Berserker, Kawana, Glenmore, Parkhurst, Wandal, The Range, Nerimbera | Open | Open | Rockhampton. |

**The cheapest way to close a lot of this at once:** the four-frame shot list in
`/OS/brand/photography.md` takes two minutes per job. Wide, mid, tight, and the job left
clean. If Jason takes those four frames and writes the suburb on the job card, this list
closes itself over a couple of months without any extra effort.

---

## C. Photography

| # | Item | Status | Where |
|---|---|---|---|
| C1 | **Reshoot the hero in the charcoal polo with the orange collar.** | Open. `/OS/brand/decisions.md` row 16. | The blue-tee photograph is a genuine Flowtek job but the shirt is off brand, so it has been kept off every hero slot on this site and is not used anywhere. Once the uniform is confirmed and reshot, it can be retired properly. |
| C2 | **Two sideways project photographs** | **Closed.** `/OS/brand/decisions.md` row 9. | Both were rotated upright, EXIF stripped, and are in `src/assets/`. Send the corrected files back to whoever holds the old WordPress media library. |
| C3 | **No vector logo master** | Open. `/OS/brand/decisions.md` row 1. | The site uses the 151 x 87 PNG at or below native size, so nothing is upscaled. A favicon SVG was drawn from scratch as a simple mark rather than tracing the logo, because tracing is banned by `logo-rules.md`. **Replace `public/favicon.svg` once the vector master exists.** |

---

## D. Things deliberately absent from the structured data

Each one is a rule, not an oversight. Do not add any of them without the matching row.

| Property | Why it is absent |
|---|---|
| `aggregateRating`, `review` | The live Google rating and review count move on their own. Freezing either into a template breaks `/CLAUDE.md` hard rule 4. Reviews appear on the page as quotes and are not marked up as ratings. |
| `openingHoursSpecification` | Row 5. |
| `priceRange` | Rows 6 and 8. |
| `streetAddress`, `email` | Row 3. |
| `sameAs` | Row 3, no accounts exist. |
| `vatID` / ABN | Row 1. |
| `award`, `memberOf` | Row 16, MPAQ currency unverified. |

---

## E. Two judgement calls worth knowing about

1. **Reviews that mention how fast Flowtek arrived are shown, with a caveat under them.**
   Several genuine reviews say things like "arrived in 20 minutes" or "attended within 10
   minutes". Those are customers describing their own day, and they are published on the
   Google profile already. They are shown, and every reviews block on the site carries a
   line saying they describe what happened on those days and are not a promise about how
   quickly we can get to you. **One review mentioning after-hours attendance was excluded
   entirely**, because publishing it would imply cover that register row 5 has not settled.

2. **The placeholder testimonial beginning "Porem ipsum", attributed to "Jessie", is not on
   this site.** It is still live on the old WordPress site.
   `/OS/brand/decisions.md` row 8.

---

## The photograph library is now the binding constraint (25/08/2026)

Sixteen photographs are carrying 520 image slots across 43 pages. That is fine, because
the same service photograph on 27 suburb pages is honest repetition. But two things are
now limited by supply rather than by design:

1. **One photograph repeats on the home page.** The commercial kitchen gas shot is both
   the gas fitting card and the commercial section figure. There is no second commercial
   gas photograph to put in either slot.
2. **Three services have only two photographs each**, so their page galleries run at two
   items and cannot carry an inline photograph as well as a gallery.

### What would fix it, in priority order

| Want | Why it is the top of the list |
|---|---|
| A second commercial gas or commercial kitchen job | Removes the only repeat on the highest-traffic page, and commercial is the higher-value customer |
| A backflow or TMV device being tested, second angle | Backflow is the annual-recurring service and has exactly one photograph |
| Any hot water job in the charcoal polo | The current hot water detail photograph is the off-brand blue tee |
| A suburb recorded against any job, any suburb | 26 of 27 suburb pages carry no photograph tied to that suburb. One documented job per suburb would change what those pages can honestly say |

The last row is worth more than the other three together. **Photographing the street sign
or a recognisable landmark on the way out of a job, with the date, costs nothing and turns
a page that says "we work here" into one that shows it.**

---

## The suburb landmark map (25/08/2026)

The 23 suburb images Jason supplied are screenshots of Google Images, TripAdvisor,
Facebook and news sites, so they are other people's photographs and cannot go on the
site. What they do is tell us **which landmark identifies each suburb**, and that is worth
keeping, because it is what makes an honest illustrated suburb banner possible.

| Suburb | The landmark locals would know |
|---|---|
| Emu Park | The Singing Ship |
| Kinka Beach | The Big Whale |
| Rockhampton | The Brahman bull at the Welcome to Rockhampton sign |
| The Range | The war memorial and botanic gardens |
| Yeppoon | The lagoon sculpture on the foreshore |
| Frenchville | Frenchville Sports Club |
| Nerimbera | Nerimbera Football Club |
| Taranganba | The Capricorn Tavern |
| Park Avenue | Park Avenue Hotel |
| Allenstown | Allenstown Hotel |
| Adelaide Park | St Brendan's College |
| Berserker | Elizabeth Park |
| Bungundarra | Cane country |
| Byfield | Byfield rainforest and Waterpark Creek |
| Cawarral | The rural fire brigade |
| Mulambin | Causeway Lake |
| Lammermoor | The beachfront path and palms |
| Rosslyn | Rosslyn Bay from the air |
| Tanby | Tanby Garden Centre and turf |
| Bangalee | The beach and headland |
| Wandal | The café on the corner |
| Pacific Heights | Bushfire and regional coverage |
| Cawarral | Fire brigade |

An illustrated banner of Jason at one of these may say "we work here", which is true. It
may never carry a caption asserting a job, a customer or a review at that spot. See
`/OS/session-log/2026-08-20-website-rebuild.md`, Addendum 6.

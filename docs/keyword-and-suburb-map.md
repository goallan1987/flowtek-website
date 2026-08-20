# Suburb and keyword map

Compiled 20/08/2026. Ranked by likely commercial value to Flowtek, not by population.

## How the ranking was made

Four things decide the order, and they are weighted in this sequence:

1. **Distance from the Yeppoon base.** A job 4 km away is worth more per hour than the
   same job 45 km away, and it can be fitted into a day that is already full.
2. **Housing age.** A suburb built in the 1950s generates repair work. A suburb built in
   2015 generates almost none. Repair work is what a searcher types into a phone.
3. **Population and household count.** Volume of possible searches.
4. **Whether there is anything genuinely different to say.** A suburb that fails this
   does not get a page, no matter how well it scores on the other three.

## The URL decision, and it is deliberate

The brief asked for both `/plumbing-{suburb}` and `/plumber-{suburb}`. Both URLs exist and
both resolve. **Only one of them is an indexable page.**

`/plumbing-{suburb}/` issues a 301 to `/plumber-{suburb}/`, which is the canonical page and
targets both phrases in its title, H1 and body copy.

Two live indexable pages per suburb, differing only in the word "plumber" or "plumbing",
would be near-duplicates of each other. That is the exact pattern Google's published spam
policies on doorway pages and scaled content abuse are written to catch, and it would also
split the link equity for one suburb across two URLs. Consolidating is both the safe call
and the one that ranks better. Nothing is lost: anyone who types, links or prints either
URL lands on the right page.

## The ranked map

| # | Suburb | Canonical URL | Primary phrase | Secondary phrases | km | Why it earned a page |
|---|---|---|---|---|---|---|
| 1 | Yeppoon | `/plumber-yeppoon/` | plumber Yeppoon | plumbing Yeppoon, hot water Yeppoon, emergency plumber Yeppoon | 0 | The base, the Google Business Profile city, and the town named in every published Flowtek line. Salt-driven hot water failure plus 1990s stock now at end of life. |
| 2 | Rockhampton | `/plumber-rockhampton/` | plumber Rockhampton | plumbing Rockhampton, blocked drains Rockhampton, backflow testing Rockhampton | 43 | Largest population in the region and its commercial centre, so it carries the backflow and TMV testing work. Named in the confirmed service area. |
| 3 | Allenstown | `/plumber-allenstown/` | plumber Allenstown | blocked drain Allenstown, plumbing Allenstown | 45 | Old, low-lying, Queenslanders on stumps, clay sewer and a real Fitzroy flood legacy in the drainage. High repair demand per household. |
| 4 | Frenchville | `/plumber-frenchville/` | plumber Frenchville | water pressure Frenchville, plumbing Frenchville | 40 | Large north-side suburb on the Mount Archer slope. Elevation-driven pressure complaints are a distinct, high-intent search. |
| 5 | Norman Gardens | `/plumber-norman-gardens/` | plumber Norman Gardens | bathroom renovation Norman Gardens | 38 | Newer, higher-value housing. Renovation and gas work rather than repair, which is a bigger average ticket. |
| 6 | Emu Park | `/plumber-emu-park/` | plumber Emu Park | hot water Emu Park, plumbing Emu Park | 19 | Second town on the coast, settled population, high salt exposure and a lot of original hot water systems. |
| 7 | Taranganba | `/plumber-taranganba/` | plumber Taranganba | stormwater drainage Taranganba, plumbing Taranganba | 4 | Named in the confirmed service area, and the only suburb with a documented Flowtek job to point at. |
| 8 | Cooee Bay | `/plumber-cooee-bay/` | plumber Cooee Bay | blocked drain Cooee Bay | 3 | Worst salt exposure on the coast, plus unit blocks and holiday lets, which is a different customer and a different decision-maker. |
| 9 | Park Avenue | `/plumber-park-avenue/` | plumber Park Avenue | blocked drain Park Avenue, tree roots in drain | 40 | Post-war housing on vitreous clay sewer with mature trees. The highest recurring-blockage suburb in the library. |
| 10 | Parkhurst | `/plumber-parkhurst/` | plumber Parkhurst | gas fitter Parkhurst, backflow testing Parkhurst | 38 | Rockhampton's growth corridor. New-build and gas work, plus commercial along Yaamba Road. |
| 11 | Berserker | `/plumber-berserker/` | plumber Berserker | plumbing Berserker | 40 | 1950s to 1970s high-set timber. Good under-house access, decades of patched pipework. |
| 12 | The Range | `/plumber-the-range/` | plumber The Range Rockhampton | bathroom renovation The Range | 45 | Heritage Queenslanders. Highest-value renovation work in the region, and the job most often quoted wrong by someone who has not looked. |
| 13 | Lammermoor | `/plumber-lammermoor/` | plumber Lammermoor | water pressure Lammermoor | 5 | Steep blocks, retaining walls over services, long drainage runs. A genuinely different set of constraints. |
| 14 | Kawana | `/plumber-kawana/` | plumber Kawana | bathroom renovation Kawana | 40 | 1960s to 1980s stock where the 1990s refit is now itself due. |
| 15 | Glenmore | `/plumber-glenmore/` | plumber Glenmore | hot water Glenmore | 38 | Ageing copper at the pinholing stage, second-generation hot water replacement. |
| 16 | Wandal | `/plumber-wandal/` | plumber Wandal | plumbing Wandal | 44 | Oldest housing in the city. Galvanised water lines that narrow rather than burst. |
| 17 | Nerimbera | `/plumber-nerimbera/` | plumber Nerimbera | septic Nerimbera | 30 | On the road between the two centres. On-site wastewater plus Fitzroy flood legacy. |
| 18 | Zilzie | `/plumber-zilzie/` | plumber Zilzie | gas fitter Zilzie | 16 | Newest coastal stock. Additions and first-round hot water changeovers. |
| 19 | Bangalee | `/plumber-bangalee/` | plumber Bangalee | gas fitter Bangalee | 8 | Two distinct halves, estate and acreage, which changes the whole job. |
| 20 | Kinka Beach | `/plumber-kinka-beach/` | plumber Kinka Beach | water leak Kinka Beach | 12 | Sandy ground means buried leaks never surface. A genuinely different diagnostic story. |
| 21 | Mulambin | `/plumber-mulambin/` | plumber Mulambin | blocked drain Mulambin | 9 | Low, flat, tidal. Drainage with almost no fall, and a high share of holiday lets. |
| 22 | Farnborough | `/plumber-farnborough/` | plumber Farnborough | water pump Farnborough | 6 | Tank water and pressure pumps rather than mains. Different fault set entirely. |
| 23 | Cawarral | `/plumber-cawarral/` | plumber Cawarral | bore water Cawarral | 25 | Bore water and mineral scale, plus long agricultural runs. |
| 24 | Adelaide Park | `/plumber-adelaide-park/` | plumber Adelaide Park | water leak Adelaide Park | 7 | Long private water mains where an underground leak hides until the bill arrives. |
| 25 | Tanby | `/plumber-tanby/` | plumber Tanby | plumbing Tanby | 10 | Acreage with decades of unmapped additions. |
| 26 | Bungundarra | `/plumber-bungundarra/` | plumber Bungundarra | water pump Bungundarra | 17 | Hill country. Pumps working against a static head they were never sized for. |
| 27 | Keppel Sands | `/plumber-keppel-sands/` | plumber Keppel Sands | plumbing Keppel Sands | 40 | Longest run on the coast. Low volume, but the page earns itself by telling the caller how to make one trip work. |

## Service pages

Each targets the service phrase across the whole area rather than a single suburb, and each
links down to the suburb pages that carry the local detail.

| Page | Primary phrase |
|---|---|
| `/services/hot-water/` | hot water repairs Yeppoon, hot water systems Rockhampton |
| `/services/blocked-drains/` | blocked drains Yeppoon, blocked drain Rockhampton |
| `/services/renovations/` | bathroom renovation plumber Rockhampton, renovation plumber Yeppoon |
| `/services/gas-fitting/` | gas fitter Yeppoon, gas fitter Rockhampton |
| `/services/backflow-tmv-testing/` | backflow testing Rockhampton, TMV testing Rockhampton |
| `/services/emergency-plumbing/` | emergency plumber Yeppoon, emergency plumber Rockhampton |

## Suburbs deliberately left out, and why

The Doorway Page Auditor cut these. Each one would have been a page that a searcher gained
nothing from.

| Cut | Reason |
|---|---|
| Gracemere | About 52 km by road from Yeppoon, so it sits outside the assumed 50 km radius. Reinstate it the moment Jason confirms the radius, because on population alone it would rank about fourth. |
| Mount Morgan | Roughly 80 km. Well outside any plausible radius. |
| Barmaryee, Meikleville Hill, Rosslyn, Pacific Heights, Inverness, Mulara, Hidden Valley | Small localities that locals fold into Yeppoon. Almost no distinct search volume and nothing to say that the Yeppoon page does not already say. They are named on the areas page instead. |
| Woodbury, Byfield | Genuinely different (rural, tank water, long drive) but very low household counts and effectively the same story as Bungundarra. Named on the areas page. |
| Koongal, Lakes Creek, Depot Hill, Port Curtis, Rockyview, West Rockhampton | Real Rockhampton suburbs, but each one duplicates the housing-age story already told by Park Avenue, Berserker, Allenstown or Wandal. Adding them would have been volume for its own sake. Named on the areas page. |

## Internal linking

- Home links to the top nine suburbs plus the areas hub.
- The areas hub links to all 27, split by council and ordered by distance.
- Every suburb page links to up to four neighbouring suburb pages and back to the hub.
- Every suburb page links to its three lead service pages and to all six in the card grid.
- Every service page links down to the top twelve suburbs.
- Footer carries the top ten suburbs and all six services on every page.

## Name, address and phone consistency

The phone is `0448 726 474`, spaced in that grouping, and it is rendered from
`src/data/business.js` on every page. The `tel:` href is `+61448726474` everywhere. The
business name is "Flowtek Services" on first use and "Flowtek" after. The locality is
Yeppoon, Queensland 4703.

**The street address is still missing** (`/OS/decisions.md` register row 3), so the
structured data carries locality, region, postcode and country but no `streetAddress`. That
is a gap against the Google Business Profile and it should be closed before the profile is
re-verified.

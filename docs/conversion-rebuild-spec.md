# FLOWTEK WEBSITE, CONVERSION REBUILD
## Implementation specification. Build order for 27 suburb pages and 6 service pages.
Editor in chief pass, 28/08/2026. Authority: `/OS/voice.md`, `/CLAUDE.md` hard rules 1 to 9, `/OS/decisions.md`.
Every line below has been checked against `business.js`, `reviews.js`, `suburbs.js`, `service-content.js` and the current `dist` build.

---

# P0. THREE THINGS ARE BREACHING RIGHT NOW, IN THE BUILT SITE

Fix these before anything else in this document. They are live.

**P0.1. Nineteen of thirty-three pages publish an emoji or a long dash.** Verified by grep over `dist`. `pickReviews` has no punctuation filter, so `/plumber-cooee-bay/` and `/plumber-yeppoon/` currently ship Margaret Savage's 💯, `/plumber-taranganba/` ships Camilla Hansen's two em dashes, and the emoji or dash also lands on allenstown, bangalee, berserker, emu-park, kawana, keppel-sands, lammermoor, norman-gardens, park-avenue, parkhurst, wandal, and five of the six service pages. `/OS/voice.md` bans emoji in "a quote" explicitly. `/CLAUDE.md` hard rule 6 bans the long dash outright. Fix is section 3.5.

**P0.2. Every suburb page's closing band implies same-day cover.** `plumber-[suburb].astro` last block: `heading={`Need a plumber in ${s.name} today?`}`. Rendered beside a call button, "today" reads as an availability offer. Hard rule 3, and `/OS/customers.md` red line 1. No panellist caught this. Replacement in section 2.

**P0.3. Register row 2 is overdue and it sits under all thirty-three pages.** Row 2 records that Queensland requires licence details on advertising, that no number is published anywhere, and that guessing one is a legal problem. Due 25/08/2026, now three days past. Thirty-three pages carrying `Licensed Plumber & Gas Fitter` as a headline credential is advertising. The words are confirmed and safe. Whether they are lawful without the number beside them is not this document's call, and it is item 1 on Jason's list.

---

# EDITORIAL RULINGS. Where the panel disagreed, this is the decision.

| # | Disagreement | Ruling | Why, in one line |
|---|---|---|---|
| 1 | Compliance filtered reviews on exclamation marks; the sceptic said that's the wrong variable | **Filter emoji and long dashes only. Exclamation marks in a customer quote stay.** | The one-per-page cap sits under "formatting rules for anything written in Flowtek's name", and a review is evidence, not Flowtek's voice; the emoji and dash bans are absolute. |
| 2 | Compliance said drop Jennifer Shields; the sceptic said lead with her | **She ships, first, on the hot water page, under a containment rule.** | Once emoji and dashes are filtered she is the only quotable hot water review left, and a proof block about the wrong subject costs more than a containable risk (containment rule in 2.B, section 7). |
| 3 | The panel wanted the H1 assembled from two moments joined by "or" | **One moment, statement form, no question mark.** | "Blocked drain or no hot water in Cooee Bay" is a keyword string, and a question form breaks the six-word heading rule on two-word suburb names like Emu Park. |
| 4 | "Water and gas from the one trade" as the mechanism of the whole site | **Demoted to one sentence. The corrosion knowledge becomes the mechanism.** | The competitor neutralises the licence claim in a line and cannot write the salt paragraph, so the salt paragraph is the moat. |
| 5 | The copy spine put the local paragraph at section 8 behind an expander | **Kept low, but the sixty words shown are rewritten as consequence, and the corrosion knowledge is promoted onto the service page at position three.** | The unique writing must be visible somewhere high, and the service page is where it converts. |
| 6 | Compliance corrected step 1 to "A local number, not a call centre"; the sceptic said that objection is imported | **Both cut. Step 1 ships as "You ring or you text" until Jason confirms he answers his own phone.** | Nobody in Yeppoon thought their plumber was in Perth, and "Jason answers" is a comment in `business.js`, not a confirmed fact. |
| 7 | Six-word question rule versus real customer FAQ questions | **Do not truncate a real question. Scope the rule to headings and raise a decisions row.** | Cutting "The unit block has a blocked drain. Who calls the plumber?" to six words destroys the exact phrase segment C searches for. |
| 8 | Three separate "we can't price it over the phone" sentences | **One price-adjacent sentence per page. Maximum.** | Said once it is honest, said three times it is a man rehearsing a defence. |
| 9 | Three promises in the hero for an emergency visitor | **Kept, but under the primary button and under the make-safe line.** | They are the only proof a ten second visit sees, and the joke is inside a bracket, which is the rule. |

---

# 1. THE PAGE ARCHITECTURE

## 1.A. Suburb page, in order

| # | Section | The job it does | Conversion point it carries |
|---|---|---|---|
| 0 | Sticky action bar | The primary action never scrolls away | `Call 0448 726 474` (1.7fr) / `Text a photo` (1fr). `sticky-bar` |
| 1 | Breadcrumbs | Orientation, internal linking | none |
| 2 | Hero, **words before the illustration on mobile** | Answer "right place, and is anyone there" in under ten seconds | One full-width Call. `Text a photo` and `Short form` as text links. Make-safe line under the button. `hero` |
| 3 | Art band | Atmosphere, brand | none. On a phone it renders **after** the hero |
| 4 | Trust strip | Four checkable statements where they do work, not at 7,618px | none by design |
| 5 | **Which one is yours?** (`FaultTriage`) | Let the reader sort themselves into a lane and act without reading the page | Three lanes, three different actions. `after-fault` |
| 6 | **If it's happening right now** (`BeforeWeGetThere`) | Be useful before asking to be chosen. Every branch of `emergencySteps` ends in "call us" | Call. `after-fault` |
| 7 | **What people said afterwards** | Answer "who is this" before asking anyone to read further | Link to `/reviews/`. No away-pointing primary |
| 8 | What we get called for most here | Route the visitor to the right service page | Three cards. Second tier is one line of links |
| 9 | **If you've got a test due** | Catch the landlord, the body corporate manager, the publican. Recurring revenue, out of the six-card grid | `Book the test` to `#quote`, plus Call. `after-services` |
| 10 | **What happens when you ring** (`NextSteps`) | The risk reversal. Four behaviours a customer could check the next day | Call plus `Text a photo`. `after-access` |
| 11 | **Not sure what you're looking at?** (`TextAPhoto`) | Convert the reader who won't ring but will send a picture | `Text a photo` primary. `after-access` |
| 12 | Quote form, **contact column above the fields on mobile** | Catch everyone who won't ring | Three required fields, two optional. `form-col` |
| 13 | Why things break in Cooee Bay | Prove local, feed search. Sixty words shown, rest behind an expander | none. Only decided readers reach it |
| 14 | Getting to your place | Remove the last friction and set expectations honestly | none. The honest line does the work |
| 15 | **Inline CTA, ink, van photograph** (`InlineCta`) | Catch the long scroller at the point the objection has just been answered | Call plus one short review beside it. `after-services` |
| 16 | Questions we actually get asked | Last objection. Money and who-pays first | Phone numbers inside answers become `tel:` links |
| 17 | Nearby | Internal linking, and the wrong-suburb visitor | One line of text links, no km figures |
| 18 | Closing band and P.S. | Catch the scroller | Call / Text a photo / Get a quote. `cta-band` |

That puts a tappable conversion surface roughly every 1,200px. The current page has one gap of 10,530px, thirteen phone screens, with nothing but the 60px sticky bar.

## 1.B. Service page, in order (hot water worked)

| # | Section | The job it does | Conversion point |
|---|---|---|---|
| 0 | Sticky action bar | as above | `sticky-bar` |
| 1 | Hero | The moment in the first line, the trade in the second, Flowtek named once | One full-width Call, two text links. `hero` |
| 2 | Trust strip | Four checkable statements | none |
| 3 | **First, the thirty second check** | Be useful before being chosen. Now carries the relief valve paragraph, moved up from position four | Call plus `Text a photo`. `after-fault` |
| 4 | **Why they die faster on this coast** | The mechanism. The one thing on the site a competitor's agency cannot write | none, it earns the next scroll |
| 5 | Five things worth checking yourself | Open the loop with recognition, not with a tease | `Get a quote`. `after-services` |
| 6 | Which one do you need | Answer the choice that causes the anxiety | Call. `after-services` |
| 7 | **What happens when you ring** | The risk reversal. Same block name as the suburb page, deliberately | `Book a look` replaced by Call |
| 8 | What people said afterwards | Third party proof of the promises just made | none |
| 9 | Where the unit sits | The Rockhampton half of the local knowledge | none |
| 10 | Where we go | Named suburbs. Rule 4 | One line of suburb links |
| 11 | Questions we get asked | Money first | linked phone numbers |
| 12 | Tell us what's going on (form) | Catch the non-callers | `Send it through`. `form-col` |
| 13 | Closing band and P.S. | Last useful action, then the emergency line verbatim | Call. `cta-band` |

The twelve-block shape carries the other five services. Only blocks 3, 4, 5, 6 and 9 change content, and every one has its source in `business.js` or `service-content.js`.

---

# 2. THE FINAL COPY

Australian English. Contractions throughout, which is `/OS/voice.md`'s most absolutely worded rule and which neither draft honoured. No long dashes. No emoji. Zero exclamation marks in Flowtek's own copy on either page, which leaves one in hand. Every quote byte-identical to `reviews.js`.

## 2.A. SUBURB TEMPLATE. Variables in `{braces}`. Cooee Bay rendered underneath.

### New derived variables

| Variable | Rule | Cooee Bay |
|---|---|---|
| `{moment}` | The first entry in `leadServices` that is a **failure** service (`hot-water`, `blocked-drains`, `emergency-plumbing`), mapped through the moment table. If none is present, use `hot-water` if it appears anywhere in `leadServices`, otherwise the generic `Something's stopped working`. Never two moments joined by "or". | `Blocked drain` |
| `{distanceLine}` | `base` true: `here in Yeppoon`. Otherwise `{km} km up the road in Yeppoon`. | `3 km up the road in Yeppoon` |
| `{soWhat}` | New one-sentence field per suburb. Name the fault the reader can see in their own house, then the cause. Never open on housing stock. If unwritten, render `fault.body` alone. | See section 13 |
| `{sharedPipework}` | New optional field. The body corporate sentence, **moved out of `access`** so it stops printing twice on one page. | See section 9 |

**Moment table:** `hot-water` → `No hot water` · `blocked-drains` → `Blocked drain` · `emergency-plumbing` → `Water going everywhere` · fallback → `Something's stopped working`

---

### 2. HERO

**EYEBROW** `Plumber in {suburb} {postcode} · {area}`
> Plumber in Cooee Bay 4703 · Capricorn Coast

**H1** `{moment} in {suburb}.`
> Blocked drain in Cooee Bay.

**LEDE**
> We're Flowtek Services, a licensed plumber and gas fitter, {distanceLine}.
> Tell us what it's doing and we'll tell you what it usually turns out to be.
> Water and gas from the one trade, so you're not booking two tradespeople for one job.

Rendered:
> We're Flowtek Services, a licensed plumber and gas fitter, 3 km up the road in Yeppoon.
> Tell us what it's doing and we'll tell you what it usually turns out to be.
> Water and gas from the one trade, so you're not booking two tradespeople for one job.

**PRIMARY BUTTON, full width** `Call 0448 726 474`

**ONE LINE UNDER THE BUTTON, before anything else**
> Water going everywhere? Turn it off at the main first, then ring.

**TEXT LINKS, not buttons** `Text a photo` · `Short form`

**THE THREE PROMISES, verbatim, under the links**
> We turn up on time.
> We do the job well (and clean up afterwards).
> We talk to you (and have a laugh).

---

### 4. TRUST STRIP

Four lines. Never a fifth. No licence number (row 2), no insurance (row 17), no ABN (row 1), no years, no count, no rating.

> Licensed Plumber & Gas Fitter
> Based in Yeppoon, {km} km by road from {suburb}
> Water and gas from the one trade
> We turn up on time, and we clean up afterwards

Rendered line two: `Based in Yeppoon, 3 km by road from Cooee Bay`. On `/plumber-yeppoon/`: `Based in Yeppoon, and this is the town we work from`.

**"Based in Yeppoon, not a call centre in another state" is deleted from the site.** Nobody in Yeppoon thought their plumber was in Perth. It is an objection imported from national advertising.

---

### 5. WHICH ONE IS YOURS?

**EYEBROW** Three ways this usually goes
**H2** Which one is yours?

**LANE 1**
> **Water where it shouldn't be**
> A burst pipe, a leak you can't stop, or a drain backing up inside the house.
> Turn the water off at the main first, then ring.
> `Call 0448 726 474`

**LANE 2**
> **Not right, but it can wait**
> A dripping tap, a slow drain, or hot water that runs out halfway through a shower.
> A photo of the unit saves us both a trip.
> `Text a photo`

**LANE 3**
> **A job you're planning**
> A bathroom, a kitchen, a gas point for the cooktop, or a hot water upgrade.
> Tell us what you're planning and when you want it done.
> `Short form`

**UNDER THE LANES** `{business.emergencyLine}`, verbatim.

---

### 6. IF IT'S HAPPENING RIGHT NOW

**H2** If it's happening right now
**LEDE** These three are worth knowing before we arrive.

Then `emergencySteps` **verbatim from `business.js`**. Do not contract this block. It is published copy and changing it is a data edit, listed for Jason in section 5.

> **Suspected gas leak.** Turn off any appliances. Open the doors and windows to ventilate the area. Shut the gas off at the main valve. Then call us. Do not use a light switch or a phone inside the room.
> **Burst pipe.** Turn the water off at the main. Call us. Then contact your home insurer.
> **Blocked drain.** Try a plunger first. If that does not shift it, call us.

**CLOSING** `{business.emergencyLine}` verbatim. **BUTTON** `Call 0448 726 474`

Deleted from the earlier draft: "These are the three we get asked about most" (nothing ranks them) and "you can do all of them yourself" (added editorial on a block that includes shutting off gas during a suspected leak).

---

### 7. WHAT PEOPLE SAID AFTERWARDS

**H2** What people said afterwards
**LEDE** Straight from Google, nothing tidied up, and no suburb attached because Google doesn't publish one.

The two-sentence review-policy explanation is cut. One line is honesty, two is a lecture delivered to somebody whose drain is backing up.

**Cooee Bay set, verified output of the filtered picker,** `pickReviews('cooee-bay', 3, ['maintenance','renovations'])`:

> "Jason from Flowtech Services was great to deal with. He responded quickly, arrived on time, completed the work to a high standard, and cleaned up the job site afterwards. I would recommend him to anyone needing reliable and professional service."
> **Lee-Ann Lovegrove, February 2026**

> "Flowtek did a bathroom renovation for me. Great ideas and awesome quality but even a better chat."
> **Timothy Parker, December 2024**

> "Jason was incredibly efficient, friendly, reliable and professional. Workmanship is spot on. Absolutely recommend and will be using him again for our home Reno project."
> **Terri Thornton, March 2024**

"Flowtech" stays misspelled. `reviews.js` rule 2.

**LINK** `Read the rest` → `/reviews/`

---

### 8. WHAT WE GET CALLED FOR MOST HERE

**H2** `What we get called for most in {suburb}`

Three cards, `hook` then `blurb`, both verbatim from `business.js`.

> **Blocked drains and maintenance.** Water coming back up through the plugholes, and the plunger has given up. Blocked dunnies, leaking taps, corroded pipework and water pressure that is either a dribble or a rumble. `See blocked drains`
> **Hot water systems.** You turn on the tap and wait for it to warm up. And wait. And wait. We install energy efficient hot water systems and troubleshoot the one you already have. `See hot water`
> **Bathroom and kitchen renovations.** Creating your dream bathroom, kitchen or laundry? The plumbing you cannot see is the part that ruins a renovation. `See renovations`

**SECOND TIER, one line of text links**
> We also do gas fitting in {suburb}, and emergency work during active business hours.

The qualifier is mandatory. `/OS/voice.md` do-say table: the emergency line never appears without the business hours qualifier beside it.

---

### 9. IF YOU'VE GOT A TEST DUE

**H2** If you've got a test due

**LEDE**, from `business.js`
> The test is annual, and the reminder never comes at a good time.
> Backflow valves stop contaminated water flowing back into the drinking supply.
> Thermostatic mixing valves blend hot and cold so nobody gets scalded.

**WHAT THE VISIT COVERS**
> We test the device.
> If it fails, we repair it on the spot where we can, or price the replacement.
> You get the test report for your records.
> Commercial and body corporate sites, same job.

"Replace on the spot" is gone. `business.js` says "we test and repair on the spot". Adding replacement to a same-visit promise asserts van stock nobody has confirmed.

**SHARED PIPEWORK LINE** `{sharedPipework}`
> If you're in a unit block, let us know the body corporate contact when you ring, because on shared pipework we generally need their say-so before we cut anything.

This sentence now lives **here only**. It is deleted from `access` in `suburbs.js`, which is what stopped the same paragraph printing twice on one page.

**FOR THE OFF-SITE OWNER**
> You don't need to be there. Give us the address, the access arrangement and a phone number that'll answer.

**BUTTONS** `Book the test` → `#quote` · `Call 0448 726 474`

`[PLACEHOLDER: what Flowtek will not take on. Register row 9, owner Jason Breingan, due 28/08/2026. Nothing renders here until it closes.]`

---

### 10. WHAT HAPPENS WHEN YOU RING

**H2** What happens when you ring
**EYEBROW** Four steps, no obligation

**STEP 01** (default, ships today)
> **You ring or you text.**
> Tell us what it's doing, and where the water's coming from.

**STEP 01** (ships only when Jason confirms, `answeredByJason={true}`)
> **Jason answers his own phone.**
> If he's under a house, send a text and it goes to the same phone.

**STEP 02**
> **We tell you what it looks like.**
> What the fault usually turns out to be, and what fixing it involves.

**STEP 03**
> **We come and look at it.**
> Nobody prices a job properly down a phone line, so we come and look.

This is the **one** price-adjacent sentence on the page. The FAQ and the form no longer repeat it.

**STEP 04**
> **You get told what the job involves before it starts.**
> What's wrong, what fixes it, and whether a part will do instead of a replacement.

**STEP 05** `[PLACEHOLDER, register row 10. Two yes-or-no answers fill this: is the price fixed before work starts, and is there a call-out fee. Both are behaviours, not dollar figures, so both publish the day Jason answers. Nothing renders until then.]`

**CLOSING**
> That's the process up to the point you decide anything. Ring and ask before you book.

Deleted: "No part of it needs you to commit to anything" (implies a free attendance while the call-out fee is TBC), "Asking a question costs you nothing" (a price of zero is still a price), "which is a terrible way to run a business, and we do it anyway" (aimed at the wrong reader on a page built to catch a body corporate manager), and "That one is on the back of the ute, so you are entitled to hold us to it" (the ute says "We Make Things Easier", register row 19, so the copy invites a check it would fail).

**BUTTONS** `Call 0448 726 474` · `Text a photo`

---

### 11. NOT SURE WHAT YOU'RE LOOKING AT?

**H2** Not sure what you're looking at?
> Take a photo of the unit and text it to 0448 726 474. We'll tell you what we're looking at.
> The unit, or wherever the water's coming from.
> The make and the age off the sticker, if you can find them.
> Your suburb, or just put {suburb}, so we know the run.

**BUTTONS** `Text a photo` · `Call 0448 726 474`

No response time here, ever. Register row 5 is open.

---

### 12. QUOTE FORM

**H2** `Tell us what's gone wrong`
**INTRO** Tell us what it's doing and leave us a number. If it's urgent, ring instead, it's faster.

Fields, in this order:
- `What's happening?` (required, textarea). Placeholder: `Hot water stopped last night, unit's out the side, looks original`
- `Phone` (required). Hint **above** the input: `The quickest way for us to get back to you.`
- `Your name` (required)
- `How urgent` (optional select): `Water is going everywhere` / `This week` / `No rush, just want a number`
- `Test due date` (optional date). Hint: `Only if you're booking a backflow or TMV test.`

Hidden: `suburb`, `service`, `page`.
**BUTTON** `Send it through`

**UNDER THE BUTTON**
> Would rather talk? 0448 726 474.
> Would rather text? Text a photo.
> Licensed Plumber & Gas Fitter

---

### 13. WHY THINGS BREAK HERE

**H2** `Why things break in {suburb}`

**SO-WHAT LEDE** `{soWhat}`
> Seized outdoor taps, pitted copper, a hot water unit weeping at the valve. That's the salt, and it's worse here than anywhere on the coast.

Sourced: `facts` → "Anything metal and outdoors, this is the worst salt on the coast."

**FAULT BLOCK** `{fault.title}` / `{fault.body}`, verbatim.
**LOCAL** `{local}`, first sixty words shown, remainder behind `Read the rest`. Text unchanged, it is the search asset.
**FACT LIST** `{facts}`, two columns, `From our base` filtered out as it already is.

---

### 14. GETTING TO YOUR PLACE

**H2** `Getting to your place in {suburb}`
**DISTANCE FIGURE** `{km}` km by road from our Yeppoon base. On `/plumber-yeppoon/` the existing `base` branch renders `Base` / `Yeppoon is where we work from`. That branch is correct and is not touched.

> **That figure is a distance, not a promise about the clock.**
> Our local emergency team is ready to respond promptly during all active business hours.
> Ring us and we'll tell you what we can actually do and when.

**ACCESS** `{access}`, with the body corporate sentence removed:
> The streets behind the beach are narrow and street parking gets tight from Boxing Day through January.

---

### 16. QUESTIONS WE ACTUALLY GET ASKED

**H2** `{suburb} questions we actually get asked`

Order: money and who-pays first, then `{faq}` in file order, then the two standing questions. Real customer questions are **not** truncated to six words. Every `0448 726 474` inside an answer becomes a `tel:` link via `linkPhone`.

**STANDING Q** Do you do emergencies?
**A** Our local emergency team is ready to respond promptly during all active business hours. Burst pipes, water leaks, blocked drains and suspected gas leaks. Make safe first, then a plan to fix it.

**STANDING Q** Are you licensed for gas?
**A** Yes. Licensed Plumber & Gas Fitter. Gas is the licensed, higher risk work a handyman can't legally touch, so a kitchen with a gas cooktop takes one trade instead of two.

---

### 17. NEARBY

One line of text links. **No km figures.** `suburbs.js` `km` is road distance from the Yeppoon base, and rendered inside a Cooee Bay list it reads as distance from Cooee Bay.

> We cover the streets either side of Cooee Bay too: Yeppoon, Taranganba, Lammermoor.

---

### 18. CLOSING BAND

**H2** `Plumber in {suburb}, water and gas from one trade`

This replaces `Need a plumber in {suburb} today?`, which is live on all 27 pages and implies same-day cover. P0.2.

**BODY**
> Tell us what's going on and we'll come back to you with what the job actually involves.
> We turn up on time. We do the job well (and clean up afterwards). We talk to you (and have a laugh).

**BUTTONS** `Call 0448 726 474` · `Text a photo` · `Get a quote`

**P.S.**
> P.S. Our local emergency team is ready to respond promptly during all active business hours. Phone 0448 726 474.

---

## 2.B. HOT WATER SERVICE PAGE

### 1. HERO

**EYEBROW** LICENSED PLUMBER & GAS FITTER, YEPPOON
**H1** Hot water repairs and installation

**LEDE**
> You turn on the tap and wait for it to warm up. And wait. And wait.
> We're Flowtek Services, a licensed plumber and gas fitter in Yeppoon.
> We install hot water systems and troubleshoot the one you've already got.

Line one is `services.hook`, verbatim. Line two puts the correct spelling of the business into Flowtek's own voice for the first time on the page. Currently the first appearance of the name anywhere on this page is inside a customer's misspelling.

**PRIMARY BUTTON** `Call 0448 726 474`. **TEXT LINKS** `Text a photo` · `Short form`. **PROMISES**, verbatim.

### 3. FIRST, THE THIRTY SECOND CHECK

**H2** First, the thirty second check

> Before you ring anyone, check whether there's hot water anywhere else in the house.
> If there's none at any tap, it's the unit itself.
> If there's hot water somewhere but not everywhere, that points to a burst or a leaking pipe.

> Then look at the valve on the side of the unit. A small discharge while it heats is normal.
> A drip that goes all day usually means the valve's stopped seating. On this coast that's the first thing to go, often with a perfectly sound tank behind it.

The relief valve paragraph is moved up from position four. It is the only thing on either page that tells the reader something they didn't know, and it was buried under a table.

> That one check tells us what to put on the ute.

Cut: "It is the difference between one visit and two." The block is framed as useful to the reader and that sentence hands its payoff to Flowtek one sentence too early.

**CALLOUT**
> When you ring, have three things ready.
> The make on the front of the unit.
> Roughly how old it is.
> Whether it sits inside, outside, or up on a stand.

**INLINE CTA** `Call 0448 726 474` · `Text a photo`

### 4. WHY THEY DIE FASTER ON THIS COAST

**H2** Why they die faster on this coast

> On the Capricorn Coast the air carries salt, and salt attacks a hot water unit from the outside in.
> The casing goes, the fittings pit, and the relief valve stops seating, all while the tank inside is still sound.
> So the first warning here is usually a valve that weeps constantly, not a cold shower.

> That's also why we look at a unit before anyone talks about replacing it.
> A relief valve, a tempering valve, an element or a thermostat is a part, not a new system.

> On a gas unit there's a second job. Swapping one is plumbing work and licensed gas work at the same time, and we hold both, so it's one visit.

Deleted: "Most hot water on this coast runs on bottled LPG." Nothing in the folder supports "most". `service-content.js` says "Needs gas, so on the coast that usually means LPG", which is a conditional about gas units. Also deleted: the pull-quote treatment on "Not everything that has stopped working is finished." It is a good line and that is the problem. You can hear the pen.

### 5. FIVE THINGS WORTH CHECKING YOURSELF

**H2** Five things worth checking yourself

> A relief valve that drips all day, not just while the unit's heating.
> Rust in the hot tap and none in the cold.
> Water that runs warm, then cold, then warm again in the same shower.
> Pitting on the fittings and a casing that's gone chalky, while nothing inside has failed yet.
> A puddle underneath that keeps coming back after you've mopped it.

> There's a sixth you can't see. A storage tank has a sacrificial anode inside, designed to be eaten so the tank isn't. Checking it before it's gone can add years.

Seven became five plus one named as invisible. Seven is a copywriter's number, and four of the original seven could not be checked standing in your own laundry. The Rockhampton west wall bullet moves to section 9, where it belongs, because the reader is in Yeppoon.

**AFTER** Recognise two or more? It's worth a look rather than a wait.
**CTA** `Get a quote`

### 6. WHICH ONE DO YOU NEED

**H2** Which one do you need
**INTRO** We install three types, and the right answer depends on your household, not on what's in stock.

| Type | How it works, and what it costs you |
|---|---|
| Instantaneous gas | Heats only the water you use, rather than reheating a tank several times a day. Cheaper to run than a traditional tank, and it doesn't run out. Needs gas, so on the coast that usually means LPG. |
| Solar | Panels heat water held in a tank. The lowest running cost of the three in this climate, and Central Queensland has the sun for it. **Higher up-front cost, and it needs roof space facing the right way.** |
| Heat pump | Absorbs heat from the air and moves it into the water through a heat exchanger. No gas and no roof panels, so it suits a house that can't take either. |

Every cell now traces word for word to `service-content.js`. The earlier draft kept solar's running-cost benefit and dropped its up-front cost caveat, which is a one-sided savings claim.

**UNDER THE TABLE**
> We'll ask what the household actually uses before recommending anything.
> How many showers, how many people, and what time of day they all happen.
> The biggest saving is usually in matching the system to the demand, not the brand on the front.

**BUTTON** `Call 0448 726 474`. Not `Talk it through`. At the moment a reader has decided what they want, the button should be the conversion, not a conversation.

### 7. WHAT HAPPENS WHEN YOU RING

Same block name as the suburb page. Two names for one block on two pages one click apart is a mistake.

> **You tell us what it's doing.** Ring or text with the make, the rough age and where the unit sits.
> **We ask about the household.** Showers, people, and when everyone wants hot water at once. That decides the size before it decides the type.
> **We come and look at the unit.** So we're looking at the actual thing, not a description of it.
> **If a part will do it, we say so.** Relief valves, tempering valves, elements, thermostats and anodes are all serviceable. On a unit that's genuinely finished, we'll tell you that too.

`[PLACEHOLDER, register row 10. Step five is the one about the number: whether the price is fixed before work starts, and whether there's a call-out fee. Two yes-or-no answers and it ships the same day.]`

**BUTTON** `Call 0448 726 474`. Not `Book a look`. "A look" sounds like something that might cost.

### 8. WHAT PEOPLE SAID AFTERWARDS

**Verified output** of the filtered picker, seed `hot-water`, tags `['hot-water']`:

> "What an absolute legend.my hot water system busted. He had it done after 1 day without it.  10/10 for communication, was the first to respond to my messages for help. Nothing was a drama. Jason was just a nice fellow that made us feel comfortable and got the job done. Decent price too. Thanks Jason."
> **Jennifer Shields, September 2025**

> "Flowtek did a bathroom renovation for me. Great ideas and awesome quality but even a better chat."
> **Timothy Parker, December 2024**

> "Jason was incredibly efficient, friendly, reliable and professional. Workmanship is spot on. Absolutely recommend and will be using him again for our home Reno project."
> **Terri Thornton, March 2024**

**CONTAINMENT RULE, binding, put it in a comment in `Reviews.astro`.** Jennifer Shields is the only quotable review about hot water once emoji and long dashes are filtered, so she ships. The risk is in the assembly, not in her words, so the assembly is controlled:

1. Her review is never the closing item and never in the P.S.
2. No Flowtek sentence in the same section may mention time, speed, turnaround or price.
3. No second review in the same set may carry a turnaround or a price line.
4. "1 day" and "Decent price" never leave her quotation marks. They are not a same-day claim and they are not a price.
5. Her run-on and her missing space after "legend." stay. `reviews.js` rule 1.

New Look Renovations CQ is removed from this page. It is a renovations business writing a hundred words on a homeowner's page about a broken hot water system, and it reads like someone who wanted to be quoted.

### 9. WHERE THE UNIT SITS

> Inland at Rockhampton the enemy is heat instead.
> A unit in full afternoon sun on a west wall, through a run of high thirties days, works its seals and its valve much harder than the same unit in shade.
> So where an outdoor unit goes is worth thirty seconds of thought at install time.

### 10. WHERE WE GO
> Yeppoon, Rockhampton, Taranganba and across the Capricorn Coast.
> One line of plain suburb links. No card grid.

### 11. QUESTIONS WE GET ASKED

Money first. The remaining questions come from `service-content.js` in file order and are not truncated.

**1. How do you work out the price?**
`[PLACEHOLDER, register row 10. Quoting basis and call-out fee are both unconfirmed. What ships until then is the behaviour only:]` Ring us and tell us what's gone wrong. We'll come and look at the unit, and we'll talk you through what the job involves before anything starts.

**2. Is it worth repairing or replacing?** Not everything needs replacing. Relief valves, tempering valves, elements, thermostats, anodes and isolating valves are all serviceable parts. On a unit that isn't yet at the end of its life, the repair's the sensible call. On a unit that is, we'll tell you that too.

**3. My relief valve is dripping constantly. Is that normal?** As `service-content.js`, contracted.

**4. How long should a hot water system last?** As `service-content.js`, contracted.

**5. Can I switch from electric storage to instantaneous gas?** As `service-content.js`, contracted, with the colon replaced by a full stop.

**6. Do you work on solar hot water?** As `service-content.js`, contracted.

**7. When can you come out?**
> Ring us and tell us what's gone wrong. We'll tell you straight what we can do and when.
> If it's an emergency, our local emergency team is ready to respond promptly during all active business hours.
`[Trading hours are register row 5. Nothing more specific goes on this page until it closes.]`

Deleted: "rather than taking the job and leaving you waiting." An unsubstantiated characterisation of other trades, with no upside.

### 12. FORM
Same five fields and same order as the suburb page. Optional fifth becomes `Make and rough age of the unit`.

### 13. CLOSING BAND

**H2** Hot water gone
> Check whether there's hot water at any other tap in the house. That one answer tells us what to bring.
> Then ring, and tell us what you found.

**BUTTON** `Call 0448 726 474`. **SECONDARY** `Text a photo`.

**P.S.**
> P.S. Our local emergency team is ready to respond promptly during all active business hours. Phone 0448 726 474, or text Jason with what's gone wrong.

Not "and he will come back to you". That is an unqualified promise of a reply while register row 5 is open.

---

# 3. THE COMPONENT LIST

## 3.1. Build these six

| File | Job | Ships with |
|---|---|---|
| `src/components/TrustStrip.astro` | Four checkable statements, directly under the hero | `suburb`, `km`, `base` props. Never a fifth item |
| `src/components/FaultTriage.astro` | Three lanes, three actions, sorts the visitor | `suburb`, `loc`, `tone` |
| `src/components/BeforeWeGetThere.astro` | `emergencySteps` verbatim, on the pages people land on | `suburb`, `loc` |
| `src/components/NextSteps.astro` | Four checkable behaviours, the risk reversal | `answeredByJason` ships **false** |
| `src/components/TextAPhoto.astro` | Names the single most useful thing a customer can send | `suburb`, `loc`, `tone` |
| `src/components/InlineCta.astro` | Mid-page interruption. One action, one short review, optionally `photos.vanSide` | `heading`, `body`, `loc`, `second`, `quoteSeed`, `quoteTags`, `photo`, `tone` |

Markup, CSS and contrast figures are as specified in the panel's component sheet, with these three overrides:

- `TrustStrip` line two is the distance line, never `not a call centre in another state`.
- `NextSteps` step 3 body is `Nobody prices a job properly down a phone line, so we come and look.` and it is the only price-adjacent sentence permitted on that page.
- `InlineCta` renders a review only from the quotable-and-short pool. A review is never shortened, so if nothing fits, no quote renders.

## 3.2. Change these

| File | Change |
|---|---|
| `ActionBar.astro` | Full replacement. `<nav aria-label="Call or text Flowtek">`. Grid `1.7fr 1fr` (was `1.4fr 1fr`). `Text a photo` replaces `Text us`. `:active` states on both halves. Divider `rgba(255,255,255,0.32)` (was `0.18`, invisible on `--ink`). `Call us` label below 360px, where the full number wraps and takes the bar to 75px against a 60px body reserve. Third half `Get a quote` swaps in for SMS between 768 and 1179px. `data-cta` and `data-cta-loc` on both links. Keyboard fallback script. |
| `QuoteForm.astro` | Reorder to message, phone, name. Drop the service `<select>` for two hidden inputs. Drop the visible suburb field wherever the page knows the suburb, keep the datalist version for `/contact/` and `/areas-we-serve/`. Add `enterkeyhint`, `autocapitalize`, `autocorrect`. Add `urgency` and `testDue` optional fields. New intro string. Keep `Send it through`. |
| `Reviews.astro` | Consume the filtered picker. Carry the containment rule as a comment. Delete any claim that no two pages show the same set. |
| `Header.astro` | `0448 726 474` becomes the first item in `.mobile-nav`, above Services. Fifteen links and no phone number, on the menu somebody opens to find out how to reach you. |
| `Base.astro` | `<ActionBar suburb={smsSuburb} formHref={page === 'generic' ? '/contact/#quote' : '#quote'} />`. Add `id="quote"` to the form sections on `/contact/` and `/areas-we-serve/`, which currently lack it. |
| `plumber-[suburb].astro` | Rebuild to the section order in 1.A. Add `linkPhone` for FAQ answers. Replace the CTA band heading. Delete the proof section and the second service grid. |
| `services/[service].astro` | Rebuild to the section order in 1.B. |
| `index.astro`, `contact/index.astro` | Replace the two hand-rolled `emergencySteps` blocks with `BeforeWeGetThere`, so the markup exists once. |
| `src/data/reviews.js` | Add the punctuation filter, the improved picker, and `shortReviews` / `pickShortReview`. Section 3.5. |
| `src/data/suburbs.js` | Add `soWhat` (27 lines) and `sharedPipework`. Remove the body corporate sentence from `access` on every suburb that carries it. |
| `src/styles/global.css` | Sections 3.3 and 3.4. |

## 3.3. Global CSS, the mobile fold and the bar

```css
:root { --bar-h: 60px; }

/* The bar is 60px plus the home indicator. A flat 60px leaves the last 34px
   of the footer under it on every iPhone with a home indicator. */
@media (max-width: 1179px) {
  body { padding-bottom: calc(var(--bar-h) + env(safe-area-inset-bottom)); }
}

/* scroll-behavior: smooth is already on, and every in-page anchor currently
   parks its heading under the 77px sticky header. */
main [id] { scroll-margin-top: 92px; }

/* THE SINGLE HIGHEST-VALUE CSS CHANGE ON THE SITE.
   The template renders .arthero__band before .hero, so the illustration takes
   281px of a 675px usable fold and the hero Call button lands at y=740 with
   the fixed bar starting at 752. Forty-four of its fifty-six pixels sit behind
   the bar and Text us is completely hidden. On a phone the words go first. */
@media (max-width: 899px) {
  main { display: flex; flex-direction: column; }
  main > .crumbs        { order: 0; }
  main > .hero,
  main > .arthero       { order: 1; }
  main > .arthero__band { order: 2; }
  main > .truststrip    { order: 3; }
  main > *              { order: 4; }
}

/* Never over the Send button with the keyboard up. */
body:has(.form :is(input, select, textarea):focus) .action-bar { display: none; }
body.is-typing .action-bar { display: none; }

/* On a phone the contact column stacks below the form, so the phone number
   appears only after the reader has committed to typing. */
@media (max-width: 879px) { #quote .split > :last-child { order: -1; } }

@media (max-width: 700px) { .field textarea { min-height: 96px; } }
/* The careers form has this. The form that earns money does not. */
.form input:user-invalid, .form textarea:user-invalid { border-color: var(--orange-deep); }
```

## 3.4. Measurement hooks

There is no `gtag`, no `dataLayer` and no call event anywhere in the codebase, so none of this is verifiable today. Ship the attributes now so a measurement layer drops in later without touching thirty-three templates. They style nothing.

`data-cta`: `call` | `sms` | `form`
`data-cta-loc`: `hero` | `sticky-bar` | `after-fault` | `after-access` | `after-services` | `form-col` | `cta-band` | `footer`

## 3.5. `reviews.js`, the filter and the picker

Two defects, both shipping.

**Defect one: no punctuation filter exists.** The spine described one in prose. `pickReviews` returns whatever the hash lands on. Result: 19 of 33 built pages carry an emoji or a long dash. P0.1.

**Defect two, which nobody caught: `preferTags` doesn't actually prefer.** `pickReviews` concatenates preferred and rest into one pool, then starts at a hash index into the whole pool. A page's preferred reviews are shown only if the hash happens to land on them. Verified: `pickReviews('hot-water', 3, ['hot-water'])` currently returns two gas reviews and a leak review, on the hot water page.

```js
/**
 * Quotable set. Emoji and long dashes are excluded because /OS/voice.md bans
 * emoji in "a quote" explicitly and CLAUDE.md hard rule 6 bans the long dash
 * outright. Exclamation marks are NOT excluded: the one-per-page cap governs
 * anything written in Flowtek's name, and a customer's review is evidence,
 * not Flowtek's voice. 20 of 26 reviews survive.
 */
const EMOJI = /\p{Extended_Pictographic}/u;
const LONG_DASH = /[\u2014\u2013]/;
export const quotable = reviews.filter(
  (r) => !EMOJI.test(r.text) && !LONG_DASH.test(r.text)
);

/** A review is never shortened, so a pull-quote beside a button can only use
 *  one already short enough. 260 characters fits a half column at 375px. */
export const shortReviews = quotable.filter((r) => r.text.length <= 260);

function hash(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}
function rotate(arr, h) {
  return arr.length ? arr.map((_, i) => arr[(h + i) % arr.length]) : [];
}

/** Preferred reviews come FIRST, rotated, then the rest fills the gap.
 *  The old version concatenated then indexed into the whole pool, so a tagged
 *  review appeared only by luck. */
export function pickReviews(seed, count = 3, preferTags = []) {
  const h = hash(seed);
  const pref = preferTags.length
    ? quotable.filter((r) => r.tags.some((t) => preferTags.includes(t)))
    : [];
  const rest = quotable.filter((r) => !pref.includes(r));
  return [
    ...rotate(pref, h % Math.max(pref.length, 1)),
    ...rotate(rest, h % Math.max(rest.length, 1)),
  ].slice(0, count);
}

export function pickShortReview(seed, preferTags = []) { /* same shape, count 1 */ }
```

**Verified distribution across the 27 suburb pages**: every one of the 20 quotable reviews is used, none is orphaned, no page repeats a review within its own set. Three inland pages (Bungundarra, Glenmore, Wandal) share an identical trio, which is acceptable and is why the "no two pages the same three" promise is deleted rather than engineered around. **If any `reviewTags` value changes in `suburbs.js`, re-run the picker and paste the new output into the build note.** Do not let the build resolve a review set nobody has read.

## 3.6. Delete these

- The `Have we worked in {suburb}?` navy proof section. Whole thing. The page's most prominent dark band leads with a question whose answer is no on 26 of 27 pages, and its two buttons both point off the page. Its `ticklist` becomes `TrustStrip`, 7,400px higher up. Its honesty already lives in the photo caption: "We have not recorded which street it was on, so we are not going to claim it was this one."
- `Everything else we cover in {suburb}` and its three-card `ServiceCards` block. Three more blurbs after three blurbs. Becomes one line of links, with backflow promoted out into its own section.
- The `Three ways to get us` panel beside the form. Someone who reached a form has already chosen. Three options where there was one, and on a phone it stacks below the fields so the phone number appears after the reader has committed to typing.
- The visible suburb field on all 27 suburb pages. Required, 135px tall with its hint, asking the reader to confirm a fact the URL already stated.
- The service `<select>`. Optional, redundant twice over, and the highest-abandonment control on any mobile form.

---

# 4. WHAT WAS CUT, AND WHY

## Cut from the page

| Cut | Why |
|---|---|
| `Cooee Bay sits right on the water, immediately south of the Yeppoon town centre.` as the first sentence a visitor reads | The reader lives there. The page spends its most valuable line telling them their own address. `/OS/voice.md` rule 1 already said open on the customer's moment. |
| `Have we worked in Cooee Bay?` | The most prominent dark section on the page opens with a question the page then answers no. |
| The 150-word local paragraph at position two | Somebody whose hot water died last night should not scroll past a geology lesson. It stays, in full, at position thirteen, where it feeds search and where only decided readers reach it. |
| `That figure is a distance, not a promise about the clock` at position three | Kept, moved. At position three it is the first thing a panicking reader is told and it reads as a hedge. At position fourteen it reads as candour. |
| Six equal service cards | Six decisions is no decision. Three cards, one compliance block, two links. |
| Three equal-weight hero buttons | Two of the three are wrong answers presented at the same size as the right one. |
| The trust strip's `not a call centre in another state` | An objection imported from national advertising that this market does not have. |
| The km figures in the Nearby list | `km` is distance from the Yeppoon base, and rendering it inside a Cooee Bay list makes it read as distance from Cooee Bay. |
| `Need a plumber in {suburb} today?` | Implies same-day cover. Live on 27 pages. Hard rule 3. |

## Cut from the panel's drafts

| Cut | Why |
|---|---|
| "No part of it needs you to commit to anything" | It sits four lines under "We come and look at it", so it reads as a free attendance while the call-out fee is register row 10. |
| "Asking a question costs you nothing" | A price of zero is still a price. Same register row. |
| "Most hot water on this coast runs on bottled LPG" | Nothing in the folder supports "most". `service-content.js` says the conditional, not the majority. |
| "These are Capricorn Coast customers, word for word" | Attributes a region to reviewers one line after saying no location may be attributed, and Rockhampton isn't the Capricorn Coast. |
| "That one is on the back of the ute, so you are entitled to hold us to it" | The ute says "We Make Things Easier" (row 19). The copy invites a check it would fail, which is the worst kind of breach. |
| "If it fails, we repair or replace it on the spot" | `business.js` says test and repair on the spot. Adding replacement asserts van stock nobody confirmed. |
| "You get Jason, not a queue" | An absolute that Brad falsifies the first time he answers, and it is followed two lines later by an admission that Jason is usually under a house. |
| "These are the three we get asked about most" | Nothing ranks the emergency steps by frequency. |
| The seven-bullet fascination block | Seven is a copywriter's number, and four of the seven could not be checked standing in your own laundry. Five that can, plus one named as invisible. |
| The `Not everything that has stopped working is finished` pull quote | You can hear the pen. A plumber says "it might just be the valve." |
| Two of the three "we can't price it over the phone" sentences | Said once it's honest. Said three times it's a man rehearsing a defence, which is exactly what a customer who's been burned once will hear. |
| "which is a terrible way to run a business, and we do it anyway" | On voice for a homeowner. Read by the body corporate manager the compliance block exists to catch, it's a tradesperson volunteering that his business judgement is poor. |
| "rather than taking the job and leaving you waiting" | An unsubstantiated characterisation of other trades with no upside. |
| New Look Renovations CQ on the hot water page | A hundred words from a renovations business on a homeowner's page about a broken hot water system. |
| The exclamation-mark filter on reviews | Optimising the wrong variable. It would have thinned a 26-review pool to ten and stripped the most human evidence on the site. |
| "no two pages carry the same three" | Undeliverable across 33 pages from a pool of 20, and letting the build quietly resolve it is how the emoji shipped in the first place. |
| Every uncontracted verb in both drafts | `/OS/voice.md`'s most absolutely worded rule, broken in roughly 200 places. The copy read like a careful lawyer, not like Jason. |

---

# 5. OPEN QUESTIONS FOR JASON

Ranked by what each one is worth in conversion. The top three cost him three short conversations and no dollar figures.

**1. Register row 2. Licence numbers, and what the QBCC requires on advertising. Overdue since 25/08/2026.** This sits underneath all 33 pages and it is the only item on this list that is a legal question rather than a marketing one. It also unblocks the strongest trust signal the business owns, because row 21 (the Plumbing and Gas Industry Awards Businessperson of the Year finalist card, MPAQ) and row 16 (MPAQ membership currency) corroborate each other. **That card is worth more than every word in this document and it currently cannot be published.**

**2. Register row 5. Trading hours.** The single largest conversion hole on the site. Right now a reader at quarter to seven on a Thursday cannot tell whether ringing is worth their evening, and "our local emergency team is ready to respond promptly during all active business hours" appears four times on a page without ever saying what those hours are. It does not need a 24/7 claim. It needs two numbers.

**3. Register row 10. Two yes-or-no questions.** *Is the price fixed before work starts? Is there a call-out fee?* Neither answer is a dollar figure, so neither breaches hard rule 2 and both can publish the same day. They fill step five of "What happens when you ring" and FAQ question one on all six service pages, which are the two strongest points on the site for anyone comparing three quotes. **Even an answer he dislikes beats the hole.** The page currently raises price three times and walks away from it three times, and a customer who has been burned once reads that as a defence being rehearsed.

**4. "If we miss you, we ring back."** The highest-value new sentence available, and it does not exist anywhere in the folder. The page tells a reader Jason is usually under a house and then never says what happens if nobody answers. It claims no time, it costs nothing, and it is checkable the next day. Ask him if it is true.

**5. What happens if the fix doesn't hold.** Not a guarantee, which row 10 blocks. A behaviour: *do you come back?* It is the specific fear of every customer who has been burned once, both drafts ignored it entirely, and it is the strongest thing that could occupy a P.S.

**6. "Jason answers his own phone."** Asserted in a `business.js` comment ("He answers the phone, the about page says so") and corroborated by the Benita Hedley review, but not confirmed in `/OS/company.md`. `NextSteps` ships with `answeredByJason={false}`. Open a decisions row, owner Jason Breingan, and label it `[ASSUMED, confirm by DD/MM/YYYY]` in the interim.

**7. Does the number receive picture messages?** `Text a photo` is on the sticky bar of every page and in three blocks. It is almost certainly fine on an Australian mobile, but it is a capability claim and nothing in the folder confirms it. If the answer is no, the label reverts to `Send a text` in one file.

**8. Register row 9. The three job types Flowtek knocks back.** The compliance block cannot say what Flowtek will not take on until this closes, and a landlord with a due date wants to know before they ring.

**9. Photograph of Jason.** `photos.jasonHeadshot`, `photos.vanSide` and `photos.vanBack` already exist and already run on `/contact/`. "You get Jason" with no Jason on the page is a claim, not proof. Confirm he is happy for the headshot to run beside the CTA on 33 pages.

**10. Two data corrections needing his say-so.** `business.js` de-contracted his own published line to "Make sure you are (safely) cooking with gas." His original is "you're", and `/OS/voice.md` quotes it as rule 3's worked example. Same for `emergencySteps`, which reads "If that does not shift it". Both are his published words and both should go back.

**11. Two register rows to open.** (a) Scope the six-word question rule to headings, not to FAQ questions, because five existing questions in `service-content.js` and `suburbs.js` already breach it and truncating a real customer question destroys the phrase people search for. (b) Add the punctuation-filter rule for quotes to `/OS/voice.md`, so no future session resolves it by publishing an emoji.

**12. Analytics.** There is none. No `gtag`, no `dataLayer`, no call event. Every recommendation in this document rests on measured layout and standard trade-site behaviour, not on this site's own data, and it will stay that way until a call event exists. The `data-cta` attributes are the hooks. Somebody still has to add the layer.

---

# PRE-PUBLISH CHECK. Run on every page before it ships.

1. Does the first line describe the customer's moment, before Flowtek is named?
2. Is every promise a behaviour a customer could check the next day?
3. Is every joke inside a bracket, in the second half of a sentence, after the useful information?
4. Is a real suburb named, and is "the surrounding region" absent?
5. Grep for the 18 banned adjectives, plus `guarantee`, `24/7`, `same day`, `today`, `free quote`, `no call out fee`, `insured`, `trusted`, `police checked`, `stars`, `years`, `$`.
6. Grep for `\u2014`, `\u2013`, `\p{Extended_Pictographic}`. Count exclamation marks **in Flowtek's own copy**. Maximum one.
7. **Contractions.** Grep for `we are`, `it is`, `do not`, `does not`, `cannot`, `you are`, `that is`, `there is`, `will not`. Every hit in Flowtek's own copy is a rewrite, not a judgement call.
8. Every heading sentence case or upper, never title case. Every button two to four words.
9. Every quote byte-identical to `reviews.js`, no suburb attached, misspellings intact, and no emoji or long dash on the page.
10. Every unconfirmed item marked `[PLACEHOLDER: ...]` or `TBC, register row N`, and listed for Jason with the exact thing he must supply.
11. Australian spelling, DD/MM/YYYY, `0448 726 474` in that grouping every time, "Flowtek Services" on first use and "Flowtek" after.
12. The X-not-Y construction appears at most twice per page. It was used nine times across the two drafts, and at nine it reads as one person writing everything in one sitting.

Any line that fails one of these is rewritten, not softened.

**Files to create:** `src/components/TrustStrip.astro`, `FaultTriage.astro`, `BeforeWeGetThere.astro`, `NextSteps.astro`, `TextAPhoto.astro`, `InlineCta.astro`
**Files to change:** `src/components/ActionBar.astro`, `QuoteForm.astro`, `Reviews.astro`, `Header.astro`, `src/layouts/Base.astro`, `src/styles/global.css`, `src/data/reviews.js`, `src/data/suburbs.js`, `src/pages/plumber-[suburb].astro`, `src/pages/services/[service].astro`, `src/pages/index.astro`, `src/pages/contact/index.astro`
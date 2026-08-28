/**
 * Real customer reviews, copied verbatim from the Google review feed published
 * on flowtekservices.com.au, sampled 20/08/2026.
 *
 * RULES THAT BIND THIS FILE
 * 1. Nothing here is written, edited, shortened or tidied. Quotes are exact.
 * 2. Customers misspell the business as Flowtech, Flowtex, Flowtec and FlowTek.
 *    Those spellings stay. /OS/voice.md: never correct a spelling inside a quote.
 * 3. No star rating and no review count appears anywhere on the site. The live
 *    Google figure moves on its own, so freezing it into a template is banned by
 *    CLAUDE.md hard rule 4. There is no aggregateRating in the structured data.
 * 4. Google does not publish a suburb against a review, so NO review on this site
 *    is attributed to a suburb. Suburb pages carry a marked placeholder instead.
 * 5. One review on the live site is placeholder text beginning "Porem ipsum",
 *    attributed to "Jessie". It is not a customer. It is excluded, and removing it
 *    from the old site is row 8 of /OS/brand/decisions.md.
 * 6. One review mentioning after-hours attendance is excluded, because publishing
 *    it would imply cover Flowtek has not confirmed. Register row 5.
 *
 * `tags` only control which reviews are shown on which page, so that no two pages
 * show the same set. They do not change a single word of any quote.
 */

export const reviews = [
  {
    id: 'monika-mclaughlin',
    name: 'Monika McLaughlin',
    date: 'April 2026',
    tags: ['hot-water', 'blocked-drains', 'flagship'],
    text: 'Highly recommend Flowtek Services. They replaced all the high-pressure PVC pipes in my 40-year-old home and reinstalled a brand new hot water system that had previously been poorly installed by another plumber.The quality of their work was excellent, their communication was clear and reliable, and they showed up exactly when they said they would—which is rare. What really stood out was the post-job follow-up call to check everything was working well and that I was satisfied with the service.Professional, dependable, and genuinely care about their work.',
  },
  {
    id: 'lee-ann-lovegrove',
    name: 'Lee-Ann Lovegrove',
    date: 'February 2026',
    tags: ['flagship', 'renovations', 'clean-up'],
    text: 'Jason from Flowtech Services was great to deal with. He responded quickly, arrived on time, completed the work to a high standard, and cleaned up the job site afterwards. I would recommend him to anyone needing reliable and professional service.',
  },
  {
    id: 'benita-hedley',
    name: 'Benita Hedley',
    date: 'January 2026',
    tags: ['emergency', 'storm', 'flagship'],
    text: 'Exemplary experience with FlowTek Services. From the owner Jason, who took my initial enquiry; he listened carefully to my concerns regarding the possible event of the house flooding from cyclone Koji. Although booked out that day, he sent someone (Brad) to investigate the situation. Both Jason and Brad were wonderful to deal with and talked me through what was needed to fix the situation. Jason followed up a few days later to arrange a quote and took his time to explain possible solutions. Communication, professionalism, and their knowledge of all things plumbing are qualities I appreciate. Cannot recommend highly enough.',
  },
  {
    id: 'kayla-morgan',
    name: 'Kayla Morgan',
    date: 'May 2026',
    tags: ['blocked-drains', 'pressure'],
    text: 'Prompt, professional service, sourced and fitted new pump that afternoon and test ran to make sure there were no faults and it was working as it should. Great customer service and communication!',
  },
  {
    id: 'amie-gleeson',
    name: 'Amie Gleeson',
    date: 'February 2026',
    tags: ['pressure', 'brad', 'emergency'],
    text: 'Jason responded quickly to our call and had someone arrive in 20 minutes to sort out our water pressure issue. Tradesman Brad was professional and efficient and had our problem solved in no time. Would most definitely call Flowtek Services again, thanks guys!',
  },
  {
    id: 'camilla-hansen',
    name: 'Camilla Hansen',
    date: 'November 2025',
    tags: ['emergency', 'brad', 'burst'],
    text: 'Flowtex were amazing!Jason was quick to respond, worked around my schedule with no hassle at all, and offered very reasonable pricing.Brad came out to fix a burst water-main pipe and he was fantastic—friendly, fast, thorough, and great at keeping me updated every step of the way.We really appreciate all their help and professionalism. In fact, we’ve already booked them for our next project.Thanks again—10 out of 10!',
  },
  {
    id: 'matthew-whitehead',
    name: 'Matthew Whitehead',
    date: 'February 2026',
    tags: ['emergency', 'burst', 'leak-detection'],
    text: 'I had a plumbing emergency where an underground pipe burst flooding my house. Jason from Flowtek plumbing services attended within 10 minutes and closed off the system. He diagnosed to problem, located the source of the leak through a heat detection instrument and came up with a transparent plan to fix.Jason and his team commenced a dig within the existing kitchen corner cupboard space, very awkward and through concrete where the pipe was  located a deep (about 18 inches deep).The pipe was fixed in situ and back to working order. Jason and his team made sure no cupboards or tiles were damaged and worked tirelessly late into the evenings to make sure we’re had water back in line as soon as possible.I cannot recommend Flowtec enough. I was over the moon with work and the final invoice was significantly under my estimated costing.Thank you all, amazing work 👍🏻',
  },
  {
    id: 'jemma-crowley',
    name: 'Jemma Crowley',
    date: 'April 2024',
    tags: ['blocked-drains', 'price'],
    text: 'Couldn’t recommend this service enough! My husband was away and my kitchen sink backed up, he came and fixed it that day and gave me some great advice to stop it happening again. The price was great! I was quoted twice that by the bigger companies and they also couldn’t get to me for days.',
  },
  {
    id: 'danielle-parsons',
    name: 'Danielle Parsons',
    date: 'June 2024',
    tags: ['hot-water'],
    text: 'Broken hot water system. Contacted a few places and was advised a three week wait …. Sent a text message to Jason and he was able to pop out and install a new one the next day! Awesome service, great plumbing and very competitive pricing! Plus great at answering my many questions. So grateful not to have to shower in cold water during winter 🥶. Thanks again Jason',
  },
  {
    id: 'jennifer-shields',
    name: 'Jennifer Shields',
    date: 'September 2025',
    tags: ['hot-water'],
    text: 'What an absolute legend.my hot water system busted. He had it done after 1 day without it.  10/10 for communication, was the first to respond to my messages for help. Nothing was a drama. Jason was just a nice fellow that made us feel comfortable and got the job done. Decent price too. Thanks Jason.',
  },
  {
    id: 'timothy-parker',
    name: 'Timothy Parker',
    date: 'December 2024',
    tags: ['renovations'],
    text: 'Flowtek did a bathroom renovation for me. Great ideas and awesome quality but even a better chat.',
  },
  {
    id: 'terri-thornton',
    name: 'Terri Thornton',
    date: 'March 2024',
    tags: ['renovations'],
    text: 'Jason was incredibly efficient, friendly, reliable and professional. Workmanship is spot on. Absolutely recommend and will be using him again for our home Reno project.',
  },
  {
    id: 'new-look-renovations-cq',
    name: 'New Look Renovations CQ',
    date: 'February 2024',
    tags: ['renovations', 'commercial'],
    text: 'I recently had the pleasure of working with Jason from Flowtek services for the installation of two new toilets. I cannot express enough how helpful and knowledgeable he was throughout the process. Unlike other plumbers who simply gave me a quote, Jason took the time to educate me on my purchases and ensure that I made informed decisions. He was prompt, reliable, and patiently addressed every question I had. It is evident that he takes great pride in his work and places a strong emphasis on providing exceptional customer service. I highly recommend Jason and Flowtek services for all your plumbing needs.',
  },
  {
    id: 'mark-blomfield',
    name: 'Mark Blomfield',
    date: 'January 2025',
    tags: ['on-time', 'quote'],
    text: 'Jason promptly returned my initial call which is a big plus for me. We arranged a suitable time to scope the work and he arrived to do the work at the arranged time all with courtesy and professionalism.Jason was recommended to me and I have no hesitation in recommending him for quality workmanship and customer service. Well done Jason 👍',
  },
  {
    id: 'nicole-parker',
    name: 'Nicole Parker',
    date: 'October 2024',
    tags: ['maintenance'],
    text: 'A big thanks to Jason from Flowtek Services who was able to fix a few much needed plumbing jobs around the house without a fuss. Efficient and reliable worker with old fashioned service. Highly recommended',
  },
  {
    id: 'deidre-williamson',
    name: 'Deidre Williamson',
    date: 'January 2024',
    tags: ['price', 'difficult-job'],
    text: 'Highly recommend Jason and the team from Flowtek Services! There was great communication from start to finish, they were able to promptly fit me into their schedule, charged a fair price and most importantly fixed a job another popular plumbing business couldn’t!! 10/10 guys thank you!!',
  },
  {
    id: 'k-skinner',
    name: 'K Skinner',
    date: 'March 2024',
    tags: ['gas'],
    text: 'Highly recommend Jason at Flowtek for all your Plumbing and Gasing needs. His service and knowledge is exceptional!',
  },
  {
    id: 'shanna-russell',
    name: 'Shanna Russell',
    date: 'February 2024',
    tags: ['gas'],
    text: 'Jason made himself available to help us out in a pinch. Twice!Highly recommend Flowtek for both plumbing and gas works',
  },
  {
    id: 'emma-power',
    name: 'Emma Power',
    date: 'November 2025',
    tags: ['leak', 'price'],
    text: 'Found a leak and called Flowtek who booked me in the next working day. Issue was resolved quickly and for a reasonable price. Will use again. Thanks guys!',
  },
  {
    id: 'alana-hoskins',
    name: 'Alana Hoskins',
    date: 'September 2025',
    tags: ['renovations', 'maintenance'],
    text: 'New vanity, washers and taps in bathroom thank you!Prompt, good communication and service.',
  },
  {
    id: 'margaret-savage',
    name: 'Margaret Savage',
    date: 'May 2024',
    tags: ['leak'],
    text: 'Contacted Flowtek re water leak. Excellent service.  Jason went above and beyond expectations. Water working perfectly. No leaks. Thank you very much Jason. Totally recommend  💯 %',
  },
  {
    id: 'linda-eaton',
    name: 'Linda Eaton',
    date: 'July 2024',
    tags: ['maintenance', 'repeat'],
    text: 'Jason has done a couple of jobs for me, both times I have found him to be efficient,  prompt  and professional.  I would recommend Jason 100%, excellent service, thank you.',
  },
  {
    id: 'pat-battle',
    name: 'Pat Battle',
    date: 'January 2024',
    tags: ['on-time', 'maintenance'],
    text: 'Jason was extremely helpful and completed very high quality work. Very punctual and great to deal with. Highly recommend',
  },
  {
    id: 'kym-marshall',
    name: 'Kym Marshall',
    date: 'March 2024',
    tags: ['maintenance', 'enquiry'],
    text: 'I would highly recommend Jason for all of your plumbing needs. I only sent a website enquiry off this morning & he has already been & sorted out my issues this afternoon. Excellent service!',
  },
  {
    id: 'chris-haydon',
    name: 'chris haydon',
    date: 'August 2024',
    tags: ['maintenance', 'repeat'],
    text: 'Great bloke, great work, will call him again. Highly recommend!',
  },
  {
    id: 'scott-reece',
    name: 'Scott Reece',
    date: 'March 2024',
    tags: ['commercial', 'communication'],
    text: 'Great service, constant communication, have further works and will be first to call.Friendly with great professional work ethic.',
  },
];

export const reviewById = Object.fromEntries(reviews.map((r) => [r.id, r]));

/**
 * Six of the twenty-six reviews contain an emoji or a long dash, both of which
 * CLAUDE.md bans and neither of which may be removed from a customer's words.
 *
 * THE RESOLUTION IS SELECTION, NOT ALTERATION.
 * A review is evidence. Editing it to suit a house style rule would be editing
 * a testimonial, which is a far worse fault than a stray character. So nothing
 * is ever rewritten. Instead the curated three-up slots on service and suburb
 * pages PREFER the clean twenty, and fall back to the rest only if there are
 * not enough, so those pages stay typographically clean.
 *
 * /reviews/ is deliberately exempt and shows all twenty-six. That page's whole
 * promise is "copied exactly, nothing shortened, tidied or corrected", and
 * quietly dropping six would make the sentence beside them untrue.
 */
const HOUSE_STYLE_CLEAN = (r) =>
  !/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(r.text) && !r.text.includes('\u2014');

/** Deterministic per-page selection so no two pages carry the same three. */
export function pickReviews(seed, count = 3, preferTags = []) {
  const clean = reviews.filter(HOUSE_STYLE_CLEAN);
  const base = clean.length >= count ? clean : reviews;
  const preferred = preferTags.length
    ? base.filter((r) => r.tags.some((t) => preferTags.includes(t)))
    : [];
  const rest = base.filter((r) => !preferred.includes(r));
  const pool = [...preferred, ...rest];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const start = pool.length ? h % pool.length : 0;
  const out = [];
  for (let i = 0; i < count && i < pool.length; i++) out.push(pool[(start + i) % pool.length]);
  return out;
}

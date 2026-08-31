/**
 * The only place a Flowtek business fact lives in this codebase.
 * Every value below traces to /OS/company.md, /OS/products.md or /OS/voice.md.
 * Nothing here is invented. Anything unconfirmed is null and is not rendered.
 *
 * DO NOT add an ABN, a licence number, an insurance claim, a star rating,
 * a review count, a guarantee, a response time or trading hours until the
 * matching row in /OS/decisions.md is closed. See CLAUDE.md, hard rules 1 to 4.
 */

export const business = {
  name: 'Flowtek Services',
  shortName: 'Flowtek',
  legalName: null,            // TBC, register row 1
  abn: null,                  // TBC, register row 1
  licence: null,              // TBC, register row 2
  insurance: null,            // TBC, register row 17
  founded: null,              // never claimed

  credential: 'Licensed Plumber & Gas Fitter',
  tagline: 'Let it flow',
  descriptor: 'The local plumber with a human touch',
  areaLine: 'Servicing Yeppoon, Rockhampton and the Capricorn Coast',

  phone: '0448 726 474',
  phoneHref: 'tel:+61448726474',
  smsHref: 'sms:+61448726474',
  smsBody: 'Hi Jason, I need a plumber for ',
  email: null,                // TBC, register row 3
  street: null,               // TBC, register row 3
  suburb: 'Yeppoon',
  region: 'Queensland',
  regionCode: 'QLD',
  postcode: '4703',
  country: 'AU',
  site: 'https://flowtekservices.com.au',

  // Base coordinates: Yeppoon town centre. Used for the map link and for
  // areaServed geo in JSON-LD. Approximate town centroid, not a street address.
  lat: -23.1305,
  lng: 150.7414,

  // The offer, worded exactly as published. Never "24/7", never "same day".
  emergencyLine:
    'Our local emergency team is ready to respond promptly during all active business hours.',
  hours: null,                // TBC, register row 5. Nothing rendered until closed.

  /**
   * Profiles that are provably the same business, for schema.org sameAs.
   *
   * This is an entity signal, not a link list. It tells a search engine and an
   * AI assistant that this website, that directory listing and that Google
   * profile are one business. The 31/08/2026 audit found the cost of not having
   * it: with nothing tying the site to its own profiles, assistants resolved
   * Flowtek from directory listings instead and repeated their facts, including
   * a 24 hour availability claim Flowtek has never made and must not make.
   *
   * ONLY add a URL that has been opened and confirmed to be Flowtek. A wrong
   * URL here is worse than an empty list, because it merges Flowtek's identity
   * with somebody else's.
   */
  sameAs: [
    // Verified 31/08/2026: correct name, Yeppoon 4703, links back to this site.
    'https://www.localsearch.com.au/profile/flowtek-services/cltqwrrjb000s08jweg5d4cb0',
  ],

  /**
   * Two more belong in sameAs above and both are worth more than the one that
   * is there. Neither can be added yet. Register row 3.
   *
   * 1. The Google Business Profile URL. This is the single highest value entry
   *    for local search and for AI assistants, and nobody in this operating
   *    system has it.
   *
   * 2. Facebook. Deliberately NOT added. Ad account 322558511826041 promotes
   *    two Pages, "Flowtek Services CQ" (505732789294330) and "Flowtek
   *    Services" (1953410668287405), and two further profile IDs surface in
   *    search results. Four identities, and guessing between them would make
   *    entity resolution worse rather than better. Jason has to say which Page
   *    is the real, current one.
   */

  // The three promises, verbatim from the live site.
  promises: [
    'We turn up on time.',
    'We do the job well (and clean up afterwards).',
    'We talk to you (and have a laugh).',
  ],
};

/**
 * The text that prefills a text message.
 *
 * The template ends on "for", so it only reads as a sentence when a suburb is
 * appended. The footer and the contact page have no suburb to append, and
 * "I need a plumber for " left dangling in somebody's message app is worse than
 * no prefill at all. So those get a complete sentence instead.
 *
 * It says Jason rather than Flowtek deliberately. He answers the phone, the
 * about page says so, and a text that opens with a name is the same promise as
 * "we talk to you" on the van.
 */
export function smsText(suburb) {
  const name = (suburb ?? '').trim();
  return name ? `${business.smsBody}${name}` : 'Hi Jason, I need a plumber.';
}

export const services = [
  {
    slug: 'hot-water',
    name: 'Hot water systems',
    navName: 'Hot water',
    short: 'Installation, repairs and troubleshooting',
    keyword: 'hot water repairs and installation',
    /* Rule 1: open on the customer's moment. */
    hook: 'You turn on the tap and wait for it to warm up. And wait. And wait.',
    blurb:
      'We install energy efficient hot water systems and troubleshoot the one you already have. Instantaneous gas, solar and heat pump, plus repairs on whatever is out there now.',
    items: [
      'Instantaneous gas hot water',
      'Solar hot water',
      'Heat pump hot water',
      'Electric storage replacement',
      'Repairs, servicing and troubleshooting',
      'Tempering and relief valve replacement',
    ],
    core: true,
  },
  {
    slug: 'blocked-drains',
    name: 'Blocked drains and maintenance',
    navName: 'Blocked drains',
    short: 'Blockages, leaks, taps and pressure',
    keyword: 'blocked drain and general plumbing maintenance',
    hook: 'Water coming back up through the plugholes, and the plunger has given up.',
    blurb:
      'Blocked dunnies, leaking taps, corroded pipework and water pressure that is either a dribble or a rumble. This is the bread and butter service call.',
    items: [
      'Blocked drains and toilets',
      'Leak detection and repair',
      'Leaking and dripping taps',
      'Corroded and failing pipework',
      'Water pressure, high and low',
      'General maintenance and small upgrades',
    ],
    core: true,
  },
  {
    slug: 'renovations',
    name: 'Bathroom and kitchen renovations',
    navName: 'Renovations',
    short: 'Bathroom, kitchen, laundry and commercial',
    keyword: 'renovation plumbing',
    hook: 'Creating your dream bathroom, kitchen or laundry?',
    blurb:
      'The plumbing you cannot see is the part that ruins a renovation. We cover the water and the gas on the same job, so a kitchen with a gas cooktop takes one trade instead of two.',
    items: [
      'Bathroom rough-in and fit-off',
      'Kitchen sink, dishwasher and waste',
      'Gas fitting for ovens and cooktops',
      'Plumbed fridges and coffee machines',
      'Laundry and washing machine plumbing',
      'Commercial fitout',
    ],
    core: true,
  },
  {
    slug: 'gas-fitting',
    name: 'Gas installation and gas fitting',
    navName: 'Gas fitting',
    short: 'Hot water, cooktops, ovens, commercial',
    keyword: 'gas fitting and gas installation',
    hook: 'Make sure you are (safely) cooking with gas.',
    blurb:
      'Gas is the licensed, higher risk work a handyman cannot legally touch. Hot water systems, stovetops and ovens are the speciality, domestic and commercial, including commercial kitchens.',
    items: [
      'Gas hot water systems',
      'Cooktop and oven installation',
      'Gas point installation and relocation',
      'LPG and natural gas',
      'Commercial kitchen gas fitting',
      'Gas leak investigation',
    ],
    core: false,
  },
  {
    slug: 'backflow-tmv-testing',
    name: 'Backflow and TMV testing',
    navName: 'Backflow and TMV',
    short: 'Annual and ad hoc compliance testing',
    keyword: 'backflow prevention and thermostatic mixing valve testing',
    hook: 'The test is annual, and the reminder never comes at a good time.',
    blurb:
      'Backflow valves stop contaminated water flowing back into the drinking supply. Thermostatic mixing valves blend hot and cold to a safe temperature so nobody gets scalded. Both need testing, and we test and repair on the spot.',
    items: [
      'Annual backflow prevention device testing',
      'Ad hoc backflow testing',
      'Thermostatic mixing valve testing',
      'Device repair and replacement',
      'Commercial and body corporate sites',
      'Test reports for your records',
    ],
    core: false,
  },
  {
    slug: 'emergency-plumbing',
    name: 'Emergency plumbing',
    navName: 'Emergency',
    short: 'Burst pipes, leaks, blockages, gas',
    keyword: 'emergency plumbing',
    hook: 'Water is going everywhere and it is not stopping on its own.',
    blurb:
      business.emergencyLine +
      ' Burst pipes, water leaks, blocked drains and suspected gas leaks.',
    items: [
      'Burst and leaking water mains',
      'Blocked drains and overflowing toilets',
      'No hot water',
      'Suspected gas leaks',
      'Storm and flood related plumbing',
      'Make safe, then a plan to fix it',
    ],
    core: false,
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

/** What to do before we get there. Published on the live site, so safe to repeat. */
export const emergencySteps = [
  {
    title: 'Suspected gas leak',
    steps: [
      'Turn off any appliances.',
      'Open the doors and windows to ventilate the area.',
      'Shut the gas off at the main valve.',
      'Then call us. Do not use a light switch or a phone inside the room.',
    ],
  },
  {
    title: 'Burst pipe',
    steps: [
      'Turn the water off at the main.',
      'Call us.',
      'Then contact your home insurer.',
    ],
  },
  {
    title: 'Blocked drain',
    steps: ['Try a plunger first.', 'If that does not shift it, call us.'],
  },
];

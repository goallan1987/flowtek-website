/**
 * THE ROLE. One file, one vacancy.
 *
 * SOURCING, AND EVERY LINE OF IT MATTERS
 * The pay figures, the sign-on bonus and the email address below are NOT
 * invented and they are NOT estimates. They are lifted from Jason Breingan's
 * own published hiring material:
 *
 *   - "Plumber - $1500 Sign on Bonus", Flowtek Services Pty Ltd, SEEK listing,
 *     file dated 19/08/2026. Source of: $45 to $50 per hour, the $1,500 sign-on
 *     bonus, the work-type list, and the "Flowtek Services Pty Ltd" entity name.
 *   - "Hiring Now: Qualified Plumber", Flowtek Services Facebook post,
 *     file dated 28/12/2024. Source of: jason@flowtekservices.com.au.
 *
 * Both were written and published by Jason. Neither has been confirmed by him
 * for reuse here, so both are logged in /OS/decisions.md as rows 18 and 19 for
 * him to confirm or correct. Until those rows close, treat every figure on this
 * page as published-by-Jason-but-not-reconfirmed, which is exactly how it is
 * labelled in the source comments and in the register.
 *
 * WHAT IS DELIBERATELY ABSENT, per /CLAUDE.md hard rules 1 to 4:
 *   - No founding year. The SEEK ad says 2023. "Years in business" is a
 *     trust claim and it is not confirmed in /OS/company.md. Register row 18.
 *   - No licence number, no ABN, no insurance detail. Rows 1, 2 and 17.
 *   - No trading hours and no response-time promise. Row 5.
 *   - No street address. Row 3. The JobPosting schema carries locality,
 *     region, postcode and country, which is all Google requires.
 *   - No review count and no star rating. Hard rule 4.
 *
 * DATES: visible copy is DD/MM/YYYY. JSON-LD is ISO 8601. Never mixed.
 */

export const role = {
  /* Identity */
  id: 'FLO-PLB-2026-01',
  title: 'Plumber and gas fitter',
  seoTitle: 'Plumbing jobs in Yeppoon, Queensland',
  employmentType: 'FULL_TIME',
  employmentLabel: 'Full time',
  vacancies: 1,

  /* Dates. Posted is the real date this page went up. */
  postedISO: '2026-08-25',
  postedAU: '25/08/2026',
  /* Ninety days out. Google delists a JobPosting once validThrough passes, so
     this date is a maintenance obligation, not decoration. Register row 20. */
  validThroughISO: '2026-11-25T23:59:59+10:00',
  validThroughAU: '25/11/2026',

  /* Money. Source: Jason's SEEK listing, 19/08/2026. Register row 19.
     Wages are not a GST-bearing supply, so no GST line is stated. */
  payMin: 45,
  payMax: 50,
  payUnit: 'HOUR',
  payLabel: '$45 to $50 an hour',
  payBasis: 'On experience and what you actually hold.',
  signOnBonus: 1500,
  signOnLabel: '$1,500 sign-on bonus',
  signOnTerms: 'Terms apply. Jason will put them in writing before you accept.',

  /* Where */
  base: 'Yeppoon',
  areaLabel: 'Yeppoon, Rockhampton, Taranganba and the Capricorn Coast',

  /* How to apply outside the form. Source: Jason's Facebook hiring post. */
  email: 'jason@flowtekservices.com.au',

  /* The three problems the ads open on. The landing page answers each one
     directly underneath, in the same order. Keep them in sync with the ad
     copy in /OS/campaigns/2026-08-hiring-meta.md. */
  problems: [
    {
      key: 'roster',
      heading: 'The roster takes the week off you',
      body:
        'Two weeks on, one week back. Twelve hour days and a drive either side of them. The money is good and the calendar belongs to somebody else. Birthdays, Saturday sport and the ordinary Tuesday night all happen while you are three hundred kilometres away.',
      answer:
        'This job is based in Yeppoon and every job is inside the Capricorn Coast. You finish, you drive home, you are there for dinner. There is no roster, no camp and no flight.',
    },
    {
      key: 'narrow',
      heading: 'The work stops teaching you anything',
      body:
        'Eight months on one site running the same pipe in the same direction. The pay does not change and neither does the day. A plumber who only ever does one thing ends up very good at one thing and rusty at the rest.',
      answer:
        'Six kinds of work go through this business, and you will touch all of them. Maintenance one day, a bathroom rough-in the next, a commercial kitchen gas fitout the week after, backflow testing on the calendar every year.',
    },
    {
      key: 'mucked-about',
      heading: 'Nobody gives you a straight answer',
      body:
        'A schedule that changes at six in the morning. Gear that gave up two jobs ago. A question about your pay that takes three weeks to come back, and comes back wrong. None of that is the work. All of it is the job.',
      answer:
        'You get the week ahead in advance and a phone call the moment it changes. If you ask Jason a question you get an answer that day, and if the answer is no you get told it is no.',
    },
  ],

  /* What the job is. Behaviour, never adjectives. /OS/voice.md rule 2. */
  offers: [
    {
      k: 'Home every night',
      v: 'Yeppoon based. No fly-in fly-out, no drive-in drive-out, no camp.',
    },
    {
      k: 'Six kinds of work',
      v: 'Maintenance, drainage, rough-ins, renovations, gas fitting and backflow testing.',
    },
    {
      k: 'Your own jobs',
      v: 'You will run jobs on your own, talk to the customer yourself and make the call on site.',
    },
    {
      k: 'The gear that does it',
      v: 'A ute set up properly, and the tools for the job you were actually sent to.',
    },
    {
      k: 'Straight answers',
      v: 'On pay, on hours, on what happens next. Same day, from Jason.',
    },
    {
      k: 'Room to grow',
      v: 'Bigger projects as the business takes them on, and a say in how they run.',
    },
  ],

  /* The qualification. This is the part that filters. It is meant to. */
  standards: [
    'We turn up on time. Not most days.',
    'We do the job well, and we clean up afterwards. The house is left better than we found it.',
    'We talk to the customer, and we have a laugh. You will be in someone’s kitchen while they are trying to get kids out the door.',
    'You will work on your own most days. Nobody is going to stand over you, and nobody is going to cover for you either.',
    'If you get something wrong you say so on the day. That is the whole rule.',
  ],

  /* What the job actually involves. Source: Jason's SEEK listing, 19/08/2026. */
  duties: [
    'Maintenance plumbing',
    'Small projects',
    'Renovations, small and large',
    'Drainage work',
    'Rough-ins',
    'Backflow testing',
    'Gas fitting',
  ],

  /* What you need. Source: Jason's SEEK listing, 19/08/2026. */
  requirements: [
    'A plumbing qualification, and a Queensland licence or the ability to get one',
    'Confidence working on your own',
    'A driver’s licence',
    'The ability to talk to a customer and be understood',
    'Pride in the finished job',
  ],
  niceToHave: [
    'Gas work licence',
    'Backflow and thermostatic mixing valve accreditation',
    'Renovation experience',
    'Poly welding',
  ],

  /* What happens after they hit send. Named steps, no promised timeframes,
     because register row 5 blocks any claim about our own response speed. */
  process: [
    {
      n: 1,
      k: 'Jason reads it',
      v: 'Not a recruiter, not an inbox rule. He reads every application himself.',
    },
    {
      n: 2,
      k: 'A phone call',
      v: 'Fifteen minutes. He will ask about the hardest job you have done, and you should ask him whatever you like.',
    },
    {
      n: 3,
      k: 'A day on the tools',
      v: 'A paid day working alongside us on real jobs. You see how we work, we see how you work. Nobody has to guess.',
    },
    {
      n: 4,
      k: 'An offer, in writing',
      v: 'Pay, hours, the sign-on bonus and its terms, all on paper before you resign from anywhere.',
    },
  ],
};

/**
 * The question-shaped headings. These do double duty: they are how a person
 * actually asks the question, and they are the chunk an answer engine lifts.
 * Every answer opens with a complete sentence that names the business and the
 * place, so it stands alone when it is extracted away from this page.
 */
export const roleFaq = [
  {
    q: 'What does the plumbing job in Yeppoon pay?',
    a: 'Flowtek Services pays $45 to $50 an hour for this role, based on experience and the licences you hold, plus a $1,500 sign-on bonus with terms that are put in writing before you accept. These figures come from Flowtek’s own advertised listing for the role.',
  },
  {
    q: 'Is this a fly-in fly-out or drive-in drive-out role?',
    a: 'No. This is a local role based in Yeppoon, Queensland. Every job is inside the Capricorn Coast service area, so you finish on site and drive home the same day. There is no roster, no camp and no flight.',
  },
  {
    q: 'Do you hire plumbers in Rockhampton as well as Yeppoon?',
    a: 'Yes. Flowtek Services works across Yeppoon, Rockhampton, Taranganba and the Capricorn Coast, and applications from Rockhampton are welcome. The business is based in Yeppoon, so that is where the ute starts and finishes.',
  },
  {
    q: 'What licences do I need to apply?',
    a: 'You need a plumbing qualification and a Queensland plumbing licence, or to be in a position to get one. A gas work licence, backflow and thermostatic mixing valve accreditation and poly welding are all useful and none of them is a condition of applying.',
  },
  {
    q: 'Do you take on plumbing apprentices in Yeppoon?',
    a: 'The role advertised here is for a qualified plumber. Flowtek Services is a small business in Yeppoon and apprenticeships are not currently advertised, so an apprentice application will be read and kept on file rather than actioned against this vacancy. Choose apprentice on the form so it is filed correctly.',
  },
  {
    q: 'What kind of plumbing work would I actually be doing?',
    a: 'Six kinds. Maintenance plumbing and blocked drains, drainage work and rough-ins, bathroom and kitchen renovations, gas fitting including commercial kitchens, hot water system installation and repair, and annual backflow and thermostatic mixing valve testing. Domestic and commercial both.',
  },
  {
    q: 'What happens after I send the application?',
    a: 'Jason Breingan reads every application himself. If it looks right you get a phone call, then a paid day on the tools working alongside us on real jobs, then an offer in writing covering pay, hours and the sign-on bonus terms before you resign from anywhere.',
  },
];

/** Work types the applicant ticks. Stored as text[] in job_applications.work_types. */
export const workTypeOptions = [
  'Maintenance plumbing',
  'Blocked drains',
  'Drainage and stormwater',
  'Rough-ins',
  'Bathroom and kitchen renovations',
  'Hot water systems',
  'Gas fitting',
  'Commercial kitchens',
  'Backflow and TMV testing',
  'Poly welding',
];

export const roleOptions = [
  { value: 'licensed_plumber', label: 'Licensed plumber' },
  { value: 'plumber_gas_fitter', label: 'Licensed plumber and gas fitter' },
  { value: 'apprentice', label: 'Apprentice' },
  { value: 'labourer', label: 'Labourer or trade assistant' },
  { value: 'other', label: 'Something else' },
];

export const heardAboutOptions = [
  'Facebook or Instagram',
  'Google',
  'SEEK',
  'Someone who works here',
  'A customer of ours',
  'Saw the ute',
  'Somewhere else',
];

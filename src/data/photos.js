/**
 * THE REAL PHOTOGRAPH LIBRARY.
 *
 * Every entry is a genuine Flowtek photograph: recovered from the business's
 * own WordPress media library, supplied by the owner, or cut from Flowtek's own
 * job videos. Nothing here is stock, generated, composited, or copied from
 * another business.
 *
 * ONE SHAPE, ONE SIZE, ONE TONE.
 * Every photograph in this file is 1600x1200, 4:3, and has been pulled part-way
 * toward a common tone so that 4K video stills and phone snaps read as one set.
 * The crop for each was chosen by hand so the subject is the WORK. Letting CSS
 * centre-crop a 9:16 video still into a 4:3 slot is what made the site look
 * like a pile of random screenshots, and it is why photographs are normalised
 * here rather than in the template.
 *
 * WHAT WAS CUT, AND WHY, ON 25/08/2026.
 * - Eight photographs under 1000px on the short edge. One was 259px, being
 *   blown up 2.3x into a 600px card. They came from the old WordPress library
 *   already small and no amount of cropping fixes that.
 * - Five video stills of somebody mid-sentence. A person talking with their
 *   mouth open is never a good photograph, however real the job behind them is.
 * There is a build gate in scripts/check-photos.mjs so neither can come back.
 *
 * THE DIVISION OF LABOUR ON THIS SITE
 * - Illustrations SELL. They are the heroes and the service cards.
 * - Photographs PROVE. They go in the galleries and carry captions that
 *   describe only what is actually in the frame.
 * See src/data/service-art.js, src/data/suburb-art.js and
 * /OS/brand/photography.md.
 *
 * `alt` is written for a screen reader first and a search engine second.
 * `suburb` is only ever set where the location is actually documented.
 *
 * `subject` groups photographs that show the same KIND of thing. Two shots of
 * the same open bathroom wall are different files with different alt text, so
 * no text check catches them, but stacked in one gallery they look like a
 * mistake. A gallery never shows two photographs with the same subject.
 */

export const photos = {
  /* ---------------- Hot water ---------------- */
  hotWaterInstalled: {
    file: 'real/electric-storage-hot-water-system-installation-yeppoon.jpg',
    alt: 'A mains pressure electric storage hot water unit installed against a brick wall with new copper pipework, a tempering valve on the outlet and lagged flow and return lines',
    caption:
      'A mains pressure electric storage unit in and connected, tempering valve on the outlet. On this coast the fittings and the valve usually go well before the tank does.',
    subject: 'hot-water-unit',
    services: ['hot-water'],
  },
  ceilingFitting: {
    file: 'real/water-pipe-ceiling-fitting-renovation-yeppoon.jpg',
    alt: 'A brass compression fitting being made up on a water line running through the timber roof frame of a house under construction',
    caption:
      'A joint made up in the roof space. Every one of these is a joint that has to still be dry in twenty years.',
    subject: 'pipe-joint',
    services: ['hot-water', 'renovations'],
  },

  /* ---------------- Drains and drainage ---------------- */
  drainageInstall: {
    file: 'real/stormwater-drainage-pipe-installation-yeppoon.jpg',
    alt: 'A Flowtek Services plumber in a hi-vis Flowtek shirt laying PVC drainage pipe into a gravel-bedded trench, with a laser level, spirit level and reciprocating saw beside him',
    caption:
      'New drainage laid on a gravel bed, set to grade with a laser level. Fall is the whole job, and it is the part you cannot fix later.',
    subject: 'drainage-trench',
    services: ['blocked-drains', 'renovations'],
  },
  taranganbaDrainage: {
    file: 'real/stormwater-drainage-pits-taranganba-plumber.jpg',
    alt: 'A gravel drainage path running beside a red brick building at Taranganba, with a black drainage pit set into the gravel and an open trench cut along the fence line',
    caption:
      'Taranganba. Drainage pits placed to catch surface water and take it away from the building, on a site where the ground fell back towards the wall.',
    subject: 'drainage-trench',
    services: ['blocked-drains', 'emergency-plumbing'],
    suburb: 'Taranganba',
  },
  compressionFitting: {
    file: 'real/compression-fitting-plumber-hands-yeppoon.jpg',
    alt: "Close view of a plumber's hands tightening a brass compression fitting onto black poly pipe",
    caption:
      'A brass compression fitting going onto poly. Nipped up, not gorilla-tight, or you split the ferrule.',
    subject: 'pipe-joint',
    services: ['blocked-drains', 'emergency-plumbing'],
  },
  polyFitting: {
    file: 'real/poly-pipe-compression-fitting-plumber-hands.jpg',
    alt: 'A plumber threading black poly pipe into a brass fitting, hands close in frame against a plasterboard wall',
    caption:
      'Poly into brass. Push it home properly or it will find you again in a year.',
    subject: 'pipe-joint',
    services: ['blocked-drains', 'emergency-plumbing'],
  },

  /* ---------------- Renovations ---------------- */
  heritageSite: {
    file: 'real/heritage-queenslander-renovation-plumbing-yeppoon.jpg',
    alt: 'A large two-storey heritage Queenslander under restoration behind site fencing, with a Flowtek Services Plumbing and Gas banner on the hoarding',
    caption:
      'A heritage Queenslander mid-restoration, our banner on the hoarding. Old houses like this are the ones where the plumbing is a genuine puzzle.',
    subject: 'building',
    services: ['renovations'],
  },
  bathroomRoughIn: {
    file: 'real/bathroom-rough-in-copper-stub-outs-yeppoon.jpg',
    alt: 'Copper stub-outs set out and fixed to a timber wall stud at a bathroom rough-in, sarking behind and the wall still open',
    caption:
      'Bathroom rough-in, stub-outs set out on the stud. Every tap and every outlet is decided at this stage, months before anyone sees a tile.',
    subject: 'wall-rough-in',
    services: ['renovations'],
  },
  wallRoughIn: {
    file: 'real/bathroom-wall-rough-in-pipe-bender-yeppoon.jpg',
    alt: 'Pipework being set out and fixed to a timber stud in an open bathroom wall, insulation sarking behind and the outlets capped ready for fit-off',
    caption:
      'Set out and fixed off before the sheeting goes on. Get this wrong and the tiler pays for it, then you do.',
    subject: 'wall-rough-in',
    services: ['renovations'],
  },
  timberFrameRoughIn: {
    file: 'real/new-home-plumbing-rough-in-timber-frame-yeppoon.jpg',
    alt: 'A Flowtek Services plumber walking through a house under construction, exposed pine timber frame and roof trusses, teal steel window frames and a raw concrete floor',
    caption:
      'A new build at frame stage. We come through before the sheeting goes on and after it comes off.',
    subject: 'building-frame',
    services: ['renovations'],
  },
  wallChase: {
    file: 'real/copper-pipework-wall-chase-commercial-fitout.jpg',
    alt: 'A vertical chase cut into a plastered wall exposing a copper water line and its fixings, ready to be made good',
    caption:
      'A chase cut to get at a copper line. Cutting it is easy. Making the wall good afterwards is the part people remember.',
    subject: 'wall-rough-in',
    services: ['renovations', 'blocked-drains'],
  },

  /* ---------------- Commercial, gas and services ----------------
     From Flowtek's own commercial fitout footage. The uniform here is the
     yellow hi-vis long sleeve and a hard hat, which is the correct garment for
     a construction site. See decisions register row 22. */
  commercialServices: {
    file: 'real/commercial-copper-services-pipework-flowtek.jpg',
    alt: 'Runs of copper and steel services pipework on a commercial ceiling, each line labelled with its own identification tape reading compressed air, vacuum and reverse osmosis water',
    caption:
      'Compressed air, vacuum, reverse osmosis water. On a commercial fitout every line is identified, because the next person to open that ceiling has to know what they are looking at.',
    subject: 'ceiling-services',
    services: ['gas-fitting', 'backflow-tmv-testing'],
  },
  commercialCeiling: {
    file: 'real/commercial-ceiling-services-rough-in-flowtek.jpg',
    alt: 'Copper and steel services pipework and a red fire services main running through a suspended ceiling grid on a commercial fitout, a plumber working below',
    caption:
      'Rough-in above the ceiling grid. All of this disappears behind a ceiling, which is exactly why it has to be right the first time.',
    subject: 'ceiling-services',
    services: ['gas-fitting', 'renovations'],
  },
  commercialLift: {
    file: 'real/commercial-ceiling-services-elevated-work-platform.jpg',
    alt: 'A Flowtek Services plumber in a yellow hi-vis shirt working from an elevated work platform on services pipework in a high commercial ceiling',
    caption:
      'Up on a platform to reach the ceiling services. Height work has its own ticket and its own paperwork.',
    subject: 'working-at-height',
    services: ['gas-fitting'],
  },
  commercialTeam: {
    file: 'real/licensed-plumbers-commercial-site-flowtek.jpg',
    alt: 'Two Flowtek Services plumbers in yellow hi-vis shirts on a commercial site, heads together over a detail, working it out between them',
    caption:
      'Two of us on a detail. Most of the hard part of a commercial job is worked out standing up, before anyone cuts anything.',
    subject: 'people',
    services: ['gas-fitting'],
  },
  brassValve: {
    file: 'real/commercial-copper-pipework-brass-valve-flowtek.jpg',
    alt: 'A brass isolation valve made up in a run of copper services pipework fixed to a steel ceiling grid, the line labelled with identification tape',
    caption:
      'An isolation valve on a services run. Put them where somebody can actually reach them, not where they were easiest to fit.',
    subject: 'valve',
    services: ['gas-fitting', 'backflow-tmv-testing'],
  },
  potableValve: {
    file: 'real/potable-water-services-isolation-valve-flowtek.jpg',
    alt: 'Copper potable water pipework being made up under a green identification label reading potable water, a press tool clamped onto the fitting',
    caption:
      'Potable water, labelled as such. Drinking water and everything else stay apart, and the label is how the next trade knows which is which.',
    subject: 'valve',
    services: ['backflow-tmv-testing', 'gas-fitting'],
  },
  backflowTest: {
    file: 'real/backflow-prevention-device-testing-flowtek-yeppoon.jpg',
    alt: 'Jason Breingan of Flowtek Services testing a backflow prevention device on a brick wall, a differential pressure gauge and red, blue and yellow test hoses connected to the device',
    caption:
      'A backflow device under test. The gauge reads the pressure differential across the valve, and that reading is what goes on the report.',
    subject: 'valve',
    services: ['backflow-tmv-testing'],
  },

  /* ---------------- The business itself ---------------- */
  vanSide: {
    file: 'real/flowtek-services-plumbing-gas-van-yeppoon.jpg',
    alt: 'The Flowtek Services van photographed from the side, showing the wordmark, the list of services on the window and the ladder on the roof rack',
    caption: 'The van, and everything on it. If it is parked out the front, the job is on.',
    subject: 'vehicle',
    services: ['emergency-plumbing'],
  },
  vanBack: {
    file: 'real/flowtek-services-plumber-van-rear-yeppoon.jpg',
    alt: 'The rear of the Flowtek Services van showing the logo, the services listed, the phone number and the website address',
    caption:
      'Six services on the back door. Commercial and residential, water and gas, all from the one trade.',
    subject: 'vehicle',
    services: ['emergency-plumbing'],
  },
  flowtekUte: {
    file: 'real/flowtek-services-plumbing-gas-ute-yeppoon.jpg',
    alt: 'The white Flowtek Services tray-back ute signwritten with the Flowtek logo and Plumbing, Gas and Poly Welding, parked at a job site',
    caption:
      'The ute. It carries the gear the van cannot, and it goes where the van should not.',
    subject: 'vehicle',
    services: ['emergency-plumbing'],
  },
  jasonDigging: {
    file: 'real/water-leak-detection-trench-plumber-yeppoon.jpg',
    alt: 'Jason Breingan of Flowtek Services standing in a suburban front yard beside a freshly dug trench with a shovel, in hard Central Queensland sun',
    caption: 'Jason, mid-dig. Most water leaks end with somebody in a hole in the front yard.',
    subject: 'people',
    services: ['emergency-plumbing'],
  },
  jasonLaughing: {
    file: 'real/jason-breingan-flowtek-services-plumber-yeppoon.jpg',
    alt: 'Jason Breingan of Flowtek Services leaning on a shovel beside an open trench on a suburban verge with palms and a Queenslander house behind him',
    caption: 'We talk to you (and have a laugh). It is on the van for a reason.',
    subject: 'people',
    services: [],
  },
  jasonHeadshot: {
    file: 'real/jason-breingan-plumber-gas-fitter-yeppoon.jpg',
    alt: 'Jason Breingan, director and lead tradesperson at Flowtek Services, in the charcoal Flowtek polo with the orange collar',
    caption: 'Jason Breingan. He answers the phone, and he does the work.',
    subject: 'portrait',
    services: [],
    portrait: true,
  },
};

/**
 * A SECOND, DIFFERENT photograph per service, for the detail cards on the
 * services page and the inline photograph inside a service page's long read.
 */
export const serviceDetailPhoto = {
  'hot-water': 'ceilingFitting',
  'blocked-drains': 'drainageInstall',
  renovations: 'heritageSite',
  'gas-fitting': 'commercialTeam',
  'backflow-tmv-testing': 'potableValve',
  'emergency-plumbing': 'vanSide',
};

/** Look up one photograph by its key. Returns undefined rather than throwing. */
export function photo(key) {
  return key ? photos[key] : undefined;
}

/** Photographs that show a given service, in the order they should appear. */
export function photosForService(slug, limit = 3) {
  return Object.entries(photos)
    .filter(([, p]) => p.services.includes(slug))
    .slice(0, limit)
    .map(([key, p]) => ({ key, ...p }));
}

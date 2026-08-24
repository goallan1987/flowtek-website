/**
 * THE REAL PHOTOGRAPH LIBRARY.
 *
 * Every entry is a genuine Flowtek photograph: either recovered from the
 * business's own WordPress media library, or supplied directly by the owner.
 * Nothing here is stock, nothing is generated, nothing is composited, and
 * nothing is copied from another business.
 *
 * THE DIVISION OF LABOUR ON THIS SITE
 * - Photographs PROVE. They go in the page body and they carry captions that
 *   describe only what is actually in the frame.
 * - Illustrations POSITION. They are the heroes. They never carry a caption
 *   that asserts a job, a customer or a suburb.
 * See /OS/brand/photography.md and docs/outstanding-proof.md.
 *
 * `alt` is written for a screen reader first and a search engine second: it
 * describes what is in the picture, not what we want to rank for.
 * `caption` is the thing a plumber would say about it.
 * `suburb` is only ever set where the location is actually documented.
 */

export const photos = {
  backflowTest: {
    file: 'real/backflow-prevention-device-testing-flowtek-yeppoon.jpg',
    alt: 'Jason Breingan of Flowtek Services testing a backflow prevention device on a brick wall, a differential pressure gauge and red, blue and yellow test hoses connected to the device',
    caption:
      'A backflow device under test. The gauge reads the pressure differential across the valve, and that reading is what goes on the report.',
    services: ['backflow-tmv-testing'],
  },
  drainageInstall: {
    file: 'real/stormwater-drainage-pipe-installation-yeppoon.jpg',
    alt: 'A Flowtek Services plumber in a hi-vis Flowtek shirt laying PVC drainage pipe into a gravel-bedded trench, with a laser level, spirit level and reciprocating saw beside him',
    caption:
      'New drainage laid on a gravel bed, set to grade with a laser level. Fall is the whole job, and it is the part you cannot fix later.',
    services: ['blocked-drains', 'renovations'],
  },
  heritageSite: {
    file: 'real/heritage-queenslander-renovation-plumbing-yeppoon.jpg',
    alt: 'A large two-storey heritage Queenslander under restoration behind site fencing, with a Flowtek Services Plumbing and Gas banner on the hoarding alongside the builder and concreter',
    caption:
      'A heritage Queenslander mid-restoration, our banner on the hoarding. Old houses like this are the ones where the plumbing is a genuine puzzle.',
    services: ['renovations'],
  },
  conduitRoughIn: {
    file: 'bathroom-renovation-plumbing-rough-in-yeppoon.jpg',
    alt: 'A Flowtek Services plumber in a charcoal polo with an orange collar threading conduit through a timber wall frame, tools laid out on the concrete slab beside him',
    caption:
      'Rough-in on a timber frame. This is the part of a renovation nobody ever sees, and the part that decides whether the rest of it holds up.',
    services: ['renovations'],
  },
  hotWaterInstalled: {
    file: 'electric-storage-hot-water-system-installation-yeppoon.jpg',
    alt: 'A mains pressure electric storage hot water unit installed against a brick wall with new copper pipework, a tempering valve on the outlet and lagged flow and return lines',
    caption:
      'A mains pressure electric storage unit in and connected, tempering valve on the outlet. On this coast the fittings and the valve usually go well before the tank does.',
    services: ['hot-water'],
  },
  gasHotWaterService: {
    file: 'gas-hot-water-system-repairs-yeppoon.png',
    alt: 'A Flowtek Services plumber servicing an instantaneous gas hot water unit mounted on an exterior wall, the cover off and the controls exposed',
    caption:
      'Cover off an instantaneous unit. Most hot water calls are a fault to find, not a system to replace.',
    services: ['hot-water', 'gas-fitting'],
  },
  drainageRiser: {
    file: 'blocked-drain-pvc-riser-inspection-approved-yeppoon.png',
    alt: 'A capped PVC drainage riser standing in an open trench, carrying a green inspection sticker approving the pipework to be covered up',
    caption:
      'Signed off before backfill. That green sticker is the inspection approving the pipework to be covered, and it is the bit that protects you later.',
    services: ['blocked-drains', 'renovations'],
  },
  serviceTrench: {
    file: 'gas-line-service-trench-marker-tape-yeppoon.png',
    alt: 'An open service trench cut across a lawn beside a block retaining wall, with yellow warning marker tape laid along the bottom of the trench',
    caption:
      'Marker tape down before backfill, so whoever digs here in twenty years knows what is underneath before the shovel finds it.',
    services: ['blocked-drains', 'gas-fitting', 'emergency-plumbing'],
  },
  commercialGas: {
    file: 'commercial-kitchen-gas-fitting-rockhampton-yeppoon.png',
    alt: 'Copper gas lines with braided flexible connectors and restraint chains running to commercial cooking appliances in a stainless steel commercial kitchen',
    caption:
      'Commercial kitchen gas fit-off. The restraint chains let an appliance be pulled out for cleaning without putting any load on the connection.',
    services: ['gas-fitting'],
  },
  gasRegulator: {
    file: 'gas-regulator-installation-test-points-yeppoon.png',
    alt: 'A gas regulator mounted on an exterior wall with copper gas lines running to it and capped test points either side',
    caption:
      'Regulator and test points on an exterior wall, set up so the installation can actually be tested rather than just looked at.',
    services: ['gas-fitting', 'backflow-tmv-testing'],
  },
  taranganbaDrainage: {
    file: 'stormwater-drainage-pits-taranganba-plumber.jpg',
    alt: 'A gravel drainage path running beside a red brick building at Taranganba, with a black drainage pit set into the gravel and an open trench cut along the fence line',
    caption:
      'Taranganba. Drainage pits placed to catch surface water and take it away from the building, on a site where the ground fell back towards the wall.',
    services: ['blocked-drains', 'emergency-plumbing'],
    suburb: 'Taranganba',
  },
  vanSide: {
    file: 'flowtek-services-plumbing-gas-van-yeppoon.jpg',
    alt: 'The Flowtek Services van photographed from the side, showing the wordmark, the list of services on the window and the ladder on the roof rack',
    caption: 'The van, and everything on it. If it is parked out the front, the job is on.',
    services: ['emergency-plumbing'],
  },
  vanBack: {
    file: 'flowtek-services-plumber-van-rear-yeppoon.jpg',
    alt: 'The rear of the Flowtek Services van showing the logo, the six services listed, the phone number 0448 726 474 and the website address',
    caption:
      'Six services on the back door. Commercial and residential, water and gas, all from the one trade.',
    services: ['emergency-plumbing'],
  },
  jasonDigging: {
    file: 'water-leak-detection-trench-plumber-yeppoon.jpg',
    alt: 'Jason Breingan of Flowtek Services standing in a suburban front yard beside a freshly dug trench with a shovel, in hard Central Queensland sun',
    caption: 'Jason, mid-dig. Most water leaks end with somebody in a hole in the front yard.',
    services: ['emergency-plumbing'],
  },
  jasonLaughing: {
    file: 'jason-breingan-flowtek-services-plumber-yeppoon.jpg',
    alt: 'Jason Breingan of Flowtek Services laughing, leaning on a shovel beside an open trench on a suburban verge with palms and a Queenslander house behind him',
    caption: 'We talk to you (and have a laugh). It is on the van for a reason.',
    services: [],
  },

  /* ------------------------------------------------------------------
     FROM JASON'S OWN JOB VIDEOS, supplied 25/08/2026.
     Stills pulled from two Flowtek videos: a commercial building fitout and
     a residential new build. Flowtek's own footage, so these are genuine
     Flowtek job photographs, not stock and not generated.

     NOTE ON THE UNIFORM: the commercial frames show a yellow hi vis long
     sleeve shirt with a navy collar and a white hard hat. That is the correct
     garment for a construction site and it is what Flowtek actually wears
     there. /OS/brand/photography.md names only the charcoal polo, which is
     the service uniform. Register row 16 needs to record both.

     NOTE ON LOCATION: neither video records where it was shot, so no caption
     and no filename here names a suburb.
     ------------------------------------------------------------------ */
  commercialJason: {
    file: 'real/commercial-plumber-hi-vis-hard-hat-flowtek-services.jpg',
    alt: 'Jason Breingan of Flowtek Services on a commercial building site in a yellow hi-vis long sleeve shirt with a navy collar and a white hard hat, looking up at services running through the ceiling',
    caption:
      'Commercial site, hard hat on. Different rules, different gear, same licence doing the work.',
    services: ['gas-fitting', 'backflow-tmv-testing'],
  },
  commercialServices: {
    file: 'real/commercial-copper-services-pipework-flowtek.jpg',
    alt: 'Runs of copper and steel services pipework on a commercial ceiling, each line labelled with its own identification tape reading compressed air, vacuum and reverse osmosis water',
    caption:
      'Compressed air, vacuum, reverse osmosis water. On a commercial fitout every line is identified, because the next person to open that ceiling has to know what they are looking at.',
    services: ['gas-fitting', 'backflow-tmv-testing'],
  },
  commercialTeam: {
    file: 'real/licensed-plumbers-commercial-site-flowtek.jpg',
    alt: 'Two Flowtek Services plumbers in yellow hi-vis shirts and hard hats on a commercial site, heads together over a detail, working it out between them',
    caption:
      'Two of us on a detail. Most of the hard part of a commercial job is worked out standing up, before anyone cuts anything.',
    services: ['gas-fitting'],
  },
  commercialCeiling: {
    file: 'real/commercial-plumbing-rough-in-ceiling-services.jpg',
    alt: 'A Flowtek Services plumber in a yellow hi-vis shirt working overhead on services pipework in a suspended ceiling grid during a commercial fitout, bare plasterboard walls around him',
    caption:
      'Rough-in above the ceiling grid. All of this disappears behind a ceiling, which is exactly why it has to be right the first time.',
    services: ['gas-fitting', 'renovations'],
  },
  commercialLift: {
    file: 'real/commercial-ceiling-services-elevated-work-platform.jpg',
    alt: 'A Flowtek Services plumber working from an elevated work platform on services pipework in a high commercial ceiling, steel ceiling grid and red fire services main above him',
    caption:
      'Up on a platform to reach the ceiling services. Height work has its own ticket and its own paperwork.',
    services: ['gas-fitting'],
  },
  commercialSupervision: {
    file: 'real/commercial-plumbing-site-supervision-flowtek.jpg',
    alt: 'Jason Breingan of Flowtek Services standing in a commercial fitout in hi-vis and a white hard hat, phone in hand, exposed brick and stripped-back walls behind him',
    caption:
      'On site, on the phone. Running a commercial job is as much scheduling as it is plumbing.',
    services: ['gas-fitting'],
  },
  wallChase: {
    file: 'real/copper-pipework-wall-chase-commercial-fitout.jpg',
    alt: 'A vertical chase cut into a plastered wall exposing a copper water line and its fixings, ready to be made good',
    caption:
      'A chase cut to get at a copper line. Cutting it is easy. Making the wall good afterwards is the part people remember.',
    services: ['renovations', 'blocked-drains'],
  },
  compressionFitting: {
    file: 'real/compression-fitting-plumber-hands-yeppoon.jpg',
    alt: 'Close view of a plumber\'s hands tightening a brass compression fitting onto black poly pipe',
    caption:
      'A brass compression fitting going onto poly. Nipped up, not gorilla-tight, or you split the ferrule.',
    services: ['blocked-drains', 'emergency-plumbing'],
  },
  polyCeiling: {
    file: 'real/poly-pipe-installation-house-renovation-yeppoon.jpg',
    alt: 'Jason Breingan of Flowtek Services in the charcoal Flowtek polo feeding black poly water pipe through the timber roof frame of a house under construction',
    caption:
      'Feeding poly through the roof frame. Easier now than it will ever be again, so it gets done properly while the ceiling is open.',
    services: ['renovations', 'hot-water'],
  },
  bathroomRoughIn: {
    file: 'real/bathroom-rough-in-copper-stub-outs-yeppoon.jpg',
    alt: 'Copper stub-outs set out and fixed to a timber wall stud at a bathroom rough-in, sarking behind and the wall still open',
    caption:
      'Bathroom rough-in, stub-outs set out on the stud. Every tap and every outlet is decided at this stage, months before anyone sees a tile.',
    services: ['renovations'],
  },
  timberFrameRoughIn: {
    file: 'real/new-home-plumbing-rough-in-timber-frame-yeppoon.jpg',
    alt: 'A Flowtek Services plumber walking through a house under construction, exposed pine timber frame and roof trusses, teal steel window frames and a raw concrete floor',
    caption:
      'A new build at frame stage. We come through before the sheeting goes on and after it comes off.',
    services: ['renovations'],
  },
  vanJason: {
    file: 'real/jason-breingan-flowtek-van-hot-water-yeppoon.jpg',
    alt: 'Jason Breingan of Flowtek Services standing at the Flowtek van holding a hot water expansion control valve, the services list visible on the van window behind him',
    caption:
      'Jason at the van. The part in his hands is the one that usually fails long before the tank does.',
    services: ['hot-water'],
  },
  flowtekUte: {
    file: 'real/flowtek-services-plumbing-gas-ute-yeppoon.jpg',
    alt: 'The white Flowtek Services tray-back ute signwritten with the Flowtek logo and Plumbing, Gas and Poly Welding, parked at a job site',
    caption:
      'The ute. It carries the gear the van cannot, and it goes where the van should not.',
    services: ['emergency-plumbing'],
  },
  jasonHeadshot: {
    file: 'real/jason-breingan-plumber-gas-fitter-yeppoon.jpg',
    alt: 'Jason Breingan, director and lead tradesperson at Flowtek Services, in the charcoal Flowtek polo with the orange collar',
    caption: 'Jason Breingan. He answers the phone, and he does the work.',
    services: [],
  },
};

/**
 * ONE CANONICAL PHOTOGRAPH PER SERVICE, for the service cards.
 *
 * These run on the home page, the services page and all 27 suburb pages, so the
 * same six photographs repeat a great deal. That is deliberate and it is honest:
 * they are the six photographs we actually have of those six jobs. A card on a
 * suburb page shows the service, never a claim about that suburb.
 */
export const serviceCardPhoto = {
  'hot-water': 'hotWaterInstalled',
  'blocked-drains': 'drainageInstall',
  renovations: 'heritageSite',
  'gas-fitting': 'commercialGas',
  'backflow-tmv-testing': 'backflowTest',
  'emergency-plumbing': 'jasonDigging',
};

/**
 * A SECOND, DIFFERENT photograph per service, for the detail cards on the
 * services page. Without this the services page would show the same six images
 * twice on the one screen. Every one is already tagged to that service above.
 */
export const serviceDetailPhoto = {
  'hot-water': 'gasHotWaterService',
  'blocked-drains': 'drainageRiser',
  renovations: 'conduitRoughIn',
  'gas-fitting': 'serviceTrench',
  'backflow-tmv-testing': 'gasRegulator',
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

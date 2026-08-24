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
    file: 'real/real-backflow-test.jpg',
    alt: 'Jason Breingan of Flowtek Services testing a backflow prevention device on a brick wall, a differential pressure gauge and red, blue and yellow test hoses connected to the device',
    caption:
      'A backflow device under test. The gauge reads the pressure differential across the valve, and that reading is what goes on the report.',
    services: ['backflow-tmv-testing'],
  },
  drainageInstall: {
    file: 'real/real-drainage-install.jpg',
    alt: 'A Flowtek Services plumber in a hi-vis Flowtek shirt laying PVC drainage pipe into a gravel-bedded trench, with a laser level, spirit level and reciprocating saw beside him',
    caption:
      'New drainage laid on a gravel bed, set to grade with a laser level. Fall is the whole job, and it is the part you cannot fix later.',
    services: ['blocked-drains', 'renovations'],
  },
  heritageSite: {
    file: 'real/real-heritage-reno-site.jpg',
    alt: 'A large two-storey heritage Queenslander under restoration behind site fencing, with a Flowtek Services Plumbing and Gas banner on the hoarding alongside the builder and concreter',
    caption:
      'A heritage Queenslander mid-restoration, our banner on the hoarding. Old houses like this are the ones where the plumbing is a genuine puzzle.',
    services: ['renovations'],
  },
  conduitRoughIn: {
    file: 'job-conduit-timber-frame.jpg',
    alt: 'A Flowtek Services plumber in a charcoal polo with an orange collar threading conduit through a timber wall frame, tools laid out on the concrete slab beside him',
    caption:
      'Rough-in on a timber frame. This is the part of a renovation nobody ever sees, and the part that decides whether the rest of it holds up.',
    services: ['renovations'],
  },
  hotWaterInstalled: {
    file: 'job-old-hot-water-unit.jpg',
    alt: 'A mains pressure electric storage hot water unit installed against a brick wall with new copper pipework, a tempering valve on the outlet and lagged flow and return lines',
    caption:
      'A mains pressure electric storage unit in and connected, tempering valve on the outlet. On this coast the fittings and the valve usually go well before the tank does.',
    services: ['hot-water'],
  },
  gasHotWaterService: {
    file: 'job-gas-hot-water-service.png',
    alt: 'A Flowtek Services plumber servicing an instantaneous gas hot water unit mounted on an exterior wall, the cover off and the controls exposed',
    caption:
      'Cover off an instantaneous unit. Most hot water calls are a fault to find, not a system to replace.',
    services: ['hot-water', 'gas-fitting'],
  },
  drainageRiser: {
    file: 'project-2405.png',
    alt: 'A capped PVC drainage riser standing in an open trench, carrying a green inspection sticker approving the pipework to be covered up',
    caption:
      'Signed off before backfill. That green sticker is the inspection approving the pipework to be covered, and it is the bit that protects you later.',
    services: ['blocked-drains', 'renovations'],
  },
  serviceTrench: {
    file: 'project-2406.png',
    alt: 'An open service trench cut across a lawn beside a block retaining wall, with yellow warning marker tape laid along the bottom of the trench',
    caption:
      'Marker tape down before backfill, so whoever digs here in twenty years knows what is underneath before the shovel finds it.',
    services: ['blocked-drains', 'gas-fitting', 'emergency-plumbing'],
  },
  commercialGas: {
    file: 'project-2407.png',
    alt: 'Copper gas lines with braided flexible connectors and restraint chains running to commercial cooking appliances in a stainless steel commercial kitchen',
    caption:
      'Commercial kitchen gas fit-off. The restraint chains let an appliance be pulled out for cleaning without putting any load on the connection.',
    services: ['gas-fitting'],
  },
  gasRegulator: {
    file: 'project-2408.png',
    alt: 'A gas regulator mounted on an exterior wall with copper gas lines running to it and capped test points either side',
    caption:
      'Regulator and test points on an exterior wall, set up so the installation can actually be tested rather than just looked at.',
    services: ['gas-fitting', 'backflow-tmv-testing'],
  },
  taranganbaDrainage: {
    file: 'job-stormwater-trench-taranganba.jpg',
    alt: 'A gravel drainage path running beside a red brick building at Taranganba, with a black drainage pit set into the gravel and an open trench cut along the fence line',
    caption:
      'Taranganba. Drainage pits placed to catch surface water and take it away from the building, on a site where the ground fell back towards the wall.',
    services: ['blocked-drains', 'emergency-plumbing'],
    suburb: 'Taranganba',
  },
  vanSide: {
    file: 'flowtek-van-side.jpg',
    alt: 'The Flowtek Services van photographed from the side, showing the wordmark, the list of services on the window and the ladder on the roof rack',
    caption: 'The van, and everything on it. If it is parked out the front, the job is on.',
    services: ['emergency-plumbing'],
  },
  vanBack: {
    file: 'flowtek-van-back.jpg',
    alt: 'The rear of the Flowtek Services van showing the logo, the six services listed, the phone number 0448 726 474 and the website address',
    caption:
      'Six services on the back door. Commercial and residential, water and gas, all from the one trade.',
    services: ['emergency-plumbing'],
  },
  jasonDigging: {
    file: 'jason-digging.jpg',
    alt: 'Jason Breingan of Flowtek Services standing in a suburban front yard beside a freshly dug trench with a shovel, in hard Central Queensland sun',
    caption: 'Jason, mid-dig. Most water leaks end with somebody in a hole in the front yard.',
    services: [],
  },
  jasonLaughing: {
    file: 'jason-laughing.jpg',
    alt: 'Jason Breingan of Flowtek Services laughing, leaning on a shovel beside an open trench on a suburban verge with palms and a Queenslander house behind him',
    caption: 'We talk to you (and have a laugh). It is on the van for a reason.',
    services: [],
  },
  jasonHeadshot: {
    file: 'real/jason-headshot.jpg',
    alt: 'Jason Breingan, director and lead tradesperson at Flowtek Services, in the charcoal Flowtek polo with the orange collar',
    caption: 'Jason Breingan. He answers the phone, and he does the work.',
    services: [],
  },
};

/** Photographs that show a given service, in the order they should appear. */
export function photosForService(slug, limit = 3) {
  return Object.entries(photos)
    .filter(([, p]) => p.services.includes(slug))
    .slice(0, limit)
    .map(([key, p]) => ({ key, ...p }));
}

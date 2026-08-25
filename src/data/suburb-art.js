/**
 * THE SUBURB HERO ARTWORK.
 *
 * Six painted scenes across 27 suburb pages, assigned by what the place is
 * actually like rather than one per suburb.
 *
 * THE RULE ON NAMED LANDMARKS.
 * A landmark scene only ever appears on the page for the suburb that landmark
 * is in. The Singing Ship is at Emu Park, so it appears on the Emu Park page
 * and nowhere else. Causeway Lake is at Mulambin. The Brahman bull is at
 * Rockhampton. Putting a recognisable landmark on the wrong suburb's page
 * would be a false claim about a place, and locals would spot it instantly.
 *
 * Everywhere else gets one of two generic scenes chosen by housing stock: a
 * newer coastal street for the Capricorn Coast, and older timber Queenslanders
 * on stumps for the Rockhampton suburbs. Both are true of those places and
 * neither identifies a specific one.
 *
 * WHAT THESE MAY AND MAY NOT SAY.
 * A painted scene of Jason talking to locals says "we work here", which is
 * true: every suburb on this site is inside the service area confirmed in
 * /OS/company.md. It may never carry a caption asserting a job, a customer or
 * a review in that suburb. Only one photograph on the whole site names a
 * suburb, Taranganba, because it is the only documented location.
 * See src/data/photos.js and /OS/brand/photography.md.
 */

const COAST_STREET = {
  file: 'plumber-capricorn-coast-suburban-street-flowtek.jpg',
  alt: 'Painted illustration of Jason Breingan of Flowtek Services walking along a Capricorn Coast street with his tool bag, stopping to talk and laugh with a neighbour watering her front garden, the Flowtek van parked at the kerb',
};
const QUEENSLANDER = {
  file: 'plumber-rockhampton-queenslander-homes-flowtek.jpg',
  alt: 'Painted illustration of Jason Breingan of Flowtek Services at the foot of the front stairs of a high-set timber Queenslander, talking up to the owner leaning on the verandah rail',
};

/** Landmark scenes. Each one appears on its own suburb's page and no other. */
const LANDMARK = {
  'emu-park': {
    file: 'plumber-emu-park-singing-ship-flowtek-services.jpg',
    alt: 'Painted illustration of the Singing Ship memorial on the headland at Emu Park, with Jason Breingan of Flowtek Services on the path beside the Flowtek van, chatting with a local couple walking their dog',
  },
  yeppoon: {
    file: 'plumber-yeppoon-foreshore-lagoon-flowtek-services.jpg',
    alt: 'Painted illustration of the Yeppoon foreshore and swimming lagoon with the beach and Keppel islands beyond, Jason Breingan of Flowtek Services talking with an older couple sitting on a bench, the Flowtek van behind him',
  },
  rockhampton: {
    file: 'plumber-rockhampton-brahman-bull-flowtek-services.jpg',
    alt: 'Painted illustration of the Brahman bull statue on a Rockhampton roadside in hard inland sun, with Jason Breingan of Flowtek Services and the Flowtek van nearby, in conversation with two locals',
  },
  mulambin: {
    file: 'plumber-mulambin-causeway-lake-flowtek-services.jpg',
    alt: 'Painted illustration of Causeway Lake at Mulambin in the late afternoon, tinnies and kayaks pulled up on the sand, Jason Breingan of Flowtek Services talking and laughing with a local holding a fishing rod',
  },
};

/** Suburbs on the Rockhampton side, which is timber and tin on stumps. */
const ROCKY = new Set([
  'nerimbera', 'norman-gardens', 'glenmore', 'parkhurst', 'frenchville',
  'park-avenue', 'berserker', 'kawana', 'rockhampton', 'wandal',
  'the-range', 'allenstown',
]);

export function suburbArt(slug) {
  return LANDMARK[slug] ?? (ROCKY.has(slug) ? QUEENSLANDER : COAST_STREET);
}

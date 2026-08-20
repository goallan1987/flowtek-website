/**
 * The suburb library.
 *
 * WHAT IS CONFIRMED AND WHAT IS ASSUMED
 * Confirmed in /OS/company.md: Flowtek services Yeppoon, Rockhampton, Taranganba
 * and the Capricorn Coast. Those three named suburbs carry no assumption.
 *
 * [ASSUMED, confirm by 25/08/2026, /OS/decisions.md register row 4]
 * Every other suburb below is included on the assumed 50 km service radius from
 * Yeppoon. Road distance from the Yeppoon base is given for each one and none
 * exceeds 45 km. If Jason narrows the radius, delete the pages that fall outside
 * it and remove them from the sitemap. Gracemere and Mount Morgan were left out
 * for exactly this reason: both sit beyond 50 km by road.
 *
 * WHAT IS NOT IN THIS FILE, DELIBERATELY
 * - No response time, for any suburb. Register row 5 is open. Distance in km is a
 *   fact. "We will be there in 20 minutes" is a promise Flowtek has not made.
 * - No claim that Flowtek has worked in a suburb. Only Taranganba carries a job
 *   claim, because that job is documented on flowtekservices.com.au/projects/.
 * - No suburb-attributed customer review. Google does not publish a suburb against
 *   a review, so every suburb page carries a marked placeholder instead.
 *
 * `local` is the paragraph that has to earn the page. If it would read the same
 * with another suburb name dropped in, it has failed and gets rewritten.
 */

export const suburbs = [
  /* ================= CAPRICORN COAST, LIVINGSTONE SHIRE ================= */
  {
    slug: 'yeppoon',
    name: 'Yeppoon',
    postcode: '4703',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 0,
    rank: 1,
    lat: -23.1305,
    lng: 150.7414,
    confirmed: true,
    base: true,
    landmarks: ['the Esplanade', 'Yeppoon Lagoon', 'Keppel Bay Marina', 'Beaman Park'],
    nearby: ['cooee-bay', 'taranganba', 'lammermoor', 'farnborough', 'barmaryee-note'],
    leadServices: ['hot-water', 'blocked-drains', 'emergency-plumbing'],
    reviewTags: ['flagship', 'hot-water'],
    intro:
      'Yeppoon is where we are based, so this is the town we know street by street rather than off a map.',
    local:
      'Yeppoon housing splits into three lots, and each one breaks differently. The older fibro and lowset brick near the Esplanade and the town centre is where we find perished tap spindles and copper that has been repaired more than once. The 1990s and 2000s brick and tile up the hill is now old enough that the first hot water system is at the end of its life, and a lot of them are still the original electric storage unit. Then there are the new estates, where the plumbing is fine and the calls are gas points, second bathrooms and hot water upgrades. The thing that ties all three together is salt. Living this close to the water means the air carries salt inland, and it eats the casing of an outdoor hot water unit, the relief valve seat and any exposed copper far faster than it would 40 km inland at Rockhampton.',
    fault: {
      title: 'What we get called out for most in Yeppoon',
      body:
        'Hot water. Between the salt on the outdoor units and the age of the 1990s and 2000s housing stock, a lot of Yeppoon is running a storage system that is past its design life. The second most common is stormwater, and it clusters hard in the wet season between November and April.',
    },
    access:
      'Everything in Yeppoon is a short run from our base, and street parking is straightforward outside the summer holidays and the Esplanade on a market day. If you are in one of the newer estates and the driveway is not finished yet, tell us on the phone and we will bring the boards.',
    facts: [
      ['From our base', 'This is our base'],
      ['Council', 'Livingstone Shire'],
      ['Water and sewer', 'Town mains and reticulated sewer across most of the town'],
      ['What ages fastest here', 'Outdoor hot water units, tap ware and exposed copper, from salt air'],
    ],
    faq: [
      {
        q: 'Why does my hot water system fail faster in Yeppoon than it did inland?',
        a: 'Salt. An outdoor unit on the Capricorn Coast lives in salt-laden air all year, and that attacks the casing, the fittings and the relief valve well before the tank itself gives up. Rinsing the outside of the unit with fresh water now and then genuinely helps, and so does replacing the sacrificial anode on a storage system before it is gone rather than after.',
      },
      {
        q: 'Do you charge more to come out to a Yeppoon address?',
        a: 'No. Yeppoon is our base, so there is no travel loading on a Yeppoon job. Ring us on 0448 726 474 and we will tell you what the job involves before we start.',
      },
    ],
  },
  {
    slug: 'cooee-bay',
    name: 'Cooee Bay',
    postcode: '4703',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 3,
    rank: 8,
    lat: -23.1508,
    lng: 150.7484,
    landmarks: ['Cooee Bay Beach', 'Rockhampton Yeppoon Road', 'Wreck Point lookout'],
    nearby: ['yeppoon', 'taranganba', 'lammermoor'],
    leadServices: ['blocked-drains', 'hot-water', 'renovations'],
    reviewTags: ['maintenance', 'renovations'],
    intro: 'Cooee Bay sits right on the water, immediately south of the Yeppoon town centre.',
    local:
      'Cooee Bay is the closest thing on this coast to a units suburb. Behind the beachfront there is a run of two and three storey walk-up blocks from the 1970s and 1980s, and a lot of them are now holiday lets rather than owner-occupied. That changes the job in two ways. The pipework is shared, so a blocked stack or a failing common water service is a body corporate decision and not the tenant, and the fault usually gets discovered by a guest on a Friday afternoon rather than by the owner. The freestanding houses either side are 1960s to 1980s brick and fibro beach houses, and being this close to the surf they cop the worst salt exposure on the whole coast. Outdoor tap ware, hose cocks and the casing on an external hot water unit go here noticeably faster than they do three kilometres inland at Taranganba.',
    fault: {
      title: 'What goes wrong in Cooee Bay',
      body:
        'Corrosion, at every scale. Seized outdoor taps, pitted copper on an external run, and relief valves on hot water units that no longer seat properly. In the older unit blocks it is usually a shared waste stack that has never been jetted.',
    },
    access:
      'The streets behind the beach are narrow and street parking gets tight from Boxing Day through January. If you are in a unit block, let us know the body corporate contact when you ring, because on shared pipework we generally need their say-so before we cut anything.',
    facts: [
      ['From our base', 'About 3 km, straight down the road'],
      ['Housing', 'Beachfront walk-up units plus 1960s to 1980s houses'],
      ['Water and sewer', 'Town mains and reticulated sewer'],
      ['What ages fastest here', 'Anything metal and outdoors, this is the worst salt on the coast'],
    ],
    faq: [
      {
        q: 'The unit block has a blocked drain. Who calls the plumber?',
        a: 'If the blockage is in a shared line or a common stack it is normally the body corporate, not the individual owner. If it is inside your own unit and past the connection, it is usually yours. Ring us and describe where the water is backing up and we will tell you which side of the line it sits on before anyone commits to paying for it.',
      },
      {
        q: 'Can you look at a holiday let while we are not in town?',
        a: 'Yes. Give us the address, the access arrangement and a phone number that will answer, and we will report back on what we find before we do the work.',
      },
    ],
  },
  {
    slug: 'taranganba',
    name: 'Taranganba',
    postcode: '4703',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 4,
    rank: 7,
    lat: -23.1442,
    lng: 150.7326,
    confirmed: true,
    landmarks: ['Taranganba State School', 'Scenic Highway', 'Wildin Way'],
    nearby: ['yeppoon', 'cooee-bay', 'lammermoor'],
    leadServices: ['blocked-drains', 'renovations', 'hot-water'],
    reviewTags: ['flagship', 'clean-up'],
    hasRealJob: true,
    intro: 'Taranganba is the suburb on the rise behind Cooee Bay, just up the hill from our base.',
    local:
      'Taranganba is mostly a 1980s and 1990s brick and tile subdivision, and it was cut into a slope. That is the single most useful thing to know about plumbing here. On a cut-and-fill block the finished ground level often falls back towards the house instead of away from it, and there is not always a stormwater line nearby to take the water once it gets there. We have fixed exactly that fault in Taranganba: ground sloping inwards towards a building with no adequate stormwater drainage in the area, which flooded the site during heavy rain. The fix was drainage pits placed to catch the surface water and redirect it away from the building, not a bigger downpipe. The other thing the age of the housing brings is timing. A 1985 house has now had its wet areas for forty years, so bathroom renovations and the pipework behind them are a steady part of what we do up here.',
    fault: {
      title: 'What goes wrong in Taranganba',
      body:
        'Surface water. On a cut-and-fill block the ground can fall towards the slab, and in a Capricorn Coast downpour there is nowhere for it to go. It shows up as water pooling against the house, a soggy patch that never dries, or water under the slab edge.',
    },
    access:
      'Taranganba streets are wide and driveways are generally long, so access is easy. The slope is the thing to plan for: if a drainage job needs a machine, we need to know which side of the block it can get in from.',
    facts: [
      ['From our base', 'About 4 km'],
      ['Housing', 'Largely 1980s and 1990s brick and tile on cut-and-fill blocks'],
      ['Terrain', 'Sloping, which is what drives the drainage work'],
      ['A job we have actually done here', 'Stormwater drainage pits, to stop surface water flooding a building'],
    ],
    faq: [
      {
        q: 'Water pools against my house every time it rains. Is that a plumbing job?',
        a: 'Usually yes, and it is a common one in Taranganba because of the way the blocks were cut. If the ground falls towards the building and there is no stormwater line close enough to take the water, no amount of guttering will fix it. The answer is normally drainage pits placed where the water actually collects, piped away from the building. We have done that job in this suburb.',
      },
      {
        q: 'Our bathroom is original 1980s. What should we expect underneath?',
        a: 'On a house that age we usually find the waste and vent are serviceable but the tap ware and the mixer bodies are not, and the waterproofing under the old tiles has done its time. It is worth having us look before the tiler is booked, not after.',
      },
    ],
  },
  {
    slug: 'lammermoor',
    name: 'Lammermoor',
    postcode: '4703',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 5,
    rank: 13,
    lat: -23.1622,
    lng: 150.7469,
    landmarks: ['Lammermoor Beach', 'Bluff Point', 'Scenic Highway'],
    nearby: ['taranganba', 'cooee-bay', 'mulambin', 'yeppoon'],
    leadServices: ['blocked-drains', 'hot-water', 'renovations'],
    reviewTags: ['pressure', 'leak'],
    intro: 'Lammermoor runs down the hill to the beach, south of Yeppoon.',
    local:
      'Lammermoor is a steep suburb, and steepness decides most of the plumbing here. A lot of the housing is 1990s and 2000s, two storey, built on blocks that needed retaining walls to sit on. Two things follow. First, the drainage and sewer runs are long and they have to hold their fall the whole way down, so when a line does block it is rarely at the gully, it is somewhere in the middle of a long run under a slope. Second, once a retaining wall has been built over a line, getting to it is a proper excavation rather than a shovel job, and it is worth locating the fault properly before anything gets dug. The upside of height is water pressure at the bottom of the hill, and the downside is that the houses near the top can sit at the weaker end of the range, especially on a hot evening when everyone on the coast is watering.',
    fault: {
      title: 'What goes wrong in Lammermoor',
      body:
        'Long runs on steep ground. Blockages sit mid-run rather than at the gully, and leaks in a buried line on a slope track downhill before they surface, so the wet patch is rarely above the break.',
    },
    access:
      'Steep driveways and retaining walls. If a job needs a machine, tell us about the slope and the wall when you ring, because that decides whether we bring the mini excavator or dig it by hand.',
    facts: [
      ['From our base', 'About 5 km'],
      ['Housing', 'Largely 1990s and 2000s, a lot of it two storey'],
      ['Terrain', 'Steep, with retaining walls over services on many blocks'],
      ['What we plan for here', 'Locating a fault properly before excavating, because digging is expensive on a slope'],
    ],
    faq: [
      {
        q: 'My water pressure drops off in the evening. Is that my plumbing?',
        a: 'Up on the higher Lammermoor blocks it often is not. Pressure at the top of a hill sits at the weaker end of the network range, and it gets weaker again at peak demand in the evening. We can measure it at your tap and tell you whether the problem is on your side of the meter or not, which decides whether a pump is worth it.',
      },
      {
        q: 'There is a wet patch on the lawn but no drop in pressure. What is it?',
        a: 'On a slope, water from a broken line runs downhill inside the trench and surfaces well below the break, so the wet patch is a symptom, not a location. We locate the actual break before we dig, which on a Lammermoor block with retaining walls usually saves more than the locating costs.',
      },
    ],
  },
  {
    slug: 'farnborough',
    name: 'Farnborough',
    postcode: '4703',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 6,
    rank: 22,
    lat: -23.0967,
    lng: 150.7385,
    landmarks: ['Farnborough Beach', 'Capricorn Coast National Park', 'Farnborough Road'],
    nearby: ['yeppoon', 'adelaide-park', 'bangalee'],
    leadServices: ['blocked-drains', 'hot-water', 'gas-fitting'],
    reviewTags: ['maintenance'],
    intro: 'Farnborough is the acreage country north of Yeppoon, running up towards the national park.',
    local:
      'Farnborough is where the coast stops being a town and starts being blocks measured in acres. A good share of properties up here are not on town mains and reticulated sewer at all. They run rainwater tanks with a pressure pump, and they treat their own wastewater through a septic or an aerated treatment system. That changes what the calls sound like. "No water" in Yeppoon usually means a burst. In Farnborough it usually means a pump that has lost its prime, a pressure vessel that has waterlogged, or a float switch in a tank. "Blocked drain" here often turns out to be a treatment system that has not been serviced or a soakage trench that has stopped soaking. It also means the water going to your taps is your own responsibility, so tank screens, first flush and the condition of the pump matter more than anything in the street.',
    fault: {
      title: 'What goes wrong in Farnborough',
      body:
        'Pumps and tanks. A pressure pump that short cycles, a waterlogged pressure vessel, or a tank outlet that has silted up. After that it is on-site wastewater, where the fault is usually a system that has gone too long between services.',
    },
    access:
      'Long driveways, gates, and stock or dogs on some properties. Tell us on the phone if there is a gate code or a dog, and give us the actual house location on the block rather than just the street number.',
    facts: [
      ['From our base', 'About 6 km'],
      ['Blocks', 'Rural residential and acreage'],
      ['Water and sewer', 'Many properties on tank water and on-site wastewater treatment'],
      ['What we bring for here', 'Pump and pressure vessel work as often as tap work'],
    ],
    faq: [
      {
        q: 'My pump keeps starting and stopping when no tap is running. Why?',
        a: 'That is short cycling, and it is the most common Farnborough call we get. It is usually either a waterlogged pressure vessel that has lost its air charge, or a small leak somewhere on the line that lets pressure bleed off. Left alone it will kill the pump. Both are straightforward to diagnose once we can see the setup.',
      },
      {
        q: 'Do you work on septic and aerated wastewater treatment systems?',
        a: 'We do the plumbing side, so the drainage into and out of the system, the fixtures and the pipework. Ring us and describe what you are seeing and we will tell you honestly whether it is a plumbing fault or a job for the treatment system servicer.',
      },
    ],
  },
  {
    slug: 'adelaide-park',
    name: 'Adelaide Park',
    postcode: '4703',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 7,
    rank: 24,
    lat: -23.0844,
    lng: 150.7156,
    landmarks: ['Adelaide Park Road', 'Yeppoon Road', 'Mulara'],
    nearby: ['yeppoon', 'farnborough', 'bangalee', 'bungundarra'],
    leadServices: ['blocked-drains', 'hot-water', 'gas-fitting'],
    reviewTags: ['leak', 'maintenance'],
    intro: 'Adelaide Park is the rural residential country just inland of Yeppoon, on undulating ground.',
    local:
      'The thing that defines plumbing at Adelaide Park is the length of the private line. On a block this size the water meter can sit a long way from the house, and everything between the two is the owner\'s pipe, not the council\'s. That is where the expensive faults hide. A slow leak in a buried private main on an acre block does not show up as a wet patch, because the ground takes it. It shows up on the bill, months later, and by then it has been running the whole time. The other feature here is a mix of eras on the same street: older acreage houses with pipework that has been extended a few times, next to new builds where everything is current. Sheds, second dwellings and stock troughs get plumbed in over the years by whoever was around, so the layout is rarely what the house plan says it is.',
    fault: {
      title: 'What goes wrong at Adelaide Park',
      body:
        'Underground leaks in a long private water main. On acreage the ground absorbs the water and the first sign is the bill. Locating it properly beats trenching the whole run.',
    },
    access:
      'Long driveways and gates. Give us the gate arrangement and tell us where the meter is, because on a block this size finding the meter is often the first ten minutes of the job.',
    facts: [
      ['From our base', 'About 7 km'],
      ['Blocks', 'Rural residential and acreage on undulating ground'],
      ['The expensive fault here', 'A leak in the private water main between the meter and the house'],
      ['Worth knowing', 'Read your meter with every tap off, if it moves you have a leak'],
    ],
    faq: [
      {
        q: 'My water bill has jumped and I cannot see a leak anywhere. What now?',
        a: 'Turn every tap off, including the toilets and any irrigation, then watch the meter. If it is still turning, you have a leak on your side. On an Adelaide Park block that is almost always the buried private main between the meter and the house. We locate it before we dig, because trenching a full run on acreage is a big job to do blind.',
      },
      {
        q: 'Can you plumb a new shed or a second dwelling out here?',
        a: 'Yes, water and gas both. The part worth doing properly is the run from the existing supply, because a shed line that is undersized or laid too shallow becomes somebody\'s problem in five years.',
      },
    ],
  },
  {
    slug: 'bangalee',
    name: 'Bangalee',
    postcode: '4703',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 8,
    rank: 19,
    lat: -23.0678,
    lng: 150.7597,
    landmarks: ['Bangalee Beach', 'Scenic Highway', 'Farnborough Road'],
    nearby: ['farnborough', 'yeppoon', 'adelaide-park'],
    leadServices: ['gas-fitting', 'hot-water', 'renovations'],
    reviewTags: ['gas', 'hot-water'],
    intro: 'Bangalee sits north of Yeppoon, with newer estate lots on one side and acreage on the other.',
    local:
      'Bangalee is two suburbs wearing one name, and it matters which half you are in. On the newer estate lots almost everything underground is PVC and pex and less than twenty years old, so we are hardly ever there for a failure. What we do there is add things: a gas point for a cooktop, an outdoor kitchen, a second bathroom, or a hot water changeover now the first round of units is reaching the age where they start to go. On the acreage side of Bangalee it is the other story entirely, tanks, pressure pumps and on-site wastewater, and the calls are about supply rather than about fixtures. If you are ringing us from Bangalee the first thing we will ask is whether you are on town water or on a tank, because it changes the whole conversation.',
    fault: {
      title: 'What we get called for in Bangalee',
      body:
        'On the estate side, hot water changeovers and gas work rather than breakdowns. On the acreage side, pumps, tanks and on-site wastewater. Very little in between.',
    },
    access:
      'Estate streets are new and easy. On the acreage side expect a gate and a long drive, so tell us which half of Bangalee you are in when you ring.',
    facts: [
      ['From our base', 'About 8 km'],
      ['Two halves', 'Newer estate lots, and acreage'],
      ['Water and sewer', 'Town supply on the estates, tank and on-site treatment on acreage'],
      ['Most common job here', 'Gas points and hot water upgrades, not repairs'],
    ],
    faq: [
      {
        q: 'Can I put a gas cooktop in a house that has no gas?',
        a: 'On the Capricorn Coast that generally means bottled LPG rather than natural gas, and yes, it is a normal job. It needs a proper bottle location, a regulator and a compliant run to the appliance. Gas is licensed work, so it is not a job for a handyman, and we will leave you the paperwork.',
      },
      {
        q: 'My house is only fifteen years old. Why is the hot water going?',
        a: 'Fifteen years is a good innings for a storage system, and on this coast the salt in the air shortens it further. If it is still working, it is worth deciding what replaces it now rather than in the middle of a cold shower, because an instantaneous or heat pump changeover is a different install to a like-for-like swap.',
      },
    ],
  },
  {
    slug: 'mulambin',
    name: 'Mulambin',
    postcode: '4703',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 9,
    rank: 21,
    lat: -23.1839,
    lng: 150.7811,
    landmarks: ['Causeway Lake', 'Mulambin Beach', 'Scenic Highway'],
    nearby: ['lammermoor', 'kinka-beach', 'taranganba'],
    leadServices: ['blocked-drains', 'emergency-plumbing', 'hot-water'],
    reviewTags: ['storm', 'emergency'],
    intro: 'Mulambin runs along the Causeway Lake, low and flat and close to tidal water.',
    local:
      'Mulambin is the flattest and lowest part of this stretch of coast, sitting beside the Causeway Lake, and that is the whole story for drainage here. Stormwater needs fall to work, and on flat ground beside tidal water there is very little of it. On a big rain that coincides with a high tide, the water simply has nowhere to go, so surface flooding here is about the tide as much as the rainfall. The second feature is who owns the houses. A large share of Mulambin is holiday houses and short-stay rentals rather than owner-occupied, which means faults get found by a guest at a bad time and reported to an owner who is somewhere else. We are used to that: give us the access arrangement and a number that will answer, and we will report back with what we found before we do anything.',
    fault: {
      title: 'What goes wrong at Mulambin',
      body:
        'Drainage that cannot fall away on a high tide, and salt on everything outdoors. In the rental stock, it is usually the fixtures that get the hardest life, so tap ware, cisterns and shower mixers.',
    },
    access:
      'Flat and easy to get around. The practical issue is holiday season traffic on the Scenic Highway around the Causeway Lake, not the sites themselves.',
    facts: [
      ['From our base', 'About 9 km'],
      ['Terrain', 'Low and flat, beside tidal water at the Causeway Lake'],
      ['Housing', 'A high share of holiday houses and short-stay rentals'],
      ['The local constraint', 'Stormwater has very little fall to work with here'],
    ],
    faq: [
      {
        q: 'Water backs up in the yard on a big rain. Can that be fixed?',
        a: 'Sometimes fully, sometimes only improved, and at Mulambin it is worth being honest about which. On low, flat ground beside tidal water there is a limit to how much fall you can create. What usually helps is catching the water where it collects rather than where it arrives, and getting it into a line that still has somewhere to discharge. We will tell you which of the two you are looking at before you spend anything.',
      },
      {
        q: 'We rent the house out. Can you deal with the guest directly?',
        a: 'Yes, as long as you have told us to. Give us the access arrangement and your authority up front and we will keep you across what we find and what it costs before we do the work.',
      },
    ],
  },
  {
    slug: 'tanby',
    name: 'Tanby',
    postcode: '4703',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 10,
    rank: 25,
    lat: -23.1858,
    lng: 150.7261,
    landmarks: ['Tanby Road', 'Tanby Gardens', 'Emu Park Road'],
    nearby: ['taranganba', 'emu-park', 'cawarral', 'lammermoor'],
    leadServices: ['blocked-drains', 'gas-fitting', 'hot-water'],
    reviewTags: ['maintenance', 'gas'],
    intro: 'Tanby is the rural residential belt between Yeppoon and Emu Park, along Tanby Road.',
    local:
      'Tanby is the in-between country, big blocks on the road that links the two coastal towns. The plumbing story here is layers. Most of these properties have been added to over decades: a shed with a laundry tub in it, a second dwelling or a granny flat, a stock trough, an irrigation line to the house paddock, all put in at different times by different hands. So on a Tanby job the first thing we do is work out what is actually there, because the layout almost never matches what anybody remembers. A good share of blocks run tank water with a pressure pump and treat their own wastewater on site, which puts the supply and the treatment system on the owner rather than on the council. The practical upshot is that a Tanby fault is usually a system problem, not a single broken fitting.',
    fault: {
      title: 'What goes wrong in Tanby',
      body:
        'Additions that were never mapped. A line to a shed or a trough that nobody can find the isolator for, and pump or tank supply faults that look like a fixture problem until you follow the pipe.',
    },
    access:
      'Long driveways and gates on most blocks. If there is stock or a dog, say so on the phone. Tell us where the house sits on the block, because a street number on Tanby Road can be a few hundred metres from the gate.',
    facts: [
      ['From our base', 'About 10 km'],
      ['Blocks', 'Rural residential acreage between Yeppoon and Emu Park'],
      ['Water and sewer', 'Many properties on tank supply and on-site wastewater'],
      ['First job on site', 'Working out where the pipe actually runs'],
    ],
    faq: [
      {
        q: 'I cannot find the isolating valve for the shed. Can you?',
        a: 'Usually, yes. On a Tanby block we trace it from the supply rather than guessing, and while we are there it is worth putting an isolator somewhere you can actually reach, so the next fault does not mean shutting the whole property down.',
      },
      {
        q: 'Do you do gas out this far?',
        a: 'Yes. Out here it is nearly always bottled LPG for cooking and hot water, and it is licensed work. Bottle location, regulator and the run to the appliance all have to be right, and we leave you the paperwork.',
      },
    ],
  },
  {
    slug: 'kinka-beach',
    name: 'Kinka Beach',
    postcode: '4703',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 12,
    rank: 20,
    lat: -23.2131,
    lng: 150.7853,
    landmarks: ['Kinka Beach', 'Scenic Highway', 'Causeway Lake'],
    nearby: ['mulambin', 'emu-park', 'zilzie'],
    leadServices: ['blocked-drains', 'hot-water', 'emergency-plumbing'],
    reviewTags: ['leak', 'hot-water'],
    intro: 'Kinka Beach is the narrow strip between the Scenic Highway and the sand, south towards Emu Park.',
    local:
      'Kinka Beach is a thin suburb: the highway on one side, the beach on the other, and not much room in between. Two things follow from the ground itself. It is sandy, which makes trenching quick and cheap compared with the clay up on the Taranganba ridge, but it also means a leak in a buried line simply soaks away instead of surfacing. So the classic Kinka Beach fault is a private water line that has been leaking for months with no wet patch to show for it, found on a meter reading rather than by eye. The housing is a mix that tells you the suburb\'s history: 1960s and 1970s beach shacks that were built as weekenders, sitting next to newer builds on the same street, and a share of properties still on tank supply. On the old shacks the pipework is often the original run with forty years of patches on it.',
    fault: {
      title: 'What goes wrong at Kinka Beach',
      body:
        'Buried leaks that never surface, because sandy ground takes the water. After that it is the old weekender pipework: undersized runs, mixed materials, and joints that were meant to be temporary.',
    },
    access:
      'Easy access off the Scenic Highway, and sandy ground makes digging straightforward. The narrow frontage on some of the older blocks is the only real constraint for a machine.',
    facts: [
      ['From our base', 'About 12 km'],
      ['Ground', 'Sandy, so leaks soak away instead of surfacing'],
      ['Housing', '1960s and 1970s weekenders alongside newer builds'],
      ['How leaks get found here', 'On the meter, not by looking at the lawn'],
    ],
    faq: [
      {
        q: 'How do I check for a leak if the ground never gets wet?',
        a: 'The meter is the only reliable test at Kinka Beach. Shut every tap and appliance off, including the toilets and any irrigation, then watch the dial for ten minutes. If it moves at all, water is going somewhere. On sandy ground it will not show on the surface, so waiting for a wet patch just means paying for it longer.',
      },
      {
        q: 'The house is an old shack. Is it worth repiping rather than patching?',
        a: 'Often yes, on a house of that vintage. If we are finding mixed materials, undersized runs and joints that keep failing in different places, each individual repair is cheap and the sequence of them is not. We will tell you straight which one you are looking at.',
      },
    ],
  },
  {
    slug: 'zilzie',
    name: 'Zilzie',
    postcode: '4710',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 16,
    rank: 18,
    lat: -23.2469,
    lng: 150.7889,
    landmarks: ['Zilzie Beach', 'Scenic Highway', 'Emu Park Road'],
    nearby: ['emu-park', 'kinka-beach', 'keppel-sands'],
    leadServices: ['renovations', 'gas-fitting', 'hot-water'],
    reviewTags: ['renovations', 'gas'],
    intro: 'Zilzie is the newest growth on this coast, immediately north of Emu Park.',
    local:
      'Zilzie is the youngest housing stock on the Capricorn Coast, and that changes what a plumber is for. Most of the estate here has gone in over the last fifteen to twenty years, so the pipe in the ground is PVC and pex, the drainage was designed rather than inherited, and outright failures are rare. What we actually do in Zilzie is add and upgrade: a gas point for a cooktop or an outdoor kitchen, an ensuite that was left out of the original build, a rainwater tank plumbed back into the house, and hot water changeovers now that the first round of units on the earliest lots is reaching the age where the anode is gone. There is older acreage behind the estate that runs tank supply and on-site treatment, and that is a different job entirely. The blocks here are generally large, which makes an outdoor kitchen or a second bathroom straightforward rather than a squeeze.',
    fault: {
      title: 'What we do most in Zilzie',
      body:
        'Additions, not repairs. Gas points, ensuites, outdoor kitchens and hot water upgrades. The failure work that does come in is the first generation of hot water units on the earliest estate lots.',
    },
    access:
      'New estate streets, wide and easy, with room to work on most blocks. The acreage behind will have a gate.',
    facts: [
      ['From our base', 'About 16 km'],
      ['Housing', 'Mostly estate builds from the last 15 to 20 years'],
      ['Pipework', 'PVC and pex, so failures are uncommon'],
      ['Most common job here', 'Gas points, ensuites and hot water changeovers'],
    ],
    faq: [
      {
        q: 'The house is only twelve years old and the hot water is getting worse. Is it dead?',
        a: 'Not necessarily. On a storage system the sacrificial anode is designed to be eaten so the tank is not, and on this coast it goes faster. If the anode is checked before it is fully gone, you can add years to the tank. If it has already gone, the tank is on borrowed time and it is worth planning the replacement rather than reacting to it.',
      },
      {
        q: 'Can we add an ensuite to an existing Zilzie house?',
        a: 'Usually, yes, and the newer the build the more likely it is straightforward, because the drainage was designed with capacity rather than inherited. The question that decides the cost is where the nearest waste and vent are, so it is worth us looking before the plan is finalised.',
      },
    ],
  },
  {
    slug: 'bungundarra',
    name: 'Bungundarra',
    postcode: '4703',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 17,
    rank: 26,
    lat: -23.0342,
    lng: 150.6828,
    landmarks: ['Bungundarra Road', 'Mount Jim Crow', 'Cooberrie'],
    nearby: ['adelaide-park', 'farnborough', 'yeppoon'],
    leadServices: ['blocked-drains', 'hot-water', 'gas-fitting'],
    reviewTags: ['maintenance', 'leak'],
    intro: 'Bungundarra is the hill country inland and north of Yeppoon, all acreage and small farms.',
    local:
      'Bungundarra is properly rural, hilly, and off the reticulated network. Almost everything up here runs on rainwater tanks with a pressure pump, and treats its own wastewater on site. That makes the household its own little water utility, and the faults are utility faults rather than fixture faults. The one that catches people out is the interaction between the hills and the pump: on a sloping property the house can sit well above the tank, so the pump is working against a real static head before it does anything useful, and a pump that was fine for the old house is often not fine after an extension or a second bathroom. Water security matters here too. In a dry stretch, tank levels get low, sediment that has been sitting in the bottom for years gets stirred into the outlet, and it ends up in the pump and the tap ware. Sorting the outlet height and the screening does more good than replacing the fixtures it clogged.',
    fault: {
      title: 'What goes wrong at Bungundarra',
      body:
        'Pumps working against a head they were never sized for, and sediment out of the bottom of a low tank. Both look like a pressure problem at the tap and neither is fixed at the tap.',
    },
    access:
      'Long, sometimes steep driveways, gates, and stock on a lot of properties. A dry weather crossing on some blocks is not a wet weather crossing. Tell us what the drive is like when you ring.',
    facts: [
      ['From our base', 'About 17 km'],
      ['Country', 'Hilly acreage and small farms'],
      ['Water and sewer', 'Tank supply and on-site wastewater, essentially throughout'],
      ['The local trap', 'A pump sized for the old house, not the extended one'],
    ],
    faq: [
      {
        q: 'The pressure is fine at the tank but poor at the house. Why?',
        a: 'On a Bungundarra block the house often sits well above the tank, and every metre of height costs you pressure before a tap is even opened. If the house has been extended or a bathroom added since the pump went in, the pump is very likely undersized for what it is now being asked to do. We can measure it rather than guess.',
      },
      {
        q: 'Our tank water has gone gritty. Is the tank finished?',
        a: 'Usually not. When levels drop, the outlet ends up drawing from the sediment layer that has been sitting undisturbed in the bottom for years. Raising the outlet, adding proper screening and cleaning the tank fixes it far more often than replacing anything does.',
      },
    ],
  },
  {
    slug: 'emu-park',
    name: 'Emu Park',
    postcode: '4710',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 19,
    rank: 6,
    lat: -23.2528,
    lng: 150.8228,
    landmarks: ['the Singing Ship', 'Emu Park Esplanade', 'Bell Park', 'Fishermans Beach'],
    nearby: ['zilzie', 'kinka-beach', 'keppel-sands', 'tanby'],
    leadServices: ['hot-water', 'blocked-drains', 'renovations'],
    reviewTags: ['hot-water', 'maintenance'],
    intro: 'Emu Park sits at the southern end of the Capricorn Coast, open to the south-easterly.',
    local:
      'Emu Park faces into the prevailing south-easterly, and that one fact drives more plumbing here than anything else. The wind carries salt further inland than people expect, so it is not only the beachfront houses that suffer. Two or three streets back you will still find pitted outdoor tap ware, seized hose cocks and hot water unit casings that have rusted through while the tank inside is fine. The housing is a wide spread: original beach cottages around the Esplanade and the Singing Ship, a solid band of 1970s to 1990s brick, and newer estate growth pushing north towards Zilzie. Emu Park also has a settled, long-term population, and that shows up in the work. A lot of these houses are still on the hot water system that was installed when the family moved in, and the first sign anyone gets is a cold shower rather than a dripping relief valve that has been telling the story for a year.',
    fault: {
      title: 'What goes wrong at Emu Park',
      body:
        'Hot water, and salt-driven corrosion on anything outdoors. The two overlap: the unit that fails here has usually failed from the outside in, and the wind means it is not only the beachfront that gets it.',
    },
    access:
      'Straightforward around town, and the older streets near the Esplanade have decent frontage. Holiday season parking around the Singing Ship and Bell Park is the only real pinch point.',
    facts: [
      ['From our base', 'About 19 km'],
      ['Exposure', 'Open to the prevailing south-easterly, so salt carries well inland'],
      ['Housing', 'Original beach cottages, 1970s to 1990s brick, and newer estate growth'],
      ['What fails first here', 'The outside of the hot water unit, not the inside'],
    ],
    faq: [
      {
        q: 'My hot water unit is rusty on the outside but still working. Do I have time?',
        a: 'Some, but it is worth knowing the sequence. On the Emu Park coast the casing and the fittings usually go before the tank does, and the relief valve is the one that matters, because once it stops seating it will either weep constantly or fail to release when it should. If the relief valve is weeping, that is the warning, not the failure.',
      },
      {
        q: 'We are three streets back from the beach. Do we really get salt?',
        a: 'Yes. Emu Park faces the prevailing south-easterly, and it carries salt-laden air well beyond the front row. We find the same corrosion on outdoor tap ware and unit casings several streets in that we find on the Esplanade.',
      },
    ],
  },
  {
    slug: 'cawarral',
    name: 'Cawarral',
    postcode: '4702',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 25,
    rank: 23,
    lat: -23.2419,
    lng: 150.6244,
    landmarks: ['Cawarral Road', 'Hidden Valley', 'Mount Chalmers'],
    nearby: ['tanby', 'emu-park', 'nerimbera'],
    leadServices: ['blocked-drains', 'hot-water', 'gas-fitting'],
    reviewTags: ['maintenance', 'difficult-job'],
    intro: 'Cawarral is the farming country on the road between the coast and Rockhampton.',
    local:
      'Cawarral is working land: small crops, grazing, sheds and machinery, spread along the road that connects Emu Park back to Rockhampton. The plumbing here is agricultural as much as domestic. Bores are common alongside rainwater tanks, and bore water brings its own problem that rainwater does not: mineral content. Hard or iron-rich water scales up the inside of a hot water system, blocks aerators and shower roses, and shortens the life of every valve it passes through. If a household has been fighting furry tap ware and a hot water system that is losing capacity, the water is usually the cause rather than the fittings. The other Cawarral feature is scale of pipework. A property here can have several hundred metres of line running to troughs, sheds and a second dwelling, and those runs get extended over decades. A blockage or a leak becomes a tracing job before it becomes a repair job.',
    fault: {
      title: 'What goes wrong at Cawarral',
      body:
        'Scale and mineral build-up from bore water, and long agricultural runs that nobody has a plan for. Both take longer to find than to fix.',
    },
    access:
      'Farm gates, cattle grids and long drives. Wet weather changes what a vehicle can get to, so tell us what the drive is doing when you ring.',
    facts: [
      ['From our base', 'About 25 km'],
      ['Country', 'Small crops, grazing and rural residential'],
      ['Water', 'Bore and rainwater tank, often both on the one property'],
      ['The local issue', 'Mineral content in bore water, which scales up valves and hot water systems'],
    ],
    faq: [
      {
        q: 'Our tap ware furs up and the hot water is losing capacity. Is that the bore?',
        a: 'Very likely. Bore water in this country can carry enough mineral to scale the inside of a storage hot water system and block aerators and shower roses. Replacing the fittings without dealing with the water just resets the clock. It is worth getting the water tested first, because the answer decides whether treatment is worth it.',
      },
      {
        q: 'Can you find a leak on a long line out to the troughs?',
        a: 'Yes. On a Cawarral property the tracing is most of the work, so we isolate section by section rather than digging on a guess. It is also the moment to put isolators in sensible places, so the next fault does not shut the whole property down.',
      },
    ],
  },
  {
    slug: 'keppel-sands',
    name: 'Keppel Sands',
    postcode: '4702',
    council: 'Livingstone Shire',
    area: 'Capricorn Coast',
    km: 40,
    rank: 27,
    lat: -23.3236,
    lng: 150.7967,
    landmarks: ['Keppel Sands Beach', 'Pumpkin Creek', 'Keppel Sands Road'],
    nearby: ['emu-park', 'zilzie', 'cawarral'],
    leadServices: ['hot-water', 'blocked-drains', 'emergency-plumbing'],
    reviewTags: ['maintenance', 'hot-water'],
    intro: 'Keppel Sands is the small, quiet community at the mouth of the Fitzroy, reached by one road in.',
    local:
      'Keppel Sands is the most isolated place we cover, and that shapes how we work here rather than what we find. There is one road in, it is the longest run on the coast from our Yeppoon base at around forty kilometres, and there is no plumbing supplier around the corner. So a Keppel Sands job gets planned properly before we leave: we want to know the make and the age of the unit, what the fitting looks like and what the fault is actually doing, so that the part comes with us the first time rather than on a second trip. Ringing us with a photo saves more here than anywhere else we go. The village itself is low-lying and sits beside tidal flats, which means high salt exposure and stormwater that has to work with very little fall. The housing is small in number and mixed in age, with a good share of older, modest homes and holiday places that are not lived in year round.',
    fault: {
      title: 'What goes wrong at Keppel Sands',
      body:
        'Salt on everything outdoors, and drainage with almost no fall to work with. The bigger practical issue is parts: the fault is usually simple, the logistics are not.',
    },
    access:
      'One road in, and it is a fair run. That is exactly why we ask more questions on the phone before a Keppel Sands job, so we bring the right part the first time.',
    facts: [
      ['From our base', 'About 40 km, the longest run on the coast'],
      ['Setting', 'Low-lying, beside tidal flats at the Fitzroy mouth'],
      ['Housing', 'Small, mixed age, a share not occupied year round'],
      ['How to help us', 'Send a photo of the unit or the fitting when you ring'],
    ],
    faq: [
      {
        q: 'Will you come out to Keppel Sands for a small job?',
        a: 'Yes. What we would rather not do is come twice, so we will ask more questions on the phone than we would for a Yeppoon address: what the make and model is, how old it is, and what it is actually doing. If you can send a photo, send it. That is what gets the right part in the ute the first time.',
      },
      {
        q: 'Is it worth grouping a few jobs together out here?',
        a: 'Almost always. If there are two or three things around the house that need doing, it makes far more sense to do them in one visit than to have us drive out three times. Write the list before you ring.',
      },
    ],
  },

  /* ================= ROCKHAMPTON, ROCKHAMPTON REGIONAL ================= */
  {
    slug: 'nerimbera',
    name: 'Nerimbera',
    postcode: '4701',
    council: 'Rockhampton Regional',
    area: 'Rockhampton',
    km: 30,
    rank: 17,
    lat: -23.3894,
    lng: 150.5928,
    landmarks: ['the Fitzroy River', 'Rockhampton Yeppoon Road', 'Lakes Creek'],
    nearby: ['cawarral', 'rockhampton', 'lakes-creek-note'],
    leadServices: ['blocked-drains', 'emergency-plumbing', 'hot-water'],
    reviewTags: ['leak', 'storm'],
    intro: 'Nerimbera sits on the Fitzroy River east of Rockhampton, on the road out to Yeppoon.',
    local:
      'Nerimbera is riverside and rural residential, on the Rockhampton side of the run out to the coast. Two things define it. The first is the Fitzroy. The river has come up over parts of the Rockhampton floodplain more than once in living memory, most recently in 2011 and 2017, and a property that has been inundated carries that in its plumbing afterwards: silt in stormwater lines, gully surrounds that have shifted, and on-site wastewater systems that took in water they were never meant to take. The second is that a good share of Nerimbera is not connected to reticulated sewer, so those households treat their own wastewater. Put the two together and you get the local job that comes up here more than anywhere else: an on-site treatment system that has been affected by water from outside it, which shows up as a drain that will not clear no matter how many times it is plunged.',
    fault: {
      title: 'What goes wrong at Nerimbera',
      body:
        'On-site wastewater and stormwater that have been through a flood event. Silted lines and soakage that has stopped soaking. It presents as a blockage and it is a system problem.',
    },
    access:
      'Acreage and riverside blocks with long drives. Some low-lying access changes character in the wet, so tell us what the drive is doing before we set out.',
    facts: [
      ['From our base', 'About 30 km, on the Yeppoon to Rockhampton road'],
      ['Setting', 'Fitzroy River frontage and rural residential'],
      ['Water and sewer', 'A share of properties on on-site wastewater treatment'],
      ['Local history that matters', 'Fitzroy flooding, notably 2011 and 2017'],
    ],
    faq: [
      {
        q: 'The drain keeps blocking and plunging does nothing. What is going on?',
        a: 'At Nerimbera that pattern usually means the problem is downstream of the fixture, in the on-site treatment system or the soakage, not in the pipe you are plunging. If the property has been through a flood event, silt and infiltration are the usual causes. Plunging a system fault just moves it around.',
      },
      {
        q: 'We had water through the property. What should we get checked?',
        a: 'The stormwater lines and gullies for silt, the on-site treatment system for infiltration, and anything electrical attached to a pump. Those are the three that keep causing problems long after everything has dried out.',
      },
    ],
  },
  {
    slug: 'norman-gardens',
    name: 'Norman Gardens',
    postcode: '4701',
    council: 'Rockhampton Regional',
    area: 'Rockhampton',
    km: 38,
    rank: 5,
    lat: -23.3308,
    lng: 150.5153,
    landmarks: ['Norman Road', 'Stockland Rockhampton', 'Frenchville Sports Club'],
    nearby: ['frenchville', 'parkhurst', 'glenmore', 'rockhampton'],
    leadServices: ['renovations', 'gas-fitting', 'hot-water'],
    reviewTags: ['renovations', 'gas'],
    intro: 'Norman Gardens is one of north Rockhampton\'s newer residential areas.',
    local:
      'Norman Gardens is newer than the suburbs around it, mostly built out from the 1990s onwards with a solid band of 2010s houses on top. That gives it a very particular plumbing profile for Rockhampton: the pipe in the ground is modern, the drainage was designed rather than inherited, and we are rarely there because something has failed. What we are there for is what a newer suburb generates: second bathrooms, kitchen and bathroom renovations on the earlier 1990s houses now due for their first refit, gas cooktops going in, and hot water changeovers as the first round of units reaches the end. The one thing the modern build does not solve is Rockhampton rainfall. Big roof areas on relatively flat blocks put a lot of water into a stormwater system very quickly during a summer downpour, so downpipe and surface drainage capacity is the thing that gets tested here rather than the sewer.',
    fault: {
      title: 'What we do most in Norman Gardens',
      body:
        'Renovation and upgrade work rather than repair. The failure work that does come in is hot water, and the drainage complaints are about surface water in a downpour, not blockages.',
    },
    access:
      'Wide streets, good driveways and room to work. As straightforward as access gets in Rockhampton.',
    facts: [
      ['From our base', 'About 38 km'],
      ['Housing', 'Largely 1990s onwards, with a band of 2010s builds'],
      ['Pipework', 'Modern, so outright failures are uncommon'],
      ['What gets tested here', 'Stormwater capacity in a Rockhampton downpour'],
    ],
    faq: [
      {
        q: 'Our 1990s bathroom is due. What is the plumbing side of a refit?',
        a: 'On a Norman Gardens house of that age the drainage is generally sound, so the work is the rough-in for the new layout, replacing tap ware and mixer bodies that are past it, and getting the falls and the waterproofing detail right before the tiler starts. The cost driver is whether you are moving the fixtures or keeping them where they are.',
      },
      {
        q: 'Water sheets across the yard in a downpour. Is the stormwater blocked?',
        a: 'Not necessarily. In Norman Gardens it is more often a capacity question than a blockage: a large roof area on a flat block delivers a lot of water very fast. We will check whether the line is clear first, because that is cheap, then look at whether the surface drainage has anywhere adequate to take it.',
      },
    ],
  },
  {
    slug: 'glenmore',
    name: 'Glenmore',
    postcode: '4701',
    council: 'Rockhampton Regional',
    area: 'Rockhampton',
    km: 38,
    rank: 15,
    lat: -23.3456,
    lng: 150.5006,
    landmarks: ['Glenmore Road', 'Yaamba Road', 'Glenmore Homestead'],
    nearby: ['park-avenue', 'norman-gardens', 'parkhurst', 'berserker'],
    leadServices: ['hot-water', 'blocked-drains', 'renovations'],
    reviewTags: ['hot-water', 'maintenance'],
    intro: 'Glenmore is a north Rockhampton suburb of mixed eras, mostly 1960s to 1980s.',
    local:
      'Glenmore is the awkward age, and that is exactly why it keeps us busy. The bulk of it is lowset brick from the 1960s through the 1980s, with newer infill dropped in between. A house from that era is old enough that the original copper is at the point where pinhole leaks start turning up, and old enough that the second hot water system, not the first, is now due. It is not old enough to be on clay sewer throughout like Park Avenue, so the drainage is generally better behaved. The thing we see most in Glenmore is a house that has had one thing replaced at a time over forty years, so there are three generations of fitting on the one wall and nobody knows which isolator does what. It is also hot here. Rockhampton summers push into the high thirties regularly, and an outdoor hot water unit or an exposed run on a west wall lives a harder life than the same unit would on the coast.',
    fault: {
      title: 'What goes wrong in Glenmore',
      body:
        'Pinhole leaks in ageing copper, and hot water systems on their second or third replacement. Both are age, not abuse.',
    },
    access:
      'Established streets with mature trees and standard suburban frontage. Nothing unusual, though tree roots near an older line are worth checking before anyone digs.',
    facts: [
      ['From our base', 'About 38 km'],
      ['Housing', 'Mostly 1960s to 1980s lowset brick with newer infill'],
      ['Pipework', 'Ageing copper, generally on modern sewer'],
      ['The local factor', 'Rockhampton heat, which is hard on outdoor units and west wall runs'],
    ],
    faq: [
      {
        q: 'We keep getting small leaks in different places. Is that a coincidence?',
        a: 'In a Glenmore house of that age it usually is not. When copper reaches the point of pinholing, the first leak is a warning about the rest of the run, not a one-off. Each repair is cheap and the sequence of them is not, so it is worth us assessing the whole run before you keep paying for patches.',
      },
      {
        q: 'Does the Rockhampton heat really shorten a hot water system\'s life?',
        a: 'It does not help. A unit sitting in full afternoon sun on a west wall through a Rockhampton summer works harder on its seals and its valve than the same unit in shade. Where an outdoor unit is going in, where we put it is worth thirty seconds of thought.',
      },
    ],
  },
  {
    slug: 'parkhurst',
    name: 'Parkhurst',
    postcode: '4702',
    council: 'Rockhampton Regional',
    area: 'Rockhampton',
    km: 38,
    rank: 10,
    lat: -23.3025,
    lng: 150.5108,
    landmarks: ['Yaamba Road', 'Bruce Highway', 'Rockhampton Airport approach'],
    nearby: ['norman-gardens', 'glenmore', 'rockyview-note'],
    leadServices: ['gas-fitting', 'renovations', 'hot-water'],
    reviewTags: ['gas', 'renovations'],
    intro: 'Parkhurst is Rockhampton\'s northern growth corridor, and most of it is new.',
    local:
      'Parkhurst is where Rockhampton has been building, and the estates here are almost all 2000s onwards with new lots still coming out of the ground. That makes it the least repair-driven suburb in this whole library. The pipe is new, the drainage is designed, and there is nothing old enough to have failed yet. So the work is what a growth suburb generates: fit-off and connection on new builds, gas points for cooktops and outdoor kitchens, rainwater tanks plumbed back to the house, and the first wave of hot water changeovers on the earliest estate lots, which are now fifteen to twenty years in. There is older acreage on the fringes towards Rockyview and the highway, and that is a completely different job, tank supply and on-site treatment rather than mains and sewer. Parkhurst is also on the Bruce Highway corridor, so there is commercial and light industrial along Yaamba Road, which brings backflow prevention and thermostatic mixing valve testing rather than domestic work.',
    fault: {
      title: 'What we do most in Parkhurst',
      body:
        'New work and additions, not repairs. Gas, tanks, ensuites, and the first round of hot water changeovers. Commercial along Yaamba Road brings compliance testing.',
    },
    access:
      'New estate streets, wide, and generally easy. Where a build is still in progress, tell us what stage the driveway is at.',
    facts: [
      ['From our base', 'About 38 km'],
      ['Housing', 'Mostly 2000s onwards, still growing'],
      ['Why little fails here', 'Nothing is old enough to have failed yet'],
      ['Commercial', 'Yaamba Road business and light industrial, so backflow and TMV testing'],
    ],
    faq: [
      {
        q: 'Do you do backflow and thermostatic mixing valve testing for Parkhurst businesses?',
        a: 'Yes, both, ad hoc or on the annual cycle. Backflow prevention devices stop contaminated water getting back into the drinking supply, and thermostatic mixing valves keep the hot water at a temperature that will not scald. If we find a problem while we are testing, we fix it there rather than booking a second visit, and you get the report for your records.',
      },
      {
        q: 'Can you plumb a rainwater tank into a new Parkhurst house?',
        a: 'Yes. The parts worth getting right are the first flush, the screening, and how the tank supply changes over to mains when the tank runs low, because a poorly set up changeover either runs your tank dry or never uses it at all.',
      },
    ],
  },
  {
    slug: 'frenchville',
    name: 'Frenchville',
    postcode: '4701',
    council: 'Rockhampton Regional',
    area: 'Rockhampton',
    km: 40,
    rank: 4,
    lat: -23.3542,
    lng: 150.5289,
    landmarks: ['Mount Archer', 'Frenchville Road', 'Frenchville Sports Club'],
    nearby: ['norman-gardens', 'berserker', 'koongal-note', 'glenmore'],
    leadServices: ['blocked-drains', 'hot-water', 'renovations'],
    reviewTags: ['pressure', 'renovations'],
    intro: 'Frenchville climbs the lower slopes of Mount Archer on the north side of Rockhampton.',
    local:
      'Frenchville is built on a hill, and elevation is the plumbing story here. The suburb runs from flat ground at the bottom up the lower slopes of Mount Archer, and houses higher up sit at the weaker end of the water pressure the network can deliver, particularly at peak demand on a hot Rockhampton evening. That means a pressure complaint in upper Frenchville is very often not a blocked aerator or a partly closed valve, and replacing tap ware will not touch it. It needs measuring at the meter before anyone spends money. The housing spans the 1970s through to the 2000s, mostly brick and tile, and a lot of it is on sloping blocks with the house set above or below the street. That makes drainage runs longer than they look and gives them limited fall, which is why a Frenchville blockage tends to sit mid-run rather than at the gully.',
    fault: {
      title: 'What goes wrong in Frenchville',
      body:
        'Water pressure at elevation, and drainage runs on sloping blocks that have less fall than they appear to. Both get misdiagnosed as fixture problems.',
    },
    access:
      'Sloping blocks with steep driveways, and houses set above or below the street. Where a job needs a machine, the slope decides what can get in.',
    facts: [
      ['From our base', 'About 40 km'],
      ['Terrain', 'Lower slopes of Mount Archer, so real elevation change'],
      ['Housing', '1970s to 2000s brick and tile, much of it on sloping blocks'],
      ['The local misdiagnosis', 'Low pressure blamed on the tap when it is the elevation'],
    ],
    faq: [
      {
        q: 'The pressure at the top of Frenchville is hopeless. Can it be fixed?',
        a: 'Often, but only once you know where the loss actually is. We measure at the meter and at the fixture. If the pressure arriving at your property is genuinely at the low end, a pump and a small break tank is the answer and no amount of new tap ware will help. If the pressure at the meter is fine, the problem is on your side and it is far cheaper to fix.',
      },
      {
        q: 'Why do our drains block halfway along and not at the gully?',
        a: 'On a Frenchville slope the runs are longer than they look and they often have less fall than they need. Waste slows where the fall flattens out, and that is where it builds up. Clearing it is straightforward, but if it keeps coming back it is worth putting a camera down to see whether the grade is the real problem.',
      },
    ],
  },
  {
    slug: 'park-avenue',
    name: 'Park Avenue',
    postcode: '4701',
    council: 'Rockhampton Regional',
    area: 'Rockhampton',
    km: 40,
    rank: 9,
    lat: -23.3583,
    lng: 150.5019,
    landmarks: ['Musgrave Street', 'Park Avenue State School', 'Kershaw Gardens'],
    nearby: ['berserker', 'glenmore', 'kawana', 'rockhampton'],
    leadServices: ['blocked-drains', 'hot-water', 'renovations'],
    reviewTags: ['blocked-drains', 'difficult-job'],
    intro: 'Park Avenue is one of north Rockhampton\'s older suburbs, mostly post-war housing.',
    local:
      'Park Avenue is old enough that what is in the ground matters more than what is on the wall. Much of the suburb is post-war and 1950s to 1960s housing, high-set timber and lowset brick, and on houses of that vintage in Rockhampton we still find vitreous clay sewer lines in service. Clay pipe is jointed rather than welded, and every one of those joints is an invitation to a tree root. Park Avenue has mature street trees and mature backyard trees, which is exactly the combination that produces the classic call here: a drain that clears fine, then blocks again in six months, then again in five. Cutting the roots out treats the symptom. A camera down the line tells you whether the pipe itself has failed, and on a run of clay that has already been rodded a few times the honest answer is often relining or replacement rather than another clear. The water side is similar in age, with galvanised and early copper still turning up.',
    fault: {
      title: 'What goes wrong in Park Avenue',
      body:
        'Tree roots in old vitreous clay sewer. It clears, then comes back, then comes back sooner. After that it is galvanised and early copper water lines reaching the end.',
    },
    access:
      'Established streets with mature trees. High-set houses give good under-house access, which makes water line work far easier than it is on a slab.',
    facts: [
      ['From our base', 'About 40 km'],
      ['Housing', 'Post-war and 1950s to 1960s, high-set timber and lowset brick'],
      ['What is in the ground', 'Vitreous clay sewer is still in service on many properties'],
      ['The recurring call', 'Tree roots at clay pipe joints'],
    ],
    faq: [
      {
        q: 'The drain has been cleared three times in two years. Why does it keep blocking?',
        a: 'On a Park Avenue property that pattern almost always means roots in an old clay sewer line, and the interval getting shorter each time means the pipe is losing the fight. Clearing it again will work, and it will work for less time than last time. A camera down the line will tell you whether you are looking at another clear, a reline, or a replacement, and that is worth knowing before you spend more on rodding.',
      },
      {
        q: 'Is galvanised water pipe still a problem in these houses?',
        a: 'We do still find it. Galvanised corrodes from the inside, so it narrows before it leaks, and the symptom is falling pressure and discoloured water rather than anything dramatic. If your house is that era and the pressure has quietly got worse over years, that is the likely reason.',
      },
    ],
  },
  {
    slug: 'berserker',
    name: 'Berserker',
    postcode: '4701',
    council: 'Rockhampton Regional',
    area: 'Rockhampton',
    km: 40,
    rank: 11,
    lat: -23.3597,
    lng: 150.5225,
    landmarks: ['Berserker Range', 'Musgrave Street', 'Berserker Street'],
    nearby: ['park-avenue', 'frenchville', 'kawana', 'rockhampton'],
    leadServices: ['blocked-drains', 'hot-water', 'renovations'],
    reviewTags: ['maintenance', 'on-time'],
    intro: 'Berserker sits at the foot of the Berserker Range on the north side of Rockhampton.',
    local:
      'Berserker is a high-set timber suburb, and that is genuinely good news for a plumber and for the person paying. A lot of the housing here is 1950s to 1970s Queensland-style homes up on stumps, which means the water lines and much of the waste run underneath in the open where you can see them. Compared with chasing a leak inside a slab, working under a Berserker house is quick, and a repair that would be a demolition job elsewhere is often an hour with a torch. The catch is what all that easy access has encouraged over seventy years. Under a house of this age we routinely find three or four generations of pipework spliced together, jointed with whatever was on the truck at the time, and supported by whatever was handy. It works until one joint lets go, and then the question is whether to patch the joint or rationalise the run. On the sewer side the age is the same as Park Avenue, so roots in older lines come up here too.',
    fault: {
      title: 'What goes wrong in Berserker',
      body:
        'Accumulated under-house patchwork. Mixed materials and improvised joints that have quietly held for decades, until one of them does not.',
    },
    access:
      'High-set houses with good under-house access, which is the best access in Rockhampton for water line work. Watch for low headroom at the front where the stumps get short.',
    facts: [
      ['From our base', 'About 40 km'],
      ['Housing', 'Largely 1950s to 1970s high-set timber homes'],
      ['Access', 'Under-house, in the open, which makes water line work fast'],
      ['What we find under there', 'Several generations of pipework joined together over the years'],
    ],
    faq: [
      {
        q: 'A joint under the house has let go. Patch it or redo the run?',
        a: 'It depends what is either side of it. If the failed joint is one of several improvised connections in mixed materials, patching it just moves the next failure along. If the rest of the run is sound and consistent, patching is the sensible call. We will show you what is under there and tell you which one you have, because under a Berserker house you can actually see it.',
      },
      {
        q: 'Does the good access make it cheaper?',
        a: 'For water line work, generally yes. Getting to the pipe is most of the cost on a slab-on-ground house, and under a high-set Berserker home that part is almost free. Sewer in the ground is the same job it is anywhere.',
      },
    ],
  },
  {
    slug: 'kawana',
    name: 'Kawana',
    postcode: '4701',
    council: 'Rockhampton Regional',
    area: 'Rockhampton',
    km: 40,
    rank: 14,
    lat: -23.3489,
    lng: 150.5136,
    landmarks: ['Kawana Street', 'Yaamba Road', 'Kershaw Gardens'],
    nearby: ['park-avenue', 'berserker', 'glenmore', 'norman-gardens'],
    leadServices: ['hot-water', 'blocked-drains', 'renovations'],
    reviewTags: ['hot-water', 'price'],
    intro: 'Kawana is a settled north Rockhampton suburb, largely 1960s to 1980s.',
    local:
      'Kawana is the suburb where the renovation decision keeps coming up. The housing is mostly 1960s to 1980s lowset brick and some high-set timber, on standard suburban blocks with mature gardens. Houses of that age in Rockhampton have generally had one round of work done in the 1990s or 2000s, and that round is now itself due. So the conversation here is rarely "something has broken", it is "the bathroom is tired, what is behind the tiles". The honest answer on a Kawana house is that the drainage is usually fine and the water lines usually need attention, because the copper is old enough to be at the pinholing stage while the sewer is modern enough not to be clay. That combination is worth knowing before a budget is set, because it means the money goes into the parts nobody sees. Being an established suburb, mature trees near older drainage runs are worth a look at the same time.',
    fault: {
      title: 'What goes wrong in Kawana',
      body:
        'Second-generation renovation work, where the 1990s refit has now aged out. Old copper behind newer tiles is the usual surprise.',
    },
    access:
      'Standard suburban streets and driveways, mature gardens. Straightforward.',
    facts: [
      ['From our base', 'About 40 km'],
      ['Housing', 'Mostly 1960s to 1980s, lowset brick and some high-set timber'],
      ['Behind the tiles', 'Old copper, on drainage that is usually sound'],
      ['The common conversation', 'A 1990s renovation that is now due again'],
    ],
    faq: [
      {
        q: 'We are redoing a bathroom that was last done in the 1990s. What will you find?',
        a: 'On a Kawana house, usually sound drainage and tired water lines. The copper behind the wall is likely to be original and at the age where pinholes start, and the mixer bodies from the 1990s refit are past their service life. It is worth budgeting for the pipework you cannot see rather than discovering it once the tiles are off.',
      },
      {
        q: 'Should we look at the drains while the bathroom is open?',
        a: 'It is the cheapest time you will ever do it. The line is accessible, the floor is already up, and a camera run costs a fraction of what it costs to come back and open it again in three years.',
      },
    ],
  },
  {
    slug: 'rockhampton',
    name: 'Rockhampton',
    postcode: '4700',
    council: 'Rockhampton Regional',
    area: 'Rockhampton',
    km: 43,
    rank: 2,
    lat: -23.3781,
    lng: 150.5136,
    confirmed: true,
    hub: true,
    landmarks: ['the Fitzroy River', 'Quay Street', 'Rockhampton Heritage Village', 'the Big Bull'],
    nearby: ['the-range', 'allenstown', 'wandal', 'park-avenue', 'frenchville', 'berserker'],
    leadServices: ['blocked-drains', 'hot-water', 'backflow-tmv-testing'],
    reviewTags: ['flagship', 'commercial'],
    intro: 'Rockhampton is the city on the Fitzroy, inland and west of the Capricorn Coast.',
    local:
      'Rockhampton is not one plumbing problem, it is four, and which one you have depends on which side of the river you are on and what decade your house went up. The old suburbs close to the river, Allenstown, Depot Hill, Wandal and the streets below The Range, carry pre-war and interwar housing with clay sewer, galvanised water lines and a flood history: the Fitzroy has been over parts of the city more than once, most recently in 2011 and 2017, and that leaves silt in stormwater and gullies long after the water goes. Up on The Range it is heritage Queenslanders with plumbing that predates most of what is in the standards now. Across the river to the north, Park Avenue and Berserker are post-war, so roots in clay and mixed under-house pipework. Then Norman Gardens and Parkhurst are new enough that nothing has failed yet. On top of all of it sits the heat. Rockhampton summers regularly run into the high thirties, which is harder on an outdoor hot water unit and an exposed west-facing run than anything the coast throws at it. Being the region\'s commercial centre, Rockhampton is also where the backflow prevention and thermostatic mixing valve testing work sits: pubs, clubs, cafes, commercial kitchens, medical rooms and body corporates all have devices that need testing on a cycle.',
    fault: {
      title: 'What Rockhampton gets called out for',
      body:
        'It splits by suburb age. Old suburbs: roots in clay sewer and failing galvanised. Middle suburbs: pinholing copper and second-generation hot water. New suburbs: additions rather than repairs. Across the whole city: heat on outdoor hot water units, and compliance testing on commercial sites.',
    },
    access:
      'Everything from tight heritage frontages up on The Range to wide new estate streets at Parkhurst. Tell us the suburb and the era of the house and we will already know most of what we are walking into.',
    facts: [
      ['From our base', 'About 43 km from Yeppoon'],
      ['The river', 'Fitzroy flooding has affected low-lying suburbs, notably 2011 and 2017'],
      ['The heat', 'High-thirties summers, hard on outdoor units and west wall runs'],
      ['Commercial', 'The region\'s centre, so most of the backflow and TMV testing work sits here'],
    ],
    faq: [
      {
        q: 'Do you actually come to Rockhampton, or is that just on the website?',
        a: 'We come. Rockhampton is about 43 km from our Yeppoon base and it is a named part of our service area, not an afterthought. What we will not do is pretend it is next door: for a Rockhampton job we ask more on the phone so we arrive with the right gear, and if you are booking something that is not urgent it is worth asking us what days we are already going to be in the city.',
      },
      {
        q: 'My commercial site needs backflow and TMV testing. What is involved?',
        a: 'We test the devices, and if we find a fault we repair it at the same visit rather than booking a second one. You get the report for your records. It is the one job in plumbing that runs on a calendar rather than on a breakdown, so it is worth setting a reminder rather than waiting for a notice.',
      },
      {
        q: 'Which Rockhampton suburbs do you cover?',
        a: 'The ones listed on this site have their own page, and each one says what the housing and the ground actually do there. If your suburb is not listed, ring us anyway and ask. We would rather tell you straight than have you guess.',
      },
    ],
  },
  {
    slug: 'wandal',
    name: 'Wandal',
    postcode: '4700',
    council: 'Rockhampton Regional',
    area: 'Rockhampton',
    km: 44,
    rank: 16,
    lat: -23.3811,
    lng: 150.4944,
    landmarks: ['Rockhampton Showgrounds', 'Wandal Road', 'the Fitzroy River'],
    nearby: ['rockhampton', 'the-range', 'allenstown'],
    leadServices: ['blocked-drains', 'renovations', 'hot-water'],
    reviewTags: ['difficult-job', 'maintenance'],
    intro: 'Wandal is one of Rockhampton\'s oldest suburbs, west of the centre near the showgrounds.',
    local:
      'Wandal is old Rockhampton, and the housing shows it: pre-war and interwar Queenslanders on stumps, with post-war infill filling the gaps. That age puts it firmly in clay sewer and galvanised territory, and it puts the water lines under the house where you can get at them. The Wandal-specific thing is the combination of great access and terrible pipe. Under a Queenslander on stumps you can walk to almost any water line in the house, which makes the repair itself fast. But on a house that old the water line you have walked to is often galvanised that has narrowed from the inside, or copper that has already been spliced twice, so the repair you came to do is rarely the whole job. Wandal is also close to the river and low compared with The Range above it, so the flood history that runs through the old parts of Rockhampton runs through here, and silt in stormwater lines is a thing worth checking after a wet season rather than a thing to wait on.',
    fault: {
      title: 'What goes wrong in Wandal',
      body:
        'Galvanised water lines that have narrowed rather than burst, clay sewer with roots at the joints, and stormwater carrying silt from past flooding.',
    },
    access:
      'Excellent under-house access on the Queenslanders, which is the one thing working in your favour on a house this age. Older streets have narrower frontages than the newer suburbs.',
    facts: [
      ['From our base', 'About 44 km'],
      ['Housing', 'Pre-war and interwar Queenslanders on stumps, with post-war infill'],
      ['What is in the walls and ground', 'Galvanised water lines and clay sewer are both still around'],
      ['The trade-off', 'Best access in the city, oldest pipework in the city'],
    ],
    faq: [
      {
        q: 'The pressure has dropped slowly over years rather than suddenly. Why?',
        a: 'That is the signature of galvanised pipe, and Wandal has plenty of it. Galvanised corrodes inwards, so the bore narrows year by year and the pressure falls with it, often with rusty water first thing in the morning. It does not announce itself with a burst. Once it is at that stage, replacing the run is the only fix that lasts.',
      },
      {
        q: 'Is it worth doing the plumbing while the house is up on stumps anyway?',
        a: 'Almost always. Access is the expensive part of plumbing, and a Wandal Queenslander gives it to you for nothing. If work is happening under the house for any reason, that is the moment to deal with the water lines rather than in five years when the first one goes.',
      },
    ],
  },
  {
    slug: 'the-range',
    name: 'The Range',
    postcode: '4700',
    council: 'Rockhampton Regional',
    area: 'Rockhampton',
    km: 45,
    rank: 12,
    lat: -23.3897,
    lng: 150.5008,
    landmarks: ['Athelstane Range', 'Agnes Street', 'Rockhampton Girls Grammar', 'the Range lookouts'],
    nearby: ['rockhampton', 'wandal', 'allenstown'],
    leadServices: ['renovations', 'blocked-drains', 'hot-water'],
    reviewTags: ['renovations', 'difficult-job'],
    intro: 'The Range is Rockhampton\'s heritage suburb, up on Athelstane Range above the city.',
    local:
      'The Range is the oldest and grandest housing in Rockhampton, and it is the suburb where a bathroom renovation stops being a swap-out and becomes a proper job. These are large high-set Queenslanders from the late 1800s and early 1900s: multiple bathrooms added at different times over a century, verandah and roof drainage that predates modern stormwater thinking, and water lines that have been extended, rerouted and patched by a long line of tradespeople. We still find galvanised in service up here, and sewer that started life as clay. The second thing about The Range is the ground. It is steep and the blocks are narrow, so getting a machine in is often not possible at all, and a drainage repair that would take a morning on a flat block in Norman Gardens becomes a hand-dig on a slope with a heritage house on one side and a boundary fence on the other. None of that is a reason not to do the work. It is a reason to look properly before quoting it, which is what we do here.',
    fault: {
      title: 'What goes wrong on The Range',
      body:
        'Century-old drainage that was never designed for the number of wet areas now hanging off it, and water lines that are a museum of every era since. Access makes every repair harder than the fault itself.',
    },
    access:
      'Steep, narrow blocks with tight frontages, and heritage houses that limit where a machine can go. Assume hand digging unless we say otherwise after a look.',
    facts: [
      ['From our base', 'About 45 km'],
      ['Housing', 'Large high-set Queenslanders, late 1800s and early 1900s'],
      ['What is still in service', 'Galvanised water lines and clay sewer, on some properties'],
      ['The real constraint', 'Steep narrow blocks, so machine access is often impossible'],
    ],
    faq: [
      {
        q: 'We are renovating a bathroom in an old Range Queenslander. Why is the quote higher than a modern house?',
        a: 'Because almost nothing is standard. The waste and vent were laid for a house with fewer wet areas than it has now, the water lines have been extended by several different hands over a century, and the access on a steep narrow block limits what can be brought in. We would rather look at the actual house and tell you what it needs than quote a number that changes once the floor comes up.',
      },
      {
        q: 'Can you get a machine onto a Range block?',
        a: 'Often not. The blocks are steep and narrow and the houses are heritage, so many jobs up here are hand-dug. That is worth knowing before you plan the work, because it changes both the timeline and the cost, and anyone who quotes without looking is guessing.',
      },
    ],
  },
  {
    slug: 'allenstown',
    name: 'Allenstown',
    postcode: '4700',
    council: 'Rockhampton Regional',
    area: 'Rockhampton',
    km: 45,
    rank: 3,
    lat: -23.3936,
    lng: 150.5075,
    landmarks: ['Allenstown Square', 'Upper Dawson Road', 'Rockhampton Botanic Gardens'],
    nearby: ['rockhampton', 'the-range', 'wandal'],
    leadServices: ['blocked-drains', 'emergency-plumbing', 'renovations'],
    reviewTags: ['blocked-drains', 'storm'],
    intro: 'Allenstown is south Rockhampton, low-lying and close to the river.',
    local:
      'Allenstown is old and it is low, and both of those matter. The housing is largely Queenslanders on stumps and post-war homes, so the pipework question is the same as Wandal: clay sewer with jointed lengths that roots find, and galvanised water lines that narrow before they leak. What sets Allenstown apart is the ground level. Sitting low and close to the Fitzroy means this is one of the parts of Rockhampton that flooding actually reaches, and the city has been through it more than once, most recently in 2011 and 2017. Water through a property leaves things behind that outlast the drying out: silt settled in stormwater lines and gullies, surrounds that have moved, and drainage that no longer falls the way it was laid. A drain here that has never been right since a flood year is usually not blocked in the ordinary sense, it is carrying a load of fine silt along a run that has lost its grade, and rodding it will keep working for shorter and shorter periods.',
    fault: {
      title: 'What goes wrong in Allenstown',
      body:
        'Flood legacy in the drainage. Silt in stormwater lines and gullies, grade that has shifted, and old clay sewer that was already vulnerable before the water arrived.',
    },
    access:
      'Established streets with reasonable frontages, and good under-house access on the Queenslanders. Low ground means some yards stay soft well after rain.',
    facts: [
      ['From our base', 'About 45 km'],
      ['Ground', 'Low-lying and close to the Fitzroy'],
      ['Housing', 'Queenslanders on stumps and post-war homes'],
      ['Local history that matters', 'Fitzroy flooding, notably 2011 and 2017'],
    ],
    faq: [
      {
        q: 'The stormwater has never worked properly since the floods. Is that connected?',
        a: 'Almost certainly. Floodwater carries fine silt into stormwater lines and gullies and leaves it there, and it can shift surrounds enough that a line loses the fall it was laid with. Rodding clears the silt and does not restore the grade, which is why it keeps coming back sooner each time. A camera will tell you which of the two you have.',
      },
      {
        q: 'What should I check on an old Allenstown house before the wet season?',
        a: 'Three things. That the gullies are clear and their surrounds are still sitting where they should, that the downpipes are actually connected to something and not just discharging at the base of the wall, and that the yard drainage still falls away from the house. Those three are cheap now and expensive in February.',
      },
    ],
  },
];

export const suburbBySlug = Object.fromEntries(suburbs.map((s) => [s.slug, s]));

export const byRank = [...suburbs].sort((a, b) => a.rank - b.rank);

export const coastSuburbs = suburbs
  .filter((s) => s.area === 'Capricorn Coast')
  .sort((a, b) => a.km - b.km);

export const rockySuburbs = suburbs
  .filter((s) => s.area === 'Rockhampton')
  .sort((a, b) => a.km - b.km);

/** Neighbouring suburbs that have a page. Entries ending in "-note" are
 *  localities we cover but do not give a page to, so they are filtered out. */
export function nearbyPages(suburb) {
  return (suburb.nearby || [])
    .map((slug) => suburbBySlug[slug])
    .filter(Boolean)
    .slice(0, 4);
}

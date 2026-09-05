// ---------------------------------------------------------------------------
// Brand + appliance landing pages targeting Pune.
//
// IMPORTANT CLAIMS POLICY - do not weaken this without the business owner:
//
// 1. AUTHORISATION. Top Cool Service is an INDEPENDENT multi-brand repair
//    business. It is NOT an authorised service partner of Bosch, IFB, Siemens
//    or LG. No page in this file may state or imply official brand
//    authorisation, and no brand helpline or toll-free number may ever be
//    published here. Searchers looking for an "authorised service centre" or an
//    "authorised toll free number" are answered honestly in the FAQ of each
//    page and pointed back to the manufacturer's own documentation.
//
// 2. LOCATION. These pages target Pune. They deliberately do NOT invent a Pune
//    address, a Pune branch, a Pune phone number or a locality-level coverage
//    list, and they do not promise a specific arrival time in Pune, because
//    none of that is established anywhere in the project. Coverage is stated at
//    city level and the visitor is asked to confirm their locality at booking.
//    See PUNE_COVERAGE_AREAS below to add real locality coverage once the
//    business confirms it.
// ---------------------------------------------------------------------------

export const SERVICE_CITY = 'Pune';

// Locality-level coverage for the Pune pages.
//
// INTENTIONALLY EMPTY. Populate this with the localities the business genuinely
// services (e.g. 'Kothrud', 'Baner', 'Hinjewadi') and the coverage grid on every
// Pune landing page will render automatically, along with the localities in the
// Service structured data. Leaving it empty is the safe default: the pages
// simply describe city-level coverage instead of asserting neighbourhoods the
// business may not actually reach.
export const PUNE_COVERAGE_AREAS = [];

export const IMAGES = {
  dishwasher: '/images/dish-washer.jpg',
  dryer: '/images/cloth-dryer.jpg',
  washingMachine:
    'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=80',
};

// Identical for every appliance, so it lives here once instead of being
// duplicated (and diverging) across twelve pages.
export const serviceProcess = [
  {
    title: 'Tell us the model and the symptom',
    detail:
      'Call or send a WhatsApp message with your appliance model number and what it is doing. A photo of any error code on the display helps us bring the right spare on the first visit.',
  },
  {
    title: 'Doorstep diagnosis in Pune',
    detail:
      'A technician comes to your home at the slot we confirm with you and tests the appliance in front of you, rather than quoting blind over the phone.',
  },
  {
    title: 'Fixed quote before any work starts',
    detail:
      'You get the fault explained in plain language and a firm price. Nothing is opened up or replaced until you approve it.',
  },
  {
    title: 'Repair and live testing',
    detail:
      'Most jobs are completed on the spot from stock carried by the technician. We run a full cycle with you watching before we pack up, so you can see the fault is actually gone.',
  },
  {
    title: 'Warranty on what we replaced',
    detail:
      'Replaced spare parts carry up to 90 days of service warranty. Keep the job sheet, as that is your reference if anything recurs.',
  },
];

export const brandServices = [
  // ----------------------------- BOSCH ------------------------------------
  {
    slug: 'bosch-dishwasher-service-pune',
    brand: 'Bosch',
    appliance: 'Dishwasher',
    applianceSlug: 'dishwasher-repair',
    image: IMAGES.dishwasher,
    imageAlt: 'Bosch dishwasher inspected during a doorstep repair visit in Pune',
    h1: 'Bosch Dishwasher Repair & Service in Pune',
    tagline:
      'Independent doorstep repair for freestanding and built-in Bosch dishwashers across Pune.',
    title: 'Bosch Dishwasher Repair & Service in Pune',
    description:
      'Independent Bosch dishwasher repair and service in Pune. E15 anti-flood, E24 drainage, heating and door-seal faults diagnosed at your doorstep with a fixed quote first.',
    keywords:
      'Bosch dishwasher repair and service Pune, Bosch dishwasher service near me, Bosch dishwasher service center Pune, Bosch dishwasher repair near me',
    overview: [
      'Bosch dishwashers across the Series 2 to Series 8 range share a common platform, which means the faults we are called out to cluster around a small, well-understood set of parts: the drain pump, the anti-flood float in the base tray, the inlet solenoid and the heating circuit. Our technicians carry those spares, so most Bosch dishwasher repair and service jobs are closed in a single visit.',
      'We work on both freestanding and fully integrated units, including machines bought abroad. Before anything is replaced you get a written diagnosis and a fixed quote, and if you decide not to proceed you pay only the inspection charge.',
    ],
    problems: [
      {
        title: 'E15 error with water sitting in the base tray',
        detail:
          'The anti-flood float has tripped, so the machine runs the drain pump continuously and refuses to fill. We trace the actual leak, usually a perished sump gasket, a loose hose clip or a cracked salt container, instead of simply resetting the float.',
      },
      {
        title: 'E24 and E25 drainage errors',
        detail:
          'Dirty water left standing at the end of the cycle. The usual causes are a choked filter basket, a kinked drain hose behind the unit, or a drain pump impeller jammed with glass grit and food debris.',
      },
      {
        title: 'Dishes still wet when the cycle ends',
        detail:
          'On condensation-drying Bosch models this points to the heating element, the temperature sensor or an empty rinse aid dispenser far more often than to the wash programme itself.',
      },
      {
        title: 'White chalky film on glassware and cutlery',
        detail:
          'Hard water is almost always responsible, and homes running on borewell or tanker supply see it worst. We check and reset the water softener level, refill and test the salt chamber, and descale spray arm jets that have closed up with scale.',
      },
      {
        title: 'Door will not latch, or leaks at the bottom',
        detail:
          'Worn door seals, a stretched door spring or a failed door interlock switch. The interlock also prevents the cycle starting at all, so it is one of the first things we test.',
      },
      {
        title: 'No power or an unresponsive control panel',
        detail:
          'We check the mains supply and the door interlock first, then the control module. Damage from voltage fluctuation is common wherever the supply is unstable and often needs the module replaced.',
      },
    ],
    faqs: [
      {
        q: 'Are you a Bosch authorised service centre in Pune?',
        a: 'No, and we would rather say so plainly. Top Cool Service is an independent multi-brand repair company. We are not affiliated with, endorsed by, or an authorised service partner of Bosch. If your dishwasher is still within its manufacturer warranty, go to Bosch directly first, because an independent repair can affect that warranty. For out-of-warranty machines, an independent specialist is usually the faster and cheaper route.',
      },
      {
        q: 'What is the Bosch authorised toll free number for dishwasher complaints?',
        a: 'We deliberately do not publish it. We are not connected to Bosch, and a helpline number copied from a third-party site could easily be out of date. The current number is printed in your appliance documentation and listed on the official Bosch India website. If you would rather book an independent repair, use the phone or WhatsApp button on this page instead.',
      },
      {
        q: 'Do you cover Bosch dishwasher service near me in Pune?',
        a: 'We are a doorstep service rather than a walk-in counter, so there is no service centre for you to visit and the technician travels to your home. Tell us your Pune locality when you book and we will confirm honestly whether we can reach you, and what arrival window to expect, before anyone is dispatched.',
      },
      {
        q: 'How much does a Bosch dishwasher repair cost?',
        a: 'There is a nominal inspection charge, and it is waived if you approve the repair. Beyond that the cost depends entirely on the part: a drain pump, filter assembly or door seal is a modest job, while a control module is the most expensive component on the machine. You always see the quote before work begins.',
      },
      {
        q: 'Do you use genuine Bosch spare parts?',
        a: 'We source brand-approved spares wherever they are available for your model, and we tell you plainly when only a compatible equivalent can be obtained for an older or imported machine. Whatever we fit carries up to 90 days of service warranty.',
      },
    ],
  },
  {
    slug: 'bosch-washing-machine-service-pune',
    brand: 'Bosch',
    appliance: 'Washing Machine',
    applianceSlug: 'washing-machine-repair',
    image: IMAGES.washingMachine,
    imageAlt: 'Bosch front load washing machine drum serviced at a home in Pune',
    h1: 'Bosch Washing Machine Repair & Service in Pune',
    tagline:
      'Independent doorstep repair for Bosch front load and top load washing machines across Pune.',
    title: 'Bosch Washing Machine Repair & Service in Pune',
    description:
      'Independent Bosch washing machine repair and service in Pune. Drain pump blockages, door interlock faults, drum bearings and F-series error codes fixed at home.',
    keywords:
      'Bosch washing machine repair and service Pune, Bosch washing machine service near me, Bosch washing machine service center Pune, Bosch washing machine repair near me',
    overview: [
      'Bosch front loaders are mechanically durable but unforgiving about two things many Pune homes deal with daily: hard water and inconsistent mains pressure. The result is a predictable pattern of complaints, namely inlet timeouts, scaled heating elements and drain pumps choked with lint and coins. We carry drain pumps, door interlocks, inlet valves and Aquastop hoses for exactly this reason.',
      'We service front load and top load Bosch machines of all ages. Bearing replacements and control module work are done at your home wherever the machine can be safely opened up in place; if it genuinely needs to come to a workbench, we tell you that upfront rather than part-dismantling it and leaving.',
    ],
    problems: [
      {
        title: 'F16 - door not locking, cycle refuses to start',
        detail:
          'Usually the door interlock or the latch hook rather than the door itself. Overloading the drum so the door sits slightly proud is a surprisingly common trigger.',
      },
      {
        title: 'F17 - water inlet timeout',
        detail:
          'The machine did not fill within the expected time. We check tap pressure, the inlet hose filter gauze choked with scale, and the inlet solenoid valve, in that order.',
      },
      {
        title: 'F18 - drain pump blocked or failed',
        detail:
          'Water not draining at the end of the cycle. Coins, hairpins, lint and stray buttons collect in the pump filter; if the impeller itself is damaged the pump is replaced.',
      },
      {
        title: 'Loud rumbling or grinding on the spin cycle',
        detail:
          'The classic drum bearing failure. Caught early it is a bearing and seal replacement; left running for months it can score the drum shaft and become a far more expensive job.',
      },
      {
        title: 'Machine walks across the floor or vibrates violently',
        detail:
          'We check that the transit bolts were removed at installation, level the feet properly, and inspect the suspension dampers and counterweight bolts, which loosen over time.',
      },
      {
        title: 'Clothes not cleaning, or washing in cold water only',
        detail:
          'Typically a scaled or failed heating element, or a temperature sensor reading incorrectly. We test the element resistance rather than guessing.',
      },
    ],
    faqs: [
      {
        q: 'Are you a Bosch authorised washing machine service centre in Pune?',
        a: 'No. Top Cool Service is an independent repair business with no affiliation with or authorisation from Bosch. We think it is better to tell you that than to let you assume otherwise. If the machine is still under manufacturer warranty, approach Bosch directly first, because independent work can void it.',
      },
      {
        q: 'Is there a Bosch authorised toll free number I should call instead?',
        a: 'If your machine is in warranty, yes, but you should take that number from your own appliance documentation or the official Bosch India website rather than from us. We are not affiliated with Bosch and will not republish a helpline number we cannot keep current.',
      },
      {
        q: 'Can you replace Bosch washing machine drum bearings at home?',
        a: 'In most cases yes. It is a long job, so expect the technician to be with you for a few hours, but it avoids the risk and cost of transporting the machine. If we find the shaft is scored or the outer tub is damaged, we will tell you honestly whether the repair is still worth doing against the value of the machine.',
      },
      {
        q: 'How do I find Bosch washing machine service near me in Pune?',
        a: 'You do not need to find a service centre, because the technician comes to you. Give us your Pune locality on the booking form and we will confirm whether we can reach you and when, instead of accepting the job and leaving you waiting.',
      },
      {
        q: 'My Bosch machine shows an error code that is not listed here.',
        a: 'Send a photo of the display over WhatsApp along with the model number from the sticker inside the door frame. We can usually identify the likely fault and give you a rough cost before dispatching anyone.',
      },
    ],
  },
  {
    slug: 'bosch-dryer-service-pune',
    brand: 'Bosch',
    appliance: 'Dryer',
    applianceSlug: 'dryer-repair',
    image: IMAGES.dryer,
    imageAlt: 'Bosch condenser clothes dryer opened for lint and heating element inspection in Pune',
    h1: 'Bosch Dryer Repair & Service in Pune',
    tagline: 'Independent doorstep repair for Bosch condenser and heat pump tumble dryers in Pune.',
    title: 'Bosch Dryer Repair & Service in Pune',
    description:
      'Independent Bosch dryer repair and service in Pune. No-heat faults, blocked condensers, long drying cycles and drum belt failures fixed at your doorstep.',
    keywords:
      'Bosch dryer repair and service Pune, Bosch dryer service near me, Bosch dryer service center Pune, Bosch dryer repair near me',
    overview: [
      'Tumble dryers work hardest through the monsoon, which is also when they are most likely to fail. Almost every fault we attend traces back to airflow: lint migrates past the filter, coats the condenser or heat pump evaporator, and the machine slowly loses its ability to shed moisture, so cycles stretch longer and longer until the thermal cut-out finally trips. A deep condenser clean is often the entire repair.',
      'We service Bosch condenser and heat pump dryers, including stacked installations above a washing machine. Heat pump models need careful handling, and we will not attempt work on a sealed refrigerant circuit that cannot be done safely at your home. We will say so rather than take it apart and hope.',
    ],
    problems: [
      {
        title: 'Drum turns but clothes come out cold and damp',
        detail:
          'A no-heat fault. We test the heating element, the thermal cut-out and the temperature sensors. On heat pump models we check the compressor circuit before condemning anything.',
      },
      {
        title: 'Drying takes two or three cycles to finish',
        detail:
          'Almost always restricted airflow: a matted lint filter, a condenser block packed with fluff, or an evaporator that has never been cleaned. This is the single most common Bosch dryer complaint we see.',
      },
      {
        title: 'Water container fills too quickly, or never fills at all',
        detail:
          'Both point at the condensate circuit. A container that stays empty while clothes stay wet usually means the condensate pump or its float switch has failed.',
      },
      {
        title: 'Drum will not turn and the motor hums',
        detail:
          'A snapped or slipped drive belt, or seized jockey wheel and drum rollers. Belts are a commonly stocked part, so this is normally a same-visit fix.',
      },
      {
        title: 'Burning smell during operation',
        detail:
          'Stop using the dryer and call us. Lint built up around the heater housing is a genuine fire risk and needs stripping out properly, not just a filter rinse.',
      },
      {
        title: 'Sensor drying stops while the load is still damp',
        detail:
          'The moisture sensor bars inside the drum get coated with a film from fabric softener and stop reading correctly. Cleaning and recalibration usually restores normal behaviour.',
      },
    ],
    faqs: [
      {
        q: 'Are you an authorised Bosch dryer service centre in Pune?',
        a: 'No. We are an independent multi-brand appliance repair company with no authorisation from or affiliation with Bosch. For an in-warranty dryer, contact Bosch directly using the details in your appliance documentation, because independent repairs may affect warranty cover.',
      },
      {
        q: 'How often should a Bosch dryer be serviced?',
        a: 'Rinse the lint filter after every load, and have the condenser or heat pump evaporator deep cleaned roughly once a year, more often if the dryer runs daily or lives in a humid, enclosed utility space. Most of the expensive faults we attend started as a cleaning job that was never done.',
      },
      {
        q: 'Do you repair heat pump dryers as well as condenser dryers?',
        a: 'Yes, for mechanical, electrical, airflow and sensor faults on both types. Where a heat pump model has a genuine sealed refrigerant circuit failure, we will tell you honestly if it is beyond what can be done safely on site rather than charging you for exploratory work.',
      },
      {
        q: 'Is Bosch dryer service near me available in my part of Pune?',
        a: 'We work as a doorstep service, so there is no counter to carry the machine to. Enter your Pune locality on the booking form and we will confirm availability and a realistic arrival window before committing to the job.',
      },
      {
        q: 'My dryer is stacked above the washing machine. Is that a problem?',
        a: 'Not usually. Tell us when you book so the technician arrives expecting it and can plan for safe removal from the stacking kit. It occasionally means a second pair of hands, which we would rather arrange in advance than discover on arrival.',
      },
    ],
  },

  // ------------------------------- IFB ------------------------------------
  {
    slug: 'ifb-dishwasher-service-pune',
    brand: 'IFB',
    appliance: 'Dishwasher',
    applianceSlug: 'dishwasher-repair',
    image: IMAGES.dishwasher,
    imageAlt: 'IFB dishwasher filter and spray arm cleaned during a service visit in Pune',
    h1: 'IFB Dishwasher Repair & Service in Pune',
    tagline: 'Independent doorstep repair for IFB Neptune and built-in dishwashers across Pune.',
    title: 'IFB Dishwasher Repair & Service in Pune',
    description:
      'Independent IFB dishwasher repair and service in Pune. Inlet and drainage faults, poor wash results, heating problems and door issues resolved at your doorstep.',
    keywords:
      'IFB dishwasher repair and service Pune, IFB dishwasher service near me, IFB dishwasher service center Pune, IFB dishwasher repair near me',
    overview: [
      'IFB dishwashers are built for Indian kitchens and Indian water, but heavy scale still takes a toll. The complaints we attend most often are inlet restriction from a scaled water filter, drainage that slows over months until it stops entirely, and wash performance that quietly degrades as the spray arm jets close up. None of these are dramatic failures, which is exactly why they get left too long.',
      'We service freestanding and built-in IFB models, including the Neptune range. Our technicians descale and rebuild the wash circuit rather than replacing parts unnecessarily, and you get a fixed quote before anything is opened up.',
    ],
    problems: [
      {
        title: 'Machine will not fill, or fills very slowly',
        detail:
          'The inlet hose filter gauze and the hard-water treatment cartridge choke with scale over time. We clean or replace the filter and test the inlet solenoid valve under actual mains pressure.',
      },
      {
        title: 'Water left standing at the end of the cycle',
        detail:
          'A blocked filter basket, a drain hose routed without the required high loop, or a drain pump fouled with debris. We clear the whole path rather than just the visible filter.',
      },
      {
        title: 'Dishes coming out gritty or still soiled',
        detail:
          'Usually blocked spray arm jets, a worn wash pump impeller, or loading habits that block the upper arm. We show you the spray pattern so the difference is visible after the repair.',
      },
      {
        title: 'Cycle runs cold and dishes stay wet',
        detail:
          'The heating element or its thermostat has failed. Without heat the detergent will not activate properly either, so poor cleaning and poor drying often appear together.',
      },
      {
        title: 'Cycle aborts partway with a continuous beep',
        detail:
          'The control board has detected a fault, commonly a leak sensor trip or a fill or drain timeout. We diagnose the underlying condition instead of clearing the alarm and handing it back.',
      },
      {
        title: 'Door drops open or does not seal',
        detail:
          'The door balance springs and hinge cables stretch and snap with use. Left unrepaired, a door that drops damages the hinge mount and turns a small job into a large one.',
      },
    ],
    faqs: [
      {
        q: 'Are you an IFB authorised service centre in Pune?',
        a: 'No. Top Cool Service is an independent multi-brand repair company and is not affiliated with, endorsed by, or authorised by IFB. If your dishwasher is still under manufacturer warranty, contact IFB directly first, since an independent repair may affect your cover.',
      },
      {
        q: 'What is the IFB authorised toll free number?',
        a: 'We do not publish it, because we have no connection to IFB and cannot guarantee a number we copied would still be correct. You will find the current helpline in your appliance documentation and on the official IFB website. To book an independent repair with us, use the call or WhatsApp button on this page.',
      },
      {
        q: 'Can hard water damage an IFB dishwasher permanently?',
        a: 'It rarely destroys the machine outright, but it does shorten the life of the heating element, the inlet valve and the wash pump seals. Keeping the salt chamber topped up and having the wash circuit descaled periodically makes a real difference, particularly on a borewell or tanker supply.',
      },
      {
        q: 'Do you offer IFB dishwasher service near me in Pune?',
        a: 'We are a doorstep service, so rather than a service centre near you, we send a technician to you. Give us your Pune locality when booking and we will confirm whether we can cover it and what arrival window to expect.',
      },
      {
        q: 'Is it worth repairing an older IFB dishwasher?',
        a: 'Often yes, since the wear parts are serviceable and reasonably priced. Where the control board has failed on a machine that is already many years old, we will give you the repair cost honestly so you can weigh it against replacement rather than pushing the job.',
      },
    ],
  },
  {
    slug: 'ifb-washing-machine-service-pune',
    brand: 'IFB',
    appliance: 'Washing Machine',
    applianceSlug: 'washing-machine-repair',
    image: IMAGES.washingMachine,
    imageAlt: 'IFB front load washing machine drum and door seal checked during a repair in Pune',
    h1: 'IFB Washing Machine Repair & Service in Pune',
    tagline:
      'Independent doorstep repair for IFB front load, top load and semi-automatic washing machines in Pune.',
    title: 'IFB Washing Machine Repair & Service in Pune',
    description:
      'Independent IFB washing machine repair and service in Pune. Door lock faults, drainage problems, drum noise, scaling and panel errors fixed at your doorstep.',
    keywords:
      'IFB washing machine repair and service Pune, IFB washing machine service near me, IFB washing machine service center Pune, IFB washing machine repair near me',
    overview: [
      'IFB front loaders are among the most common machines in Pune flats, and they are generally reliable. The faults that bring us out are mostly wear items and water-quality problems: door interlocks that stop releasing, drain pump filters that have never been opened, and heating elements furred with scale because the hard-water cartridge was never changed.',
      'We repair IFB front load, top load and semi-automatic machines at your home. Where a machine is out of warranty we will always tell you the honest economics of a major repair, such as a bearing or drum assembly, against the cost of replacing the machine.',
    ],
    problems: [
      {
        title: 'Door stays locked at the end of the cycle',
        detail:
          'The interlock uses a thermal element that must cool before releasing, but when the mechanism or its wiring fails the door stays shut. We can release the door safely and replace the interlock without damaging the fascia.',
      },
      {
        title: 'Water not draining, cycle stuck before spin',
        detail:
          'Nine times out of ten it is the drain pump filter, which many owners never realise needs cleaning. We clear it, check the impeller for damage, and show you how to maintain it.',
      },
      {
        title: 'Drum not spinning or turning weakly',
        detail:
          'On belt-driven models the drive belt has slipped or perished. On others it points to the motor carbon brushes or the motor control board. We test before replacing anything.',
      },
      {
        title: 'Heavy scale and cold-water-only washing',
        detail:
          'A furred heating element draws poorly and eventually fails, and the hard-water treatment cartridge is well past its life. Both are straightforward replacements that restore wash quality noticeably.',
      },
      {
        title: 'Loud knocking or grinding during spin',
        detail:
          'Drum bearing wear, or a foreign object such as a coin trapped between the inner and outer drum. The second is cheap to fix; the first is not, so it is worth diagnosing early.',
      },
      {
        title: 'Touch panel unresponsive or displaying errors',
        detail:
          'Voltage fluctuation and monsoon humidity both take a toll on the control board. Some faults are repairable at track level; where the board is beyond that we quote for replacement before proceeding.',
      },
    ],
    faqs: [
      {
        q: 'Are you an IFB authorised washing machine service centre in Pune?',
        a: 'No. We are an independent repair company with no affiliation with or authorisation from IFB. If your washing machine is still within its manufacturer warranty, approach IFB directly first, because an independent repair can affect that warranty.',
      },
      {
        q: 'How do I get the IFB authorised service centre number?',
        a: 'It is in the documentation supplied with your machine and on the official IFB website. We will not reproduce it here, because we are not connected to IFB and an out-of-date number would waste your time. For an independent repair, contact us directly using the details on this page.',
      },
      {
        q: 'My IFB machine is locked shut with clothes inside. Can you help today?',
        a: 'Often yes. Mention that it is a locked-door call when you book, so it is prioritised and the technician arrives with interlock spares. In most cases the door can be released without damaging the machine.',
      },
      {
        q: 'Do you provide IFB washing machine service near me in Pune?',
        a: 'We are a doorstep service and the technician travels to your home. Enter your Pune locality on the booking form and we will confirm coverage and an arrival window before dispatching anyone.',
      },
      {
        q: 'How often should the hard-water cartridge be replaced?',
        a: 'It depends entirely on your building supply and how often you run the machine. Our technicians check its condition on every visit and will tell you if it is spent, rather than replacing it as a matter of routine.',
      },
    ],
  },
  {
    slug: 'ifb-dryer-service-pune',
    brand: 'IFB',
    appliance: 'Dryer',
    applianceSlug: 'dryer-repair',
    image: IMAGES.dryer,
    imageAlt: 'IFB clothes dryer drum and lint filter serviced at a home in Pune',
    h1: 'IFB Dryer Repair & Service in Pune',
    tagline: 'Independent doorstep repair for IFB condenser and vented clothes dryers across Pune.',
    title: 'IFB Dryer Repair & Service in Pune',
    description:
      'Independent IFB dryer repair and service in Pune. Heating failures, long drying times, drum belt and thermostat faults resolved at your doorstep with a fixed quote.',
    keywords:
      'IFB dryer repair and service Pune, IFB dryer service near me, IFB dryer service center Pune, IFB dryer repair near me',
    overview: [
      'An IFB dryer earns its keep during the monsoon, which is also when it is most likely to fail, because that is when it runs hardest. The dominant fault pattern is heat related: a thermostat or thermal cut-out that has tripped because airflow was restricted, and a heating element that eventually gives up after repeated overheating cycles.',
      'We service IFB condenser and vented dryers at your home. A large proportion of our callouts are resolved with a thorough strip-down clean and a single wear part, and we will tell you when that is all it needs rather than quoting for components you do not require.',
    ],
    problems: [
      {
        title: 'Dryer runs but produces no heat',
        detail:
          'The heating element, the thermostat or the one-shot thermal fuse has failed. A blown thermal fuse is a symptom, not a cause, so we always find and clear the airflow restriction that tripped it.',
      },
      {
        title: 'Clothes take far too long to dry',
        detail:
          'A clogged lint filter, a blocked condenser, or on vented models an exhaust duct that is crushed or choked. Restricted airflow also drives the overheating that kills elements.',
      },
      {
        title: 'Drum will not rotate',
        detail:
          'A broken or stretched drive belt, or worn drum support rollers and the tensioner pulley. The motor typically still hums, which is a useful clue that the fault is mechanical.',
      },
      {
        title: 'Dryer stops mid-cycle and needs cooling before restarting',
        detail:
          'A classic overheating cut-out. The machine is protecting itself, and repeatedly restarting it without fixing the underlying restriction will eventually destroy the element.',
      },
      {
        title: 'Excessive noise or a scraping sound from the drum',
        detail:
          'Worn rollers, a failing tensioner bearing, or a foreign object caught between the drum and the casing. Left running, a worn roller can score the drum itself.',
      },
      {
        title: 'Door not latching or the machine not starting',
        detail:
          'The door catch and its micro-switch wear out with daily use. If the switch does not confirm the door is shut, the dryer will not start at all.',
      },
    ],
    faqs: [
      {
        q: 'Are you an IFB authorised dryer service centre in Pune?',
        a: 'No. Top Cool Service is an independent appliance repair business with no affiliation with or authorisation from IFB. For a dryer still under manufacturer warranty, contact IFB first using the details supplied with the appliance.',
      },
      {
        q: 'Is there an IFB authorised toll free number for dryer complaints?',
        a: 'IFB publishes its own helpline in your product documentation and on its official website. We do not reproduce brand helpline numbers here, because we are not affiliated with IFB and cannot vouch for a number staying current.',
      },
      {
        q: 'The dryer trips the electricity when it heats. Is that dangerous?',
        a: 'Treat it as urgent and stop using the machine. A dryer that trips the RCD when the heater engages usually has an element that has broken down to earth. It is a genuine safety issue and we will prioritise the call.',
      },
      {
        q: 'Do you cover IFB dryer service near me in Pune?',
        a: 'We are a doorstep service rather than a walk-in centre. Give us your Pune locality when you book and we will tell you honestly whether a technician can reach you and when.',
      },
      {
        q: 'Can you service the dryer without moving it out of the utility area?',
        a: 'Usually we need a little clearance behind and around the unit to work safely, particularly for belt and element access. If it is tightly built in, mention that at booking so we can plan for it in advance.',
      },
    ],
  },

  // ----------------------------- SIEMENS ----------------------------------
  {
    slug: 'siemens-dishwasher-service-pune',
    brand: 'Siemens',
    appliance: 'Dishwasher',
    applianceSlug: 'dishwasher-repair',
    image: IMAGES.dishwasher,
    imageAlt: 'Siemens dishwasher spray arm and filter assembly serviced in Pune',
    h1: 'Siemens Dishwasher Repair & Service in Pune',
    tagline:
      'Independent doorstep repair for Siemens iQ-series built-in and freestanding dishwashers in Pune.',
    title: 'Siemens Dishwasher Repair & Service in Pune',
    description:
      'Independent Siemens dishwasher repair and service in Pune. Anti-flood trips, drainage errors, drying failures and control faults diagnosed and fixed at your doorstep.',
    keywords:
      'Siemens dishwasher repair and service Pune, Siemens dishwasher service near me, Siemens dishwasher service center Pune, Siemens dishwasher repair near me',
    overview: [
      'Siemens dishwashers in the iQ100 to iQ700 range are excellent machines that are frequently installed as fully integrated units behind a cabinet door, which is what makes servicing them a specialist job. Getting the machine out without damaging the furniture front or the plinth matters as much as the repair itself, and it is where a lot of general handymen come unstuck.',
      'We handle the full range of Siemens dishwasher faults, from anti-flood trips and drainage errors through to drying and control-module problems. You get a fixed quote after diagnosis, and we refit the appliance and re-align the door front properly when the work is done.',
    ],
    problems: [
      {
        title: 'Anti-flood system triggered, machine drains continuously',
        detail:
          'Water has reached the base tray float. The leak is typically at the sump seal, a door gasket that has hardened, or a hose connection that has worked loose over years of vibration.',
      },
      {
        title: 'Dirty water not clearing at the end of the programme',
        detail:
          'A blocked filter, a fouled drain pump or an incorrectly installed drain hose. In integrated installations we also check that the hose has not been crushed against the cabinet when the machine was pushed back.',
      },
      {
        title: 'Poor drying performance',
        detail:
          'We check the rinse aid dosage and dispenser first, then the heating and temperature sensing circuit. Cheap or incorrectly dosed rinse aid causes more drying complaints than component failure does.',
      },
      {
        title: 'Programme will not start or the panel is dead',
        detail:
          'The door interlock is the first suspect, followed by the mains connection and then the control module. Integrated units also suffer from wiring chafed where the door harness flexes.',
      },
      {
        title: 'Cloudy glassware and detergent residue',
        detail:
          'Hard water plus an incorrectly set water softener. We calibrate the softener to your actual supply, test the salt sensor and descale the wash circuit.',
      },
      {
        title: 'Cabinet door front sagging or fouling the plinth',
        detail:
          'An integration issue rather than an appliance fault, but a very common complaint. We re-tension the door springs and reset the mounting brackets so the front closes flush again.',
      },
    ],
    faqs: [
      {
        q: 'Are you a Siemens authorised service centre in Pune?',
        a: 'No. Top Cool Service is an independent multi-brand repair company and is not an authorised, affiliated or endorsed service partner of Siemens. If your dishwasher is still under manufacturer warranty, contact Siemens directly first, because independent work can affect that cover.',
      },
      {
        q: 'What is the Siemens authorised toll free number?',
        a: 'It is printed in your appliance documentation and published on the official Siemens home appliances India website. We do not republish brand helpline numbers, because we are not connected to Siemens and would rather you got the number from the source than from us.',
      },
      {
        q: 'Can you remove and refit a fully integrated Siemens dishwasher?',
        a: 'Yes, and we treat it as part of the job rather than an extra. Removing an integrated machine without marking the cabinetry takes care and the right approach, and we refit and re-align the decor door before we leave.',
      },
      {
        q: 'Do you offer Siemens dishwasher service near me in Pune?',
        a: 'We are a doorstep service, so the technician comes to your kitchen rather than you finding a counter. Tell us your Pune locality at booking and we will confirm coverage and a realistic arrival window.',
      },
      {
        q: 'Siemens and Bosch dishwashers look similar inside. Does that help?',
        a: 'It does, practically speaking. The two brands share a great deal of engineering, so our technicians see the same fault patterns and carry overlapping spares, which improves the chance of a first-visit fix.',
      },
    ],
  },
  {
    slug: 'siemens-washing-machine-service-pune',
    brand: 'Siemens',
    appliance: 'Washing Machine',
    applianceSlug: 'washing-machine-repair',
    image: IMAGES.washingMachine,
    imageAlt: 'Siemens front load washing machine serviced during a doorstep visit in Pune',
    h1: 'Siemens Washing Machine Repair & Service in Pune',
    tagline:
      'Independent doorstep repair for Siemens iQ-series front load washing machines across Pune.',
    title: 'Siemens Washing Machine Repair & Service in Pune',
    description:
      'Independent Siemens washing machine repair and service in Pune. Inlet and drain faults, door interlocks, bearing noise and control errors fixed at your doorstep.',
    keywords:
      'Siemens washing machine repair and service Pune, Siemens washing machine service near me, Siemens washing machine service center Pune, Siemens washing machine repair near me',
    overview: [
      'Siemens washing machines are built to a high standard and generally last well, which means the machines we are called to are often a decade old and suffering from cumulative wear rather than a single dramatic failure. Bearings, dampers, door seals and drain pumps all reach the end of their life at roughly the same time, and it pays to know which of them are genuinely worth replacing.',
      'We give you a straight assessment. If a machine needs a bearing set, a pump and a door seal at once, we will tell you what that totals before starting so you can make an informed decision rather than discovering it halfway through.',
    ],
    problems: [
      {
        title: 'Machine will not fill or fills very slowly',
        detail:
          'Low mains pressure, a scaled inlet filter gauze, or a failed inlet solenoid. We test under real supply conditions rather than assuming the valve is at fault.',
      },
      {
        title: 'Water remains in the drum after the cycle',
        detail:
          'The drain pump filter is choked, the impeller is jammed, or the pump has failed electrically. Debris trapped in the pump chamber is the usual finding.',
      },
      {
        title: 'Door will not open or will not lock',
        detail:
          'The door interlock has failed. We can release a locked door safely with laundry inside and fit a replacement interlock without damaging the fascia panel.',
      },
      {
        title: 'Very loud spin, or the drum moving excessively by hand',
        detail:
          'Bearing wear, usually accompanied by tired suspension dampers. Diagnosed early it is a contained repair; ignored, water eventually passes the seal and damages the drum shaft.',
      },
      {
        title: 'Cycle stops partway and displays a fault',
        detail:
          'We read the fault condition and test the circuit it relates to, rather than clearing the code and returning the machine. A code that reappears in a week is not a repair.',
      },
      {
        title: 'Damp, musty smell from the drum and seal',
        detail:
          'Biofilm builds up behind the door gasket and in the detergent drawer, and humid monsoon weather accelerates it. A proper deep clean plus advice on drawer and gasket habits resolves it.',
      },
    ],
    faqs: [
      {
        q: 'Are you a Siemens authorised washing machine service centre in Pune?',
        a: 'No. We are an independent repair business with no authorisation from or affiliation with Siemens. If your machine is still under manufacturer warranty, contact Siemens directly using the details supplied with the appliance, since independent repairs may affect the warranty.',
      },
      {
        q: 'Where do I find the Siemens authorised service helpline?',
        a: 'In your appliance documentation and on the official Siemens home appliances India website. We do not publish brand helpline numbers on our own pages, because we are not affiliated with Siemens and cannot keep such a number accurate.',
      },
      {
        q: 'Is a bearing replacement worth it on an older Siemens machine?',
        a: 'It often is, since these machines are built to last and the rest of the appliance is usually sound. We will give you the cost against a realistic view of the machine condition, and we will tell you if we think replacement is the better use of your money.',
      },
      {
        q: 'Do you offer Siemens washing machine service near me in Pune?',
        a: 'We operate as a doorstep service, so rather than looking for a centre near you, book on this page with your Pune locality and we will confirm whether we can reach you and when.',
      },
      {
        q: 'Can you service a washer-dryer combination unit?',
        a: 'Yes. Mention it at booking so the technician arrives prepared for both the wash and dry sides of the machine, as the drying circuit adds components that a plain washer does not have.',
      },
    ],
  },
  {
    slug: 'siemens-dryer-service-pune',
    brand: 'Siemens',
    appliance: 'Dryer',
    applianceSlug: 'dryer-repair',
    image: IMAGES.dryer,
    imageAlt: 'Siemens condenser dryer heat exchanger cleaned during a service call in Pune',
    h1: 'Siemens Dryer Repair & Service in Pune',
    tagline: 'Independent doorstep repair for Siemens condenser and heat pump tumble dryers in Pune.',
    title: 'Siemens Dryer Repair & Service in Pune',
    description:
      'Independent Siemens dryer repair and service in Pune. Heating faults, blocked heat exchangers, condensate pump failures and sensor drying problems fixed at home.',
    keywords:
      'Siemens dryer repair and service Pune, Siemens dryer service near me, Siemens dryer service center Pune, Siemens dryer repair near me',
    overview: [
      'Siemens dryers are efficient machines, and that efficiency depends entirely on a clean airflow path. Even models with a self-cleaning condenser accumulate lint in the heat exchanger over years of use, and once airflow drops the machine compensates by running longer, which raises running costs well before it ever shows a fault code.',
      'We service Siemens condenser and heat pump dryers at your home, including stacked and built-under installations. Most visits combine a full airflow strip-down with whatever wear part has actually failed, so the machine leaves performing as it should rather than merely running again.',
    ],
    problems: [
      {
        title: 'No heat, or only very mild warmth',
        detail:
          'On condenser models we test the heating element and thermal protection. On heat pump models the fault is more often a sensor or the compressor circuit, which needs careful diagnosis before anything is condemned.',
      },
      {
        title: 'Cycle time has crept up over months',
        detail:
          'The clearest sign of a fouled heat exchanger. Self-cleaning systems reduce lint build-up but do not eliminate it, and a proper manual clean restores the original cycle times.',
      },
      {
        title: 'Condensate water tank not filling, or leaking underneath',
        detail:
          'A failed condensate pump, a blocked drain channel, or a split hose in the collection circuit. Water appearing under the machine should be dealt with promptly to protect the electronics.',
      },
      {
        title: 'Machine stops early and reports the load as dry',
        detail:
          'The moisture sensing bars are coated with softener residue and misreading conductivity. Cleaning them properly restores accurate sensor drying.',
      },
      {
        title: 'Rumbling, squealing or knocking while the drum turns',
        detail:
          'Worn drum bearings, felt seals or support rollers, or a drive belt that has begun to shred. Addressed early these are inexpensive parts.',
      },
      {
        title: 'Dryer trips the circuit breaker',
        detail:
          'Usually an element or wiring insulation failure allowing current to earth. Stop using the machine and book it as a priority call, as this is a safety fault.',
      },
    ],
    faqs: [
      {
        q: 'Are you an authorised Siemens dryer service centre in Pune?',
        a: 'No. Top Cool Service is an independent multi-brand repair company with no affiliation with or authorisation from Siemens. For an in-warranty dryer, approach Siemens directly using the details in your appliance documentation.',
      },
      {
        q: 'Is there a Siemens authorised toll free number for dryer service?',
        a: 'Siemens publishes its own service contact details in your product documentation and on its official India website. We do not list brand helpline numbers here, because we are not connected to Siemens and will not risk giving you an outdated number.',
      },
      {
        q: 'My Siemens dryer has a self-cleaning condenser. Does it still need servicing?',
        a: 'Yes. Self-cleaning greatly reduces how quickly lint accumulates but does not stop it entirely, especially in humid weather. A periodic manual clean of the heat exchanger and airflow path is still worthwhile.',
      },
      {
        q: 'Do you cover Siemens dryer service near me in Pune?',
        a: 'We are a doorstep service and the technician travels to you. Book with your Pune locality and we will confirm the earliest realistic arrival window, or tell you straight away if we cannot cover your area.',
      },
      {
        q: 'The dryer is built under a worktop. Can you still work on it?',
        a: 'Yes, though we need to slide it out to reach the airflow path and the drive components. Let us know at booking if it is built under or stacked so the technician plans for it.',
      },
    ],
  },

  // -------------------------------- LG ------------------------------------
  {
    slug: 'lg-washing-machine-service-pune',
    brand: 'LG',
    appliance: 'Washing Machine',
    applianceSlug: 'washing-machine-repair',
    image: IMAGES.washingMachine,
    imageAlt: 'LG direct drive washing machine serviced at a customer home in Pune',
    h1: 'LG Washing Machine Repair & Service in Pune',
    tagline:
      'Independent doorstep repair for LG front load, top load and semi-automatic washing machines in Pune.',
    title: 'LG Washing Machine Repair & Service in Pune',
    description:
      'Independent LG washing machine repair and service in Pune. IE, OE, UE, dE and LE error codes, direct drive motor faults and tub bearing noise fixed at your doorstep.',
    keywords:
      'LG washing machine repair and service Pune, LG washing machine service near me, LG washing machine service center Pune, LG washing machine repair near me',
    overview: [
      'LG washing machines are among the most common we attend, largely because there are simply so many of them in service. Their direct drive design removes the belt as a failure point, which shifts the fault pattern towards the rotor and stator assembly, the hall sensor and the tub bearings instead.',
      'The other advantage of LG machines is that they tell you a great deal about what is wrong. The displayed error code narrows the diagnosis considerably before a technician even arrives, so if you can send us the code when you book, we can usually bring the right part on the first visit.',
    ],
    problems: [
      {
        title: 'IE error - machine not filling with water',
        detail:
          'Low tap pressure, a closed or partly closed inlet tap, a scaled inlet filter gauze, or a failed inlet valve. We work through these in order rather than replacing the valve on sight.',
      },
      {
        title: 'OE error - water not draining',
        detail:
          'A blocked drain pump filter, a kinked or badly routed outlet hose, or a failed drain pump. Coins and lint in the pump chamber are the most frequent finding.',
      },
      {
        title: 'UE error - load unbalanced, spin will not complete',
        detail:
          'Often just a bulky item bunching on one side, but persistent UE errors point to worn suspension, a failing hall sensor, or a machine that is not sitting level.',
      },
      {
        title: 'dE error - door not detected as closed',
        detail:
          'The door lock switch or its wiring has failed, or the latch itself is worn. The machine will refuse to start until the closure is confirmed.',
      },
      {
        title: 'LE error and direct drive motor faults',
        detail:
          'A locked motor condition, from the rotor, the stator windings, the hall sensor, or something jamming the drum. Testing the sensor and windings identifies which before any part is ordered.',
      },
      {
        title: 'Loud metallic noise during spin',
        detail:
          'Tub bearing wear, or a foreign object between the inner and outer drum. We check the cheap possibility first, since a trapped coin costs a fraction of a bearing job.',
      },
    ],
    faqs: [
      {
        q: 'Are you an LG authorised washing machine service centre in Pune?',
        a: 'No. Top Cool Service is an independent multi-brand appliance repair business. We are not affiliated with, endorsed by, or an authorised service partner of LG. If your machine is still under manufacturer warranty, contact LG directly first, because an independent repair may affect that cover.',
      },
      {
        q: 'What is the LG authorised toll free number?',
        a: 'It is printed in your product documentation and listed on the official LG India website. We do not republish brand helpline numbers here, because we have no connection to LG and would rather you took the number from the source than from a third party.',
      },
      {
        q: 'What does the error code on my LG display actually mean?',
        a: 'Broadly: IE is a fill problem, OE is a drain problem, UE is an unbalanced load, dE is a door detection fault and LE is a locked motor. Send us the code with your model number when you book, and we can usually tell you the likely cause and bring the right spare.',
      },
      {
        q: 'Do you offer LG washing machine service near me in Pune?',
        a: 'We are a doorstep service rather than a walk-in centre, so the technician comes to you. Give us your Pune locality when booking and we will confirm coverage and an arrival window before anyone is assigned.',
      },
      {
        q: 'Is a direct drive motor repairable, or does the whole unit need replacing?',
        a: 'It depends on which component has failed. A hall sensor is an inexpensive part, whereas a damaged stator is a much larger job. We test properly and tell you which it is before quoting.',
      },
    ],
  },
  {
    slug: 'lg-dryer-service-pune',
    brand: 'LG',
    appliance: 'Dryer',
    applianceSlug: 'dryer-repair',
    image: IMAGES.dryer,
    imageAlt: 'LG clothes dryer lint filter and drum inspected during a repair visit in Pune',
    h1: 'LG Dryer Repair & Service in Pune',
    tagline: 'Independent doorstep repair for LG condenser and heat pump clothes dryers across Pune.',
    title: 'LG Dryer Repair & Service in Pune',
    description:
      'Independent LG dryer repair and service in Pune. No-heat faults, blocked heat exchangers, sensor drying errors and drum noise diagnosed and fixed at your doorstep.',
    keywords:
      'LG dryer repair and service Pune, LG dryer service near me, LG dryer service center Pune, LG dryer repair near me',
    overview: [
      'LG dryers, particularly the inverter heat pump models, dry at much lower temperatures than conventional dryers. That is gentler on fabrics and cheaper to run, but it also means the machine is far less tolerant of restricted airflow, since it has no excess heat in reserve to compensate with. A partially blocked filter that a hot vented dryer would shrug off will visibly lengthen an LG heat pump cycle.',
      'We service LG condenser and heat pump dryers at your home. Most complaints about slow drying turn out to be a maintenance issue rather than a failed component, and we will tell you when that is the case instead of selling you parts.',
    ],
    problems: [
      {
        title: 'Clothes still damp at the end of the programme',
        detail:
          'On heat pump models, check the filters first. A lint-matted primary filter or a fouled heat exchanger is the leading cause, well ahead of any component failure.',
      },
      {
        title: 'No heat at all during the cycle',
        detail:
          'On condenser models this points to the heating element or thermal protection. On heat pump models we test the sealed system sensors and compressor circuit before drawing conclusions.',
      },
      {
        title: 'Water tank not filling or leaking beneath the machine',
        detail:
          'The condensate pump, its float switch, or a split or detached hose in the collection circuit. Water pooling under the machine needs attention promptly.',
      },
      {
        title: 'Error code shown on the display',
        detail:
          'LG dryers report faults clearly. Send us the code with your model number when booking and we will usually know what to bring before the technician sets out.',
      },
      {
        title: 'Loud rumbling or squealing from the drum',
        detail:
          'Worn drum rollers, idler pulley or belt. These are inexpensive parts, but a neglected roller can eventually damage the drum itself.',
      },
      {
        title: 'Sensor dry cycles ending far too early',
        detail:
          'Moisture sensor bars coated with fabric softener film misread the load as dry. Cleaning them restores accurate cycle length.',
      },
    ],
    faqs: [
      {
        q: 'Are you an LG authorised dryer service centre in Pune?',
        a: 'No. We are an independent multi-brand appliance repair company with no affiliation with or authorisation from LG. For an in-warranty dryer, contact LG directly using the details in your product documentation.',
      },
      {
        q: 'Is there an LG authorised toll free number for dryer complaints?',
        a: 'LG publishes its service contact details in your product documentation and on the official LG India website. We do not reproduce brand helpline numbers on this site, because we are not connected to LG.',
      },
      {
        q: 'Why is my LG heat pump dryer slower than my old dryer?',
        a: 'Heat pump dryers genuinely run longer cycles by design, because they dry at a lower temperature to save energy and protect fabrics. If cycles have got noticeably longer than they used to be on the same machine, that is a maintenance issue and worth a service visit.',
      },
      {
        q: 'Do you provide LG dryer service near me in Pune?',
        a: 'We are a doorstep service and travel to your home. Book with your Pune locality and we will confirm the earliest realistic arrival window, or say straight away if your area is outside what we can cover.',
      },
      {
        q: 'How do I keep an LG heat pump dryer running efficiently?',
        a: 'Clean the primary lint filter after every load and the secondary filter or heat exchanger regularly. These machines depend on unrestricted airflow far more than conventional dryers do, and this one habit prevents most of the faults we attend.',
      },
    ],
  },
  {
    slug: 'lg-dishwasher-service-pune',
    brand: 'LG',
    appliance: 'Dishwasher',
    applianceSlug: 'dishwasher-repair',
    image: IMAGES.dishwasher,
    imageAlt: 'LG dishwasher spray arms and filter checked during a doorstep service in Pune',
    h1: 'LG Dishwasher Repair & Service in Pune',
    tagline: 'Independent doorstep repair for LG freestanding and built-in dishwashers across Pune.',
    title: 'LG Dishwasher Repair & Service in Pune',
    description:
      'Independent LG dishwasher repair and service in Pune. AE leak detection, IE and OE errors, poor wash results and heating faults fixed at your doorstep.',
    keywords:
      'LG dishwasher repair and service Pune, LG dishwasher service near me, LG dishwasher service center Pune, LG dishwasher repair near me',
    overview: [
      'LG dishwashers use an inverter direct drive wash motor and, on many models, multiple spray arms rather than a single rotating arm. The design cleans well, but it also means wash performance drops noticeably when even one arm is partially blocked by scale, which is a common outcome on a hard water supply.',
      'We repair freestanding and built-in LG dishwashers at your home. Like LG washing machines, these units report faults through clear error codes, so sending us the code at the time of booking measurably improves the chance of a single-visit repair.',
    ],
    problems: [
      {
        title: 'AE error - leak detected',
        detail:
          'The leak sensor in the base has been triggered. We find the actual source, commonly the sump seal, a door gasket or a loose hose connection, rather than resetting the sensor and returning the machine.',
      },
      {
        title: 'IE error - not filling with water',
        detail:
          'A closed tap, low supply pressure, a scaled inlet filter or a failed inlet valve. We verify the supply before condemning any component.',
      },
      {
        title: 'OE error - not draining',
        detail:
          'A blocked filter, a jammed drain pump impeller, or an outlet hose without the required high loop. Food debris in the pump chamber is the usual cause.',
      },
      {
        title: 'Dishes not coming out clean',
        detail:
          'Blocked spray arm jets, a worn wash motor, or a rinse aid and detergent combination that is wrong for your water hardness. We check all three before recommending parts.',
      },
      {
        title: 'Water not heating, dishes cold and greasy',
        detail:
          'A failed heating circuit or temperature sensor. Without correct water temperature, detergent will not dissolve or act properly, so cleaning results suffer even though the cycle appears to run.',
      },
      {
        title: 'Cycle will not start or the panel is unresponsive',
        detail:
          'We test the door latch switch and the mains supply first, then the control board. Power fluctuations are a frequent underlying cause wherever the supply is unstable.',
      },
    ],
    faqs: [
      {
        q: 'Are you an LG authorised dishwasher service centre in Pune?',
        a: 'No. Top Cool Service is an independent multi-brand repair company and is not an authorised, affiliated or endorsed LG service partner. If your dishwasher is still under manufacturer warranty, contact LG directly first, since independent work can affect that warranty.',
      },
      {
        q: 'What is the LG authorised toll free number for dishwasher service?',
        a: 'You will find it in your product documentation and on the official LG India website. We do not publish brand helpline numbers here, because we are not connected to LG and cannot guarantee such a number stays current.',
      },
      {
        q: 'What does the AE code on my LG dishwasher mean?',
        a: 'It indicates the machine has detected water where it should not be, usually in the base tray. Turn off the water supply and book a visit, because the code is a symptom of a leak that will not resolve on its own.',
      },
      {
        q: 'Do you offer LG dishwasher service near me in Pune?',
        a: 'We are a doorstep service, so the technician comes to your kitchen. Provide your Pune locality at booking and we will confirm whether we cover it and what arrival window to expect.',
      },
      {
        q: 'Will hard water damage an LG dishwasher?',
        a: 'It will not usually destroy the machine, but it does gradually block spray jets, coat the heating circuit and dull your glassware. Using dishwasher salt where the model supports it, and having the wash circuit descaled periodically, keeps performance where it should be.',
      },
    ],
  },
];

/** Look up a brand service page definition by its URL slug. */
export function getBrandService(slug) {
  return brandServices.find((entry) => entry.slug === slug);
}

/** All pages for a given brand, used for sibling internal linking. */
export function getBrandSiblings(brand, excludeSlug) {
  return brandServices.filter((entry) => entry.brand === brand && entry.slug !== excludeSlug);
}

/** All pages for a given appliance, used for cross-brand internal linking. */
export function getApplianceSiblings(applianceSlug, excludeSlug) {
  return brandServices.filter(
    (entry) => entry.applianceSlug === applianceSlug && entry.slug !== excludeSlug
  );
}

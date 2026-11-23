/**
 * DISTRICT 1 DATASET: ILOILO FIRST CONGRESSIONAL DISTRICT
 * Dedicated Dataset File for District 1 Municipalities:
 * - Oton (Immaculate Conception Parish Church)
 * - Tigbauan (SEAFDEC FishWorld)
 * - Guimbal (Bantayan Watch Tower / Pescadores Balwarte)
 * - Miag-ao (Miag-ao Church / Santo Tomas de Villanueva)
 * - San Joaquin (Garin Farm Pilgrimage Resort)
 * 
 * Zero Emojis — Clean Vector Stroke Icons Only
 */

const ILOILO_DISTRICT_1_DATA = [
  {
    id: "oton",
    municipality: "Oton",
    name: "Immaculate Conception Parish Church",
    type: "HERITAGE EXPLORATION & HISTORIC PARISH",
    district: "1st District of Iloilo",
    maps: "MFVH+4P6, J.C. Zulueta St, Oton, 5020 Iloilo",
    plusCode: "MFVH+4P6",
    coordinates: {
      latitude: 10.692830,
      longitude: 122.479082
    },
    historicalSignificance: "The Immaculate Conception Parish Church of Oton has roots dating back to 1572, during the early Spanish colonial period, when the Augustinians established their religious mission in the town. Its former Spanish-era church was considered one of the grandest churches in Western Visayas but was severely destroyed by the January 25, 1948 Lady Caycay earthquake. The present church represents the community's continued religious devotion and reconstruction after the disaster.",
    activities: [
      "Church Visit",
      "Heritage Exploration",
      "Architecture Viewing",
      "Historical Sightseeing",
      "Photography",
      "Walking"
    ],
    iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
    cards: [
      {
        question: "What are the historic origins and foundational period of the Immaculate Conception Parish Church of Oton?",
        answer: "The parish has deep roots tracing back to 1572 during the early Spanish colonial period, when Augustinian missionaries founded their religious mission in Oton, establishing it as one of the earliest settlements and spiritual hubs on Panay Island.",
        factoid: "The former Spanish-era church of Oton was celebrated as one of the largest and most architecturally majestic church edifices in Western Visayas before the mid-20th century.",
        category: "AUGUSTINIAN MISSION"
      },
      {
        question: "What catastrophic natural disaster devastated the historic church structure in 1948?",
        answer: "On January 25, 1948, the massive magnitude 7.8 'Lady Caycay' earthquake struck Panay Island, completely toppling the historic Greek-cross Spanish church. The present modern structure stands as a testament to the resilient faith and community reconstruction of Oton.",
        factoid: "The Lady Caycay earthquake caused widespread devastation across Western Visayas, destroying numerous bell towers and colonial heritage structures across Iloilo and Antique.",
        category: "HISTORIC EARTHQUAKE"
      },
      {
        question: "What heritage and cultural activities can visitors experience at Oton Church today?",
        answer: "Visitors can explore the church's sacred architecture and colorful stained-glass features, pray and attend Mass, photograph the church facade and grounds, and take a peaceful walking tour through the adjacent historic municipal town plaza.",
        factoid: "Oton is also historically famous as the discovery site of the ancient Oton Gold Death Mask, a pre-colonial burial artifact from the Katagman civilization.",
        category: "VISITOR ACTIVITIES"
      }
    ]
  },
  {
    id: "tigbauan",
    municipality: "Tigbauan",
    name: "SEAFDEC FishWorld",
    type: "MUSEUM & AQUATIC CONSERVATION",
    district: "1st District of Iloilo",
    maps: "M9C3+GF Tigbauan, Iloilo",
    plusCode: "M9C3+GF",
    coordinates: {
      latitude: 10.671250,
      longitude: 122.353984
    },
    historicalSignificance: "SEAFDEC FishWorld is a museum-aquarium and educational visitor center established within the Southeast Asian Fisheries Development Center Aquaculture Department in Tigbauan. Its historical significance is connected to the development of fisheries research and aquaculture in the Philippines, particularly after SEAFDEC selected Tigbauan as the location of its Aquaculture Department in 1973. FishWorld officially opened to the public on July 7, 2000, to promote awareness of aquatic biodiversity, fisheries, and environmental conservation.",
    activities: [
      "Museum Exploring",
      "Aquarium Viewing",
      "Marine Life Observation",
      "Educational Tour",
      "Environmental Learning",
      "Photography",
      "Family Activity"
    ],
    iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6s-7.56-2.54-8.5-6Z"/><path d="M18 12h.01"/><path d="M2 10s2.5 1 2.5 2-2.5 2-2.5 2"/></svg>`,
    cards: [
      {
        question: "What is the historical background of SEAFDEC's presence in Tigbauan, Iloilo?",
        answer: "In 1973, the Southeast Asian Fisheries Development Center (SEAFDEC) chose Tigbauan as the permanent international headquarters for its Aquaculture Department (AQD), establishing the town as a global pioneer in coastal fisheries research, tiger prawn breeding, and marine sciences.",
        factoid: "SEAFDEC AQD is an intergovernmental treaty organization formed by Southeast Asian governments and Japan to advance sustainable aquaculture technology.",
        category: "AQUACULTURE HERITAGE"
      },
      {
        question: "When did SEAFDEC FishWorld open to the public and what is its primary mission?",
        answer: "FishWorld officially opened on July 7, 2000, as an educational museum-aquarium and visitor center designed to bridge scientific marine research with public education, aquatic biodiversity preservation, and coastal environmental stewardship.",
        factoid: "FishWorld houses thousands of preserved marine flora and fauna specimens, including rare giant clams, sea turtles, corals, and deep-sea benthic organisms.",
        category: "MUSEUM & SCIENCE"
      },
      {
        question: "What exhibits and educational activities await visitors at FishWorld?",
        answer: "Visitors of all ages can tour live freshwater and saltwater aquarium tanks, examine taxidermied marine wildlife, learn about sustainable fish farming, watch scientific presentations, and participate in guided environmental learning tours.",
        factoid: "FishWorld also serves as an emergency rescue and rehabilitation center for endangered sea turtles (pawikan) and marine mammals found stranded along Panay coasts.",
        category: "EDUCATIONAL TOURS"
      }
    ]
  },
  {
    id: "guimbal",
    municipality: "Guimbal",
    name: "Bantayan Watch Tower",
    type: "COASTAL DEFENSE & SPANISH WATCHTOWER",
    district: "1st District of Iloilo",
    maps: "M85F+HXX, Guimbal, Iloilo",
    plusCode: "M85F+HXX",
    coordinates: {
      latitude: 10.658990,
      longitude: 122.324980
    },
    historicalSignificance: "The Bantayan Watchtower, also known as Pescadores Balwarte, is a surviving Spanish-era coastal defense structure in Guimbal. It was part of the watchtower system constructed to protect coastal communities from maritime raids, particularly during the period when settlements in Panay experienced attacks by Moro raiders. Watchmen used these towers to observe approaching vessels and warn residents of potential danger, helping communities prepare for attacks.",
    activities: [
      "Heritage Exploration",
      "Historical Sightseeing",
      "Architecture Viewing",
      "Photography",
      "Walking",
      "Cultural Learning",
      "Coastal Sightseeing"
    ],
    iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16"/><path d="M7 22V9l3-5h4l3 5v13"/><path d="M10 9h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
    cards: [
      {
        question: "What strategic defense role did the Bantayan Watchtower (Balwarte) serve during the Spanish colonial era?",
        answer: "Constructed along the shoreline as part of an integrated naval vigilance network, the Bantayan Watchtower enabled lookouts to spot approaching seaborne raiders from across the Panay Gulf and sound alarms to evacuate coastal villagers into fortified stone sanctuaries.",
        factoid: "Watchmen used large brass gongs, hollow wooden conches ('budyong'), and beacon fires lit atop the towers to warn neighboring settlements in seconds.",
        category: "MARITIME DEFENSE"
      },
      {
        question: "What materials and architectural design characterize the Pescadores Balwarte in Guimbal?",
        answer: "The watchtower was built out of indigenous coral stones, limestone mortar, and river boulders. Designed with thick stone parapets, narrow observation slits, and an elevated vantage point, it withstood centuries of coastal monsoons and military bombardments.",
        factoid: "Guimbal is historically known as the 'Watchtower Capital' of southern Iloilo, possessing three remarkably well-preserved Spanish balwartes along its sandy beaches.",
        category: "STONE ARCHITECTURE"
      },
      {
        question: "What can travelers experience when visiting the Guimbal watchtowers and heritage zone?",
        answer: "Visitors can inspect the surviving 17th-century masonry up close, take coastal photography overlooking Guimbal's dark sand shores, admire the ocean scenery, and stroll to the nearby yellow-sandstone Guimbal Church and municipal plaza.",
        factoid: "Guimbal Church itself was built in 1774 using yellow sandstone and coral quarried from the nearby island province of Guimaras.",
        category: "COASTAL HERITAGE"
      }
    ]
  },
  {
    id: "miagao",
    municipality: "Miag-ao",
    name: "Miag-ao Church",
    type: "UNESCO WORLD HERITAGE SITE",
    district: "1st District of Iloilo",
    maps: "J6RP+P54, Zulueta Ave, Miagao, 5023 Iloilo",
    plusCode: "J6RP+P54",
    coordinates: {
      latitude: 10.641510,
      longitude: 122.236816
    },
    historicalSignificance: "The Santo Tomas de Villanueva Parish Church, commonly known as Miag-ao Church, is one of the most significant historical and architectural landmarks in the Philippines. Construction began in 1787 and was completed in 1797 during the Spanish colonial period. It was built using local materials, including limestone and coral stones, and designed with massive walls and defensive features that helped protect the community against attacks. Its façade is particularly famous for its intricate carvings depicting St. Christopher carrying the Child Jesus, surrounded by tropical vegetation that reflects Filipino culture and local craftsmanship. In 1993, it was included in the UNESCO World Heritage List as part of the Baroque Churches of the Philippines.",
    activities: [
      "Heritage Exploration",
      "Church Visit",
      "Architecture Viewing",
      "Historical Sightseeing",
      "Photography",
      "Walking",
      "Cultural Learning"
    ],
    iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
    cards: [
      {
        question: "When was Miag-ao Church constructed and why is it celebrated as a fortress-church?",
        answer: "Construction started in 1787 and concluded in 1797 under Fray Francisco Gonzales Maximo. Constructed with 1.5-meter-thick yellow sandstone walls, massive buttresses, and twin bell towers that served as observation bastions, it protected the townspeople against maritime attacks.",
        factoid: "The ochre color of the church comes from local yellow sandstone quarried from the mountains of Igbaras and the riverbeds of San Joaquin.",
        category: "FORTRESS ARCHITECTURE"
      },
      {
        question: "What distinct botanical relief on the church facade reflects Filipino folk baroque art?",
        answer: "The pediment features Saint Christopher in native Filipino attire carrying the Christ Child while grasping a tropical coconut palm tree. The relief is framed by indigenous papaya and guava trees, blending European baroque sculpting with Philippine flora and indigenous craftsmanship.",
        factoid: "In December 1993, Miag-ao Church was inscribed on the UNESCO World Heritage List under the 'Baroque Churches of the Philippines'.",
        category: "UNESCO PEDIMENT"
      },
      {
        question: "What visitor opportunities are available around Miag-ao Church and its heritage zone?",
        answer: "Visitors can inspect the intricate facade carvings, hire local guides to explain the bas-relief symbolism, tour the interior devotional nave, attend liturgical services, take photos of the historic bell towers, and visit the surrounding plaza and Hablon weaving centers.",
        factoid: "During the Philippine Revolution in 1898 and World War II, the thick stone walls of Miag-ao Church served as a haven and military command outpost.",
        category: "TOURIST EXPERIENCE"
      }
    ]
  },
  {
    id: "san-joaquin",
    municipality: "San Joaquin",
    name: "Garin Farm",
    type: "AGRI-TOURISM & PILGRIMAGE RESORT",
    district: "1st District of Iloilo",
    maps: "H4WQ+PGV, Purok 2, San Joaquin, 5024 Iloilo",
    plusCode: "H4WQ+PGV",
    coordinates: {
      latitude: 10.596790,
      longitude: 122.139121
    },
    historicalSignificance: "Garin Farm is an agricultural, recreational, and religious tourism destination in San Joaquin that combines farming activities with a pilgrimage experience. Unlike centuries-old heritage structures, its significance lies in showcasing modern agricultural practices and the relationship between rural livelihood, recreation, and religious tourism in Iloilo. Its most recognizable attraction is the Pilgrimage Hill, featuring biblical scenes and a staircase leading to a white hilltop area known as Heaven on Earth, symbolizing a spiritual journey from creation to ascension.",
    activities: [
      "Farm Tour",
      "Agri-Tourism",
      "Pilgrimage",
      "Nature Sightseeing",
      "Swimming",
      "Ziplining",
      "Boating",
      "Fishing",
      "Buggy Riding",
      "Photography"
    ],
    iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
    cards: [
      {
        question: "How does Garin Farm integrate agriculture with contemporary pilgrimage tourism?",
        answer: "Spanning 14 hectares in San Joaquin, Garin Farm merges functional crop farming, livestock production, and renewable agro-practices with a comprehensive spiritual retreat, illustrating modern sustainable farming alongside faith tourism.",
        factoid: "The farm practices integrated zero-waste organic agriculture, utilizing livestock by-products for biogas power and organic fertilizer.",
        category: "AGRI-TOURISM INNOVATION"
      },
      {
        question: "What is the Pilgrimage Hill and 'Heaven on Earth' experience at Garin Farm?",
        answer: "Visitors ascend a 480-step staircase surrounded by life-size statues depicting major biblical episodes from Genesis through Passion, culminating inside a dark meditation tunnel that opens into an expansive, pure-white hilltop sanctuary representing Heaven.",
        factoid: "The all-white sanctuary atop the mountain has become one of the most photographed religious travel landmarks in the entire Visayas.",
        category: "PILGRIMAGE HILL"
      },
      {
        question: "What outdoor recreational activities are offered to visitors across the farm?",
        answer: "Beyond spiritual meditation, travelers can zipline 300 meters across the valley, ride paddleboats on the lagoon, go freshwater fishing, swim in the hilltop swimming pool, ride golf buggies, and interact with farm animals in the agricultural zones.",
        factoid: "Garin Farm offers sweeping panoramic 360-degree vistas overlooking both the southern mountain ridges of Panay and the waters of the Panay Gulf.",
        category: "RECREATIONAL ACTIVITIES"
      }
    ]
  }
];

// Global window registration
if (typeof window !== "undefined") {
  window.ILOILO_DISTRICT_1_DATA = ILOILO_DISTRICT_1_DATA;
}

// CommonJS export
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ILOILO_DISTRICT_1_DATA };
}

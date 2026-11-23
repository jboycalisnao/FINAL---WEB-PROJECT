/**
 * KINAADMAN | The Panay Heritage Quest
 * Iloilo 5th Congressional District — Places & Flashcards Dataset per Municipality
 * Municipalities: Barotac Viejo, Batad, Carles, Concepcion, Estancia
 */

const ILOILO_DISTRICT_5_DATA = {
  province: "Iloilo",
  region: "Region VI - Western Visayas",
  district: "Iloilo District 5",
  districtNumber: 5,
  totalMunicipalities: 5,
  totalPlaces: 7,
  municipalities: [
    {
      id: "barotac-viejo",
      name: "Barotac Viejo",
      district: "Iloilo District 5",
      places: [
        {
          id: "barotac-viejo-nagpana-falls",
          name: "Nagpana Falls (Sitio Nagpana)",
          municipality: "Barotac Viejo",
          type: "INDIGENOUS ATI HERITAGE & WATERFALL",
          maps: "4R6F+2C2, Sitio Nagpana, Barangay Lipata, Barotac Viejo, 5011 Iloilo",
          plusCode: "4R6F+2C2",
          coordinates: {
            latitude: 11.110063,
            longitude: 122.823563
          },
          historicalSignificance:
            "Nagpana Falls sits within Sitio Nagpana, Barangay Lipata in Barotac Viejo—an ancestral domain of the indigenous Ati (Aeta) community in northern Iloilo. Beyond its natural cascade and forested mountain backdrop, the site holds deep cultural significance as a center of living indigenous heritage, where Ati traditions, crafts, and community stewardship have been preserved across generations.",
          touristActivities:
            "Visitors can hike to the waterfall, enjoy the cool natural pool, experience traditional nito vine weaving, watch indigenous dances, sample heirloom Kape Nagpana roasted by Ati women, and take nature and cultural photographs.",
          activities: [
            "Waterfall Sightseeing",
            "Cultural Learning",
            "Heritage Exploration",
            "Hiking",
            "Photography",
            "Nature Sightseeing",
            "Food Tasting"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
          cards: [
            {
              question: "What makes Sitio Nagpana and Nagpana Falls culturally significant in northern Iloilo?",
              answer: "Situated in Barangay Lipata, Barotac Viejo, Sitio Nagpana is an ancestral domain of the indigenous Ati (Aeta) community, serving as a living sanctuary of Ati traditions, handicrafts, and community stewardship alongside its forested mountain waterfall.",
              factoid: "Nagpana Falls is located at Plus Code 4R6F+2C2 (11.110063° N, 122.823563° E).",
              category: "ATI ANCESTRAL DOMAIN"
            },
            {
              question: "What heirloom culinary specialty and traditional craft can visitors encounter at Sitio Nagpana?",
              answer: "Visitors can taste heirloom Kape Nagpana—locally roasted coffee prepared by Ati women—and witness traditional nito vine weaving and indigenous cultural dances.",
              factoid: "Supporting local coffee and craft initiatives directly strengthens indigenous community stewardship.",
              category: "LIVING CRAFTS & COFFEE"
            },
            {
              question: "What outdoor and cultural activities await travelers at Nagpana Falls?",
              answer: "Travelers can hike to the waterfall, swim in the cool natural catch pool beneath the forested ridge, learn from Ati cultural bearers, and capture both nature and heritage photography.",
              factoid: "Activities include Waterfall Sightseeing, Cultural Learning, Heritage Exploration, Hiking, Photography, Nature Sightseeing, and Food Tasting.",
              category: "WATERFALL & CULTURE"
            }
          ]
        }
      ]
    },
    {
      id: "batad",
      name: "Batad",
      district: "Iloilo District 5",
      places: [
        {
          id: "batad-alapasco-lake",
          name: "Alapasco Lake",
          municipality: "Batad",
          type: "INLAND FRESHWATER LAKE & NATURE RETREAT",
          maps: "93Q9+8Q, Batad, 5016 Iloilo",
          plusCode: "93Q9+8Q",
          coordinates: {
            latitude: 11.388313,
            longitude: 123.069438
          },
          historicalSignificance:
            "Alapasco Lake is a serene inland freshwater body in Batad, highlighting the diverse interior topography of a municipality equally known for its coastal coves and islets along the Visayan Sea. Historically, inland lakes and watersheds in Batad have supported rural agriculture and local livelihoods away from the shoreline.",
          touristActivities:
            "Visitors can enjoy quiet nature sightseeing, walk along the scenic banks, observe local birdlife, and take landscape photographs.",
          activities: [
            "Nature Sightseeing",
            "Photography",
            "Outdoor Relaxation",
            "Walking"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
          cards: [
            {
              question: "How does Alapasco Lake contrast with Batad's well-known coastal geography?",
              answer: "While Batad is famed for its coastal coves and islets facing the Visayan Sea, Alapasco Lake reveals the town's tranquil interior topography as a freshwater body nestled inland.",
              factoid: "Alapasco Lake is marked at Plus Code 93Q9+8Q (11.388313° N, 123.069438° E).",
              category: "INLAND TOPOGRAPHY"
            },
            {
              question: "What historical role have Batad's inland lakes and watersheds played in community life?",
              answer: "Historically, inland freshwater lakes and watersheds like Alapasco Lake have sustained Batad's rural agriculture and interior livelihoods beyond its coastal fishing villages.",
              factoid: "Freshwater basins help balance local agriculture and wetland biodiversity in northeastern Iloilo.",
              category: "WATERSHED LIVELIHOOD"
            },
            {
              question: "What relaxing outdoor activities can visitors enjoy at Alapasco Lake?",
              answer: "Visitors can take quiet strolls along the scenic shoreline, watch local birdlife around the water, unwind in nature, and capture serene landscape photographs.",
              factoid: "Recommended activities include Nature Sightseeing, Photography, Outdoor Relaxation, and Walking.",
              category: "NATURE RELAXATION"
            }
          ]
        }
      ]
    },
    {
      id: "carles",
      name: "Carles",
      district: "Iloilo District 5",
      places: [
        {
          id: "carles-tangke-saltwater-lagoon",
          name: "Tangke Saltwater Lagoon",
          municipality: "Carles",
          type: "KARST LAGOON & ISLAS DE GIGANTES WONDER",
          maps: "H8FH+7RP, Isla de Gigantes Sur, Carles, 5019 Iloilo",
          plusCode: "H8FH+7RP",
          coordinates: {
            latitude: 11.57,
            longitude: 123.33
          },
          historicalSignificance:
            "Tangke Saltwater Lagoon is a natural emerald saltwater pool enclosed by towering karst limestone cliffs on Isla de Gigantes Sur in Carles, northern Iloilo. Steeped in local folklore, community traditions hold that its waters magically rise on the feast of St. John the Baptist (June 24) and remind visitors to remain quiet out of respect for guardian spirits (engkantos), reflecting the deep bond between coastal communities and the natural landscape of the Islas de Gigantes.",
          touristActivities:
            "Visitors can swim in the clear emerald waters, admire the sheer limestone walls, join island-hopping tours, observe coastal scenery, and take photographs of the enclosed lagoon.",
          activities: [
            "Lagoon Swimming",
            "Island Hopping",
            "Nature Sightseeing",
            "Photography",
            "Coastal Exploration",
            "Cultural Learning"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
          cards: [
            {
              question: "What natural geological formation encloses Tangke Saltwater Lagoon on Isla de Gigantes Sur?",
              answer: "Tangke Saltwater Lagoon is a natural emerald saltwater pool completely rimmed by towering karst limestone cliffs on Isla de Gigantes Sur in Carles, northern Iloilo.",
              factoid: "Tangke Lagoon is located at Plus Code H8FH+7RP (11.57° N, 123.33° E).",
              category: "KARST LAGOON"
            },
            {
              question: "What local folklore and respectful traditions surround Tangke Saltwater Lagoon?",
              answer: "Community lore holds that the lagoon's waters mysteriously rise on the Feast of St. John the Baptist (June 24), and locals remind visitors to keep quiet out of respect for unseen guardian spirits known as engkantos.",
              factoid: "These oral traditions reflect the deep cultural bond between coastal islanders and the dramatic seascapes of Islas de Gigantes.",
              category: "ISLAND FOLKLORE"
            },
            {
              question: "What experiences highlight a stop at Tangke Saltwater Lagoon during a Gigantes tour?",
              answer: "Visitors can swim in the clear emerald saltwater pool, gaze up at the sheer limestone walls, take coastal photographs, and pair the visit with wider Islas de Gigantes island-hopping stops.",
              factoid: "Popular activities include Lagoon Swimming, Island Hopping, Nature Sightseeing, Photography, Coastal Exploration, and Cultural Learning.",
              category: "ISLAND HOPPING"
            }
          ]
        },
        {
          id: "carles-gigantes-lighthouse",
          name: "Gigantes Lighthouse",
          municipality: "Carles",
          type: "SPANISH-ERA MARITIME LIGHTHOUSE & RUINS",
          maps: "J8GW+69, Gigantes Norte Island, Carles, 5019 Iloilo",
          plusCode: "J8GW+69",
          coordinates: {
            latitude: 11.625563,
            longitude: 123.345938
          },
          historicalSignificance:
            "Gigantes Lighthouse is a historic maritime landmark located on Gigantes Norte Island in Carles. Built in 1895 during the Spanish colonial period to guide vessels safely through the Visayan Sea, the site features preserved brick ruins of the original keeper's quarters standing beside a modern solar-powered lighthouse tower, as well as proximity to pre-colonial archaeological sites at Sitio Barosbos.",
          touristActivities:
            "Visitors can explore the Spanish-era brick ruins, learn about northern Iloilo's maritime navigation history, observe sweeping views of the Visayan Sea, take historical photographs, and include the site in a Gigantes Norte tour.",
          activities: [
            "Heritage Exploration",
            "Historical Sightseeing",
            "Architecture Viewing",
            "Photography",
            "Walking",
            "Coastal Sightseeing",
            "Cultural Learning"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16"/><path d="M7 22V9l3-5h4l3 5v13"/><path d="M10 9h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
          cards: [
            {
              question: "When was Gigantes Lighthouse built and what purpose did it serve in the Visayan Sea?",
              answer: "Constructed in 1895 during the Spanish colonial era on Gigantes Norte Island in Carles, the lighthouse guided maritime vessels safely along the treacherous sea lanes of the Visayan Sea.",
              factoid: "Gigantes Lighthouse stands at Plus Code J8GW+69 (11.625563° N, 123.345938° E).",
              category: "MARITIME HISTORY"
            },
            {
              question: "What historical structures and archaeological connections exist at the lighthouse site?",
              answer: "The grounds preserve the Spanish-era brick ruins of the original lighthouse keeper's quarters standing right beside a modern solar-powered beacon tower, near pre-colonial archaeological sites at Sitio Barosbos.",
              factoid: "The pairing of 1895 brick ruins and solar navigation technology spans more than a century of Philippine maritime history.",
              category: "COLONIAL RUINS"
            },
            {
              question: "What can visitors do when touring Gigantes Lighthouse on Gigantes Norte Island?",
              answer: "Visitors can walk through the preserved Spanish brick ruins, learn northern Iloilo's navigational history, enjoy sweeping panoramas of the Visayan Sea, and capture evocative historical photographs.",
              factoid: "Activities include Heritage Exploration, Historical Sightseeing, Architecture Viewing, Photography, Walking, Coastal Sightseeing, and Cultural Learning.",
              category: "GIGANTES NORTE TOUR"
            }
          ]
        }
      ]
    },
    {
      id: "concepcion",
      name: "Concepcion",
      district: "Iloilo District 5",
      places: [
        {
          id: "concepcion-pan-de-azucar-island-mt-manaphag",
          name: "Pan de Azucar Island (Mt. Manaphag)",
          municipality: "Concepcion",
          type: "CONICAL ISLAND PEAK & COASTAL HERITAGE",
          maps: "Concepcion, 5013 Iloilo",
          plusCode: null,
          coordinates: {
            latitude: 11.283333,
            longitude: 123.166667
          },
          historicalSignificance:
            "Pan de Azucar Island is the largest of Concepcion's 16 islands in the Visayan Sea, crowned by the steep 574-meter Mt. Manaphag. Named after its \"Sugarloaf\" conical profile, the island is steeped in local legends of giants and surrounded by historic waters tied to 1600s naval battles, as well as Concepcion's Tampisaw Festival coastal traditions that celebrate island life and marine heritage.",
          touristActivities:
            "Visitors can trek up the steep slopes of Mt. Manaphag for panoramic views, relax along its golden-white beaches, take coastal and summit photographs, and include the island in a Concepcion island-hopping tour.",
          activities: [
            "Mountain Trekking",
            "Island Hopping",
            "Beach Relaxation",
            "Coastal Sightseeing",
            "Photography",
            "Cultural Learning"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
          cards: [
            {
              question: "Why is Pan de Azucar Island named 'Sugarloaf' and what peak rises at its center?",
              answer: "The largest of Concepcion's 16 islands in the Visayan Sea, Pan de Azucar ('Sugarloaf') earns its name from its striking conical profile crowned by the steep 574-meter Mt. Manaphag.",
              factoid: "Pan de Azucar Island lies in Concepcion at coordinates 11.283333° N, 123.166667° E.",
              category: "ISLAND GEOGRAPHY"
            },
            {
              question: "What folklore, naval history, and coastal festival are connected to Pan de Azucar?",
              answer: "The island is woven into local legends of giants, surrounded by waters linked to 1600s naval battles, and celebrated alongside Concepcion's Tampisaw Festival honoring coastal island life and marine heritage.",
              factoid: "Concepcion's archipelago of 16 islands makes it one of northeastern Iloilo's premier island-hopping hubs.",
              category: "LEGENDS & NAVAL LORE"
            },
            {
              question: "What adventures await visitors on Pan de Azucar Island?",
              answer: "Adventurers can trek the steep slopes of Mt. Manaphag for dramatic summit vistas, unwind along its golden-white sandy beaches, photograph the coastline, and visit neighboring islets by boat.",
              factoid: "Activities include Mountain Trekking, Island Hopping, Beach Relaxation, Coastal Sightseeing, Photography, and Cultural Learning.",
              category: "SUMMIT & SHORE"
            }
          ]
        },
        {
          id: "concepcion-lanawan-rock",
          name: "Lanawan Rock",
          municipality: "Concepcion",
          type: "COASTAL ROCK FORMATION & VIEWPOINT",
          maps: "5482+P3Q, Sitio Tagbak, Barangay Plandico, Concepcion, 5013 Iloilo",
          plusCode: "5482+P3Q",
          coordinates: {
            latitude: 11.166813,
            longitude: 123.100188
          },
          historicalSignificance:
            "Lanawan Rock is a dramatic coastal rock formation and hilltop viewpoint in Sitio Tagbak, Barangay Plandico, Concepcion. Highlighting the rugged coastal geology of northeastern Iloilo, the site connects upland hiking trails with panoramic views over Concepcion's outlying islands and the Visayan Sea, which have historically served as fishing grounds and maritime routes for local communities.",
          touristActivities:
            "Visitors can complete a 15-to-20-minute hillside trek across five viewing stations, admire the unique rock formations, take bird's-eye photographs of the surrounding islands, and enjoy coastal sightseeing.",
          activities: [
            "Hiking",
            "Nature Sightseeing",
            "Coastal Sightseeing",
            "Photography",
            "Outdoor Exploration"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
          cards: [
            {
              question: "Where is Lanawan Rock located and what coastal landscape does it overlook?",
              answer: "Located in Sitio Tagbak, Barangay Plandico, Concepcion, Lanawan Rock is a dramatic coastal rock formation and hilltop vantage point overlooking Concepcion's outlying islands and the Visayan Sea.",
              factoid: "Lanawan Rock sits at Plus Code 5482+P3Q (11.166813° N, 123.100188° E).",
              category: "COASTAL GEOLOGY"
            },
            {
              question: "How do the waters visible from Lanawan Rock connect to local history?",
              answer: "The expanse of the Visayan Sea visible from the rock ridges has historically served as vital fishing grounds and traditional maritime routes sustaining coastal communities in northeastern Iloilo.",
              factoid: "The viewpoint bridges rugged upland terrain with Concepcion's island-studded seascape.",
              category: "MARITIME HORIZON"
            },
            {
              question: "What trail experience awaits hikers visiting Lanawan Rock?",
              answer: "Visitors can hike a 15-to-20-minute hillside trail linking five scenic viewing stations, admire the weathered rock outcrops, and take sweeping bird's-eye photographs of the islands below.",
              factoid: "Activities include Hiking, Nature Sightseeing, Coastal Sightseeing, Photography, and Outdoor Exploration.",
              category: "VIEWPOINT TREK"
            }
          ]
        }
      ]
    },
    {
      id: "estancia",
      name: "Estancia",
      district: "Iloilo District 5",
      places: [
        {
          id: "estancia-fish-port",
          name: "Estancia Fish Port",
          municipality: "Estancia",
          type: "HISTORIC FISHING PORT & MARITIME COMMERCE",
          maps: "F544+98, Estancia, 5017 Iloilo",
          plusCode: "F544+98",
          coordinates: {
            latitude: 11.455938,
            longitude: 123.155813
          },
          historicalSignificance:
            "Estancia Fish Port is the bustling maritime heart of Estancia, long known as the \"Alaska of the Philippines\" for its rich fishing grounds in the Visayan Sea. The port embodies northern Iloilo's deep-rooted Panagat (fishing) culture and economic history, serving as a major regional hub for fish trading, coastal commerce, and traditional seafood preservation.",
          touristActivities:
            "Visitors can witness lively morning catch auctions, observe traditional uga (dried fish) processing and trade, learn about local fishing heritage, take documentary-style photographs, and sample fresh or dried seafood products.",
          activities: [
            "Cultural Learning",
            "Heritage Exploration",
            "Coastal Sightseeing",
            "Photography",
            "Walking",
            "Food Tasting"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6s-7.56-2.54-8.5-6Z"/><path d="M18 12h.01"/><path d="M2 10s2.5 1 2.5 2-2.5 2-2.5 2"/></svg>`,
          cards: [
            {
              question: "Why has Estancia long been hailed as the 'Alaska of the Philippines'?",
              answer: "Estancia earned the nickname for its extraordinarily rich marine fishing grounds in the Visayan Sea, with Estancia Fish Port serving as the bustling maritime center of northern Iloilo's fish trade and coastal economy.",
              factoid: "Estancia Fish Port is located at Plus Code F544+98 (11.455938° N, 123.155813° E).",
              category: "MARITIME ECONOMY"
            },
            {
              question: "What traditional coastal livelihood and preservation craft are showcased at Estancia Fish Port?",
              answer: "The port embodies northern Iloilo's deep-rooted Panagat (fishing) heritage, serving as a regional hub for fresh catch trading and traditional uga (sun-dried fish) processing.",
              factoid: "Dried fish (uga) from Estancia is traded across Panay and neighboring Visayan provinces.",
              category: "PANAGAT HERITAGE"
            },
            {
              question: "What lively cultural scenes can visitors witness at Estancia Fish Port?",
              answer: "Early visitors can watch energetic morning catch auctions, observe traditional uga drying and sorting, capture documentary photography of coastal commerce, and taste fresh or dried local seafood.",
              factoid: "Activities include Cultural Learning, Heritage Exploration, Coastal Sightseeing, Photography, Walking, and Food Tasting.",
              category: "PORT EXPERIENCE"
            }
          ]
        }
      ]
    }
  ]
};

if (typeof window !== "undefined") {
  window.ILOILO_DISTRICT_5_DATA = ILOILO_DISTRICT_5_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = ILOILO_DISTRICT_5_DATA;
}

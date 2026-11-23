/**
 * KINAADMAN | The Panay Heritage Quest
 * Iloilo 2nd Congressional District — Places & Flashcards Dataset per Municipality
 * Municipalities: Alimodian, Leganes, Leon, New Lucena, Pavia, San Miguel, Santa Barbara, Zarraga
 */

const ILOILO_DISTRICT_2_DATA = {
  province: "Iloilo",
  region: "Region VI - Western Visayas",
  district: "Iloilo District 2",
  districtNumber: 2,
  totalMunicipalities: 8,
  totalPlaces: 8,
  municipalities: [
    {
      id: "alimodian",
      name: "Alimodian",
      district: "Iloilo District 2",
      places: [
        {
          id: "alimodian-agony-hill",
          name: "Agony Hill",
          municipality: "Alimodian",
          type: "HOLY WEEK PILGRIMAGE & UPLAND SHRINE",
          maps: "QCXM+7PH, Sitio Taban, Barangay Taban-Maguining, Alimodian, Iloilo",
          plusCode: "QCXM+7PH",
          coordinates: {
            latitude: 10.7981925,
            longitude: 122.434355
          },
          historicalSignificance:
            "Agony Hill is a well-known Holy Week pilgrimage site in Sitio Taban, Barangay Taban-Maguining, Alimodian, Iloilo. Rising to about 100 meters, it is known for its Stations of the Cross, peaceful mountain setting, and sweeping views of the surrounding town and uplands. The hill became a religious destination after local religious leaders brought devotional activities to the community, inspiring the placement of a large wooden cross at its summit; a Stations of the Cross was built there in 1966. For Alimodian residents, Agony Hill represents faith, sacrifice, and community devotion, especially during Lent.",
          touristActivities:
            "Visitors can walk the Stations of the Cross, pray, reflect, and enjoy the natural scenery. It is especially meaningful during Holy Week, when pilgrims gather for the Via Crucis.",
          activities: [
            "Pilgrimage",
            "Stations of the Cross",
            "Walking",
            "Nature Sightseeing",
            "Cultural Learning"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
          cards: [
            {
              question: "Where is Agony Hill located and what devotional milestone established it as a pilgrimage landmark?",
              answer: "Located in Sitio Taban, Barangay Taban-Maguining in Alimodian, Agony Hill rises roughly 100 meters above the town. Local religious leaders brought devotional activities to the community, placing a large wooden cross at its summit before a Stations of the Cross was constructed in 1966.",
              factoid: "Google Maps Plus Code QCXM+7PH marks Agony Hill at coordinates 10.7981925° N, 122.434355° E.",
              category: "PILGRIMAGE ORIGINS"
            },
            {
              question: "What does Agony Hill symbolize for the residents of Alimodian during Lent?",
              answer: "For Alimodian residents, Agony Hill embodies faith, sacrifice, and enduring community devotion, serving as a cherished sanctuary where families and faithful gather annually during Holy Week for the Via Crucis.",
              factoid: "The peaceful mountain setting offers sweeping panoramic views of Alimodian's town center and surrounding uplands.",
              category: "LENTEN DEVOTION"
            },
            {
              question: "What activities can visitors and pilgrims experience at Agony Hill?",
              answer: "Visitors can walk along the Stations of the Cross to the summit, spend quiet moments in prayer and reflection, join the Holy Week Via Crucis procession, and take in the natural mountain scenery.",
              factoid: "Recommended activities include Pilgrimage, Stations of the Cross, Walking, Nature Sightseeing, and Cultural Learning.",
              category: "VISITOR EXPERIENCE"
            }
          ]
        }
      ]
    },
    {
      id: "leganes",
      name: "Leganes",
      district: "Iloilo District 2",
      places: [
        {
          id: "leganes-integrated-katunggan-ecopark",
          name: "Leganes Integrated Katunggan Ecopark",
          municipality: "Leganes",
          type: "MANGROVE SANCTUARY & COASTAL ECOPARK",
          maps: "QJJF+9Q9, Barangays Gua-an and Nabitasan, Leganes, Iloilo",
          plusCode: "QJJF+9Q9",
          coordinates: {
            latitude: 10.78091,
            longitude: 122.6244921
          },
          historicalSignificance:
            "The Leganes Integrated Katunggan Ecopark (LIKE) is a 15-hectare mangrove sanctuary in Barangays Gua-an and Nabitasan. Once a typhoon-damaged fishpond, it has been transformed into a protected coastal ecosystem through community-led conservation. The ecopark represents Leganes’ deep connection to the sea, fishing livelihoods, and environmental stewardship.",
          touristActivities:
            "Visitors can cross its bamboo bridge, observe mangroves and coastal wildlife, and learn how local residents protect biodiversity while supporting sustainable livelihoods. With its community kitchen and biodiversity training center, LIKE shows that heritage is not only about old buildings—it is also about caring for the natural landscapes that sustain a community. It is an ideal destination for eco-tourists, students, and anyone interested in Iloilo’s coastal heritage.",
          activities: [
            "Eco-Tourism",
            "Environmental Learning",
            "Nature Sightseeing",
            "Coastal Exploration",
            "Walking"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-7"/><path d="m17 15-5-6-5 6h10Z"/><path d="m15 9-3-4-3 4h6Z"/></svg>`,
          cards: [
            {
              question: "How was the Leganes Integrated Katunggan Ecopark (LIKE) transformed into a coastal sanctuary?",
              answer: "Spanning 15 hectares across Barangays Gua-an and Nabitasan, LIKE was once a typhoon-damaged fishpond that local communities rehabilitated into a thriving protected mangrove ecosystem through grassroots conservation.",
              factoid: "Located at Plus Code QJJF+9Q9 (10.78091° N, 122.6244921° E), 'katunggan' is the Hiligaynon word for mangrove forest.",
              category: "COASTAL CONSERVATION"
            },
            {
              question: "What community facilities at LIKE demonstrate sustainable living heritage?",
              answer: "LIKE features a community kitchen and a biodiversity training center, demonstrating that cultural heritage encompasses not only historic buildings but also caring for the coastal landscapes that sustain fishing livelihoods.",
              factoid: "The sanctuary serves as a living classroom for eco-tourists, students, and researchers studying Iloilo's coastal ecosystems.",
              category: "ENVIRONMENTAL HERITAGE"
            },
            {
              question: "What activities can eco-tourists enjoy inside the Leganes mangrove ecopark?",
              answer: "Visitors can walk across its scenic bamboo bridge, observe diverse mangrove species and coastal wildlife, and learn directly from local residents about biodiversity protection and sustainable coastal livelihoods.",
              factoid: "Key visitor activities include Eco-Tourism, Environmental Learning, Nature Sightseeing, Coastal Exploration, and Walking.",
              category: "ECOPARK ACTIVITIES"
            }
          ]
        }
      ]
    },
    {
      id: "leon",
      name: "Leon",
      district: "Iloilo District 2",
      places: [
        {
          id: "leon-bucari-pine-forest",
          name: "Bucari Pine Forest",
          municipality: "Leon",
          type: "HIGHLAND ECOTOURISM & PINE CAMPSITE",
          maps: "7Q24V7FQ+CG, Barangay Bucari, Leon, Iloilo",
          plusCode: "7Q24V7FQ+CG",
          coordinates: {
            latitude: 10.8667,
            longitude: 122.2893
          },
          historicalSignificance:
            "Bucari Pine Forest, also called the Bucari Campsite, is Leon’s flagship ecotourism destination in the cool highlands of Barangay Bucari. Known as part of the “Summer Capital of Iloilo,” it features Benguet pine trees, mountain scenery, camping grounds, and trails. Bucari represents Leon’s upland identity, agricultural livelihood, and growing reputation for nature-based tourism. The area is valued for its fresh climate, forested landscape, and connection to nearby farming communities.",
          touristActivities:
            "Visitors can camp beneath the pines, hike or trek through the highlands, visit the Mansiga Viewing Deck and its Stations of the Cross, and see the famous leaning pine tree. Local guides can also help visitors appreciate the area’s culture, environment, and rural way of life.",
          activities: [
            "Camping",
            "Hiking",
            "Trekking",
            "Nature Sightseeing",
            "Eco-Tourism",
            "Cultural Learning"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-7"/><path d="m17 15-5-6-5 6h10Z"/><path d="m15 9-3-4-3 4h6Z"/></svg>`,
          cards: [
            {
              question: "Why is Barangay Bucari in Leon famously nicknamed the 'Summer Capital of Iloilo'?",
              answer: "Set in Leon's cool mountain highlands, Bucari Pine Forest (also known as Bucari Campsite) boasts a crisp mountain climate, towering Benguet pine trees, forested trails, and scenic highland vistas connected to nearby farming communities.",
              factoid: "Bucari Pine Forest sits at coordinates 10.8667° N, 122.2893° E (Plus Code 7Q24V7FQ+CG).",
              category: "HIGHLAND IDENTITY"
            },
            {
              question: "What iconic viewpoints and natural landmarks await trekkers in Bucari Pine Forest?",
              answer: "Visitors can hike to the Mansiga Viewing Deck and its Stations of the Cross for sweeping highland views and stop by the area's famous leaning pine tree.",
              factoid: "Bucari represents Leon's upland agricultural heritage and its growing role as a flagship nature-based tourism destination.",
              category: "LANDMARKS & TRAILS"
            },
            {
              question: "How can travelers experience both nature and rural culture in Bucari?",
              answer: "Travelers can pitch camp beneath the Benguet pines, trek mountain trails, and hire local guides who share insights into the highland environment, local farming traditions, and rural community life.",
              factoid: "Top experiences include Camping, Hiking, Trekking, Nature Sightseeing, Eco-Tourism, and Cultural Learning.",
              category: "OUTDOOR ADVENTURE"
            }
          ]
        }
      ]
    },
    {
      id: "new-lucena",
      name: "New Lucena",
      district: "Iloilo District 2",
      places: [
        {
          id: "new-lucena-danaw-barangay-damires",
          name: "Danaw, Barangay Damires",
          municipality: "New Lucena",
          type: "COMMUNITY LAKE & LIVING FOLK HERITAGE",
          maps: "7Q24VH6W+36, Barangay Damires, New Lucena, Iloilo",
          plusCode: "7Q24VH6W+36",
          coordinates: {
            latitude: 10.8602,
            longitude: 122.5955
          },
          historicalSignificance:
            "Danaw is a small, roughly one-hectare lake in Barangay Damires, New Lucena, Iloilo. Surrounded by trees and open green space, it is a treasured community gathering place and an important part of the municipality’s living cultural heritage. Danaw is associated with local traditions, especially celebrations during the Feast of San Juan, when children swim and enjoy boating. Local stories also connect the lake to folklore and seasonal changes, making it a place where community memory and nature meet. For New Lucenons, Danaw represents shared recreation, family gatherings, and respect for local landscapes.",
          touristActivities:
            "Visitors can enjoy a quiet nature experience, learn about local beliefs and traditions, and appreciate how a small lake can carry a community’s cultural identity.",
          activities: [
            "Nature Sightseeing",
            "Cultural Learning",
            "Heritage Exploration",
            "Swimming",
            "Boating",
            "Outdoor Relaxation"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
          cards: [
            {
              question: "What is Danaw in Barangay Damires and why is it treasured by New Lucenons?",
              answer: "Danaw is a roughly one-hectare tree-lined freshwater lake in Barangay Damires, New Lucena. Surrounded by open green space, it serves as a cherished community gathering place symbolizing family recreation, shared memory, and respect for local landscapes.",
              factoid: "Danaw is located at coordinates 10.8602° N, 122.5955° E (Plus Code 7Q24VH6W+36).",
              category: "NATURAL COMMUNITY HUB"
            },
            {
              question: "Which annual celebration and folk stories are closely tied to Danaw Lake?",
              answer: "The lake is especially lively during the Feast of San Juan, when local children swim and go boating. Oral stories also link Danaw to local folklore and seasonal rhythms, weaving nature and community memory together.",
              factoid: "In Hiligaynon, 'danaw' refers to a natural inland lake or body of standing water.",
              category: "LIVING FOLKLORE"
            },
            {
              question: "What can visitors experience when visiting Danaw in New Lucena?",
              answer: "Visitors can unwind in a peaceful natural setting, listen to local beliefs and oral traditions surrounding the lake, and see how even a modest freshwater body sustains a town's cultural identity.",
              factoid: "Activities include Nature Sightseeing, Cultural Learning, Heritage Exploration, Swimming, Boating, and Outdoor Relaxation.",
              category: "CULTURAL VISIT"
            }
          ]
        }
      ]
    },
    {
      id: "pavia",
      name: "Pavia",
      district: "Iloilo District 2",
      places: [
        {
          id: "pavia-sta-monica-parish-church",
          name: "Sta. Monica Parish Church",
          municipality: "Pavia",
          type: "ALL-RED-BRICK SPANISH COLONIAL CHURCH",
          maps: "7Q24QGFR+XCQ, Pavia, Iloilo",
          plusCode: "7Q24QGFR+XCQ",
          coordinates: {
            latitude: 10.774879,
            longitude: 122.541005
          },
          historicalSignificance:
            "Sta. Monica Parish Church, commonly known as Pavia Parish Church, is Pavia’s most recognizable heritage landmark. Located in the municipality’s town center, it was designed and built by Augustinian friars and completed in 1888. Its Romanesque-Byzantine-inspired design and all-red-brick construction make it exceptional: according to the Municipal Government of Pavia, it is the only church in Panay Island built entirely of red bricks. The church represents Pavia’s Spanish-colonial religious heritage, architectural craftsmanship, and enduring Catholic identity.",
          touristActivities:
            "Visitors can admire its red-brick façade, arched windows and entrances, and distinctive barrel-shaped rear alcove. It is an ideal stop for heritage walks, photography, and learning about how faith and architecture shaped the development of Pavia’s community.",
          activities: [
            "Church Visit",
            "Heritage Exploration",
            "Architecture Viewing",
            "Walking",
            "Photography",
            "Cultural Learning"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
          cards: [
            {
              question: "What architectural distinction makes Sta. Monica Parish Church in Pavia unique on Panay Island?",
              answer: "Designed and built by Augustinian friars and completed in 1888, Sta. Monica Parish Church combines Romanesque-Byzantine-inspired styling with all-red-brick construction—making it the only church on Panay Island built entirely of red bricks.",
              factoid: "Pavia Parish Church stands in the town center at coordinates 10.774879° N, 122.541005° E (Plus Code 7Q24QGFR+XCQ).",
              category: "ALL-RED-BRICK ARCHITECTURE"
            },
            {
              question: "What distinctive structural details stand out on the exterior of Pavia Parish Church?",
              answer: "Its exterior showcases warm red-brick masonry across the entire facade, graceful arched windows and portals, and a distinctive barrel-shaped rear alcove that highlights 19th-century colonial craftsmanship.",
              factoid: "The church anchors Pavia's Spanish-colonial religious heritage and enduring Catholic identity.",
              category: "ARCHITECTURAL DETAILS"
            },
            {
              question: "How can heritage travelers enjoy a visit to Sta. Monica Parish Church?",
              answer: "Visitors can take heritage walks around the town center, photograph the rare red-brick facade and arched openings, visit the sanctuary, and learn how faith and masonry architecture shaped Pavia's growth.",
              factoid: "Recommended activities include Church Visit, Heritage Exploration, Architecture Viewing, Walking, Photography, and Cultural Learning.",
              category: "HERITAGE WALK"
            }
          ]
        }
      ]
    },
    {
      id: "san-miguel",
      name: "San Miguel",
      district: "Iloilo District 2",
      places: [
        {
          id: "san-miguel-camp-goducate",
          name: "Camp Goducate",
          municipality: "San Miguel",
          type: "OUTDOOR RECREATION & COMMUNITY TRAINING CAMP",
          maps: "7Q24QC9F+C9, Barangay Sto. Angel, San Miguel, Iloilo",
          plusCode: "7Q24QC9F+C9",
          coordinates: {
            latitude: 10.76859,
            longitude: 122.42345
          },
          historicalSignificance:
            "Camp Goducate, also known as the Goducate Training Center, is San Miguel’s leading destination for outdoor fun, learning, and community development. Located in Barangay Sto. Angel, this inland camp combines recreation with education through activities such as swimming, ziplining, boating, fishing, horseback riding, and nature-based challenges. Beyond leisure, Camp Goducate supports programs on health, agriculture, literacy, character building, and sustainable community development. It has also hosted youth trainings and capacity-building activities with government partners.",
          touristActivities:
            "For visitors, it offers a refreshing nature escape with pools, a waterpark, garden spa, and different accommodation options. Camp Goducate shows how tourism in San Miguel can be both enjoyable and meaningful, connecting people with nature, learning, and community service.",
          activities: [
            "Swimming",
            "Ziplining",
            "Boating",
            "Fishing",
            "Horseback Riding",
            "Nature Sightseeing",
            "Outdoor Recreation"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 21 14 3"/><path d="M20.5 21 10 3"/><path d="M15.5 21 12 15l-3.5 6"/><path d="M2 21h20"/></svg>`,
          cards: [
            {
              question: "How does Camp Goducate in San Miguel blend tourism with social impact?",
              answer: "Also known as the Goducate Training Center in Barangay Sto. Angel, Camp Goducate pairs outdoor leisure with community outreach programs in health, agriculture, literacy, character building, and youth capacity-building alongside government partners.",
              factoid: "Camp Goducate is located at coordinates 10.76859° N, 122.42345° E (Plus Code 7Q24QC9F+C9).",
              category: "COMMUNITY & LEARNING"
            },
            {
              question: "What adventure and outdoor activities are available at Camp Goducate?",
              answer: "Guests can enjoy swimming, ziplining, boating, freshwater fishing, horseback riding, and nature-based challenge courses set in a refreshing inland environment.",
              factoid: "The camp regularly hosts youth leadership camps and educational team-building retreats.",
              category: "OUTDOOR ADVENTURE"
            },
            {
              question: "What leisure amenities make Camp Goducate a complete nature getaway?",
              answer: "Visitors can relax across its swimming pools, waterpark, tranquil garden spa, and varied overnight accommodation options while supporting sustainable community development.",
              factoid: "Popular activities include Swimming, Ziplining, Boating, Fishing, Horseback Riding, Nature Sightseeing, and Outdoor Recreation.",
              category: "NATURE ESCAPE"
            }
          ]
        }
      ]
    },
    {
      id: "santa-barbara",
      name: "Santa Barbara",
      district: "Iloilo District 2",
      places: [
        {
          id: "santa-barbara-church-and-convent",
          name: "Santa Barbara Church and Convent",
          municipality: "Santa Barbara",
          type: "NATIONAL HISTORICAL LANDMARK & REVOLUTIONARY SITE",
          maps: "7Q24RGHJ+3R9, General Martin Teofilo Delgado Street, Santa Barbara, Iloilo",
          plusCode: "7Q24RGHJ+3R9",
          coordinates: {
            latitude: 10.827678,
            longitude: 122.532075
          },
          historicalSignificance:
            "Santa Barbara Church and Convent is one of Iloilo’s most important revolutionary heritage sites, located along General Martin Teofilo Delgado Street in Santa Barbara. Built from 1849 to 1878, the neoclassical church-and-convent complex became a station of General Martin Delgado’s Ejercito Libertador in 1898, when the revolutionary government in the Visayas was established on November 17. It is recognized by the National Historical Commission of the Philippines as a Level I National Historical Landmark and is also noted as a National Cultural Treasure. For Ilonggos, it symbolizes courage, unity, and the struggle for freedom.",
          touristActivities:
            "Visitors can explore the historic complex, learn about the Cry of Santa Barbara, attend religious services, and reflect on the town’s central role in Panay’s revolutionary history.",
          activities: [
            "Church Visit",
            "Historical Sightseeing",
            "Heritage Exploration",
            "Architecture Viewing",
            "Cultural Learning"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
          cards: [
            {
              question: "What pivotal event in the Philippine Revolution occurred at Santa Barbara Church and Convent in 1898?",
              answer: "On November 17, 1898, the neoclassical church-and-convent complex served as a station of General Martin Teofilo Delgado's Ejercito Libertador when the Revolutionary Government of the Visayas was proclaimed in the historic Cry of Santa Barbara.",
              factoid: "The complex was built between 1849 and 1878 along General Martin Teofilo Delgado Street (Plus Code 7Q24RGHJ+3R9).",
              category: "PHILIPPINE REVOLUTION"
            },
            {
              question: "What official national heritage recognitions have been conferred on Santa Barbara Church and Convent?",
              answer: "The National Historical Commission of the Philippines recognizes it as a Level I National Historical Landmark, and it is also noted as a National Cultural Treasure symbolizing Ilonggo courage, unity, and the struggle for freedom.",
              factoid: "Located at coordinates 10.827678° N, 122.532075° E, it stands as one of the premier revolutionary monuments in the Visayas.",
              category: "NATIONAL LANDMARK"
            },
            {
              question: "What can visitors explore at the Santa Barbara Church and Convent complex?",
              answer: "Visitors can tour the neoclassical church and adjacent convent, study historical markers recounting the Cry of Santa Barbara, attend religious services, and reflect on Panay's pivotal revolutionary legacy.",
              factoid: "Key visitor activities include Church Visit, Historical Sightseeing, Heritage Exploration, Architecture Viewing, and Cultural Learning.",
              category: "HERITAGE TOUR"
            }
          ]
        }
      ]
    },
    {
      id: "zarraga",
      name: "Zarraga",
      district: "Iloilo District 2",
      places: [
        {
          id: "zarraga-poblador-gustilo-ancestral-house",
          name: "Poblador-Gustilo Ancestral House",
          municipality: "Zarraga",
          maps: "7Q24RJ8Q+CQ, Barangay Balud Lilo-an, Zarraga, Iloilo",
          type: "CIVIC HERITAGE & ANCESTRAL RESIDENCE",
          plusCode: "7Q24RJ8Q+CQ",
          coordinates: {
            latitude: 10.816,
            longitude: 122.6394
          },
          historicalSignificance:
            "The Poblador-Gustilo Ancestral House in Barangay Balud Lilo-an is a living link to Zarraga’s early civic history. It commemorates two influential local families: the Pobladors, whose early leaders helped shape the young municipality, and the Gustilos, who continued its tradition of public service in the early American period. More than an old home, the house preserves stories of leadership, family legacy, and community identity.",
          touristActivities:
            "Visitors can appreciate it as part of Zarraga’s heritage-house trail and learn how ancestral homes keep local history alive. Because it is a private residence, visitors should arrange visits respectfully and with the owners’ consent. The house reminds us that heritage is not only found in churches and monuments, but also in the homes and families that shaped a town.",
          activities: [
            "Heritage Exploration",
            "Historical Sightseeing",
            "Cultural Learning",
            "Architecture Viewing"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
          cards: [
            {
              question: "Which two influential local families are commemorated by the Poblador-Gustilo Ancestral House in Zarraga?",
              answer: "Located in Barangay Balud Lilo-an, the ancestral house honors the Poblador family—whose early leaders helped shape the young municipality—and the Gustilo family, who continued Zarraga's tradition of civic leadership during the early American period.",
              factoid: "The house sits in Barangay Balud Lilo-an at coordinates 10.816° N, 122.6394° E (Plus Code 7Q24RJ8Q+CQ).",
              category: "CIVIC LEGACY"
            },
            {
              question: "Why are ancestral houses like the Poblador-Gustilo residence vital to local heritage?",
              answer: "More than historic architecture, ancestral houses preserve living stories of leadership, family legacy, and community identity—reminding visitors that town history lives in homes and families as much as in churches and plazas.",
              factoid: "The residence forms a key highlight along Zarraga's local heritage-house trail.",
              category: "ANCESTRAL HERITAGE"
            },
            {
              question: "What etiquette should heritage travelers observe when visiting the Poblador-Gustilo Ancestral House?",
              answer: "Because the Poblador-Gustilo Ancestral House remains a private residence, visitors should coordinate respectfully and obtain the owners' consent prior to viewing or touring the property.",
              factoid: "Recommended activities include Heritage Exploration, Historical Sightseeing, Cultural Learning, and Architecture Viewing.",
              category: "RESPECTFUL HERITAGE TRAVEL"
            }
          ]
        }
      ]
    }
  ]
};

if (typeof window !== "undefined") {
  window.ILOILO_DISTRICT_2_DATA = ILOILO_DISTRICT_2_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = ILOILO_DISTRICT_2_DATA;
}

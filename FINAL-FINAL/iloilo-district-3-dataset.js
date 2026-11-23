/**
 * KINAADMAN | The Panay Heritage Quest
 * Iloilo 3rd Congressional District — Places & Flashcards Dataset per Municipality
 * Municipalities: Badiangan, Bingawan, Cabatuan, Calinog, Janiuay, Lambunao, Maasin, Mina, Pototan
 */

const ILOILO_DISTRICT_3_DATA = {
  province: "Iloilo",
  region: "Region VI - Western Visayas",
  district: "Iloilo District 3",
  districtNumber: 3,
  totalMunicipalities: 9,
  totalPlaces: 21,
  municipalities: [
    {
      id: "badiangan",
      name: "Badiangan",
      district: "Iloilo District 3",
      places: [
        {
          id: "badiangan-washington-baptist-church",
          name: "Washington Baptist Church",
          municipality: "Badiangan",
          type: "EARLY PROTESTANT CONGREGATION & HERITAGE CHURCH",
          maps: "FGC4+5M Badiangan, Iloilo",
          plusCode: "FGC4+5M",
          coordinates: {
            latitude: 11.47042,
            longitude: 122.50671
          },
          historicalSignificance:
            "Established in 1908 in Barangay Sinuagan by early American Baptist missionaries and local converts, the Washington Baptist Church is one of the earliest Protestant congregations in central Iloilo. It stands as a testament to the religious diversity and community organization that took root in Badiangan during the early American colonial period.",
          touristActivities:
            "Visitors can view the historic church structure, learn about the early history of Protestant missions in rural Iloilo, attend worship services, and take photographs of the heritage landmark.",
          activities: [
            "Church Visit",
            "Heritage Exploration",
            "Historical Sightseeing",
            "Cultural Learning",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
          cards: [
            {
              question: "When and where was the Washington Baptist Church established in Badiangan?",
              answer: "The church was established in 1908 in Barangay Sinuagan by early American Baptist missionaries and local converts, becoming one of the earliest Protestant congregations in central Iloilo.",
              factoid: "The church is situated at Plus Code FGC4+5M (11.470420° N, 122.506710° E).",
              category: "PROTESTANT MISSION HERITAGE"
            },
            {
              question: "What historic era does Washington Baptist Church represent in central Iloilo?",
              answer: "It stands as a testament to the religious diversity, grassroots community organization, and education initiatives that took root across rural Badiangan during the early American colonial period.",
              factoid: "American Baptist missions heavily influenced rural education and literacy throughout central Panay in the early 1900s.",
              category: "AMERICAN COLONIAL ERA"
            },
            {
              question: "What can travelers and heritage researchers experience when visiting?",
              answer: "Visitors can inspect the historic church architecture, learn the history of Protestant missions in rural Iloilo, attend Sunday worship services, and take heritage photographs.",
              factoid: "Activities include Church Visit, Heritage Exploration, Historical Sightseeing, Cultural Learning, and Photography.",
              category: "HERITAGE VISITING"
            }
          ]
        },
        {
          id: "badiangan-st-john-the-baptist-parish-church",
          name: "St. John the Baptist Parish Church",
          municipality: "Badiangan",
          type: "ROMAN CATHOLIC PARISH & CIVIC LANDMARK",
          maps: "FGC6+8H Badiangan, Iloilo",
          plusCode: "FGC6+8H",
          coordinates: {
            latitude: 11.47081,
            longitude: 122.51145
          },
          historicalSignificance:
            "Erected as an independent Roman Catholic parish in 1941 in the town Poblacion, the St. John the Baptist Parish Church serves as the primary spiritual and civic landmark of Badiangan. Its history is closely intertwined with the town's struggle and eventual recognition as an independent municipality, reflecting post-war reconstruction and enduring community faith.",
          touristActivities:
            "Visitors can explore the church interior, attend Mass, admire its devotional spaces, walk around the adjacent town plaza, and observe local religious traditions.",
          activities: [
            "Church Visit",
            "Heritage Exploration",
            "Architecture Viewing",
            "Photography",
            "Walking"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
          cards: [
            {
              question: "When was St. John the Baptist Parish Church erected and what is its role in Badiangan?",
              answer: "Erected as an independent Roman Catholic parish in 1941 in the Poblacion, it serves as the central spiritual and civic landmark of Badiangan.",
              factoid: "St. John the Baptist Parish is located at Plus Code FGC6+8H (11.470810° N, 122.511450° E).",
              category: "PARISH FOUNDATION"
            },
            {
              question: "How is the church connected to Badiangan's municipal identity?",
              answer: "Its history is closely intertwined with the town's struggle and eventual recognition as an independent municipality, embodying community solidarity and post-World War II reconstruction.",
              factoid: "Badiangan was formerly a arrabal (sub-district) of Janiuay before attaining separate municipal status.",
              category: "MUNICIPAL RECOGNITION"
            },
            {
              question: "What experiences await visitors at St. John the Baptist Parish?",
              answer: "Visitors can explore the sacred interior, attend Holy Mass, admire devotional statues, walk around the adjoining town plaza, and observe local Catholic feasts.",
              factoid: "Recommended activities include Church Visit, Heritage Exploration, Architecture Viewing, Photography, and Walking.",
              category: "PILGRIM ACTIVITIES"
            }
          ]
        },
        {
          id: "badiangan-traditional-bamboo-blind-making-heritage",
          name: "Traditional Bamboo Blind-Making Heritage (Brgy. Mainguit)",
          municipality: "Badiangan",
          type: "LIVING VISAYAN ARTISAN WEAVING CRAFT",
          maps: "FF9R+9P Badiangan, Iloilo",
          plusCode: "FF9R+9P",
          coordinates: {
            latitude: 11.46845,
            longitude: 122.49182
          },
          historicalSignificance:
            "Barangay Mainguit in Badiangan is renowned for preserving pag-ubra ka lag-e, the generations-old traditional craft of hand-weaving decorative and functional bamboo window blinds. Passed down through local families, this living cultural heritage showcases indigenous Visayan craftsmanship and sustainable bamboo artistry.",
          touristActivities:
            "Visitors can observe master weavers at work, learn the step-by-step process of preparing and weaving bamboo strips, purchase handcrafted bamboo blinds, and interact with local artisans.",
          activities: [
            "Cultural Learning",
            "Heritage Exploration",
            "Artisan Workshop Visit",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,
          cards: [
            {
              question: "What traditional indigenous craft is preserved in Barangay Mainguit, Badiangan?",
              answer: "Barangay Mainguit is celebrated for preserving 'pag-ubra ka lag-e', a generations-old craft of hand-weaving decorative and durable bamboo window blinds from native bamboo canes.",
              factoid: "The artisan workshops are located at Plus Code FF9R+9P (11.468450° N, 122.491820° E).",
              category: "PAG-UBRA KA LAG-E"
            },
            {
              question: "Why is 'pag-ubra ka lag-e' an important Visayan living heritage?",
              answer: "Passed down through families, this living tradition exemplifies sustainable bamboo artistry and indigenous Visayan engineering, producing natural ventilation blinds widely used across the archipelago.",
              factoid: "Badiangan's bamboo crafts provide eco-friendly alternative blinds sought by resorts and heritage homes.",
              category: "SUSTAINABLE BAMBOO"
            },
            {
              question: "What immersive cultural interactions can visitors experience in Barangay Mainguit?",
              answer: "Visitors can observe master artisans split and weave bamboo slats, try the weaving technique, purchase authentic custom bamboo blinds, and interact with local weavers.",
              factoid: "Activities include Cultural Learning, Heritage Exploration, Artisan Workshop Visit, and Photography.",
              category: "WORKSHOP IMMERSION"
            }
          ]
        }
      ]
    },
    {
      id: "bingawan",
      name: "Bingawan",
      district: "Iloilo District 3",
      places: [
        {
          id: "bingawan-baptist-church-pagnahi-an-site",
          name: "Bingawan Baptist Church & Historic Pagnahi-an Site",
          municipality: "Bingawan",
          type: "PIONEER SETTLEMENT & BAPTIST HERITAGE",
          maps: "6FG5+8V Bingawan, Iloilo",
          plusCode: "6FG5+8V",
          coordinates: {
            latitude: 11.22581,
            longitude: 122.45968
          },
          historicalSignificance:
            "Located in the town Poblacion, this landmark marks the historic site where Bingawan's early pioneers constructed a communal longhouse known as 'Pagnahi-an' in 1901, featuring stitched partitions that housed 40 families. Alongside the early educational efforts led by Rev. Antonio Plagata, the site commemorates the founding unity, resilience, and Protestant heritage that shaped Bingawan into an independent municipality in 1969.",
          touristActivities:
            "Visitors can visit the church grounds, read historical accounts of the town's pioneering families, stroll through the adjacent municipal plaza, and experience the peaceful rural heritage of Iloilo's northernmost 3rd District town.",
          activities: [
            "Church Visit",
            "Heritage Exploration",
            "Historical Sightseeing",
            "Cultural Learning",
            "Walking",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
          cards: [
            {
              question: "What was 'Pagnahi-an' and why is it foundational to Bingawan's history?",
              answer: "In 1901, early pioneers built 'Pagnahi-an', a communal longhouse with stitched partitions that sheltered 40 founding families on this historic site, forging the communal solidarity that defined the town.",
              factoid: "Located at Plus Code 6FG5+8V (11.225810° N, 122.459680° E) in the Poblacion.",
              category: "1901 PAGNAHI-AN"
            },
            {
              question: "Who was Rev. Antonio Plagata and how did his work shape Bingawan?",
              answer: "Rev. Antonio Plagata led early Christian evangelization and community education, instilling values of unity and literacy that culminated in Bingawan becoming an independent municipality in 1969.",
              factoid: "Bingawan is known as the peaceful inland frontier town of Iloilo's 3rd Congressional District.",
              category: "EDUCATIONAL ROOTS"
            },
            {
              question: "What can travelers discover when visiting Bingawan Baptist Church?",
              answer: "Visitors can explore the church grounds, read historical accounts of the founding families, stroll through the town plaza, and experience peaceful rural heritage.",
              factoid: "Activities include Church Visit, Heritage Exploration, Historical Sightseeing, Cultural Learning, Walking, and Photography.",
              category: "HERITAGE VISITING"
            }
          ]
        },
        {
          id: "bingawan-maldespina-historic-settlement-cemetery",
          name: "Maldespina Historic Settlement & Cemetery",
          municipality: "Bingawan",
          type: "REVOLUTIONARY REFUGE & HISTORIC HIGHLAND CEMETERY",
          maps: "6FG6+4Q Bingawan, Iloilo",
          plusCode: "6FG6+4Q",
          coordinates: {
            latitude: 11.22534,
            longitude: 122.46192
          },
          historicalSignificance:
            "Maldespina represents one of the earliest hilltop settlements established by Filipino revolutionaries and families seeking refuge from Spanish and American forces in the late 19th century prior to Bingawan's formal unification. Today, the historic cemetery and settlement area serve as a memorial to the town's revolutionary roots and pioneering ancestors.",
          touristActivities:
            "Visitors can explore the elevated historic grounds, pay respects to early town founders, learn about local revolutionary history, and view surrounding upland landscapes.",
          activities: [
            "Historical Sightseeing",
            "Heritage Exploration",
            "Cultural Learning",
            "Walking",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
          cards: [
            {
              question: "What historical significance does the Maldespina hilltop settlement hold?",
              answer: "Maldespina was one of the earliest elevated hilltop settlements founded by Filipino revolutionaries and refugee families seeking safety from colonial forces in the late 19th century.",
              factoid: "Located at Plus Code 6FG6+4Q (11.225340° N, 122.461920° E).",
              category: "REVOLUTIONARY REFUGE"
            },
            {
              question: "What does the historic Maldespina Cemetery commemorate today?",
              answer: "The cemetery and surrounding settlement serve as a sacred memorial ground honoring the revolutionary roots, ancestral founders, and pioneers of Bingawan.",
              factoid: "Its high elevation provided early freedom fighters a natural lookout over central Panay valleys.",
              category: "ANCESTRAL MEMORIAL"
            },
            {
              question: "What activities can history enthusiasts engage in at Maldespina?",
              answer: "Visitors can explore the highland grounds, pay respects to town founders, learn about local guerilla resistance, and enjoy scenic views of the surrounding hills.",
              factoid: "Activities include Historical Sightseeing, Heritage Exploration, Cultural Learning, Walking, and Photography.",
              category: "UPLAND HERITAGE"
            }
          ]
        }
      ]
    },
    {
      id: "cabatuan",
      name: "Cabatuan",
      district: "Iloilo District 3",
      places: [
        {
          id: "cabatuan-san-nicolas-de-tolentino-parish-church",
          name: "San Nicolas de Tolentino Parish Church",
          municipality: "Cabatuan",
          type: "THREE-FACADE NEOCLASSICAL BRICK CATHEDRAL",
          maps: "9FGM+6Q4, Cabatuan, 5031 Iloilo",
          plusCode: "9FGM+6Q4",
          coordinates: {
            latitude: 10.87556,
            longitude: 122.48445
          },
          historicalSignificance:
            "Constructed between 1834 and 1866 under the supervision of Augustinian friars using red bricks and locally quarried stones, the San Nicolas de Tolentino Parish Church is one of the grandest Spanish-colonial Neoclassical churches in Western Visayas. Notably, it is the only church in Iloilo built with three distinct facades and survived the 1948 Lady Caycay earthquake with much of its monumental masonry intact.",
          touristActivities:
            "Visitors can admire its rare three-facade Neoclassical design, inspect the intricate red-brick stonework, explore the spacious sanctuary, attend Mass, and take architectural photographs.",
          activities: [
            "Church Visit",
            "Heritage Exploration",
            "Architecture Viewing",
            "Historical Sightseeing",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
          cards: [
            {
              question: "What unique architectural attribute makes Cabatuan Church distinct in Iloilo?",
              answer: "Built between 1834 and 1866 under Augustinian supervision using clay red bricks, it is celebrated as the only church in Iloilo constructed with three distinct facades.",
              factoid: "Located at Plus Code 9FGM+6Q4 (10.875560° N, 122.484450° E).",
              category: "THREE-FACADE ARCHITECTURE"
            },
            {
              question: "How did Cabatuan Church fare during the 1948 Lady Caycay earthquake?",
              answer: "While the catastrophic 1948 Lady Caycay earthquake collapsed many churches across Panay, Cabatuan Church's massive red-brick masonry remained substantially intact.",
              factoid: "Its monumental red-brick facade and belfries make it one of the largest Spanish-colonial churches in the Visayas.",
              category: "EARTHQUAKE SURVIVOR"
            },
            {
              question: "What visitor activities can heritage travelers do at Cabatuan Church?",
              answer: "Travelers can photograph the Neoclassical three-facade masonry, examine antique brick bonding, tour the spacious nave, and attend liturgical celebrations.",
              factoid: "Activities include Church Visit, Heritage Exploration, Architecture Viewing, Historical Sightseeing, and Photography.",
              category: "ARCHITECTURAL TOUR"
            }
          ]
        },
        {
          id: "cabatuan-town-plaza-spanish-farolas-tree-of-bondage",
          name: "Cabatuan Town Plaza, Spanish Farolas & Tree of Bondage",
          municipality: "Cabatuan",
          type: "COLONIAL CIVIC PLAZA & HISTORIC MONUMENTS",
          maps: "9FGM+5M8, Cabatuan, 5031 Iloilo",
          plusCode: "9FGM+5M8",
          coordinates: {
            latitude: 10.87542,
            longitude: 122.48418
          },
          historicalSignificance:
            "Dating back to Cabatuan's founding in 1732, the town plaza is surrounded by nine surviving Spanish-era brick lamp posts (farolas), the centuries-old calachuchi known as the 'Tree of Bondage' used during colonial punishments, and the monument honoring Senator Tomas V. Confesor, the famed World War II guerrilla governor of Panay.",
          touristActivities:
            "Visitors can walk around the historic plaza, view the antique Spanish farolas and Tree of Bondage, read historical markers on Sen. Tomas Confesor, and experience local town life.",
          activities: [
            "Historical Sightseeing",
            "Heritage Exploration",
            "Walking",
            "Cultural Learning",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/></svg>`,
          cards: [
            {
              question: "What historic relics from 1732 are preserved in Cabatuan Town Plaza?",
              answer: "The plaza preserves nine surviving Spanish-era brick lamp posts ('farolas') and the centuries-old calachuchi known as the 'Tree of Bondage', where colonial punishments were carried out.",
              factoid: "The plaza is located at Plus Code 9FGM+5M8 (10.875420° N, 122.484180° E).",
              category: "SPANISH FAROLAS & BONDAGE TREE"
            },
            {
              question: "Who was Senator Tomas V. Confesor honored in the plaza?",
              answer: "Tomas V. Confesor was the fearless World War II guerrilla governor of Free Panay who resisted Japanese occupation and later served as a distinguished national senator.",
              factoid: "His refusal to surrender to Japanese invaders earned him the title 'The Roaring Lion of Panay'.",
              category: "TOMAS CONFESOR"
            },
            {
              question: "What can travelers experience while strolling Cabatuan Town Plaza?",
              answer: "Visitors can take walking tours past antique farolas, photograph the Tree of Bondage, read wartime resistance monuments, and enjoy vibrant town life.",
              factoid: "Activities include Historical Sightseeing, Heritage Exploration, Walking, Cultural Learning, and Photography.",
              category: "PLAZA HERITAGE WALK"
            }
          ]
        },
        {
          id: "cabatuan-old-municipal-hall-casa-tribunal",
          name: "Old Municipal Hall (Casa Tribunal)",
          municipality: "Cabatuan",
          type: "COLONIAL CIVIC SEAT & TUSCAN MASONRY",
          maps: "9FGM+4J7, Cabatuan, 5031 Iloilo",
          plusCode: "9FGM+4J7",
          coordinates: {
            latitude: 10.87531,
            longitude: 122.48406
          },
          historicalSignificance:
            "Originally constructed in 1734 as the colonial seat of local governance (Casa Tribunal), Cabatuan's Old Municipal Hall preserves its historic ground-floor Tuscan-inspired masonry columns and traditional capiz-shell windows, reflecting centuries of civic administration from the Spanish period to the modern era.",
          touristActivities:
            "Visitors can view the colonial facade and Tuscan columns, learn about Cabatuan's civic governance history, and photograph the heritage building alongside the adjacent town plaza.",
          activities: [
            "Heritage Exploration",
            "Architecture Viewing",
            "Historical Sightseeing",
            "Photography",
            "Walking"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16"/><path d="M7 22V9l3-5h4l3 5v13"/><path d="M10 9h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
          cards: [
            {
              question: "When was Cabatuan's Casa Tribunal constructed and what was its original role?",
              answer: "Constructed in 1734, it served as the Spanish colonial Casa Tribunal (hall of justice and governance), housing the gobernadorcillo and colonial civic administrators.",
              factoid: "Located at Plus Code 9FGM+4J7 (10.875310° N, 122.484060° E).",
              category: "1734 CASA TRIBUNAL"
            },
            {
              question: "What distinct architectural features define the Old Municipal Hall?",
              answer: "The building showcases ground-floor Tuscan-inspired stone masonry columns, thick lime mortar walls, and traditional second-story capiz-shell sliding windows.",
              factoid: "It is one of the few surviving Spanish-period municipal tribunal buildings in inland Iloilo.",
              category: "TUSCAN COLONIAL MASONRY"
            },
            {
              question: "What can visitors discover when inspecting this civic landmark?",
              answer: "Travelers can admire the historic facade columns, learn about three centuries of municipal governance, and capture architectural photos alongside the town plaza.",
              factoid: "Activities include Heritage Exploration, Architecture Viewing, Historical Sightseeing, Photography, and Walking.",
              category: "CIVIC TOURISM"
            }
          ]
        },
        {
          id: "cabatuan-pamul-ogan-hill-shrine",
          name: "Pamul-ogan Hill Shrine",
          municipality: "Cabatuan",
          type: "1732 FOUNDING SHRINE & HILLTOP CROSS",
          maps: "9FGP+8W2, Cabatuan, 5031 Iloilo",
          plusCode: "9FGP+8W2",
          coordinates: {
            latitude: 10.87581,
            longitude: 122.48731
          },
          historicalSignificance:
            "Pamul-ogan Hill Shrine marks the historic hilltop site where Spanish authorities planted a massive molave cross in 1732 upon establishing the pueblo of Cabatuan. The surviving stone base inscribed with the year 1732 remains a sacred historical relic commemorating the town's colonial foundation.",
          touristActivities:
            "Visitors can climb the hilltop shrine, view the 1732 historical marker and cross base, enjoy panoramic views of Cabatuan, and reflect on the town's early history.",
          activities: [
            "Historical Sightseeing",
            "Heritage Exploration",
            "Pilgrimage",
            "Walking",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
          cards: [
            {
              question: "What historic founding event took place atop Pamul-ogan Hill in 1732?",
              answer: "Spanish colonial authorities and missionaries planted a monumental molave cross atop Pamul-ogan Hill in 1732 to mark the formal establishment of the pueblo of Cabatuan.",
              factoid: "Pamul-ogan Hill Shrine is situated at Plus Code 9FGP+8W2 (10.875810° N, 122.487310° E).",
              category: "1732 PUEBLO FOUNDATION"
            },
            {
              question: "What surviving physical artifact remains preserved at Pamul-ogan Hill Shrine?",
              answer: "The original stone base bearing the carved inscription '1732' remains intact at the shrine summit as an authentic colonial foundation relic.",
              factoid: "Pilgrims and townsfolk hike to the hilltop shrine during Holy Week and annual foundation anniversaries.",
              category: "HISTORICAL STONE BASE"
            },
            {
              question: "What visitor experience awaits those who climb Pamul-ogan Hill?",
              answer: "Visitors can hike the hilltop path, inspect the inscribed 1732 relic, enjoy bird's-eye views over Cabatuan's red-brick skyline, and engage in prayer and reflection.",
              factoid: "Activities include Historical Sightseeing, Heritage Exploration, Pilgrimage, Walking, and Photography.",
              category: "HILLTOP PILGRIMAGE"
            }
          ]
        },
        {
          id: "cabatuan-wwii-japanese-fortification-tiring-landing-field",
          name: "WWII Japanese Fortification & Tiring Landing Field",
          municipality: "Cabatuan",
          type: "WORLD WAR II MILITARY DEFENSE & PILLBOX",
          maps: "9F9X+6P4, Brgy. Tabucan, Cabatuan, 5031 Iloilo",
          plusCode: "9F9X+6P4",
          coordinates: {
            latitude: 10.86805,
            longitude: 122.49932
          },
          historicalSignificance:
            "During World War II, Japanese occupation forces fortified Cabatuan due to its strategic Tiring Landing Field. A surviving 20-foot concrete Japanese lookout tower built in 1942 in Barangay Tabucan stands as a stark reminder of wartime defense operations and the fierce guerrilla resistance in Panay.",
          touristActivities:
            "Visitors and history enthusiasts can inspect the 1942 concrete pillbox and lookout tower, learn about Panay's World War II history, and document the wartime ruins.",
          activities: [
            "Historical Sightseeing",
            "Heritage Exploration",
            "Cultural Learning",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16"/><path d="M7 22V9l3-5h4l3 5v13"/><path d="M10 9h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
          cards: [
            {
              question: "Why did Japanese forces heavily fortify Cabatuan during World War II?",
              answer: "Cabatuan housed the strategic Tiring Landing Field, prompting Imperial Japanese forces in 1942 to construct heavy concrete pillboxes and observation towers to defend the airfield against Allied counteroffensives.",
              factoid: "Located in Barangay Tabucan at Plus Code 9F9X+6P4 (10.868050° N, 122.499320° E).",
              category: "TIRING LANDING FIELD"
            },
            {
              question: "What physical structure remains visible today in Barangay Tabucan?",
              answer: "A surviving 20-foot reinforced concrete lookout tower and pillbox built in 1942 stands as a silent witness to wartime air combat and guerilla surveillance.",
              factoid: "Panay guerillas frequently sabotaged fuel and supply convoys destined for Tiring airfield.",
              category: "1942 CONCRETE PILLBOX"
            },
            {
              question: "What can military history enthusiasts explore at this site?",
              answer: "Visitors can inspect the reinforced wartime concrete walls, understand Panay's liberation campaign, and document World War II military archaeology.",
              factoid: "Activities include Historical Sightseeing, Heritage Exploration, Cultural Learning, and Photography.",
              category: "WARTIME HERITAGE"
            }
          ]
        }
      ]
    },
    {
      id: "calinog",
      name: "Calinog",
      district: "Iloilo District 3",
      places: [
        {
          id: "calinog-immaculate-conception-of-mary-parish-church",
          name: "Immaculate Conception of Mary Parish Church",
          municipality: "Calinog",
          type: "SPANISH BAROQUE CHURCH & MUDEJAR RETABLO",
          maps: "4G9R+9R8, Calinog, 5040 Iloilo",
          plusCode: "4G9R+9R8",
          coordinates: {
            latitude: 11.11842,
            longitude: 122.54208
          },
          historicalSignificance:
            "Founded as an Augustinian mission in 1742 and rebuilt in stone in 1874 under Fr. Cresencio Bravo, the Immaculate Conception of Mary Parish Church is a notable Spanish-colonial Baroque landmark in central Panay. It is distinguished by intricately carved wooden side doors depicting the Four Evangelists, an Augustinian coat of arms, and an ornate Mudejar-inspired altar retablo.",
          touristActivities:
            "Visitors can admire the carved wooden Evangelist doors and Mudejar-style retablo, explore the historic sanctuary, attend Mass, and walk through the adjacent town plaza.",
          activities: [
            "Church Visit",
            "Heritage Exploration",
            "Architecture Viewing",
            "Historical Sightseeing",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
          cards: [
            {
              question: "When was Calinog Parish Church founded and reconstructed in stone?",
              answer: "Founded as an Augustinian mission in 1742, it was rebuilt in stone in 1874 under Fr. Cresencio Bravo, standing as a prominent Spanish Baroque sanctuary in central Panay.",
              factoid: "The church is located at Plus Code 4G9R+9R8 (11.118420° N, 122.542080° E).",
              category: "1742 AUGUSTINIAN FOUNDATION"
            },
            {
              question: "What distinct artistic features adorn the entrance and altar of Calinog Church?",
              answer: "It features masterfully hand-carved wooden side doors portraying the Four Evangelists, an Augustinian coat of arms, and an elaborate Mudejar-inspired gilded altar retablo.",
              factoid: "The fusion of Spanish Baroque and Moorish-inspired Mudejar retablo woodwork is exceptional in Panay.",
              category: "FOUR EVANGELISTS & MUDEJAR RETABLO"
            },
            {
              question: "What tourist and cultural activities can visitors engage in at Calinog Church?",
              answer: "Visitors can examine the carved Evangelist doors, photograph the stone facade, explore the high altar, attend Mass, and walk through the adjacent municipal plaza.",
              factoid: "Activities include Church Visit, Heritage Exploration, Architecture Viewing, Historical Sightseeing, and Photography.",
              category: "BAROQUE CHURCH TOUR"
            }
          ]
        },
        {
          id: "calinog-enhanced-school-of-living-tradition",
          name: "Enhanced School of Living Tradition (Panay Bukidnon Heritage)",
          municipality: "Calinog",
          type: "INDIGENOUS PANAY BUKIDNON CULTURAL SANCTUARY",
          maps: "4GCJ+2V Brgy. Datagan, Calinog, 5040 Iloilo",
          plusCode: "4GCJ+2V",
          coordinates: {
            latitude: 11.12008,
            longitude: 122.53219
          },
          historicalSignificance:
            "Located in Barangay Datagan, the Enhanced School of Living Tradition serves as a vital cultural sanctuary dedicated to preserving the intangible heritage of the indigenous Panay Bukidnon people. It safeguards centuries-old traditions including panubok embroidery, the courtship binanog dance, traditional bamboo instruments, and the chanting of the ancient Hinilawod epic.",
          touristActivities:
            "Visitors can witness traditional binanog performances and epic chanting, view intricate panubok textiles, learn about indigenous Panay Bukidnon history from cultural masters, and support local artisans.",
          activities: [
            "Cultural Learning",
            "Heritage Exploration",
            "Museum Exploring",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
          cards: [
            {
              question: "What is the mission of the Enhanced School of Living Tradition in Barangay Datagan?",
              answer: "The sanctuary is dedicated to preserving and transmitting the living intangible heritage of the indigenous Panay Bukidnon people across generations.",
              factoid: "Located at Plus Code 4GCJ+2V (11.120080° N, 122.532190° E) in Barangay Datagan, Calinog.",
              category: "SCHOOL OF LIVING TRADITION"
            },
            {
              question: "Which ancient Panay Bukidnon arts are taught and safeguarded here?",
              answer: "The school safeguards Panubok needlework embroidery, the hawk-mimicking Binanog courtship dance, bamboo musical instruments (tulali, subing), and the chanting of the ancient Hinilawod epic poem.",
              factoid: "The Hinilawod epic is one of the longest oral epics in the world, taking dozens of hours to chant in full.",
              category: "HINILAWOD & BINANOG"
            },
            {
              question: "What immersive cultural experiences can visitors participate in at the center?",
              answer: "Visitors can listen to live chanting masters, watch Binanog dance performances, admire Panubok-embroidered garments, and purchase crafts directly from indigenous artisans.",
              factoid: "Activities include Cultural Learning, Heritage Exploration, Museum Exploring, and Photography.",
              category: "INDIGENOUS IMMERSION"
            }
          ]
        }
      ]
    },
    {
      id: "janiuay",
      name: "Janiuay",
      district: "Iloilo District 3",
      places: [
        {
          id: "janiuay-ruins-of-old-san-julian-de-cuenca-church",
          name: "Ruins of the Old San Julian de Cuenca Church",
          municipality: "Janiuay",
          type: "SPANISH FORTRESS RUINS & WARTIME DEVOURMENT",
          maps: "C93G+9M4, Janiuay, 5034 Iloilo",
          plusCode: "C93G+9M4",
          coordinates: {
            latitude: 10.95342,
            longitude: 122.47669
          },
          historicalSignificance:
            "Standing beside the modern parish church in Janiuay Poblacion are the massive red-brick and coral-stone ruins of the 1830s San Julian de Cuenca Church. Built as a fortress-style Spanish-colonial church, the historic structure was burned in 1942 during World War II, leaving behind towering walls and belfry remnants that bear witness to both colonial craftsmanship and wartime devastation.",
          touristActivities:
            "Visitors can walk around the preserved brick-and-coral ruins, examine 19th-century colonial masonry, visit the adjacent parish church, and capture evocative historical photographs.",
          activities: [
            "Historical Sightseeing",
            "Heritage Exploration",
            "Architecture Viewing",
            "Photography",
            "Walking"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16"/><path d="M7 22V9l3-5h4l3 5v13"/><path d="M10 9h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
          cards: [
            {
              question: "When was the old San Julian de Cuenca Church built and how was it destroyed?",
              answer: "Constructed in the 1830s using red clay bricks and marine coral stone as a fortress-style church, the historic sanctuary was burned down in 1942 during the height of World War II.",
              factoid: "The ruins are located at Plus Code C93G+9M4 (10.953420° N, 122.476690° E) in Janiuay Poblacion.",
              category: "1830s FORTRESS RUINS"
            },
            {
              question: "What architectural features of the ruined church remain visible today?",
              answer: "Towering brick walls, thick buttresses, arched portals, and remnants of the stone belfry stand preserved right alongside the modern parish church.",
              factoid: "Janiuay is also famed for its 1870s Spanish Cemetery featuring three monumental neoclassical staircases.",
              category: "BRICK & CORAL MASONRY"
            },
            {
              question: "What experiences await visitors exploring the Janiuay church ruins?",
              answer: "Visitors can walk beneath the soaring 19th-century brick arches, capture moody heritage photos, visit the adjacent church, and learn about wartime destruction in central Panay.",
              factoid: "Activities include Historical Sightseeing, Heritage Exploration, Architecture Viewing, Photography, and Walking.",
              category: "RUINS EXPLORATION"
            }
          ]
        }
      ]
    },
    {
      id: "lambunao",
      name: "Lambunao",
      district: "Iloilo District 3",
      places: [
        {
          id: "lambunao-san-nicolas-de-tolentino-parish-church",
          name: "San Nicolas de Tolentino Parish Church",
          municipality: "Lambunao",
          type: "STONE-AND-BRICK BAROQUE UPLAND CHURCH",
          maps: "4G97+4X8, Lambunao, 5042 Iloilo",
          plusCode: "4G97+4X8",
          coordinates: {
            latitude: 11.11781,
            longitude: 122.51492
          },
          historicalSignificance:
            "Established as an independent parish in 1753, the historic stone-and-brick Baroque church of San Nicolas de Tolentino was constructed between 1880 and 1890 near Lambunao Creek. Its thick masonry walls and classic Augustinian design reflect the resilience and religious heritage of central Panay's upland communities.",
          touristActivities:
            "Visitors can explore the historic Baroque church, admire its stone-and-brick facade, attend Mass, and stroll around the surrounding heritage town center.",
          activities: [
            "Church Visit",
            "Heritage Exploration",
            "Architecture Viewing",
            "Historical Sightseeing",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
          cards: [
            {
              question: "When was Lambunao Parish established and its stone-and-brick church constructed?",
              answer: "Established as an independent parish in 1753, the monumental stone-and-brick Baroque church was erected between 1880 and 1890 near Lambunao Creek.",
              factoid: "Located at Plus Code 4G97+4X8 (11.117810° N, 122.514920° E).",
              category: "1753 PARISH FOUNDATION"
            },
            {
              question: "What architectural characteristics define Lambunao Church?",
              answer: "The church features classic Augustinian Baroque architecture with massive load-bearing stone walls, red-brick accents, and robust buttresses built to endure upland tremors.",
              factoid: "Lambunao is historically recognized as the largest municipality in land area in the entire province of Iloilo.",
              category: "AUGUSTINIAN BAROQUE"
            },
            {
              question: "What activities can visitors enjoy at San Nicolas de Tolentino Church?",
              answer: "Visitors can explore the historic sanctuary, photograph the stone-and-brick facade, attend Mass, and take a stroll through Lambunao's historic upland town center.",
              factoid: "Activities include Church Visit, Heritage Exploration, Architecture Viewing, Historical Sightseeing, and Photography.",
              category: "UPLAND HERITAGE VISIT"
            }
          ]
        },
        {
          id: "lambunao-tinagong-dagat",
          name: "Tinagong Dagat (Panay Bukidnon Cultural Sanctuary)",
          municipality: "Lambunao",
          type: "HIGHLAND SACRED LAKE & ECO-CULTURAL TREK",
          maps: "497J+8V Brgy. Bagongbong, Lambunao, 5042 Iloilo",
          plusCode: "497J+8V",
          coordinates: {
            latitude: 11.11334,
            longitude: 122.38219
          },
          historicalSignificance:
            "Nestled in the high mountain ranges of Barangay Bagongbong near the Iloilo-Capiz border, Tinagong Dagat ('Hidden Sea') is not only an ecological wonder but a site of deep mythological and cultural heritage. In the oral traditions of the indigenous Panay Bukidnon people, the highland lake is revered as a sacred sanctuary tied to ancestral folklore and ancient highland settlements.",
          touristActivities:
            "Visitors can trek along mountain trails with local indigenous guides, learn Panay Bukidnon folklore surrounding the lake, camp in the misty highlands, and photograph the scenic landscape.",
          activities: [
            "Trekking",
            "Cultural Learning",
            "Heritage Exploration",
            "Nature Sightseeing",
            "Eco-Tourism",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
          cards: [
            {
              question: "Where is Tinagong Dagat located and what does its name signify?",
              answer: "Perched high in the mountain ranges of Barangay Bagongbong near the Iloilo-Capiz border, 'Tinagong Dagat' translates to 'Hidden Sea'—a high-altitude lake hidden within cloud forest ridges.",
              factoid: "Located at Plus Code 497J+8V (11.113340° N, 122.382190° E).",
              category: "THE HIDDEN SEA"
            },
            {
              question: "What mythological importance does Tinagong Dagat hold for the Panay Bukidnon?",
              answer: "In Panay Bukidnon oral lore, the mountain lake is revered as a sacred mythological sanctuary where ancestral spirits dwell and ancient demigods traversed.",
              factoid: "Local guides remind trekkers to respect highland customary taboos to maintain peaceful relations with nature spirits.",
              category: "INDIGENOUS MYTHOLOGY"
            },
            {
              question: "What eco-tourism and outdoor adventures await hikers at Tinagong Dagat?",
              answer: "Adventurers can trek dense highland trails with indigenous guides, hear ancestral folklore around the campfire, camp in misty high elevations, and photograph untouched vistas.",
              factoid: "Activities include Trekking, Cultural Learning, Heritage Exploration, Nature Sightseeing, Eco-Tourism, and Photography.",
              category: "HIGHLAND TREKKING"
            }
          ]
        }
      ]
    },
    {
      id: "maasin",
      name: "Maasin",
      district: "Iloilo District 3",
      places: [
        {
          id: "maasin-st-james-the-greater-parish-church",
          name: "St. James the Greater Parish Church",
          municipality: "Maasin",
          type: "COLONIAL PARISH & BAMBOO CAPITAL SPIRITUAL HEART",
          maps: "9C5C+7P8, Maasin, 5030 Iloilo",
          plusCode: "9C5C+7P8",
          coordinates: {
            latitude: 10.85819,
            longitude: 122.42181
          },
          historicalSignificance:
            "Tracing its origins to Augustinian missionaries in 1615 and gaining status as an independent parish in 1755, the St. James the Greater Parish Church anchors the spiritual and colonial history of Maasin. Over the centuries, the church has stood at the center of community life in a town celebrated as the 'Bamboo Capital of Iloilo.'",
          touristActivities:
            "Visitors can visit the parish church, attend religious services, explore the town plaza, and browse locally crafted bamboo products in nearby community workshops.",
          activities: [
            "Church Visit",
            "Heritage Exploration",
            "Cultural Learning",
            "Photography",
            "Walking"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
          cards: [
            {
              question: "What are the historic origins of St. James the Greater Parish in Maasin?",
              answer: "The parish traces its Augustinian roots back to 1615, achieving independent parish status in 1755 and anchoring over three centuries of spiritual life in central Iloilo.",
              factoid: "Located at Plus Code 9C5C+7P8 (10.858190° N, 122.421810° E).",
              category: "1615 MISSIONARY ROOTS"
            },
            {
              question: "How does the parish connect to Maasin's identity as the 'Bamboo Capital of Iloilo'?",
              answer: "The church sits at the heart of community life in a town acclaimed nationwide for vast bamboo groves, intricate bamboo crafts, and the annual Tultugan Festival.",
              factoid: "The Tultugan Festival celebrates traditional bamboo percussion instruments and woven crafts every December.",
              category: "BAMBOO CAPITAL HERITAGE"
            },
            {
              question: "What experiences can visitors enjoy in and around Maasin Church?",
              answer: "Visitors can tour the colonial church, attend services, walk around the quiet town plaza, and purchase bamboo furniture and souvenir handicrafts from local shops.",
              factoid: "Activities include Church Visit, Heritage Exploration, Cultural Learning, Photography, and Walking.",
              category: "HERITAGE & CRAFTS"
            }
          ]
        },
        {
          id: "maasin-watershed-forest-reserve-historic-dam",
          name: "Maasin Watershed Forest Reserve & Historic Dam",
          municipality: "Maasin",
          type: "CENTURY-OLD CONSERVATION WATERSHED & DAM",
          maps: "9C55+3P Maasin, 5030 Iloilo",
          plusCode: "9C55+3P",
          coordinates: {
            latitude: 10.85769,
            longitude: 122.40932
          },
          historicalSignificance:
            "Proclaimed as a protected watershed in 1923 during the American colonial period, the 6,000-hectare Maasin Watershed Forest Reserve and its early 20th-century concrete dam represent a historic milestone in Philippine environmental conservation and public water engineering, supplying clean water to Iloilo City for over a century.",
          touristActivities:
            "Visitors can cross the hanging bridges, inspect the historic early 20th-century dam, walk along lush bamboo forest trails, and learn about watershed conservation history.",
          activities: [
            "Historical Sightseeing",
            "Eco-Tourism",
            "Nature Sightseeing",
            "Environmental Learning",
            "Walking",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-7"/><path d="m17 15-5-6-5 6h10Z"/><path d="m15 9-3-4-3 4h6Z"/></svg>`,
          cards: [
            {
              question: "When was the Maasin Watershed Forest Reserve established and why was it vital?",
              answer: "Proclaimed in 1923 during the American colonial period, the 6,000-hectare reserve was created to protect the headwaters of the Tigum River and safeguard water quality for the province.",
              factoid: "Located at Plus Code 9C55+3P (10.857690° N, 122.409320° E).",
              category: "1923 CONSERVATION MILESTONE"
            },
            {
              question: "What historic role has the 1920s Maasin Dam served for Iloilo City?",
              answer: "The early 20th-century concrete gravity dam represents a landmark of Philippine waterworks engineering, supplying clean drinking water to Iloilo City and metro towns for over a century.",
              factoid: "It is one of the oldest continuously functioning municipal water supply reservoirs in the Philippines.",
              category: "HISTORIC WATER ENGINEERING"
            },
            {
              question: "What outdoor ecotourism activities are available in the watershed reserve?",
              answer: "Visitors can walk across scenic canopy hanging bridges, view the spillway of the historic dam, trek through dense bamboo forest corridors, and learn about watershed management.",
              factoid: "Activities include Historical Sightseeing, Eco-Tourism, Nature Sightseeing, Environmental Learning, Walking, and Photography.",
              category: "WATERSHED ECO-TRAILS"
            }
          ]
        }
      ]
    },
    {
      id: "mina",
      name: "Mina",
      district: "Iloilo District 3",
      places: [
        {
          id: "mina-nuestra-senora-del-pilar-parish-church",
          name: "Nuestra Señora del Pilar Parish Church",
          municipality: "Mina",
          type: "DOUBLE-PORTICO FACADE & MARIAN LANDMARK",
          maps: "C9HM+7X4, Mina, 5032 Iloilo",
          plusCode: "C9HM+7X4",
          coordinates: {
            latitude: 10.97816,
            longitude: 122.48491
          },
          historicalSignificance:
            "Established following Mina's creation as a pueblo in 1870 and an independent parish in 1873, the Nuestra Señora del Pilar Parish Church is distinguished by its double-portico facade and historical inscriptions documenting its 19th-century origins. It symbolizes the enduring Marian devotion and distinct identity of the town.",
          touristActivities:
            "Visitors can examine the church's double-portico architecture and historical markers, attend Mass, pray inside the sanctuary, and photograph the heritage landmark.",
          activities: [
            "Church Visit",
            "Heritage Exploration",
            "Architecture Viewing",
            "Historical Sightseeing",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
          cards: [
            {
              question: "When was Mina Church created and what distinct facade design does it feature?",
              answer: "Founded in 1873 after Mina became a pueblo in 1870, the church is known for its distinctive double-portico entrance facade and 19th-century commemorative inscriptions.",
              factoid: "Located at Plus Code C9HM+7X4 (10.978160° N, 122.484910° E).",
              category: "DOUBLE-PORTICO ARCHITECTURE"
            },
            {
              question: "What spiritual devotion does Nuestra Señora del Pilar Church represent?",
              answer: "Dedicated to Our Lady of the Pillar, the church represents centuries of Marian devotion that united the townspeople during their transition to municipal independence.",
              factoid: "Mina was named after Spanish lawyer Atty. Mina, who successfully defended the town's territory in court.",
              category: "MARIAN DEVOTION"
            },
            {
              question: "What activities can visitors enjoy at Mina Parish Church?",
              answer: "Visitors can inspect the rare double-portico stonework, read historical wall plaques, pray in the quiet nave, attend Holy Mass, and take architectural photos.",
              factoid: "Activities include Church Visit, Heritage Exploration, Architecture Viewing, Historical Sightseeing, and Photography.",
              category: "HERITAGE EXPLORATION"
            }
          ]
        },
        {
          id: "mina-public-plaza",
          name: "Mina Public Plaza",
          municipality: "Mina",
          type: "CIVIC PLAZA & MUNICIPAL RESTORATION MONUMENT",
          maps: "C9HM+6V9, Mina, 5032 Iloilo",
          plusCode: "C9HM+6V9",
          coordinates: {
            latitude: 10.97804,
            longitude: 122.48468
          },
          historicalSignificance:
            "The Mina Public Plaza serves as the historic civic heart of the municipality, commemorating the town's 19th-century founding—named in honor of Spanish lawyer Atty. Mina who successfully defended the community's territorial jurisdiction—as well as its restoration as an independent municipality from Pototan in 1968.",
          touristActivities:
            "Visitors can stroll through the tree-lined civic grounds, view historical monuments commemorating the town's founding, and experience small-town agrarian heritage.",
          activities: [
            "Historical Sightseeing",
            "Heritage Exploration",
            "Walking",
            "Cultural Learning",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/></svg>`,
          cards: [
            {
              question: "How did Mina receive its name as commemorated in the public plaza?",
              answer: "The town was named in honor of Spanish lawyer Atty. Mina, who successfully defended the community's territorial jurisdiction in colonial court in 1870.",
              factoid: "The public plaza is located at Plus Code C9HM+6V9 (10.978040° N, 122.484680° E).",
              category: "ATTY. MINA LEGAL DEFENSE"
            },
            {
              question: "What significant 20th-century political milestone is honored in Mina Public Plaza?",
              answer: "The plaza commemorates Mina's triumphant restoration as an independent municipality in 1968 after having been merged as a barangay of Pototan for several decades.",
              factoid: "Republic Act No. 5442 officially restored Mina's municipal status in 1968.",
              category: "1968 RESTORATION"
            },
            {
              question: "What experiences can visitors enjoy at Mina Public Plaza?",
              answer: "Visitors can stroll through shaded tree-lined grounds, view municipal founding monuments, photograph civic landmarks, and experience peaceful small-town agrarian culture.",
              factoid: "Activities include Historical Sightseeing, Heritage Exploration, Walking, Cultural Learning, and Photography.",
              category: "PLAZA STROLL"
            }
          ]
        }
      ]
    },
    {
      id: "pototan",
      name: "Pototan",
      district: "Iloilo District 3",
      places: [
        {
          id: "pototan-patronage-of-st-joseph-parish-church",
          name: "Patronage of St. Joseph Parish Church",
          municipality: "Pototan",
          type: "ASYMMETRICAL BELFRY & EIGHT-SPOKE WHEEL FAÇADE",
          maps: "C99W+8Q2, Pototan, 5008 Iloilo",
          plusCode: "C99W+8Q2",
          coordinates: {
            latitude: 10.96831,
            longitude: 122.49694
          },
          historicalSignificance:
            "Tracing its Augustinian mission roots back to 1593, the Patronage of St. Joseph Parish Church in Pototan is a historic landmark featuring an asymmetrical belfry and distinctive eight-spoke wheel motifs on its colonial facade, reflecting centuries of Catholic heritage in central Iloilo.",
          touristActivities:
            "Visitors can admire the unique facade motifs and asymmetrical bell tower, explore the church interior, attend Mass, and take photographs of the historic structure.",
          activities: [
            "Church Visit",
            "Heritage Exploration",
            "Architecture Viewing",
            "Historical Sightseeing",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
          cards: [
            {
              question: "When did Augustinians first establish the mission of Pototan?",
              answer: "Augustinian friars established the mission in 1593, making Pototan one of the oldest colonial parish communities in central Panay.",
              factoid: "Located in Pototan town center at Plus Code C99W+8Q2 (10.968310° N, 122.496940° E).",
              category: "1593 MISSIONARY BEGINNINGS"
            },
            {
              question: "What distinct architectural details mark the facade of Pototan Church?",
              answer: "The church is celebrated for its rare asymmetrical bell tower design and embossed eight-spoke wheel carvings and floral motifs adorning its colonial facade.",
              factoid: "The eight-spoke wheel symbolizes St. Catherine and Augustinian spiritual journeying.",
              category: "ASYMMETRICAL BELFRY & WHEELS"
            },
            {
              question: "What can travelers experience when visiting Patronage of St. Joseph Church?",
              answer: "Visitors can inspect the colonial facade artwork, explore the church interior, attend religious celebrations, photograph the belfry, and walk to the adjacent grand town plaza.",
              factoid: "Activities include Church Visit, Heritage Exploration, Architecture Viewing, Historical Sightseeing, and Photography.",
              category: "COLONIAL CHURCH TOUR"
            }
          ]
        },
        {
          id: "pototan-pototan-municipal-plaza-heritage-grounds",
          name: "Pototan Municipal Plaza & Heritage Grounds",
          municipality: "Pototan",
          type: "LARGEST TOWN PLAZA IN ILOILO & IWAG FESTIVAL",
          maps: "C99W+9P6, Pototan, 5008 Iloilo",
          plusCode: "C99W+9P6",
          coordinates: {
            latitude: 10.96841,
            longitude: 122.49682
          },
          historicalSignificance:
            "Widely regarded as one of the grandest town plazas in Iloilo, the Pototan Municipal Plaza features century-old acacia trees, a historic obelisk, and civic monuments celebrating Pototan's legacy as the 'Rice Granary of Western Visayas' and its centuries-old agricultural and cultural prominence.",
          touristActivities:
            "Visitors can walk beneath the century-old trees, view the historical obelisk and monuments, visit during the annual Iwag Festival of Lights in December, and sample traditional local delicacies.",
          activities: [
            "Heritage Exploration",
            "Historical Sightseeing",
            "Walking",
            "Cultural Learning",
            "Photography"
          ],
          iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/></svg>`,
          cards: [
            {
              question: "Why is Pototan Municipal Plaza hailed as one of the grandest in Western Visayas?",
              answer: "Covering multiple hectares with grand walkways, century-old acacia canopies, skating rink, lagoon, and an ornate historical stone obelisk, it is celebrated as the largest town plaza in Iloilo.",
              factoid: "Located at Plus Code C99W+9P6 (10.968410° N, 122.496820° E).",
              category: "LARGEST TOWN PLAZA"
            },
            {
              question: "What agricultural pride and festive illumination define Pototan Plaza?",
              answer: "It celebrates Pototan's title as the 'Rice Granary of Western Visayas' and hosts the famous annual Iwag Festival of Lights in December, illuminating the entire plaza with millions of bulbs.",
              factoid: "The Iwag Festival turns Pototan into the Christmas Capital of Western Visayas.",
              category: "RICE GRANARY & IWAG FESTIVAL"
            },
            {
              question: "What can travelers enjoy while exploring the Pototan plaza grounds?",
              answer: "Visitors can stroll beneath giant heritage acacia trees, inspect the historical obelisk, experience December light displays, and sample local street snacks and traditional rice delicacies.",
              factoid: "Activities include Heritage Exploration, Historical Sightseeing, Walking, Cultural Learning, and Photography.",
              category: "PLAZA EXPERIENCES"
            }
          ]
        }
      ]
    }
  ]
};

if (typeof window !== "undefined") {
  window.ILOILO_DISTRICT_3_DATA = ILOILO_DISTRICT_3_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = ILOILO_DISTRICT_3_DATA;
}

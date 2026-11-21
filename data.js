// Panay Island Flashcard & Badge Dataset
const PANAY_DATA = {
  topics: [
    {
      id: "panay-overview",
      name: "Panay Island Overview",
      category: "Regional Geography & Heritage",
      province: "Regional",
      description: "Fundamental geography, indigenous culture, and historical foundations of Panay Island in Western Visayas.",
      badgeId: "badge-panay-scholar",
      cards: [
        {
          id: "panay-geo-1",
          question: "What is the geographic profile and regional identity of Panay Island?",
          answer: "Panay is the fourth-largest island in the Philippines, located in the Western Visayas region (Region VI). Shaped roughly like a triangle, it is bordered by the Sibuyan Sea to the north, the Guimaras Strait to the southeast, the Panay Gulf to the south, and the Sulu Sea to the west.",
          category: "Geography",
          factoid: "Panay Island covers an area of approximately 12,011 square kilometers and contains four distinct provinces: Iloilo, Capiz, Aklan, and Antique."
        },
        {
          id: "panay-geo-2",
          question: "Which mountain range forms the natural backbone of Panay Island?",
          answer: "The Central Panay Mountain Range runs north-to-south along the western part of the island, dividing Antique from Iloilo, Capiz, and Aklan. Its highest peak is Mount Madja-as in Antique, reaching 2,117 meters (6,946 feet) above sea level.",
          category: "Topography",
          factoid: "Mount Madja-as is known in Panay mythology as the sacred abode of Sidapa, the ancient god of death, and Mount Nangtud is its twin dominant summit."
        },
        {
          id: "panay-culture-1",
          question: "Who are the Panay Bukidnon, and what is their oral masterpiece?",
          answer: "The Panay Bukidnon (Sulodnon) are the indigenous upland inhabitants of the Central Panay mountains. They are custodians of the Hinilawod, an ancient oral epic poem spanning thousands of verses that recounts the heroic exploits of three demigod brothers: Labaw Donggon, Humadapnon, and Dumalapdap.",
          category: "Indigenous Heritage",
          factoid: "Chanting the complete Hinilawod can take roughly 30 hours of continuous performance by trained master chanters known as 'binukot' and elders."
        },
        {
          id: "panay-history-1",
          question: "What is the historical significance of the Maragtas Legend in Panay lore?",
          answer: "According to the Maragtas chronicle, ten Bornean datus led by Datu Puti fled Borneo to escape the tyranny of Sultan Makatunaw and landed in San Joaquin, Iloilo around the 13th century. They negotiated the purchase of the lowlands from the Ati chieftain Marikudo in exchange for a golden salakot and a long brass basin.",
          category: "Oral History & Legend",
          factoid: "While modern historians view Maragtas as semi-legendary oral folklore rather than documented archival history, it remains a cornerstone of Panay cultural pride and festival themes."
        },
        {
          id: "panay-craft-1",
          question: "What is Panubok, and why is it culturally significant?",
          answer: "Panubok is the traditional geometric needlework embroidery practiced by the women of the Panay Bukidnon. The patterns are inspired by nature, including flowers (bulak), bamboo trellis (tuko-tuko), and the eyes of the freshwater crab (mata kang alimango).",
          category: "Cultural Arts",
          factoid: "Panubok ornamentation is sewn onto traditional blouses (pulus) worn during the Binanog hawk-mimicking ritual dance."
        }
      ]
    },
    {
      id: "iloilo-province",
      name: "Province of Iloilo",
      category: "Heritage & Culinary Capital",
      province: "Iloilo",
      description: "Colonial Spanish architecture, culinary heritage, national historic revolutions, and coastal islands.",
      badgeId: "badge-iloilo-expert",
      cards: [
        {
          id: "ilo-city-1",
          question: "Why is Iloilo City recognized globally by UNESCO?",
          answer: "In November 2023, Iloilo City was designated as a UNESCO Creative City of Gastronomy. It is celebrated for iconic culinary treasures including La Paz Batchoy, Pancit Molo, and KBL (Kadyos, Baboy, Langka), representing centuries of mixed indigenous, Spanish, and Chinese culinary traditions.",
          category: "Culinary Heritage",
          factoid: "Iloilo City was also bestowed the royal title 'La Muy Leal y Noble Ciudad' (The Most Loyal and Noble City) by Queen Regent Maria Cristina of Spain in 1896."
        },
        {
          id: "ilo-miagao-1",
          question: "What makes Miagao Church an internationally recognized monument?",
          answer: "The Santo Tomás de Villanueva Parish Church in Miagao is an official UNESCO World Heritage Site (inscribed in 1993 under the Baroque Churches of the Philippines). Built between 1787 and 1797 with yellow-ochre sandstone and coral blocks, its facade uniquely fuses European Baroque architecture with local Filipino folk motifs.",
          category: "Architecture & UNESCO",
          factoid: "The facade features Saint Christopher carrying the Child Jesus while holding onto an indigenous coconut palm tree, surrounded by guava and papaya vegetation carvings."
        },
        {
          id: "ilo-calle-real",
          question: "What is Calle Real, and what architectural era does it preserve?",
          answer: "Calle Real (officially J.M. Basa Street) in downtown Iloilo City is a heritage conservation zone featuring early 20th-century Art Deco, Beaux-Arts, and Neoclassical commercial buildings constructed during the height of the Western Visayas sugar trade boom.",
          category: "Urban History",
          factoid: "During the late 19th and early 20th century, Iloilo was referred to as the 'Queen City of the South' due to its bustling international port and sugar industry."
        },
        {
          id: "ilo-sta-barbara",
          question: "What historical event took place in the municipality of Santa Barbara?",
          answer: "On November 17, 1898, General Martin Teófilo Delgado led the Cry of Santa Barbara, officially establishing the Revolutionary Government of the Visayas and raising the Philippine national flag for the first time outside of Luzon island.",
          category: "National Revolution",
          factoid: "Santa Barbara Parish Church served as Delgado's revolutionary general headquarters during the war against Spanish forces."
        },
        {
          id: "ilo-gigantes",
          question: "What natural landscape characterizes the Islas de Gigantes in Carles?",
          answer: "Islas de Gigantes is an archipelago off the northeastern coast of Carles, Iloilo, renowned for its dramatic karst limestone cliffs, secluded white sand lagoons, and abundant scallop beds. Key spots include Cabugao Gamay Island and Tangke Saltwater Lagoon.",
          category: "Natural Wonders",
          factoid: "Carles is widely dubbed the 'Scallop Capital of the Philippines' due to the bountiful harvest from its surrounding shallow coastal waters."
        }
      ]
    },
    {
      id: "capiz-province",
      name: "Province of Capiz",
      category: "Coastal Ecology & Heritage",
      province: "Capiz",
      description: "The Seafood Capital of the Philippines, historic mega-bells, Placuna placenta handicrafts, and cave systems.",
      badgeId: "badge-capiz-expert",
      cards: [
        {
          id: "cap-roxas-1",
          question: "Why is Roxas City known as the 'Seafood Capital of the Philippines'?",
          answer: "Roxas City, the provincial capital of Capiz, sits at the confluence of the Panay River and the Sibuyan Sea. Its extensive network of brackish estuaries, mangrove marshes, and clean marine waters produces a vast abundance of crabs, prawns, milkfish (bangus), oysters, and angel-wing clams (diwal).",
          category: "Marine Resources",
          factoid: "Diwal, prized for its sweet, tender meat and translucent wings, is harvested under sustainable seasonal closures to protect wild beds."
        },
        {
          id: "cap-panay-bell",
          question: "Where is the largest Catholic church bell in Asia located, and how was it cast?",
          answer: "The largest Catholic church bell in Asia, known as 'Dakong Lingganay', hangs in the belfry of the Santa Monica Parish Church in the municipality of Panay, Capiz. Cast in 1878 under Friar José Beloso, it was made by melting down 70 sacks of gold and silver coins donated by local townsfolk.",
          category: "Historical Relic",
          factoid: "The bell weighs over 10.4 metric tons (10,400 kilograms) and measures 7 feet in diameter and 5 feet in height. Its deep chime can be heard miles across the plains."
        },
        {
          id: "cap-placuna",
          question: "What is Capiz shell, and how is it traditionally utilized?",
          answer: "Capiz shells come from the windowpane oyster (Placuna placenta), an edible marine bivalve native to the shallow coastal muds of Capiz. Historically, the durable, translucent inner shell was cut into squares and set into wooden mullions for Spanish colonial window panes before modern glass became common.",
          category: "Indigenous Craft",
          factoid: "Today, Capiz artisans export high-end lampshades, chandeliers, decorative plates, and Christmas parols made from polished windowpane oyster shells worldwide."
        },
        {
          id: "cap-dumalag",
          question: "What natural attraction is Dumalag, Capiz known for?",
          answer: "Dumalag is home to the Suhot Spring and Cave system, a freshwater spring originating from an underground limestone cavern. The cold subterranean water forms natural pools surrounded by lush forest and offers safe spelunking into subterranean chambers with calcified stalactite formations.",
          category: "Ecotourism",
          factoid: "The spring water remains consistently cool and crystal-clear throughout all dry and wet seasons."
        }
      ]
    },
    {
      id: "aklan-province",
      name: "Province of Aklan",
      category: "Ancient Lore & Tropical Wonders",
      province: "Aklan",
      description: "The oldest province in the Philippines, the vibrant Ati-Atihan Festival, Boracay Island, and UNESCO Piña weaving.",
      badgeId: "badge-aklan-expert",
      cards: [
        {
          id: "akl-kalibo-1",
          question: "What makes the Ati-Atihan Festival of Kalibo unique in Philippine history?",
          answer: "Held every third Sunday of January in Kalibo, Ati-Atihan is regarded as the 'Mother of All Philippine Festivals.' Celebrants soot their faces and bodies black, don elaborate indigenous tribal costumes, and dance rhythmically in the streets ('Sadsad') to thunderous drum beats while chanting 'Hala Bira! Viva Señor Santo Niño!'",
          category: "Festivals & Heritage",
          factoid: "The festival traces back to the 13th-century pact between Bornean settlers and the indigenous Ati people, later Christianized in honor of the infant Jesus."
        },
        {
          id: "akl-boracay",
          question: "What is Boracay Island's global significance and conservation history?",
          answer: "Located under the administrative jurisdiction of the municipality of Malay, Aklan, Boracay is famous worldwide for its 4-kilometer stretch of powdery White Beach and vibrant coral reef systems. In 2018, it underwent an unprecedented six-month closure and environmental rehabilitation to enforce strict coastal setback and sewage treatment standards.",
          category: "Ecotourism",
          factoid: "The sand of Boracay remains remarkably cool to the touch even in the midday tropical sun due to its unique pure coral calcium composition."
        },
        {
          id: "akl-pina",
          question: "How did Aklan's Piña cloth weaving earn international UNESCO recognition?",
          answer: "In December 2023, 'Aklan piña handloom weaving' was officially inscribed onto UNESCO's Representative List of the Intangible Cultural Heritage of Humanity. Extracted by hand from the leaves of the Red Spanish pineapple plant, the lustrous fiber is woven on two-pedal wooden looms into royal formal garments such as the Barong Tagalog.",
          category: "UNESCO Intangible Craft",
          factoid: "Extracting the finest translucent fiber (liniwan) requires scraping the pineapple leaf with broken porcelain shards or coconut shells before knotting each single strand together."
        },
        {
          id: "akl-bakhawan",
          question: "What is the Bakhawan Eco-Park in Kalibo, and why is it praised globally?",
          answer: "Bakhawan Eco-Park is a 220-hectare mangrove reforestation reserve in Kalibo. Started in 1990 by local community cooperatives and government agencies to combat coastal erosion and flooding, it is now celebrated as one of the most successful mangrove conservation projects in Asia.",
          category: "Environmental Conservation",
          factoid: "Visitors walk through a 1.3-kilometer raised bamboo boardwalk cutting directly through the dense mangrove canopy out to the Aklan coastline."
        }
      ]
    },
    {
      id: "antique-province",
      name: "Province of Antique",
      category: "Rugged Mountains & Pristine Coasts",
      province: "Antique",
      description: "Where the mountains meet the sea, Kawa hot baths, cleanest inland rivers, and historical Bornean settlements.",
      badgeId: "badge-antique-expert",
      cards: [
        {
          id: "ant-tibiao-1",
          question: "What is the Kawa Hot Bath in Tibiao, and what was its original function?",
          answer: "In Tibiao, Antique, visitors soak in giant open-air cast iron cauldrons called 'kawa', filled with warm water, medicinal herbs, ginger, and wild flowers, gently heated over an open wood fire. Originally, these massive cauldrons were used in sugar mills (muscovado pans) during the colonial sugar-milling era.",
          category: "Wellness & Tradition",
          factoid: "After the sugar mills modernized, ingenious Antiqueños repurposed the idle cauldrons into eco-tourism thermal baths alongside the roaring Tibiao River."
        },
        {
          id: "ant-pandan-bugang",
          question: "Why is the Bugang River in Pandan, Antique recognized as a national ecological benchmark?",
          answer: "The Bugang River in Pandan has repeatedly been awarded the Cleanest Inland Body of Water in the Philippines. Springing from deep subterranean limestone caverns in Malumpati Cold Spring (the 'Blue Lagoon'), it flows unpolluted through protected rainforest reserves directly into the ocean.",
          category: "Ecology & Rivers",
          factoid: "Malumpati Cold Spring serves as a natural diving and water-tubing paradise with natural deep pools and emerald waters."
        },
        {
          id: "ant-culasi-mararison",
          question: "What makes Mararison Island in Culasi a captivating destination?",
          answer: "Mararison (or Malalison) is an offshore island in Culasi characterized by rolling grassy highlands reminiscent of Batanes hills, a sandbar that shifts with tidal currents, and panoramic vistas of the towering Mount Madja-as on the mainland.",
          category: "Island Geography",
          factoid: "Local legend tells that Mararison, along with Batbatan and Maniguin islands, were the three rebellious children of Mount Madja-as and Mount Kanlaon, banished into the sea."
        },
        {
          id: "ant-aniniy",
          question: "What unique architectural and geothermal features are found in Anini-y?",
          answer: "Anini-y, the southernmost municipality of Antique, features the historic Church of Saint John of Nepomuceno, built in 1879 entirely out of hand-hewn coral stone blocks. Nearby lies Siraan Hot Spring, a natural sulfuric geothermal hot spring overlooking the Sulu Sea and Nogas Island.",
          category: "Historic Landmarks",
          factoid: "Nogas Island is a 24-hectare uninhabited marine sanctuary directly facing Anini-y, ringed with frangipani trees and coral reefs."
        }
      ]
    }
  ],

  badges: [
    {
      id: "badge-panay-scholar",
      title: "Panay Island Scholar",
      topicId: "panay-overview",
      iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>`,
      description: "Completed all foundation cards covering Panay Island geography, indigenous Hinilawod epic, and regional history."
    },
    {
      id: "badge-iloilo-expert",
      title: "Iloilo Heritage Scholar",
      topicId: "iloilo-province",
      iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      description: "Mastered historical, architectural, and culinary facts of Iloilo including Miagao Church and Calle Real."
    },
    {
      id: "badge-capiz-expert",
      title: "Capiz Marine Lorekeeper",
      topicId: "capiz-province",
      iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
      description: "Completed cards exploring Roxas City seafood ecology, the historic Panay church bell, and Capiz windowpane craftsmanship."
    },
    {
      id: "badge-aklan-expert",
      title: "Aklan Cultural Custodian",
      topicId: "aklan-province",
      iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      description: "Mastered facts about Kalibo's Ati-Atihan, Boracay's conservation, and UNESCO-inscribed Piña handloom weaving."
    },
    {
      id: "badge-antique-expert",
      title: "Antique Mountain & Coast Pioneer",
      topicId: "antique-province",
      iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
      description: "Reviewed the wonders of Antique including the Tibiao Kawa baths, Bugang River, and coral churches."
    },
    {
      id: "badge-grand-voyager",
      title: "Master Voyager of Panay",
      topicId: "all",
      iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"/><path d="m8.21 13.89-1.35 6.32a.5.5 0 0 0 .76.51L12 18.25l4.38 2.47a.5.5 0 0 0 .76-.51l-1.35-6.32"/></svg>`,
      description: "Unlocked every single topic and completed all flashcards across the entire island of Panay."
    }
  ]
};

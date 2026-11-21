/**
 * KINAADMAN | The Panay Heritage Quest
 * Application Logic: Interactive Flashcard Stations, Map, Passport & Quests
 * SVG Vector Icons only — No emojis
 */

// Station Discovery Flashcard Dataset
const stations = [
  {
    name: "Miagao",
    type: "HERITAGE LANDMARK",
    iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
    cards: [
      {
        question: "What makes Miagao Church (Santo Tomás de Villanueva) an internationally recognized UNESCO World Heritage monument?",
        answer: "Constructed between 1787 and 1797 using local yellow-ochre sandstone and coral blocks, Miagao Church uniquely functioned as both a place of worship and a defensive fortress against maritime pirate incursions. In 1993, it was inscribed as a UNESCO World Heritage Site under the Baroque Churches of the Philippines.",
        factoid: "Its massive stone walls are 1.5 meters thick, reinforced by colossal buttresses designed to endure seismic shocks.",
        category: "ARCHITECTURE & UNESCO"
      },
      {
        question: "What indigenous Filipino folk motifs are sculpted directly onto the European Baroque facade?",
        answer: "The centerpiece of the pediment portrays Saint Christopher in traditional local clothing carrying the Christ Child while holding onto a flourishing indigenous coconut palm tree, flanked by native papaya trees, guava flora, and tropical banana vegetation.",
        factoid: "Architectural historians celebrate this sculptural relief as one of Southeast Asia's greatest masterpieces of 'Filipino-Hispanic Folk Baroque'.",
        category: "FOLK BAROQUE ART"
      },
      {
        question: "What centuries-old textile weaving tradition is preserved in the municipality of Miagao?",
        answer: "Miagao is the premier center of Iloilo's handloom weaving industry, producing Hablon—a traditional woven textile made of cotton, abaca, and silk threads. Generations of local master weavers (manughabol) preserve intricate geometric and plaid designs.",
        factoid: "The term 'Hablon' is derived from the Hiligaynon root word 'habol', meaning 'to weave with a handloom'.",
        category: "LIVING TRADITIONS"
      }
    ]
  },
  {
    name: "Iloilo City",
    type: "CULTURE & CITY LIFE",
    iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
    cards: [
      {
        question: "Why did UNESCO officially designate Iloilo City as a Creative City of Gastronomy in 2023?",
        answer: "Iloilo City is the very first city in the Philippines recognized by UNESCO for gastronomy. Its culinary identity spans centuries of indigenous, Spanish, and Chinese heritage, famous for iconic dishes such as La Paz Batchoy, Pancit Molo, and KBL (Kadyos, Baboy, Langka).",
        factoid: "La Paz Batchoy was created in the 1930s inside the La Paz Public Market, flavored with bone marrow stock and crispy chicharon.",
        category: "UNESCO GASTRONOMY"
      },
      {
        question: "What is Calle Real, and what historic economic era does its architecture reflect?",
        answer: "Calle Real (officially J.M. Basa Street) in downtown Iloilo is a conserved heritage district showcasing neoclassical, Beaux-Arts, and Art Deco commercial facades constructed during the late 19th and early 20th-century international sugar trade boom.",
        factoid: "In 1896, Queen Regent Maria Cristina of Spain conferred upon Iloilo the royal honor 'La Muy Leal y Noble Ciudad' (The Most Loyal and Noble City).",
        category: "HISTORIC COMMERCE"
      },
      {
        question: "What is the historical foundation of the celebrated Dinagyang Festival?",
        answer: "Held annually on the fourth Sunday of January, Dinagyang honors the infant Santo Niño and commemorates the historic arrival and settlement of Bornean datus on Panay. Dancers coated in dark soot perform synchronized drum routines across city streets.",
        factoid: "Dinagyang has repeatedly been awarded the Best Tourism Event in the Philippines by the Association of Tourism Officers of the Philippines.",
        category: "FESTIVALS & IDENTITY"
      }
    ]
  },
  {
    name: "Southern Iloilo",
    type: "COASTAL DISCOVERY",
    iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
    cards: [
      {
        question: "What dramatic military event is uniquely carved onto the pediment of San Joaquin Church?",
        answer: "Constructed in 1869 out of red coral stones and river basalt, the facade of San Joaquin Church uniquely depicts a high-relief depiction of the 1859 Battle of Tetuan in Morocco, highlighting cavalry charges and military standard-bearers.",
        factoid: "It is the only church pediment in the Philippines featuring an international military battle rather than liturgical saints.",
        category: "HISTORIC PEDIMENT"
      },
      {
        question: "What architectural and coastal setting defines the Campo Santo of San Joaquin?",
        answer: "The Campo Santo of San Joaquin is a Spanish colonial mortuary cemetery perched on a coastal bluff overlooking the Panay Gulf. Built in 1892, its grand 20-step stone staircase leads to an octagonal baroque-neoclassical burial chapel ('Capilla').",
        factoid: "The National Museum of the Philippines declared both the Church and Campo Santo of San Joaquin National Cultural Treasures in 2014.",
        category: "COLONIAL CEMETERY"
      },
      {
        question: "How did 17th-century coastal communities defend themselves against maritime pirate raids?",
        answer: "Municipalities along the southern coastline, such as Guimbal and San Joaquin, erected coastal stone watchtowers called 'Bantayan'. Lookouts stationed atop these coral fortifications warned villagers and fishermen of approaching seafaring corsairs.",
        factoid: "Three restored 17th-century coral Bantayan watchtowers still stand vigil on the beaches of Guimbal.",
        category: "MARITIME VIGILANCE"
      }
    ]
  },
  {
    name: "Central Iloilo",
    type: "LOCAL STORIES",
    iconSvg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c0-3.5 1-6.5 3-9"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-1.5-.4-3-1.1-3.8-2.3a3 3 0 0 1 1.5-1.4z"/><path d="M14.1 6a3 3 0 0 1 1.4 1.5c-.8 1.1-2.2 1.8-3.7 2.3.4-1.5 1.1-3 2.3-3.8z"/></svg>`,
    cards: [
      {
        question: "What historic milestone of the Philippine Revolution took place in Santa Barbara?",
        answer: "On November 17, 1898, General Martin Teófilo Delgado led the Cry of Santa Barbara, establishing the Revolutionary Government of the Visayas and raising the Philippine national flag for the first recorded time outside the island of Luzon.",
        factoid: "Santa Barbara Parish Church and Convent served as Delgado's revolutionary army headquarters during the war.",
        category: "PHILIPPINE REVOLUTION"
      },
      {
        question: "What unique circular colonial landmark distinguishes the municipality of Cabatuan?",
        answer: "Cabatuan is home to San Nicolas de Tolentino Parish Church (a massive neoclassical red-brick cathedral) and the Cabatuan Spanish Cemetery, which is celebrated as the only completely circular colonial brick cemetery in Iloilo.",
        factoid: "Cabatuan is also the birthplace of wartime hero and patriot Governor Tomas Confesor.",
        category: "CIRCULAR ARCHITECTURE"
      },
      {
        question: "What agricultural pride and ancient heritage define Passi City in central Panay?",
        answer: "Known as the 'Sweet City at the Heart of Panay', Passi City produces vast harvests of sweet pineapples and sugarcane. Every March, the city celebrates Pintados de Pasi, honoring pre-colonial Bisayan tattooing traditions alongside agricultural thanksgiving.",
        factoid: "The term 'Pintados' was used by early 16th-century Spanish chroniclers to describe the heavily tattooed indigenous warriors of the Visayas.",
        category: "INDIGENOUS ROOTS"
      }
    ]
  }
];

// Application State
let active = 0;              // Current selected station index
let activeCardIndex = 0;      // Current flashcard index within station
let isCardFlipped = false;    // Flashcard front/back state
const visited = new Set();    // Set of completed station indices
let toastTimeout = null;

// DOM Element References
const list = document.getElementById("destinationList");
const stationCount = document.getElementById("stationCount");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const stampsContainer = document.getElementById("stamps");
const coinCount = document.getElementById("coinCount");
const startExploringBtn = document.getElementById("startExploringBtn");
const mapSection = document.getElementById("mapSection");
const viewActiveQuestBtn = document.getElementById("viewActiveQuestBtn");
const questDetailsBtn = document.getElementById("questDetailsBtn");
const pins = document.querySelectorAll(".pin");
const toast = document.getElementById("toast");

// Modal Flashcard Elements
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalTitle = document.getElementById("modalTitle");
const modalProgressFill = document.getElementById("modalProgressFill");
const modalProgressLabel = document.getElementById("modalProgressLabel");

const modalFlashcardWrapper = document.getElementById("modalFlashcardWrapper");
const modalCardCategoryFront = document.getElementById("modalCardCategoryFront");
const modalCardCategoryBack = document.getElementById("modalCardCategoryBack");
const modalCardQuestion = document.getElementById("modalCardQuestion");
const modalCardAnswer = document.getElementById("modalCardAnswer");
const modalCardFactoid = document.getElementById("modalCardFactoid");
const modalCardCounterFront = document.getElementById("modalCardCounterFront");
const modalCardCounterBack = document.getElementById("modalCardCounterBack");

const modalPrevBtn = document.getElementById("modalPrevBtn");
const modalFlipBtn = document.getElementById("modalFlipBtn");
const modalNextBtn = document.getElementById("modalNextBtn");

/**
 * Load progress from localStorage if available
 */
function loadSavedProgress() {
  try {
    const saved = localStorage.getItem("kinaadman_visited");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        parsed.forEach(idx => visited.add(idx));
      }
    }
  } catch (e) {
    console.warn("Could not load saved progress:", e);
  }
}

/**
 * Save progress to localStorage
 */
function saveProgress() {
  try {
    localStorage.setItem("kinaadman_visited", JSON.stringify([...visited]));
  } catch (e) {
    console.warn("Could not save progress:", e);
  }
}

/**
 * Render the destination list, passport progress, stamps, and map pins
 */
function render() {
  // Render destination cards with SVG icons
  list.innerHTML = stations.map((s, i) => `
    <button type="button" class="destination ${active === i ? 'selected' : ''}" data-station="${i}" aria-label="Explore ${s.name}">
      <span class="dest-art" aria-hidden="true">${s.iconSvg}</span>
      <span>
        <strong>${s.name}</strong>
        <small>${s.type}${visited.has(i) ? ' · DISCOVERED' : ''}</small>
      </span>
    </button>
  `).join("");

  // Update counters and progress
  const visitedCount = visited.size;
  const total = stations.length;
  const pct = Math.round((visitedCount / total) * 100);

  stationCount.textContent = `${visitedCount} / ${total} VISITED`;
  progressText.textContent = `${pct}%`;
  progressBar.style.width = `${pct}%`;

  // Update stamps in passport using clean SVG vector icons
  const earnedIconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
  const lockedIconSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

  stampsContainer.innerHTML = stations.map((s, i) => `
    <div class="stamp ${visited.has(i) ? 'earned' : ''}" title="${s.name}" aria-label="${s.name} stamp: ${visited.has(i) ? 'earned' : 'locked'}">
      ${visited.has(i) ? earnedIconSvg : lockedIconSvg}
    </div>
  `).join("");

  // Update map pin active states
  pins.forEach((pin, i) => {
    pin.classList.toggle("active", i === active);
  });

  // Update coins (120 initial + 25 per discovered station)
  coinCount.textContent = 120 + visitedCount * 25;
}

/**
 * Select a station and open its flashcard deck
 * @param {number} index
 */
function selectStation(index) {
  if (index >= 0 && index < stations.length) {
    active = index;
    activeCardIndex = 0;
    isCardFlipped = false;
    render();
    openStation();
  }
}

/**
 * Populate and display the flashcard study deck for the active station
 */
function openStation() {
  const s = stations[active];
  if (!s || !s.cards || s.cards.length === 0) return;

  renderCurrentCard();
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

/**
 * Render the current card in the active station deck
 */
function renderCurrentCard() {
  const s = stations[active];
  const card = s.cards[activeCardIndex];
  if (!card) return;

  const totalCards = s.cards.length;

  // Header info
  modalEyebrow.textContent = `DISCOVERY STATION 0${active + 1} · ${s.type}`;
  modalTitle.textContent = s.name;

  // Progress Bar
  const pct = Math.round(((activeCardIndex + 1) / totalCards) * 100);
  modalProgressFill.style.width = `${pct}%`;
  modalProgressLabel.textContent = `Card ${activeCardIndex + 1} of ${totalCards}`;

  // Card Content (Front & Back)
  modalCardCategoryFront.textContent = card.category;
  modalCardCategoryBack.textContent = card.category;
  modalCardQuestion.textContent = card.question;
  modalCardAnswer.textContent = card.answer;
  modalCardFactoid.textContent = card.factoid;

  // Card Footer Counters
  const counterText = `Card ${activeCardIndex + 1} of ${totalCards}`;
  modalCardCounterFront.textContent = counterText;
  modalCardCounterBack.textContent = counterText;

  // Reset Flip State
  isCardFlipped = false;
  modalFlashcardWrapper.classList.remove("flipped");

  // Controls Navigation State
  modalPrevBtn.disabled = activeCardIndex === 0;

  if (activeCardIndex === totalCards - 1) {
    if (visited.has(active)) {
      modalNextBtn.innerHTML = `<span>Deck Completed</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    } else {
      modalNextBtn.innerHTML = `<span>Collect Stamp</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    }
  } else {
    modalNextBtn.innerHTML = `<span>Next Card</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
  }
}

/**
 * Toggle flashcard front / back flip
 */
function toggleCardFlip() {
  isCardFlipped = !isCardFlipped;
  if (isCardFlipped) {
    modalFlashcardWrapper.classList.add("flipped");
  } else {
    modalFlashcardWrapper.classList.remove("flipped");
  }
}

/**
 * Go to the previous card
 */
function prevCard() {
  if (activeCardIndex > 0) {
    activeCardIndex--;
    renderCurrentCard();
  }
}

/**
 * Go to the next card or complete the station deck
 */
function nextCard() {
  const s = stations[active];
  if (!s) return;

  const totalCards = s.cards.length;

  if (activeCardIndex < totalCards - 1) {
    activeCardIndex++;
    renderCurrentCard();
  } else {
    // Finished all cards in this station deck
    completeStation();
  }
}

/**
 * Complete the active station, award passport stamp, and save progress
 */
function completeStation() {
  const isFirstCompletion = !visited.has(active);

  if (isFirstCompletion) {
    visited.add(active);
    saveProgress();
    render();
    showToast(`Passport stamp collected! You discovered ${stations[active].name}.`);
  } else {
    showToast(`Deck reviewed: ${stations[active].name}.`);
  }

  closeModal();
}

/**
 * Close the station modal dialog
 */
function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

/**
 * Show a temporary toast message
 * @param {string} msg
 */
function showToast(msg) {
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toast.textContent = msg;
  toast.classList.add("show");

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/**
 * Bind DOM Event Listeners
 */
function setupEventListeners() {
  // Destination list delegation
  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".destination");
    if (btn && btn.dataset.station !== undefined) {
      const idx = parseInt(btn.dataset.station, 10);
      selectStation(idx);
    }
  });

  // Map pin buttons
  pins.forEach((pin, idx) => {
    pin.addEventListener("click", () => {
      selectStation(idx);
    });
  });

  // Hero Start Exploring Button
  if (startExploringBtn && mapSection) {
    startExploringBtn.addEventListener("click", () => {
      mapSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Flashcard Deck Interactions
  if (modalFlashcardWrapper) {
    modalFlashcardWrapper.addEventListener("click", toggleCardFlip);
  }

  if (modalFlipBtn) {
    modalFlipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCardFlip();
    });
  }

  if (modalPrevBtn) {
    modalPrevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      prevCard();
    });
  }

  if (modalNextBtn) {
    modalNextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      nextCard();
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  // Close modal when clicking outside dialog box
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Keyboard accessibility
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("show")) return;

    if (e.code === "Space") {
      e.preventDefault();
      toggleCardFlip();
    } else if (e.code === "ArrowRight") {
      nextCard();
    } else if (e.code === "ArrowLeft") {
      prevCard();
    } else if (e.code === "Escape") {
      closeModal();
    }
  });

  // Quest actions
  if (viewActiveQuestBtn) {
    viewActiveQuestBtn.addEventListener("click", openStation);
  }
  if (questDetailsBtn) {
    questDetailsBtn.addEventListener("click", () => {
      showToast("Explore all 4 discovery decks to complete this quest.");
    });
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadSavedProgress();
  setupEventListeners();
  render();
});

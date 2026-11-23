/**
 * KINAADMAN | The Panay Heritage Quest
 * Application Logic: Interactive Flashcard Stations, District Filtering, Map, Passport & Quests
 * Supporting all 5 Districts of Iloilo (46 places total across districts 1 to 5)
 * SVG Vector Icons only — No emojis
 */

// Consolidate all 5 Districts into a unified stations collection
function buildAllStations() {
  const d1 = (typeof window !== "undefined" && Array.isArray(window.ILOILO_DISTRICT_1_DATA))
    ? window.ILOILO_DISTRICT_1_DATA
    : [];

  const d2Raw = (typeof window !== "undefined" && window.ILOILO_DISTRICT_2_DATA)
    ? window.ILOILO_DISTRICT_2_DATA
    : null;
  const d2 = d2Raw && d2Raw.municipalities ? d2Raw.municipalities.flatMap(m => m.places) : [];

  const d3Raw = (typeof window !== "undefined" && window.ILOILO_DISTRICT_3_DATA)
    ? window.ILOILO_DISTRICT_3_DATA
    : null;
  const d3 = d3Raw && d3Raw.municipalities ? d3Raw.municipalities.flatMap(m => m.places) : [];

  const d4 = (typeof window !== "undefined" && Array.isArray(window.ILOILO_DISTRICT_4_DATA))
    ? window.ILOILO_DISTRICT_4_DATA
    : [];

  const d5Raw = (typeof window !== "undefined" && window.ILOILO_DISTRICT_5_DATA)
    ? window.ILOILO_DISTRICT_5_DATA
    : null;
  const d5 = d5Raw && d5Raw.municipalities ? d5Raw.municipalities.flatMap(m => m.places) : [];

  // Tag district numbers uniformly
  d1.forEach(p => { p.districtNumber = 1; });
  d2.forEach(p => { p.districtNumber = 2; });
  d3.forEach(p => { p.districtNumber = 3; });
  d4.forEach(p => { p.districtNumber = 4; });
  d5.forEach(p => { p.districtNumber = 5; });

  return [...d1, ...d2, ...d3, ...d4, ...d5];
}

const allStations = buildAllStations();

// Application State
let activeDistrict = "all";   // "all" | 1 | 2 | 3 | 4 | 5
let activeStationId = null;   // ID of currently highlighted station
let activeCardIndex = 0;      // Current flashcard index within modal
let isCardFlipped = false;    // Flashcard front/back state
const visited = new Set();    // Set of completed station IDs
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
 * Returns filtered stations based on activeDistrict
 */
function getVisibleStations() {
  if (activeDistrict === "all") {
    return allStations;
  }
  return allStations.filter(s => s.districtNumber === Number(activeDistrict));
}

/**
 * Get station object by ID
 */
function getStationById(id) {
  return allStations.find(s => s.id === id);
}

/**
 * Load progress from localStorage if available
 */
function loadSavedProgress() {
  try {
    const saved = localStorage.getItem("kinaadman_visited_stations");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        parsed.forEach(id => visited.add(id));
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
    localStorage.setItem("kinaadman_visited_stations", JSON.stringify([...visited]));
  } catch (e) {
    console.warn("Could not save progress:", e);
  }
}

/**
 * Render the destination list, passport progress, stamps, and map pins
 */
function render() {
  const visible = getVisibleStations();

  // If activeStationId is not in visible or null, select first visible
  if (!activeStationId || !visible.some(s => s.id === activeStationId)) {
    if (visible.length > 0) {
      activeStationId = visible[0].id;
    }
  }

  // Render destination cards with SVG icons
  list.innerHTML = visible.map(s => `
    <button type="button" class="destination ${activeStationId === s.id ? 'selected' : ''}" data-station-id="${s.id}" aria-label="Explore ${s.municipality || ''} - ${s.name}">
      <span class="dest-art" aria-hidden="true">${s.iconSvg || `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`}</span>
      <span>
        <strong>${s.municipality ? s.municipality.toUpperCase() + ' · ' : ''}${s.name}</strong>
        <small>DISTRICT ${s.districtNumber} · ${s.type || 'HERITAGE STATION'}${visited.has(s.id) ? ' · DISCOVERED' : ''}</small>
      </span>
    </button>
  `).join("");

  // Update counters and progress
  const visitedCount = visited.size;
  const total = allStations.length;
  const pct = total > 0 ? Math.round((visitedCount / total) * 100) : 0;

  stationCount.textContent = `${visitedCount} / ${total} VISITED (${visible.length} in view)`;
  progressText.textContent = `${pct}%`;
  progressBar.style.width = `${pct}%`;

  // Update stamps in passport using clean SVG vector icons
  const earnedIconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
  const lockedIconSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

  // Render 5 district passport badge stamps
  const districtStamps = [1, 2, 3, 4, 5].map(dNum => {
    const dStations = allStations.filter(s => s.districtNumber === dNum);
    const dVisited = dStations.filter(s => visited.has(s.id)).length;
    const isCompleted = dStations.length > 0 && dVisited === dStations.length;
    return `
      <div class="stamp ${isCompleted ? 'earned' : ''}" title="District ${dNum} (${dVisited}/${dStations.length})" aria-label="District ${dNum} stamp: ${isCompleted ? 'earned' : 'locked'}">
        ${isCompleted ? earnedIconSvg : lockedIconSvg}
      </div>
    `;
  }).join("");

  stampsContainer.innerHTML = districtStamps;

  // Update map pin active states corresponding to districts 1-5
  pins.forEach(pin => {
    const pDist = pin.dataset.district;
    if (pDist) {
      pin.classList.toggle("active", activeDistrict === pDist || (activeDistrict === "all" && pDist === "1"));
    }
  });

  // Update coins (120 initial + 15 per discovered station)
  coinCount.textContent = 120 + visitedCount * 15;

  // Update daily quest display
  renderDailyQuest();
}

/**
 * Calculate today's featured station index based on calendar date.
 */
function getDailyStation() {
  if (allStations.length === 0) return null;
  const today = new Date();
  const dayNumber = Math.floor(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000);
  const idx = Math.abs(dayNumber) % allStations.length;
  return allStations[idx];
}

/**
 * Render today's rotating daily quest panel
 */
function renderDailyQuest() {
  const dailyStation = getDailyStation();
  if (!dailyStation) return;

  const today = new Date();
  const dateFormatted = today.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric"
  });

  const dateLabel = document.getElementById("dailyDateLabel");
  if (dateLabel) {
    dateLabel.textContent = dateFormatted.toUpperCase();
  }

  const iconEl = document.getElementById("dailyQuestIcon");
  if (iconEl && dailyStation.iconSvg) {
    iconEl.innerHTML = dailyStation.iconSvg;
  }

  const titleEl = document.getElementById("dailyQuestTitle");
  if (titleEl) {
    titleEl.textContent = `Daily Focus: ${dailyStation.name}`;
  }

  const descEl = document.getElementById("dailyQuestDesc");
  const isVisited = visited.has(dailyStation.id);
  if (descEl) {
    descEl.textContent = isVisited
      ? `Completed! You have mastered ${dailyStation.name} (District ${dailyStation.districtNumber}) and stamped your field book.`
      : `Today's featured destination is ${dailyStation.name} in District ${dailyStation.districtNumber} (${dailyStation.municipality}). Study the flashcards to stamp your passport.`;
  }

  const tagEl = document.getElementById("dailyQuestTag");
  if (tagEl) {
    if (isVisited) {
      tagEl.textContent = "COMPLETED ✓";
      tagEl.style.background = "#dcfce7";
      tagEl.style.borderColor = "#86efac";
      tagEl.style.color = "#166534";
    } else {
      tagEl.textContent = "ACTIVE";
      tagEl.style.background = "#ead7b6";
      tagEl.style.borderColor = "#c9a879";
      tagEl.style.color = "#704a30";
    }
  }

  const btnEl = document.getElementById("viewActiveQuestBtn");
  if (btnEl) {
    btnEl.textContent = isVisited ? "REVIEW TODAY'S DECK →" : "START TODAY'S QUEST →";
  }

  const islandProgress = document.getElementById("islandQuestProgress");
  if (islandProgress) {
    islandProgress.textContent = `${visited.size}/${allStations.length} DISCOVERED`;
  }
}

/**
 * Select a station and open its flashcard deck
 */
function selectStationById(id) {
  const station = getStationById(id);
  if (station) {
    activeStationId = id;
    activeCardIndex = 0;
    isCardFlipped = false;
    render();
    openStationModal(station);
  }
}

/**
 * Populate and display the flashcard study deck for a station
 */
function openStationModal(station) {
  if (!station || !station.cards || station.cards.length === 0) return;

  renderCurrentCard(station);
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

/**
 * Render the current card in the active station deck
 */
function renderCurrentCard(station) {
  const s = station || getStationById(activeStationId);
  if (!s || !s.cards) return;

  const card = s.cards[activeCardIndex];
  if (!card) return;

  const totalCards = s.cards.length;

  // Header info
  modalEyebrow.textContent = `DISTRICT ${s.districtNumber} · ${s.municipality ? s.municipality.toUpperCase() + ' · ' : ''}${s.type || 'HERITAGE STATION'}`;
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
    if (visited.has(s.id)) {
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
  const s = getStationById(activeStationId);
  if (!s) return;

  const totalCards = s.cards.length;

  if (activeCardIndex < totalCards - 1) {
    activeCardIndex++;
    renderCurrentCard(s);
  } else {
    completeStation(s);
  }
}

/**
 * Complete the active station, award passport stamp, and save progress
 */
function completeStation(station) {
  const s = station || getStationById(activeStationId);
  if (!s) return;

  const isFirstCompletion = !visited.has(s.id);

  if (isFirstCompletion) {
    visited.add(s.id);
    saveProgress();
    render();
    const dailyStation = getDailyStation();
    if (dailyStation && s.id === dailyStation.id) {
      showToast(`Daily Quest Completed! You discovered ${s.name}.`);
    } else {
      showToast(`Passport stamp collected! You discovered ${s.name}.`);
    }
  } else {
    showToast(`Deck reviewed: ${s.name}.`);
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
 * Filter by District
 */
function setDistrictFilter(district) {
  activeDistrict = district;
  const filterBtns = document.querySelectorAll(".district-filter-btn");
  filterBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.district === String(district));
  });

  const headingSpan = document.getElementById("activeDistrictHeaderSpan");
  if (headingSpan) {
    headingSpan.textContent = district === "all"
      ? "ALL DISTRICTS (1 TO 5)"
      : `DISTRICT ${district}`;
  }

  const mapSub = document.getElementById("mapDistrictSubtitle");
  if (mapSub) {
    mapSub.textContent = district === "all"
      ? "PANAY ISLAND · ILOILO PROVINCE (DISTRICTS 1-5)"
      : `PANAY ISLAND · ILOILO DISTRICT ${district}`;
  }

  render();
}

/**
 * Bind DOM Event Listeners
 */
function setupEventListeners() {
  // Destination list delegation
  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".destination");
    if (btn && btn.dataset.stationId) {
      selectStationById(btn.dataset.stationId);
    }
  });

  // Map pin buttons
  pins.forEach(pin => {
    pin.addEventListener("click", () => {
      const pDist = pin.dataset.district;
      if (pDist) {
        setDistrictFilter(pDist);
      }
    });
  });

  // District filter buttons
  const districtFiltersContainer = document.getElementById("districtFilters");
  if (districtFiltersContainer) {
    districtFiltersContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".district-filter-btn");
      if (btn && btn.dataset.district) {
        setDistrictFilter(btn.dataset.district);
      }
    });
  }

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
    viewActiveQuestBtn.addEventListener("click", () => {
      const daily = getDailyStation();
      if (daily) {
        selectStationById(daily.id);
      }
    });
  }

  if (questDetailsBtn) {
    questDetailsBtn.addEventListener("click", () => {
      const remaining = allStations.length - visited.size;
      if (remaining === 0) {
        showToast("Master Voyager! You have discovered all 46 places across all 5 districts.");
      } else {
        showToast(`Keep exploring! ${remaining} destination${remaining > 1 ? 's' : ''} remaining across 5 districts.`);
      }
    });
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadSavedProgress();
  setupEventListeners();
  render();
});

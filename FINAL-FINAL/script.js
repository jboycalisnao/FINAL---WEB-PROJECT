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

  const combined = [...d1, ...d2, ...d3, ...d4, ...d5];
  combined.forEach(p => {
    p.originalCards = JSON.parse(JSON.stringify(p.cards || []));
  });

  return combined;
}

const allStations = buildAllStations();

// Application State
let activeDistrict = "all";   // "all" | 1 | 2 | 3 | 4 | 5
let activeStationId = null;   // ID of currently highlighted station
let activeCardIndex = 0;      // Current flashcard index within modal
let isCardFlipped = false;    // Flashcard front/back state
const visited = new Set();    // Set of completed station IDs
let toastTimeout = null;

// Flashcard 15-Second Reading Timer State
let cardTimerInterval = null;
let cardTimerRemaining = 0;
let isCurrentCardTimerStarted = false;
let isCurrentCardReadCompleted = false;
const REQUIRED_READING_SECONDS = 15;

// Leaflet Map State
let leafletMap = null;
let leafletMarkersLayer = null;
const stationMarkersMap = new Map();

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
const cardReadingTimerBadge = document.getElementById("cardReadingTimerBadge");
const readingTimerCount = document.getElementById("readingTimerCount");

// Flashcard CRUD Elements
const modalEditDeckBtn = document.getElementById("modalEditDeckBtn");
const crudModal = document.getElementById("crudModal");
const crudCloseBtn = document.getElementById("crudCloseBtn");
const crudModalEyebrow = document.getElementById("crudModalEyebrow");
const crudModalTitle = document.getElementById("crudModalTitle");
const crudTabsList = document.getElementById("crudTabsList");
const crudAddCardBtn = document.getElementById("crudAddCardBtn");
const crudCardForm = document.getElementById("crudCardForm");
const crudCategoryInput = document.getElementById("crudCategoryInput");
const crudQuestionInput = document.getElementById("crudQuestionInput");
const crudAnswerInput = document.getElementById("crudAnswerInput");
const crudFactoidInput = document.getElementById("crudFactoidInput");
const crudDeleteBtn = document.getElementById("crudDeleteBtn");
const crudResetDeckBtn = document.getElementById("crudResetDeckBtn");
const crudCancelBtn = document.getElementById("crudCancelBtn");
const crudSaveBtn = document.getElementById("crudSaveBtn");

// Custom Confirmation Dialog Elements
const confirmModal = document.getElementById("confirmModal");
const confirmModalTitle = document.getElementById("confirmModalTitle");
const confirmModalMessage = document.getElementById("confirmModalMessage");
const confirmCancelBtn = document.getElementById("confirmCancelBtn");
const confirmProceedBtn = document.getElementById("confirmProceedBtn");

let editingCardIndex = 0;
let confirmActionCallback = null;

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
 * Load progress and custom flashcard edits from localStorage
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

    const savedCards = localStorage.getItem("kinaadman_custom_cards");
    if (savedCards) {
      const parsedDecks = JSON.parse(savedCards);
      if (parsedDecks && typeof parsedDecks === "object") {
        allStations.forEach(s => {
          if (Array.isArray(parsedDecks[s.id]) && parsedDecks[s.id].length > 0) {
            s.cards = parsedDecks[s.id];
          }
        });
      }
    }
  } catch (e) {
    console.warn("Could not load saved progress or custom cards:", e);
  }
}

/**
 * Save visited progress to localStorage
 */
function saveProgress() {
  try {
    localStorage.setItem("kinaadman_visited_stations", JSON.stringify([...visited]));
  } catch (e) {
    console.warn("Could not save progress:", e);
  }
}

/**
 * Persist custom flashcard deck edits to localStorage
 */
function saveCustomDecks() {
  try {
    const decks = {};
    allStations.forEach(s => {
      decks[s.id] = s.cards;
    });
    localStorage.setItem("kinaadman_custom_cards", JSON.stringify(decks));
  } catch (e) {
    console.warn("Could not save custom decks:", e);
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

  // Update Leaflet map markers
  renderLeafletMarkers();
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
    if (leafletMap && stationMarkersMap.has(id)) {
      const marker = stationMarkersMap.get(id);
      marker.openTooltip();
    }
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

  // Prepare card reading timer: timer starts when user flips the card
  setupCardTimerForNewCard(s);
}

/**
 * Reset timer state for a newly opened card.
 * The 15s countdown will wait until the user flips the card to reveal the answer.
 */
function setupCardTimerForNewCard(station) {
  if (cardTimerInterval) {
    clearInterval(cardTimerInterval);
    cardTimerInterval = null;
  }

  isCurrentCardTimerStarted = false;
  isCurrentCardReadCompleted = false;
  cardTimerRemaining = REQUIRED_READING_SECONDS;
  modalNextBtn.disabled = true;

  if (readingTimerCount) {
    readingTimerCount.textContent = "Flip to Start (15s)";
  }
  if (cardReadingTimerBadge) {
    cardReadingTimerBadge.classList.remove("ready");
    cardReadingTimerBadge.title = "Flip the card to reveal the answer and begin the 15-second reading timer";
  }

  const flipIconSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>`;

  modalNextBtn.innerHTML = `${flipIconSvg} <span>Flip to Read (15s)</span>`;
}

/**
 * Start the 15-second mandatory reading countdown timer.
 * Triggered as soon as the user flips the card to reveal the answer side.
 */
function startReadingCountdown(station) {
  if (isCurrentCardTimerStarted || isCurrentCardReadCompleted) return;
  isCurrentCardTimerStarted = true;

  const s = station || getStationById(activeStationId);
  const totalCards = (s && s.cards) ? s.cards.length : 1;
  const isLast = activeCardIndex === totalCards - 1;
  const isVisited = s && visited.has(s.id);

  cardTimerRemaining = REQUIRED_READING_SECONDS;
  modalNextBtn.disabled = true;

  const clockIconSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;

  function updateTimerUI() {
    if (readingTimerCount) {
      readingTimerCount.textContent = `${cardTimerRemaining}s`;
    }
    if (cardReadingTimerBadge) {
      cardReadingTimerBadge.classList.remove("ready");
      cardReadingTimerBadge.title = `Please read this card (${cardTimerRemaining}s remaining)`;
    }

    if (isLast) {
      const actionLabel = isVisited ? "Review Done" : "Collect Stamp";
      modalNextBtn.innerHTML = `${clockIconSvg} <span>${actionLabel} (${cardTimerRemaining}s)</span>`;
    } else {
      modalNextBtn.innerHTML = `${clockIconSvg} <span>Next Card (${cardTimerRemaining}s)</span>`;
    }
  }

  // Display initial 15s state upon flipping
  updateTimerUI();

  // Tick countdown every second
  cardTimerInterval = setInterval(() => {
    cardTimerRemaining--;

    if (cardTimerRemaining > 0) {
      updateTimerUI();
    } else {
      // 15 seconds elapsed: unlock navigation to next card / stamp
      clearInterval(cardTimerInterval);
      cardTimerInterval = null;
      cardTimerRemaining = 0;
      isCurrentCardReadCompleted = true;

      modalNextBtn.disabled = false;

      if (readingTimerCount) {
        readingTimerCount.textContent = "Ready";
      }
      if (cardReadingTimerBadge) {
        cardReadingTimerBadge.classList.add("ready");
        cardReadingTimerBadge.title = "Card reading complete. You may proceed.";
      }

      if (isLast) {
        if (isVisited) {
          modalNextBtn.innerHTML = `<span>Deck Completed</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
        } else {
          modalNextBtn.innerHTML = `<span>Collect Stamp</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
        }
      } else {
        modalNextBtn.innerHTML = `<span>Next Card</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
      }
    }
  }, 1000);
}

/**
 * Toggle flashcard front / back flip.
 * The 15-second reading timer begins the moment the card flips to the back.
 */
function toggleCardFlip() {
  isCardFlipped = !isCardFlipped;
  if (isCardFlipped) {
    modalFlashcardWrapper.classList.add("flipped");
    if (!isCurrentCardTimerStarted && !isCurrentCardReadCompleted) {
      startReadingCountdown();
    }
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
  if (!isCurrentCardTimerStarted) {
    showToast("Please flip the card to study the answer narrative before continuing.");
    return;
  }

  if (cardTimerRemaining > 0) {
    showToast(`Please finish reading this card (${cardTimerRemaining}s remaining).`);
    return;
  }

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
  if (cardTimerInterval) {
    clearInterval(cardTimerInterval);
    cardTimerInterval = null;
  }
  cardTimerRemaining = 0;
  isCurrentCardTimerStarted = false;
  isCurrentCardReadCompleted = false;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

/**
 * Custom Confirmation Dialog (Replaces native browser confirm)
 */
function showCustomConfirm(title, message, onConfirm) {
  if (!confirmModal) return;
  confirmModalTitle.textContent = title;
  confirmModalMessage.textContent = message;
  confirmActionCallback = onConfirm;
  confirmModal.classList.add("show");
  confirmModal.setAttribute("aria-hidden", "false");
}

function closeConfirmModal() {
  if (!confirmModal) return;
  confirmModal.classList.remove("show");
  confirmModal.setAttribute("aria-hidden", "true");
  confirmActionCallback = null;
}

/**
 * Open the CRUD editor modal for the active station deck
 */
function openCrudModal() {
  const s = getStationById(activeStationId);
  if (!s || !s.cards) return;

  if (crudModalEyebrow) {
    crudModalEyebrow.textContent = `DISTRICT ${s.districtNumber} · ${(s.municipality || '').toUpperCase()}`;
  }
  if (crudModalTitle) {
    crudModalTitle.textContent = `Edit Cards: ${s.name}`;
  }

  editingCardIndex = Math.min(activeCardIndex, s.cards.length - 1);
  if (editingCardIndex < 0) editingCardIndex = 0;

  renderCrudCardTabs(s);
  loadCardIntoCrudForm(s, editingCardIndex);

  if (crudModal) {
    crudModal.classList.add("show");
    crudModal.setAttribute("aria-hidden", "false");
  }
}

/**
 * Close the CRUD editor modal and synchronize the study modal
 */
function closeCrudModal() {
  if (!crudModal) return;
  crudModal.classList.remove("show");
  crudModal.setAttribute("aria-hidden", "true");

  const s = getStationById(activeStationId);
  if (s) {
    if (activeCardIndex >= s.cards.length) {
      activeCardIndex = Math.max(0, s.cards.length - 1);
    }
    renderCurrentCard(s);
  }
}

/**
 * Render the card selector tabs in the CRUD editor
 */
function renderCrudCardTabs(station) {
  const s = station || getStationById(activeStationId);
  if (!s || !s.cards || !crudTabsList) return;

  crudTabsList.innerHTML = s.cards.map((card, idx) => `
    <button type="button" class="crud-tab-btn ${idx === editingCardIndex ? 'active' : ''}" data-card-index="${idx}" role="tab" aria-selected="${idx === editingCardIndex}">
      Card ${idx + 1}
    </button>
  `).join("");
}

/**
 * Load card content into the CRUD editor form
 */
function loadCardIntoCrudForm(station, index) {
  const s = station || getStationById(activeStationId);
  if (!s || !s.cards || !s.cards[index]) return;

  const card = s.cards[index];
  if (crudCategoryInput) crudCategoryInput.value = card.category || "";
  if (crudQuestionInput) crudQuestionInput.value = card.question || "";
  if (crudAnswerInput) crudAnswerInput.value = card.answer || "";
  if (crudFactoidInput) crudFactoidInput.value = card.factoid || "";
}

/**
 * CREATE: Add a new flashcard to the active station deck
 */
function addCardToActiveDeck() {
  const s = getStationById(activeStationId);
  if (!s) return;

  if (!Array.isArray(s.cards)) {
    s.cards = [];
  }

  const newCard = {
    category: "HERITAGE DETAIL",
    question: "New Flashcard Topic",
    answer: "Enter narrative explanation and historical significance here.",
    factoid: "Enter notable historical factoid or cultural trivia."
  };

  s.cards.push(newCard);
  editingCardIndex = s.cards.length - 1;

  saveCustomDecks();
  renderCrudCardTabs(s);
  loadCardIntoCrudForm(s, editingCardIndex);

  showToast(`New Card ${s.cards.length} added to deck.`);
}

/**
 * UPDATE: Save edits made to the current card in the CRUD editor
 */
function saveActiveCardEdits() {
  const s = getStationById(activeStationId);
  if (!s || !s.cards || !s.cards[editingCardIndex]) return;

  const category = crudCategoryInput.value.trim();
  const question = crudQuestionInput.value.trim();
  const answer = crudAnswerInput.value.trim();
  const factoid = crudFactoidInput.value.trim();

  if (!category || !question || !answer) {
    showToast("Please fill in Category, Question, and Answer.");
    return;
  }

  s.cards[editingCardIndex] = {
    category: category.toUpperCase(),
    question: question,
    answer: answer,
    factoid: factoid || "No additional factoid provided."
  };

  saveCustomDecks();
  renderCrudCardTabs(s);
  renderCurrentCard(s);

  showToast(`Card ${editingCardIndex + 1} updated successfully.`);
}

/**
 * DELETE: Delete the currently selected card from the active station deck
 */
function deleteActiveCard() {
  const s = getStationById(activeStationId);
  if (!s || !s.cards) return;

  if (s.cards.length <= 1) {
    showToast("A station must have at least one flashcard.");
    return;
  }

  showCustomConfirm(
    "Delete Flashcard",
    `Are you sure you want to delete Card ${editingCardIndex + 1}? This action cannot be undone.`,
    () => {
      s.cards.splice(editingCardIndex, 1);

      if (editingCardIndex >= s.cards.length) {
        editingCardIndex = s.cards.length - 1;
      }
      if (activeCardIndex >= s.cards.length) {
        activeCardIndex = s.cards.length - 1;
      }

      saveCustomDecks();
      renderCrudCardTabs(s);
      loadCardIntoCrudForm(s, editingCardIndex);
      renderCurrentCard(s);

      closeConfirmModal();
      showToast("Flashcard deleted from deck.");
    }
  );
}

/**
 * RESET: Restore original preset cards from dataset
 */
function resetActiveDeckToDefault() {
  const s = getStationById(activeStationId);
  if (!s || !s.originalCards) return;

  showCustomConfirm(
    "Reset Deck to Default",
    `Restore original default flashcards for ${s.name}? All custom edits for this station will be reset.`,
    () => {
      s.cards = JSON.parse(JSON.stringify(s.originalCards));
      editingCardIndex = 0;
      activeCardIndex = 0;

      saveCustomDecks();
      renderCrudCardTabs(s);
      loadCardIntoCrudForm(s, 0);
      renderCurrentCard(s);

      closeConfirmModal();
      showToast(`Default deck restored for ${s.name}.`);
    }
  );
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
 * Create custom CSS hover box HTML for a destination on the Leaflet map
 */
function createCustomHoverBox(s) {
  const isVisited = visited.has(s.id);
  const latVal = s.coordinates?.latitude ?? s.latitude;
  const lngVal = s.coordinates?.longitude ?? s.longitude;
  const latFormatted = typeof latVal === "number" ? latVal.toFixed(4) : parseFloat(latVal).toFixed(4);
  const lngFormatted = typeof lngVal === "number" ? lngVal.toFixed(4) : parseFloat(lngVal).toFixed(4);

  const statusBadge = isVisited
    ? `<span class="hover-status discovered"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> DISCOVERED</span>`
    : `<span class="hover-status">UNVISITED</span>`;

  return `
    <div class="map-hover-box">
      <div class="hover-top-row">
        <span class="hover-tag">D${s.districtNumber} · ${(s.municipality || '').toUpperCase()}</span>
        ${statusBadge}
      </div>
      <h4 class="hover-title">${s.name}</h4>
      <div class="hover-type">${s.type || 'HERITAGE STATION'}</div>
      <div class="hover-coords">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
        </svg>
        <span>${latFormatted}° N, ${lngFormatted}° E</span>
      </div>
      <div class="hover-hint">
        <span>STUDY FLASHCARD DECK</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </div>
    </div>
  `;
}

/**
 * Create custom SVG map pin icon for Leaflet
 */
function createLeafletPinIcon(station, isSelected, isVisited) {
  const dNum = station.districtNumber || 1;
  const pinClass = `custom-map-pin d${dNum} ${isSelected ? 'selected' : ''} ${isVisited ? 'visited' : ''}`;

  return L.divIcon({
    className: "custom-leaflet-pin-wrapper",
    iconSize: [28, 36],
    iconAnchor: [14, 34],
    tooltipAnchor: [0, -32],
    html: `
      <div class="${pinClass}" aria-label="${station.municipality || ''} - ${station.name}">
        <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.268 21.732 0 14 0z" class="pin-base"/>
          <circle cx="14" cy="13" r="8" class="pin-core"/>
        </svg>
        <span class="pin-label">${dNum}</span>
      </div>
    `
  });
}

/**
 * Initialize Leaflet Map with Panay bounds and vintage cartography styling
 */
function initLeafletMap() {
  const mapEl = document.getElementById("leafletMap");
  if (!mapEl || typeof L === "undefined") return;

  leafletMap = L.map("leafletMap", {
    center: [10.95, 122.58],
    zoom: 9,
    minZoom: 8,
    maxZoom: 18,
    scrollWheelZoom: true
  });

  // Esri World Topo Map: 100% free, no API key required, unblocked on local file:// protocols, zero watermarks
  const primaryTileUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}";
  const fallbackTileUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}";

  const tileLayer = L.tileLayer(primaryTileUrl, {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, USGS, NPS',
    maxZoom: 18
  });

  tileLayer.on("tileerror", function(error, tile) {
    if (tile && !tile.hasRetried && error.coords) {
      tile.hasRetried = true;
      tile.src = fallbackTileUrl
        .replace("{z}", error.coords.z)
        .replace("{y}", error.coords.y)
        .replace("{x}", error.coords.x);
    }
  });

  tileLayer.addTo(leafletMap);
  leafletMarkersLayer = L.featureGroup().addTo(leafletMap);

  renderLeafletMarkers();
}

/**
 * Render station markers onto the Leaflet map with custom CSS hover box
 */
function renderLeafletMarkers() {
  if (!leafletMap || !leafletMarkersLayer || typeof L === "undefined") return;

  leafletMarkersLayer.clearLayers();
  stationMarkersMap.clear();

  const visibleStations = getVisibleStations();
  const validStations = visibleStations.filter(s => {
    const lat = s.coordinates?.latitude ?? s.latitude;
    const lng = s.coordinates?.longitude ?? s.longitude;
    return typeof lat === "number" || (typeof lat === "string" && !isNaN(parseFloat(lat)));
  });

  validStations.forEach(s => {
    const lat = parseFloat(s.coordinates?.latitude ?? s.latitude);
    const lng = parseFloat(s.coordinates?.longitude ?? s.longitude);
    const isVisited = visited.has(s.id);
    const isSelected = activeStationId === s.id;

    const customIcon = createLeafletPinIcon(s, isSelected, isVisited);

    const marker = L.marker([lat, lng], {
      icon: customIcon,
      riseOnHover: true,
      title: `${s.municipality ? s.municipality + ' · ' : ''}${s.name}`
    });

    // Custom CSS hover box (Leaflet Tooltip)
    marker.bindTooltip(createCustomHoverBox(s), {
      className: "custom-leaflet-hover-box",
      direction: "top",
      offset: [0, -28],
      opacity: 1
    });

    marker.on("click", () => {
      selectStationById(s.id);
    });

    leafletMarkersLayer.addLayer(marker);
    stationMarkersMap.set(s.id, marker);
  });

  if (validStations.length > 0) {
    try {
      const bounds = leafletMarkersLayer.getBounds();
      if (bounds.isValid()) {
        leafletMap.fitBounds(bounds, {
          padding: [30, 30],
          maxZoom: activeDistrict === "all" ? 10 : 13
        });
      }
    } catch (e) {
      console.warn("fitBounds error:", e);
    }
  }
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

  // Destination list hover highlights corresponding marker on map
  list.addEventListener("mouseover", (e) => {
    const btn = e.target.closest(".destination");
    if (btn && btn.dataset.stationId && stationMarkersMap.has(btn.dataset.stationId)) {
      const marker = stationMarkersMap.get(btn.dataset.stationId);
      marker.openTooltip();
    }
  });

  list.addEventListener("mouseout", (e) => {
    const btn = e.target.closest(".destination");
    if (btn && btn.dataset.stationId && stationMarkersMap.has(btn.dataset.stationId)) {
      const marker = stationMarkersMap.get(btn.dataset.stationId);
      marker.closeTooltip();
    }
  });

  // Map pin buttons (if any legacy pins exist)
  if (pins && pins.length > 0) {
    pins.forEach(pin => {
      pin.addEventListener("click", () => {
        const pDist = pin.dataset.district;
        if (pDist) {
          setDistrictFilter(pDist);
        }
      });
    });
  }

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

  // Flashcard CRUD Actions
  if (modalEditDeckBtn) {
    modalEditDeckBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openCrudModal();
    });
  }

  if (crudCloseBtn) {
    crudCloseBtn.addEventListener("click", closeCrudModal);
  }

  if (crudCancelBtn) {
    crudCancelBtn.addEventListener("click", closeCrudModal);
  }

  if (crudSaveBtn) {
    crudSaveBtn.addEventListener("click", saveActiveCardEdits);
  }

  if (crudAddCardBtn) {
    crudAddCardBtn.addEventListener("click", addCardToActiveDeck);
  }

  if (crudDeleteBtn) {
    crudDeleteBtn.addEventListener("click", deleteActiveCard);
  }

  if (crudResetDeckBtn) {
    crudResetDeckBtn.addEventListener("click", resetActiveDeckToDefault);
  }

  // Card tabs delegation in CRUD modal
  if (crudTabsList) {
    crudTabsList.addEventListener("click", (e) => {
      const tab = e.target.closest(".crud-tab-btn");
      if (tab && tab.dataset.cardIndex !== undefined) {
        editingCardIndex = Number(tab.dataset.cardIndex);
        renderCrudCardTabs();
        loadCardIntoCrudForm(null, editingCardIndex);
      }
    });
  }

  // Close CRUD modal when clicking outside dialog box
  if (crudModal) {
    crudModal.addEventListener("click", (e) => {
      if (e.target === crudModal) {
        closeCrudModal();
      }
    });
  }

  // Custom Confirmation Dialog Actions
  if (confirmCancelBtn) {
    confirmCancelBtn.addEventListener("click", closeConfirmModal);
  }

  if (confirmProceedBtn) {
    confirmProceedBtn.addEventListener("click", () => {
      if (typeof confirmActionCallback === "function") {
        confirmActionCallback();
      }
    });
  }

  if (confirmModal) {
    confirmModal.addEventListener("click", (e) => {
      if (e.target === confirmModal) {
        closeConfirmModal();
      }
    });
  }

  // Keyboard accessibility
  window.addEventListener("keydown", (e) => {
    if (confirmModal && confirmModal.classList.contains("show")) {
      if (e.code === "Escape") {
        closeConfirmModal();
      }
      return;
    }

    if (crudModal && crudModal.classList.contains("show")) {
      if (e.code === "Escape") {
        closeCrudModal();
      }
      return;
    }

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
  initLeafletMap();
  render();
});

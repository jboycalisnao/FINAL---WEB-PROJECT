/**
 * KINAADMAN | The Panay Heritage Quest
 * Application Logic: Interactive Flashcard Stations, Map, Passport & Quests
 * Iloilo First District Discovery Engine (Oton, Tigbauan, Guimbal, Miag-ao, San Joaquin)
 * SVG Vector Icons only — No emojis
 */

// Sourced directly from district1.js
const stations = (typeof window !== "undefined" && Array.isArray(window.ILOILO_DISTRICT_1_DATA))
  ? window.ILOILO_DISTRICT_1_DATA
  : (typeof ILOILO_DISTRICT_1_DATA !== "undefined" ? ILOILO_DISTRICT_1_DATA : []);

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
    <button type="button" class="destination ${active === i ? 'selected' : ''}" data-station="${i}" aria-label="Explore ${s.municipality || ''} - ${s.name}">
      <span class="dest-art" aria-hidden="true">${s.iconSvg}</span>
      <span>
        <strong>${s.municipality ? s.municipality.toUpperCase() + ' · ' : ''}${s.name}</strong>
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

  // Update daily quest display
  renderDailyQuest();
}

/**
 * Calculate today's featured station index based on calendar date.
 * Cycles through all stations automatically day by day.
 */
function getDailyStationIndex() {
  const today = new Date();
  const dayNumber = Math.floor(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000);
  return Math.abs(dayNumber) % stations.length;
}

/**
 * Render today's rotating daily quest panel
 */
function renderDailyQuest() {
  const dailyIdx = getDailyStationIndex();
  const dailyStation = stations[dailyIdx];
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
  if (iconEl) {
    iconEl.innerHTML = dailyStation.iconSvg;
  }

  const titleEl = document.getElementById("dailyQuestTitle");
  if (titleEl) {
    titleEl.textContent = `Daily Focus: ${dailyStation.name}`;
  }

  const descEl = document.getElementById("dailyQuestDesc");
  const isVisited = visited.has(dailyIdx);
  if (descEl) {
    descEl.textContent = isVisited
      ? `Completed! You have mastered ${dailyStation.name}'s discovery deck and stamped your field book.`
      : `Today's featured destination is ${dailyStation.name}. Study the deck to collect today's passport stamp.`;
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
    islandProgress.textContent = `${visited.size}/${stations.length} DISCOVERED`;
  }
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
  modalEyebrow.textContent = `DISTRICT 1 · ${s.municipality ? s.municipality.toUpperCase() + ' · ' : ''}${s.type}`;
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
    const dailyIdx = getDailyStationIndex();
    if (active === dailyIdx) {
      showToast(`Daily Quest Completed! You discovered ${stations[active].name}.`);
    } else {
      showToast(`Passport stamp collected! You discovered ${stations[active].name}.`);
    }
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
    viewActiveQuestBtn.addEventListener("click", () => {
      selectStation(getDailyStationIndex());
    });
  }
  if (questDetailsBtn) {
    questDetailsBtn.addEventListener("click", () => {
      const remaining = stations.length - visited.size;
      if (remaining === 0) {
        showToast("Grand Voyage Completed! You have visited all 4 stations.");
      } else {
        showToast(`Keep exploring! ${remaining} destination${remaining > 1 ? 's' : ''} remaining.`);
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

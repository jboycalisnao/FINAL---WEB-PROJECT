// Panay Island Flashcard System Application Logic
// Anti AI-Slop Compliant & Local Storage Progress Persistence

const STORAGE_KEY = "panay_flashcards_progress_v1";

// Application State
const state = {
  activeView: "topics", // 'topics' | 'study' | 'badges'
  currentTopicId: null,
  currentCardIndex: 0,
  isCardFlipped: false,
  progress: loadProgress()
};

// ==========================================
// Local Storage Management
// ==========================================
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Failed to load progress from localStorage:", e);
  }
  return {
    completedTopics: {}, // topicId: { viewedCards: [cardIds], isFinished: boolean, completedAt: string }
    earnedBadges: {}     // badgeId: { earnedAt: string, title: string }
  };
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  } catch (e) {
    console.error("Failed to save progress to localStorage:", e);
  }
}

function resetAllProgress() {
  state.progress = {
    completedTopics: {},
    earnedBadges: {}
  };
  saveProgress();
  updateBadgeCounter();
  renderTopics();
  renderBadges();
  showToast("Progress Reset", "All your completed flashcards and digital badges have been cleared.", "info");
}

// ==========================================
// UI Helpers: Toasts & Custom Modals
// ==========================================
function showToast(title, description, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  const iconSvg = type === "success" 
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-body">
      <div class="toast-title">${escapeHtml(title)}</div>
      <div class="toast-desc">${escapeHtml(description)}</div>
    </div>
    <button type="button" class="toast-close-btn" aria-label="Close notification">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  `;

  const closeBtn = toast.querySelector(".toast-close-btn");
  closeBtn.addEventListener("click", () => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-8px)";
    setTimeout(() => toast.remove(), 200);
  });

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-8px)";
      setTimeout(() => toast.remove(), 200);
    }
  }, 4500);
}

function showModal({ title, body, confirmText = "Confirm", cancelText = "Cancel", onConfirm }) {
  const overlay = document.getElementById("custom-modal-overlay");
  const titleEl = document.getElementById("modal-title");
  const bodyEl = document.getElementById("modal-body");
  const confirmBtn = document.getElementById("modal-confirm-btn");
  const cancelBtn = document.getElementById("modal-cancel-btn");
  const closeBtn = document.getElementById("modal-close-btn");

  titleEl.textContent = title;
  bodyEl.innerHTML = body;
  confirmBtn.textContent = confirmText;
  cancelBtn.textContent = cancelText;

  // Cleanup old listeners by replacing clone
  const newConfirm = confirmBtn.cloneNode(true);
  confirmBtn.parentNode.replaceChild(newConfirm, confirmBtn);

  const newCancel = cancelBtn.cloneNode(true);
  cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);

  const newClose = closeBtn.cloneNode(true);
  closeBtn.parentNode.replaceChild(newClose, closeBtn);

  function closeModal() {
    overlay.classList.remove("active");
  }

  newConfirm.addEventListener("click", () => {
    closeModal();
    if (typeof onConfirm === "function") {
      onConfirm();
    }
  });

  newCancel.addEventListener("click", closeModal);
  newClose.addEventListener("click", closeModal);
  overlay.onclick = (e) => {
    if (e.target === overlay) closeModal();
  };

  overlay.classList.add("active");
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// ==========================================
// View Routing & Navigation
// ==========================================
function switchView(viewName) {
  state.activeView = viewName;
  document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));

  if (viewName === "topics") {
    document.getElementById("view-topics").classList.add("active");
    document.getElementById("tab-topics").classList.add("active");
    renderTopics();
  } else if (viewName === "study") {
    document.getElementById("view-study").classList.add("active");
    // study does not have a primary header tab, keep topics active or none
    document.getElementById("tab-topics").classList.add("active");
    renderCurrentCard();
  } else if (viewName === "badges") {
    document.getElementById("view-badges").classList.add("active");
    document.getElementById("tab-badges").classList.add("active");
    renderBadges();
  }
}

// ==========================================
// Topics View Rendering
// ==========================================
function renderTopics() {
  const grid = document.getElementById("topics-grid");
  if (!grid) return;

  grid.innerHTML = "";

  PANAY_DATA.topics.forEach(topic => {
    const topicProgress = state.progress.completedTopics[topic.id] || { viewedCards: [], isFinished: false };
    const viewedCount = (topicProgress.viewedCards || []).length;
    const totalCount = topic.cards.length;

    let statusLabel = "Unstarted";
    let statusClass = "status-unstarted";

    if (topicProgress.isFinished) {
      statusLabel = "Completed";
      statusClass = "status-completed";
    } else if (viewedCount > 0) {
      statusLabel = `In Progress (${viewedCount}/${totalCount})`;
      statusClass = "status-in-progress";
    }

    const cardEl = document.createElement("div");
    cardEl.className = "topic-card";
    cardEl.innerHTML = `
      <div>
        <div class="topic-header">
          <h2 class="topic-name">${escapeHtml(topic.name)}</h2>
          <span class="topic-status-badge ${statusClass}">${statusLabel}</span>
        </div>
        <div class="topic-category">${escapeHtml(topic.category)} &bull; ${escapeHtml(topic.province)}</div>
        <p class="topic-description">${escapeHtml(topic.description)}</p>
      </div>
      <div class="topic-footer">
        <span class="topic-meta">${totalCount} Key Flashcards</span>
        <button type="button" class="btn btn-primary btn-sm start-topic-btn" data-topic-id="${topic.id}">
          ${topicProgress.isFinished ? "Review Deck" : "Study Deck"}
        </button>
      </div>
    `;

    cardEl.querySelector(".start-topic-btn").addEventListener("click", () => {
      startTopic(topic.id);
    });

    grid.appendChild(cardEl);
  });

  updateBadgeCounter();
}

function startTopic(topicId) {
  state.currentTopicId = topicId;
  state.currentCardIndex = 0;
  state.isCardFlipped = false;
  switchView("study");
}

// ==========================================
// Flashcard Study View & Logic
// ==========================================
function renderCurrentCard() {
  const topic = PANAY_DATA.topics.find(t => t.id === state.currentTopicId);
  if (!topic) {
    switchView("topics");
    return;
  }

  const card = topic.cards[state.currentCardIndex];
  if (!card) return;

  // Breadcrumb & Category
  document.getElementById("study-topic-breadcrumb").textContent = topic.name;
  document.getElementById("card-category-front").textContent = card.category;
  document.getElementById("card-category-back").textContent = card.category;

  // Content
  document.getElementById("card-question-text").textContent = card.question;
  document.getElementById("card-answer-text").textContent = card.answer;
  document.getElementById("card-factoid-text").textContent = card.factoid;

  // Counters
  const counterText = `Card ${state.currentCardIndex + 1} of ${topic.cards.length}`;
  document.getElementById("card-counter-indicator").textContent = counterText;
  document.getElementById("card-counter-footer-front").textContent = counterText;
  document.getElementById("card-counter-footer-back").textContent = counterText;

  // Progress Bar
  const percent = Math.round(((state.currentCardIndex + 1) / topic.cards.length) * 100);
  document.getElementById("study-progress-fill").style.width = `${percent}%`;

  // Flip reset
  state.isCardFlipped = false;
  const cardWrapper = document.getElementById("flashcard-wrapper");
  cardWrapper.classList.remove("flipped");

  // Navigation button states
  const prevBtn = document.getElementById("prev-card-btn");
  const nextBtn = document.getElementById("next-card-btn");

  prevBtn.disabled = state.currentCardIndex === 0;
  if (state.currentCardIndex === topic.cards.length - 1) {
    nextBtn.textContent = "Finish Deck";
  } else {
    nextBtn.textContent = "Next";
  }

  // Record viewed status for current card
  recordCardViewed(topic.id, card.id);
}

function toggleCardFlip() {
  state.isCardFlipped = !state.isCardFlipped;
  const cardWrapper = document.getElementById("flashcard-wrapper");
  if (state.isCardFlipped) {
    cardWrapper.classList.add("flipped");
  } else {
    cardWrapper.classList.remove("flipped");
  }
}

function prevCard() {
  if (state.currentCardIndex > 0) {
    state.currentCardIndex--;
    renderCurrentCard();
  }
}

function nextCard() {
  const topic = PANAY_DATA.topics.find(t => t.id === state.currentTopicId);
  if (!topic) return;

  if (state.currentCardIndex < topic.cards.length - 1) {
    state.currentCardIndex++;
    renderCurrentCard();
  } else {
    // Finished all cards in this topic!
    completeTopic(topic.id);
  }
}

function recordCardViewed(topicId, cardId) {
  if (!state.progress.completedTopics[topicId]) {
    state.progress.completedTopics[topicId] = {
      viewedCards: [],
      isFinished: false,
      completedAt: null
    };
  }

  const topicEntry = state.progress.completedTopics[topicId];
  if (!topicEntry.viewedCards.includes(cardId)) {
    topicEntry.viewedCards.push(cardId);
    saveProgress();
  }
}

function completeTopic(topicId) {
  const topic = PANAY_DATA.topics.find(t => t.id === topicId);
  if (!topic) return;

  const topicEntry = state.progress.completedTopics[topicId];
  const isFirstCompletion = !topicEntry.isFinished;

  topicEntry.isFinished = true;
  if (!topicEntry.completedAt) {
    topicEntry.completedAt = new Date().toISOString();
  }
  saveProgress();

  // Check Badge Unlock for this topic
  const badge = PANAY_DATA.badges.find(b => b.topicId === topicId);
  let newlyAwarded = false;

  if (badge && !state.progress.earnedBadges[badge.id]) {
    state.progress.earnedBadges[badge.id] = {
      earnedAt: new Date().toISOString(),
      title: badge.title
    };
    newlyAwarded = true;
  }

  // Check Grand Master Badge: check if all 5 topics are completed
  const allFinished = PANAY_DATA.topics.every(t => state.progress.completedTopics[t.id]?.isFinished);
  let grandMasterAwarded = false;

  if (allFinished && !state.progress.earnedBadges["badge-grand-voyager"]) {
    state.progress.earnedBadges["badge-grand-voyager"] = {
      earnedAt: new Date().toISOString(),
      title: "Master Voyager of Panay"
    };
    grandMasterAwarded = true;
  }

  saveProgress();
  updateBadgeCounter();

  // Celebration Modal
  if (newlyAwarded) {
    showModal({
      title: "Badge Unlocked!",
      body: `
        <p>Congratulations! You have thoroughly explored all flashcards in <strong>${escapeHtml(topic.name)}</strong>.</p>
        <div style="margin-top: 14px; padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; display: flex; align-items: center; gap: 12px;">
          <div style="color: #dc2626; flex-shrink: 0;">${badge.iconSvg}</div>
          <div>
            <div style="font-size: 16px; font-weight: 600; color: #0f172a;">${escapeHtml(badge.title)}</div>
            <div style="font-size: 12px; color: #475569;">${escapeHtml(badge.description)}</div>
          </div>
        </div>
        ${grandMasterAwarded ? `
          <div style="margin-top: 12px; padding: 12px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; font-size: 12px; color: #065f46;">
            <strong>Ultimate Achievement Unlocked:</strong> You have also been awarded the <strong>Master Voyager of Panay</strong> badge for finishing the entire island curriculum!
          </div>
        ` : ''}
      `,
      confirmText: "View My Badges",
      cancelText: "Return to Topics",
      onConfirm: () => {
        switchView("badges");
      }
    });
    showToast("Badge Awarded", `Earned: ${badge.title}`, "success");
  } else {
    showToast("Deck Finished", `You completed the ${topic.name} deck!`, "success");
    switchView("topics");
  }
}

// ==========================================
// Badges Showcase Rendering
// ==========================================
function renderBadges() {
  const container = document.getElementById("badges-container");
  if (!container) return;

  container.innerHTML = "";

  PANAY_DATA.badges.forEach(badge => {
    const isEarned = Boolean(state.progress.earnedBadges[badge.id]);
    const earnedData = state.progress.earnedBadges[badge.id];

    let formattedDate = "";
    if (isEarned && earnedData?.earnedAt) {
      try {
        const d = new Date(earnedData.earnedAt);
        formattedDate = `Earned on ${d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`;
      } catch (e) {
        formattedDate = "Earned";
      }
    }

    const card = document.createElement("div");
    card.className = `badge-item-card ${isEarned ? "unlocked" : "locked"}`;
    card.innerHTML = `
      <div class="badge-card-top">
        <div class="badge-icon-box">
          ${badge.iconSvg}
        </div>
        <div>
          <h3 class="badge-item-title">${escapeHtml(badge.title)}</h3>
          <span class="badge-status-tag ${isEarned ? "earned" : "locked-tag"}">
            ${isEarned ? "Unlocked" : "Locked"}
          </span>
        </div>
      </div>
      <p class="badge-item-description">${escapeHtml(badge.description)}</p>
      <div class="badge-earned-date">
        ${isEarned ? formattedDate : "Complete topic flashcards to unlock"}
      </div>
    `;

    container.appendChild(card);
  });
}

function updateBadgeCounter() {
  const totalEarned = Object.keys(state.progress.earnedBadges).length;
  const totalBadges = PANAY_DATA.badges.length;
  const countEl = document.getElementById("header-badge-count");
  if (countEl) {
    countEl.textContent = `${totalEarned}/${totalBadges}`;
  }
}

// ==========================================
// Initialization & Event Binding
// ==========================================
function initApp() {
  // Navigation tabs
  document.getElementById("tab-topics")?.addEventListener("click", () => switchView("topics"));
  document.getElementById("tab-badges")?.addEventListener("click", () => switchView("badges"));
  document.getElementById("study-back-btn")?.addEventListener("click", () => switchView("topics"));

  // Flashcard controls
  const cardWrapper = document.getElementById("flashcard-wrapper");
  cardWrapper?.addEventListener("click", toggleCardFlip);

  document.getElementById("flip-card-action-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleCardFlip();
  });

  document.getElementById("prev-card-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    prevCard();
  });

  document.getElementById("next-card-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    nextCard();
  });

  // Reset Progress trigger with custom modal
  document.getElementById("reset-progress-btn")?.addEventListener("click", () => {
    showModal({
      title: "Reset Learning Progress?",
      body: "Are you sure you want to reset all your Panay Island flashcard study progress and earned digital badges? This action cannot be undone.",
      confirmText: "Yes, Reset Progress",
      cancelText: "Keep Progress",
      onConfirm: () => {
        resetAllProgress();
      }
    });
  });

  // Keyboard accessibility
  window.addEventListener("keydown", (e) => {
    if (state.activeView !== "study") return;

    if (e.code === "Space") {
      // Prevent scrolling on spacebar when flipping card
      e.preventDefault();
      toggleCardFlip();
    } else if (e.code === "ArrowRight") {
      nextCard();
    } else if (e.code === "ArrowLeft") {
      prevCard();
    } else if (e.code === "Escape") {
      switchView("topics");
    }
  });

  // Initial state rendering
  updateBadgeCounter();
  switchView("topics");
}

document.addEventListener("DOMContentLoaded", initApp);

// ================= SCREENS =================
const screens = document.querySelectorAll('.screen');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');
const screen4 = document.getElementById('screen4');
const screen5 = document.getElementById('screen5');
const screen6 = document.getElementById('screen6');
const screen7 = document.getElementById('screen7');

// ================= GLOBAL HELPERS =================

// Close all bottom sheets (3–5 + 7)
function closeAllSheets() {
  screen3?.classList.remove('active');
  screen4?.classList.remove('active');
  screen5?.classList.remove('active');
  screen7?.classList.remove('active');
}

// Close ALL screens
function closeAllScreens() {
  screens.forEach(s => s.classList.remove('active'));
}

// Show only one screen
function showScreen(screen) {
  closeAllScreens();
  screen?.classList.add('active');
}


// ================= SCREEN 3 OPEN =================
document.querySelector('.action-card .action')?.addEventListener('click', () => {
  closeAllSheets();
  showScreen(screen3);
});


// ================= SCREEN 4 OPEN =================
document.querySelector('.transfer-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  closeAllSheets();
  showScreen(screen4);
});


// ================= SCREEN 5 OPEN =================
const manualEntry = screen4?.querySelectorAll('.transfer-option')[1];

manualEntry?.addEventListener('click', () => {
  closeAllSheets();
  showScreen(screen5);
});


// ================= BACK TO SCREEN 3 =================
screen4?.querySelector('.bottom-back')?.addEventListener('click', () => {
  closeAllSheets();
  showScreen(screen3);
});


// ================= BACK TO SCREEN 4 =================
screen5?.querySelector('.back-action')?.addEventListener('click', () => {
  closeAllSheets();
  showScreen(screen4);
});


// =====================================================
// ================= SCREEN 6 SYSTEM ===================
// =====================================================

// OPEN SCREEN 6 (from hero button)
document.querySelector('.hero-btn')?.addEventListener('click', () => {
  closeAllSheets();
  closeAllScreens();
  screen6.classList.add('active');
});


// BACK FROM SCREEN 6 → SCREEN 2
document.querySelector('#screen6 .back-btn')?.addEventListener('click', () => {
  closeAllScreens();
  screen2.classList.add('active');
});


// =====================================================
// ================= SCREEN 3 SEAT COUNTER ============
// =====================================================
const seats = document.querySelectorAll('.seat-card');
const ticketCount = document.getElementById('ticketCount');

function updateScreen3Count() {
  const selectedSeats = document.querySelectorAll('.seat-card.selected').length;

  if (ticketCount) {
    ticketCount.textContent =
      `${selectedSeats} Ticket${selectedSeats !== 1 ? 's' : ''} Selected`;
  }
}

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    updateScreen3Count();
  });
});


// =====================================================
// ============ SCREEN 6 CAROUSEL INDICATOR ===========
// =====================================================
const carousel = document.querySelector(".cards-wrapper");
const indicator = document.getElementById("indicator");
const cards = document.querySelectorAll(".ticket-card");

const total = cards.length;

function updateIndicator() {
  if (!carousel || !indicator) return;

  const scrollLeft = carousel.scrollLeft;
  const cardWidth = carousel.offsetWidth * 0.85;
  const index = Math.round(scrollLeft / cardWidth);

  indicator.textContent = `${index + 1} of ${total}`;
}

carousel?.addEventListener("scroll", () => {
  requestAnimationFrame(updateIndicator);
});

updateIndicator();


// =====================================================
// ================= SCREEN 7 FIXED ====================
// =====================================================

// OPEN SCREEN 7 (OVER SCREEN 6 ONLY)
document.querySelector(".info-btn")?.addEventListener("click", () => {
  closeAllSheets(); // only closes 3–5
  screen7.classList.add("active"); // KEEP screen6 visible underneath
});


// BACK FROM SCREEN 7 → SCREEN 6
document.querySelector("#screen7 .back-btn")?.addEventListener("click", () => {
  screen7.classList.remove("active");
});
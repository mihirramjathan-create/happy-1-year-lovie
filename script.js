// ============================================================
// MI & CHERVEL — ANNIVERSARY WEBSITE INTERACTIONS
// Edit the date in ANNIVERSARY_DATE if your anniversary changes.
// The rest of the website content is in index.html.
// ============================================================

// Countdown date: JavaScript months start at 0, so 9 means October.
const ANNIVERSARY_DATE = new Date(2026, 9, 22, 0, 0, 0);
const countdown = document.getElementById("countdown");

function updateCountdown() {
  if (!countdown) return;

  const difference = ANNIVERSARY_DATE.getTime() - Date.now();

  // Once the date has arrived, show a celebration message instead.
  if (difference <= 0) {
    countdown.textContent = "Happy one year, my love. This is only the beginning. ❤️";
    return;
  }

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor(difference / 3600000) % 24;
  const minutes = Math.floor(difference / 60000) % 60;
  countdown.textContent = `${days} days, ${hours} hours and ${minutes} minutes until our anniversary ❤️`;
}

updateCountdown();
// Refresh the countdown once a minute, rather than every second.
setInterval(updateCountdown, 60000);

// Mobile navigation: show/hide the menu when the hamburger button is tapped.
const toggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Close the mobile menu after the user chooses a section.
nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

// The button in "The real us" cycles through these personalised reasons.
// Add, remove or rewrite any of the messages below.
const reasons = [
  "Because you are my love, even when you're being a tiny terror. 😭❤️",
  "Because your love notes make the smallest moments feel special.",
  "Because you're brilliant, and I hope you never forget it.",
  "Because I love your feisty little personality and the way you tease me.",
  "Because we have more good days than bad, and the good ones mean the world to me.",
  "Because I want to keep learning how to love you better.",
  "Because you make ordinary campus days into memories.",
  "Because from one online conversation came a whole year of us.",
  "Because you're my lovie, my teacup, and my favourite person.",
  "Because it's you, Chervel. It's you, my love. ❤️"
];

let reasonIndex = -1;
document.getElementById("reasonButton")?.addEventListener("click", () => {
  reasonIndex = (reasonIndex + 1) % reasons.length;
  document.getElementById("reasonText").textContent = reasons[reasonIndex];
  makeHearts();
});

// Decorative floating hearts. Adjust 9 to change how many appear per click.
function makeHearts() {
  const layer = document.querySelector(".hearts-layer");
  if (!layer) return;

  for (let i = 0; i < 9; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = ["♥", "♡", "❤"][Math.floor(Math.random() * 3)];
    heart.style.left = `${8 + Math.random() * 84}%`;
    heart.style.fontSize = `${14 + Math.random() * 20}px`;
    heart.style.animationDelay = `${Math.random() * 0.7}s`;
    layer.appendChild(heart);
    // Remove the heart after its animation so the page stays tidy.
    heart.addEventListener("animationend", () => heart.remove());
  }
}

// The video is intentionally loaded from a file in the videos folder.
// To add yours: place it there and change the <source src="..."> in index.html.
// Recommended format: MP4 (H.264 video + AAC audio) for broad browser support.

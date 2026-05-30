const envelope = document.getElementById("envelope");
const seal = document.querySelector(".wax-seal");
const overlay = document.getElementById("letterOverlay");
const backdrop = document.getElementById("letterBackdrop");
const closeBtn = document.getElementById("letterClose");

function openLetter() {
  envelope.classList.add("open");
  envelope.scrollIntoView({ behavior: "smooth", block: "center" });
  const openImg = envelope.querySelector(".open-envelope");
  openImg.addEventListener(
    "transitionend",
    () => {
      overlay.classList.add("visible");
      document.body.style.overflow = "hidden";
    },
    { once: true },
  );
}

function closeLetter() {
  overlay.classList.remove("visible");
  document.body.style.overflow = "";
  setTimeout(() => envelope.classList.remove("open"), 400);
}

seal.addEventListener("click", openLetter);
backdrop.addEventListener("click", closeLetter);
closeBtn.addEventListener("click", closeLetter);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLetter();
});

const revealEls = document.querySelectorAll(
  ".hero-text, .hero-image, .letter-section h2, .envelope-container, .photo-section h2, .photo-card",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        entry.target.classList.remove("out-view");
      } else {
        entry.target.classList.remove("in-view");
        entry.target.classList.add("out-view");
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
);

revealEls.forEach((el) => observer.observe(el));

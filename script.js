const envelope = document.getElementById("envelope");
const seal = document.querySelector(".wax-seal");

seal.addEventListener("click", () => {
  envelope.classList.toggle("open");
});

const revealEls = document.querySelectorAll(
  ".hero-text, .hero-image, .letter-section h2, .envelope-container, .photo-section h2, .photo-card"
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
  {
    threshold: 0.15,
    rootMargin: "0px 0px -60px 0px",
  }
);

revealEls.forEach((el) => observer.observe(el));
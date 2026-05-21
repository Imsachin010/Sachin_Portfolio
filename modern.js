const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

function setMenu(open) {
  if (!menuToggle || !mobileMenu) return;

  menuToggle.classList.toggle("is-open", open);
  mobileMenu.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const willOpen = !mobileMenu.classList.contains("is-open");
    setMenu(willOpen);
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setMenu(false);
    }
  });
}

const typewriterEl = document.getElementById("typewriter");
const words = [
  "optimization insight",
  "research rigor",
  "reliable machine learning",
  "deep generative models"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function runTypewriter() {
  if (!typewriterEl) return;

  const currentWord = words[wordIndex];
  charIndex += deleting ? -1 : 1;
  typewriterEl.textContent = currentWord.slice(0, charIndex);

  let delay = deleting ? 50 : 80;

  if (!deleting && charIndex === currentWord.length) {
    deleting = true;
    delay = 1200;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 300;
  }

  window.setTimeout(runTypewriter, delay);
}

runTypewriter();

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const currentYear = document.getElementById("currentYear");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const toggleProjects = document.getElementById("toggleProjects");
const projectList = document.getElementById("projectList");

if (toggleProjects && projectList) {
  toggleProjects.addEventListener("click", () => {
    const willShow = projectList.classList.contains("is-hidden");
    projectList.classList.toggle("is-hidden", !willShow);
    toggleProjects.textContent = willShow ? "Hide Undergrad Work" : "Show Undergrad Work";
    toggleProjects.setAttribute("aria-expanded", String(willShow));
  });
}

const sectionLinks = Array.from(document.querySelectorAll(".desktop-nav a[href^='#']"));
const sectionTargets = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (sectionTargets.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        sectionLinks.forEach((link) => {
          link.classList.toggle("nav-active", link.getAttribute("href") === id);
        });
      });
    },
    { threshold: 0.45 }
  );

  sectionTargets.forEach((section) => sectionObserver.observe(section));
}

const scrollTopButton = document.getElementById("scrollTop");
if (scrollTopButton) {
  const toggleScrollTop = () => {
    scrollTopButton.classList.toggle("is-visible", window.scrollY > 500);
  };

  window.addEventListener("scroll", toggleScrollTop, { passive: true });
  toggleScrollTop();

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

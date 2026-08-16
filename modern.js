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

function bindToggle(buttonId, containerId, hideText, showText) {
  const btn = document.getElementById(buttonId);
  const container = document.getElementById(containerId);
  if (!btn || !container) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const isHidden = container.classList.toggle("is-hidden");
    if (isHidden) {
      container.style.display = "none";
      btn.textContent = showText;
      btn.setAttribute("aria-expanded", "false");
    } else {
      container.style.display = "grid";
      btn.textContent = hideText;
      btn.setAttribute("aria-expanded", "true");
    }
  });
}

bindToggle("toggleProjects", "projectList", "Hide Undergrad Work", "Show Undergrad Work");
bindToggle("toggleMastersProjects", "postgradProjectList", "Hide Master's Work", "Show Master's Work");

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

const contactForm = document.getElementById("contactForm");
const contactSubmitBtn = document.getElementById("contactSubmitBtn");
const contactFormStatus = document.getElementById("contactFormStatus");

if (contactForm && contactSubmitBtn && contactFormStatus) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    contactSubmitBtn.disabled = true;
    contactSubmitBtn.textContent = "Sending Message...";
    contactFormStatus.style.display = "block";
    contactFormStatus.style.color = "#9eb2d3";
    contactFormStatus.textContent = "Sending your message...";

    const formData = new FormData(contactForm);

    try {
      const response = await fetch("https://formsubmit.co/ajax/007mishrasachinmishra@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      if (response.ok) {
        contactFormStatus.style.color = "#2dd4bf";
        contactFormStatus.textContent = "✓ Message sent successfully! Thank you for reaching out.";
        contactForm.reset();
      } else {
        contactFormStatus.style.color = "#f87171";
        contactFormStatus.textContent = "Failed to send message. Please try sending directly to 007mishrasachinmishra@gmail.com";
      }
    } catch (err) {
      contactFormStatus.style.color = "#f87171";
      contactFormStatus.textContent = "Failed to send message. Please try sending directly to 007mishrasachinmishra@gmail.com";
    } finally {
      contactSubmitBtn.disabled = false;
      contactSubmitBtn.textContent = "Send Message";
    }
  });
}

const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (header) {
  window.addEventListener(
    "scroll",
    () => header.classList.toggle("scrolled", window.scrollY > 40),
    { passive: true }
  );
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-label", "Open menu");
    });
  });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = contactForm.querySelector(".form-submit");
    const buttonText = button.querySelector("span");

    buttonText.textContent = "Enquiry Ready";
    button.style.background = "#17191a";

    setTimeout(() => {
      buttonText.textContent = "Send Enquiry";
      button.style.background = "";
      contactForm.reset();
    }, 2500);
  });
}

const revealElements = document.querySelectorAll(
  ".section-tag, .intro-content, .about-content, .about-image, .service-card, .value, .vision-content, .contact-heading, .contact-form-box, .contact-team"
);

revealElements.forEach((element, index) => {
  element.classList.add("reveal");

  if (element.classList.contains("service-card") || element.classList.contains("value")) {
    element.style.transitionDelay = `${(index % 4) * 0.08}s`;
  }
});

const revealObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      )
    : null;

document.querySelectorAll(".reveal").forEach((element) => {
  if (revealObserver) {
    revealObserver.observe(element);
  } else {
    element.classList.add("active");
  }
});

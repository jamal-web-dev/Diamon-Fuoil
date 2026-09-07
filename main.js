        const header = document.querySelector(".header");
        const menuToggle = document.querySelector(".menu-toggle");
        const nav = document.querySelector(".nav-links");

        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 40);
        });

        menuToggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("open");
            menuToggle.classList.toggle("open", isOpen);
            menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("open");
                menuToggle.classList.remove("open");
                menuToggle.setAttribute("aria-label", "Open menu");
            });
        });


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

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
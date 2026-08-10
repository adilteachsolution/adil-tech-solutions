// Adil Tech Solutions - Main JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu
    const menuButton = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-menu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Language selector
    const languageButtons = document.querySelectorAll("[data-lang]");

    languageButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const language = this.getAttribute("data-lang");

            document.documentElement.lang = language;

            localStorage.setItem("selectedLanguage", language);

            console.log("Language changed to:", language);
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Contact form
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            alert("Thank you! We will contact you soon.");

            contactForm.reset();
        });
    }

});

// ========================================
// Adil Tech Solutions
// Main JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // MOBILE MENU
    // ================================

    const menuButton = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-menu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        // Close menu after clicking a link
        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });
    }


    // ================================
    // LANGUAGE SYSTEM
    // ================================

    const languageButtons =
        document.querySelectorAll("[data-lang]");

    const translations = {

        en: {
            home: "Home",
            services: "Services",
            about: "About",
            contact: "Contact"
        },

        ar: {
            home: "الرئيسية",
            services: "الخدمات",
            about: "من نحن",
            contact: "اتصل بنا"
        },

        ur: {
            home: "ہوم",
            services: "خدمات",
            about: "ہمارے بارے میں",
            contact: "رابطہ"
        }

    };


    function changeLanguage(language) {

        const translation = translations[language];

        if (!translation) {
            return;
        }

        const navLinks =
            document.querySelectorAll(".nav-menu > a");

        if (navLinks.length >= 4) {

            navLinks[0].textContent = translation.home;
            navLinks[1].textContent = translation.services;
            navLinks[2].textContent = translation.about;
            navLinks[3].textContent = translation.contact;

        }


        // Arabic / Urdu = RTL
        if (language === "ar" || language === "ur") {

            document.documentElement.dir = "rtl";

        } else {

            document.documentElement.dir = "ltr";

        }

        document.documentElement.lang = language;

        localStorage.setItem(
            "selectedLanguage",
            language
        );
    }


    languageButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const language =
                this.getAttribute("data-lang");

            changeLanguage(language);

        });

    });


    // Load saved language
    const savedLanguage =
        localStorage.getItem("selectedLanguage");

    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }


    // ================================
    // CONTACT FORM
    // ================================

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert(
                "Thank you! Your project request has been received. We will contact you soon."
            );

            contactForm.reset();

        });

    }


    // ================================
    // SMOOTH SCROLL
    // ================================

    const pageLinks =
        document.querySelectorAll('a[href^="#"]');

    pageLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ================================
    // SIMPLE SCROLL ANIMATION
    // ================================

    const cards =
        document.querySelectorAll(
            ".service-card, .features div"
        );

    const observer =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        }, {
            threshold: 0.15
        });


    cards.forEach(function (card) {

        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition = "0.6s ease";

        observer.observe(card);

    });

});

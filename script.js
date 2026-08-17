// Mobile Menu

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});


// Simple Animation on Scroll

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        let position = card.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if(position < screen - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

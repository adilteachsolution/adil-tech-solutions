document.addEventListener("DOMContentLoaded", function () {


    // Smooth scrolling for links

    const links = document.querySelectorAll("a[href^='#']");


    links.forEach(link => {

        link.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });



    // Simple scroll animation

    const cards = document.querySelectorAll(".card");


    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },{
        threshold:0.2
    });



    cards.forEach(card => {

        card.style.opacity="0";
        card.style.transform="translateY(30px)";
        card.style.transition="0.6s";

        observer.observe(card);

    });



});

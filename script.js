
// =========================================
// ADILTECHSOLUTION JAVASCRIPT
// =========================================


// Wait until page loads

document.addEventListener("DOMContentLoaded", function () {


    console.log("Adiltechsolution Website Loaded Successfully");


    // Language Buttons

    const languageButtons = document.querySelectorAll(".language button");


    languageButtons.forEach(button => {


        button.addEventListener("click", function () {


            const language = this.innerText;


            changeLanguage(language);


        });


    });



});




// =========================================
// LANGUAGE SYSTEM
// =========================================

function changeLanguage(language) {


    if(language === "EN") {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        console.log("English Selected");


    }



    else if(language === "AR") {


        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        console.log("Arabic Selected");


    }



    else if(language === "UR") {


        document.documentElement.lang = "ur";
        document.documentElement.dir = "rtl";

        console.log("Urdu Selected");


    }


}





// =========================================
// SCROLL ANIMATION READY
// =========================================

window.addEventListener("scroll", function(){


    const header = document.querySelector("header");


    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 8px 25px rgba(0,0,0,0.20)";

    }

    else {


        header.style.boxShadow =
        "0 4px 20px rgba(0,0,0,0.12)";


    }


});




// =========================================
// FUTURE FEATURES AREA
// =========================================

// Customer Login
// Project Dashboard
// Quote Form System
// Backend Connection
// Payment Integration

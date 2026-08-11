// Adiltechsolution Main Script

console.log("Adiltechsolution Website Loaded");


// Start Project Button

const startButton = document.querySelector(".hero button");

if(startButton){

    startButton.addEventListener("click", function(){

        alert(
            "Welcome to Adiltechsolution! Project request system coming soon."
        );

    });

}





        
    }


// Translation Data

const translations = {

    en: {
        title: "Build Your Digital Future With Adiltechsolution",
        description: "Professional Website Development, Software, Mobile Apps and Digital Marketing Solutions For Businesses Worldwide."
    },


    ar: {
        title: "ابنِ مستقبلك الرقمي مع Adiltechsolution",
        description: "حلول احترافية لتطوير المواقع والبرمجيات والتطبيقات والتسويق الرقمي للشركات حول العالم."
    },


    ur: {
        title: "Adiltechsolution کے ساتھ اپنا ڈیجیٹل مستقبل بنائیں",
        description: "دنیا بھر کے کاروباروں کے لیے ویب سائٹ، سافٹ ویئر، موبائل ایپس اور ڈیجیٹل مارکیٹنگ کی پروفیشنل خدمات۔"
    }

};



function changeLanguage(language){


    document.getElementById("hero-title").innerHTML =
    translations[language].title;


    document.getElementById("hero-description").innerHTML =
    translations[language].description;



    if(language === "ar" || language === "ur"){

        document.body.dir = "rtl";

    }

    else{

        document.body.dir = "ltr";

    }

}
        
    
// Adiltechsolution Translation System

const translations = {

    en: {
        title: "Build Your Digital Future With Adiltechsolution",
        description: "Professional Website Development, Software, Mobile Apps and Digital Marketing Solutions For Businesses Worldwide."
    },

    ar: {
        title: "ابنِ مستقبلك الرقمي مع Adiltechsolution",
        description: "حلول احترافية لتطوير المواقع والبرمجيات والتطبيقات والتسويق الرقمي للشركات حول العالم."
    },

    ur: {
        title: "Adiltechsolution کے ساتھ اپنا ڈیجیٹل مستقبل بنائیں",
        description: "دنیا بھر کے کاروباروں کے لیے ویب سائٹ، سافٹ ویئر، موبائل ایپس اور ڈیجیٹل مارکیٹنگ کی پروفیشنل خدمات۔"
    }

};


function changeLanguage(language){

    document.getElementById("hero-title").innerHTML =
    translations[language].title;


    document.getElementById("hero-description").innerHTML =
    translations[language].description;


    if(language === "ar" || language === "ur"){

        document.body.dir = "rtl";

    } else {

        document.body.dir = "ltr";

    }

}
// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


if(menuBtn){

    menuBtn.addEventListener("click", function(){

        nav.classList.toggle("active");

    });

}

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


if(menuBtn){

    menuBtn.addEventListener("click", function(){

        nav.classList.toggle("active");

    });

}

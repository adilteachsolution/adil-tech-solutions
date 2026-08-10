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

// Language System

function changeLanguage(language){

    if(language === "ar"){

        document.body.dir = "rtl";

        alert("Arabic language selected");

    }


    else if(language === "ur"){

        document.body.dir = "rtl";

        alert("Urdu language selected");

    }


    else{

        document.body.dir = "ltr";

        alert("English language selected");

    }

}

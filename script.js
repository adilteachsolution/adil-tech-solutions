// Adiltechsolution Main Script


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Firebase Configuration

const firebaseConfig = {

  apiKey: "AIzaSyDsFQJkuWg8C1FKQlyvh5WCEVR8OpzeSYU",

  authDomain: "adiltechsolution-48998.firebaseapp.com",

  projectId: "adiltechsolution-48998",

  storageBucket: "adiltechsolution-48998.firebasestorage.app",

  messagingSenderId: "51969875970",

  appId: "1:51969875970:web:b0fac9b539052ef1edc71b",

  measurementId: "G-3SX4841DN7"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);



// Website Loaded

console.log("Adiltechsolution Website Loaded");



// Signup System

window.createAccount = function(){


let email = document.getElementById("email").value;

let password = document.getElementById("password").value;



createUserWithEmailAndPassword(auth, email, password)


.then((userCredential)=>{


alert("Account created successfully");


window.location.href = "login.html";


})


.catch((error)=>{


alert(error.message);


});


};



// Login System

window.loginUser = function(){


let email = document.getElementById("email").value;

let password = document.getElementById("password").value;



signInWithEmailAndPassword(auth,email,password)


.then(()=>{


window.location.href = "dashboard.html";


})


.catch((error)=>{


alert(error.message);


});


};

// Translation System


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



window.changeLanguage = function(language){


let title = document.getElementById("hero-title");

let description = document.getElementById("hero-description");


if(title){

title.innerHTML = translations[language].title;

}


if(description){

description.innerHTML = translations[language].description;

}


if(language === "ar" || language === "ur"){

document.body.dir = "rtl";

}

else{

document.body.dir = "ltr";

}


};





// Mobile Menu


const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");


if(menuBtn){


menuBtn.addEventListener("click", function(){


nav.classList.toggle("active");


});


}






// Start Project Button


const startButton = document.querySelector(".hero button");


if(startButton){


startButton.addEventListener("click", function(){


alert(

"Welcome to Adiltechsolution! Project request system coming soon."

);


});


}

document.addEventListener("DOMContentLoaded", function(){

    console.log("Adiltechsolution Website Loaded");

    const startButton = document.querySelector("button");

    if(startButton){
        startButton.addEventListener("click", function(){
            alert("Thank you for choosing Adiltechsolution. We will contact you soon.");
        });
    }

});

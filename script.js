document.querySelector(".booking-form-btn").addEventListener("click", function(){
    document.querySelector(".booking-form").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
})

document.querySelector(".back-icon").addEventListener("click", function(){
    document.querySelector(".booking-form").style.display = "none";
})
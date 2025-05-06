document.querySelector(".booking-form-btn").addEventListener("click",function(){
    document.querySelector(".blur").classList.toggle("active");
    document.querySelector(".booking-form").style.display = "flex";
})

document.querySelector(".back-icon").addEventListener("click", function(){
    document.querySelector(".booking-form").style.display = "none";
    document.querySelector(".blur").classList.toggle("active");
})


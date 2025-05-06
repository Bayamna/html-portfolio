document.querySelector(".booking-form-btn").addEventListener("click",function(){
    document.querySelector(".blur").classList.toggle("active");
    document.querySelector(".booking-form").classList.toggle("form-visible");
})

document.querySelector(".back-icon").addEventListener("click", function(){
    document.querySelector(".booking-form").classList.toggle("form-visible");
    document.querySelector(".blur").classList.toggle("active");
})


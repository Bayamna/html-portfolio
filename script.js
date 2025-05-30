
$(document).ready(function(){
    var treatments_list = document.querySelector(".treatments");
    treatments_list = "hide-first-option";
    // OPEN DROP-DOWN MENU
    document.querySelector(".menu-icon").addEventListener("click",function(){
        $(".toggled-navigation-bar").slideDown();
        document.querySelector(".overlay").style.display = "block";
        document.querySelector("body").classList.add("active-overflow");
    })
    
    // CLOSE DROP-DOWN MENU
    var overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", function(){
        $(".toggled-navigation-bar").fadeOut("fast");
        overlay.style.display = "none";
        document.querySelector("body").classList.remove("active-overflow");
    })
    
    // OPEN BOOKING-FORM
    document.querySelector(".booking-btn").addEventListener("click", function(){
        $(".booking-form-wrapper").slideDown("fast");
        document.querySelector("body").classList.add("active-overflow");
        document.querySelector(".overlay").style.display = "block";
    })
    
    // CLOSE BOOKING-FORM BY CLICKING THE CLOSE ICON
    document.querySelector(".form-closing-icon").addEventListener("click", function(){
        $(".booking-form-wrapper").fadeOut("fast");
        document.querySelector("body").classList.remove("active-overflow");
        document.querySelector(".overlay").style.display = "none";
    })

    // CLOSE BOOKING-FORM BY CLICKING ON THE PAGE
    var overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", function(){
        $(".booking-form-wrapper").fadeOut("fast");
        overlay.style.display = "none";
        document.querySelector("body").classList.remove("active-overflow");
    })
})


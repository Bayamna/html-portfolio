
$(document).ready(function(){
    // OPEN DROP-DOWN MENU
    $(".menu-icon").click(function(){
        $(".toggled-navigation-bar").slideDown();
    })
    
    // CLOSE DROP-DOWN MENU
    var menu_modal = document.querySelector(".toggled-navigation-bar");
    document.addEventListener("click", function(event){
        if(event.target == menu_modal){
            menu_modal.style.display = "none";
        }
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


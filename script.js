
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
        $(".booking-form-container").slideDown("slow");
        document.querySelector("body").classList.add("active-overflow");
    })
    
    // CLOSE BOOKING-FORM
    document.querySelector("").addEventListener("click", function(){
        $(".booking-form-container").fadeOut("slow");
    })    
})


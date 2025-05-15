$(".menu-icon").click(function(){
    $(".toggled-navigation-bar").slideDown();
    $(".toggled-navigation-bar").addClass("visible");
})

var menu_modal = document.querySelector(".toggled-navigation-bar");
document.addEventListener("click", function(event){
    if(event.target == menu_modal){
        menu_modal.style.display = "none";
    }
})
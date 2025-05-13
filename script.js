document.querySelector(".menu-icon").addEventListener("click", function(){
    document.querySelector(".toggled-navigation-bar").classList.toggle("visible");
})

document.addEventListener("click", function(event){
    var navigation = document.querySelector(".toggled-navigation-bar");
    if(event.target == navigation){
        document.querySelector(".toggled-navigation-bar").classList.toggle("visible");
    }
})
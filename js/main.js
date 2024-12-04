let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else  {
        nav.classList.remove("header-scrolled")
    }
}

let navbar = document.querySelectorAll(".nav-link");
let navCollapse = documetn.querySelector(".navbar-collapse.collapse")
navbar.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
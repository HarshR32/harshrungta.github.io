var menu = document.querySelector(".navbar ul");
const navLinks = document.querySelectorAll(".navbar ul li a");
var menuBtn = document.querySelector(".container");
var navbar = document.querySelector(".navbar");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
        menuBtn.classList.remove("change");
        navbar.classList.remove("nav-bg");
    });
});


menuBtn.addEventListener("click", () =>{
    menuBtn.classList.toggle("change");
    menu.classList.toggle("show");
    navbar.classList.toggle("nav-bg");

});
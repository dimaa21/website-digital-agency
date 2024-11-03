// script.js
document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.querySelector(".burger");
    const menu = document.querySelector(".menu");

    if (burgerIcon) {
        burgerIcon.addEventListener("click", function() {
            menu.classList.toggle("active");
        });
    }
});

const burger = document.getElementById('burger-menu');
const nav = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

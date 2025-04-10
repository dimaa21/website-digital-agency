const burger = document.getElementById('burger-menu');
const nav = document.getElementById('nav-menu');
const body = document.body; // Отримуємо body

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('open');
    
    // Керуємо зміщенням контенту вниз
    body.classList.toggle('menu-open');
});

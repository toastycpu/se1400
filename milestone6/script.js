const hambrgBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hambrgBtn.addEventListener('click', function() {
    nav.classList.toggle('nav-open');
});
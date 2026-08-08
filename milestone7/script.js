const hambrgBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
if (hambrgBtn && nav) {
    hambrgBtn.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
    });
}

const signupForm = document.querySelector('.signUp-section form');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        document.querySelector(".form-confirmation").classList.add("show");
        signupForm.reset();
    });
}
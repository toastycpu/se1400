const hambrgBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hambrgBtn.addEventListener('click', function() {
    nav.classList.toggle('nav-open');
});

document.querySelector('.signUp-section form').addEventListener('submit', function(event){
    event.preventDefault()
    document.querySelector(".form-confirmation").classList.add("show");
    form.reset();
})
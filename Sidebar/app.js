const nav_btn = document.querySelector(".toggle-icon");
const head_section = document.querySelector('.sidebar');

nav_btn.addEventListener('click',() => {
    console.log('clicked');
    head_section.classList.toggle('active');
})
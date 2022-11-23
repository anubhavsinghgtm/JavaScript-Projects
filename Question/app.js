var btns = document.querySelectorAll('.btns');

btns.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        e.currentTarget.parentElement.parentElement.classList.toggle('show');
    })
})
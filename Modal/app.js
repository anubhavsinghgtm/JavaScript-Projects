const openModel = document.querySelector('.open-modal');
const closeModel = document.querySelector('.close-icon');
const section = document.querySelector('.main');


openModel.addEventListener('click',()=>{
    section.classList.add('active');
})

closeModel.addEventListener('click',()=>{
    section.classList.remove('active');
})
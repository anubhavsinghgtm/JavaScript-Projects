var menuBtn = document.querySelector('.menu-icon');
var header = document.querySelector('header');



menuBtn.addEventListener('click',()=>{
    console.log('clicked');
    header.classList.toggle('menu-active');
})


window.addEventListener('scroll',function(){
    if(window.scrollY > 44){
        header.classList.add('sticky');
    }
    else{
        header.classList.remove('sticky');
    }
})
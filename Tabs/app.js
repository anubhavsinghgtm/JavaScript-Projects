const tabs = document.querySelectorAll('.tab-btn');
const mainContainer = document.querySelector('.main-container');
const contents = document.querySelectorAll('.content');

// tabs.forEach((tab)=>{
//     tab.addEventListener('click',(e)=>{
//         e.classList.remove('active');
//     })
// })

mainContainer.addEventListener('click',(e)=>{
    const id = e.target.dataset.id;
    if(id){
        // remove active from all the btns
        tabs.forEach((tab)=>{
            tab.classList.remove('active');

            // add active to target
            e.target.classList.add('active');
        })

        // remove active from all the contents
        contents.forEach((content)=>{
            content.classList.remove('active');
        })
        const item = document.querySelector(`#${id}`);
        item.classList.add('active');
    }
})



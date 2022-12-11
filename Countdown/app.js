const items = document.querySelectorAll('.content');


const futureDate = new Date(2022, 11, 14, 12, 40, 0);
const futureTime = futureDate.getTime();
console.log(futureTime);



// format timer
function format(item){
    if(item<10){
        return `0${item}`;
    }
    return item;
}



function remainingTimeFun(){
    
    const today = new Date().getTime();
    const remainingTime = futureTime - today;
    console.log(remainingTime);

    // value 

    const m = 1000 * 60; // minute
    const h = 1000 * 60 * 60; // hour
    const d = 1000 * 60 * 60 * 24; //day

    
    let days = Math.floor(remainingTime / d);
    let hours = Math.floor((remainingTime % d) / h);
    let minutes = Math.floor((remainingTime % h) / m);
    let seconds = Math.floor((remainingTime % m) / 1000);
    
    const values = [days, hours, minutes, seconds];

    items.forEach(
        function(item, index){
            item.innerHTML = format(values[index]);
        }
    );

}


let countdown = setInterval(remainingTimeFun, 1000);
remainingTimeFun();


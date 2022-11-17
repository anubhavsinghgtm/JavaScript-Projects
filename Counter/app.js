var count = 0;
var countObj = document.getElementById('cnt');

function setCounting(count){
    if(count>0){
        countObj.style.color = 'green';
    }
    
    else if(count<0){
        countObj.style.color = 'red';
    }

    else{
        countObj.style.color = 'black';
    }
    countObj.innerHTML = count;
    // document.getElementById('cnt').style.color = 'red';
}

function decreaseCount(){
    count--;
    setCounting(count);
}

function resetCount(){
    count = 0;
    setCounting(count);
}



function increaseCount(){
    count++;
    setCounting(count);
}
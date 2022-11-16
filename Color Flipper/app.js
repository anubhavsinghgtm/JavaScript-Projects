var hexCodeTextObj = document.getElementById('hexCodeText');



const colorArray = ['red','yellow','green','blue','cyan','tomato'];
const hexArray = ['FF5733','B52304','B54204','FBA02C','FBBC2C','FADD3E','E6FA3E','CFFA3E','93FA3E','16EC19','3AFC83','3AFCC1','4DF9E4','0CA0B1','66A3FB','8696FA','AB86FA','DA86FA','FA86F8','FA86D7','FA86BC','FA8692','9D0918'];

function getRandomIndex(arr){
    let max = arr.length; // to get the limit of random numbers
    let randomIndex = Math.floor(Math.random() * max);
    return randomIndex;
}


function changeColor(){
   
    let randomIndex = getRandomIndex(colorArray);
    let color = colorArray[randomIndex];
    hexCodeTextObj.innerHTML = color;
    document.getElementById('hexCodeColor').style.backgroundColor = color;

}

function changeHexColor(){
   
    let randomIndex = getRandomIndex(hexArray);
    let color = hexArray[randomIndex];
    hexCodeTextObj.innerHTML = color;
    document.getElementById('hexCodeColor').style.backgroundColor = `#${color}`;

}
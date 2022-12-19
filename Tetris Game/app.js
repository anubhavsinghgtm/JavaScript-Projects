document.addEventListener('DOMContentLoaded', ()=>{

const grid = document.querySelector('.grid');
let squares = document.querySelectorAll('.grid div');
const startBtn = document.querySelector('.start-btn');
const scoreDisplay = document.querySelector('.score');

let timerId;
let score = 0;
const width = 10;
let nextRandom = 0;
let currentPosition = 3;
let currentRotation = 0;


// colors
const colors = ['red','tomato','green', 'blue', 'cyan', 'purple'];
    
// tetrominoes list
    
const lTetrominoes = [
    [1, 2, width+1, width*2+1],
    [1, width+1, width+2, width+3],
    [2, width+2, 2*width+1, 2*width+2],
    [1, 2, 3, width+3],
]

const z1Tetrominoes = [
    [2, width+1, width+2, 2*width+1 ],
    [0, 1, width+1, width+2 ],
    [2, width+1, width+2, 2*width+1 ],
    [0, 1, width+1, width+2 ],
     
]

const z2Tetrominoes = [
    [1, width+1, width+2, 2*width+2],
    [1, 2, width+0, width+1 ],
    [1, width+1, width+2, 2*width+2],
    [1, 2, width+0, width+1 ],
     
]

const tTetrominoes = [
    [2,width+1, width+2, width+3],
    [2,width+1, width+2, 2*width+2],
    [width+1, width+2, width+3, 2*width+2],
    [2, width+2, width+3, 2*width+2],    
]

const oTetrominoes = [
    [1,2,width+1, width+2],
    [1,2,width+1, width+2],
    [1,2,width+1, width+2],
    [1,2,width+1, width+2],
]

const iTetrominoes = [
    [1,width+1, width*2+1, width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1, width*2+1, width*3+1],
    [width,width+1,width+2,width+3],
]

// array of all tetrominoes
const tetrominoes = [lTetrominoes, z1Tetrominoes, z2Tetrominoes, tTetrominoes, oTetrominoes, iTetrominoes];


// to undraw the tetromino from previous position
function undraw(){
    current.forEach( index => {
        squares[currentPosition + index].classList.remove('red');
        squares[currentPosition + index].style.backgroundColor = '';
    });
}



// to take random tetriminoes
let random = Math.floor(Math.random()*tetrominoes.length);
let current = tetrominoes[random][currentRotation];


// to draw the new position of tetromino
function draw(){
    current.forEach(index => {
        squares[currentPosition + index].classList.add('red');
        squares[currentPosition + index].style.backgroundColor = colors[random];
    })
}


// recall for every second
// setInterval(moveDown, 1000);

// to move down the tetromino
function moveDown(){
    undraw();
    currentPosition+=width;
    draw();
    freeze();
    
}

// to freeze the old one and start the new one
function freeze(){
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
        current.forEach(index => squares[currentPosition + index].classList.add('taken'));
        random = nextRandom;
        nextRandom = Math.floor(Math.random() * tetrominoes.length);
        current = tetrominoes[random][currentRotation];
        currentPosition = 3;
        draw();
        nextTetromino();
        addScore();
        gameOver();
        
    }
}



// move left 
function moveLeft(){
    undraw();
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);

    if(!isAtLeftEdge) currentPosition -= 1;

    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
        currentPosition += 1;
    }

    draw();
}

// move right
function moveRight(){
    undraw();
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === 9);

    if(!isAtRightEdge) currentPosition += 1;

    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
        currentPosition -= 1;
    }

    draw();
}

currentPosition = 3
// rotate the tetrominos
function rotateTetriminoes(){
    undraw();
   
    currentRotation++;
    if(currentRotation === current.length){
        currentRotation = 0;
    }
    
    current = tetrominoes[random][currentRotation];
    draw();
}


// key controls
function control(e){
    if(e.keyCode == 37){
        moveLeft();
        
    }
    if(e.keyCode == 39){
        moveRight();
        
    }
    if(e.keyCode == 38){
    
        rotateTetriminoes();
        
    }
    if(e.keyCode == 40){
        moveDown();
    }
}

document.addEventListener('keyup', control);


// display next tetromino in small grid
const nextGrid = document.querySelector('.small-grid');
let nextSquares = document.querySelectorAll('.small-grid div');
const displayWidth = 4;
let displayIndex = 0;



const upNextTetrominos = [
    [1, 2, displayWidth+1, displayWidth*2+1],  // lTetromino
    [2, displayWidth+1, displayWidth+2, 2*displayWidth+1], // z1Tetromino
    [1, displayWidth+1, displayWidth+2, 2*displayWidth+2], // z2Tetromino
    [2,displayWidth+1, displayWidth+2, displayWidth+3], // tTetromino
    [1,2,displayWidth+1, displayWidth+2], // oTetromino
    [1,displayWidth+1, displayWidth*2+1, displayWidth*3+1], // iTetromino
]



// next tetromino

function nextTetromino(){
    
    nextSquares.forEach(square => {
        square.classList.remove('red');
        square.style.backgroundColor = '';
    })

    upNextTetrominos[nextRandom].forEach(index => {
        nextSquares[displayIndex + index].classList.add('red');
        nextSquares[displayIndex + index].style.backgroundColor = colors[nextRandom];
    })
    
}



// Pause and Start the game
startBtn.addEventListener('click', ()=>{
    if(timerId){
        clearInterval(timerId);
        timerId = null;
    }
    else{
        draw();
        timerId = setInterval(moveDown,1000);
        nextRandom = Math.floor(Math.random()*tetrominoes.length);
        nextTetromino();
    }
});


// to add score
function addScore(){
    for(let i=0; i<199; i+=width){
        const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9];

        if(row.every(index => squares[index].classList.contains('taken'))){
            score += 10;
            scoreDisplay.innerHTML = score;

            row.forEach(index =>{
                squares[index].classList.remove('taken');
                squares[index].classList.remove('red');
                squares[index].style.backgroundColor = '';
            })
            squares = Array.from(squares);
            const removedSquares = squares.splice(i,width);
            squares = removedSquares.concat(squares);
            squares.forEach(div => grid.appendChild(div));
        }
    }
}




// game over function
function gameOver(){
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
        scoreDisplay.innerHTML = 'End';
        clearInterval(timerId);
    }
}



});
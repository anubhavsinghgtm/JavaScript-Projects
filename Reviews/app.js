const review = [
{
    'name' : 'Shivam Premchandra',
    'designation':'ANDROID MECHANIC',
    'body':'I have used the car. It flows very fast. Might be the sdk version is good.We’re going to build a web page that displays “This page does not exist.” in all capital letters..',
    'img':'img/shivam.jpg',
},
{
    'name' : 'Rajneesh Chattopadhyay',
    'designation':'Dev Pilot',
    'body':'This is really phenomial. I just create a gas pipeline and it fixes my all selinux like security gards problem. Thanks for the tips.',
    'img':'img/rajneesh.jpg',
},
{
    'name' : 'Prateek Philip',
    'designation':'Machine Unlearning',
    'body':'Havent expected this from the app. I am totally amazed how this works for my machine to cook the foood easily without any burning on my nerual network.',
    'img':'img/prateek.jpg',
},
{
    'name' : 'Arun Wish Karna',
    'designation':'Aap Creator',
    'body':'I got brainwashed while using this platform. Navigating through main activity and it is treamendous how you guys managed all this.',
    'img':'img/arun.jpg',
},
]

let index = 0;


window.addEventListener("DOMContentLoaded",function(){
    setValue(review[index]);
})

function setValue(obj){
    document.getElementById('name').innerHTML = obj.name;
    document.getElementById('designation').innerHTML = obj.designation;
    document.getElementById('review').innerHTML = obj.body;
    document.getElementById('img').src = obj.img;
}


function randomReview(){
    let randIndex = Math.floor(Math.random() * review.length);
    index = randIndex;
    setValue(review[randIndex]);
}

function leftReview(){

    index--;
    if(index < 0 ){
        console.log(index);
        index = review.length-1;
    }
    setValue(review[index]);
}

function rightReview(){
    index++;
    if(index > review.length - 1 ){
        console.log(index);
        index = 0;
    }
        
    setValue(review[index]);
}
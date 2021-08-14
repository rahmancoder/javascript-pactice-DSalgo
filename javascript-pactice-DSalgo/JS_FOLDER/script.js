
// button 2 event
function makered() {
    document.body.style.backgroundColor = 'red';
}

// button 3 event
var blueButton = document.getElementById('blue-btn');
// blueButton.onclick = makeBlue();
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// button 4
const blackButton = document.getElementById('black-btn');
// blackButton.onclick = function makeblack() {
//     document.body.style.backgroundColor = 'Black';
// }
// console.log(blackButton);

// Using anonymous function---> NoName
blackButton.onclick = function () {
    document.body.style.backgroundColor = 'Black';
}




//button 5
const violetButton = document.getElementById('violet-btn');
// handle by event listener
violetButton.addEventListener('click', makeViolet); // ki korbe , kake korbe
function makeViolet() {
    document.body.style.backgroundColor = 'BlueViolet';
}

// console.log(violetButton);


// button 6
// handle with add event listner
const hotPinkButton = document.getElementById('hotPink-btn');
hotPinkButton.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'hotpink';
})
// console.log(hotPinkButton);


// Button 7
// direct short cut
// const lightblueButton = document.getElementById('lightblue-btn');

document.getElementById('lightblue-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightBlue';
})
// console.log(lightblueButton);
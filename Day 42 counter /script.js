const increaseButton = document.querySelector('.increase');
const decreaseButton = document.querySelector('.decrease');
const counterDisplay = document.querySelector('h2');

let counter = 0;

increaseButton.addEventListener('click', ()=>{
    counter++;
    counterDisplay.innerText = counter;
});

decreaseButton.addEventListener('click', ()=>{
    counter--;
    counterDisplay.innerText = counter;
});

'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number'

const number = document.querySelector('.number').textContent
const score = document.querySelector('.score').textContent
const guess = document.querySelector('.guess').value
console.log('Number:' + number + ' Score:' + score + ' value:' + guess);.
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let message =  document.querySelector('.message');
const x = function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        console.log(secretNumber);
       message.textContent = 'No number'
    } else if (guess === secretNumber)
    {
        message.textContent = 'Correct number'
    } else if (guess > secretNumber) {
        message.textContent = 'Too High'
    }else if (guess < secretNumber) {
        message.textContent = 'Too Low'
    }
    
}

document.querySelector('.check').addEventListener('click',
x)
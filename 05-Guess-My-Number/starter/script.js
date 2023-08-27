'use strict';
//notes ---------------------------------------------------------------
/*
. Textcontent contains the text within an element (check what happens if there are other elements within)
. Value used to get the value of an input element
. Style lets you access all css style properties as properties written in camel case
*/

/*
console. Log(document. Queryselector('. Message'). Textcontent);

document. Queryselector('. Message'). Textcontent = 'correct number! ';
document. Queryselector('. Number');
document. Queryselector('. Score');

document. Queryselector('. Guess'). Value; */

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function wrongAnswer(message){
    if(score > 1) {
        document.querySelector('.message').textContent = message;
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'you lost the game';
    }
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if(!guess) {
        document.querySelector('.message').textContent = 'no number! ';

    //when guess is correct
    } else if (guess === number) {
        document.querySelector('.message').textContent = 'correct number! ';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style. Width = '30rem';
        document.querySelector('.number').textContent = number;

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    //when guess is too high
    } else if (guess > number) {
        wrongAnswer('too high!');
    //when guess is too low
    } else {
        wrongAnswer('too low!');
    }
})

//again button functionality
document.querySelector('.again').addEventListener('click', ()=>{
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '? ';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'start guessing... ';

})
'use strict';
// User starting score
var score = 0;
// List of questions for guessing game. Array's in [answer,question] format.
var questionOne = ['NO', 'Was Shane ever in the military?'];
var questionTwo = ['NO', 'Does Shane own a cat?'];
var questionThree = ['YES', 'Is Shane\'s birthday ever on Thanksgiving?'];
var questionFour = ['YES', 'Does Shane own more than one pair of shoes?'];
var questionFive = ['YES', 'Is Shane allergic to dairy?'];
var questionSix = [42, 'What is Shane\s favorite number?'];
var questionSeven = [['chapstick', 'airpods', 'cash', 'debit card', 'license'], 'What do you think Shane has in his pockets?']
// Asks user their name and welcomes them
function welcomeToGame() {
    var userName = prompt('What is your name?');
    alert('Welcome to my guessing game ' + userName);
}
// Yes/No question function
function yesNoQuestion (questionArr) {
    var flag;
    while(!flag) {
        var answer = prompt(questionArr[1]);
        if (answer.toUpperCase() === 'YES' || answer.toUpperCase() === 'NO') {
            if (questionArr[0] === answer.toUpperCase()) {
                alert('Correct!');
                score++;
                flag = true;
            } else {
                alert('Incorrect.');
                flag = true;
            }
        } else {
            alert('Yes/No answers only please');
        }
    }
}
// Number guessing function
function guessNum (questionArr) {
    var counter = 1;
    if (counter === 5) {
        alert('Out of guesses!');
    }
    while (counter < 5) {
        var guess = parseInt(prompt(questionArr[1]));
        if (guess === questionArr[0]) {
            alert('Correct!');
            score++;
            break;
        } else if (guess > questionArr[0]) {
            alert('Too high! Guess again');
            counter++;
        } else if (guess < questionArr[0]) {
            alert('Too low! Guess again');
            counter++;
        } else {
            alert('Please guess a number.');
        }
    }
}
// Guess what is in this array function
function arrayGuess (questionArr) {
    var answers = questionArr[0];
    var counter = 1;
    while (counter < 8) {
        if (counter !== 1) {
            alert('Guess again!')
        }
        counter++;
        if (counter === 8) {
            alert('You have run out of guesses');
            break;
        }
        var guess = prompt(questionArr[1]);
        for (var i = 0; i < answers.length; i++) {
            if (guess === answers[i]) {
                alert('Correct!');
                score++;
                counter = 9;
                break;
            }
        }
    }
}

// All the function calls that run the guessing game.
welcomeToGame();
yesNoQuestion(questionOne);
yesNoQuestion(questionTwo);
yesNoQuestion(questionThree);
yesNoQuestion(questionFour);
yesNoQuestion(questionFive);
guessNum(questionSix);
arrayGuess(questionSeven);
alert('Your score is ' + score);
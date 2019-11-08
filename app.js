'use strict';
var score = 0;
// Asks the user for their name and returns a greeting.
var user_name = prompt('Welcome, what is your name?');
alert('Welcome ' + user_name + '. This is Shane\'s guessing game!');

function yesCorrect (question) {
    if (question.toUpperCase() === 'YES' || question.toUpperCase() === 'Y') {
        // console.log('The user has guessed question 3 correctly.');
         alert('Good job. You guessed correctly');
         score++;
     } else if (question.toUpperCase() === 'NO' || question.toUpperCase() === 'N') {
        // console.log('The user has guessed question 3 incorrectly.');
         alert('Oops. You guessed incorrectly.');
     } else {
        // console.log('The user has provided an invalid answer to question3');
         alert('Sorry, that is not a valid answer');
     }
}

function noCorrect (question) {
    if (question.toUpperCase() === 'YES' || question.toUpperCase() === 'Y') {
        // console.log('The user guessed question 1 incorrectly.');
         alert('Oops. You guessed incorrectly.');
     } else if (question.toUpperCase() === 'NO' || question.toUpperCase() === 'N') {
        // console.log('The user has guessed question 1 correctly.');
         alert('Good job! You guessed correctly.');
         score++;
     } else {
        // console.log('The user has provided an invalid answer to question 1');
         alert('Sorry, that is not a valid answer.');
     }
}

// GUESS NUM FUNCTION
function is42 (num) {
    if (numberGuess > 42) {
        alert('You guessed too high!');
        counter++;
    } else if (numberGuess < 42) {
        alert('You guessed too low!');
        counter++;
    } else if (numberGuess === 42) {
        alert('That is correct');
        score++;
    }
        else {
        alert('That is not a number');
    }
}
// END OF GUESS FUNCTION

// GUESS ITEM IN ARRAY FUNCTION
function isIn (item, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            alert('Correct! Shane does have a ' + item + ' in his pocket');
            score++;
            break;
        }
    
        else if (!flag) {
            item = prompt('Incorrect. Guess again!');
            counter++;
            if (counter > 5) {
                break;
            }
        }
    } 
} 
// END OF GUESS ITEM IN ARRAY FUNCTION

// Asks the user the first question, evaluates, logs, and returns an alert.
var question_1 = prompt('Was Shane ever in the military?');
noCorrect(question_1);

// Asks the user the second question, evaluates, logs, and returns an alert.
var question_2 = prompt('Does Shane own a cat?');
noCorrect(question_2);

// Asks the user the third question, evaluates, logs, and returns an alert.
var question_3 = prompt('Is Shane\'s birthday ever on Thanksgiving?');
yesCorrect(question_3);

// Asks the user the fourth question, evaluates, logs, and returns an alert.
var question_4 = prompt('Does Shane own more than one pair of shoes?');
yesCorrect(question_4);

// Ask the user the fifth and final question, evaluates, logs, and returns an alert.
var question_5 = prompt('Is Shane allergic to dairy?');
yesCorrect(question_5);

var numberGuess;
var counter = 1;
// User is prompted to guess a number
while (numberGuess !== 42) {
    numberGuess = parseInt(prompt('What is Shane\'s favorite number?'));

    if (counter >= 4) { // breaks loop if user runs out of guesses
        alert('You have run out of guesses. The correct answer is 42. Shane thinks that makes him seem intellectual, but it doesn\'t.');
        console.log('The user ran out of guesses. ');
        break;
    } // Tells the user if they guessed too high/low or pushes back if not a number.
    is42(numberGuess);
}
console.log('The user guessed correctly on their ' + counter + ' guess.');

var things = ['chapstick', 'airpods', 'cash', 'debit card', 'license'];
var guess = prompt('What do you think Shane has in his pockets?');
var flag;
counter = 1;

isIn(guess, things);
// for (var i = 0; i < things.length; i++) {
//     if (guess === things[i]) {
//         alert('Correct! Shane does have a ' + guess + ' in his pocket');
//         score++;
//         break;
//     }

//     else if (!flag) {
//         guess = prompt('Incorrect. Guess again!');
//         counter++;
//         if (counter > 5) {
//             break;
//         }
//     }
// } 

alert('Your score is ' + score); 
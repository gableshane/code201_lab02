'use strict';
var score = 0;
// Asks the user for their name and returns a greeting.
var user_name = prompt('Welcome, what is your name?');
alert('Welcome ' + user_name + '. This is Shane\'s guessing game!');
// Asks the user the first question, evaluates, logs, and returns an alert.
var question_1 = prompt('Was Shane ever in the military?');
if (question_1.toUpperCase() === 'YES' || question_1.toUpperCase() === 'Y') {
   // console.log('The user guessed question 1 incorrectly.');
    alert('Oops. You guessed incorrectly. Shane was never in the military');
} else if (question_1.toUpperCase() === 'NO' || question_1.toUpperCase() === 'N') {
   // console.log('The user has guessed question 1 correctly.');
    alert('Good job! You guessed correctly. Shane was never in the military');
    score++;
} else {
   // console.log('The user has provided an invalid answer to question 1');
    alert('Sorry, that is not a valid answer.');
}
// Asks the user the second question, evaluates, logs, and returns an alert.
var question_2 = prompt('Does Shane own a cat?');
if (question_2.toUpperCase() === 'Yes' || question_2.toUpperCase() === 'Y') {
   // console.log('The user has guessed question 2 incorrectly.');
    alert('Oops. You guessed incorrectly. Shane does not own a cat.');
} else if (question_2.toUpperCase() === 'NO' || question_2.toUpperCase() === 'N') {
   // console.log('The user has guessed question 2 correctly');
    alert('Good job. You guessed correctly. Shane does not own a cat.');
    score++;
} else {
   // console.log('The user has provided an invalid answer to question 2');
    alert('Sorry, that is not a valid answer.')
}
// Asks the user the third question, evaluates, logs, and returns an alert.
var question_3 = prompt('Is Shane\'s birthday ever on Thanksgiving?');
if (question_3.toUpperCase() === 'YES' || question_3.toUpperCase() === 'Y') {
   // console.log('The user has guessed question 3 correctly.');
    alert('Good job. You guessed correctly. Shane\'s birthday is sometimes on Thanksgiving. However, not this year.');
    score++;
} else if (question_3.toUpperCase() === 'NO' || question_3.toUpperCase() === 'N') {
   // console.log('The user has guessed question 3 incorrectly.');
    alert('Oops. You guessed incorrectly. Shane\'s birthday is sometimes on Thanksgiving');
} else {
   // console.log('The user has provided an invalid answer to question3');
    alert('Sorry, that is not a valid answer');
}
// Asks the user the fourth question, evaluates, logs, and returns an alert.
var question_4 = prompt('Does Shane own more than one pair of shoes?');
if (question_4.toUpperCase() === 'YES' || question_4.toUpperCase() === 'Y') {
   // console.log('The user has guessed the fourth question correctly.');
    alert('Good job. You have guessed correctly. Shane has at least 1.5 pairs of shoes.');
    score++;
} else if (question_4.toUpperCase() === 'NO' || question_4.toUpperCase() === 'N') {
   // console.log('The user has guessed the fourth question incorrectly');
    alert('Oops. You guessed incorrectly. Shane has greater than or equal to 1.5 pairs of shoes');
} else {
   // console.log('The user has provided an invalid answer to question 4.');
    alert('Sorry, that is not a valid answer');
}
// Ask the user the fifth and final question, evaluates, logs, and returns an alert.
var question_5 = prompt('Is Shane allergic to dairy?');
if (question_5.toUpperCase() === 'YES' || question_5.toUpperCase() === 'Y') {
   // console.log('The user has guessed question 5 correctly');
    alert('Good job. You have guessed correctly. Shane is allergic to dairy. Also, eggs.');
    score++;
} else if (question_5.toUpperCase() === 'NO' || question_5.toUpperCase() === 'N') {
   // console.log('The user has guessed question 5 incorrectly.');
    alert('Oops. You have guessed incorrectly. Shane is allergic to dairy.');
} else {
   // console.log('The user has provided an invalid answer to question 5.');
    alert('Sorry, that is not a valid answer');
}

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
console.log('The user guessed correctly on their ' + counter + ' guess.');

var things = ['chapstick', 'airpods', 'cash', 'debit card', 'license'];
var guess = prompt('What do you think Shane has in his pockets?');
var flag;
counter = 1;

while (counter <= 6) {
    for (i = 0; i < things.length; i++) {
        if (guess === things[i]) {
            alert('Correct! Shane does have a ' + guess + ' in his pocket');
            score++;
            break;
        }
        if (!flag) {
            guess = prompt('Incorrect. Guess again!');
            counter++;
        }
    }
}
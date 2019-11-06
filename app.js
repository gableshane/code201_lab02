'use strict';
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
} else {
   // console.log('The user has provided an invalid answer to question 2');
    alert('Sorry, that is not a valid answer.')
}
// Asks the user the third question, evaluates, logs, and returns an alert.
var question_3 = prompt('Is Shane\'s birthday ever on Thanksgiving?');
if (question_3.toUpperCase() === 'YES' || question_3.toUpperCase() === 'Y') {
   // console.log('The user has guessed question 3 correctly.');
    alert('Good job. You guessed correctly. Shane\'s birthday is sometimes on Thanksgiving. However, not this year.');
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
} else if (question_5.toUpperCase() === 'NO' || question_5.toUpperCase() === 'N') {
   // console.log('The user has guessed question 5 incorrectly.');
    alert('Oops. You have guessed incorrectly. Shane is allergic to dairy.');
} else {
   // console.log('The user has provided an invalid answer to question 5.');
    alert('Sorry, that is not a valid answer');
}
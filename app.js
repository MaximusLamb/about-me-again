import isYes from './isYes.js';

const quizButton = document.getElementById('button');
const result = document.getElementById('quizAnswers');

function doQuizzings() {
    let rightAnswers = 0;
    let name = '';

    alert('Welcome to this friggin test');

    const correct = confirm('Are you sure?');
    if (correct === false) {
        return;
    }

    const firstName = prompt('What is your First Name?');
    name = firstName;

    const lastName = prompt('What is your Last name?');
    name = name + ' ' + lastName;

    const dadsName = prompt('Is my dads name Steven?');

    if (isYes(dadsName) === false) {
        rightAnswers++;
    }

    const limbs = prompt('Do I still have all of my limbs?');

    if (isYes(limbs) === true) {
        rightAnswers++;
    }

    const lacrosse = prompt('Did I play lacrosse?');

    if (isYes(lacrosse) === false) {
        rightAnswers++;
    }

    let response = 'Your name is ' + name;

    if (rightAnswers === 0) {
        response += ' And you know nothing!';
    }

    if (rightAnswers === 1) {
        response += ' And you got 1/3!';
    } 

    if (rightAnswers === 2) {
        response += ' And you got 2/3!!';
    }
    if (rightAnswers === 3)
        response += ' And you got 3/3!!!';


    result.textContent = response;

}



quizButton.addEventListener('click', doQuizzings);
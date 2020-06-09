/*
When our users are studying flashcards, 
they will likely want to try to guess the answer before they see
and then show the hint if they get stuck.
The challenge is to write some JavaScript 
to hide the hint by default and present a 
button the user can click to reveal the hint
*/

// [1] hide Hint
const hint = document.querySelector('#content > i');
//const showHint = document.querySelector('.card-flip')

//hint.style.display = 'none';

const button = document.createElement('BUTTON');
button.setAttribute('id','showHint');
button.innerHTML = "Show Hint";

const buttonDiv = document.createElement('DIV');
buttonDiv.setAttribute('id','buttonDiv');

const contentDiv = document.getElementsByClassName('card-flip-wrap');

buttonDiv.prepend(contentDiv);


// showHint.addEventListener('click', () => {
//     hint.style.display = 'block';

// })
console.log(contentDiv)

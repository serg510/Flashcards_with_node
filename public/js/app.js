/*
When our users are studying flashcards, 
they will likely want to try to guess the answer before they see
and then show the hint if they get stuck.
The challenge is to write some JavaScript 
to hide the hint by default and present a 
button the user can click to reveal the hint
*/
// div id="content">
//   <h2>What is one way a website can store data in a user's browser?</h2>
//   <button>Show hint</button>
//   <p class="hint" style="display: none;"><i>They are delicious with milk</i></p>
// </div>

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

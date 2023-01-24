let inputEl = document.querySelector('.name__input')[0];
let buttonEl = document.querySelector('.name__button')[0];
let resultEl = document.querySelector('.result-number')[0];

console.log(inputEl);
console.log(buttonEl);
console.log(resultEl.textContent);

const URL = "https://api.agify.io?name=";

let guessAge = (userName) =>
let urlConcat = URL + userName.value;
fetch (urlConcat)


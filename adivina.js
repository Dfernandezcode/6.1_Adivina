let elementInput = document.getElementById('name__input');

function printResult(age) {
	let resultEl = document.getElementById('result__age');
	resultEl.textContent = age;
}

const URL = 'https://api.agify.io?name=';

function guessAge(name) {
	let urlFinal = URL + name;

	fetch(urlFinal)
		.then((resp) => resp.json())
		.then((resp) => {
			if (resp.age === null) {
				let resultAge = document.getElementById('result__age');
				resultAge.textContent = '-';
				throw new Error("Couldn't find age");
			} else {
				printResult(resp.age);
			}
		})
		.catch((error) => console.log(error));
}

let nameButton = document.getElementById('name__button');
nameButton.addEventListener('click', function () {
	guessAge(elementInput.value);
});

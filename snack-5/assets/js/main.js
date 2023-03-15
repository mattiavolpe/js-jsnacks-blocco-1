/*
Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const numbers = [];

for (let i = 1; i <= 6; i++) {
  let currentNumber;
  do {
    currentNumber = Number(prompt("Inserisci un numero"));
  } while (currentNumber == "");
  currentNumber % 2 != 0 ? numbers.push(currentNumber) : "";
}

console.log(numbers);



/* WHILE VERSION */

const numbersWhile = [];
let i = 1;
while (i <= 6) {
  let currentNumber;
  do {
    currentNumber = Number(prompt("Inserisci un numero"));
  } while (currentNumber == "");
  currentNumber % 2 != 0 ? numbersWhile.push(currentNumber) : "";
  i++;
}

console.log(numbersWhile);
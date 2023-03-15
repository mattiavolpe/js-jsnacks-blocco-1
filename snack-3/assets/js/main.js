/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// TOOLS
// const / let
// if / else
// for

let sum = 0;
const insertedNumbers = [];

for (let i = 1; i <= 10; i++) {
  const number = Number(prompt(`${i}) Insert a number`));
  if (isNaN(number)) {
    i--;
  } else {
    sum += number;
    insertedNumbers.push(number);
  }

  // ALTERNATIVE SOLUTION WITH NO NUMBERS OUTPUT
  // isNaN(number) ? i-- : sum += number;
}

console.log("List of inserted numbers followed by their sum");

for (let i = 0; i < insertedNumbers.length; i++) {
  console.log(insertedNumbers[i]);
}

console.log(`The sum of the inserted numbers is ${sum}`);





/* WHILE VERSION */

let sumWhile = 0;
const insertedNumbersWhile = [];

let j = 1;

while (j <= 10) {
  const number = Number(prompt(`${j}) Insert a number`));
  if (isNaN(number)) {
    j--;
  } else {
    sumWhile += number;
    insertedNumbersWhile.push(number);
  }

  j++;

  // ALTERNATIVE SOLUTION WITH NO NUMBERS OUTPUT
  // isNaN(number) ? j-- : sum += number;
}

console.log("List of inserted numbers followed by their sum");

let k = 0;

while (k < insertedNumbers.length) {
  console.log(insertedNumbersWhile[k]);
  k++;
}

console.log(`The sum of the inserted numbers is ${sumWhile}`);
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
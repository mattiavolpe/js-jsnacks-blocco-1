// L'utente inserisce due numeri in successione, con due prompt. l software stampa il maggiore

// TOOLS
// const / let
// if / else
// console.log

const firstNumber = Number(prompt("Insert the first number"));
const secondNumber = Number(prompt("Insert the second number"));

if (firstNumber === secondNumber) {
  console.log("The inserted numbers are the same");
} else if (firstNumber > secondNumber) {
  console.log("The first number is bigger than the second");
} else {
  console.log("The second number is bigger than the first");
}
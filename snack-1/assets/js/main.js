// L'utente inserisce due numeri in successione, con due prompt. l software stampa il maggiore

// TOOLS
// const / let
// if / else
// console.log

const firstNumber = Number(prompt("Insert the first number"));
const secondNumber = Number(prompt("Insert the second number"));

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert("You should insert two numbers");
} else {
    if (firstNumber === secondNumber) {
      console.log("The inserted numbers are the same");
    } else if (firstNumber > secondNumber) {
      console.log(`The first number ${firstNumber} is bigger than the second ${secondNumber}`);
    } else {
      console.log(`The second number ${secondNumber} is bigger than the first ${firstNumber}`);
    }
}
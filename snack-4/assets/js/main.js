/*
Snack 4 (sia con for che con while):
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const authorizedPeople = ["Mattia", "Alexandro", "Luca", "Fabio", "Donato", "Giuliano", "Roberto", "Luigi", "Mario"];
let authorized = false;

let userName = "";

do {
  userName = prompt("Inserisci il tuo nome: ");
} while (userName == "");

for (let i = 0; i < authorizedPeople.length; i++) {
  authorizedPeople[i] === userName ? authorized = true : false;
}

alert(`Ciao ${userName}. ${authorized ? "Sei nella lista degli invitati" : "Non sei nella lista degli invitati"}`);

/* WHILE VERSION */

// Snack1
// Chiedi all'utente un valore minimo ed un valore massimo.
// Genera un numero casuale all'interno del range fornito dall'utente.

// CHIEDERE all'utente un valore minimo e uno massimo
const numberMin = parseInt(prompt("Inserisci numero minimo"));
const numberMax = parseInt(prompt("Inserisci numero massimo"));
// Genera un numero casuale all'interno del range fornito dall'utente.
const randomNumber = Math.floor(Math.random() * numberMax - numberMin) - numberMin + 1;
console.log(randomNumber);
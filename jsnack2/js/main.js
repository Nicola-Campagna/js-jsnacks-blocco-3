// Snack2
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// Array
const arrayNumbers = [];
let sumUserNumber = 0;


while (sumUserNumber < 50) {
    const userNumber = parseInt(prompt("scegli un numero"));
    arrayNumbers.push(userNumber);
    sumUserNumber += userNumber;
}
console.log(arrayNumbers);
console.log(sumUserNumber);
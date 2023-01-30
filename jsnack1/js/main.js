// Snack1
// Chiedi all'utente un valore minimo ed un valore massimo.
// Genera un numero casuale all'interno del range fornito dall'utente.

// CHIEDERE all'utente un valore minimo e uno massimo
const minValue = parseInt(prompt("Scegliere valore minimo:"));
console.log(minValue);
const maxValue = parseInt(prompt("Scegliere valore massimo:"));
// console.log(maxValue, minValue);

// (numero casuale nel range tra i due valori)
let rangeNumber = 0;

let i = 0;
while (
    rangeNumber > minValue ||
    rangeNumber < maxValue
) {
    rangeNumber = (Math.floor((Math.random() * 100) + 1));

    i++
}

if (rangeNumber) {
    console.log(rangeNumber);
}






















// Snack2
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
// Snack3
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.
// Snack4(Bonus)
// Fai inserire un numero all'utente. Poi continua a chiedere numeri finché la serie è crescente (l'ultimo numero inserito deve essere maggiore del precedente). Alla fine stampali tutti.
//     Snack5(Bonus #2)
// Genera un numero a caso compreso tra 1 - 100. Chiedi all’utente un numero fino a quando non indovina quello generato casualmente.Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato. Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente
// Snack3
// Fai inserire un numero, che chiameremo N, all'utente.
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

// Fai inserire un numero, che chiameremo N, all'utente.
const n = parseInt(prompt("Inserisci N"));

// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
let i = 0;
while (i < n) {
    const generateArray = [];

    let y = o;
    while (y < 10) {
        const randomNumber = Math.floor((Math.random() * 100) + 1);
        generateArray.push(randomNumber);
        y++
    }


    console.log(generateArray);
    i++
}


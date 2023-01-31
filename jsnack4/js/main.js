// Snack4 (Bonus)
// Fai inserire un numero all'utente.
// Poi continua a chiedere numeri finché la serie è crescente
// (l'ultimo numero inserito deve essere maggiore del precedente).
// Alla fine stampali tutti.


let numeroMinore = parseInt(prompt("inserisci numero"));
let numeroMaggiore = parseInt(prompt("inserisci un secondo numero"));

const tutti_i_numeri = [
    numeroMaggiore,
    numeroMinore
]

while (numeroMaggiore > numeroMinore) {
    numeroMinore = numeroMaggiore;
    numeroMaggiore = parseInt(prompt("inserisci nuovamente un'altro numero"));
    tutti_i_numeri.push(numeroMaggiore);
}

console.log(tutti_i_numeri);
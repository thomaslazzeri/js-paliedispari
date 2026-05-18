//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//L'utente sceglie pari o dispari
const utente = prompt("scegli pari o dispari");
const numero = prompt("Scegli un numero da 1 a 5");

//Generiamo un numero casuale per il computer da 1 a 5
function genRandomNumbers() {
    // Math.floor() arrotonda il numero decimale verso il basso all'intero più vicino
    // Math.random() genera un numero decimale casuale tra 0 (incluso) e 1 (escluso)
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    // Return restituisce il numero casuale generato
    return randomNumber;
}
//Chiama la funzione per generare un numero casuale per il computer
const computer = genRandomNumbers();
console.log(computer);
//Sommiamo i due numeri
const somma = computer + parseInt(numero);
console.log(somma);
//Stabiliamo se la somma dei due numeri è pari oppure dispari
for (let i = 0; i < 1; i++) {
    // Se la somma è divisibile per 2, allora è pari, altrimenti è dispari
    if (somma % 2 === 0) {
        console.log("La somma è pari");
    }
    else {
        console.log("La somma è dispari");
    }
}
//Dichiariamo chi ha vinto
if ((somma % 2 === 0 && utente === "pari") || (somma % 2 !== 0 && utente === "dispari")) {
    console.log("Hai vinto!");
}
else {
    console.log("Hai perso!");
}
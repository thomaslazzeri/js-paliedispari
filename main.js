//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//L'utente inserisce una parola
const utenteParola = prompt("Inserisci una parola");
//Creiamo una funzione per capire se la parola inserita è palindroma
function palindroma(parola) {
    // Controlla se l'utente ha premuto 'Annulla'
    if (parola === null) {
        return;
    }
    //Rimuove gli spazi e converte tutto in minuscolo
    //Il regex /\s+/g trova tutti gli spazi e li sostituisce con stringhe vuote
    let parolaPulita = parola.toLowerCase().replace(/\s+/g, '');

    //Inverto la parola
    const parolaInvertita = parolaPulita.split("").reverse().join("");
    //Confronto la parola originale con quella invertita e se sono uguali, la parola è palindroma
    if (parolaPulita === parolaInvertita) {
        return "La parola è palindroma";
    }
    //Se non sono uguali, la parola non è palindroma
    else {
        return "La parola non è palindroma";
    }
}
//Verifico su browser in console
console.log(palindroma(utenteParola));
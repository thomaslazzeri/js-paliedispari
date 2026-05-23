//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//L'utente inserisce una parola
const utenteParola = prompt("Inserisci una parola");
//Creiamo una funzione per capire se la parola inserita è palindroma
function palindroma(parola) {
    let risultato = true;

    for (let i = 0; i < parola.length / 2; i++) {
        if (parola[i] !== parola[parola.length - 1 - i]) {
            risultato = false
        }
    }
    return risultato;
}
const abc = palindroma(utenteParola);
console.log(abc);


// Controlla se l'utente ha premuto 'Annulla'
//if (parola === null) {
//return;
//}
//Rimuove gli spazi e converte tutto in minuscolo
//Il regex /\s+/g trova tutti gli spazi e li sostituisce con stringhe vuote
//let parolaPulita = parola.toLowerCase().replace(/\s+/g, '');
//Inverto la parola
//const parolaInvertita = parolaPulita.split("").reverse().join("");
//Confronto la parola originale con quella invertita e se sono uguali, la parola è palindroma
//return (parolaPulita === parolaInvertita);
//}
//Verifico su browser in console
//if (palindroma(utenteParola)) {
//console.log("La parola è palindroma");
//} else {
//console.log("La parola non è palindroma");
//}
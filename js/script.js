//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 
//il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//chilometri che vuole percorrere l'utente
var chilometriUtente = prompt( ' Quanti chilometri vuoi percorrere? ' );
console.log(chilometriUtente);

var chilometriUtenteNumero = parseInt(chilometriUtente);
console.log(chilometriUtenteNumero);

//età del passeggero
var etaUtente = prompt( ' Quanti anni hai? ' );
console.log(etaUtente);

var etaUtenteNumero = parseInt(chilometriUtente);
console.log(etaUtenteNumero);

//prezzo biglietto (0.21€ al km)
var prezzoBiglietto = chilometriUtenteNumero * 0.21;
console.log(prezzoBiglietto);

//età inferiore a 18 anni, sconto del 20%

//età superiore ai 65 anni, sconto del 40%

//prezzo finale
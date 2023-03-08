/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//inerimento dati
const distanza = prompt('Quanta distanza devi percorrere in treno ?');
const età = prompt('Quanti hanni hai?');

//costi e sconti
const costoalKm = 0.21;
let costoBiglietto = (distanza * costoalKm);

const scontoMinorenni = (costoBiglietto * 0.20);
const scontoSenior = (costoBiglietto * 0.40);

//condizioni
if (età > 65){
    costoBiglietto=costoBiglietto - scontoSenior;
} else if (età < 18){
    costoBiglietto=costoBiglietto - scontoMinorenni;
}

//stampa
console.log(costoBiglietto)

document.getElementById('costoBiglietto').innerHTML=`<h2>${costoBiglietto}</h2>`
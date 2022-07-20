
// chiedere il numero di chilometri che vuole percorrere

// chiedere l’età del passeggero 

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.





// ------------------------------------------------------

// NUMERO CHILOMETRI

// dichiarazione variabile

const chilometri = parseInt(prompt('Quanti chilometri vuole percorrere? Inserire solo il numero')) 

// stamp variabile

console.log('numero di km : ' + chilometri)





// ------------------------------------------------------

// ETA' PASSEGGERO

// dichiarazione variabile

const etaPasseggero = parseInt(prompt('Quanti anni ha ? Inserire solo il numero'))

// stamp variabile

console.log('età del passeggero : ' + etaPasseggero)








// ---------------------------------------------------------

// PREZZO TOTALE del biglietto senza sconto applicato

const totalPrice = 0.21 * chilometri

// stamp variabile 

console.log('prezzo totale senza sconto : ' + totalPrice + ' \u20AC')

// \u20AC SIMBOLO DELL' EURO 





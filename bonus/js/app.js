
// chiedere il numero di chilometri che vuole percorrere

// chiedere l’età del passeggero 

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// Se l'età del passeggero è > 65
// il presso avrà sconto del 40%




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


// ---------------------------
// SCONTO 20% <18

const ventiPerc = (totalPrice * (1 - 0.2)).toFixed(2)
console.log('prezzo scontato 20% : ' + ventiPerc)

// SCONTO 40% >65

const quarantaPerc = (totalPrice * (1 - 0.4)).toFixed(2)
console.log('prezzo scontato 40% : ' + quarantaPerc)


// .toFixed alla fine del calcolo, tiene in considerazione solo un certo numero
// di cifre decimali, (2) ---> ne considera solo due





// -----------------------------
// dichiarare la variable con id = password con DOCUMENT + GET e prendendo la voce che rappresenta l'Id
const trainTicketDomElement = document.getElementById('train_price')
// controllare quale valore attribuire all' Id = password con CONSOLE.DIR
console.dir(trainTicketDomElement)


// stampiamo del contenuto nel nostro h1 con id password ,
//  trovando il valore che rappresenta il nostro testo, nell'elenco generato da console.dir
// nel nostro caso è INNER.HTML

// -------------------------------------

// variabile attenzione


// variabile per calcolare gli sconti legati a km ed età

if (isNaN(etaPasseggero)) {
    alert('attenzione non è un numero')
} else {
    if (etaPasseggero > 65) {
        trainTicketDomElement.innerHTML = (quarantaPerc)
        console.dir(trainTicketDomElement.innerHTML)

    } else if (etaPasseggero < 18) {
        trainTicketDomElement.innerHTML = (ventiPerc)
        console.dir(trainTicketDomElement.innerHTML)
    }
    else {
        trainTicketDomElement.innerHTML = (totalPrice)
        console.dir(trainTicketDomElement.innerHTML)
    }
}





//Dato l’array di nomi:
//const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
//e dati due numeri min e max (min più piccolo di max).
//Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
//Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const min = 2;
const max = 4;
const newArray = [];

myArray.forEach(function (element, indice) {
    if (indice >= min && indice <= max) {
        newArray.push(element);
    }
});


console.log(newArray);

const newArray2 = myArray.filter(function (element, indice) {
    if (indice >= min && indice <= max) {
        return element;
    }
});

console.log(newArray2);
// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

class Zucchina {
    constructor(peso, lunghezza) {
        this.peso = peso;
        this.lunghezza = lunghezza;
    }
}

const zucchine = [];
let tot = 0;

for (let i = 0; i < 10; i++) {
    let peso = randomNumber(1, 10);
    let lunghezza = randomNumber(1, 20);
    zucchine.push(new Zucchina(peso, lunghezza));
    
    tot+= zucchine[i].peso;
}

console.log(zucchine);
console.log(tot);


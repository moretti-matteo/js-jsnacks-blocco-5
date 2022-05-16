// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

class Zucchina {
    constructor(peso, lunghezza) {
        this.peso = peso;
        this.lunghezza = lunghezza;
    }
}


const zucchineLeggere = [];
let pesoZucchineLeggere = 0;
const zucchinePesanti = [];
let pesoZucchinePesanti = 0;


for (let i = 0; i < 10; i++) {
    let peso = randomNumber(1, 10);
    let lunghezza = randomNumber(1, 30);
    let zucchina = new Zucchina(peso, lunghezza);

    if (zucchina.lunghezza >= 15) {
        zucchinePesanti.push(zucchina);
        pesoZucchinePesanti += zucchina.peso;

    } else {
        zucchineLeggere.push(zucchina);
        pesoZucchineLeggere += zucchina.peso;
    }
}

console.log(`Le zucchine leggere pesano ${pesoZucchineLeggere}`);
console.log(`Le zucchine pesanti pesano ${pesoZucchinePesanti}`);





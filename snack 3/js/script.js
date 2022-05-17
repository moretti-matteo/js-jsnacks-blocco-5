// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

const cars = [
    {
        marca: "bmw",
        modello: "i8",
        alimentazione: "elettrico"
    },
    {
        marca: "audi",
        modello: "r8",
        alimentazione: "benzina"
    },
    {
        marca: "fiat",
        modello: "punto",
        alimentazione: "diesel"
    },
    {
        marca: "bugatti",
        modello: "veyron",
        alimentazione: "benzina"
    },
    {
        marca: "ford",
        modello: "fiesta",
        alimentazione: "gpl"
    },
    {
        marca: "audi",
        modello: "tt",
        alimentazione: "benzina"
    },
    {
        marca: "toyota",
        modello: "yaris",
        alimentazione: "diesel"
    },
    {
        marca: "Ferrari",
        modello: "portofino",
        alimentazione: "benzina"
    },
    {
        marca: "Mercedes",
        modello: "maybach",
        alimentazione: "gpl"
    },
    {
        marca: "bmw",
        modello: "i3",
        alimentazione: "elettrico"
    },
]

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.

const carBenzina = cars.filter(car => car.alimentazione === "benzina");
const carDiesel = cars.filter(car => car.alimentazione === "diesel");
const otherCars = cars.filter(car => car.alimentazione !== "diesel" && car.alimentazione !== "benzina");

console.log("benzina = ", carBenzina);
console.log("Diesel = ", carDiesel);
console.log("Altre = ", otherCars);
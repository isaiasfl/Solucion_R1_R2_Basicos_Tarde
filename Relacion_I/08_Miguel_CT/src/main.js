import { encontrarMaxMin, encontrarMaxMin2 } from "./helpers/script";

const a = [1, 5, 27, 9];

//---------------------- Testing ejercicio 8 --------------------

const resultado = encontrarMaxMin(a);

console.log("Esta es la version 1");
console.log(resultado); // { max: 9, min: 1 }
console.log(); // Error: El array debe tener al menos un elemento o ser un array de números

//---------------------- Testing ejercicio 8 V2 --------------------

const resultado2 = encontrarMaxMin2(a);

console.log("Esta es la version 2");
console.log(resultado2); // { max: 9, min: 1 }
console.log(); // Error: El array debe tener al menos un elemento o ser un array de números

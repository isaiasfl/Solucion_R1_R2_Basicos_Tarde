import { concatenarPalabras } from "./helpers/scripts";

const palabras = ["Hola", "mundo", "esto", "es", "JavaScript"];

console.log(concatenarPalabras(palabras));

// ----- Tests ------

console.log(concatenarPalabras()); // Error: El parámetro debe ser un array no vacío
console.log(concatenarPalabras([])); // Error: El parámetro debe ser un array no vacío
console.log(concatenarPalabras([1, 2, 3, 4, 5])); // Error: Todos los elementos del array deben ser strings

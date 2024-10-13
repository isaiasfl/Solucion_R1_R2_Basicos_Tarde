/**
 * 
 * @author: Samuel Reche Sanmartin
 */
// Usa el método find para obtener el primer número divisible por 3 de un array,
// y findIndex para obtener su índice.


const numeros = [4, 5, 9, 12, 7];
import { obtenerDivisiblePor3,obtenerIndiceDivisiblePor3 } from "../helpers/script";

const primerDivisiblePor3 = obtenerDivisiblePor3(numeros);
const indiceDivisiblePor3 = obtenerIndiceDivisiblePor3(numeros);

console.log("Primer número divisible por 3:", primerDivisiblePor3); // Salida: 9
console.log("Índice del primer número divisible por 3:", indiceDivisiblePor3); // Salida: 3


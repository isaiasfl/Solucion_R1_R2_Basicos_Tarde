/**
 * @author Jaime Lozano Lozano
 * @description Test de la funcion sumaArrays
 */
// IMPORTACIONES
import { sumaArrays } from "./helpers/script.js";

// VARIABLES
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 5, 6, 3];

// -------- Testing de la funcion sumaArrays --------
console.log(sumaArrays(arr1, arr2)); // [3, 7, 9, 7]

console.log(sumaArrays(arr1, 'hola')); // Error: Los parámetros deben ser arrays

console.log(sumaArrays([1,2], arr2)); // Error: Los arrays deben tener el mismo tamaño

console.log(sumaArrays([], [])); // Error: Los arrays deben que tener valores

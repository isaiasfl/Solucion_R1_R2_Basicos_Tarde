

/**
 * Ejercicio 2: Duplicados 
Define una función llamada eliminarDuplicados que tome un array arr . 
La función debe eliminar los elementos duplicados y devolver un nuevo array con elementos únicos, manteniendo el orden original.
 */

import { eliminarDuplicados } from "./helpers/script";

const arrayDuplicados = [1,2,2,2,3,4,5,5,1];

// Comprobación
console.log(eliminarDuplicados(arrayDuplicados)); // [1, 2, 3, 4, 5]
console.log(eliminarDuplicados()); // No se ha pasado un array como parámetro.


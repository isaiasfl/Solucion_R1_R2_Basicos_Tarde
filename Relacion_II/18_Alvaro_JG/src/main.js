import { combinarArrays } from "./helpers/scripts";

console.log(combinarArrays("decreciente", [1, 2, 3, 4], [5, 6, 7, 8]));

// --- Tests ----

console.log(combinarArrays([1, 2, 3, 4], [5, 6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(combinarArrays([9, 6, 7, 8])); // [6, 7, 8, 9]
console.log(combinarArrays()); //  Error: Todos los parámetros de números deben ser arrays
console.log(combinarArrays("creciente", 1)); // Error: Todos los parámetros de números deben ser arrays

/**
 * @author Jaime Lozano Lozano
 * @description Test Ejercicio básico 10
 */
// IMPORTACIONES

import { copiaObjetoConPropiedadAdicional } from "./helpers/script.js";

// VARIABLES
const configuracion = { tema: "oscuro", idioma: "español" };
const nuevaPropiedad = { colorPrincipal: "rojo" };

// -------- Testing de la funcion copiaObjetoConPropiedadAdicional --------
console.log(copiaObjetoConPropiedadAdicional(configuracion, nuevaPropiedad)); //{tema: 'oscuro', idioma: 'español', colorPrincipal: 'rojo'}

console.log(copiaObjetoConPropiedadAdicional(configuracion, 1)); //Error: Ambos parámetros deben ser "objeto"

console.log(copiaObjetoConPropiedadAdicional([1, 2 ,3], nuevaPropiedad)); //Error: Ambos parámetros deben ser "objeto"

console.log(copiaObjetoConPropiedadAdicional(configuracion)); //Error: Debes dar ambos parámetros 
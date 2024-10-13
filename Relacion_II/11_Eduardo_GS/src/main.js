import { mapearNumeros } from "./helpers/script";

//------------------- Testing ejercicio_11 -----------------------

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const elevarAlCuadrado = (num) => num ** 2;

const res = mapearNumeros(numeros,elevarAlCuadrado);

console.log(res);
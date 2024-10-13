import { buscarElemento } from "./helpers/script";

const array = [10,20,30,40,50,60];

const array2 = []; 


//----------------------Test funcionando------------------------

console.log(buscarElemento(array,30));

//----------------------Test elemento no encontrado------------------------

console.log(buscarElemento(array,70));

// --------------------test no hay elemento------------------------

console.log(buscarElemento(array,));

//--------------------Test array vacio------------------------

console.log(buscarElemento(array2,30));

// --------------------Test array incorrecto------------------------

console.log(buscarElemento("array",30));




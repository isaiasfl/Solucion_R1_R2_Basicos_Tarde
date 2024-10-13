

/**
 * @description Dado un array de números, usa forEach para sumar todos los números.
 * @param {Array<number>} listaNumeros 
 * @returns {number} sumaNumeros
 */
export const sumaNum = ( (listaNumeros) => {

    // Compruebo que es un array
    if(!Array.isArray(listaNumeros)){
        throw new Error("El argumento no es un array");
    }

    let sumaNumeros = 0;
    listaNumeros.forEach( (numero) => {sumaNumeros += numero});
    return sumaNumeros;
} ); 

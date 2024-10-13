/*Escribe una función llamada dividirFragmento que tome un array arr y un número entero
tamano . La función debe dividir el array en fragmentos de tamaño tamano y devolver un nuevo
array con los Fragmentos. */

/**
 * @description función que toma un array y un número, y divide el array en fragmentos de tamaño
 * @author Adrian AL
 * @param {Array} 
 * @param {number}
 * @returns {Array}
 */

export function dividirFragmento (array,number){
    // Validar que el array y el número sean del tipo correcto
    if (!Array.isArray(array) || typeof number!== 'number' || number <= 0) {
        throw new Error('Los argumentos deben ser un array y un número positivo');
    }
    
    // Dividir el array en fragmentos de tamaño number
    const fragmentos=[];
    for (let i = 0; i < array.length; i++) {
        const fragmento = array.slice(i, i + number);
        fragmentos.push(fragmento);

    }
    
    
    // Devolver el nuevo array con los fragmentos
    return fragmentos;
}
/**
 * @author Jaime Lozano Lozano
 * @description Ejercicio 1: Escribe una función llamada sumaArrays que tome dos arrays arr1 y arr2 del mismo tamaño. La función debe devolver un nuevo array que contenga la suma de los elementos correspondientes de arr1 y arr2 .
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array}
 */
export const sumaArrays = (arr1, arr2) => {
    //Compruebo los arrays
    if (!Array.isArray(arr1) ||!Array.isArray(arr2)) {
        throw new Error('Los parámetros deben ser arrays');
    }

    if (arr1.length!== arr2.length) {
        throw new Error('Los arrays deben tener el mismo tamaño');
    }

    if ((arr1.length === 0) || (arr2.length === 0)) {
        throw new Error('Los arrays deben que tener valores');
    }

    //Devuelvo los arrays ya sumados en un nuevo array
    return arr1.map((newNum, num) => newNum + arr2[num]);
}
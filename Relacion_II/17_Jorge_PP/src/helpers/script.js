/**
 * 
 * @description Función que multiplica todos los elementos de una matriz por un número
 * @param {Array, Number} matriz, escalar
 * @returns {Array}
 */
export function multiplicarMatrizPorEscalar(matriz, escalar) {
    const a = matriz.map(array => {
        return array.map(number => {
          return number * escalar;
        })
    });
    return a;
}

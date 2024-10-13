
/**
 * @author Samuel RS
 * @description Encuentra el primer número divisible por 3
 * @param {Array} array 
 * @returns 
 */
export const obtenerDivisiblePor3 = (array) => {
    return array.find(numero => numero % 3 === 0);
};

/**
 * @author Samuel RS
 * @description Encuentra el indice del primer número dicisible por 3
 * @param {Array} array 
 * @returns 
 */
export const obtenerIndiceDivisiblePor3 = (array) => {
    return array.findIndex(numero => numero % 3 === 0);
};

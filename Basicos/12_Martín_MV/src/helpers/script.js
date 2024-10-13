/**
 * @author Martín Marín - 09/10/24
 */

/**
 * Ejercicio 12: Escribe una función llamada combinarObjetos que tome dos objetos (tanto arrays como 
 * objetos) obj1 y obj2 . La función debe combinar ambos objetos en uno solo y devolverlo.
 * 
 * @param {Object} libro 
 * @param {Object} pedido 
 * @returns {Object} Un objeto con los campos de los dos objetos introducidos.
 */
export const mixObjs = (obj1, obj2) => {
    console.log({ ...obj1, ...obj2 });
};
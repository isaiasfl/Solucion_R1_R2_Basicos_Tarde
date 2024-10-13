/**
 * 
 * @description Función que obtiene y muestra las claves de un objeto y luego sus valores
 * @param {Object} producto
 * @returns {}
 */
export function ejer8(producto) {
    console.log(Object.keys(producto)); // ['nombre', 'precio', 'stock']
    console.log(Object.values(producto)); // ['Laptop', 1000, 5]
}

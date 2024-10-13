/**
 * @author Samuel RS
 * @description Funcion para devolver el numero de veces que se repite cada palabra en un texto
 * @param {*} texto 
 * @returns 
 */
export function contarPalabras(texto) {
    const palabras = texto.match(/\b\w+\b/g) || [];
    
    const conteo = {};

    palabras.forEach(palabra => {
        conteo[palabra] = (conteo[palabra] || 0) + 1;
    });

    return conteo;
}

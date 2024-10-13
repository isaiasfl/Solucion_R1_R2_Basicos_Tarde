// Promdio Filas
//Escribe una funcion llamada promedioFillas que calcule el promedio de cada fila en una matriz (array bidimensional )y devuelva un array con los resultados

/**
 * @author:ivan
 * @description:Calcular promedio de una matriz 
 * @param {number[][]} matriz
 * @returns {Array} devuelve array con los promedios 
 */

export const  promedioFilas = (matriz) =>{
    if (!Array.isArray(matriz)) {
        throw new Error("El argumento debe ser un array.");
    }

    // Validación 2: Verificar si cada fila es un array
    if (matriz.length === 0) {
        throw new Error("La matriz no debe estar vacía.");
    }

    matriz.forEach((fila, indexFila) => {
        if (!Array.isArray(fila)) {
            throw new Error(`La fila ${indexFila + 1} no es un array.`);
        }

        // Validación 3: Verificar si los elementos de cada fila son números
        fila.forEach((numero, indexColumna) => {
            if (typeof numero !== 'number' || isNaN(numero)) {
                throw new Error(`El elemento en la posición [${indexFila + 1}][${indexColumna + 1}] no es un número válido.`);
            }
        });
    });
    return matriz.map(fila =>{
    const suma = fila.reduce((acc,numero) => acc+=numero,0);
    return suma / fila.length;
})

}

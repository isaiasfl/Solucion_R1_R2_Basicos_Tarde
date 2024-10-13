

/**
 * 
 * @param {Array} arr 
 * @description Eliminar los elementos duplicados de un array y devolver otro con elementos únicos manteniendo el orden original.
 * @returns {Array} arrayUnico
 */
export const eliminarDuplicados = ((arr) => {

    // Compruebo que se pasa un array por parámetro
    if (!Array.isArray(arr)){
        throw new Error("No se ha pasado un array como parámetro.");
    }
    const conjuntoUnico = new Set (arr);
    const arrayUnico = Array.from(conjuntoUnico);
    return arrayUnico;
});
/**
 * @author Jaime Lozano Lozano
 * @description Lorem Ipsum
 */


/**
 * @author Jaime Lozano Lozano
 * @description Ejercicio 10: Dado un objeto de configuración, usa Object.assign para crear una copia del objeto con una propiedad adicional.
 * @param {object} objectConfig
 * @param {object} newPropiedad
 * @returns {object}
 */
export const copiaObjetoConPropiedadAdicional = (objectConfig, newPropiedad) => {
    //Compruebo objetoBase y newPropiedad
    if (!objectConfig || !newPropiedad) {
        throw new Error('Debes dar ambos parámetros');
    }

    if (typeof(objectConfig) !== 'object' || typeof(newPropiedad) !== 'object' || Array.isArray(objectConfig) || Array.isArray(newPropiedad) ||  objectConfig === null || newPropiedad === null) {
        throw new Error('Ambos parámetros debe ser un objeto');
    }

    //Creo la copia del objeto con la nueva propiedad
    const copiaPropiedadNueva = Object.assign(objectConfig, newPropiedad);

    //Devuelvo la copia del objeto
    return copiaPropiedadNueva;
}
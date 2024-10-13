/**
 * @author Ismael Carballo Martin
 * @description Función que elimina el primer elemento que aparece 
 * @param {Array}
 * @returns {Array}
 */

export function eliminarElemento(arr,elemento){
    //1. Buscamos el indice del elemento que queremos borrar
    const index=arr.indexOf(elemento);
    //2. Si el indice es mayor o igual que 0 y el elemento se encuentra en la posicion en index se eliminará
    index>=0 && arr.splice(index, 1);
    //3. devolver el array con el elemento eliminado
    return arr;
};
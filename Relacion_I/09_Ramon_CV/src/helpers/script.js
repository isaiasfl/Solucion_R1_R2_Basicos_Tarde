


/**
 * @author Ramon Carrasco
 * @description
 * //Crea una función llamada buscarElemento que tome un array arr y un elemento elemento . La
//función debe devolver el índice de la primera aparición de elemento en el array, o -1 si no se
//encuentra.
 * @param {array} arr 
 * @param {element} elemento 
 * @returns 
 */
export const buscarElemento=(arr,elemento)=>{
    if (!Array.isArray(arr) || arr.length === 0) {
        return "No has introducido un array o el array introducido esta vacio"; 
    }
  
    if (elemento === undefined || elemento === null) {
        return "introduce un elemento valido"; 

    }
    return arr.indexOf(elemento)
}
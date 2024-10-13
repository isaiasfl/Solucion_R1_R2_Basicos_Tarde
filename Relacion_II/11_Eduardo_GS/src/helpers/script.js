/**
 * @author Eduardo Guerra
 * @description Define una función llamada mapearNumeros que toma dos argumentos: un array arr y una función funcion. 
 * La función debe aplicar la función proporcionada a cada elemento del array y  
 * devolver un nuevo array con los resultados de la función aplicada a cada elemento.
 */

export function mapearNumeros(arr, funcion) {
    
    return arr
        //Filtramos los elementos que solo son numeros
        .filter(elemento => typeof elemento === 'number') 
        //Devolvemos un array con los resultados de la funcion que se le aplica
        .map(funcion)
        
}
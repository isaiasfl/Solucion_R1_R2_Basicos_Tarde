
/**
 * @author Eduardo Guerra
 * @description Dado un array de números, utiliza los métodos filter y map para obtener los números pares y elevarlos al cuadrado.
 */

export const ejercicio_1 = (arrayNumeros) =>{

    //Nos aseguramos que los valores del array sean solo numeros
    arrayNumeros = arrayNumeros.filter(numero => typeof numero === 'number');

    //Guardamos en una variable, que pasara a aser un array, los numeros pares
    //Tomamos el array que nos pasan, le aplicamos un filter, tomando que cada valor "numero" al dividirse por 2, sea 0
    const numerosPares = arrayNumeros.filter(numero => numero % 2 === 0); 

    //Guardamos en una variable los numeros cuadrados
    //Tomamos el valor del array con los numeros pares filtrados anteriormente
    //Aplicamos un map, tomando cada numero para elevarlo al cuadrado
    const numerosCuadrados = numerosPares.map(numero => numero ** 2);

    console.log(numerosCuadrados);
}
/**
 * @author Raúl GC
 * @description Ejercicios relacion II 
 */


// ------------------------Ejercicio 16--------------------------------
/**
 * @description Crea una función llamada capitalizarPalabras que tome una cadena y devuelva una nueva cadena en la que la primera letra de cada palabra esté en mayúscula y las demás en minúscula.
 */


export const capitalizarPalabras = (cadena) => (
    cadena.toLowerCase().split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ') //juntamos de nuevo las palabras en una cadena
);

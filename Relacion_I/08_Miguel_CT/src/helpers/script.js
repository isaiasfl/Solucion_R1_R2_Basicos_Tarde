/**
 * @author Miguel Cuadros Toral
 * @description Define una función llamada encontrarMaxMin que tome un array de números arr y devuelva un objeto con las propiedades max y min , que contengan el valor máximo y mínimo del array, respectivamente.
 * @param {Array} arr - Array de números
 * @returns {Object} - Objeto con las propiedades max y min
 */

export function encontrarMaxMin(arr) {
  // Validamos que el array tenga al menos un elemento
  if (arr.length === 0 || !arr.every((num) => typeof num === "number")) {
    throw new Error(
      "El array debe tener al menos un elemento o deber ser un array de números"
    );
  }

  // Inicializamos max y min con el primer elemento del array
  let max = arr[0];
  let min = arr[0];

  // Iteramos sobre el array desde el segundo elemento
  arr.forEach((numero) => {
    if (numero > max) {
      max = numero;
    }
    if (numero < min) {
      min = numero;
    }
  });
  // Creamos un objeto con las propiedades max y min y devuelve éste
  return { max, min };
}

export function encontrarMaxMin2(arr) {
  if (arr.length === 0 || !arr.every((num) => typeof num === "number")) {
    throw new Error(
      "El array debe tener al menos un elemento o deber ser un array de números"
    );
  }
  
  // Utilizamos la función Math.max y Math.min para obtener el máximo y mínimo del array
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return { max, min };
}

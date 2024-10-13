/**
 * @author Alvaro
 * @description Ejercicio Basico numero 2
 */

/**
 * @param {Array<string>} palabras - Array de palabras a concatenar
 * @returns {string} - Cadena de palabras concatenadas
 */
export const concatenarPalabras = (palabras) => {
  if (!Array.isArray(palabras) || palabras.length === 0) {
    throw new Error("El parámetro debe ser un array no vacío");
  }

  if (!palabras.every((palabra) => typeof palabra === "string")) {
    throw new Error("Todos los elementos del array deben ser strings");
  }

  return palabras.reduce((acc, palabra) => `${acc} ${palabra}`).trim();
};

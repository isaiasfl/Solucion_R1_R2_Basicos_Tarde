/**
 * @author Alvaro
 * @description Ejercicio 18 - Relacion II
 */

/**
 * @param {string} orden (creciente o decreciente) por defecto es creciente
 * @param  {...number} numeros (arrays numericos indefinidos)
 * @returns Array combinado ordenado segun se indique en el primer parametro
 */
export const combinarArrays = (orden = "creciente", ...numeros) => {
  if (Array.isArray(orden)) {
    numeros.unshift(orden);
    orden = "creciente";
  }
  if (
    typeof orden !== "string" ||
    !["creciente", "decreciente"].includes(orden)
  ) {
    orden = "creciente";
  }
  if (!numeros.length || !numeros.every(Array.isArray)) {
    throw new Error("Todos los parámetros de números deben ser arrays");
  }
  const combinedArrays = [].concat(...numeros);
  return combinedArrays.sort((a, b) =>
    orden === "decreciente" ? b - a : a - b
  );
};

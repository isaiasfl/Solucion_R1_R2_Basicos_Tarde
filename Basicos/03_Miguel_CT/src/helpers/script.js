/**
 * @author Miguel Cuadros Toral
 * @description Dado un array de números, usa some para verificar si existe algún número mayor a 100 y every para
comprobar si todos los números son positivos.
 * @param {Array<number>} numeros
 */

export const mayorCien = (numeros) => {
  if (
    !Array.isArray(numeros) ||
    numeros.some((numero) => typeof numero !== "number")
  ) {
    throw new Error("El argumento debe ser un array de números");
  }

  numeros.some((numero) =>
    numero > 100
      ? console.log(`${numero} es mayor a 100`)
      : console.log(`${numero} no son mayores de 100`)
  );
};

export const positivos = (numeros) => {
  if (
    !Array.isArray(numeros) ||
    numeros.some((numero) => typeof numero !== "number")
  ) {
    throw new Error("El argumento debe ser un array de números");
  }

  const todosPositivos = numeros.every((numero) => numero > 0);

  todosPositivos
    ? console.log("Todos son poristivos")
    : console.log("Algún número es negativo");
};

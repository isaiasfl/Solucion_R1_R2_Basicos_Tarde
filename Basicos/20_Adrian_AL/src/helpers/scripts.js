//Dado un array de objetos que representan compras con propiedades fecha y monto, usa sort para
//ordenar las compras por fecha (más reciente primero). Métodos sugeridos: sort

/**
 * @description ordernar un array de objetos con el metodo sort
 * @author Adrian AL
 * @param {Object}
 * @returns {Object}
 */

export const ordenarComprasPorFecha = (compras) => {
  return compras.sort((a, b) => b.fecha - a.fecha);
};



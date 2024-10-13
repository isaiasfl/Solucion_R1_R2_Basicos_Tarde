/**
 * @author Fernando RA
 * @description Funcion que combina 2 objetos
 * @param {Object} obj1 
 * @param {Object} obj2 
 * @returns {Object}
 */
export const combineObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

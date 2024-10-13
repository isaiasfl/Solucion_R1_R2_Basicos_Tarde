/**
 * @author Ismael Carballo Martin
 * @description Función que convierte las claves a mayúsculas
 * @param {Object}
 * @returns {Object}
 */

export function updateUpperCase (object) {
  //1. Sacamos las claves del objeto
  Object.keys(object).reduce((acc, clave) => {
    //2. Guardamos la clave en 'acc' y le hacemos un toUpperCase() para convertirlo en mayúsculas
    //3. La asignamos al nuevo objeto
    acc[clave.toUpperCase()] = object[clave];
    return acc;
  }, {});
};

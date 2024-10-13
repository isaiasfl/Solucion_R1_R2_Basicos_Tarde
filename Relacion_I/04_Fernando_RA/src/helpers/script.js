/**
 * @author Fernando RA
 * @description Funcion que une un numero indeterminado de arrays
 * @param  {...Array} args
 * @returns {Array}
 */
export const unirArrays = (...args) => {
  return args.reduce((acc, arr) => {
    acc = [...acc, ...arr];
    return acc;
  }, []);
};

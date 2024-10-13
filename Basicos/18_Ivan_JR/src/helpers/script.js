/*
                                        Ejercicio 18
--------------------------------------------------------------------------------------------------
Dado un objeto de empleados con sus salarios , usa Object.entries y reduce para calcular el salario
promedio.
--------------------------------------------------------------------------------------------------
*/


/**
 * @author Ivan
 * @description calculaer salario promedio
 * @param {Object}
 * @return {Number}
 */

export const promedio = (Objeto) =>{
    if (typeof Objeto !== 'object' || Objeto === null) {
        throw new Error("El argumento debe ser un objeto válido.");
    }
    const empleados = Object.entries(Objeto);
    if (empleados.length === 0) {
        throw new Error("El objeto no debe estar vacío.");
    }
 const salario  = empleados.reduce((total,[nombre,salarios]) =>{
    return total +=salarios;
 },0);
 const promedio = salario/empleados.length;
 return promedio;
};
// Dado un array de objetos que representan estudiantes, usa filter y map para obtener los nombres de
// los estudiantes que tienen una calificación mayor o igual a 85. Métodos sugeridos: filter, map
// // Enunciado
// const estudiantes = [
// { nombre: "Carlos", calificacion: 80 },
// { nombre: "Ana", calificacion: 90 },
// { nombre: "Luis", calificacion: 88 },
// { nombre: "María", calificacion: 70 },
// ];




/**
 * @author Ramon Carrasco
 * @description Dado un array de objetos que representan estudiantes, usa filter y map para obtener los nombres de
// los estudiantes que tienen una calificación mayor o igual a 85.
 * @param {array<Objet>} array 
 * @returns 
 */ 

export const studentsOver85=(array) => {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("El argumento debe ser un array");
    }
    
    array.forEach((objeto) => {
       if (typeof objeto.calificacion!== "number" || typeof objeto.nombre!== "string") {
            throw new Error("Los objetos deben tener una propiedad calificacion que sea un número");
        }
    });

    const students = array.filter((numero)=>numero.calificacion>=85).map((nombre)=>nombre.nombre);
    return students;
}
/**
 * @author MArtín Marín - 09/10/24
 */

/**
 * Ejercicio 12: Dado un objeto con varias propiedades, usa delete para eliminar una propiedad específica.
 */
const libro = { titulo: "1984", autor: "George Orwell", paginas: 328 };
delete libro.paginas;

console.log(libro);
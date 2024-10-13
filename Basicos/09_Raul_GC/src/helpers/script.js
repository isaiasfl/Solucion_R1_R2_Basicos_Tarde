/**
 * @author Raúl GC
 * @description Relacion de ejercicios basicos, Ejercicio 9.
 * 
 */

// ------------------------Ejercicio 9--------------------------------

/**
 * @description   Dado un objeto que representa un coche, usa Object.entries para convertirlo en un array de pares clave-valor.
 */

export const procesarCoche = (coche) => {
    const clavesCoche = Object.entries(coche);

    // validaremos los datos de la clave 
    console.assert(Array.isArray(clavesCoche), "El resultado de Object.entries debe ser un array");
    console.assert(clavesCoche.length === 3, "El resultado de Object.entries debe tener 3 elementos");

    // asignamos un valor por defecto 
    const marca = coche.marca || "desconocido";
    const modelo = coche.modelo || "desconocido";
    const año = coche.año || "desconocido";

    // Mensaje de advertencia en el caso de que nos falte un obj
    if (!coche.marca) {
        console.warn("Advertencia: Falta el valor 'marca'. Se ha asignado 'desconocido'.");
    }

    if (!coche.modelo) {
        console.warn("Advertencia: Falta el valor 'modelo'. Se ha asignado 'desconocido'.");
    }

    if (!coche.año) {
        console.warn("Advertencia: Falta el valor 'año'. Se ha asignado 'desconocido'.");
    }

    console.log(`El coche ${marca} ${modelo} del año ${año}`);
};


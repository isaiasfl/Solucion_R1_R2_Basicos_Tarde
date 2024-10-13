import { mayorCien, positivos } from "./helpers/script";

const numeros = [1, 50, 75, 99];
//------------------------------- Testing ejercico basico 3 ---------------------
mayorCien(numeros); // Ningun numero es mayor a 100

mayorCien(); // Error: El argumento no es una array de numeros

positivos(numeros); //Todos los numeros son positivos

positivos(); // Error: El argumento no es una array de numeros

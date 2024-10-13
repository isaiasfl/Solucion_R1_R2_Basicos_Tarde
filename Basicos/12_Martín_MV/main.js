import { mixObjs } from './src/helpers/script';

const libro = { titulo: "1984", autor: "George Orwell", paginas: 328 };
const pedido = ["Silla", 4, 50, "Calle Halcón"];

console.log(mixObjs(libro, pedido));
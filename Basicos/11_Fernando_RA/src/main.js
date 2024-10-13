import { combineObjects } from "./helpers/script";

const usuario = { nombre: "Ana", edad: 30 };
const detalles = { ciudad: "Madrid", ocupacion: "Ingeniera" };
console.log(combineObjects(obj1, obj2)); //{nombre: "Ana", edad: 30 , ciudad: "Madrid", ocupacion: "Ingeniera"  }
console.log(combineObjects({}, usuario)); //{ nombre: "Ana", edad: 30 };
console.log(combineObjects({}, {})); //{ }
